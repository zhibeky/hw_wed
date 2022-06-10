let video = document.getElementById("video-background");
let audio = document.getElementById("audio");
let playVideoButton = document.getElementById("btn-change-background");
let playAudioButton = document.getElementById("playpause-track");
var seekbar = document.querySelector('.seekbar')
var currentTime = document.querySelector('.current-time')
var duration = document.querySelector('.duration')


function playVideo() {
    
    // playVideoButton.addEventListener("click", function() {

    if (video.paused == true) {
        video.play();
        playVideoButton.innerHTML = '<i class="fa fa-solid fa-pause fa-2x" style="color:white;"></i>';
    } else {
        video.pause();
        playVideoButton.innerHTML = '<i class="fa fa-solid fa-play fa-2x" style="color:white;"></i>';
    }
    // });
}
function playPauseTrack() {
    
    // playAudioButton.addEventListener("click", function() {
    if (audio.paused == true) {
        audio.play();
        // playAudioButton.innerHTML = '<i class="fa fa-music fa-5x"></i>';
        // <i class="fa-regular fa-music"></i>
    } else {
        audio.pause();
        // playAudioButton.innerHTML = '<i class="fa fa-music fa-5x"></i>';
    }
    // });
}
function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);

// effect to buttons
let buttonEffect = document.querySelector('button'), sound = null;
sound = new Audio('./assets/click.wav');

buttonEffect.addEventListener("click", ()=>{
  sound.currentTime = 0;
  sound.play();
});

// function handler() {
//   sound = new Audio('https://www.gnu.org/music/FreeSWSong.ogg');
//   sound.play();
// }




audio.onloadeddata = function () {
  seekbar.max = audio.duration;
  var ds = parseInt(audio.duration % 60);
  var dm = parseInt((audio.duration / 60) % 60);
  duration.innerHTML = dm + ':' + ds;
}

audio.ontimeupdate = function () { seekbar.value = audio.currentTime }

handleSeekBar = function () { audio.currentTime = seekbar.value }

audio.addEventListener('timeupdate', function () {
  var cs = parseInt(audio.currentTime % 60);
  var cm = parseInt((audio.currentTime / 60) % 60);
  currentTime.innerHTML = cm + ':' + cs;
}, false);