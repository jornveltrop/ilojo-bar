const homepage = document.querySelector('.home')
const discover = document.querySelector('.discover')

//HOME PAGE CODE
if (homepage) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  gsap.defaults({overwrite: "auto"});
  
  let tl = gsap.timeline();


  tl.from("header img", {translateY: "-210%", rotation: "-10", duration: 2.5, ease: "elastic", delay: .5})
    .to(".mask_span", { y: "0%", duration: 0.7, stagger: 0.2 }, "<15%")
    .from(".scroll_btn", {translateY: "300px", ease: Power1.easeOut}, "<")


  let scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.img_cont',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        snap: 4
      }
  });

  scrollTL.to('.scroll_btn', {opacity: 0, duration: .3} )
          .to('.scroll_cont', {scale: 1.6},"<")
          .fromTo('#color_building', {opacity: 0}, {opacity: 1},"<")
          .to('#background', {opacity: 0},"-=50%")
          .to('#overlay', {opacity: 0, scale: 1.05}, "<25%")
          .fromTo('.discover_cont',{opacity: 0, zIndex: 0, scale: 0.9, rotation:-3}, {opacity: 1, zIndex: 2, scale: 1, rotation:0}, "<")
          .from('.see_model_cont',{ translateX: "100%", opacity: "0"}, "<")
          .addLabel('end')
         


  let btn = document.querySelector('footer button')

  btn.addEventListener("click", () => {
    let scrollValue = scrollTL.scrollTrigger.labelToScroll('end')
    gsap.to(window, {scrollTo: scrollValue, duration: 2.2});
  });
}


// DISCOVER PAGE CODE
if (discover) {
  const inViewObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // do stuff when in view
        entry.target.classList.add('in-view')
      } else {
        // do stuff when not in view
        entry.target.classList.remove('in-view')
      }
    })
  }, { threshold: .5 })
  
  const elements = document.querySelectorAll('.discover li')
  
  elements.forEach(element => {
    inViewObserver.observe(element)
  })


  


  function mouseMoveFunc(evt) {
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

  window.addEventListener("mousemove", mouseMoveFunc);
}

function init() {
  const goBackLink = document.querySelector(".goBack")
  if(goBackLink){
      const historyGoBack = () => {
          window.history.back()
          goBackLink.removeEventListener("click", historyGoBack)
      }
      goBackLink.addEventListener("click", historyGoBack)
  }
}

init();