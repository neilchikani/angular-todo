

angular.module('services', [])

.service('libraryManagement', function($http){
  this.booksData = [],
  this.booksCount = 0;
  var that= this;

  if(cachedBooksData){
    this.booksCount = cachedBooksData.length;
    this.booksData = cachedBooksData;
  }
   
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
    angular.forEach(that.booksData, function(books, index){
      if (books.id == id) {
        that.booksData.splice(index, 1);
        that.updateLocalstorageData();
      }
    });
  };

  this.updateLocalstorageData = function (argument) {
     localStorage.setItem("booksData", JSON.stringify(that.booksData));
  };

  this.favouriteBooksData = this.booksData.filter(function(item, index) {
    return item.favourite == true;
  });

});