/* =====================================
   ANNIVERSARY WEBSITE
   SCRIPT JS - PART 1

   COUNTDOWN + NAVBAR EFFECT
===================================== */


/* =====================================
   ANNIVERSARY COUNTDOWN
===================================== */


// এখানে তোমাদের anniversary date বসাবে

const anniversaryDate = new Date("2026-07-15 00:00:00").getTime();


const countdown = setInterval(function(){


    const now = new Date().getTime();


    const distance = anniversaryDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;



    if(distance < 0){

        clearInterval(countdown);


        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";

        document.getElementById("minutes").innerHTML = "00";

        document.getElementById("seconds").innerHTML = "00";

    }



},1000);





/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */


window.addEventListener("scroll", function(){


    const navbar = document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }


});





/* =====================================
   PAGE LOAD ANIMATION
===================================== */


window.addEventListener("load", ()=>{


    document.body.classList.add("loaded");


});

/* =====================================
   SCRIPT JS - PART 2
   CHERRY BLOSSOM + SCROLL ANIMATION
===================================== */


/* =====================================
   RANDOM CHERRY BLOSSOM EFFECT
===================================== */

function createCherry() {

    const cherry = document.createElement("div");

    cherry.className = "cherry";

    cherry.innerHTML = "🌸";


    cherry.style.left = Math.random() * 100 + "vw";

    cherry.style.top = "-50px";

    cherry.style.position = "fixed";

    cherry.style.zIndex = "999";


    cherry.style.animationDuration =
        Math.random() * 5 + 5 + "s";


    cherry.style.fontSize =
        Math.random() * 15 + 15 + "px";


    document.body.appendChild(cherry);


    setTimeout(() => {

        cherry.remove();

    }, 10000);

}


setInterval(createCherry, 700);





/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */


const revealElements = document.querySelectorAll(
    ".glass-card, .photo-card, .timeline-card"
);


function revealOnScroll(){

    revealElements.forEach(element => {


        const elementTop =
        element.getBoundingClientRect().top;


        if(elementTop < window.innerHeight - 100){

            element.classList.add("fade-up");

        }


    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);





/* =====================================
   MUSIC SETTINGS
===================================== */


const musicPlayer =
document.getElementById("loveMusic");


if(musicPlayer){

    musicPlayer.volume = 0.5;

}
/* =====================================
   SCRIPT JS - PART 3
   HEART EFFECT + FINAL INTERACTIONS
===================================== */


/* =====================================
   FLOATING HEART EFFECT
===================================== */


function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random() * 100 + "vw";


    heart.style.bottom = "0";


    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";


    heart.style.animationDuration =
    Math.random() * 4 + 4 + "s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,1200);





/* =====================================
   IMAGE CLICK LOVE EFFECT
===================================== */


const photos =
document.querySelectorAll(".photo-card");


photos.forEach(photo=>{


    photo.addEventListener("click",()=>{


        photo.classList.toggle("active");


    });


});





/* =====================================
   SMOOTH MUSIC START BUTTON
===================================== */


const music =
document.getElementById("loveMusic");


document.addEventListener("click", function(){

    if(music && music.paused){

        // Browser policy এর কারণে
        // user click করার পর play হতে পারবে

        music.play().catch(()=>{});

    }

},{once:true});





/* =====================================
   CURRENT YEAR FOOTER UPDATE
===================================== */


const year =
document.querySelector(".year");


if(year){

    year.innerHTML =
    new Date().getFullYear();

}const musicBtn = document.getElementById("musicBtn");
const musicPlayer = document.getElementById("loveMusic");

if(musicBtn && musicPlayer){

    musicBtn.addEventListener("click", ()=>{

        if(musicPlayer.paused){

            musicPlayer.play();

            musicBtn.innerHTML = "⏸ Pause Our Song";

        }else{

            musicPlayer.pause();

            musicBtn.innerHTML = "🎵 Play Our Song";

        }

    });

}
const openBtn = document.getElementById("openBtn");
const openingScreen = document.getElementById("openingScreen");
const musicPlayer = document.getElementById("loveMusic");


if(openBtn){

    openBtn.addEventListener("click",()=>{


        openingScreen.style.opacity = "0";


        setTimeout(()=>{

            openingScreen.style.display = "none";

        },1000);



        if(musicPlayer){

            musicPlayer.play();

        }


    });

}
/* =====================================
   LOADER REMOVE
===================================== */


window.addEventListener("load",()=>{


    const loader =
    document.getElementById("loader");


    if(loader){


        setTimeout(()=>{


            loader.style.opacity="0";


            setTimeout(()=>{

                loader.style.display="none";

            },1000);


        },1500);


    }


});
/* =====================================
   SECRET MESSAGE BUTTON
===================================== */


const secretBtn =
document.getElementById("secretBtn");


const secretMessage =
document.getElementById("secretMessage");



if(secretBtn){


    secretBtn.addEventListener("click",()=>{


        secretMessage.style.display="block";


        secretBtn.style.display="none";


    });


}