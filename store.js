$(function(){
	$("#span1").hover(function(){
		$("#img1").hide(2000);
		$("#img2").show(2000);
		$("#img1").show(2000);
		$("#img2").hide(2000);
	});
	$("#span2").hover(function(){
		$("#img4").fadeOut(4000);
		
		$("#img4").show(2000);
		
	});
	$("#control").hover(function(){
		$("#ad").hide(7000);
		$("#ad1").show(8000);
		$("#ad").show(8000);
		$("#ad1").hide(7000);
		
		
		
	});
});