gsap.registerPlugin(ScrollTrigger);

let horizontalSections = gsap.utils.toArray(".container");

horizontalSections.forEach((container) => {
 let sections = container.querySelectorAll(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});
})
