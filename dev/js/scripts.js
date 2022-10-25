import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#history-first", {
    duration: 2,
    alpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#history-first"
    }
});
gsap.from("#history-middle", {
    duration: 2,
    alpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#history-middle"
    }
});
gsap.from("#history-last", {
    duration: 1,
    alpha: 0,
    y: 100,
    scrollTrigger: {
        trigger: "#history-last"
    }
});

gsap.from:("#skills")


