/**
 * Testes do Mercadinho
 * Autor: Jean Lucas
 * Data: 20/09/2025
*/

const { Produto, Mercadinho } = require("../produtoModel.js");

describe("Testes do Mercadinho", () => {
  test("1: Cadastro de produto válido", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto1 = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);

    // ===============================
    // ▶ Execução
    // ===============================
    mercado.adicionarProduto(produto2);
    const resultado = mercado.adicionarProduto(produto1);

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(true);
    expect(mercado.listarProdutos()).toContain(produto1);
  });

  test("2: Cadastro de produto duplicado", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto1 = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(1, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto1);

    // ===============================
    // ▶ Execução
    // ===============================
    let resultado = mercado.adicionarProduto(produto2);

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(false);
    expect(mercado.listarProdutos().length).toBe(1);
  });

  test("3: Busca de produto existente", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();

    const produto = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto2);
    mercado.adicionarProduto(produto);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.buscarProduto(1);

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(produto);
    expect(resultado.nome).toBe(produto.nome);
    expect(resultado.preco).toBe(produto.preco);
    expect(resultado.quantidade).toBe(produto.quantidade);
  });

  test("4: Busca de produto inexistente", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    mercado.adicionarProduto(produto);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.buscarProduto(2);

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBeNull();
  });

  test("5: Atualização de nome do produto", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    mercado.adicionarProduto(produto);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.atualizarProduto(1, { nome: "Arroz Integral" });

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(true);
    expect(produto.preco).toBe(20.0);
    expect(produto.quantidade).toBe(10);
    expect(mercado.buscarProduto(1).nome).toBe("Arroz Integral");
  });

  test("6: Atualização de preço do produto", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    mercado.adicionarProduto(produto);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.atualizarProduto(1, { preco: 25.0 });

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(true);
    expect(mercado.buscarProduto(1).nome).toBe("Arroz");
    expect(mercado.buscarProduto(1).preco).toBe(25.0);
    expect(mercado.buscarProduto(1).quantidade).toBe(10);
  });

  test("7: Atualização de produto inexistente", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    mercado.adicionarProduto(produto);
    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.atualizarProduto(2, { nome: "Feijão preto" });
    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(false);
  });

  test("8: Remoção de produto existente", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto);
    mercado.adicionarProduto(produto2);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.removerProduto(1);

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(true);
    expect(mercado.listarProdutos().length).toBe(1);
    expect(mercado.listarProdutos()).not.toContain(produto);
  });

  test("9: Remoção de produto inexistente", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto);
    mercado.adicionarProduto(produto2);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.removerProduto(3);

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado).toBe(false);
    expect(mercado.listarProdutos().length).toBe(2);
  });

  test("10: Listagem de produtos", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto1 = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto1);
    mercado.adicionarProduto(produto2);

    // ===============================
    // ▶ Execução
    // ===============================
    const resultado = mercado.listarProdutos();

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(resultado.length).toBe(2);
  });

  test("11: Limpeza da lista", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto1 = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto1);
    mercado.adicionarProduto(produto2);

    // ===============================
    // ▶ Execução
    // ===============================
    resultado = mercado.limpar();

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(mercado.listarProdutos().length).toBe(0);
  });

  test("12:Controle de estoque", () => {
    // ===============================
    // 📌 Cenário de Teste
    // ===============================
    const mercado = new Mercadinho();
    const produto = new Produto(1, "Arroz", 20.0, 10);
    const produto2 = new Produto(2, "Feijão", 10.0, 10);
    mercado.adicionarProduto(produto);
    mercado.adicionarProduto(produto2);

    // ===============================
    // ▶ Execução
    // ===============================
    mercado.atualizarProduto(1, { quantidade: 5 });
    mercado.atualizarProduto(2, { quantidade: 0 });

    // ===============================
    // ✅ Verificação
    // ===============================
    expect(mercado.buscarProduto(1).quantidade).toBe(5);
    expect(mercado.buscarProduto(2).quantidade).toBe(0);
  });
});
