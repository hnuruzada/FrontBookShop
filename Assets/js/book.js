searchForm = document.querySelector('.search-form');
let items=document.querySelectorAll(".buton")




items.forEach(item=>{
    item.classList.remove("active")
    item.addEventListener('click',function(){
        items.forEach(item=>{
            item.firstElementChild.classList.remove("active")
        })
        if(!this.firstElementChild.classList.contains("active")){
            this.firstElementChild.classList.add("active")
        }
    })
})


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



var elements = document.getElementsByClassName("column");
// var cards=document.getElementsByClassName("card");
// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
    elements[i].lastElementChild.firstElementChild.lastElementChild.style.width="20rem";

    
  }
  $(".cards").addClass("card-display")
  
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "45%";
    elements[i].lastElementChild.firstElementChild.lastElementChild.style.width="70%";
  }
  $(".cards").removeClass("card-display")
  
}
// Grid View
function gridViewThree() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "31%";
      elements[i].lastElementChild.firstElementChild.lastElementChild.style.width="100%";

    }
    $(".cards").removeClass("card-display")
   
}



//sort by


		
    let field = document.querySelector('.items');
    
    let column = Array.from(field.children);
    

    function SortProduct() {
        let select = document.getElementById('select');
        
        let ar = [];
        for(let i of column){
            const last = i.lastElementChild.lastElementChild.children[2];
            console.log(last);
            const x = last.textContent.trim();
            console.log(x);
            const y = Number(x.substring(1));
            console.log(y);
            i.setAttribute("data-price", y);
            ar.push(i);
            
        }
        

        this.run = ()=>{
            addevent();
        }
        function addevent(){
            select.onchange = sortingValue;
        
        }
        function sortingValue(){
        
            if (this.value === 'Default') {
                while (field.firstChild) {field.removeChild(field.firstChild);}
                field.append(...ar);	
            }
            if (this.value === 'LowToHigh') {
                SortElem(field, column, true)
            }
            if (this.value === 'HighToLow') {
                SortElem(field, column, false)
            }
        }
        function SortElem(field,column, asc){
            let  dm, sortcolumn;
            dm = asc ? 1 : -1;
            sortcolumn = column.sort((a, b)=>{
                const ax = a.getAttribute('data-price');
                const bx = b.getAttribute('data-price');
                return ax > bx ? (1*dm) : (-1*dm);
            });
             while (field.firstChild) {field.removeChild(field.firstChild);}
             field.append(...sortcolumn);	
        }
    }
    new SortProduct().run();






    // Sidebar on right (
 

  function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }