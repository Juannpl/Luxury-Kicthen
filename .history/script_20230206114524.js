var navMobile = document.getElementById("barre_categorie_mobile");
var transparent = document.getElementById("transparent");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  console.log
  navMobile.classList.add("active");
  transparent.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  navMobile.classList.remove("active");
  transparent.classList.remove("active");
}






