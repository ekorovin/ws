/**
 * Subnav:		Implementation
 * Description:		An extension of the lpch.BaseView object
 * 					Allows for declaration of interactivity of the Subnav component
 */
lpch.Subnav = lpch.BaseView.extend({
	
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;
		
		// this.el		All views have a DOM element at all times
		// this.$el		A cached jQuery object for the view's element
		//				$el.find(selector) to traverse the object
		
		this.$el.find('.choose-a-section').bind('click touchstart', this.openSubnav);
		this.$el.find('.list-subnav a').bind('click touchstart', function(e){
			e.preventDefault();
			e.stopPropagation();

			var orientation = module.view.getCurrentOrientation(); 
			
			if(orientation == 'smartphone') {
				var currentText = $(this).html();
				_this.closeSubnav();
				$('.choose-a-section').html(currentText).truncate({maxLength: 20});
			}
		}); 
		
		$(document).bind('click touchstart',function(){
			var orientation = module.view.getCurrentOrientation(); 
			if (orientation == 'smartphone') {
				_this.closeSubnav();
			}
		});
		// invoke the super method
		lpch.BaseView.prototype.initialize.call(this);
	},
	openSubnav: function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.list-subnav').show();
	},
	closeSubnav: function(e){
		$('.list-subnav').hide();
	},
	handleLayoutChange: function(layout) {
		var device = layout.get('orientation');
		if(device == 'smartphone') {
			$('.list-subnav').hide();
		}
		else {
			$('.list-subnav').show();	
		}
	},
	
	handleViewportChange: function(width, height) {}
	
});

/**
 * Subnav:	Initialization
 * Description:	Listen for 'initializeComponents' triggered from Document.js
 * 				Then find all '.Subnav' classes and initialize lpch.Subnav
 */
$(window).bind('initializeComponents', function() {
	$('.subnav').each(function(index) {
		new lpch.Subnav({
	        el: this
	    });
	});
});