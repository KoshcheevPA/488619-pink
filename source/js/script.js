var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var navToggleImage = document.querySelector('.main-navigation__image');
var siteList = document.querySelector('.site-list');
var headerColor = document.querySelector('.page-header');
var burger =  document.querySelector('.main-navigation__image--burger');
var cross =  document.querySelector('.main-navigation__image--cross');

var map = document.querySelector('.contacts__map');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-navigation__toggle--nojs')
siteList.classList.remove('site-list--nojs');
headerColor.classList.remove('page-header--nojs');;

navToggle.addEventListener('click', function() {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');

    navToggle.classList.remove('main-navigation__toggle--opened');
    navToggle.classList.add('main-navigation__toggle--closed');

    headerColor.classList.remove('page-header--menu-closed');
    headerColor.classList.add('page-header--menu-opened');

    cross.classList.add('main-navigation__image--opened');
    burger.classList.remove('main-navigation__image--opened');
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');

    navToggle.classList.add('main-navigation__toggle--opened');
    navToggle.classList.remove('main-navigation__toggle--closed');

    headerColor.classList.add('page-header--menu-closed');
    headerColor.classList.remove('page-header--menu-opened');


    cross.classList.remove('main-navigation__image--opened');
    burger.classList.add('main-navigation__image--opened');
  }
});
//
// if (navToggle.classList.contains('main-navigation__toggle--opened')) {
//   cross.classList.remove('main-navigation__image--opened');
//   cross.classList.add('main-navigation__image--closed');
//   burger.classList.add('main-navigation__image--opened');
// } else if (navToggle.classList.contains('main-navigation__toggle--closed')) {
//   cross.classList.add('main-navigation__image--opened');
//   burger.classList.remove('main-navigation__image--opened');
//   burger.classList.add('main-navigation__image--closed');
// }
