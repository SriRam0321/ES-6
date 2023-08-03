 var spn=document.getElementById("span")  
 var clik=document.getElementById("clk")
 var  bdy=document.getElementById("body")

   clik.addEventListener("mousemove",function(){

 bdy.style.backgroundColor=clik.value
 spn.innerHTML=clik.value
     
   })