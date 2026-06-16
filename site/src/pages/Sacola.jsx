import { useState } from 'react';
import './sacola.css'; // Ajuste o caminho do seu arquivo CSS conforme necessário

export default function Sacola() {
  // Estado para controlar a abertura do menu dropdown
  const [menuAberto, setMenuAberto] = useState(false);

  // Estado para gerenciar os itens da sacola (simulação inicial)
  // No mundo real, você provavelmente receberia isso via Context API, Redux ou LocalStorage
  const [itensCarrinho] = useState([
    {
      id: 1,
      titulo: "Conjunto Aurora de Alfaiataria Bege",
      preco: 429.00,
      quantidade: 1,
      img: "fotos/roupafeminina1.jpg"
    }
  ]);

  // Função para calcular o total da compra automaticamente
  const calcularTotal = () => {
    return itensCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  };

  // Função para simular a finalização da compra
  const finalizarCompra = () => {
    alert("Compra finalizada com sucesso! 🛍️");
  };

  return (
    <div className="sacola-container">
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

          {/* Menu Dropdown condicional via React */}
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
          <i className="fa-regular fa-heart"></i>
        </div>

        <div className="icon-btn">
          <i className="fa-regular fa-user"></i>
        </div>

        <div className="icon-btn cart">
          <i className="fa-solid fa-bag-shopping"></i>
          <div className="cart-count" id="cart-count">
            {itensCarrinho.reduce((acc, item) => acc + item.quantidade, 0)}
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="container">
        <h2>Minha Sacola</h2>

        {/* Área onde os itens do carrinho serão renderizados */}
        <div id="carrinho">
          {itensCarrinho.length === 0 ? (
            <p className="carrinho-vazio">Sua sacola está vazia.</p>
          ) : (
            itensCarrinho.map((item) => (
              <div key={item.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <img src={item.img} alt={item.titulo} style={{ width: '50px', marginRight: '15px' }} />
                <div>
                  <h4>{item.titulo}</h4>
                  <p>{item.quantidade}x - R$ {item.preco.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="total">
          Total: R$ <span id="total">{calcularTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* ÁREA DE CHECKOUT */}
      <div className="checkout-area">
        <button className="checkout-btn" onClick={finalizarCompra}>
          🛍️ Finalizar compra
        </button>
      </div>
    </div>
  );
}