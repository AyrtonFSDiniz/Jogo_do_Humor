const cor = document.querySelector("#button");

cor.addEventListener("mouseover", function () {
  cor.style.background = "rgb(255,140,0)";
});

cor.addEventListener("mouseout", function () {
  cor.style.background = "";
});

var cont = 0;
var statushumor = [
  "Homer irritado por ter que sair da cama",
  "Homer pensativo",
  "Homer feliz estilo foto de perfil de LinkedIn",
  "Homer dizendo Uhulll",
];
var lista = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function alterarImagem() {
  if (cont == lista.length) {
    cont = 0;
  }
  document.getElementById("imagem1").src = lista[cont];
  document.getElementById("status").innerHTML = statushumor[cont];
  cont++;
}
