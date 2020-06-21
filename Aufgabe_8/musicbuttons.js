// Musik
// Buttons
function playSample(track) {
    var sound = new Audio(track);
    sound.play();
    if (Aufnahme == true) {
        music.push(track);
    }
}
document.querySelector("#button1").addEventListener("click", function () { playSample("A.mp3"); });
document.querySelector("#button2").addEventListener("click", function () { playSample("C.mp3"); });
document.querySelector("#button3").addEventListener("click", function () { playSample("F.mp3"); });
document.querySelector("#button4").addEventListener("click", function () { playSample("G.mp3"); });
document.querySelector("#button5").addEventListener("click", function () { playSample("hihat.mp3"); });
document.querySelector("#button6").addEventListener("click", function () { playSample("kick.mp3"); });
document.querySelector("#button7").addEventListener("click", function () { playSample("laugh-1.mp3"); });
document.querySelector("#button8").addEventListener("click", function () { playSample("laugh-2.mp3"); });
document.querySelector("#button9").addEventListener("click", function () { playSample("snare.mp3"); });
// Play & Stopbutton
var playButton = document.querySelector("#playbutton");
var music = ["kick.mp3", "snare.mp3", "kick.mp3", "snare.mp3", "kick.mp3"];
var intervalForMusic;
function playSong() {
    var title = 0;
    intervalForMusic = setInterval(function () {
        var playAudio = new Audio(music[title]);
        playAudio.play();
        title++;
        if (title > 5) {
            title = 0;
        }
    }, 500);
}
document.querySelector("#playbutton").addEventListener("click", function () {
    if (playButton.classList.contains("fa-play")) {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-stop");
        playSong();
    }
    else {
        playButton.classList.remove("fa-stop");
        playButton.classList.add("fa-play");
        clearInterval(intervalForMusic);
    }
});
// Trashbutton
document.querySelector("#trashbutton").addEventListener("click", Trash);
function Trash() {
    music = [];
}
// Recordingbutton
document.querySelector("#recordbutton").addEventListener("click", AufnahmeButton);
var Aufnahme;
function AufnahmeButton() {
    if (Aufnahme) {
        Aufnahme = false;
    }
    else {
        Aufnahme = true;
    }
}
// Inspiriert durch EIA Praktikum vom 19.06.20 mit Hilfe von Hannah, Herr Rausch, Annette, Moritz, Andy
//# sourceMappingURL=musicbuttons.js.map