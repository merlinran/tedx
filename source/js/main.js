//= require bootstrap/affix
//= require bootstrap/dropdown

!function ($) {
  /*jshint camelcase: false*/
  /*global window, document*/
  'use strict';
  $(document).ready(function(){
    $('.affix-top').stick_in_parent();
    $('#title-2015').stick_in_parent({parent: $('body'), offset_top: 100});
  });

  var sections = $('section'), nav = $('.global-nav'), nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
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
    if (e.keyCode === 27) { $('.close').click(); }
  });

  $(document).on('click', '.close', function() {
    $('#player_placeholder').html('');
    $('#player_container').css('display', 'none');
  });

}(window.jQuery);
