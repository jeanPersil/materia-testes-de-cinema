import { Calculadora } from "./calculadora.js";

const pegarNumeros = () => {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultado").innerText =
      "Digite dois números válidos!";
    return null;
  }

  return new Calculadora(n1, n2);
};

document.getElementById("somar").addEventListener("click", () => {
  const calc = pegarNumeros();
  document.getElementById("resultado").innerText = "Resultado: " + calc.soma();
});

document.getElementById("subtrair").addEventListener("click", () => {
  const calc = pegarNumeros();
  document.getElementById("resultado").innerText = "Resultado: " + calc.sub();
});

document.getElementById("multiplicar").addEventListener("click", () => {
  const calc = pegarNumeros();
  document.getElementById("resultado").innerText = "Resultado: " + calc.mult();
});

document.getElementById("dividir").addEventListener("click", () => {
  const calc = pegarNumeros();
  document.getElementById("resultado").innerText = "Resultado: " + calc.div();
});
