const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
console.log(video.src);
const linkDoVideo = "";


botaoTrailer.addEventListener("click", () => {
    console.log("Clicou no botão veja o trailer");
    modal.classList.add("aberto");
});
//OBJETIVO I - 
console.log('mostrar o document', document);

//1-pegar o elemento botão na tela
console.log(document.querySelector(".botao-trailer"));





console.log("Mostrar item da modal", modal);
const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    //fechar botao modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});