let counter = 1;
let imageInterval = setInterval(() =>{
    if(counter> 8){
        counter = 1;
    }
    document.getElementById("Image").src = "/Images/"+counter+".webp";
    document.getElementById("audio").childNodes[1].src = "/music/"+counter+".mp3"
    document.getElementById("audio").pause();
   document.getElementById("audio").load();
    document.getElementById("audio").play();
    counter++;
},3000)

let next = document.getElementById("Next");
let previous = document.getElementById("Previous");
next.addEventListener("click", function(e){
   clearInterval(imageInterval);
    if (counter > Images.length) {
      counter = 1;
    }
    document.getElementById("Image").src = "/Images/" + counter + ".webp";
    document.getElementById("audio").childNodes[1].src = "/music/" + counter + ".mp3";
    document.getElementById("audio").pause();
    document.getElementById("audio").load();
    document.getElementById("audio").play();
    counter++;
    
})

previous.addEventListener("click", function (e) {
  clearInterval(imageInterval);
  counter--;
  if (counter <= 0) {
    counter = Images.length;
  }
  document.getElementById("Image").src = "/Images/" + counter + ".webp";
  document.getElementById("audio").childNodes[1].src ="/music/" + counter + ".mp3";
  document.getElementById("audio").pause();
  document.getElementById("audio").load();
  document.getElementById("audio").play();
 
});
function audioPlay(){
    
     imageInterval = setInterval(() => {
      if (counter > 8) {
        counter = 1;
      }
      document.getElementById("Image").src = "/Images/" + counter + ".webp";
      document.getElementById("audio").childNodes[1].src =
        "/music/" + counter + ".mp3";
      document.getElementById("audio").pause();
      document.getElementById("audio").load();
      document.getElementById("audio").play();
      counter++;
    }, 3000);
}

function audioRepeat(){

    clearInterval(imageInterval);
    document.getElementById("audio").pause();
    document.getElementById("audio").load();
    document.getElementById("audio").play();
}
function audioPause(){
    clearInterval(imageInterval);
    document.getElementById("audio").pause();
}

////////////////////

// })
//footer
var footer = document.getElementById("footer");
var date = new Date();
footer.innerHTML = "<h3 id='footerh3'>All Copy Right to GroupOne @"+date.getFullYear()+"ITI</h3>";
footer.style.color ='white';
footer.style.textAlign = 'center';
var footerh3=document.getElementById("footerh3");
footerh3.style.marginTop='40px';
