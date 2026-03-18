/*element.style.display = "none";    // versteckt
element.style.display = "block";   // zeigt als block (div-standard)
element.style.display = "flex";    // zeigt als flexbox
element.style.display = "grid";    // zeigt als grid
*/

function activeHomescreen(){
    document.getElementById("google").style.display = "none";
    document.getElementById("homescreen").style.display = "flex";
}

function activeGoogle(){
    document.getElementById("homescreen").style.display = "none";
    document.getElementById("google").style.display = "flex";
}

function ActivegoogleMenuPopup(){
    document.getElementById("googleMenuPopup").style.display = "flex";
}