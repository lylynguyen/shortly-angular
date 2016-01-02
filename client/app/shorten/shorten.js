angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.dude = 'yo!';
  $scope.addLink = function(){
    Links.addOne($scope.link)
      .then(function(data) {
        $scope.slink = data;
      });
  }; 
  // Links.addOne;
});


//posting title url 