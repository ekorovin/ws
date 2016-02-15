//This js file used in service-index.html

lpch.SaleforceForm = lpch.BaseView.extend({

	NAME: "Newsletter Form",
	
	initialize: function() {
		// Self-reference for scoping
		var _this = this;

		this.validate(this.$el);
		
		this.pageSuccess();
		
		// Submit button tracking
		this.$el.find('input[type="submit"]').click(function(event) {
			module.view.trackEvent($(this).val());
		});
		
		lpch.BaseView.prototype.initialize.call(this);
	},	
	handleViewportChange: function(width, height) {
		
	},
	handleLayoutChange: function(layout) {
		var orientation = layout.get('orientation');
		if ($('#colorbox').hasClass('layer-success-form-template')){
			clearTimeout(this.timer);
			this.timer = setTimeout(function(){
				if(orientation == 'smartphone') {
					$.colorbox.resize({
						innerWidth:320,
						innerHeight: 380
					});
				}
				else if(orientation == 'tablet') {
					$.colorbox.resize({
						innerWidth:508,
						innerHeight: 300
					});
				}
				else{
					$.colorbox.resize({
						innerWidth:564,
						innerHeight: 273
					});			
				}
			},200);
		}
	},
	validate: function(form){
		var _this = this;
		form.validate({
			errorPlacement: function(error, element) {
				error.addClass('error-text-right');
				if (element.next().is('.add-on')) {
					error.addClass('add-on').insertBefore(element.next('.add-on'));
				} else {
					error.insertBefore(element);
				}
			},
			rules: {			
				first_name: "required",
				last_name: "required",
				email: {
					required: true,
					email: true
				},				
				confirm_email : {                    
                    email: true,
					equalTo: '#email'
                },
				phone: {
					number: true
				}
			},
			messages: {
				first_name: "* Required Field",
				last_name: "* Required Field",
				email: {
					required: "* Required Field",
					email: "* Invalid Email"
				},
				confirm_email: "* Email Addresses Do Not Match",
				phone: "* Invalid Number"				
			}
		});
	},
	templateSuccess: function(){
		return '<div class="layout-success-container"><div class="content"><h3 class="heading">Thank You!</h3><p class="description">Est ma comnienis mos ex erferum rerereped quia si reperfe rnates eatibust, excerspid quunt, quas is ipsusciuntes aut eatusamus veliquat imint alit et quidign imoluptatur aceruptatur repudantet quia nulpa plaborepudis re ame imi, es simi, quat autem que Cuptaqu aepernatquis aut am volest, temolorest, consed magnam quat eum int quatur aut que parchit laut la sitias idit omnit ent maiorro.</p></div><p class="controls"><button class="btn btn-danger" type="button">Return to page</button></p></div>';
	},
	pageSuccess: function(){		
		if (module.view.getParameterByName("success") == "true"){
			var template = this.templateSuccess();
			
			$.colorbox({
				html: template,
				innerWidth:564,
				innerHeight:273,
				onComplete: function(){
					var orientation = module.view.getCurrentOrientation();
					if(orientation == 'smartphone') {
						$.colorbox.resize({
							innerWidth:320,
							innerHeight: 400
						});
					}
					else if(orientation == 'tablet') {
						$.colorbox.resize({
							innerWidth:508,
							innerHeight: 300
						});
					}
				},
				onOpen: function(){
					$('#colorbox').addClass('layer-success-form-template');
				},
				onClosed: function(){
					$('#colorbox').removeClass('layer-success-form-template');
				}
			});
		}
	}
	
});

$(window).bind('initializeComponents', function() {	
	new lpch.SaleforceForm({
		el: '.sales-force-form'
	});
});