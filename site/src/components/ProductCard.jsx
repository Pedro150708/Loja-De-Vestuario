import { useState } from "react";
import "./ProductCard.css";
import { getImagemUrl } from "../utils/imageHelper";

function ProductCard({ produto }) {
  const [quantidade, setQuantidade] = useState(1);
  console.log(produto.imagem);


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
        <h3 className="card-product-name">
          {produto.nome}
        </h3>

        <p className="card-product-price">
          {produto.preco?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <div className="quantidade-container">
  <button
    className="qty-btn"
    onClick={() => setQuantidade(q => Math.max(1, q - 1))}
  >
    -
  </button>

  <span>{quantidade}</span>

  <button
    className="qty-btn"
    onClick={() => setQuantidade(q => q + 1)}
  >
    +
  </button>
</div>

        <button className="btn-add-to-cart">
          Adicionar ao Carrinho
        </button>
      </div>

    </div>
  );
}

export default ProductCard;