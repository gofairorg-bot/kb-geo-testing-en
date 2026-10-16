(function(){
var t=document.querySelector(".nav-toggle");var n=document.querySelector(".nav");
if(t&&n){t.addEventListener("click",function(){n.classList.toggle("open");});}
var lb=document.getElementById("lb");
document.querySelectorAll("[data-lb]").forEach(function(el){
el.addEventListener("click",function(e){e.preventDefault();
if(!lb)return;var type=el.getAttribute("data-lb");var src=el.getAttribute("href")||el.getAttribute("data-src")||"";
var title=el.getAttribute("data-title")||"";
if(type==="video"){lb.innerHTML="<video src=\""+src+"\" controls autoplay playsinline style=\"max-width:100%;max-height:85vh\"></video><div class=\"lightbox-cap\">"+title+"</div>";}
else{lb.innerHTML="<img src=\""+src+"\" alt=\""+title+"\"><div class=\"lightbox-cap\">"+title+"</div>";}
lb.classList.add("open");});});
if(lb){lb.addEventListener("click",function(e){if(e.target===lb){lb.classList.remove("open");lb.innerHTML="";}});}
})();