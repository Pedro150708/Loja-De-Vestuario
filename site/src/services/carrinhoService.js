export function obterCarrinho() {
  return JSON.parse(
    localStorage.getItem("carrinho")
  ) || [];
}

export function adicionarCarrinho(produto) {

  const carrinho = obterCarrinho();

  const itemExistente = carrinho.find(
    p => p.id === produto.id
  );

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1
    });
  }

  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );
}

export function limparCarrinho() {
  localStorage.removeItem("carrinho");
}