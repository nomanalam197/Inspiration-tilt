
var pl = gsap.timeline({
    scrollTrigger:{
        trigger: "#second",
        start: "top 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true,
    }
})
pl.from(".am", {
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 800

})

pl.from("#shoes", {
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 400,
    delay: -0.5

})

gsap.from(".enlarge1 span", {
    scrollTrigger:{
        trigger: "#third",
        start: "top 80%",
        end: "22% 80%",
        scrub: 2,
        // markers: true
    },
    opacity: 0,
    stagger: .03,
    // duration: ,
    y: 800

})

gsap.from(".tp1 span", {
    scrollTrigger:{
        trigger: "#third",
        start: "20% 50%",
        end: "50% 100%",
        scrub: 2,
        // markers: true
    },
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 10

})

gsap.from(".enlarge5", {
    scrollTrigger:{
        trigger: "#fourth",
        start: "top 50%",
        end: "50% 100%",
        scrub: 2,
        // markers: true
    },
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 200

})

gsap.from(".tp2 span", {
    scrollTrigger:{
        trigger: ".enlarge5",
        start: "50% 50%",
        end: "80% 100%",
        scrub: 2,
        // markers: true
    },
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 10

})

gsap.from(".enlarge7 span", {
    scrollTrigger:{
        trigger: "#fifth",
        start: "50% 50%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 200

})

gsap.from(".tp3 span", {
    scrollTrigger:{
        trigger: "#fifth",
        start: "85% 90%",
        end: "100% 100%",
        scrub: 2,
        // markers: true
    },
    opacity: 0,
    stagger: .1,
    duration: 1,
    y: 10

})


document.querySelectorAll("#photoseries").forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
        // document.querySelector("#textm h1").style.opacity = 1;
        // document.querySelector("#smcircle").style.height = "60px";
        document.querySelector("#pk1").style.transform = "rotate(10deg)"
        document.querySelector("#pk2").style.transform = "rotate(10deg)"
        document.querySelector("#pk3").style.transform = "rotate(10deg)"
        document.querySelector("#pk4").style.transform = "rotate(10deg)"
        document.querySelector("#pk5").style.transform = "rotate(10deg)"
        // document.querySelector("#smcircle").style.mixBlendMode = "difference";
 } )})

 document.querySelectorAll("#photoseries").forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        // document.querySelector("#textm h1").style.opacity = 1;
        // document.querySelector("#smcircle").style.height = "60px";
        document.querySelector("#pk1").style.transform = "rotate(0deg)"
        document.querySelector("#pk2").style.transform = "rotate(0deg)"
        document.querySelector("#pk3").style.transform = "rotate(0deg)"
        document.querySelector("#pk4").style.transform = "rotate(0deg)"
        document.querySelector("#pk5").style.transform = "rotate(0deg)"
        // document.querySelector("#smcircle").style.mixBlendMode = "difference";
 } )})
 


document.querySelector("#photoseries").addEventListener("mousemove",function(){
    const tilt = $('.photo').tilt()
    tilt.on('change', function(e, transforms){});
})
    

// document.querySelector("#photoseries")
// .addEventListener("scroll", function(dets){
//     document.querySelectorAll(".photo").style.transform = "rotate(7deg)"
//     document.querySelector("#aboutme").style.backgroundColor = "blue"
//     document.querySelector(".photo").style.cursor = "pointer"
// })

// window.onscroll = function(event) {
//     document.querySelectorAll("#photoseries .photo").style.transform = "rotate(7deg)";
// };

//yeah saare textillate ko bhi scrolltrigger pr daalna hai kch kijiye
// $('.enlarge').textillate({initialDelay: 1000, in: { effect: 'fadeInUp', delay: 60 } });
// $('.enlarge1').textillate({ in: { effect: 'fadeInUp', delay: 50 } });
// $('.enlarge2').textillate({ in: { effect: 'fadeInUp', delay: 2 } });
// $('.enlarge5').textillate({ in: { effect: 'fadeInUp', delay: 50 } });
// $('.enlarge6').textillate({ in: { effect: 'fadeInUp', delay: 2 } });
// $('.enlarge7').textillate({ in: { effect: 'fadeInUp', delay: 40 } });
// $('.enlarge8').textillate({ in: { effect: 'fadeInUp', delay: 1 } });


