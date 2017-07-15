angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<',
      selectvideo: '<'
    },
    templateUrl:'src/templates/videoListEntry.html'
  })

  .controller('VideoListCtrl', function($scope) {

  });
