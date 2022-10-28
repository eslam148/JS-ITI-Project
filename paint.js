var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
var paint = false;
let x = 0;
let y = 0;

var color = "black";
canvas.addEventListener("mousedown", function (event) {
    if (event.button == 0) {
        paint = true;
        x = event.offsetX;
        y = event.offsetY;
        paint = true;
        console.log("ues")

    }
    else if (event.button == 2) {
        x = event.offsetX;
        y = event.offsetY;

        paint = false;
    }


});
canvas.addEventListener("mousemove", function (e) {
    if (paint) {
        paintLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
        console.log("eve")
   }
    // else if (color == "gray") {
    //     paintLine(ctx, x, y, e.offsetX, e.offsetY);
    //     x = e.offsetX;
    //     y = e.offsetY;
    //     console.log("delet")

    // }

});
canvas.addEventListener("mouseup", function (e) {
    if (paint) {
        paintLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        paint = false;
    }
    else if (color == "grey") 
    {
        paintLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        paint = false;

    }
});
function paintLine(ctx, xS, yS, xE, yE) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.strokewidth = 50;
    ctx.moveTo(xS, yS);
    ctx.lineTo(xE, yE);
    ctx.stroke();
    ctx.closePath();
    console.log("paintpath")

}
// function clearLine(ctx, xS, yS, xE, yE) {
//     ctx.beginPath();
//     ctx.strokeStyle = color;
//     ctx.strokewidth = 2;
//     ctx.moveTo(xS, yS);
//     ctx.lineTo(xE, yE);
//     ctx.stroke();
//     ctx.closePath();
// console.log("clearpath")


// }
function colored(c) {
    color = c;
    console.log(color);
}
//footer
var footer = document.getElementById("footer");
var date = new Date();
footer.innerHTML = "<h3 id='footerh3'>All Copy Right to GroupOne @"+date.getFullYear()+"ITI</h3>";
footer.style.color ='white';
footer.style.textAlign = 'center';
var footerh3=document.getElementById("footerh3");
footerh3.style.marginTop='40px';