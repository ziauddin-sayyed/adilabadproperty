$(document).ready(function($) {
  $('#template-slideshow .owl-lazy').css('height', 720);

  // var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  // var slideshowPauseHover  =  isMobile ? 'false' : 'true'; 
  $('.owl-carousel').owlCarousel({
    loop:true,responsiveClass:true,
    responsive:{0:{items:1,nav:true},600:{items:3,nav:false},1000:{items:4,loop:false}}
  });

  var slideshow = $('#template-slideshow .slides');

  loopStr = ( $(slideshow).find('.slide').length>1 ) ? true : false;

  slideshow.owlCarousel({
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    items: 1,
    margin: 0,
    lazyLoad: true,
    loop: loopStr,
    transitionStyle:"fade"
});


  slideshow.fadeTo(400, 1, function() {
    $('.spinner').remove();
  });

  // $('#template-slideshow').on('click', function() {
  //   slideshow.trigger('stop.owl.autoplay');
  // })
  
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






// 50000
// 500000
// 1000000
// 2000000
// 5000000
// 10000000
// 50000000