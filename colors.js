
document.getElementById("StartButton").addEventListener("click", function(){
    var ballon= document.getElementsByClassName("BalloonImg")
        for(var i=0; i<ballon.length; i++){ 
            ballon[i].style.display="block"
        }
   
})

var Ballons= document.getElementsByClassName("BalloonImg")
var audios= document.querySelectorAll("audio")
var writeColorName= document.querySelector("h1")


Ballons[0].addEventListener("mouseover", function(){
    audios[0].play();
    Ballons[0].style.transform = "scale(2)"
    writeColorName.innerText="Blue"
    writeColorName.style.color="blue"


    Ballons[0].addEventListener("mouseleave", function(){
        Ballons[0].style.transform = "scale(1)"
        writeColorName.innerText=""
    })
})


Ballons[1].addEventListener("mouseover", function(){
    audios[1].play();
    Ballons[1].style.transform = "scale(2)"
    writeColorName.innerText="Black"
    writeColorName.style.color="black"

    Ballons[1].addEventListener("mouseleave", function(){
        Ballons[1].style.transform = "scale(1)"
        writeColorName.innerText=""
    })
})



Ballons[2].addEventListener("mouseover", function(){
    audios[2].play();
    Ballons[2].style.transform = "scale(2)"
    writeColorName.innerText="Orange"
    writeColorName.style.color="orange"
    Ballons[2].addEventListener("mouseleave", function(){
        Ballons[2].style.transform = "scale(1)"
        writeColorName.innerText=""
})
})
Ballons[3].addEventListener("mouseover", function(){
    audios[3].play();
    Ballons[3].style.transform = "scale(2)"
    writeColorName.innerText="Red"
    writeColorName.style.color="red"
    Ballons[3].addEventListener("mouseleave", function(){
        Ballons[3].style.transform = "scale(1)"
        writeColorName.innerText=""
})
})

Ballons[4].addEventListener("mouseover", function(){
    audios[4].play();
    Ballons[4].style.transform = "scale(2)"
    writeColorName.innerText="Green"
    writeColorName.style.color="green"
    Ballons[4].addEventListener("mouseleave", function(){
        Ballons[4].style.transform = "scale(1)"
        writeColorName.innerText=""
})
})

Ballons[5].addEventListener("mouseover", function(){
    audios[5].play();
    Ballons[5].style.transform = "scale(2)"
    writeColorName.innerText="Yellow"
    writeColorName.style.color="yellow"
    Ballons[5].addEventListener("mouseleave", function(){
        Ballons[5].style.transform = "scale(1)"
        writeColorName.innerText=""
})
})

//footer
var footer = document.getElementById("footer");
var date = new Date();
footer.innerHTML = "<h3 id='footerh3'>All Copy Right to GroupOne @"+date.getFullYear()+"ITI</h3>";
footer.style.color ='white';
footer.style.textAlign = 'center';
var footerh3=document.getElementById("footerh3");
footerh3.style.marginTop='40px';