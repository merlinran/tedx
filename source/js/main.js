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
      elem.find('.talk-thumbnail').attr('src', video.bigThumbnail);
    });
  });
}(window.jQuery);
