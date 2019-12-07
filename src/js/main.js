// 'use strict';

// // populate copyright in footer with current year
// const copyrightYear = document.querySelector('.copyright-year');
// const now = new Date();
// copyrightYear.innerHTML = now.getFullYear();
// $(function () {
//   setNavigation();
// });
$(document).ready(function () {
  var url = window.location;
  $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
  $('ul.nav a').filter(function() {
       return this.href == url;
  }).parent().addClass('active');
});
