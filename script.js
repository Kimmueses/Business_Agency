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
  } else {
    video.pause()
    btn.className = 'fa-regular fa-circle-play'
  }
}


// End of Section 2 Video