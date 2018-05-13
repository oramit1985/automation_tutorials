$(document).ready(function() {
    $("#set-div-style").click(function() {
 		var options = ["#ff0000","#fdff62","#000000","#191970","#53FF33","333CFF"];
 		var currColor = rgbToHex($('#style-me').css('color'));
 		var currColorIndex = options.indexOf(currColor);
 		options.splice(currColorIndex,1);
 		var chosenColor = options[Math.floor(Math.random() * options.length)];
	    $('#style-me').css( "color", chosenColor);
	});

	function rgbToHex(rgb) {
		rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
		function hex(x) {
			return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}

	$("#new-window").click(function() {
		window.open('home.html','',"width=500,height=500")
	});

	$("#alert-me").click(function() {
	    alert('Automation is great!!!')
	});

	$("#clear-fname").click(function() {
	    $('#first-name').val('');
	});

	$("#clear-lname").click(function() {
	    $('#last-name').val('');
	});

	$("#hideDiv").on("click", function() {
	    $('#hiddenDiv').remove();
	});

	$('#toggleDiv').click(function(){
	    $('#toggledDiv').toggle();
	});

	$("#clear-fname-in-frame").click(function() {
	    $('#first-name-in-frame').val('');
	});

	$("#clear-lname-in-frame").click(function() {
	    $('#last-name-in-frame').val('');
	});
});