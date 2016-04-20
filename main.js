//tooltip van contact form
var $naam = $(".naam-notificatie");
var $email = $(".email-notificatie");

function showName() {
	$naam.show();
};

function showEmail() {
	$email.show();
};

$("form span").hide();

$("#name").focus(showName);
$("#email").focus(showEmail);

//plugin slick options en call functie.
$(document).ready(function(){
  $('.home-slider').slick({
  	arrows: false,
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 5000
  });
});

