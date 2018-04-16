const section = document.querySelector("body")
let currentPixel = window.pageYOffset

const looper = function () {
  const newPixel = window.pageYOffset
  const diff = newPixel - currentPixel
  const speed = diff * 0.25

  section.style.transform = "skewY(" + speed + "deg)"

  currentPixel = newPixel

  requestAnimationFrame(looper)

}


looper()
