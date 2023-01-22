const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    console.log("Clicou no botão veja o trailer");

});

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    //fechar botao modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

console.log(document.querySelector(".botao-trailer"));
console.log("Mostrar item da modal", modal);