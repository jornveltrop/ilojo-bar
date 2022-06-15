const homepage = document.querySelector('.home')

if (homepage) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  gsap.defaults({overwrite: "auto"});
  
  let tl = gsap.timeline();


  tl.from("header img", {translateY: "-210%", rotation: "-10", duration: 2.5, ease: "elastic", delay: .5})
    .to(".mask_span", { y: "0%", duration: 0.7, stagger: 0.2 }, "<15%")
    .from(".scroll_btn", {translateY: "300px", ease: Power1.easeOut}, "<")
    .from(".see_model", {translateY: "300px", ease: Power1.easeOut}, "<")


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
          .fromTo('.see_model',{opacity: 0, zIndex: 0, scale: 0.9, rotation:-3}, {opacity: 1, zIndex: 2, scale: 1, rotation:0}, "<")
          .addLabel('end');


  let btn = document.querySelector('footer button')

  btn.addEventListener("click", () => {
    let scrollValue = scrollTL.scrollTrigger.labelToScroll('end')
    gsap.to(window, {scrollTo: scrollValue, duration: 2.2});
  });
}

init();

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