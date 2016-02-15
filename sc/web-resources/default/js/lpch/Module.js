lpch.Module = Backbone.Router.extend({

	viewClass: lpch.Document,
	
	routes: {
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
	
	initialize: function() {
		if (window.module) {
			throw new Error('Only one module instance may be created.');
			return;
		}

		window.module = this;
		
		module.vent = {}; //global event object
		_.extend(module.vent, Backbone.Events);

		this.view = new this.viewClass();
	},
	
	defaultRoute: function(deeplink) {},
    
    getView: function() {
    	return this.view;
    }
	
});