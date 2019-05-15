// JavaScript Document
$(function(){	

	$('.nav_icon').click(function(){
		if($(".tanchu").css('display')=="block"){
			$(".lbOverlay").hide();
			$(".tanchu").hide();
		}else{
			$(".lbOverlay").show();
			$(".tanchu").show();
		}
	});	
});
function closeDiv(){
	$(".lbOverlay").hide();
	$(".tanchu").hide();
}