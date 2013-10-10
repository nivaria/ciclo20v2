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
    
     $("#sidebar-first-wrapper .btn-expand").click(function() {
       if ($(this).hasClass("open")) {
           $(this).addClass("close");
           $(this).removeClass("open");
           $("#main-group").toggle("slow", function (){
               $("#sidebar-first").width(firstSize);
               $("#sidebar-first-wrapper").width(firstSize);
               $("#block-nivaria_navigation-0").width(firstSize);
           });
        } else {
            $(this).addClass("open");
            $(this).removeClass("close");
            $("#main-group").toggle("slow", function() {
                $("#sidebar-first").width("100%");
                $("#sidebar-first-wrapper").width("100%");
                $("#block-nivaria_navigation-0").width("100%");
            });
            
        };
    });
    
    $("#sidebar-first-wrapper .btn-collapse").click(function() {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("#sidebar-first").toggle("slow", function() {
                $("#main-group").width($("#main-group").width() + firstSize);   	
                $("#content-group").width($("#content-group").width() + firstSize);
           $(".block-ciclo_catalog_breadcrumb").css({'width':990+'px'})
            });
        } else {
            $(this).addClass("open");
            $("#main-group").width($("#main-group").width() - firstSize);
            $("#content-group").width($("#content-group").width() + firstSize);
            $("#sidebar-first").toggle("slow");
            $(".block-ciclo_catalog_breadcrumb").css({'width':710+'px'})
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
    $("#sidebar-last-wrapper h2.title.block-title").click(function(){
        if($(this).hasClass("close")){
            $(this).removeClass("close")
            $(this).next('.content').slideDown("slow");
        }else{
            $(this).addClass("close")
            $(this).next('.content').slideUp("slow");
        }
    })
    /*slide product*/
    $(".content-inner-inner h2.title").click(function(){
        if($(this).hasClass("close")){
            $(this).removeClass("close")
            $(this).find(".buildmode-full").slideDown("slow");
        }else{
            $(this).addClass("close")
            $(this).find(".buildmode-full").slideUp("slow");
        }
    })
    /*slide content*/
    $("#content-content .buildmode-full .nd-region-header .field-items, #content-content .buildmode-full .nd-region-header .field-title h1").click(function(){
        var divparent = $(this).parent().parent();
        if(divparent.hasClass("fgcClose")){
            divparent.removeClass("fgcClose")
            divparent.parent().find(".nd-region-middle-wrapper, .nd-region-left, .nd-region-footer").slideDown("slow");
        }else{
            divparent.addClass("fgcClose")
            divparent.parent().find(".nd-region-middle-wrapper, .nd-region-left, .nd-region-footer").slideUp("slow");
        }
    })
    $("#pid-content-el-pozo #content-inner h1.title, #pid-catalog-client-scar-mayer #content-inner h1.title, #pid-content-montesano #content-inner h1.title").click(function(){
        var divparent = $(this).parent();
        if($(this).hasClass("fgcClose")){
            $(this).removeClass("fgcClose")
            divparent.parent().find(".nd-region-middle-wrapper, .nd-region-left, .nd-region-right").slideDown("slow");
        }else{
            $(this).addClass("fgcClose")
            divparent.parent().find(".nd-region-middle-wrapper, .nd-region-left, .nd-region-right").slideUp("slow");
        }
    })
    /*zoom product*/
    //$(".node-type-ciclo-model-machine .field-ciclo-model-image .field-items .field-item").append("<span class='zoom-out'></span>")
    //             var lightbox_img= $(".node-type-ciclo-model-machine .field-ciclo-model-image .field-items .field-item img").attr('src');
    //        // alert(lightbox_img);
    //        $(".field-ciclo-model-image .field-items .field-item ").html("<a href="+lightbox_img+"><img src="+lightbox_img+"/> <span class='zoom-out'></span></a>");
    //         $('.field-ciclo-model-image .field-items .field-item a').lightBox();
    /*$("#pid-catalog-customers  .view-ciclo-customers .view-content li.views-row").each(function(i){
   
        var content=$(this).find(".nd-region-middle-wrapper").html();

        var images=$(this).find(".nd-region-left").html();

        $(this).find(".nd-region-middle-wrapper").html(images);
        $(this).find(".nd-region-left").html(content); 
    })*/
    //change content model list
    /*$(".page-catalog  .view-ciclo-machines .view-content li.views-row").each(function(i){
   
        var content=$(this).find(".nd-region-middle-wrapper").html();

        var images=$(this).find(".nd-region-left").html();

        $(this).find(".nd-region-middle-wrapper").html(images);
        $(this).find(".nd-region-left").html(content); 
    })*/
    
    /**checkbox**/
   $("#pid-admin-settings-ciclo-bmecat-import #ciclo-bmecat-import fieldset ul").each(function(i){
       $(this).addClass('ubcart_select_'+i);
   })
//   $(".ubcart_select1")().css({
//     'left': '55%',
//    'position': 'absolute',
//    'top': 93+'px',
//    'width': '45%'
//   })
//
//    $(' #pid-admin-settings-ciclo-bmecat-import #ciclo-bmecat-import #edit-update-existing-components-wrapper label.option input').after("<span class='checked'></span>");
//     $(' #pid-admin-settings-ciclo-bmecat-import #ciclo-bmecat-import #edit-installation-wrapper label.option input').after("<span class='checked'></span>");
     $("#pid-admin-settings-ciclo-bmecat-import .form-checkboxes .form-checkbox,#pid-admin-settings-ciclo-bmecat-import #ciclo-bmecat-import #edit-installation-wrapper label.option input, #pid-admin-settings-ciclo-bmecat-import #ciclo-bmecat-import #edit-update-existing-components-wrapper label.option input").after("<span class='checked'></span>");
    /*attach*/
	if ($.browser.mozilla) {
		$("#edit-upload-wrapper label").click(function(){
			$("#edit-upload").click();
			return false;
		})
	}	
    $("#edit-upload").change(function(){
        $("#ciclo-bmecat-import").submit();
    });
    $("#quicktabs-ciclo_model_catalogue .views_slideshow_pagerThumbnails .pager-item ").live("click",function(event) {
	event.preventDefault();
    });
    
    //In group details hide links except flags, because we have here subscriptions block
    if($("body.node-type-group #block-notifications_ui-0").length){
        $("body.node-type-group .node.full-node .links > li").each(function(){
            var cname = $(this).attr("class");
            var arr = cname.split("_");
            if(arr[0]==="notifications"){
                $(this).remove();
            }
        });
    }
    $("body#pid-node-add-ciclo-main-modification-972 #edit-block").prepend( $("body#pid-node-add-ciclo-main-modification-972 .readcrumbs-wrapper"), $("body#pid-node-add-ciclo-main-modification-972 h1") );
	
	$(".quicktabs_wrapper .quicktabs-switcher a").each(function(){
		var currText = $(this).html();
        if (currText == Drupal.settings.ciclo_quicktabs.LANG_SHOW){
			$(this).parents(".quicktabs_wrapper").addClass("opened-tabs");
		}
	});
	
	$(".quicktabs_wrapper .quicktabs-switcher a").bind( "click", function(evt){
		evt.preventDefault();
        var currText = $(this).html();
        if (currText == Drupal.settings.ciclo_quicktabs.LANG_SHOW) {
            currText = Drupal.settings.ciclo_quicktabs.LANG_HIDE;
			$(this).parents(".quicktabs_wrapper").removeClass("closed-tabs");
			$(this).parents(".quicktabs_wrapper").addClass("opened-tabs");
        } else {
            currText = Drupal.settings.ciclo_quicktabs.LANG_SHOW;
			$(this).parents(".quicktabs_wrapper").removeClass("opened-tabs");
			$(this).parents(".quicktabs_wrapper").addClass("closed-tabs");
        }
		//$(this).parents(".quicktabs_wrapper").find("ul.quicktabs_tabs").toggle("slow");
        //$(this).parents(".quicktabs_wrapper").find("div.quicktabs_main").toggle("slow");
        $(this).html(currText);
		return false;
	});
	
	if ($.browser.msie) {
		var width = $(window).width();
		if (width < 1024) {
			$("#page").css({'width': '100%'});
		}
	}
	
	$(".catalog-navigation #content-region").append('<div class="btn-expand-main-group open"><span class="open">expand</span><span class="close">reduce</span></div>');
	
	$(".catalog-navigation .btn-expand-main-group").live("click", function(){
		$("#sidebar-first-wrapper").toggle("slow");
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(this).addClass("close");
			$("#main-group").css("width", $("#main-group").width() + firstSize + "px");
			var size = $("#content-group").width() + firstSize;
            $("#content-group").attr('style', 'width: ' + $("#content-group").width() + firstSize +'px !important');
			
		} else {
			$(this).removeClass("close");
			$(this).addClass("open");
			$("#main-group").width($("#main-group").width() - firstSize);
            $("#content-group").width($("#content-group").width() + firstSize);
		}
	});
});
