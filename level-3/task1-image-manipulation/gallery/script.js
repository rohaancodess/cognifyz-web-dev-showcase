const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");

function enlarge(imgEl) {
  overlayImg.src = imgEl.src;
  overlay.style.display = "flex";
}

function closeOverlay() {
  overlay.style.display = "none";
}
