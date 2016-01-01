angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getAll()
    .then(function(data){
      $scope.data.link = data;
    });
  };
  $scope.getLinks();
});


//controller help 
