// Opening windows when in view on mobile & tablet
const inViewObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add class on window when in view
      entry.target.classList.add('in-view')
    } else {
      // Remove class on window when in view
      entry.target.classList.remove('in-view')
    }
  })
}, { threshold: .5 })

const elements = document.querySelectorAll('.discover li')
elements.forEach(element => {
  inViewObserver.observe(element)
})


// Mouse parrallax effect on window image
function mouseParallax(evt) {
  const maxX = gsap.getProperty(".discover .window_img_inner > img", "width") * 0.03;
  const maxY = gsap.getProperty(".discover .window_img_inner > img", "height") * 0.03; 
  const percentX = gsap.utils.normalize(0, innerWidth, evt.pageX);
  const percentY = gsap.utils.normalize(0, innerHeight, evt.pageY);
  
  gsap.to(".discover .window_img_inner > img", {
    duration: 0.2,
    x: percentX * maxX - maxX / 2,
    y: percentY * maxY - maxY / 2,
    overwrite: true
  });
}

window.addEventListener("mousemove", mouseParallax);


// Handeling scrolling windows for different devices 
const slider = document.querySelector('.storiesList');
let isDown = false;
let startX;
let scrollLeft;
let settingsSetted = false;

function setScrolling() {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }, {passive: true});
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  }, {passive: true});
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  }, {passive: true});
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  }, {passive: true})

  slider.addEventListener("wheel", (evt) => {
    slider.scrollLeft += evt.deltaY;
  }, {passive: true});
}

function removeScrolling() {
  slider.removeEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }, {passive: true});
  slider.removeEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  }, {passive: true});
  slider.removeEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  }, {passive: true});
  slider.removeEventListener('mousemove', (e) => {
    if(!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  }, {passive: true})

  slider.removeEventListener("wheel", (evt) => {
    slider.scrollLeft += evt.deltaY;
  }, {passive: true});
}

setScrolling()

//Check mobile for setting event listeners
function checkScreen() {
  let windowWidth = window.innerWidth;

  if(windowWidth > 756) {
    if(slider.classList.contains("isMobile"))
      slider.classList.remove("isMobile");
  } else {
      slider.className = "isMobile";
  }
}

// When mobile set scrolling event listeners
function changeScrollSettings(){
  if(slider.classList.contains("isMobile") && !settingsSetted){
    setScrolling()
    settingsSetted = true;
  }
  else if(!slider.classList.contains("isMobile")){
    settingsSetted = false;
  }
}

 window.onresize = checkScreen;