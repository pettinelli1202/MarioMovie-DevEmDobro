//OBJETIVO I - 
console.log('mostrar o document', document);

//1-pegar o elemento botão na tela
console.log(document.querySelector(".botao-trailer"));


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo =
    //2-identificar quando o usuário clicar no botão
    botaoTrailer.addEventListener("click", () => {
        console.log("Clicou no botão veja o trailer");
        //4-abrir a modal na tela
        modal.classList.add("aberto");

    });

//3-pegar o elemento modal no js

console.log("Mostrar item da modal", modal);

//OBJETIVO II - CLICAR BOTAO FECHAR MODAL

//identificar quando usuario clicar no botao X
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    //fechar botao modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});