

angular.module('controllers',[])

.controller('mainController',['$scope', '$http','libraryManagement',function ($scope, $http,libraryManagement) {
  $scope.booksCount = libraryManagement.booksData.length;
  $scope.favCount = libraryManagement.favouriteBooksData.length;
}])

.controller('addBooksController',['$scope', '$http','libraryManagement',function ($scope, $http,libraryManagement) {
    $scope.addBooksData = function () {
    if($scope.name && $scope.authour && $scope.price){
      libraryManagement.addBooks($scope.name,$scope.authour,$scope.price);
    }else{
      alert("you missed something, require all fields to continue;");
    }
  };
}])




.controller('bookList',['$scope', '$http','libraryManagement',function ($scope, $http,libraryManagement) {

  libraryManagement.showBooks().request1.success(function (data) {
     $scope.data = data;
     console.log(data);
  });
  // $scope.deleteBook = function (id) {
  //   libraryManagement.deleteBook(id);
  // };
  

}])

.controller('favouriteBooksController',['$scope', '$http','libraryManagement',function ($scope, $http,libraryManagement) {
  $scope.libraryDataService  = libraryManagement;
  
  $scope.data = libraryManagement.booksData.filter(function(item, index) {
    return item.favourite == true;
  });

  // $scope.data = libraryManagement.booksData;
  // $scope.deleteBook = function (id) {
  //   libraryManagement.deleteBook(id);
  // }

}]);