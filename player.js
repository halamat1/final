document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const seekBar = document.getElementById("seekBar");
    const muteBtn = document.getElementById("muteBtn");
    const volumeBar = document.getElementById("volumeBar");
  
    playPauseBtn.addEventListener("click", togglePlayPause);
    seekBar.addEventListener("input", seekVideo);
    muteBtn.addEventListener("click", toggleMute);
    volumeBar.addEventListener("input", setVolume);
  
    let isSeeking = false;
  
    function togglePlayPause() {
      if (video.paused || video.ended) {
        video.play().catch(error => console.error(error));
        playPauseBtn.textContent = "Pause";
      } else {
        video.pause();
        playPauseBtn.textContent = "Play";
      }
    }
  
    function seekVideo() {
      const seekValue = seekBar.value;
      const videoTime = (seekValue / 100) * video.duration;
      video.currentTime = videoTime;
    }
  
    function toggleMute() {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? "Unmute" : "Mute";
    }
  
    function setVolume() {
      const volumeValue = volumeBar.value / 100;
      video.volume = volumeValue;
    }
  
    video.addEventListener("timeupdate", function () {
      if (!isSeeking) {
        const value = (video.currentTime / video.duration) * 100;
        seekBar.value = value;
      }
    });
  
    seekBar.addEventListener("mousedown", function () {
      isSeeking = true;
    });
  
    seekBar.addEventListener("mouseup", function () {
      isSeeking = false;
    });
  });
  
  