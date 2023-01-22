const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
    console.log(document.querySelector(".botao-trailer"));
    console.log("Mostrar item da modal", modal);
    modal.classList.add("aberto");
    video.setAttribute("src", "linkDoVideo");
    console.log("Clicou no botão veja o trailer");

});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});