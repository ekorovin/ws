/**
 * Header:        Implementation
 * Description:    An extension of the lpch.BaseView object
 *                Patient Story javascript
 */
lpch.PatientStory = lpch.BaseView.extend({

    _this: null,
    readSlider: null,
    helpedSlider: null,
    meetSlider: null,
    masterSlider: null,
    breakpoint: null,
    timeoutDuration: 700,

    initialize: function () {
        // Self-reference for scoping
        _this = this;

        /**
         * Initialize the bxslider's in the panels
         */
        this.setupBxSlider();

        /**
         * Trigger colorbox modal for video
         
        this.$el.find('.youtube').colorbox({
            iframe: true,
            innerWidth: 620,
            innerHeight: 404,
            fixed: true,
            onComplete: function () {
                var orientation = module.view.getCurrentOrientation();
                if (orientation == 'smartphone') {
                    $.colorbox.resize({
                        innerWidth: ($(document).width() * .9),
                        innerHeight: (($(document).width() * .625) * .9)
                    });
                }
            }
        });
        */

        this.$el.find('.breadcrumb').not('.breadcrumb.home').click(function () {
            _this.masterSlider.goToSlide(0);
        });

        /**
         * Trigger Accordion in smartphone view
         * adjusts height of (opens) next div when user clicks an accordion (h3) toggle
         */
        $('.panel h3').click(function () {
            if (_this.breakpoint === "smartphone") {
                // toggle the panel
                var $innerPanel = $(this).parent().find('.inner-panel');
                if ($innerPanel.height() === 0){
                    $innerPanel.css("height", "");
                } else {
                    $innerPanel.css('height', '0px');
                }
                // toggle the arrow open and closed
                $(this).find('.arrow').toggleClass('closed open');
            }
        });

        // invoke the super method
        lpch.BaseView.prototype.initialize.call(this);
    },

    /**
     * Click binding for the tabs in tablet and desktop mode
     */
    initTabs: function () {
        var $tab = $('.tab');
        $tab.unbind('click');
        $tab.click(function () {
            $tab.removeClass('active');
            $(this).toggleClass('active');
            console.log(jQuery.inArray(this, $tab) + 1)
            _this.masterSlider.goToSlide(jQuery.inArray(this, $tab) + 1);
        });
    },

    /**
     * Hides the mobile view panels and resets the arrows to the closed position
     */
    hidePanels: function () {
        $('.read-his-story .inner-panel').css("height", "0px");
        $('.meet-team .inner-panel').css("height", "0px");
        $('.how-we-helped .inner-panel').css("height", "0px");
        $('.watch-video .inner-panel').css("height", "0px");
        $('h3 .arrow').removeClass('closed open').addClass('closed'); // make sure arrows are closed when going back to the mobile view
    },

    /**
     * Fire off handleLayoutChange on page load as well as on page layout change
     */
    setupBxSlider: function () {
        _this.handleLayoutChange(module.view.getCurrentLayout());
    },

    /**
     * This callback fires whenever the layout changes
     * @param layout - a layout object
     */
    handleLayoutChange: function (layout) {
        // hide the panels on smartphone view when switching to it from another view.
        if (_this.breakpoint !== layout.attributes.orientation) {
            if(layout.attributes.orientation === "smartphone") {
                _this.hidePanels();
            }
        }

        _this.breakpoint = layout.attributes.orientation; // store our initial breakpoint
        $('.inner-panel').css("height", ""); // if user goes from mobile to another view, make sure the sliders are displayed so they render properly
        $('.tab').removeClass('active'); // Resetting tabs to inactive states on change orientation.
        $('.sharing.hidden-phone').removeClass('white'); // make sure icons are no longer white

        if (layout.attributes.orientation === 'desktop') {
            _this.setupDesktopView();
        } else if (layout.attributes.orientation === 'tablet') {
            _this.setupTabletView();
        } else if (layout.attributes.orientation === 'smartphone') {
            _this.setupSmartphoneView();
        }
    },

    /**
     * Builds / reloads the desktop view
     */
    setupDesktopView: function () {
        var desktopImgSliderOptions = {
            minSlides: 2,
            maxSlides: 2,
            slideWidth: "235px",
            slideMargin: 0,
            slideSelector: ".slide",
            useCSS: true
        };

        var desktopSliderOptions = {
            minSlides: 1,
            maxSlides: 1,
            slideWidth: "540px",
            slideMargin: 0,
            slideSelector: ".slide",
            useCSS: true
        };

        var masterSliderOptions = {
            onSliderLoad: function () {
                _this.initTabs();

                /**
                 * Reinitializing the inner sliders after the master slider has been broken down. Using a timeout to prevent
                 * the master slider and children sliders from interfering with each other.
                 */
                var loadSliders = setTimeout(function () {
                    if (_this.readSlider !== null) {
                        _this.readSlider.reloadSlider(desktopSliderOptions);
                    } else {
                        _this.readSlider = $('.read-his-story .bxslider').bxSlider(desktopSliderOptions);
                    }

                    if (_this.meetSlider !== null) {
                        _this.meetSlider.reloadSlider(desktopImgSliderOptions);
                    } else {
                        _this.meetSlider = $('.meet-team .bxslider').bxSlider(desktopImgSliderOptions);
                    }

                    if (_this.helpedSlider !== null) {
                        _this.helpedSlider.reloadSlider(desktopImgSliderOptions);
                    } else {
                        _this.helpedSlider = $('.how-we-helped .bxslider').bxSlider(desktopImgSliderOptions);
                    }
                }, _this.timeoutDuration);
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                // handle the tab active state
                $('.tab').removeClass('active');

                if (newIndex !== 0) {
                    $('.tab:eq(' + (newIndex - 1) + ')').toggleClass('active');
                }

                // changing colors of sharing icons
                if (newIndex === 2 || newIndex === 3) {
                    $('.sharing.hidden-phone').addClass('white');
                } else {
                    $('.sharing.hidden-phone').removeClass('white');
                }
            },
            pager: false,
            controls: false,
            touchEnabled: false,
            infiniteLoop: false
        };

        if (_this.masterSlider !== null) {
            _this.masterSlider.reloadSlider(masterSliderOptions);
        } else {
            _this.masterSlider = $('.main.bxslider').bxSlider(masterSliderOptions);
        }
    },

    /**
     * Builds / reloads the tablet view
     */
    setupTabletView: function () {
        var tabletImgSliderOptions = {
            minSlides: 3,
            maxSlides: 3,
            slideWidth: "360px",
            slideMargin: 0,
            slideSelector: ".slide",
            adaptiveHeight: false,
            useCSS: true
        };

        var tabletSliderOptions = {
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 0,
            slideSelector: ".slide",
            adaptiveHeight: false,
            useCSS: true
        };

        var masterSliderOptions = {
            onSliderLoad: function () {
                _this.initTabs();

                /**
                 * Reinitializing the inner sliders after the master slider has been broken down. Using a timeout to prevent
                 * the master slider and children sliders from interfering with each other.
                 */
                var loadSliders = setTimeout(function () {
                    if (_this.readSlider !== null) {
                        _this.readSlider.reloadSlider(tabletSliderOptions);
                    } else {
                        _this.readSlider = $('.read-his-story .bxslider').bxSlider(tabletSliderOptions);
                    }

                    if (_this.meetSlider !== null) {
                        _this.meetSlider.reloadSlider(tabletImgSliderOptions);
                    } else {
                        _this.meetSlider = $('.meet-team .bxslider').bxSlider(tabletImgSliderOptions);
                    }

                    if (_this.helpedSlider !== null) {
                        _this.helpedSlider.reloadSlider(tabletImgSliderOptions);
                    } else {
                        _this.helpedSlider = $('.how-we-helped .bxslider').bxSlider(tabletImgSliderOptions);
                    }
                }, _this.timeoutDuration);

            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                // handle the tab active state
                $('.tab').removeClass('active');
                if (newIndex !== 0) {
                    $('.tab:eq(' + (newIndex - 1) + ')').toggleClass('active');
                }

                // changing colors of sharing icons (make sure it's always white here)
                if (newIndex) {
                    $('.sharing.hidden-phone').removeClass('white');
                }
            },
            pager: false,
            controls: false,
            touchEnabled: false
        };


        if (_this.masterSlider !== null) {
            _this.masterSlider.reloadSlider(masterSliderOptions);
        } else {
            _this.masterSlider = $('.main.bxslider').bxSlider(masterSliderOptions);
        }
    },

    /**
     * Builds / reloads the smart phone view
     */
    setupSmartphoneView: function () {
        var hidePanels = false;
        if (_this.masterSlider !== null) {
            _this.masterSlider.destroySlider();
        } else {
            hidePanels = true; // hide the panels if the page is loaded in smartphone view
        }

        /**
         * Reinitializing the inner sliders after the master slider has been broken down. Using a timeout to prevent
         * the master slider and children sliders from interfering with each other.
         */
        var loadSliders = setTimeout(function () {
            // _this.masterSlider.destroySlider leaves remnant inline styles in the DOM. Removing those here.
            $('.panel').css("width", "100%");

            var options = {
                minSlides: 1,
                maxSlides: 1,
                slideSelector: ".slide",
                useCSS: true
            };

            if (_this.readSlider !== null) {
                _this.readSlider.reloadSlider(options);
            } else {
                _this.readSlider = $('.read-his-story .bxslider').bxSlider(options);
            }

            if (_this.meetSlider !== null) {
                _this.meetSlider.reloadSlider(options);
            } else {
                _this.meetSlider = $('.meet-team .bxslider').bxSlider(options);
            }

            if (_this.helpedSlider !== null) {
                _this.helpedSlider.reloadSlider(options);
            } else {
                _this.helpedSlider = $('.how-we-helped .bxslider').bxSlider(options);
            }

            var hideSliders = setTimeout(function () {
                _this.hidePanels();
            }, _this.timeoutDuration);

        }, _this.timeoutDuration);
    },

    handleViewportChange: function (width, height) {

    }

});

/**
 * Header:        Initialization
 * Description:    Listen for 'initializeComponents' triggered from Document.js
 *                Then initialize lpch.Header
 */
$(window).bind('initializeComponents', function() {
	$('.patient-story').each(function(index) {
		new lpch.PatientStory({
	        el: this
	    });
	});
});