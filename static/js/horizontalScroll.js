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
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  })

  slider.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
}

function removeScrolling() {
  slider.removeEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.removeEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.removeEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.removeEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  })

  slider.removeEventListener("wheel", (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
  });
}

setScrolling()

function checkScreen() {
  let windowWidth = window.innerWidth;

  if(windowWidth > 756) {
    if(slider.classList.contains("isMobile"))
      slider.classList.remove("isMobile");
  } else {
      slider.className = "isMobile";
  }
}

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