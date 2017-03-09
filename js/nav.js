var life = life || {};

life.nav = (function($) {

	var mobileButton$ = $("#mobileNav"),
		menuItems = $(".menuItem"),
		nav$ = $("nav");

	function init() {
		adjustNavBehavior();
		$( window ).on("resize", adjustNavBehavior);
	}
	
	function adjustNavBehavior(event) {
		if (mobileButton$.is(":visible")) {
			nav$.hide();
			attachClickEventHandlers();
		} else {
			nav$.show();
			attachHoverEventHandlers();
		}
	}
	
	function attachHoverEventHandlers() {
		menuItems.unbind();
		menuItems.hover(
			function(event){
				$(".subMenu", $(event.target)).slideDown("slow");
			},
			function(event){
				$(".subMenu", $(event.target)).slideUp("slow");
			}
		);
	}
	
	function attachClickEventHandlers() {
		menuItems.unbind();
		mobileButton$.unbind();
		mobileButton$.on("click", toggleMobileNav);
		menuItems.on("click", toggleSubMenu);
	}
	
	function toggleMobileNav(event) {
		nav$.slideToggle("slow");
	}
	
	function toggleSubMenu(event) {
		var subMenu$ = $(event.target).siblings(".subMenu");
		if (!!subMenu$) {
			if (subMenu$.is(":visible")){
				subMenu$.slideUp("slow");
			} else {
				subMenu$.slideDown("slow");
			}
		}
	}

	return {
        init                    : init
    };

})(jQuery);


/* Register life.nav.init as the page's "ready" function */
jQuery(life.nav.init);