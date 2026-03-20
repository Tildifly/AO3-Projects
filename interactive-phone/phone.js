/*element.style.display = "none";    // versteckt
element.style.display = "block";   // zeigt als block (div-standard)
element.style.display = "flex";    // zeigt als flexbox
element.style.display = "grid";    // zeigt als grid
*/
const screens = ["homescreen", "google", "google-history", "gmail", "write-gmail", "received-email-1", "received-email-2", "received-email-3"];

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
    showScreen("google-history");
}

function activeGmail(){
    showScreen("gmail");
}

function activeWriteEmail(){
  showScreen("write-gmail");
  console.log("write the fucking email")
}

function clearEmailInput(){
  input = document.getElementById("gmail-tekstfeld");
  empfänger = document.getElementById("empfänger-textfeld");
  reference = document.getElementById("input-reference"); 
  
  input.value = "";
  empfänger.value = "";
  reference.value = "";
}

function activeGmailOne(){
  showScreen("received-email-1");
}

function activeGmailTwo(){
  showScreen("received-email-2");
}

function activeGmailThree(){
  showScreen("received-email-3");
}