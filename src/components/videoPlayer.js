angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    templateUrl:'src/templates/videoPlayer.html'
  })

  .controller('VideoPlayerCtrl', function($scope) {

  });



