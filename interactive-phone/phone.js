/*element.style.display = "none";    // versteckt
element.style.display = "block";   // zeigt als block (div-standard)
element.style.display = "flex";    // zeigt als flexbox
element.style.display = "grid";    // zeigt als grid
*/
const screens = ["homescreen", "google"];

function showScreen(id) {
  screens.forEach(function(s) {
    document.getElementById(s).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}

function activeHomescreen() {
  showScreen("homescreen");
  document.getElementById("googleMenuPopup").style.display = "none";
}

function activeGoogle() {
  showScreen("google");
}

function ActivegoogleMenuPopup() {
  let popup = document.getElementById("googleMenuPopup");
  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}
