// Musik
// Buttons
function playSample(track) {
    var sound = new Audio(track);
    sound.play();
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
//  Playbutton
function playSong() {
    setInterval(function () {
        var song = ["kick.mp3", "snare.mp3", "hihat.mp3"];
        var playKick = new Audio(song[1]);
        var playSnare = new Audio(song[2]);
        var playHihat = new Audio(song[3]);
        playKick.play();
        playSnare.play();
        playHihat.play();
    }, 500);
}
document.querySelector("#playbutton").addEventListener("click", playSong);
//# sourceMappingURL=musicbuttons.js.map