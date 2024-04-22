// var actor = document.getElementsById("actor");
// window.addEventListener("scroll", () => {
//     let y = scrollY;
//     actor.style.top = 110 + y * 0.8 + "px";
//     // picContainer.style.top = 190 + y * 0.8 + "px";
// })

// hamburger menu
function openMenu() {
    console.log("open");
    document.getElementById("menu").style.width = "100%";
    document.getElementById("closeMenu").style.display = "block";
    document.getElementById("openMenu").style.display = "none";
}
function closeMenu() {
    console.log("close");
    document.getElementById("menu").style.width = "0%";
    document.getElementById("closeMenu").style.display = "none";
    document.getElementById("openMenu").style.display = "block";
}