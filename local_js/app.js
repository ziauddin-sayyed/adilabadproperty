jQuery(document).ready(function($) {

  // Social Sharing and video pop up
  video_and_social_share();

  jQuery('.search-results-view i').on('click', function() {
    jQuery('.search-results-view i').removeClass('active');
    jQuery(this).toggleClass('active');
    jQuery('#property-items').fadeTo(300, 0, function() {
      jQuery(this).fadeTo(300, 1);
    });

    setTimeout(function() {
      jQuery('#property-items').attr('data-view', jQuery('.search-results-view i.active').attr('data-view'));
      jQuery('#property-items').removeClass('list-view').removeClass('grid-view');
      jQuery('#property-items').addClass(jQuery('.search-results-view i.active').attr('data-view'));
    }, 300);
  });

  jQuery('.property-header-container').on('click touchend', '.hide-title, .show-title', function(e) {
    e.preventDefault();    
    jQuery('.property-header').slideToggle('slow');
    jQuery('.show-title').slideToggle('slow');
    jQuery('.tooltip.in').hide();
  });

  $('.js-scroll-top').on('click touchend', function (e) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  
  $('.js-scroll-top-search').on('click touchend', function (e) {
    $('html, body').animate({scrollTop:$('#search_top').position().top}, 'slow');
  });
  
   
  $('a[href^="#modal-"]').magnificPopup({
    type: 'inline',
    showCloseBtn: false,
    callbacks: {
      open: function() {
        if ($('body').hasClass('show-nav')) {
          $('.navbar-toggle').click();
        }
      }
    }
  });
  
  
  $(document).on('click', '.modal-close', function (e) {
  	e.preventDefault();
		$.magnificPopup.close();
	});
	
	
	var $suburbListingsContainer = $('.js-load-suburb-listings');
	
	if ($suburbListingsContainer.length > 0) {
	  var loadURL = $suburbListingsContainer.data('url');
	  $suburbListingsContainer.load(loadURL);
	};
	
	$('.home-img-slide').each(function() {
	  var src = $(this).find('img').attr('src');
	  $(this).css('background-image', 'url(' + src + ')');
	});
	
  $('.js-agent-testimonials-trigger').click(function(e) {
    e.preventDefault();
    $(this).remove();
    $('.agent-page-testimonial-list').removeClass('is-collapsed')
  });
  
  $(".js-bookmark").click(function(e) {
      e.preventDefault();
      // Mozilla Firefox Bookmark
      if ('sidebar' in window && 'addPanel' in window.sidebar) { 
          window.sidebar.addPanel(location.href,document.title,"");
      } else if( /*@cc_on!@*/false) { // IE Favorite
          window.external.AddFavorite(location.href,document.title); 
      } else { // webkit - safari/chrome
          alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
      }
  });
        
}); // END document.ready

jQuery(window).load(function() {
  if (isMobile) {
    var heightFullscreenBoxed = heightFullscreen - 15; // margin-top to header
  } else {
    var heightFullscreenBoxed = heightFullscreen - 50; // margin-top to header
  }

  if (jQuery('#property-layout-boxed .property-image-container').hasClass('cut')) {
    jQuery('#property-layout-boxed .property-image').css('height', heightFullscreenBoxed);
  } else {
    jQuery('#property-layout-boxed .property-image').css('height', heightFullscreenBoxed);
  }

  if (jQuery('#property-layout-full-width .property-image-container').hasClass('cut')) {
    jQuery('#property-layout-full-width .property-image').css('height', heightFullscreen);
  } else {
    jQuery('#property-layout-full-width .property-image').css('height', heightFullscreen);
  }

  jQuery('body.single-property .property-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      tPrev: '',
      tNext: '',
      tCounter: '%curr% | %total%'
    }
  });

  // Datepicker
  jQuery('.datepicker').datepicker({
    language: 'en',
    autoclose: true,
    isRTL: false,
    format: "yyyymmdd",
  });
}); // END window.load

jQuery('.menu-item-has-children, .menu-item-language').click(function() {
    if (jQuery('body').hasClass('show-nav')) {
      jQuery(this).find('.sub-menu').toggleClass('show');
    }
});

