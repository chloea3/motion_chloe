var tl= gsap.timeline({
    defaults: {duration: 0.5, ease: 'none', opacity: 0} 
});

tl.from('.svg', {y: 40})