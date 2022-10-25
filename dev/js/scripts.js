import { gsap } from "gsap";
import { TweenLite } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.timeline("#history-first", {
    duration: 2,
    alpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#history-first", markers: true
    }
});
gsap.timeline("#history-middle",  {
    duration: 2,
    alpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#history-middle", markers: true
    }
});
gsap.timeline("#history-last", {
    duration: 1,
    alpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#history-last", markers: true
         
    }
});
gsap.timeline("skills-content", {
    duration: 5,
    alpha: 0,
    y: 60,
    scrollTrigger: {
        trigger: "#skills-content", markers: true
    }
});


