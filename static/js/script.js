gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();

tl.from("header img", {translateY: "-210%", rotation: "-10", duration: 2.5, ease: "elastic", delay: .5})
  .to(".create", { y: "0%", duration: 0.7, stagger: 0.2 }, "<25%");



let scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.img_cont',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
      pin: true,
      snap: 5
    }
});

scrollTL.to('.scroll_cont', {scale: 1.6} )
        .fromTo('#color_building', {opacity: 0}, {opacity: 1},"<")
        .to('#background', {opacity: 0},"-=50%")
        .to('#overlay', {opacity: 0, scale: 1.05}, "<25%")


