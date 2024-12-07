var images = document.getElementById("image-container").children;
let i = images.length-1;
var interval = setInterval(function(){
  //increase opacity of current image
  if(images[i].style.opacity){
    images[i].style.opacity-=1/50;
  } else images[i].style.opacity = 1.0;
  //if current image invisble then works with next
  if(images[i].style.opacity<=0)i--;
  //if last then stop interval
  if(i==-1)clearInterval(interval)
},50);
