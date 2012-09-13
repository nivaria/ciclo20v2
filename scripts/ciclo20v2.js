$(document).ready(function(){
	// Scrolling Sidebar
    var offset = $("#sidebar-first").offset();
    var topPadding = 15;
    $(window).scroll(function() {
        if ($("#sidebar-first").height() < $(window).height() && $(window).scrollTop() > offset.top) {
            $("#sidebar-first").stop().animate({
                marginTop: $(window).scrollTop() - offset.top + topPadding
            });
        } else {
            $("#sidebar-first").stop().animate({
                marginTop: 0
            });
        };
    });
    
    // Collapse Sidebar
    if ($("#sidebar-first-wrapper .btn-collapse").hasClass("open")) {
    	var firstSize = $("#sidebar-first").width();
    };
    
    if ($("#sidebar-last-wrapper .btn-collapse").hasClass("open")) {
    	var lastSize = $("#sidebar-last").width();
    };
    
    $("#sidebar-first-wrapper .btn-collapse").click(function() {
    	if ($(this).hasClass("open")) {
    		$(this).removeClass("open");
    		$("#sidebar-first").toggle("slow", function() {
	        	$("#main-group").width($("#main-group").width() + firstSize);   	
	        	$("#content-group").width($("#content-group").width() + firstSize);
    		});
    	} else {
    		$(this).addClass("open");
    		$("#main-group").width($("#main-group").width() - firstSize);
        	$("#content-group").width($("#content-group").width() - firstSize);
    		$("#sidebar-first").toggle("slow");
    	};
    	$("#content-group").toggleClass("clean-left");
	});

    $("#sidebar-last-wrapper .btn-collapse").click(function() {
    	if ($(this).hasClass("open")) {
    		$(this).removeClass("open");
    		$("#sidebar-last").toggle("slow", function() {  	
	        	$("#content-group").width($("#content-group").width() + lastSize);
    		});
    	} else {
    		$(this).addClass("open");
        	$("#content-group").width($("#content-group").width() - lastSize);
    		$("#sidebar-last").toggle("slow");
    	};
    	$("#content-group").toggleClass("clean-right");
	});
	// Hides all content
	$(".tab_content").hide();
	// For each tab group
	$(".content-content ul.tabs").each(function(index, value) {
		
		// Adds the active class to the first element
		$(value).find("li:first").addClass("active").show();
		
		// Shows the content of the first element
		var activeTab = $(value).find("li:first").find("a:first").attr("href");
		$(activeTab).show();
	});
	$(".content-content ul.tabs li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
		// Hide content for siblings
		$(this).siblings().each(function() {
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).hide();
		});

		// Show content for active
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$(".openlayers_behavior_fullscreen_buttonItemInactive").click(function(){
		$("body").toggleClass("openlayers-full");
	});
	$(".openlayers_behavior_fullscreen_buttonItemActive").click(function(){
		$("body").removeClass("openlayers-full");
	});
});
