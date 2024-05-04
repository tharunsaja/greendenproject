
//Selecting side navbar , menu icon

var sidenav =document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click",function (){
    sidenav.style.right = 0
})

closenav.addEventListener("click",function (){
    sidenav.style.right = "-50%"
}) 

//Product Search functionality
var productcontainer = document.getElementById("productcontainer");

var search = document.getElementById("searchbox");

var productlist = productcontainer.querySelectorAll("div");

//search function and manipulating
search.addEventListener("keyup",function () {
    
    var enteredvalue = event.target.value.toUpperCase()
    console.log(enteredvalue);

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent

      if(productname.toUpperCase().indexOf(enteredvalue)<0)
      {
          productlist[count].style.display = "none"
      }
      else
      {
          productlist[count].style.display = "block"
      }
    }
})


