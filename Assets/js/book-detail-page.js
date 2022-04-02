searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {

    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

window.onload = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();

}

function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 2000);
}


//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount





//plus button
document.querySelector(".plus-btn").addEventListener("click", function() {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount++;

    //setting increment input value
    document.getElementById("quantity").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

   
})

//minus button
document.querySelector(".minus-btn").addEventListener("click", function() {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount--;

    //setting increment input value
    document.getElementById("quantity").value = valueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }

    
})


// Sidebar on right (
 

    function openNav() {
        document.getElementById("mySidenav").style.width = "400px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }