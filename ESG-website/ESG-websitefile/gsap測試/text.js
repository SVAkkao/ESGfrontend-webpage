$(function () { 
    var controller = new ScrollMagic.Controller();
    var slides = new TimelineMax()

      .to("#slideContainer", 0.5, {z: -150})    
      .to("#slideContainer", 1,   {x: "-25%"})  
      .to("#slideContainer", 0.5, {z: 0})       
  
      .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-50%"})
      .to("#slideContainer", 0.5, {z: 0})
    
      .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-75%"})
      .to("#slideContainer", 0.5, {z: 0})


    var scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "400%"
      })
      .setPin("#pinContainer")
      .setTween(slides)
      .addIndicators() 
      .addTo(controller);
  });