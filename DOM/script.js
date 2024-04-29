window.alert(
  "DOM é uma maneira de os programas manipularem o conteúdo, a estrutura e o estilo de páginas da web de forma interativa"
);

//para selecionar um elemento, para modifica-lo, selecionar
//selecione documento, e puze o elemento dele = document.querySelector(x)

//Para adicionar um elemento addEventListener

const h3Selecionado = document.querySelector("h3");

function teste() {
  console.log("Clicou em ", h3Selecionado);
}

// Retorne o url da página atual utilizando o objeto window
const href = "http://127.0.0.1:5500";

console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador

// Retorne a largura da janela
