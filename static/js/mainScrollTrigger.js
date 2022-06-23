gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
gsap.defaults({overwrite: "auto"});

let tl = gsap.timeline();


tl.from("header img", {translateY: "-210%", rotation: "-10", duration: 2.5, ease: "elastic", delay: .5})
  .from(".mask_span", { y: "150%", duration: 0.7, stagger: 0.2 }, "<15%")
  .from(".scroll_btn", {translateY: "300px", ease: Power1.easeOut}, "<")


let scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.img_cont',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      snap: 1
    }
});

scrollTL.fromTo('.scroll_btn', {opacity: 1, duration: .3}, {opacity: 0} )
        .from('.scroll_cont', {scale: 1},"<")
        .fromTo('#color_building', {opacity: 0}, {opacity: 1},"<")
        .fromTo('#background', {opacity: 1}, {opacity: 0},"-=50%")
        .fromTo('#overlay', {opacity: 1, scale: 1}, {opacity: 0, scale: 1.05}, "<25%")
        .fromTo('.discover_cont',{opacity: 0, zIndex: 0, scale: 0.9, rotation:-3}, {opacity: 1, zIndex: 2, scale: 1, rotation:0}, "<")
        .from('.see_model_cont',{ translateX: "100%", opacity: "0"}, "<")
        .addLabel('end')
       


let btn = document.querySelector('footer button')

btn.addEventListener("click", () => {
  let scrollValue = scrollTL.scrollTrigger.labelToScroll('end')
  gsap.to(window, {scrollTo: scrollValue, duration: 2.2});
});