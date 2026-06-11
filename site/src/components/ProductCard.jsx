import "./ProductCard.css";

function ProductCard({ produto }) {
  return (
    <div className="card produto-card h-100">

      <img
        src={produto.imagem}
        alt={produto.nome}
        className="card-img-top"
      />

      <div className="card-body">

        <h5>{produto.nome}</h5>

        <p className="text-muted">
          {produto.descricao}
        </p>

        <h4>
          R$ {produto.preco.toFixed(2)}
        </h4>

        <button className="btn btn-dark w-100">
          Comprar
        </button>

      </div>

    </div>
  );
}

export default ProductCard;