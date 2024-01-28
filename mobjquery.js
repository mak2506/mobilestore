$(function(){
	$("#ph").hover(function(){
		$("#phone").slideToggle("fast");
	});
	$("#tv").hover(function(){
		$("#tvs").slideToggle("fast");
	});
	$("#span1").click(function(){
		$("#img1").animate({left:"220px"},3000);
		
		
	});
	
});