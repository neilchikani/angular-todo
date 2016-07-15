

angular.module('controllers',[])

.controller('mainController',['$scope', '$http','libraryManagement','$route',function ($scope, $http,libraryManagement,$route) {
  $scope.booksCount = libraryManagement.booksData.length;
  $scope.favCount = libraryManagement.favouriteBooksData.length;
  // watch the service and update this ctrl...
  $scope.$watch(function(){
    return libraryManagement.booksData.length;
  }, function(newValue){
    $scope.booksCount = newValue;
  });
  $scope.$watch(function(){
    return libraryManagement.favouriteBooksData.length;
  }, function(newValue){
    $scope.favCount = newValue;
  });
  $scope.$route = $route;
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




.controller('bookList',['$scope', '$http','libraryManagement','$route',function ($scope, $http,libraryManagement,$route) {
  $scope.data = libraryManagement;
  $scope.deleteBook = function (id) {
    libraryManagement.deleteBook(id);
  };
  

}])

.controller('favouriteBooksController',['$scope', '$http','libraryManagement',function ($scope, $http,libraryManagement) {
  $scope.libraryDataService  = libraryManagement;
  
  $scope.data = libraryManagement.favouriteBooksData;
  $scope.$watch(function(){
    return libraryManagement.favouriteBooksData;
  }, function(newValue){
    $scope.data = newValue;
  });

}]);