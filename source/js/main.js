!function ($) {
  /*jshint camelcase: false*/
  'use strict';
  $(function(){
    setTimeout(function () {
      $('.global-nav').affix({
        offset: { top: 435 }
      });
    }, 100);
  });

  $('.youku').each(function() {
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
  });

}(window.jQuery);
