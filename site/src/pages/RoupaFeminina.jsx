import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './RoupaFeminina.css';

// Base de dados dos produtos da MontClair
const INITIAL_PRODUCTS = [
  { id: 1, name: 'Vestido Longo Boho Chic', category: 'vestidos', price: 389.90, oldPrice: null, tag: 'HOT', installments: '4x sem juros', color: '#6E473B', colorName: 'Terracota', sizes: ['P', 'M', 'G'], img: 'Fotos/VestidoLongoBohoChic.png' },
  { id: 2, name: 'Vestido Tubinho Alfaiataria', category: 'vestidos', price: 297.00, oldPrice: 330.00, tag: '-10%', installments: '3x sem juros', color: '#1A1A1A', colorName: 'Preto', sizes: ['P', 'M'], img: 'Fotos/VestidoTubinhoAlfaiataria.png' },
  { id: 3, name: 'Macacão Pantalona Curve', category: 'plus-size', price: 419.00, oldPrice: null, tag: 'NOVO', installments: '5x sem juros', color: '#4A121A', colorName: 'Marsala', sizes: ['G1', 'G2'], img: 'Fotos/MacacaoPantalonaCurve.png' },
  { id: 4, name: 'Saia Midi Evasê Plus', category: 'plus-size', price: 195.50, oldPrice: 230.00, tag: '-15%', installments: '2x sem juros', color: '#B88E62', colorName: 'Camel', sizes: ['G1', 'G2'], img: 'Fotos/SaiaMidiEvasePlus.png' },
  { id: 5, name: 'Biquíni Hot Pants Retro', category: 'banho', price: 259.00, oldPrice: null, tag: 'TREND', installments: '3x sem juros', color: '#111111', colorName: 'Preto', sizes: ['P', 'M', 'G'], img: 'Fotos/BiquiniRetro.png' },
  { id: 6, name: 'Saída de Praia Chemise', category: 'banho', price: 176.00, oldPrice: 220.00, tag: '-20%', installments: '2x sem juros', color: '#F9F8F6', colorName: 'Off-White', border: '1px solid #D6CEC2', sizes: ['U'], img: 'Fotos/SaidaDePraiaChemisere.png' },
  { id: 7, name: 'Pijama Satin Elegance Piping', category: 'pijamas', price: 189.00, oldPrice: null, tag: 'SOFT', installments: '2x sem juros', color: '#E6DCD2', colorName: 'Champagne', sizes: ['P', 'M'], img: 'Fotos/PijamaDeCetim.png' },
  { id: 8, name: 'Pijama Americano Longo', category: 'pijamas', price: 269.10, oldPrice: 299.00, tag: '-10%', installments: '3x sem juros', color: '#53192A', colorName: 'Vinho', sizes: ['P', 'M', 'G'], img: 'Fotos/PijamaAmericanoLongo.png' },
  { id: 9, name: 'Calça Slouchy Jeans', category: 'calcas', price: 289.90, oldPrice: null, tag: 'HOT', installments: '3x sem juros', color: '#4C6A92', colorName: 'Azul Jeans', sizes: ['36', '38', '40'], img: 'Fotos/CalcaSlouchyJeans.png' },
  { id: 10, name: 'Calça Pantacourt Canelada', category: 'calcas', price: 144.50, oldPrice: 170.00, tag: '-15%', installments: '2x sem juros', color: '#1F1F1F', colorName: 'Preto Canelado', sizes: ['M', 'G'], img: 'Fotos/CalcaPantacountCanelada.png' },
  { id: 11, name: 'Camisa de Seda com Laço', category: 'camisas', price: 450.00, oldPrice: null, tag: 'PREMIUM', installments: '5x sem juros', color: '#EFECE6', colorName: 'Marfim', border: '1px solid #D1C9BC', sizes: ['P', 'M'], img: 'Fotos/CamisaDeSedaComLaco.png' },
  { id: 12, name: 'Regata de Cetim Premium', category: 'camisas', price: 132.00, oldPrice: 150.00, tag: '-12%', installments: '2x sem juros', color: '#5A1E2E', colorName: 'Vinho Acetinado', sizes: ['P', 'M', 'G'], img: 'Fotos/RegataCetimPremium.png' },
  { id: 13, name: 'Jaqueta Couro Pelica', category: 'casacos', price: 899.00, oldPrice: null, tag: 'TREND', installments: '6x sem juros', color: '#362821', colorName: 'Marbom Café', sizes: ['P', 'M'], img: 'Fotos/JaquetaMarrom.jpg' },
  { id: 14, name: 'Cardigan Longo de Tricô', category: 'casacos', price: 217.50, oldPrice: 290.00, tag: '-25%', installments: '3x sem juros', color: '#555555', colorName: 'Cinza Chumbo', sizes: ['M', 'G'], img: 'Fotos/CardiganLongoDeTrico.png' }
];

function RoupaFeminina() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [popFavorite, setPopFavorite] = useState(false);

  // Liga/desliga o modo escuro no body global
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Gerencia o clique de favoritar
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
      setPopFavorite(true);
      setTimeout(() => setPopFavorite(false), 200);
    }
  };

  const handleAddToCart = (quantity) => {
    setCartCount(prev => prev + quantity);
    alert('Produto adicionado ao carrinho!');
  };

  // Filtra por categoria E pela barra de busca simultaneamente
  const filteredProducts = INITIAL_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* O Header recebe os estados para controlar a busca, sacola e darkmode */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        cartCount={cartCount} 
        favoritesCount={favorites.length}
        popFavorite={popFavorite}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="main-container">
        {/* SIDEBAR DE FILTROS */}
        <aside className="sidebar-filters">
          <h2>FILTROS</h2>
          <div className="filter-group">
            <h3>CATEGORIA</h3>
            <div className="filter-dropdown active">
              <div className="dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>Vestuário</span>
                <span className="material-symbols-outlined arrow">
                  {isDropdownOpen ? 'expand_more' : 'expand_less'}
                </span>
              </div>
              <ul className={`submenu ${!isDropdownOpen ? 'closed' : ''}`}>
                {[
                  { id: 'all', label: 'Ver Todas' },
                  { id: 'vestidos', label: 'Vestidos' },
                  { id: 'plus-size', label: 'Plus Size' },
                  { id: 'banho', label: 'Roupas de Banho' },
                  { id: 'pijamas', label: 'Pijamas' },
                  { id: 'calcas', label: 'Calças' },
                  { id: 'camisas', label: 'Camisas' },
                  { id: 'casacos', label: 'Casacos' }
                ].map((cat) => (
                  <li 
                    key={cat.id}
                    className={`filter-option ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
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
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              isFavorited={favorites.includes(product.id)}
              onToggleFavorite={() => toggleFavorite(product.id)}
              onAddToCart={handleAddToCart}
            />
          ))}
          {filteredProducts.length === 0 && (
            <p className="no-products-msg">
              Nenhum produto encontrado para a sua busca.
            </p>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default RoupaFeminina;