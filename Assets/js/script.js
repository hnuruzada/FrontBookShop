searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}



window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 2000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:false,
    responsive:{
        0:{
            items:1,
            nav:true

        },
        375:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        900:{
            items:4,
            nav:true,
            loop:true,
            dots:false

        },
        1024:{
            items:4,
            nav:true,
            loop:true,
            dots:false
            
        },
        1300:{
            items:6,
            nav:true,
            loop:true,
            dots:false
            
        }
    }
})

//owl carousel book
$(".book").mouseenter(function(){
    $(this).parent(".book-wrap").addClass("rotate");
  });
  
  $(".book").mouseleave(function(){
    $(this).parent(".book-wrap").removeClass("rotate");
  });
  
  $(".book").click(function(){
    $(this).parent(".book-wrap").addClass("flip");
  });
  
  $(".book-back").click(function(){
    $(this).parent(".book-wrap").removeClass("flip");
  });



  // Sidebar on right (
 

  function openNav() {
   if (window.innerWidth>1000) {
    document.getElementById("mySidenav").style.width = "400px";
   }
   else if (window.innerWidth>800) {
    document.getElementById("mySidenav").style.width = "350px";
   } else if(window.innerWidth>600){
    document.getElementById("mySidenav").style.width = "300px";
   }else{
    document.getElementById("mySidenav").style.width = "250px";
   }
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   
  }



  