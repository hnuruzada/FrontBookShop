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







// Input count
var myInp = document.querySelectorAll(".inp-num .inp-value");
  var increaseBtn = document.querySelectorAll(".inp-num .up");
  var decreaseBtn = document.querySelectorAll(".inp-num .down");
  for(let elem of decreaseBtn){
    
    elem.addEventListener("click",function(e){
      e.preventDefault()
      countst=this.nextElementSibling.innerText
      countstn=Number(countst)

      if(countstn > 1){
        count=this.nextElementSibling.innerText
      countn=Number(count)
       countn-=1;
      this.nextElementSibling.innerText=countn;
      }
    })
  }
  for(let elem of increaseBtn){
    
    elem.addEventListener("click",function(e){
      e.preventDefault()
      count=this.previousElementSibling.innerText
      countn=Number(count)
       countn+=1;
      this.previousElementSibling.innerText=countn;
      
      
    })
  }
  
  
  // Sidebar on right (
 

    function openNav() {
      document.getElementById("mySidenav").style.width = "400px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }