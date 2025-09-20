class Produto {
  constructor(id, nome, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class Mercadinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    if (this.produtos.some((p) => p.id === produto.id)) {
      //alert("ID já existe!");
      return false;
    }
    this.produtos.push(produto);
    return true;
  }

  buscarProduto(id) {
    return this.produtos.find((p) => p.id === id) || null;
  }

  atualizarProduto(id, novosDados) {
    const produto = this.buscarProduto(id);
    if (!produto) return false;
    produto.nome = novosDados.nome ?? produto.nome;
    produto.preco = novosDados.preco ?? produto.preco;
    produto.quantidade = novosDados.quantidade ?? produto.quantidade;
    return true;
  }

  removerProduto(id) {
    const tamanhoInicial = this.produtos.length;
    this.produtos = this.produtos.filter((p) => p.id !== id);
    return this.produtos.length < tamanhoInicial;
  }

  listarProdutos() {
    return this.produtos;
  }

  limpar() {
    this.produtos = [];
  }
}

const mercado = new Mercadinho();

function atualizarTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";
  mercado.listarProdutos().forEach((prod) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${prod.id}</td>
          <td>${prod.nome}</td>
          <td>R$ ${prod.preco.toFixed(2)}</td>
          <td>${prod.quantidade}</td>
          <td>
            <button onclick="editar(${prod.id})">Editar</button>
            <button onclick="remover(${prod.id})">Remover</button>
          </td>
        `;
    tbody.appendChild(tr);
  });
}

function adicionar() {
  const id = parseInt(document.getElementById("id").value);
  const nome = document.getElementById("nome").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (!id || !nome || isNaN(preco) || isNaN(quantidade)) {
    alert("Preencha todos os campos!");
    return;
  }

  const produto = new Produto(id, nome, preco, quantidade);
  if (mercado.adicionarProduto(produto)) {
    atualizarTabela();
  }
}

function remover(id) {
  mercado.removerProduto(id);
  atualizarTabela();
}

function editar(id) {
  const produto = mercado.buscarProduto(id);
  if (!produto) return;

  const novoNome = prompt("Novo nome:", produto.nome);
  const novoPreco = parseFloat(prompt("Novo preço:", produto.preco));
  const novaQtd = parseInt(prompt("Nova quantidade:", produto.quantidade));

  mercado.atualizarProduto(id, {
    nome: novoNome,
    preco: isNaN(novoPreco) ? produto.preco : novoPreco,
    quantidade: isNaN(novaQtd) ? produto.quantidade : novaQtd,
  });

  atualizarTabela();
}

module.exports = { Produto, Mercadinho };
