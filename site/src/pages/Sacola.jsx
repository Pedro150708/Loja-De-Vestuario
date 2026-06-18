import { useState } from "react";
import "./Sacola.css";

export default function Sacola() {
  const [itens, setItens] = useState(() => {
    return JSON.parse(localStorage.getItem("sacola")) || [];
  });

  const API_URL = "http://localhost:5000";

  function removerItem(id) {
    const nova = itens.filter((item) => item.id !== id);
    setItens(nova);
    localStorage.setItem("sacola", JSON.stringify(nova));
  }

  function alterarQuantidade(id, delta) {
    const nova = itens.map((item) => {
      if (item.id === id) {
        const qtd = item.quantidade + delta;
        return { ...item, quantidade: qtd > 0 ? qtd : 1 };
      }
      return item;
    });

    setItens(nova);
    localStorage.setItem("sacola", JSON.stringify(nova));
  }

  function getImagemUrl(imagem) {
    if (!imagem) return "/placeholder.png";
    if (imagem.startsWith("http")) return imagem;
    return `${API_URL}/produtos/${imagem}`;
  }

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Sacola</h2>

      {itens.length === 0 ? (
        <p>Sua sacola está vazia.</p>
      ) : (
        <>
          {itens.map((item) => (
            <div key={item.id} className="card mb-3 p-3">
              <div className="d-flex gap-3 align-items-center">

                <img
                  src={getImagemUrl(item.imagem)}
                  alt={item.nome}
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />

                <div className="flex-grow-1">
                  <h5>{item.nome}</h5>
                  <p>R$ {item.preco}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => alterarQuantidade(item.id, -1)}
                    >
                      -
                    </button>

                    <span>{item.quantidade}</span>

                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => alterarQuantidade(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removerItem(item.id)}
                >
                  Remover
                </button>

              </div>
            </div>
          ))}

          <hr />
          <h4>Total: R$ {total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}