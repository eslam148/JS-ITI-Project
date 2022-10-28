var element 
var number


function StartDrag1(ele, num){
    
    switch(num){
        case 1:
            element= ele
            number=1
            break;
         case 2:
            element= ele
            number=2
            break;
        case 3:
            element= ele
            number=3
            break;
        case 4:
            element= ele
            number=4
            break;
        case 5:
            element= ele
            number=5
            break;
        case 6:
            element= ele
            number=6
            break;
       case 7:
            element= ele
            number=7
            break;
        case 8:
            element= ele
            number=8
            break;
        case 9:
            element= ele
            number=9
             break;
        case 10:
            element= ele
            number=10
            break;
    }
  

}


function dragover(e){
e.preventDefault();
}

var bravo
function Drop1(evt, num){
    
switch(num){
    case 1:
        if(number==1){
            evt.preventDefault();
            evt.target.appendChild(element)
            var div =evt.target
            div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
        }
        break;
    case 2:
        if(number==2){
            evt.preventDefault();
            evt.target.appendChild(element)
            var div =evt.target
            div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
        }
        break;
    case 3:
        if(number==3){
            evt.preventDefault();
            evt.target.appendChild(element)
            var div =evt.target
            div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
                }
          break;
    case 4:
        if(number==4){
            evt.preventDefault();
            evt.target.appendChild(element)
            var div =evt.target
            div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
        }
                  
        break;
    case 5:
        if(number==5){
           evt.preventDefault();
           evt.target.appendChild(element)
           var div =evt.target
           div.style.backgroundColor = "rgb(103, 186, 103)"
          var audio= document.getElementById("audio")
          audio.play();
            }
         break;
    case 6:
        if(number==6){
            evt.preventDefault();
            evt.target.appendChild(element)
             var div =evt.target
             div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
            }
            break;
    case 7:
         if(number==7){
        evt.preventDefault();
        evt.target.appendChild(element)
        var div =evt.target
        div.style.backgroundColor = "rgb(103, 186, 103)"
         var audio= document.getElementById("audio")
         audio.play();
        }
            break;
    case 8:
        if(number==8){
        evt.preventDefault();
        evt.target.appendChild(element)
         var div =evt.target
        div.style.backgroundColor = "rgb(103, 186, 103)"
        var audio= document.getElementById("audio")
        audio.play();
        }
             break;
    case 9:
            if(number==9){
             evt.preventDefault();
            evt.target.appendChild(element)
            var div =evt.target
            div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
            }
            break;
    case 10:
            if(number==10){
            evt.preventDefault();
            evt.target.appendChild(element)
            var div =evt.target
            div.style.backgroundColor = "rgb(103, 186, 103)"
            var audio= document.getElementById("audio")
            audio.play();
            }
            break;
}

}
//footer
var footer = document.getElementById("footer");
var date = new Date();
footer.innerHTML = "<h3 id='footerh3'>All Copy Right to GroupOne @"+date.getFullYear()+"ITI</h3>";
footer.style.color ='white';
footer.style.textAlign = 'center';
var footerh3=document.getElementById("footerh3");
footerh3.style.marginTop='40px';