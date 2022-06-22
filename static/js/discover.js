const discover = document.querySelector('.discover')

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