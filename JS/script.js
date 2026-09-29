var musicas = [
    {
        nome: "Música 1",
        artista: "Artista 1",
        link: "https://www.youtube.com/watch?v=COLOQUE_O_LINK"
    },
    {
        nome: "Música 2",
        artista: "Artista 2",
        link: "https://www.youtube.com/watch?v=COLOQUE_O_LINK"
    },
    {
        nome: "Música 3",
        artista: "Artista 3",
        link: "https://www.youtube.com/watch?v=COLOQUE_O_LINK"
    }
];

function tocarMusica(numero) {

    document.getElementById("nomeMusica").innerText = musicas[numero].nome;
    document.getElementById("artista").innerText = musicas[numero].artista;

    var link = musicas[numero].link;
    var id = link.split("v=")[1];

    document.getElementById("youtube").innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1" allow="autoplay"></iframe>';
}