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
	$("#popup").css("display", "block");
  $('input[type=text]').val('');
  $('textarea').val('');

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

// $(form).submit(function(){return false;});

$(document).ready(function($) { $(document).on('submit', '#submit-form', function(event) { event.preventDefault();
 }); });
