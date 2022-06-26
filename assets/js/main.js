(function (window, document, $, undefined) {
    'use strict';

    let chariloveJs = {
        i: function (e) {
            chariloveJs.d();
            chariloveJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function (e) {
            chariloveJs.headerSticky();
            chariloveJs.aboutAnimation();
            chariloveJs.salActive();
            chariloveJs.popupMobileMenu();
            chariloveJs.searchPopup();
            chariloveJs.contactForm();
            chariloveJs.counterUp();
        },

        headerSticky: function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header-sticky').addClass('sticky')
                } else {
                    $('.header-sticky').removeClass('sticky')
                }
            })
        },


        aboutAnimation: function () {
            $('.scene').each(function () {
                new Parallax($(this)[0]);
            });
        },

        salActive: function () {
            sal({
                threshold: 0.01,
                once: true,
            });
        },
        counterUp: function () {
            var elementSelector = $('.odometer');
            elementSelector.each(function(){
                elementSelector.appear(function(e) {
                    var el = this;
                    var updateData = $(el).attr("data-count");
                    var od = new Odometer({
                        el: el,
                        format: '(,ddd).dd',
                        duration: 2000
                    });
                    od.update(updateData);
                });
            });
        },

        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });
            $('.close-menu').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a').removeClass('open')
            });
            $('.popup-mobile-menu .mainmenu .has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rn-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })
            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-droupdown > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-droupdown > a').removeClass('open');
            });
        },

        searchPopup: function () {
            $('.search-trigger').on('click', function () {
                $('.chari-search-popup').addClass('open')
            })
            $('.close-trigger').on('click', function () {
                $('.chari-search-popup').removeClass('open')
            })
            $( '.chari-search-popup' ).on( 'click', function () {
                $('.chari-search-popup').removeClass( 'open' );
            } )
            $('.chari-search-popup .doob-search-popup-field').on('click', function (e) {
                e.stopPropagation();
            })
        },


        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'mail.php',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rn-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        },

        


    }

    chariloveJs.i();

})(window, document, jQuery)

  // banner slider 
  var bannerVar = $('.banner-owl');
    bannerVar.owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        navText: [
            '<span class="icon-6"></span>',
            '<span class="icon-7"></span>'
        ],
        dots: false,
        autoplay: false,
        // animateOut: 'fadeIn',
        // animateOut: 'fadeOut',
        // autoplayHoverPause: true,
        // autoplayTimeout: 3000,
        // smartSpeed: 1200,
        items: 1
    });

    //nav-tabs
    function tabChange() {
        var tabs = $('.nav-tabs > li');
        var active = tabs.filter('.active');
        var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        next.tab('show');
    }

      // Tab Cycle function
        var tabCycle = setInterval(tabChange, 5000)
            
    // Tab click event handler
    $(function(){
        $('.nav-tabs a').click(function(e) {
            e.preventDefault();
            clearInterval(tabCycle);
            $(this).tab('show')
        });
    });

     //campaign slider
   var campaignSlider = $('.campaign-slider');
   campaignSlider.owlCarousel({
     loop:true,
     margin:10,
     dots: false,
     nav:false,
     autoplay: false,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:1
         },
         1000:{
             items:1
         }
       } 
   });
   var selectorAll = $('.campaign-slider');

   $('.campaign-next-button').click(function() {
     selectorAll.trigger('next.owl.carousel');
   });

   $('.campaign-prev-button').click(function() {
     selectorAll.trigger('prev.owl.carousel');
   });
   

     //team slider
     var teamSlider = $(".team-slider");
     teamSlider.owlCarousel({
       loop:true,
       margin:10,
       dots: false,
       nav:true,
       navText: [
         '<span class="icon-6"></span>',
         '<span class="icon-7"></span>'
     ],
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:2
           },
           1025:{
               items:3
           }
       }
   });
 
     //testimonials slider home-01
     var testimonialSlider = $('.teslimonials-slider-wrap');
       testimonialSlider.owlCarousel({
         loop:true,
         margin:10,
         dots: false,
         nav:false,
         autoplay: false,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:1
             },
             1024:{
                 items:2
             },
             1025:{
                 items:2
             }
           } 
       })
       var selector = $('.teslimonials-slider-wrap');
 
       $('.testimonials-next-button').click(function() {
         selector.trigger('next.owl.carousel');
       });
 
       $('.testimonials-prev-button').click(function() {
         selector.trigger('prev.owl.carousel');
       });

       //testimonials slider home-02
     var testimonialSlider = $('.teslimonials-two-slider-wrap');
     testimonialSlider.owlCarousel({
       loop:true,
       margin:10,
       dots: false,
       nav:false,
       autoplay: false,
       items: 1, 
     })
     var selector = $('.teslimonials-two-slider-wrap');

     $('.testimonials-next-button').click(function() {
       selector.trigger('next.owl.carousel');
     });

     $('.testimonials-prev-button').click(function() {
       selector.trigger('prev.owl.carousel');
     });
     
    (function($){
        new WOW().init();
    })(jQuery);