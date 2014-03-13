$(document).ready( function() {
	
	var windowWidth = $(window).width();
	if(windowWidth<500){
		$(".headermenu").hide();
		$("#navToggle").css("display","block");
	}

	$("#navToggle").click( function(){
		$(".headermenu").slideToggle(1000);
	});

	$(window).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth > 500){
			$("#navToggle").css("display","none");
			$(".headermenu").show();
		}
		else {
			$("#navToggle").css("display","block");
			$(".headermenu").hide();
		}
	});

});