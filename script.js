// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',()=>{
  navbar.classList.toggle('change')
  menu.classList.toggle('change')
})
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = ()=> {
  if (video.paused) {
    video.play()
    btn.className = 'fa-regular fa-circle-pause'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'fa-regular fa-circle-play'
    video.style.opacity = '.3'
  }
}

video.addEventListener('timeupdate', () => {
  const barWidth = video.currentTime/video.duration
  bar.style.width = `${barWidth * 100}%`
})

// End of Section 2 Video