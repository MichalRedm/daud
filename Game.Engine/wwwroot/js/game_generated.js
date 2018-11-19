// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
export var Game = Game || {};

/**
 * @const
 * @namespace
 */
Game.Engine = Game.Engine || {};

/**
 * @const
 * @namespace
 */
Game.Engine.Networking = Game.Engine.Networking || {};

/**
 * @const
 * @namespace
 */
Game.Engine.Networking.FlatBuffers = Game.Engine.Networking.FlatBuffers || {};

/**
 * @enum
 */
Game.Engine.Networking.FlatBuffers.AllMessages = {
    NONE: 0,
    NetWorldView: 1,
    NetSpawn: 2,
    NetControlInput: 3,
    NetPing: 4,
    NetLeaderboard: 5
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboard}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboard=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboard}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.getRootAsNetLeaderboard = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboard()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.type = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.entries = function(index, obj) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.entriesLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.prototype.record = function(obj) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.startNetLeaderboard = function(builder) {
    builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} typeOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.addType = function(builder, typeOffset) {
    builder.addFieldOffset(0, typeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} entriesOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.addEntries = function(builder, entriesOffset) {
    builder.addFieldOffset(1, entriesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.createEntriesVector = function(builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addOffset(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.startEntriesVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} recordOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.addRecord = function(builder, recordOffset) {
    builder.addFieldOffset(2, recordOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboard.endNetLeaderboard = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.getRootAsNetLeaderboardEntry = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.name = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.score = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.color = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.prototype.position = function(obj) {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.Vec2()).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.startNetLeaderboardEntry = function(builder) {
    builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addName = function(builder, nameOffset) {
    builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} score
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addScore = function(builder, score) {
    builder.addFieldInt32(1, score, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colorOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addColor = function(builder, colorOffset) {
    builder.addFieldOffset(2, colorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} positionOffset
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.addPosition = function(builder, positionOffset) {
    builder.addFieldStruct(3, positionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetLeaderboardEntry.endNetLeaderboardEntry = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetSpawn = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetSpawn}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetSpawn=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetSpawn}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.getRootAsNetSpawn = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetSpawn()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.name = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.ship = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.prototype.color = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.startNetSpawn = function(builder) {
    builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.addName = function(builder, nameOffset) {
    builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} shipOffset
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.addShip = function(builder, shipOffset) {
    builder.addFieldOffset(1, shipOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colorOffset
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.addColor = function(builder, colorOffset) {
    builder.addFieldOffset(2, colorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetSpawn.endNetSpawn = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetControlInput = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetControlInput}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetControlInput=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetControlInput}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.getRootAsNetControlInput = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetControlInput()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.angle = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.x = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.y = function() {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.boost = function() {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.prototype.shoot = function() {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.startNetControlInput = function(builder) {
    builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} angle
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addAngle = function(builder, angle) {
    builder.addFieldFloat32(0, angle, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addX = function(builder, x) {
    builder.addFieldFloat32(1, x, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} y
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addY = function(builder, y) {
    builder.addFieldFloat32(2, y, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} boost
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addBoost = function(builder, boost) {
    builder.addFieldInt8(3, +boost, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} shoot
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.addShoot = function(builder, shoot) {
    builder.addFieldInt8(4, +shoot, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetControlInput.endNetControlInput = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetPing = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetPing}
 */
Game.Engine.Networking.FlatBuffers.NetPing.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetPing=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetPing}
 */
Game.Engine.Networking.FlatBuffers.NetPing.getRootAsNetPing = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetPing()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetPing.prototype.time = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetPing.startNetPing = function(builder) {
    builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} time
 */
Game.Engine.Networking.FlatBuffers.NetPing.addTime = function(builder, time) {
    builder.addFieldInt32(0, time, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetPing.endNetPing = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetWorldView = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetWorldView}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetWorldView=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetWorldView}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.getRootAsNetWorldView = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetWorldView()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.time = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.NetBody=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody|null}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.camera = function(obj) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetBody()).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {boolean}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.isAlive = function() {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? !!this.bb.readInt8(this.bb_pos + offset) : true;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetBody=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.updates = function(index, obj) {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetBody()).__init(this.bb.__vector(this.bb_pos + offset) + index * 28, this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.updatesLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.deletes = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.deletesLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.deletesArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetGroup=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetGroup}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.groups = function(index, obj) {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetGroup()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.groupsLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.groupDeletes = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.groupDeletesLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.groupDeletesArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @param {Game.Engine.Networking.FlatBuffers.NetAnnouncement=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetAnnouncement}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.announcements = function(index, obj) {
    var offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? (obj || new Game.Engine.Networking.FlatBuffers.NetAnnouncement()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.prototype.announcementsLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startNetWorldView = function(builder) {
    builder.startObject(8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} time
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addTime = function(builder, time) {
    builder.addFieldInt32(0, time, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} cameraOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addCamera = function(builder, cameraOffset) {
    builder.addFieldStruct(1, cameraOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} isAlive
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addIsAlive = function(builder, isAlive) {
    builder.addFieldInt8(2, +isAlive, +true);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} updatesOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addUpdates = function(builder, updatesOffset) {
    builder.addFieldOffset(3, updatesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startUpdatesVector = function(builder, numElems) {
    builder.startVector(28, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deletesOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addDeletes = function(builder, deletesOffset) {
    builder.addFieldOffset(4, deletesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createDeletesVector = function(builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startDeletesVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupsOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addGroups = function(builder, groupsOffset) {
    builder.addFieldOffset(5, groupsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createGroupsVector = function(builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addOffset(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startGroupsVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupDeletesOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addGroupDeletes = function(builder, groupDeletesOffset) {
    builder.addFieldOffset(6, groupDeletesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createGroupDeletesVector = function(builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startGroupDeletesVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} announcementsOffset
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.addAnnouncements = function(builder, announcementsOffset) {
    builder.addFieldOffset(7, announcementsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.createAnnouncementsVector = function(builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addOffset(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.startAnnouncementsVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetWorldView.endNetWorldView = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetGroup = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetGroup}
 */
Game.Engine.Networking.FlatBuffers.NetGroup.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetGroup=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetGroup}
 */
Game.Engine.Networking.FlatBuffers.NetGroup.getRootAsNetGroup = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetGroup()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetGroup.prototype.group = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetGroup.prototype.type = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetGroup.prototype.caption = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetGroup.startNetGroup = function(builder) {
    builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} group
 */
Game.Engine.Networking.FlatBuffers.NetGroup.addGroup = function(builder, group) {
    builder.addFieldInt32(0, group, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Game.Engine.Networking.FlatBuffers.NetGroup.addType = function(builder, type) {
    builder.addFieldInt8(1, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} captionOffset
 */
Game.Engine.Networking.FlatBuffers.NetGroup.addCaption = function(builder, captionOffset) {
    builder.addFieldOffset(2, captionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetGroup.endNetGroup = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.Vec2 = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.x = function() {
    return this.bb.readInt16(this.bb_pos);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.Vec2.prototype.y = function() {
    return this.bb.readInt16(this.bb_pos + 2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.Vec2.createVec2 = function(builder, x, y) {
    builder.prep(2, 4);
    builder.writeInt16(y);
    builder.writeInt16(x);
    return builder.offset();
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetBody = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetBody}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.id = function() {
    return this.bb.readUint32(this.bb_pos);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.definitionTime = function() {
    return this.bb.readUint32(this.bb_pos + 4);
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.originalPosition = function(obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.Vec2()).__init(this.bb_pos + 8, this.bb);
};

/**
 * @param {Game.Engine.Networking.FlatBuffers.Vec2=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.Vec2|null}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.velocity = function(obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.Vec2()).__init(this.bb_pos + 12, this.bb);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.originalAngle = function() {
    return this.bb.readInt8(this.bb_pos + 16);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.angularVelocity = function() {
    return this.bb.readInt8(this.bb_pos + 17);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.size = function() {
    return this.bb.readUint8(this.bb_pos + 18);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.sprite = function() {
    return this.bb.readUint8(this.bb_pos + 19);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.mode = function() {
    return this.bb.readUint8(this.bb_pos + 20);
};

/**
 * @returns {number}
 */
Game.Engine.Networking.FlatBuffers.NetBody.prototype.group = function() {
    return this.bb.readUint32(this.bb_pos + 24);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} id
 * @param {number} definitionTime
 * @param {number} originalPosition_x
 * @param {number} originalPosition_y
 * @param {number} velocity_x
 * @param {number} velocity_y
 * @param {number} originalAngle
 * @param {number} angularVelocity
 * @param {number} size
 * @param {number} sprite
 * @param {number} mode
 * @param {number} group
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetBody.createNetBody = function(
    builder,
    id,
    definitionTime,
    originalPosition_x,
    originalPosition_y,
    velocity_x,
    velocity_y,
    originalAngle,
    angularVelocity,
    size,
    sprite,
    mode,
    group
) {
    builder.prep(4, 28);
    builder.writeInt32(group);
    builder.pad(3);
    builder.writeInt8(mode);
    builder.writeInt8(sprite);
    builder.writeInt8(size);
    builder.writeInt8(angularVelocity);
    builder.writeInt8(originalAngle);
    builder.prep(2, 4);
    builder.writeInt16(velocity_y);
    builder.writeInt16(velocity_x);
    builder.prep(2, 4);
    builder.writeInt16(originalPosition_y);
    builder.writeInt16(originalPosition_x);
    builder.writeInt32(definitionTime);
    builder.writeInt32(id);
    return builder.offset();
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetAnnouncement}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetAnnouncement=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetAnnouncement}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.getRootAsNetAnnouncement = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetAnnouncement()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.prototype.text = function(optionalEncoding) {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.startNetAnnouncement = function(builder) {
    builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} textOffset
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.addText = function(builder, textOffset) {
    builder.addFieldOffset(0, textOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetAnnouncement.endNetAnnouncement = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Game.Engine.Networking.FlatBuffers.NetQuantum = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Game.Engine.Networking.FlatBuffers.NetQuantum}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Game.Engine.Networking.FlatBuffers.NetQuantum=} obj
 * @returns {Game.Engine.Networking.FlatBuffers.NetQuantum}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.getRootAsNetQuantum = function(bb, obj) {
    return (obj || new Game.Engine.Networking.FlatBuffers.NetQuantum()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {Game.Engine.Networking.FlatBuffers.AllMessages}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.prototype.messageType = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? /** @type {Game.Engine.Networking.FlatBuffers.AllMessages} */ (this.bb.readUint8(this.bb_pos + offset)) : Game.Engine.Networking.FlatBuffers.AllMessages.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.prototype.message = function(obj) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.startNetQuantum = function(builder) {
    builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Game.Engine.Networking.FlatBuffers.AllMessages} messageType
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.addMessageType = function(builder, messageType) {
    builder.addFieldInt8(0, messageType, Game.Engine.Networking.FlatBuffers.AllMessages.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.addMessage = function(builder, messageOffset) {
    builder.addFieldOffset(1, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.endNetQuantum = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Game.Engine.Networking.FlatBuffers.NetQuantum.finishNetQuantumBuffer = function(builder, offset) {
    builder.finish(offset);
};

// Exports for Node.js and RequireJS
