lpch.FBLikeBox = lpch.BaseView.extend({
	initialize: function(){
		var _this = this;
		this.$el = $(".facebook-body");
		lpch.BaseView.prototype.initialize.call(this);
		FB.Event.subscribe("xfbml.render", function(){			
			var checkInterval = setInterval(function(){				
				if(_this.$el.find("iframe").length!=0){
					_this.$el.find("iframe").removeAttr("width").css({width: _this.$el.width()});
					clearInterval(checkInterval);	
				} 
			}, 500);
		});
	},
	handleViewportChange: function(){
		console.log("asdasd");
		this.$el.find("iframe").removeAttr("width").css({width: this.$el.width()});
	}
});

$(window).bind('initializeComponents', function() {
	$('.social-youtube-videos').each(function(index) {
		new lpch.FBLikeBox();
	});
});

