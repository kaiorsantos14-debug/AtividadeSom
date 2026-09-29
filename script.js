var musicas = [
    {
        nome: "Musica 1",
        artista: "Artista 1",
        arquivo: "../Musicas/musica1.mp3"
    },
    {
        nome: "Musica 2",
        artista: "Artista 2",
        arquivo: "../Musicas/musica2.mp3"
    },
    {
        nome: "Musica 3",
        artista: "Artista 3",
        arquivo: "../Musicas/musica3.mp3"
    }
];

function tocarMusica(numero) {

    var audio = document.getElementById("audio");

    document.getElementById("nomeMusica").innerText = musicas[numero].nome;
    document.getElementById("artista").innerText = musicas[numero].artista;

    audio.src = musicas[numero].arquivo;
    audio.play();
}