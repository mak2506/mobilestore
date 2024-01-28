$(document).ready(function(){
	$('li:first').addClass("red");
	$('li:last').addClass("green");
	$("p").click(function(){
		$(this).fadeout(2000);
	});
	$("img").fadeOut(2000);
});