import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './RoupaFeminina.css';

// 1. DECLARAÇÃO DOS PRODUTOS (Criados aqui para corrigir o erro de variável indefinida)
// Substitua pelos seus dados reais ou mude para um "import" se estiverem em outro arquivo.
const INITIAL_PRODUCTS = [
  { id: 1, name: 'Vestido Midi Floral', category: 'vestidos', price: 159.90, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Calça Alfaiataria', category: 'calcas', price: 189.90, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Pijama de Cetim', category: 'pijamas', price: 120.00, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Camisa Linho', category: 'camisas', price: 145.00, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Casaco Sobretudo', category: 'casacos', price: 299.90, image: 'https://via.placeholder.com/150' }
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