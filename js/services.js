

angular.module('services', [])

.service('libraryManagement', function(){
  this.booksData = [],
  this.booksCount = 0;
  var that= this;

  if(cachedBooksData){
    this.booksCount = cachedBooksData.length;
    this.booksData = cachedBooksData;
  }
   
  this.addBooks = function(name, authour, price) {
    this.booksCount += 1;
    this.booksData.push({
      id: this.booksCount,
      book_name : name,
      author_name : authour,
      price: price,
      favourite: false
    });
    this.updateLocalstorageData();
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