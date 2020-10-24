jQuery(document).ready(function($) {

  // Bind social buttons click
  $('.js-share').on('click touchend', shareButtonHandler);

  /**
   *  Share buttons handler
   */
  function shareButtonHandler(e) {
    e.preventDefault();
    var page_name = $('meta[name="page_name"]').prop('content');
    var rootpath = $('meta[name="root_path"]').prop('content');
    var hostname = document.location.origin ;
    var type="";
    var page="";
    var title="";
    var description="";
    var image="";
    
    if( page_name == 'home' || page_name == 'listings' || page_name == 'inspections' || page_name == 'auction' || page_name == 'agent-detail' ) {
          type = $(this).data('share');
          page = hostname + rootpath + $(this).parent('.share-unit').attr('data-page-url');
          title = $(this).parent('.share-unit').attr('data-page-title');
          description = $(this).parent('.share-unit').attr('data-page-description');
          image = $(this).parent('.share-unit').attr('data-image');
             
    }else if( page_name == 'blogs' ) {      
          type = $(this).data('share');
          page = hostname + $(this).parent('.share-unit').attr('data-page-url');
          title = $(this).parent('.share-unit').attr('data-page-title');
          description = $(this).parent('.share-unit').attr('data-page-description');
          image = $(this).parent('.share-unit').closest('.post').find('.header-media img').attr('src');
               
    } else {
          type = $(this).data('share');
          page = window.location.href;
          title = $('meta[property="og:title"]').prop('content')
          description = $('meta[property="og:description"]').prop('content');
          image = $('meta[property="og:image"]').prop('content');
          
          if($('body').hasClass('blog')) {
            image = $(".header-media img").attr('src');
          }  
    }    
      
    $('meta[property="og:title"]').remove();
    $('meta[property="og:description"]').remove();
    $('meta[property="og:image"]').remove();
    $("head").append('<meta property="og:title" content="'+title+'">');
    $("head").append('<meta property="og:description" content="'+description+'">');
    $("head").append('<meta property="og:image" content="'+image+'">');

    switch(type){
      case 'twitter':
        var url = 'https://twitter.com/intent/tweet';
        window.open(url + '?hashtags=generic' + '&text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(page))
      break;
      case 'pinterest':
        PDK.pin(image, title, page, function(){ });
      break;
      case 'facebook':
        var url = 'https://www.facebook.com/sharer/sharer.php';
        window.open(url + '?u=' + encodeURIComponent(page));
      break;
      case 'google':
        var url = 'https://plus.google.com/share';
        window.open(url + '?url=' + encodeURIComponent(page));
      break;
      case 'linkedin':
        var url = 'https://www.linkedin.com/shareArticle?mini=true';
        window.open(url + '&url=' + encodeURIComponent(page));
      break;
      case 'email':
        if(page.search('listing') > -1) {
          var subject = 'My property recommendation';
          var text = 'I found a property you may be interested in. To view it, copy and paste the following URL into the browser: ' + page;
        } else {
          var subject = title;
          var text = description + "\r\nRead more: "+page;
        }
        window.open('mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text));
      break;
    }
  }

  /* Load pinterest SDK */
  (function(d, s, id){
    var js, pjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "local_js/sdk.js";
    pjs.parentNode.insertBefore(js, pjs);
  }(document, 'script', 'pinterest-jssdk'));

});
