gsap.registerPlugin(ScrollTrigger);

gsap.to(".wrecker", {
    scrollTrigger: {
      trigger: ".wrecker",
      scrub: 1,
      start: 'top top',
      end: 'center top'
    }, 
    ease: "ease-in-out",
    margin: '0 0 0 150',
    transform: 'rotate(-30deg)'
  });