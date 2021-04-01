// WEATHER WIDGET (PROVIDED BY WEATHERWIDGET.IO)
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// YOUTUBE VIDEOS
var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// LOAD VIDEO DUBLIN PLAYER
var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('dublin-player', {
    height: '600',
    width: '100%',
    videoId: 'w9vVo9kV_gI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });
// LOAD VIDEO CORK PLAYER
    player = new YT.Player('cork-player', {
    height: '600',
    width: '100%',
    videoId: 'zfMbpxt9Qgo',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });
// LOAD VIDEO GALWAY PLAYER
    player = new YT.Player('galway-player', {
    height: '600',
    width: '100%',
    videoId: 'OmiCXTSg5lk',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });
      }

// AUTO PLAY FUNCTION SET TO NONE
function onPlayerReady(event) {
  // event.target.playVideo();
}

var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo,);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
}