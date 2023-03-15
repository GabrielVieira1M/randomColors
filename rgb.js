let btns = document.querySelectorAll(".changeColor");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {

    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();
    let rgb = `rgb(${r}, ${g}, ${b})`;

    let main = (document.querySelector("main").style.background = rgb);
    btns[i].style.backgroundColor = rgb;
    btns[i].style.color = "#fff";
    btns[i].innerHTML = rgb;
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
