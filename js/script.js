$(document).ready(function (){
    gsap.fromTo(".section",0.5,{y:100,opacity:0,ease:"easeIn"},{y:0,opacity:1,ease:"easeOut"});
    var tl = new TimeLineMax();
    
    
    const controller = new scrollMagic.Controller();

    tl.from(".imageContainer",0.5,{x:200,opacity:0});

    const  scene = new ScrollMagic.Scene({
        triggerElement:"sticky",
        triggerHook:"onLeave",
        duration:"100%"
    }).setPin("sticky")
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
    
});