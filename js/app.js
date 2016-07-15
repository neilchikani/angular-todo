var myApp = angular.module("myApp", ['ngRoute','controllers', 'services']);
var cachedBooksData = JSON.parse(localStorage.getItem("booksData"));

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/booksList', {
          templateUrl: 'bookList.html',
          controller: 'bookList'
      }).
      when('/', {
          templateUrl: 'addBooks.html',
          controller: 'addBooksController'
      }).
      when('/favouriteList', {
          templateUrl: 'favouriteBooksList.html',
          controller: 'favouriteBooksController'
      }).
      otherwise({
          redirectTo: '/'
      });
  }
]);



