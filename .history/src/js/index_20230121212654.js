//OBJETIVO I - 
console.log('mostrar o document', document);

//1-pegar o elemento botão na tela
console.log(document.querySelector(".botao-trailer"));


const botaoTrailer = document.querySelector(".botao-trailer");

//2-identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    console.log("Clicou no botão veja o trailer");
    //4-abrir a modal na tela
    modal.classList.add("aberto");

});

//3-pegar o elemento modal no js
const modal = document.querySelector(".modal");
console.log("Mostrar item da modal", modal);

//OBJETIVO II - CLICAR BOTAO FECHAR MODAL
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    //fechar botao modal
    modal.classList.remove("aberto");
    video.set
});

const video = document.getElementById("video")