var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var navToggleImage = document.querySelector('.main-navigation__image');
var siteList = document.querySelector('.site-list');
var headerColor = document.querySelector('.page-header');
var burger =  document.querySelector('.main-navigation__image--burger');
var cross =  document.querySelector('.main-navigation__image--cross');

var map = document.querySelector('.contacts__map');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-navigation__toggle--nojs');
siteList.classList.remove('site-list--nojs');
headerColor.classList.remove('page-header--nojs');
cross.classList.remove('main-navigation__image--nojs');
burger.classList.remove('main-navigation__image--nojs');

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


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Мы здесь!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/icon-map-marker.svg',
            iconImageSize: [35, 35]
        });

    myMap.geoObjects
        .add(myPlacemark)
});
