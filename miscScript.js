$(document).ready(function() {  
  // Mute/unmute audio
  var un_mute = document.getElementById('un-mute');
  
  un_mute.onclick = function () {
    var vid = document.getElementById("onloadsound");
    vid.muted = !vid.muted;
  };
})