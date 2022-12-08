const tl = gsap.timeline();

tl.staggerFrom(
  ['.y', '.o1', '.o2', '.d', '.e', '.l'],
  1.5,
  {
    scale: 0,
    transformOrigin: 'bottom', 
    ease: Elastic.easeOut, 
  },
  0.3, 
);

tl.delay(0); 

tl.staggerFrom(
  ['.topL', '.topR', '.botL', '.botR', '.midL', '.midR'],
  1.5,
  {
    scale: 0,
    transformOrigin: 'top center', 
    ease: 'Elastic.easeOut',
  },
);


