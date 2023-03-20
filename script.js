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
  if (video.ended) {
    btn.className = 'fa-regular fa-circle-play'
    video.style.opacity = '.3'
  }
})
// End of Section 2 Video

// Section 3 Pricing Cards

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// End of Section 3 Pricing Cards