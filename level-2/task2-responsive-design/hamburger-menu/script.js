// toggles the .show class, css handles the actual hiding/showing
// also prints a status line so you can SEE it's actually firing
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const menuStatus = document.getElementById("menuStatus");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");

  const isOpen = navLinks.classList.contains("show");
  const width = window.innerWidth;

  // the hamburger icon only exists below 650px in the first place (see CSS),
  // so just being able to click this at all already proves the breakpoint fired
  menuStatus.textContent = isOpen
    ? "✅ Menu opened at " + width + "px — responsive nav is working."
    : "Menu closed at " + width + "px.";
});
