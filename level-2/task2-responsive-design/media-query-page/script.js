// same 700px breakpoint as the CSS media query in style.css
// so whatever this reports actually matches what you're seeing

const checkBtn = document.getElementById("checkBtn");
const statusMsg = document.getElementById("statusMsg");

checkBtn.addEventListener("click", function () {
  const width = window.innerWidth;
  const isMobile = width <= 700;

  if (isMobile) {
    statusMsg.textContent = "📱 Mobile layout active — " + width + "px wide. Sidebar has stacked on top.";
    statusMsg.style.background = "#e8f8f4";
    statusMsg.style.color = "#0f7a5f";
  } else {
    statusMsg.textContent = "🖥️ Desktop layout active — " + width + "px wide. Sidebar is beside the content.";
    statusMsg.style.background = "#eef2fb";
    statusMsg.style.color = "#2a3d78";
  }

  statusMsg.style.display = "inline-block";
});
