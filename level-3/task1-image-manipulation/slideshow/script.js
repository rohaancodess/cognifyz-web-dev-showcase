// doesn't autoplay on load anymore - only starts once you click the button
// 1000ms = 1 second per slide, same button toggles pause too

const slides = document.querySelectorAll(".slide");
const startBtn = document.getElementById("startBtn");

let current = 0;
let timer = null;
let playing = false;

function showNext() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

startBtn.addEventListener("click", function () {
  if (!playing) {
    timer = setInterval(showNext, 1000);
    startBtn.textContent = "⏸ Pause";
    playing = true;
  } else {
    clearInterval(timer);
    startBtn.textContent = "▶ Start Slideshow";
    playing = false;
  }
});
