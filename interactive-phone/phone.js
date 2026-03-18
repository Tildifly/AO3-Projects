/*element.style.display = "none";    // versteckt
element.style.display = "block";   // zeigt als block (div-standard)
element.style.display = "flex";    // zeigt als flexbox
element.style.display = "grid";    // zeigt als grid
*/
const screens = ["homescreen", "google", "google-history"];

function showScreen(id) {
  screens.forEach(function(s) {
    document.getElementById(s).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}


function activeHomescreen() {
  showScreen("homescreen");
}

function activeGoogle() {
  showScreen("google");
  document.getElementById("googleMenuPopup").style.display = "none"; //so u cant see the popup immediately
}

function activegoogleMenuPopup() {
  let popup = document.getElementById("googleMenuPopup");
  if (popup.style.display === "flex") { //If-statement, so it dissapears if you click again
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}

function activeGoogleHistory(){
    showScreen("google-history")
}