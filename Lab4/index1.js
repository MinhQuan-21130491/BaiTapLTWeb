var green = document.getElementById("xanh");
var red =document.getElementById("do");
var violet =  document.getElementById("tim");
var yellow=  document.getElementById("vang");
var gray=  document.getElementById("xam");
var pink=  document.getElementById("hong");

green.addEventListener("click", setColorBackGround);
red.addEventListener("click", setColorBackGround);
violet.addEventListener("click", setColorBackGround);
yellow.addEventListener("click", setColorBackGround);
gray.addEventListener("click", setColorBackGround);
pink.addEventListener("click", setColorBackGround);
function setColorBackGround () {
  const btnColor = getComputedStyle(event.target).backgroundColor;
  document.body.style.backgroundColor = btnColor;
}
