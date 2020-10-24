jQuery(document).ready(function($) {
  /* magnific popup gallery code blog detail page start*/
    $('.popup-gallery-blog-detail').magnificPopup({  
      delegate: 'img',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: true,
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				return $('.entry-title').text();
  			}
  		},
      
      callbacks: {          
          elementParse: function(item) { item.src = item.el.attr('src'); }
     }
	});
  /* magnific popup gallery code blog detail page end*/
  
  // Code to avoid displaying empty div of date when there is no data for it
  $(".header-meta .month span").each(function( index ) {
    if( $( this ).text() == "" )
      $(this).parent().parent().remove();  
  });
});  
  