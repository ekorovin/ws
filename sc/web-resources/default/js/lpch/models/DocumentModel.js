lpch.DocumentModel = lpch.BaseModel.extend({
	
	defaults: {
		currentWidth: 0,
		currentHeight: 0,
		currentLayout: null,
		currentOrientation: null
	},
	
	initialize: function() {
		
		var _this = this;
		this.layouts = new Backbone.Collection();
		this.layouts.model = lpch.Layout;
		this.layouts.add([
		                new lpch.LayoutSmartphone(),
		      			new lpch.LayoutTablet(),
		      			new lpch.LayoutDesktop()
		      		]);
		
		this.zipcodes = new lpch.ZipCodeCollection();

		this.on('change:currentWidth', this.handleCurrentWidthChange, this);
		this.on('change:currentLayout', this.handleCurrentLayoutChange, this);
		
		this.templates = new Backbone.Collection();
		this.templates.model = lpch.BaseModel;

		$.get('../../../templates/lpch-templates.html', function(data) {
			$(data).filter("script").each(function(i, elem) {
				_this.templates.add({id:$(elem).attr("id"), html:$(elem).html()});
			});
			// call the function in the Document view when load is complete
			module.view.initializeComponents();
		});
		
	},
	
	getZipCodeGPSCoords: function(zip) {
		var zipcode = this.zipcodes.find(function(zipcode)
		{
			return zip == zipcode.get('zip');
		});
		return zipcode;
	},

	getLayoutByWidth: function(width) {
		// TODO: Currently assuming layouts have been added small to large
		var layout = this.layouts.find(function(layout)
		{
			return width <= layout.get('maximumWidth');
		});
		return layout;
	},

	handleCurrentWidthChange: function(model, width) {
		this.set('currentLayout', this.getLayoutByWidth(width));
	},

	handleCurrentLayoutChange: function(model, layout) {
		this.set('currentOrientation', layout.get('orientation'));
	}
});