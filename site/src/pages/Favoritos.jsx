import { useState } from 'react';
import './favoritos.css'; // Ajuste o caminho do seu CSS de favoritos se necessário

export default function Favoritos() {
  // Estado para controlar a abertura do menu dropdown
  const [menuAberto, setMenuAberto] = useState(false);

  // Estado com uma lista simulada de produtos favoritados
  const [itensFavoritos, setItensFavoritos] = useState([
    {
      id: 1,
      titulo: "Conjunto Aurora de Alfaiataria Bege",
      preco: "R$ 429,00",
      img: "fotos/roupafeminina1.jpg"
    },
    {
      id: 4,
      titulo: "Bolsa Élan Noir",
      preco: "R$ 389,90",
      img: "fotos/bolsamc.png"
    }
  ]);

  // Função para remover um item dos favoritos
  const removerDosFavoritos = (id) => {
    setItensFavoritos(itensFavoritos.filter(item => item.id !== id));
  };

  return (
    <div className="favoritos-container">
      {/* HEADER */}
      <header>
        <div className="more-menu">
          <div 
            className="icon-btn" 
            id="moreBtn"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <i className="fa-solid fa-ellipsis"></i>
          </div>

          {/* Menu Dropdown condicional */}
          {menuAberto && (
            <div className="dropdown-menu" id="dropdownMenu" style={{ display: 'block' }}>
              <a href="#">Feminino</a>
              <a href="#">Masculino</a>
              <a href="#">Calçados</a>
              <a href="#">Acessórios</a>
              <a href="#">Bolsas</a>
              <a href="#">Perfumes</a>
              <a href="#">Joias</a>
              <a href="#">Promoções</a>
            </div>
          )}
        </div>

        <div className="icon-btn theme-toggle" id="theme-toggle">
          <i className="fa-solid fa-moon"></i>
        </div>

        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Digite o que você procura..." />
        </div>

        <div className="logo">
          MONTCLAIR
        </div>

        <div className="icon-btn">
          <i className="fa-regular fa-message"></i>
        </div>

        <div className="icon-btn">
          <i className="fa-solid fa-heart" style={{ color: '#red' }}></i> {/* Ícone preenchido já que estamos na página de favoritos */}
        </div>

        <div className="icon-btn">
          <i className="fa-regular fa-user"></i>
        </div>

        <div className="icon-btn cart">
          <i className="fa-solid fa-bag-shopping"></i>
          <div className="cart-count" id="cart-count">
            0
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="container">
        <h2>Meus Favoritos</h2>

        {/* Grid de Favoritos */}
        <div className="grid" id="favoritosGrid">
          {itensFavoritos.length === 0 ? (
            <p className="lista-vazia">Você ainda não tem produtos salvos nos favoritos.</p>
          ) : (
            itensFavoritos.map((produto) => (
              <div className="product-card" key={produto.id} style={{ position: 'relative' }}>
                
                {/* Botão para desfavoritar / remover do grid */}
                <button 
                  className="fav-btn" 
                  onClick={() => removerDosFavoritos(produto.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fa-solid fa-heart" style={{ color: '#e74c3c' }}></i>
                </button>

                <img src={produto.img} alt={produto.titulo} />

                <div className="product-info">
                  <h3>{produto.titulo}</h3>
                  <h4>{produto.preco}</h4>
                  
                  <button className="buy-btn">
                    Visualizar Produto
                  </button>
                </div>

              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}