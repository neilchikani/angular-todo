

angular.module('services', [])

.service('libraryManagement', function($http,$route){
  this.booksData = [],
  this.booksCount = 0;
  var that= this;

  if(cachedBooksData){
    this.booksCount = cachedBooksData.length;
    this.booksData = cachedBooksData;
  }

  this.showBooks = function () {
    return {
      request1: $http.get('/users')
     }
  };
   
  this.addBooks = function(name, authour, price) {
    // this.booksCount += 1;
    $http({
      method: 'POST',
      url: '/users',
      data: {
        book_name : name,
        authour_name : authour,
        price : price
      }
      })
      .success(function (data) {
           
      })
      .error(function (data, status) {
        
      });
  };
  
  this.deleteBook = function(id) {
    $http({
      method: 'DELETE',
      url: '/users',
      params: {user_id: id}
      })
      .success(function (data) {
           
      })
      .error(function (data, status) {
        
      });
  };

  this.updateLocalstorageData = function (argument) {
     localStorage.setItem("booksData", JSON.stringify(that.booksData));
  };

  this.favouriteBooksData = this.booksData.filter(function(item, index) {
    return item.favourite == true;
  });

});