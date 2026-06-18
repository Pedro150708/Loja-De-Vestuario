import { useState } from "react";
import "./ProductCard.css";
import { getImagemUrl } from "../utils/imageHelper";

function ProductCard({ produto }) {
  const [quantidade, setQuantidade] = useState(1);
  console.log(produto.imagem);

  function getImagemUrl(imagem) {
    if (!imagem) return "https://via.placeholder.com/340x380?text=Sem+Imagem";
    if (imagem.startsWith("http")) return imagem;
    return `${import.meta.env.BASE_URL}produtos/${imagem}`;
  }

  return (
    <div className="custom-product-card">

      <div className="card-image-container">
        <img
          src={getImagemUrl(produto.imagem)}
          alt={produto.nome}
        />

        <span className="badge-hot">HOT</span>
      </div>

      <div className="card-details-container">
        <h3>{produto.nome}</h3>

        <p>
          {produto.preco?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <div>
          <button onClick={() => setQuantidade(q => Math.max(1, q - 1))}>-</button>
          <span>{quantidade}</span>
          <button onClick={() => setQuantidade(q => q + 1)}>+</button>
        </div>

        <button>Adicionar ao Carrinho</button>
      </div>

    </div>
  );
}

export default ProductCard;