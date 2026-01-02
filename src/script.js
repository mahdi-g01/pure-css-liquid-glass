let x = 0,
  y = 0;

function move() {
  document.querySelector(
    ".card"
  ).style.transform = `translatex(${x}vw) translatey(${y}vw)`;
}


document.addEventListener("DOMContentLoaded", ()=>{

document.getElementById("in-x").addEventListener("input", (e) => {
  x = e.target.value;
  move();
});

document.getElementById("in-y").addEventListener("input", (e) => {
  y = e.target.value;
  move();
});

})