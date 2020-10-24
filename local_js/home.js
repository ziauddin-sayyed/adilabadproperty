jQuery(document).ready(function($) {
  jQuery('#template-slideshow .owl-lazy').css('height', 720);

  // Pause autoplay on slide hover, but not on mobile devices.
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    var slideshowPauseHover = 'false';
  } else {
    var slideshowPauseHover = 'true';
  }

  var slideshow = jQuery('#template-slideshow .slides');
  
  if( $(slideshow).find('.slide').length>1 ) {
    loopStr = true;  
  } else {
    loopStr = false;
  }
  
  slideshow.owlCarousel({
    items: 1,
    margin: 0,
    lazyLoad: true,
    loop: loopStr,
    mouseDrag: 1,
    touchDrag: 1,
    navContainerClass: 'owl-nav',
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: false,
    dots: true,
    autoHeight: false,
    autoplay: true,
    autoplayTimeout: 4000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  });

  slideshow.fadeTo(400, 1, function() {
    jQuery('.spinner').remove();
  });

  jQuery('#template-slideshow').on('click', function() {
    slideshow.trigger('stop.owl.autoplay');
  })
  
  $('.js-search-modal').on('shown.bs.modal', function () {
    $('html').addClass('modal-open');
  });
  $('.js-search-modal').on('hidden.bs.modal', function () {
    $('html').removeClass('modal-open');
  })

  $('.widget_latest_posts img').each(function(i, obj) {
    var src = $(this).attr('src').split('?')[0];
    $(this).removeAttr('src');
    $(this).attr('src',src+'?crop=730x490');
  });
  
  
  //====================================
  //ajax loading for listings on home page
  
  var ajaxSimple = function(container) {
    
    var ui = {};
    
    this.init = function() {
      setUI();
      bindEvents();
      initialLoad();
    };
    
    var setUI = function() {
      ui.$container = $(container);
      if (selector = ui.$container.data('scroll-to')) ui.$scrollTo = $(selector);
    };
    
    var bindEvents = function() {
      ui.$container.delegate('a.page-numbers', 'click', onNavClick)
    };
    
    var initialLoad = function() {
      var url = ui.$container.data('href');
      ui.$container.load(url);
    };
    
    var onNavClick = function(e) {
      e.preventDefault();
      var url = $(this).attr('href');
      fixHeight();
      ui.$container.load(url, null, function() {
        setTimeout(function(){
          ui.$container.height('auto');
        }, 2000);
        
        if(ui.$scrollTo) {
          var top = ui.$scrollTo.position().top - 30;
          $('html, body').animate({ scrollTop: top }, 500);  
        }
      });
    }
    
    var fixHeight = function() {
      var h = ui.$container.outerHeight(true);
      ui.$container.height(h);
    };
    
  };//ajaxSimple
  
  new ajaxSimple('.ajax-simple-container-auctions').init();
  new ajaxSimple('.ajax-simple-listings').init();

});//end ready

requestAnimationFrame(function() { });
