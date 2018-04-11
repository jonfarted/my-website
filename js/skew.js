const section = document.querySelector("section")
let currentPixel = window.pageYOffset

const looper = function () {
  const newPixel = window.pageYOffset
  const diff = newPixel - currentPixel
  const speed = diff * .75

  section.style.transform = "skewY(" + speed + "deg)"

  currentPixel = newPixel

  requestAnimationFrame(looper)

}


looper()
