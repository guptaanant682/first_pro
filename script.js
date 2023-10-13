//mouse follower
var cursor = document.querySelector("#minicircle")
var main = document.querySelector("#main")

main.addEventListener("mousemove", function(dets){
    console.log("hey")
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})


gsap.from("#nav p, #nav .menu, #page-1",{
    y:-100,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    stagger: 0.3
})

// function circleMouseFollower(){
//     window.addEventListener("mousemove", function(dets){
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//         console.log(dets.clientX, dets.clientY)
//     })
// }

// circleMouseFollower();

// wrapping word
gsap.to("#page-1 h1", {
    transform:"translateX(-90%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page-1",
        scroller:"body",
        // markers: true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})


gsap.from(".middle-text", {
    x:-100,
    duration: 1,
    opacity:0,
    scale: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".middle-text",
        scroller: "body",
        // markers: true,
        start:"top 58%",
        end: "top 48%",
        // scrub: true,
    }
})


//OVERLAYING IMAGE EFFECT
document.querySelector("#overlay1").addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x-430)+"px"
    document.querySelector("#elem1 img").style.top = (dets.y-455)+"px"
})

document.querySelector("#overlay1").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 1
    cursor.style.opacity = 0
})

document.querySelector("#overlay2").addEventListener("mousemove", function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem2 img").style.left = (dets.x-790)+"px"
    document.querySelector("#elem2 img").style.top = (dets.y-465)+"px"
})

document.querySelector("#overlay2").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 1
    cursor.style.opacity = 0
})

document.querySelector("#overlay3").addEventListener("mousemove", function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem3 img").style.left = (dets.x-1100)+"px"
    document.querySelector("#elem3 img").style.top = (dets.y-465)+"px"
})

document.querySelector("#overlay3").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem3 img").style.scale = 0
    document.querySelector("#elem3 img").style.opacity = 1
    cursor.style.opacity = 0
})

let menu = document.querySelector('.menu');
menu.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let MenuWidth = menu.clientWidth
    let MenuHeight = menu.clientHeight
    let moveX = (x - MenuWidth/20)
    let moveY = (y - MenuHeight/20)
    menu.style.transform = `translate(${moveX}px) translateY(${moveY}px)`;
})

menu.addEventListener('mouseout', (e) => {
    menu.style.transform = ``;
})



// auto typing text effect

const text = document.querySelector(".sec-text");

const textLoad = () =>{
    setTimeout(() =>{
        text.textContent = " Front-end developer";
    }, 0);
    setTimeout(() =>{
        text.textContent = " Graphic designer";
    }, 4000);
    setTimeout(() =>{
        text.textContent = " Web-3 developer";
    }, 8000);
    // setTimeout(() =>{
    //     text.textContent = " Blogger";
    // }, 12000);
}

textLoad();



//swiper

// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     dynamicBullets: true,
//     loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //   },
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });



//   swiper card effects
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    dynamicBullets: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });