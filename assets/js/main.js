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
            chariloveJs.owlSlider();
            chariloveJs.swiperSlider();
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
        swiperSlider: function () {
            var swiper = new Swiper(".bannerOne-swiper", {
                preloadImages: false,
                // autoplay: {
                //     delay: 4000,
                //     disableOnInteraction: false
                // },
                init: true,
                loop: true,
                speed: 1200,
                grabCursor: true,
                mousewheel: false,
                keyboard: true,
                simulateTouch: true,
                parallax: true,
                effect: "fade",
                navigation: {
                    nextEl: ".swiper_button_prev",
                    prevEl: ".swiper_button_next"
                }
            });

            //campaign slider
            var swiper = new Swiper(".campaignSwiper-one-slider", {
                loop: true,
                speed: 1500,
                autoHeight: false,
                slidesPerView: 1,
                centeredSlides: true,
                effect: 'slide',
                // autoplay: {
                //     delay: 2000,
                // },
                Parallax:true,
                navigation: {
                    nextEl: ".swiper_button_prev",
                    prevEl: ".swiper_button_next"
                }
            });

            //team slider
            var swiper = new Swiper(".teamOne-slider", {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 60,
                // autoplay: {
                //     delay: 2000,
                // },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        resistanceRatio: 0.85
                    },
                    768: {
                        slidesPerView: 2,
                        resistanceRatio: 0.85
                    },
                    980: {
                        slidesPerView: 3,
                        resistanceRatio: 0.85
                    },
                },
                navigation: {
                    nextEl: ".swiper_button_prev",
                    prevEl: ".swiper_button_next"
                }
            });

            //testimonials slider home-01

            var swiper = new Swiper(".teslimonialsOne-slider", {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                // autoplay: {
                //     delay: 2000,
                // },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        resistanceRatio: 0.85
                    },
                    768: {
                        slidesPerView: 1,
                        resistanceRatio: 0.85
                    },
                    980: {
                        slidesPerView: 2,
                        resistanceRatio: 0.85
                    },
                },
                navigation: {
                    nextEl: ".swiper_button_prev",
                    prevEl: ".swiper_button_next"
                }
            });

            //testimonials slider home-02

            var swiper = new Swiper(".teslimonialsTwo-slider", {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                // autoplay: {
                //     delay: 2000,
                // },
                navigation: {
                    nextEl: ".swiper_button_prev",
                    prevEl: ".swiper_button_next"
                }
            });
        },
        owlSlider: function () { 

            //testimonials slider home-03
            $('.teslimonials-slider-wrap-three').owlCarousel({
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
                    items:2
                },
                1024:{
                    items:3
                },
                }
            })
            var selectorThree = $('.teslimonials-slider-wrap-three');

            $('.testimonial-next-button').click(function() {
                selectorThree.trigger('next.owl.carousel');
            });

            $('.testimonial-prev-button').click(function() {
                selectorThree.trigger('prev.owl.carousel');
            });
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
  
 
    
     
    (function($){
        new WOW().init();
    })(jQuery);

    const block = document.querySelectorAll('.block');
    window.addEventListener('load', function() {
    block.forEach(item => {
        let numElement = item.querySelector('.num');
        let num = parseInt(numElement.innerText);
        let count = 0;
        let time = 2000 / num;
        let circle = item.querySelector('.circle');
    
    this.setInterval(() =>{
        if(count == num){
        this.clearInterval();
        }else {
        count += 1;
        numElement.innerText = count;
        }
    }, time)
    circle.style.strokeDashoffset 
    = 283 - ( 283 * ( num / 100));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
    `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
        dots.style.opacity = 0;
    }
    })
    });