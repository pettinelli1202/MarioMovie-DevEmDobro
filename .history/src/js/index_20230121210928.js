console.log('mostrar o document', document);

//pegar o elemento botão na tela
console.log(document.querySelector(".botao-trailer"));


const botaoTrailer = document.querySelector(".botao-trailer")

//2-identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    console.log("Clicou no botão veja o trailer");
    //abrir a modal na tela
});

//pegar o elemento modal no js
const modal = document.querySelector(".modal");
console.log("Mostrar item da modal", modal);