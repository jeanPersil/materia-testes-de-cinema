import { Calculadora } from "../src/calculadora.js";

/* ===== CRIAÇÃO DE CENÁRIO ===== */
// Objetos de teste com diferentes valores
let c1 = new Calculadora(10, 5);
let c2 = new Calculadora(-3, 7);
let c3 = new Calculadora(0, 0);
let c4 = new Calculadora(2.5, 1.5);
let c5 = new Calculadora(100, 20);

/* ===== TESTES DE SOMA ===== */
describe("TESTES DE SOMA", () => {
  test("Soma 10 + 5 = 15", () => {
    // ===== EXECUÇÃO DO TESTE =====
    let resultado = c1.soma();

    // ===== VERIFICAÇÃO DO TESTE =====
    expect(resultado).toBe(15);
  });

  test("Soma -3 + 7 = 4", () => {
    let resultado = c2.soma();
    expect(resultado).toBe(4);
  });

  test("Soma 0 + 0 = 0", () => {
    let resultado = c3.soma();
    expect(resultado).toBe(0);
  });

  test("Soma 2.5 + 1.5 = 4", () => {
    let resultado = c4.soma();
    expect(resultado).toBe(4);
  });

  test("Soma 100 + 20 = 120", () => {
    let resultado = c5.soma();
    expect(resultado).toBe(120);
  });
});

/* ===== TESTES DE SUBTRAÇÃO ===== */
describe("TESTES DE SUBTRAÇÃO", () => {
  test("Subtração 10 - 5 = 5", () => {
    let resultado = c1.sub();
    expect(resultado).toBe(5);
  });

  test("Subtração -3 - 7 = -10", () => {
    let resultado = c2.sub();
    expect(resultado).toBe(-10);
  });

  test("Subtração 0 - 0 = 0", () => {
    let resultado = c3.sub();
    expect(resultado).toBe(0);
  });

  test("Subtração 2.5 - 1.5 = 1", () => {
    let resultado = c4.sub();
    expect(resultado).toBe(1);
  });

  test("Subtração 100 - 20 = 80", () => {
    let resultado = c5.sub();
    expect(resultado).toBe(80);
  });
});

/* ===== TESTES DE MULTIPLICAÇÃO ===== */
describe("TESTES DE MULTIPLICAÇÃO", () => {
  test("Multiplicação 10 * 5 = 50", () => {
    let resultado = c1.mult();
    expect(resultado).toBe(50);
  });

  test("Multiplicação -3 * 7 = -21", () => {
    let resultado = c2.mult();
    expect(resultado).toBe(-21);
  });

  test("Multiplicação 0 * 0 = 0", () => {
    let resultado = c3.mult();
    expect(resultado).toBe(0);
  });

  test("Multiplicação 2.5 * 1.5 = 3.75", () => {
    let resultado = c4.mult();
    expect(resultado).toBe(3.75);
  });

  test("Multiplicação 100 * 20 = 2000", () => {
    let resultado = c5.mult();
    expect(resultado).toBe(2000);
  });
});

/* ===== TESTES DE DIVISÃO ===== */
describe("TESTES DE DIVISÃO", () => {
  test("Divisão 10 / 5 = 2", () => {
    let resultado = c1.div();
    expect(resultado).toBe(2);
  });

  test("Divisão -3 / 7 ≈ -0.42857", () => {
    let resultado = c2.div();
    expect(resultado).toBeCloseTo(-0.42857, 5);
  });

  test("Divisão 0 / 1 = 0", () => {
    let zeroDiv = new Calculadora(0, 1);
    let resultado = zeroDiv.div();
    expect(resultado).toBe(0);
  });

  test("Divisão 2.5 / 1.5 ≈ 1.6667", () => {
    let resultado = c4.div();
    expect(resultado).toBeCloseTo(1.6667, 4);
  });

  test("Divisão 100 / 20 = 5", () => {
    let resultado = c5.div();
    expect(resultado).toBe(5);
  });
});
