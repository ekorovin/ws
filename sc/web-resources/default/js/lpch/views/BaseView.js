lpch.BaseView = Backbone.View.extend({
	
	_configure: function(options) {
		if (this.modelClass) {
			this.model = new this.modelClass();
			this.model.set('view', this);
		}
		Backbone.View.prototype._configure.call(this, options);
	},
	
	initialize: function() {		
		// Add/remove listeners as needed
		module.on('layoutChange', this.handleLayoutChange, this);
		module.on('viewportChange', this.handleViewportChange, this);
	},
	
	load: function(url, onSuccess, data) {
		this.$el.children().hide();
		
		var _this = this,
			html = '<div class="ajax-loader"></div>',
			loader = $(html).appendTo(this.$el);
		
		$.getJSON(url, data).done(function(data) {
			_this.$el.children().show();
			loader.remove();
			onSuccess(data);
		});
	},
	
	handleLayoutChange: function(layout) {}

});