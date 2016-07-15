var myApp = angular.module("myApp", ['ngRoute','controllers', 'services']);
var cachedBooksData = JSON.parse(localStorage.getItem("booksData"));

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/booksList', {
          templateUrl: 'bookList.html',
          controller: 'bookList',
          activetab: 'booksList'
      }).
      when('/', {
          templateUrl: 'addBooks.html',
          controller: 'addBooksController',
          activetab: 'addBooks'
      }).
      when('/favouriteList', {
          templateUrl: 'favouriteBooksList.html',
          controller: 'favouriteBooksController',
          activetab: 'favouriteBooks'
      }).
      otherwise({
          redirectTo: '/'
      });
  }
]);



