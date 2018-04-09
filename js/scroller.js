
(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('gentags').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('gentags').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('gentags').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('gentags').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('gentags').attachEvent("onmousewheel", scrollHorizontally);
    }
})();


/* const section = document.querySelector("section")
let currentPixel = window.pageXOffset

const looper = function () {
  const newPixel = window.pageXOffset
  const diff = newPixel - currentPixel
  const speed = diff * 0.25

  section.style.transform = "skewX(" + speed + "deg)"

  currentPixel = newPixel

  requestAnimationFrame(looper)

}


looper()
