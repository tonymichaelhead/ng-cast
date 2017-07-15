angular.module('video-player')

  .component('app', {
    templateUrl:'src/templates/app.html'
  })

  .controller('AppCtrl', function($scope, youTube) {
    
    $scope.$ctrl.search = function(input) {
      youTube.search(input, $scope.$ctrl.searchResults);
    };

    $scope.$ctrl.selectVideo = function(video) {
      $scope.$ctrl.currentVideo = video;
    };
    $scope.$ctrl.searchResults = function(data) {
      $scope.$ctrl.videos = data;
      $scope.$ctrl.currentVideo = data[0];
    };
   
    $scope.$ctrl.$onInit = $scope.$ctrl.search('cat thugs');

  });