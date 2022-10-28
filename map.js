//footer
var footer = document.getElementById("footer");
var date = new Date();
footer.innerHTML = "<h3 id='footerh3'>All Copy Right to GroupOne @"+date.getFullYear()+"ITI</h3>";
footer.style.color ='white';
footer.style.textAlign = 'center';
var footerh3=document.getElementById("footerh3");
footerh3.style.marginTop='40px';

//call function    sm_state sm_state_JO
var Egypt = document.getElementsByClassName("sm_state sm_state_EG")[0];
var Australia = document.getElementsByClassName("sm_state sm_state_AU")[0]; 
var libya = document.getElementsByClassName("sm_state sm_state_LY")[0];
var palestine = document.getElementsByClassName("sm_state sm_state_JO")[0];
var Mauritania = document.getElementsByClassName("sm_state sm_state_MR")[0];
var Tunisia =  document.getElementsByClassName("sm_state sm_state_TN")[0];
var Algeria =  document.getElementsByClassName("sm_state sm_state_DZ")[0];
var Morocco =  document.getElementsByClassName("sm_state sm_state_MA")[0];
var barszil =  document.getElementsByClassName("sm_state sm_state_BR")[0];
var us =  document.getElementsByClassName("sm_state sm_state_US")[0];
var Russia =  document.getElementsByClassName("sm_state sm_state_RU")[0];
var saudi =  document.getElementsByClassName("sm_state sm_state_SA")[0];
var ad = document.getElementsByClassName("aud");
var srce = document.getElementById("sourceMusic");
var h3=document.getElementById("h33");
var flag = document.getElementById("Flag");
//egypt
Egypt.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Egypt";
    h3.style.color = "red";
    flag.src = "Images/Egypt.png";
  
    ad[1].pause();
    ad[2].pause();
    ad[2].pause();
    ad[4].pause();
    ad[0].play();
})
//austalia
Australia.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Australia";
    h3.style.color = "red";
    flag.src = "Images/Australia.png"
    console.log("austalia")
})
//libya
libya.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Libya";
    h3.style.color = "green";
    flag.src = "Images/Libya.png"
    ad[0].pause();
    ad[4].pause();
    ad[1].pause();
    ad[2].pause();
    ad[3].play();
    console.log("austalia")
})
//palestine
palestine.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Palestine  long live For Ever";
    h3.style.color = "red";
    flag.src = "Images/palestine.png";
    
    ad[0].pause();
    ad[1].pause();
    ad[3].pause();
    ad[4].pause();
    ad[2].play();
    
})
//Mauritania
Mauritania.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Mauritania";
    h3.style.color = "green";
    flag.src = "Images/Mauritania.png";
    ad[0].pause();
    ad[3].pause();
    ad[1].pause();
    ad[2].pause();
    ad[4].play();
   
})
//Tunisia 
Tunisia.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Tunisia";
    h3.style.color = "red";
    flag.src = "Images/Tunisia.png"
   
})
//Algeria
Algeria.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Algeria";
    h3.style.color = "green";
    flag.src = "Images/Algeria.png"
   
})
//Morocco
Morocco.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Morocco";
    h3.style.color = "green";
    flag.src = "Images/Morocco.png"
   
})
//South america
barszil.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "South america";
    h3.style.color = "green";
    flag.src = "Images/south.gif"
   
})
//United States of America
us.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "United States of America";
    h3.style.color = "red";
    flag.src = "Images/Us.svg"
   
})

//Russia
Russia.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Russia";
    h3.style.color = "red";
    flag.src = "Images/Russia.jpg"
   
})
//Saudi Arabia
saudi.addEventListener("click", function(){
    h3.style.textAlign= "center";
    h3.textContent = "Saudi Arabia";
    h3.style.color = "green";
    flag.src = "Images/Saudi Arabia.png";
    ad[0].pause();
    ad[2].pause();
    ad[3].pause();
    ad[4].pause();
    ad[1].play();
   
})