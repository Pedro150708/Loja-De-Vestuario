import api from "./api";

export async function getProdutos() {
  const response =
    await api.get("/Produtos");

  return response.data;
}

export async function getProduto(id) {
  const response =
    await api.get(`/Produtos/${id}`);

  return response.data;
}