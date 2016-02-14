// simeiosolutions

$(function() {
//dropdowns in nav	
//navigation	


$('ul.nav li.dropdown').hover(function() {$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();}, function() { $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();

	});


if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}


//scroll down 
// Need to fix this - now break scroll wheel 

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('.page-nav li').removeClass('active');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	


   $('.up-down a').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {	
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  
  $(".page-nav>li a").click(function(){
	 var menuitem =  $(this).parent("li");
	 menuitem.parent("ul").find("li").removeClass("active");
	menuitem.addClass("active");
  });
  
  $("#top-link-block a").click(function(){
	  $(".page-nav>li").removeClass("active");	 
  });
  


//mobile page navigation trigger
  $(document).delegate(".in li:has(ul.sub-menu)","click",function(event){
    $(this).find("> .sub-menu").slideToggle();
	$(this).find("> a:first-child").toggleClass("mopen");
  });
  

 

$('.page-accordion').squeezebox({
			closeOthers: true,
			timing: 400,
				onOpen: function(el){
					$('.page-accordion h2').removeClass('accordion_open');
					$('.page-accordion h3').removeClass('accordion_open');
					el.clickedEl.addClass('accordion_open'); 
				}, 
				onClose: function(el){ 
					el.clickedEl.removeClass('accordion_open'); 
				}
	});

	
	
//end mobile page navigation trigger	

//on body click hide mobile menu 
 
	$("html").click(function(event) {
		//console.log(event.target.className);
		//console.log($(event.target).parent("div.navbar-collapse")); 
		if	(($(event.target).parents('div.navbar-collapse').length > 0) || ($(event.target).parents('.navbar-header').length > 0)) 
		{
		   //console.log("inside menu");
		}
		else
		{
			$(".navbar-collapse").css("height","0");
			$(".navbar-collapse").removeClass("in");
		}
	})
	
	

					//Enable swiping home page
					$(".carousel-inner").swipe( {
						//Generic swipe handler for all directions
						swipeLeft:function(event, direction, distance, duration, fingerCount) {
							$(this).parent().carousel('next'); 
						},
						swipeRight: function() {
							$(this).parent().carousel('prev'); 
						},
						//Default is 75px, set to 0 for demo so any distance triggers swipe
						threshold:65
					});
					
					
//adding class for different screen sizes

  //var pageTransitions = [['full',1600],['mobile',800],['tiny',400],['micro',0]]; // number shows minimum size - must be from high to low
  var pageTransitions = [['lg',992],['md',768],['sm',480],['xs',0]]; // number shows minimum size - must be from high to low
  function resize() {
    var target = 0,
        w = $(window).width(),
        b = $('body');
    $.each(pageTransitions, function(index, pageTransition) {
        if( w > pageTransition[1]) {
            target = index;
            return false;
        }
    });
    $.each(pageTransitions, function(index, pageTransition) {
        b.removeClass(pageTransition[0]);
    });
    b.addClass(pageTransitions[target][0]);
  }
  resize();
  jQuery(window).on('resize', function() {
    resize();
  });	
  
  $(".md .navbar-nav, .lg .navbar-nav").find(".tp a").click(function(e){
	  	 e.preventDefault();
		 var urlto=$(this).attr("href");
		 if(urlto =="#company"){
			urlto="company.html";
		 }
		 if(urlto =="#solutions"){
			urlto="expert-managed-services.html";
		 }
		 if(urlto =="#news-resources"){
			urlto="news-press.html";
		 }
		 
	 	document.location = urlto; 
  });
	
//open close content for mobile view in leadership page
$("body.xs .thumb-info").addClass("btn");
 
		 $("body.xs .thumb-info").click(function(){
			 var thumbContent = $(this).parent("div").next("div.txt").find("section");
			 if(thumbContent.hasClass("hidden-xs")){
				 thumbContent.removeClass("hidden-xs");
			 }
			 else{
				thumbContent.addClass("hidden-xs");
			 }
			 
		 });


//random slide start for testimonials carousel
$('#testimonial .item').eq(Math.floor((Math.random() * $('.item').length))).addClass("active");


//read more
$('.rm-collapse').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
	if ($collapse.height() !=0){
		$this.text("Read more");
	}
	else{
		$this.text("Read less");	
	}
});


//form validation
$('#contact-us-form').validate({
    rules: {
		//first name
        question2533454982: {
            minlength: 2
        },
		//last name
        question2533454984: {
            minlength: 2
        },
		//job title
        question2582325974: {
        },
		//email 
        question2533454978: {
			email: true
        },
		//phone 
        question2533454990: {
			phoneUS: true
        },
		//company 
        question2533454992: {
        },
		//number of employees
        question1000001838033: {
        },
		
		//interest
        question1000001838042: {        }
    },
	
	 submitHandler: function(form) {

			
			  $.ajax({
            	type: "POST",
        		url: "contact.html",
        		data: $(form).serialize(),
            	success: function(){
                    $("#form-confirmation").modal('show');   
                },
        		error: function(){
            		$("#form-error").modal('show');
            		}
           });
			
		},

   highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    }

});

 $("#form-confirmation").on('hidden.bs.modal', function(){
        $("#contact-us-form")[0].reset();
    });

$('#newsletter-modal').on('show', function () {
       $(this).find('.modal-body').css({
              width:'auto', //probably not needed
              height:'auto', //probably not needed 
              'max-height':'100%'
       });
});

//distroy newsletter modal after closing - necessary to load new content
$('body').on('hidden.bs.modal', '#newsletter-modal', function () {
  $(this).removeData('bs.modal');
});
	
});

// extending validation defaults:
$.validator.setDefaults({
    errorElement: "span",
    errorClass: "help-block",
    highlight: function (element, errorClass, validClass) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorPlacement: function (error, element) {
        if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

