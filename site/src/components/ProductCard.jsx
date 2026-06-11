import { useState } from "react";
import "./ProductCard.css"; // Certifique-se de que este arquivo existe na mesma pasta

function ProductCard({ produto }) {
  const [quantidade, setQuantidade] = useState(1);

  const handleSubtrair = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  const handleSomar = () => {
    setQuantidade(quantidade + 1);
  };

  return (
    <div className="custom-product-card">
      {/* 1. FOTO DO PRODUTO + TAGS FLUTUANTES (HOT E FAVORITAR) */}
      <div className="card-image-container">
        <img
          src={produto.imagem ? `/produtos/${produto.imagem}` : "https://via.placeholder.com/340x380?text=Sem+Imagem"}
          alt={produto.nome}
          className="card-product-image"
        />
        <span className="badge-hot">HOT</span>
        <button className="btn-favorite" title="Favoritar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* DETALHES DO PRODUTO (NOME, PREÇO, COR, TAMANHO...) */}
      <div className="card-details-container">
        
        {/* 2. NOME */}
        <h3 className="card-product-name">{produto.nome}</h3>

        {/* 3. PREÇO EM TOM VINHO + PARCELAMENTO */}
        <div className="card-price-block">
          <span className="card-product-price">
            {produto.preco?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span className="card-product-subtext">2x sem juros</span>
        </div>

        {/* 4. COR (Renderiza um círculo com a cor dinâmica da API) */}
        <div className="card-colors-block">
          <span
            className="card-color-circle"
            style={{
              backgroundColor: produto.cor ? produto.cor.toLowerCase() : "#ccc",
            }}
            title={`Cor: ${produto.cor}`}
          />
        </div>

        {/* 5. TAMANHO */}
        <div className="card-sizes-block">
          <span className="card-size-badge">{produto.tamanho || "U"}</span>
        </div>

        {/* 6. SELETOR DE QUANTIDADE (+ e - funcionais) */}
        <div className="card-quantity-selector">
          <button onClick={handleSubtrair} className="qty-action-btn">-</button>
          <span className="qty-display-value">{quantidade}</span>
          <button onClick={handleSomar} className="qty-action-btn">+</button>
        </div>

        {/* 7. BOTÃO ADICIONAR AO CARRINHO PRETO */}
        <button className="btn-add-to-cart">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;