//
// Section: Audio
//
// Lowers volume to stop ear rape
var Playing = true;
function setVol(){
    var Keygen = document.getElementById("KeygenPlayer");
    Keygen.volume = 0.03;}
// Toggles playing the audio on click
function togglePlay(){
    var Keygen = document.getElementById("KeygenPlayer");
    if(Playing){
        Keygen.pause();
        Playing = false;
    }else{
        Keygen.play();
        Playing = true;}}
