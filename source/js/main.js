//= require bootstrap/affix
//= require bootstrap/dropdown
//= require bootstrap/carousel

!function ($) {
  /*jshint camelcase: false*/
  /*global window, document, setTimeout*/
  'use strict';
  $(function(){
    setTimeout(function () {
      $('.global-nav').affix({
        offset: { top: 10 }
      });
    }, 100);
  });

  $('.talk').each(function() {
  var elem = $(this);
    $.get(
      'https://openapi.youku.com/v2/videos/show.json',
      {
        client_id: '0e24164dfdc4994d',
        video_id: $(this).data('vid')
      }
    ).success(function(video) {
      elem.find('.talk-thumbnail img').attr('src', video.bigThumbnail);
    });
  });

  $('.talk').click(function() {
    var vid = $(this).closest('.talk').data('vid');
    window.playVideo('player_placeholder', vid);
    // var code = '<iframe height=498 width=510 src="http://player.youku.com/embed/' + vid + 'XODEyODkwODA4" frameborder=0 allowfullscreen></iframe>'
    // var code = '<embed src="http://player.youku.com/player.php/sid/' + vid + '/v.swf" allowFullScreen="true" width="100%" height="100%" quality="high" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
    // $('.player_container').html(code);
    // $('.player_container').append('<div class="close">X</div>');
    // $('.player_container').css('display', 'block');
    $('#player_container').css('display', 'block');
  });

  $(document).keyup(function(e) {
    // Esc key pressed
    if (e.keyCode === 27) { $('.close').click(); }
  });

  $(document).on('click', '.close', function() {
    $('#player_placeholder').html('');
    $('#player_container').css('display', 'none');
  });

}(window.jQuery);
