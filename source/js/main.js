//= require bootstrap/affix
//= require bootstrap/dropdown

!function ($) {
  /*jshint camelcase: false*/
  /*global window, document, setTimeout*/
  'use strict';
  $(document).ready(function(){
    setTimeout(function () {
      $('.global-nav').affix({
        offset: { top: 10 }
      });
    }, 100);
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
    if (e.keyCode === 27) { $('.close').click(); }
  });

  $(document).on('click', '.close', function() {
    $('#player_placeholder').html('');
    $('#player_container').css('display', 'none');
  });

}(window.jQuery);
