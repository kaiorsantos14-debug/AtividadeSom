var audio = document.getElementById("audio");

function tocar(musica) {
    audio.src = musica;
    audio.load();
    audio.play();
}