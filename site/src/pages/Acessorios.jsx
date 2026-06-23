import { useState, useEffect } from "react";
import { productsData } from './data/productsData';
import './Acessorios.css';

export default function Acessorios() {
  // --- ESTADOS DA APLICAÇÃO ---
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  
  // Contadores globais baseados nos seus seletores de classe do Script.js
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Estados locais para controlar cada card de forma isolada
  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [favoritedItems, setFavoritedItems] = useState({});
  const [popBadge, setPopBadge] = useState(false);

  // 1. Alternância de tema (Equivalente ao item 1 do Script.js)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // 2. Efeito Sticky no Header (Equivalente ao item 2 do Script.js)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Função de ajustar quantidade (Equivalente ao item 3 do Script.js)
  const handleQuantityChange = (productId, amount) => {
    setQuantities(prev => {
      const currentQty = prev[productId] || 1;
      const nextQty = Math.max(1, currentQty + amount);
      return { ...prev, [productId]: nextQty };
    });
  };

  // 4. Seleção de tamanhos ou signos (Equivalente ao item 4 do Script.js)
  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  // 7. Sistema de adicionar à sacola com validação (Equivalente ao item 7 do Script.js)
  const handleAddToCart = (product) => {
    const sizeChosen = selectedSizes[product.id];
    
    if (!sizeChosen) {
      const alertMsg = product.hasSignSelector 
        ? 'Por favor, selecione um signo primeiro!' 
        : 'Por favor, selecione um tamanho primeiro!';
      alert(alertMsg);
      return;
    }

    const qty = quantities[product.id] || 1;
    setCartCount(prev => prev + qty);
    alert('Produto adicionado ao carrinho com sucesso!');
  };

  // 8. Sistema de favoritos dinâmico com efeito pop (Equivalente ao item 8 do Script.js)
  const handleToggleFavorite = (productId) => {
    const isCurrentlyFavorited = !!favoritedItems[productId];
    
    setFavoritedItems(prev => ({ ...prev, [productId]: !isCurrentlyFavorited }));
    
    if (isCurrentlyFavorited) {
      setFavoriteCount(prev => prev - 1);
    } else {
      setFavoriteCount(prev => prev + 1);
      // Efeito visual sutil de pulo (pop)
      setPopBadge(true);
      setTimeout(() => setPopBadge(false), 200);
    }
  };

  // 5. Filtragem dinâmica (Equivalente ao item 5 do Script.js)
  const filteredProducts = activeFilter === 'all'
    ? productsData
    : productsData.filter(item => item.category === activeFilter);

  return (
    <div>
      {/* HEADER */}
      <header className={`header-montclair ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-top">
          <div className="header-left">
            <button className="icon-btn"><span className="material-symbols-outlined">more_horiz</span></button>
            <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
              <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </div>
          <div className="logo">MontClair</div>
          <div className="header-right">
            <button className="icon-btn-favorite">
              <span className="material-symbols-outlined">favorite</span>
              <span 
                className="favorite-badge" 
                style={{ transform: popBadge ? 'scale(1.3)' : 'scale(1)' }}
              >
                {favoriteCount}
              </span>
            </button>
            <button className="icon-btn"><span className="material-symbols-outlined">person</span></button>
            <button className="icon-btn-cart">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>
        <div className="search-bar-container">
          <span className="material-symbols-outlined search-icon">search</span>
          <input type="text" placeholder="Buscar na loja..." className="search-input" />
        </div>
      </header>

      <div className="header-spacer"></div>

      {/* LAYOUT GRID */}
      <div className="main-container">
        
        {/* SIDEBAR FILTROS */}
        <aside className="sidebar-filters">
          <h2>FILTROS</h2>
          <div className="filter-group">
            <h3>CATEGORIA</h3>
            <div className="filter-dropdown active">
              {/* 6. Dropdown retrátil (Equivalente ao item 6 do Script.js) */}
              <div className="dropdown-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <span>Vestuário</span>
                <span className="material-symbols-outlined arrow">
                  {isFilterOpen ? 'expand_more' : 'expand_less'}
                </span>
              </div>
              
              <ul className={`submenu ${!isFilterOpen ? 'closed' : ''}`}>
                {[
                  { id: 'all', label: 'Ver Todas' },
                  { id: 'vestidos', label: 'Vestidos' },
                  { id: 'plus-size', label: 'Plus Size' },
                  { id: 'colares', label: 'Colares' },
                  { id: 'banho', label: 'Roupas de Banho' },
                  { id: 'pijamas', label: 'Pijamas' },
                  { id: 'calcas', label: 'Calças' },
                  { id: 'camisas', label: 'Camisas' },
                  { id: 'casacos', label: 'Casacos' }
                ].map(cat => (
                  <li 
                    key={cat.id}
                    className={`filter-option ${activeFilter === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.id)}
                  >
                    {cat.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* VITRINE DE PRODUTOS */}
        <main className="products-grid">
          {filteredProducts.map((product) => {
            const qty = quantities[product.id] || 1;
            const currentSize = selectedSizes[product.id] || '';
            const isFav = !!favoritedItems[product.id];

            return (
              <div key={product.id} className="product-card" data-category={product.category}>
                <div className="card-image-area">
                  {product.tag && <span className="tag-hot">{product.tag}</span>}
                  <button 
                    className={`favorite-card-btn ${isFav ? 'favorited' : ''}`}
                    onClick={() => handleToggleFavorite(product.id)}
                  >
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="card-info">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="price-box">
                    <div className="price-row">
                      <span className="price">
                        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                      {product.oldPrice && (
                        <span className="price-old">
                          {product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      )}
                    </div>
                    <span className="installments">{product.installments}</span>
                  </div>
                  
                  <div className="color-selectors">
                    <span className="circle-color active" style={{ backgroundColor: product.color }} title={product.colorTitle}></span>
                  </div>
                  
                  {/* Condicional para renderizar o seletor ultra delicado de signos ou botões normais */}
                  {product.hasSignSelector ? (
                    <div className="signo-selector-wrapper" style={{ margin: "0 auto 20px auto", width: "85%", position: "relative" }}>
                      <select 
                        className="signo-select size-btn" 
                        value={currentSize}
                        onChange={(e) => handleSizeSelect(product.id, e.target.value)}
                        style={{
                          width: "100%", padding: "6px 0", fontFamily: "var(--font-sans)", fontSize: "11px", 
                          letterSpacing: "1px", textTransform: "uppercase", border: "none", borderBottom: "1px solid var(--border-color)", 
                          background: "transparent", color: "var(--text-main)", cursor: "pointer", outline: "none", 
                          appearance: "none", WebkitAppearance: "none", MozAppearance: "none", textAlign: "center", textAlignLast: "center"
                        }}
                      >
                        <option value="" disabled style={{ backgroundColor: "var(--bg-card)" }}>Escolha o Signo</option>
                        {['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'].map(signo => (
                          <option key={signo} value={signo.toLowerCase()} style={{ backgroundColor: "var(--bg-card)" }}>{signo}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined" style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontsize: "14px", color: "var(--text-muted)", pointerEvents: "none" }}>expand_more</span>
                    </div>
                  ) : (
                    <div className="size-selectors">
                      {product.sizes?.map(size => (
                        <button 
                          key={size} 
                          className={`size-btn ${currentSize === size ? 'active' : ''}`}
                          onClick={() => handleSizeSelect(product.id, size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="quantity-container">
                    <button className="qty-control" onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                    <input type="text" value={qty} readOnly className="qty-val" />
                    <button className="qty-control" onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="footer-montclair">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>MontClair</h3>
            <p>Sofisticação e exclusividade em alfaiataria e moda feminina.</p>
          </div>
          
          <div className="footer-links">
            <h4>AJUDA & SUPORTE</h4>
            <ul>
              <li>
                <span className="material-symbols-outlined footer-icon">straighten</span>
                <a href="#" className="footer-link">Guia de Tamanhos</a>
              </li>
              <li>
                <span className="material-symbols-outlined footer-icon">sync_alt</span>
                <a href="#" className="footer-link">Trocas e Devoluções</a>
              </li>
              <li>
                <span className="material-symbols-outlined footer-icon">local_shipping</span>
                <a href="#" className="footer-link">Prazos de Entrega</a>
              </li>
              <li>
                <span className="material-symbols-outlined footer-icon">mail</span>
                <a href="#" className="footer-link">Fale Conosco</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>CONECTE-SE</h4>
            <div className="social-icons-box">
              <a href="#" className="footer-link social-item">
                <span className="material-symbols-outlined footer-icon">photo_camera</span> Instagram
              </a>
              <a href="#" className="footer-link social-item">
                <span className="material-symbols-outlined footer-icon">bookmark</span> Pinterest
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 MontClair. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}