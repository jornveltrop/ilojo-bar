gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
	trigger: '.img_cont',
	animation: gsap.fromTo('.scroll_cont', {scale: 1 }, {scale: 2}),
	pin: true,
	start: 'center center',
	end: 'bottom left',
	scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
	//markers: true,
})