// Scroll

$('#to-contacts').click(function() {
  $.scrollTo($('#contacts'), 1000);
});

$('#to-schedule-a-tour').click(function() {
  $.scrollTo($('#schedule-a-tour'), 1000);
});

$('#to-schedule-a-tour2').click(function() {
  $.scrollTo($('#schedule-a-tour'), 1000);
});

$('#to-rooms').click(function() {
  $.scrollTo($('#rooms'), 1000);
});

$('#to-about-us').click(function() {
  $.scrollTo($('#about-us'), 1000);
});

// Popup

function PopUp() {
	$("#popup").css("display", "block")
}
$('#show-popup').click(function() {
	PopUp();
});

function ClosePopUp(){
	$("#popup").css("display", "none")
}
$('#popup').click(function(){
	ClosePopUp();
});