import api from "./api";

export async function criarPedido(
  pedido
) {
  const response =
    await api.post(
      "/Pedidos",
      pedido
    );

  return response.data;
}

export async function listarPedidos() {
  const response =
    await api.get("/Pedidos");

  return response.data;
}