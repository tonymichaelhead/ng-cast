angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      selectvideo: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  })

  .controller('VideoCtrl', function($scope) {
    $scope.$ctrl.onClick = function() {};
  });