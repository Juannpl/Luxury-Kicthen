var navMobile = document.getElementById("barre_categorie_mobile");
var transparent = document.getElementById("transparent");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  navMobile.classList.add("active");
  transparent.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  navMobile.classList.remove("active");
  transparent.classList.remove("active");
}



// function myFunction() {

//     if(document.getElementById("barre_categorie_mobile").style.display = "block") {
//         (document.getElementById("barre_categorie_mobile").style.display = "none");
        
//     }else (document.getElementById("barre_categorie_mobile").style.display = "none");{
//         document.getElementById("barre_categorie_mobile").style.display = "block"

// }
// }






