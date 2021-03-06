﻿namespace Game.Engine.Core
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Numerics;

    public class CaptureTheFlag : IActor
    {
        private World World = null;
        private List<Flag> Flags = new List<Flag>();
        private List<Base> Bases = new List<Base>();
        private List<Team> Teams = new List<Team>();

        public uint GameRestartTime { get; set; } = 0;
        public uint GameEmptySince { get; set; } = 0;

        public Leaderboard LeaderboardGenerator()
        {
            var entries = Teams.Select(t => new Leaderboard.Entry
            {
                Color = t.ColorName,
                Name = t.ColorName,
                Score = t.Score,
                Position = t.Flag?.Position ?? Vector2.Zero
            }).ToList();

            var players = Player.GetWorldPlayers(World);

            foreach (var team in Teams)
            {
                entries.AddRange(players
                    .Where(p => p.Color == team.ColorName)
                    .Where(p => p.IsAlive)
                    .Select(p => new Leaderboard.Entry
                    {
                        Color = team.ColorName,
                        Name = p.Name,
                        Position = p.Fleet?.FleetCenter ?? Vector2.Zero,
                        Score = p.Score
                    }));
            }

            return new Leaderboard
            {
                Type = "CTF",
                Time = World.Time,
                Entries = entries
            };
        }

        public Vector2 FleetSpawnPosition(Fleet fleet)
        {
            const int POINTS_TO_TEST = 50;
            const int MAXIMUM_SEARCH_SIZE = 4000;

            var color = fleet?.Owner?.Color;

            if (color != null)
            {
                var team = Teams.FirstOrDefault(t => t.ColorName == color);
                if (team != null)
                {
                    var points = new List<Vector2>();
                    int failsafe = 10000;

                    while(points.Count < POINTS_TO_TEST)
                    {
                        var position = World.RandomPosition();
                        if (Vector2.Distance(position, team.BaseLocation) < World.Hook.CTFSpawnDistance)
                            points.Add(position);

                        if (failsafe-- < 0)
                            throw new Exception("Cannot find qualifying location in CTF Spawn");
                    }

                    return points.Select(p =>
                    {
                        var closeBodies = World.BodiesNear(p, MAXIMUM_SEARCH_SIZE)
                                .OfType<Ship>();
                        return new
                        {
                            Closest = closeBodies.Any()
                                ? closeBodies.Min(s => Vector2.Distance(s.Position, p))
                                : MAXIMUM_SEARCH_SIZE,
                            Point = p
                        };
                    })
                    .OrderByDescending(location => location.Closest)
                    .First().Point;
                }
            }

            return Vector2.Zero;
        }

        private void CreateTeam(string teamName, string flagSpriteBase, Vector2 basePosition)
        {
            var team = new Team
            {
                BaseLocation = basePosition,
                ColorName = teamName
            };

            Teams.Add(team);

            var b = new Base(basePosition, team);
            var flag = new Flag(flagSpriteBase, team, b);
            b.Flag = flag;
            team.Flag = flag;

            flag.Init(World);
            b.Init(World);
            Flags.Add(flag);
            Bases.Add(b);


            flag.ReturnToBase();
        }

        void IActor.CreateDestroy()
        {
            if (World.Hook.CTFMode)
            {
                World.Hook.TeamMode = true;
            }

            if (World.Hook.CTFMode && Flags.Count == 0)
            {
                CreateTeam("cyan", "flag_blue", new Vector2(-World.Hook.WorldSize, -World.Hook.WorldSize));
                CreateTeam("red", "flag_red", new Vector2(World.Hook.WorldSize, World.Hook.WorldSize));
                World.FleetSpawnPositionGenerator = this.FleetSpawnPosition;
                World.LeaderboardGenerator = this.LeaderboardGenerator;
            }

            if (!World.Hook.CTFMode && Flags.Count > 0)
            {
                foreach (var flag in Flags)
                {
                    flag.Destroy();
                }

                foreach (var b in Bases)
                {
                    b.Destroy();
                }

                Flags.Clear();
                Bases.Clear();

                World.FleetSpawnPositionGenerator = null;
                World.LeaderboardGenerator = null;
            }
        }

        void IActor.Destroy()
        {
            World.Actors.Remove(this);
        }

        void IActor.Init(World world)
        {
            World = world;
            World.Actors.Add(this);
        }

        void IActor.Think()
        {

            if (GameRestartTime > 0 && World.Time > GameRestartTime)
            {
                GameRestartTime = 0;
                foreach (var team in Teams)
                {
                    team.Score = 0;
                    team.Flag.CarriedBy = null;
                    team.Flag.ReturnToBase();
                }

                foreach (var player in Player.GetWorldPlayers(World))
                {
                    player.Score = 0;
                }
            }

            foreach (var team in Teams)
            {
                if (team.Score >= 5 && GameRestartTime == 0)
                {
                    GameRestartTime = World.Time + 10000;
                }
            }


            var playerCount = Player.GetWorldPlayers(World)
                .Where(p => p.IsAlive).Count();

            if (playerCount == 0)
            {
                if (GameEmptySince == 0)
                    GameEmptySince = World.Time;
                else if (World.Time - GameEmptySince > 10000)
                    GameRestartTime = World.Time;
            }

            if (playerCount > 0)
                GameEmptySince = 0;
        }

        private class Team
        {
            public string ColorName { get; set; }
            public Vector2 BaseLocation { get; set; }
            public int Score { get; set; }
            public Flag Flag { get; set; }

            public void Scored()
            {
                Score++;
            }
        }

        private class Base : ActorBody, ICollide
        {
            private readonly Team Team;
            public Flag Flag { get; set; }
            private const float SPEED_SPINNING = 0.001f;
            private const float SPEED_STOPPED = 0f;

            public Base(Vector2 position, Team team)
            {
                this.Team = team;
                this.Position = position;
                this.Sprite = Sprites.ctf_base;
                this.AngularVelocity = SPEED_STOPPED;
                this.Size = 200;
            }

            public override void Think()
            {
                base.Think();

                this.AngularVelocity = FlagIsHome()
                    ? SPEED_SPINNING
                    : SPEED_STOPPED;
            }

            void ICollide.CollisionExecute(Body projectedBody)
            {
                var flag = projectedBody as Flag;

                this.Team.Scored();

                flag.ReturnToBase();
            }

            private bool FlagIsHome()
            {
                return Vector2.Distance(Flag.Position, this.Position)
                    < (Flag.Size + this.Size);
            }

            bool ICollide.IsCollision(Body projectedBody)
            {
                if (projectedBody is Flag flag)
                {
                    if (flag.Team == this.Team)
                    {
                        return false;
                    }

                    if (!FlagIsHome())
                    {
                        return false;
                    }

                    return Vector2.Distance(projectedBody.Position, this.Position)
                            < (projectedBody.Size + this.Size);
                }
                return false;
            }
        }

        private class Flag : ActorBody, ICollide
        {
            private readonly uint SpriteAnimationInterval = 100;
            public readonly Team Team;
            private readonly Base Base;

            private ActorGroup FlagGroup = new ActorGroup();
            private List<Sprites> SpriteSet = new List<Sprites>();
            private uint NextSpriteTime = 0;
            private int SpriteIndex = 0;
            public Fleet CarriedBy = null;

            public Flag(string baseSpriteName, Team team, Base b)
            {
                Size = 200;
                Team = team;
                Base = b;

                var i = 0;
                var done = false;

                while (!done)
                {
                    if (Enum.TryParse<Sprites>($"{baseSpriteName}_{i++}", out var result))
                    {
                        SpriteSet.Add(result);
                    }
                    else
                    {
                        done = true;
                    }
                }

                if (SpriteSet.Any())
                {
                    Sprite = SpriteSet[0];
                }
            }

            public override void Init(World world)
            {
                base.Init(world);

                FlagGroup.Init(world);
                FlagGroup.ZIndex = 10;
                this.Group = FlagGroup;
                Position = world.RandomPosition();
            }

            public override void Destroy()
            {
                base.Destroy();
                FlagGroup.Destroy();
            }

            public override void Think()
            {
                base.Think();

                if (CarriedBy?.Owner?.IsAlive ?? false
                    && !(CarriedBy?.Owner?.PendingDestruction ?? true))
                {
                    this.Position = CarriedBy.FleetCenter;
                    this.Momentum = CarriedBy.FleetMomentum;

                    //Console.WriteLine($"X:{CarriedBy.FleetMomentum.X} Y:{CarriedBy.FleetMomentum.Y}");
                }
                else
                {
                    if (CarriedBy != null)
                    {
                        CarriedBy.Burden = 0;
                    }

                    CarriedBy = null;
                    this.Momentum = new Vector2(0, 0);

                    if (World.DistanceOutOfBounds(this.Position) > 0 &&
                        this.Position != Vector2.Zero)
                        this.Momentum = Vector2.Normalize(-this.Position) * 0.1f;
                    else
                        this.Momentum = Vector2.Zero;
                }


                if (World.Time > NextSpriteTime)
                {
                    SpriteIndex = (SpriteIndex + 1) % SpriteSet.Count;

                    Sprite = SpriteSet[SpriteIndex];

                    NextSpriteTime = World.Time + SpriteAnimationInterval;
                }
            }

            public void ReturnToBase()
            {
                if (CarriedBy != null)
                {
                    CarriedBy.Burden = 0;
                }

                this.Position = Base.Position;
                this.CarriedBy = null;
            }

            void ICollide.CollisionExecute(Body projectedBody)
            {
                if (projectedBody is Ship ship)
                {
                    var fleet = ship.Fleet;

                    if (fleet != null && CarriedBy == null && !(fleet.Owner is Robot))
                    {
                        if (fleet.Owner.Color == Team.ColorName)
                        {
                            ReturnToBase();
                        }
                        else
                        {
                            CarriedBy = fleet;

                            if (CarriedBy != null)
                            {
                                CarriedBy.Burden = World.Hook.CTFCarryBurden;
                            }
                        }
                    }
                }
                if (projectedBody is Obstacle obstacle)
                {
                    CarriedBy = null;
                }
            }

            bool ICollide.IsCollision(Body projectedBody)
            {
                if (projectedBody is Ship ship)
                {
                    if (ship.Abandoned)
                    {
                        return false;
                    }

                    return Vector2.Distance(projectedBody.Position, this.Position)
                            < (projectedBody.Size + this.Size);
                }

                // consider dropping flags... drop is not working out well though
                /*if (projectedBody is Obstacle obstacle && CarriedBy != null)
                {
                    return Vector2.Distance(projectedBody.Position, this.Position)
                        < (projectedBody.Size + this.Size);
                }*/
                return false;
            }
        }
    }
}
