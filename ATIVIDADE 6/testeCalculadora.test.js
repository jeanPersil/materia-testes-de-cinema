const { Calculadora } = require("./calculadora");

/**
 * Testes da classe Calculadora
 * Cenários:
 * - Soma de dois números
 * - Subtração de dois números
 * - Multiplicação de dois números
 * - Divisão de dois números
 * - Divisão por zero
 */

/* ============ CRIAÇÃO DE CENÁRIO ============ */
// Objetos de teste
let calculadora = new Calculadora(5, 5);
let calculadora2 = new Calculadora(5, 0);

describe("Testes das operações básicas", () => {

  /* ===== TESTE DE SOMA ===== */
  test("Deve somar 5 + 5 corretamente", () => {
    // ===== EXECUÇÃO DO TESTE =====
    let resultado = calculadora.soma();

    // ===== VERIFICAÇÃO DO TESTE =====
    expect(resultado).toBe(10);
  });

  /* ===== TESTE DE SUBTRAÇÃO ===== */
  test("Deve subtrair 5 - 5 corretamente", () => {
    let resultado = calculadora.sub();
    expect(resultado).toBe(0);
  });

  /* ===== TESTE DE MULTIPLICAÇÃO ===== */
  test("Deve multiplicar 5 * 5 corretamente", () => {
    let resultado = calculadora.mult();
    expect(resultado).toBe(25);
  });

  /* ===== TESTE DE DIVISÃO ===== */
  test("Deve dividir 5 / 5 corretamente", () => {
    let resultado = calculadora.div();
    expect(resultado).toBe(1);
  });

  /* ===== TESTE DE DIVISÃO POR ZERO ===== */
  test("Deve retornar mensagem ao dividir por 0", () => {
    let resultado = calculadora2.div();
    expect(resultado).toBe("não é possivel dividir por 0");
  });

});
