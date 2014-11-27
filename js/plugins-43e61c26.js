window.console&&console.log||!function(){for(var t=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],i=o.length,f=window.console={};i--;)f[o[i]]=t}(),/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#affix
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var o=function(o,i){this.options=t.extend({},t.fn.affix.defaults,i),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(o),this.checkPosition()};o.prototype.checkPosition=function(){if(this.$element.is(":visible")){var o,i=t(document).height(),f=this.$window.scrollTop(),n=this.$element.offset(),e=this.options.offset,s=e.bottom,a=e.top,c="affix affix-top affix-bottom";"object"!=typeof e&&(s=a=e),"function"==typeof a&&(a=e.top()),"function"==typeof s&&(s=e.bottom()),o=null!=this.unpin&&f+this.unpin<=n.top?!1:null!=s&&n.top+this.$element.height()>=i-s?"bottom":null!=a&&a>=f?"top":!1,this.affixed!==o&&(this.affixed=o,this.unpin="bottom"==o?n.top-f:null,this.$element.removeClass(c).addClass("affix"+(o?"-"+o:"")))}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var f=t(this),n=f.data("affix"),e="object"==typeof i&&i;n||f.data("affix",n=new o(this,e)),"string"==typeof i&&n[i]()})},t.fn.affix.Constructor=o,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var o=t(this),i=o.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),o.affix(i)})})}(window.jQuery);