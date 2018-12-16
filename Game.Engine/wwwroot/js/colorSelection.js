// script for better color selection
// in some deep development
// by Russia PL

var colorSelection = document.getElementById("colorSelection"),
    shipSelector = document.getElementById("shipSelector"),
	  colors = ["green", "orange" "pink", "red", "cyan", "yellow"],
	  colorSelectionInnerHTML = "";

colors.forEach(function(){
	colorSelectionInnerHTML += "<img src='/img/ship_" + item + ".png' alt='" + item + "' />";
});	

colorSelection.innerHTML = colorSelectionInnerHTML;
