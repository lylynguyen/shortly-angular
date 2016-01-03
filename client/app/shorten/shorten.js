angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(isValid){
    // console.log('link: ', $scope.link);
    // console.log('link check: ', $scope.link.$valid);
    if(isValid) {
      Links.addOne($scope.link)
      .then(function(data) {
        $scope.slink = data;
      });
    } else {
      $scope.error = "Error: Invalid URL";
    }

    
  }; 

});


//posting title url 