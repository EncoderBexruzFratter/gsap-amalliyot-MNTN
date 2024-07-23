
gsap.to(".main__bg" , {
    scale:1,
    duration:2
})
gsap.from(".logo" , {
    y:-100,
    opacity:0,
    duration:.8
})
gsap.from(".nav__list li", {
    y: -100,
    opacity: 0,
    duration: .8,
})
gsap.from(".acaunt", {
    y:-100,
    opacity:0,
    duration:.8
})

gsap.from(".hero_left" , {
    x:-200,
    duration:0.8,
    opacity:0,
})
gsap.from(".hero__right" , {
    x:200,
    duration:0.8,
    opacity:0,
})

let svg__tl = gsap.timeline()
svg__tl.from(".scroll__down", {
    x:900,
    duration:1,
    opacity:0,
}).to(".scroll__down__svg" , {
    rotate:-2,
    duration:1
})
gsap.from(".chironic" , {
    y:150,
    duration:.8,
    opacity:0
})

let line__tl = gsap.timeline()

line__tl.to(".hero__line" , {
    width:72,
    duration:0.8
}).from(".hero__heading" , {
    opacity:0,
    duration:.8
})




function getStarted() {
    if (window.innerWidth < 1024) {
      // Kichik ekranlar uchun animatsiya
      gsap.to(".get__startted__right div" , {
        x:566,
        duration:3,
        stagger:.3,
        scrollTrigger: {
            trigger:".get__startted",
            start:"-150 top",
            end:"150 top",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    gsap.from(".get__startted__right img" , {
        scale:1.5,
        duration:1,
        scrollTrigger: {
            trigger:".get__startted",
            start:"150 200",
            end:"150 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    let get_start__text_tl = gsap.timeline({
        scrollTrigger: {
            trigger:".get__startted",
            start:"top 200",
            end:"top 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    get_start__text_tl.from(".get_start__text_1" , {
        opacity:0,
        duration:0.8,
        scale:.8
       
    }).from(".get_start_left .get_start__text_2" , {
        x:-400,
        opacity:0,
        duration:.8,
        stagger:.3
    })
    } else {
      // Katta ekranlar uchun animatsiya
      gsap.to(".get__startted__right div" , {
        x:566,
        duration:1,
        stagger:.3,
        scrollTrigger: {
            trigger:".get__startted",
            start:"-900 top",
            end:"top top",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    gsap.from(".get__startted__right img" , {
        scale:1.5,
        duration:1,
        scrollTrigger: {
            trigger:".get__startted",
            start:"150 200",
            end:"150 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    let get_start__text_tl = gsap.timeline({
        scrollTrigger: {
            trigger:".get__startted",
            start:"top 200",
            end:"top 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    get_start__text_tl.from(".get_start__text_1" , {
        opacity:0,
        duration:0.8,
        scale:.8
       
    }).from(".get_start_left .get_start__text_2" , {
        x:-400,
        opacity:0,
        duration:.8,
        stagger:.3
    })
    }
  }
  
  getStarted()

// hiking start





function hiking() {
    if (window.innerWidth < 1024) {
      // Kichik ekranlar uchun animatsiya
      gsap.to(".hiking__right div" , {
        x:-566,
        duration:3,
        stagger:.3,
        scrollTrigger: {
            trigger:".hiking",
            start:"-150 top",
            end:"150 top",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    gsap.from(".hiking__right img" , {
        scale:1.5,
        duration:1,
        scrollTrigger: {
            trigger:".hiking",
            start:"150 200",
            end:"150 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    let line__tl_2 = gsap.timeline({
        scrollTrigger: {
            trigger:".hiking",
            start:"top 200",
            end:"top 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    line__tl_2.from(".hiking__text_1" , {
        opacity:0,
        duration:0.8,
        scale:.8
       
    }).from(".hiking_start_left .hiking__text_2" , {
        x:-400,
        opacity:0,
        duration:.8,
        stagger:.3
    })
    } else {
      // Katta ekranlar uchun animatsiya
      gsap.to(".hiking__right div" , {
        x:-566,
        duration:1,
        stagger:.3,
        scrollTrigger: {
            trigger:".hiking",
            start:"-900 top",
            end:"top top",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    gsap.from(".hiking__right img" , {
        scale:1.5,
        duration:1,
        scrollTrigger: {
            trigger:".hiking",
            start:"150 200",
            end:"150 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    let line__tl_2 = gsap.timeline({
        scrollTrigger: {
            trigger:".hiking",
            start:"top 200",
            end:"top 200",
            // markers:true,
            scrub:4,
            // pin:true
        }
    })
    
    line__tl_2.from(".hiking__text_1" , {
        opacity:0,
        duration:0.8,
        scale:.8
       
    }).from(".hiking_start_left .hiking__text_2" , {
        x:-400,
        opacity:0,
        duration:.8,
        stagger:.3
    })
    }
  }
  
  hiking()

// key start

gsap.to(".key__right div" , {
    x:566,
    duration:1,
    stagger:.3,
    scrollTrigger: {
        trigger:".key",
        start:"-900 top",
        end:"top top",
        // markers:true,
        scrub:4,
        // pin:true
    }
})
gsap.from(".key__right img" , {
    scale:1.5,
    duration:1,
    scrollTrigger: {
        trigger:".key",
        start:"150 200",
        end:"150 200",
        // markers:true,
        scrub:4,
        // pin:true
    }
})

let line__tl_3 = gsap.timeline({
    scrollTrigger: {
        trigger:".key",
        start:"top 200",
        end:"top 200",
        // markers:true,
        scrub:4,
        // pin:true
    }
})

line__tl_3.from(".key__text_1" , {
    opacity:0,
    duration:0.8,
    scale:.8
   
}).from(".key_start_left .key__text_2" , {
    x:-400,
    opacity:0,
    duration:.8,
    stagger:.3
})


// footer

gsap.from(".footer div" , {
    y:500,
    duration:.8,
    stagger:.3,
    scrollTrigger:{
        trigger:".footer",
        // markers:true,
        start:"-200 800",
        end:"200 800",
        scrub:2
    }
})


// app js

let start = document.querySelector(".start");
let one = document.querySelectorAll(".one");
let pagination_box = document.querySelector(".pagination_box");
let pagination = document.querySelectorAll(".pagination");
let Start = document.querySelector("#Start");
let one_id = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");

// Klik hodisasini sozlash
pagination.forEach((item, index) => {
    item.addEventListener("click", function() {
        pagination.forEach((item) => {
            item.classList.remove("border-[#fff]");
            item.classList.add("border-[#D2D8D7]");
        });
        item.classList.remove("border-[#D2D8D7]");
        item.classList.add("border-[#fff]");
    });
});

// Scroll hodisasini sozlash
window.addEventListener('scroll', function() {
    // Hozirgi skroll pozitsiyasini olish
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Barcha elementlarning chegara rangini asl holatga qaytarish
    pagination.forEach((item) => {
        item.classList.remove("border-[#fff]");
        item.classList.add("border-[#D2D8D7]");
    });

    // Birinchi chegara
    if (scrollPosition >= 0 && scrollPosition < 1517) {
        pagination[0].classList.remove("border-[#D2D8D7]");
        pagination[0].classList.add("border-[#fff]");
    } else if (scrollPosition >= 1517 && scrollPosition < 2437) {
        pagination[1].classList.remove("border-[#D2D8D7]");
        pagination[1].classList.add("border-[#fff]");
    } else if (scrollPosition >= 2437 && scrollPosition < 3335) {
        pagination[2].classList.remove("border-[#D2D8D7]");
        pagination[2].classList.add("border-[#fff]");
    } else if (scrollPosition >= 3335) {
        pagination[3].classList.remove("border-[#D2D8D7]");
        pagination[3].classList.add("border-[#fff]");
    }
});



// Scroll hodisasiga quloq soluvchi funksiya qo'shish



start.addEventListener("click" , function(){
    pagination_box.classList.remove("top-[326px]")
    pagination_box.classList.add("top-[326px]")
    pagination_box.classList.remove("top-[250px]")
})

one.forEach((item , index) => {
    item.addEventListener("click" , function(){
        pagination_box.classList.remove("top-[326px]")
        pagination_box.classList.add("top-[250px]")
    })
});

let backgdrop_close = document.querySelector(".backgdrop_close")
let hamburger = document.querySelector(".hamburger")
let header__nav_menu = document.querySelector(".header__nav_menu")
let close__btn = document.querySelector(".close__btn")
let menu_tl = gsap.timeline()

menu_tl.to(header__nav_menu , {
    right:0,
    dutration:.7
})
menu_tl.to(backgdrop_close , {
    left:0,
    dutration:.7
})
menu_tl.from(".nav__list_header_menu li" , {
    y:150,
    duration:.7,
    stagger:0.28,
    opacity:0
})
menu_tl.from(close__btn, {
    opacity:0,
    duration:.7
})
menu_tl.from(".header__nav__menu__accaunt", {
    opacity:0,
    duration:.7
})

menu_tl.pause()

hamburger.addEventListener("click" , function(){
    menu_tl.play()
})

close__btn.addEventListener("click" , function(){
    menu_tl.reverse()
})
backgdrop_close.addEventListener("click" , function(){
    menu_tl.reverse()
})

