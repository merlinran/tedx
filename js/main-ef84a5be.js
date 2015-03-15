/* ========================================================================
 * Bootstrap: affix.js v3.3.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.affix"),s="object"==typeof e&&e;n||i.data("bs.affix",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.options=t.extend({},o.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};o.VERSION="3.3.1",o.RESET="affix affix-top affix-bottom",o.DEFAULTS={offset:0,target:window},o.prototype.getState=function(t,e,o,i){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=o&&"top"==this.affixed)return o>n?"top":!1;if("bottom"==this.affixed)return null!=o?n+this.unpin<=s.top?!1:"bottom":t-i>=n+a?!1:"bottom";var r=null==this.affixed,f=r?n:s.top,d=r?a:e;return null!=o&&o>=f?"top":null!=i&&f+d>=t-i?"bottom":!1},o.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(o.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},o.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},o.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,n=i.top,s=i.bottom,a=t("body").height();"object"!=typeof i&&(s=n=i),"function"==typeof n&&(n=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var f="affix"+(r?"-"+r:""),d=t.Event(f+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(o.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=o,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var o=t(this),i=o.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(o,i)})})}(jQuery),/* ========================================================================
 * Bootstrap: dropdown.js v3.3.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var i=t(this),n=o(i),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(i.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function o(e){var o=e.attr("data-target");o||(o=e.attr("href"),o=o&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i=o&&t(o);return i&&i.length?i:e.parent()}function i(e){return this.each(function(){var o=t(this),i=o.data("bs.dropdown");i||o.data("bs.dropdown",i=new a(this)),"string"==typeof e&&i[e].call(o)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.1",a.prototype.toggle=function(i){var n=t(this);if(!n.is(".disabled, :disabled")){var s=o(n),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",r)),i.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var n=o(i),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),i.trigger("click");var r=" li:not(.divider):visible a",f=n.find('[role="menu"]'+r+', [role="listbox"]'+r);if(f.length){var d=f.index(e.target);38==e.which&&d>0&&d--,40==e.which&&d<f.length-1&&d++,~d||(d=0),f.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),!function(t){"use strict";t(document).ready(function(){t(".affix-top").stick_in_parent(),t("#2015").stick_in_parent({parent:t("body"),offset_top:100})});var e=t("section"),o=t(".global-nav"),i=o.outerHeight();t(window).on("scroll",function(){var n=t(this).scrollTop();e.each(function(){var s=t(this).offset().top-i,a=s+t(this).outerHeight();n>=s&&a>=n&&(o.find("a").removeClass("active"),e.removeClass("active"),t(this).addClass("active"),o.find('a[href="#'+t(this).attr("id")+'"]').addClass("active"))})}),t(".talk").click(function(){var e=t(this).closest(".talk").data("vid");window.playVideo("player_placeholder",e),t("#player_container").css("display","block")}),t(document).keyup(function(e){27===e.keyCode&&t(".close").click()}),t(document).on("click",".close",function(){t("#player_placeholder").html(""),t("#player_container").css("display","none")})}(window.jQuery);