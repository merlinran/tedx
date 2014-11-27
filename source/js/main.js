//= require bootstrap/affix
//= require bootstrap/dropdown

!function ($) {
  /*jshint camelcase: false*/
  'use strict';
  $(function(){
    setTimeout(function () {
      $('.global-nav').affix({
        offset: { top: 10 }
      });
    }, 100);
  });

  /*$('.youku').each(function() {
    $.get(
      'https://openapi.youku.com/v2/playlists/videos.json',
      {
        client_id: '0e24164dfdc4994d',
        playlist_id: $(this).data('playlistId')
      }
    ).success(function(videos) {
      videos.videos.forEach(function(video) {
        $('.youku').append($.templates('#youku-video').render(video));
      });
    });
  });*/
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
    var code = '<embed src="http://player.youku.com/player.php/sid/' + vid + '/v.swf" allowFullScreen="true" width="100%" height="100%" quality="high" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
    $('.player_container').html(code);
    $('.player_container').append('<div class="close">X</div>');
    $('.player_container').css('display', 'block');
  });

  $('.close').hover(function() {
    console.log('hover');
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) { $('.close').click(); }
  });

  $(document).on('click', '.close', function() {
    $('.player_container').html('').css('display', 'none');
  });

}(window.jQuery);
