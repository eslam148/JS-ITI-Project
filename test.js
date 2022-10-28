let Names = ["يد", "انف", "اذن", "بطن", "راس", "ارجل"];
let gallery = document.getElementById("gallery");
var grade = document.getElementById("grade");
gallery.addEventListener("mouseover", function (ev) {
    // console.log(ev.target)
    ev.target.style = "transform :scale(1.5);";
})
gallery.addEventListener("mouseout", function (ev) {
    // console.log(ev.target);
    ev.target.style = "transform :scale(1);";
});

let BodyParts = [
    'زراع.jpg',
    'راس.png',
    'ارجل.png',
    'اذن.jpg',
    'انف.png',
    'بطن.jpg',
    'عيون.png',
    'شعر.jpg',
    'فم.jpg',
    'ساق.jpg'];

let test = document.getElementById('test');
let choise = document.getElementById("choise");
test.addEventListener("click", generate)

let grad = 0;
let qustinnum = 1;
function generate() {
    if (qustinnum > 10) {
        alert("end test")
        qustinnum = 1;
        if (grad > 5) {
            alert(" success grad : " + grad);
            grad = 0;
            grade.textContent="";
        }
        else {
            alert(" Failed grad : " + grad);
            grad = 0;
            grade.textContent="";

        }
    }
    if (qustinnum == 1) {
        alert("Start test");

 grade.textContent="";
    }
    qustinnum++;
    if (document.getElementById("img")) {
        document.getElementById("img").remove();
        for (let i = 0; i <= choise.children.length + 1; i++) {
            choise.removeChild(choise.lastChild);
        }
    }
    //add image

    let random = Math.floor(Math.random() * 10);
    let img = document.createElement("img");
    img.setAttribute("data", random);
    img.setAttribute("id", "img");
    img.setAttribute("class", "img-thumbnail w-300");
    img.src = "Images/" + BodyParts[random];
    document.getElementById("gallery").appendChild(img);
    //add button
    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = BodyParts[random].split(".")[0];
    btn.setAttribute("data", random);
    btn.addEventListener("click", function () {
        grad++;
      
        document.getElementById("img").remove();
        for (let i = 0; i <= choise.children.length + 1; i++) {
            choise.removeChild(choise.lastChild);
        }
        generate();

    })
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.setAttribute("class", "btn btn-primary ");
    btn2.setAttribute("class", "btn btn-primary");
    btn1.style.margin = "20px";
    btn2.style.margin = "20px";

    let r1 = Math.floor(Math.random() * 10);
    let r2 = Math.floor(Math.random() * 10);
    while (r1 == random) {
        r1 = Math.floor(Math.random() * 10);
    }
    btn1.textContent = BodyParts[r1].split(".")[0];
    while (r2 == random) {
        r2 = Math.floor(Math.random() * 10);
    }
    btn2.textContent = BodyParts[r2].split(".")[0];
   
  
    let call = [btn1, btn2];
    r1 = Math.floor(Math.random() * 2);
    r2 = Math.floor(Math.random() * 2);

    while (r1 == r2) {
        r2 = Math.floor(Math.random() * 2);
    }



    choise.appendChild(call[r1]);
    choise.appendChild(btn);
    choise.appendChild(call[r2]);
    grade.textContent="";

}

document.getElementById("Finish").addEventListener("click", function () {
    if (grad > 5) {

        grade.innerHTML = "<h1> success grad : " + grad+"</h1>";
        grade.style.color="green";
        grade.style.textAlign="center";
        grad = 0;

    }
    else {

        grade.innerHTML ="<h1> Faild grad : " + grad+"</h1>";
        grade.style.color="red";
        grade.style.textAlign="center";
        grad = 0;

    }
})

//footer
var footer = document.getElementById("footer");
var date = new Date();
footer.innerHTML = "<h3 id='footerh3'>All Copy Right to GroupOne @" + date.getFullYear() + "ITI</h3>";
footer.style.color = 'white';
footer.style.textAlign = 'center';
var footerh3 = document.getElementById("footerh3");
footerh3.style.marginTop = '40px';