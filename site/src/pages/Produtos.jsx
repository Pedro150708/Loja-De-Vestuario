import { useEffect, useState } from "react";
import "./Produtos.css";
import { getImagemUrl } from "../utils/imageHelper";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const API_URL = "http://localhost:5000"; 
  // 🔥 ajuste para sua URL real do backend

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const response = await fetch(`${API_URL}/api/produtos`);
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function getImagemUrl(imagem) {
    if (!imagem) return "/placeholder.png";

    // já é URL completa
    if (imagem.startsWith("http")) return imagem;

    // 🔥 SEU CASO: imagens estão em /public/produtos
    return `${API_URL}/produtos/${imagem}`;
  }

  function adicionarSacola(produto) {
    const sacolaAtual = JSON.parse(localStorage.getItem("sacola")) || [];

    const existe = sacolaAtual.find((item) => item.id === produto.id);

    if (existe) {
      existe.quantidade += 1;
    } else {
      sacolaAtual.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem("sacola", JSON.stringify(sacolaAtual));

    alert("Produto adicionado à sacola!");
  }

  return (
    <div className="container mt-4">
      <h2>Produtos</h2>

      <div className="row">
        {produtos.map((produto) => (
          <div className="col-md-3 mb-4" key={produto.id}>
            <div className="card h-100 shadow-sm">

              <img
                src={getImagemUrl(produto.imagem)}
                alt={produto.nome}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{produto.nome}</h5>
                <p>R$ {produto.preco}</p>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => adicionarSacola(produto)}
                >
                  Adicionar à sacola
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}