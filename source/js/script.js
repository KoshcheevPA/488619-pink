var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var navToggleImage = document.querySelector('.main-navigation__image');
var siteList = document.querySelector('.site-list');
var headerColor = document.querySelector('.page-header');
var burger =  document.querySelector('.main-navigation__image-wrapper--burger');
var cross =  document.querySelector('.main-navigation__image-wrapper--cross');
var page =  document.querySelector('.page');
var menuIconWrapper = document.querySelector('.main-navigation__image-wrapper');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-navigation__toggle--nojs');
siteList.classList.remove('site-list--nojs');
headerColor.classList.remove('page-header--nojs');
menuIconWrapper.classList.remove('main-navigation__image-wrapper--nojs');

navToggle.addEventListener('click', function() {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list--opened');

    navToggle.classList.remove('main-navigation__toggle--opened');
    navToggle.classList.add('main-navigation__toggle--closed');

    headerColor.classList.remove('page-header--menu-closed');
    headerColor.classList.add('page-header--menu-opened');

    cross.classList.add('main-navigation__image-wrapper--opened');
    burger.classList.remove('main-navigation__image-wrapper--opened');
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list--opened');

    navToggle.classList.add('main-navigation__toggle--opened');
    navToggle.classList.remove('main-navigation__toggle--closed');

    headerColor.classList.add('page-header--menu-closed');
    headerColor.classList.remove('page-header--menu-opened');

    cross.classList.remove('main-navigation__image-wrapper--opened');
    burger.classList.add('main-navigation__image-wrapper--opened');
  }
});
