const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = "";


botaoTrailer.addEventListener("click", () => {
    console.log("Clicou no botão veja o trailer");
    modal.classList.add("aberto");
});

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    //fechar botao modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

console.log(document.querySelector(".botao-trailer"));
console.log("Mostrar item da modal", modal);