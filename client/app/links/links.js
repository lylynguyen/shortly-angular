angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = Links.getAll()
    .then(function(data){
      $scope.data.links = data;
    });
});


//controller help 
