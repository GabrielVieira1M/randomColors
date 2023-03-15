let btns = document.querySelectorAll('.changeColor')
const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
      hexColor += colors[getRandomNumber()]
    }
    let main = document.querySelector('main').style.background = hexColor
    btns[i].style.backgroundColor = hexColor
    btns[i].style.color = '#fff'
    btns[i].innerHTML = hexColor
  })
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}