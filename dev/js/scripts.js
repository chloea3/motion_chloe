import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
    var tl = gsap.timeline();
    tl.to("#Frame",{duration:5, fill:"#1f1fff", x: 200});
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())