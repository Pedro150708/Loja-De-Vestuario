import { useState } from 'react';
import './RoupaMasculina.css'; // Ajuste o caminho do seu arquivo CSS conforme necessário

export default function Loja() {
  // Estado para a categoria selecionada nos filtros
  const [categoriaAtual, setCategoriaAtual] = useState('all');
  // Estado para controlar a abertura do dropdown de filtros na sidebar
  const [filtroAberto, setFiltroAberto] = useState(true);

  // Array de dados contendo todos os produtos do seu HTML original
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      category: "camisas",
      tag: "HOT",
      img: "fotos/Rm1.png",
      nome: "Camiseta Essential Premium",
      preco: 389.90,
      precoAntigo: null,
      parcelas: "4x sem juros",
      cor: "#6E473B",
      corNome: "Terracota",
      tamanhos: ["P", "M", "G"],
      quantidade: 1
    },
    {
      id: 2,
      category: "camisas",
      tag: "-10%",
      img: "fotos/Rm2.png",
      nome: "Camiseta Urban Street",
      preco: 297.00,
      precoAntigo: 330.00,
      parcelas: "3x sem juros",
      cor: "#1A1A1A",
      corNome: "Preto",
      tamanhos: ["P", "M"],
      quantidade: 1
    },
    {
      id: 3,
      category: "camisas",
      tag: "NOVO",
      img: "fotos/Rm3.png",
      nome: "Camisa Social Executive",
      preco: 419.00,
      precoAntigo: null,
      parcelas: "5x sem juros",
      cor: "#4A121A",
      corNome: "Marsala",
      tamanhos: ["P", "M", "G"],
      quantidade: 1
    },
    {
      id: 4,
      category: "camisas",
      tag: "-15%",
      img: "fotos/Rm4.png",
      nome: "Camisa Linho Premium",
      preco: 195.50,
      precoAntigo: 230.00,
      parcelas: "2x sem juros",
      cor: "#B88E62",
      corNome: "Camel",
      tamanhos: ["P", "M", "G"],
      quantidade: 1
    },
    {
      id: 5,
      category: "calcas",
      tag: "TREND",
      img: "fotos/Rm5.png",
      nome: "Calça Jeans Classic Fit",
      preco: 259.00,
      precoAntigo: null,
      parcelas: "3x sem juros",
      cor: "#111111",
      corNome: "Preto",
      tamanhos: ["P", "M", "G"],
      quantidade: 1
    },
    {
      id: 6,
      category: "calcas",
      tag: "-20%",
      img: "fotos/Rm6.png",
      nome: "Calça Slim Black",
      preco: 176.00,
      precoAntigo: 220.00,
      parcelas: "2x sem juros",
      cor: "#F9F8F6",
      corNome: "Off-White",
      tamanhos: ["U"],
      quantidade: 1
    },
    {
      id: 7,
      category: "calcas",
      tag: "SOFT",
      img: "fotos/Rm7.png",
      nome: "Calça Cargo Explorer",
      preco: 189.00,
      precoAntigo: null,
      parcelas: "2x sem juros",
      cor: "#E6DCD2",
      corNome: "Champagne",
      tamanhos: ["P", "M"],
      quantidade: 1
    },
    {
      id: 8,
      category: "calcas",
      tag: "-10%",
      img: "fotos/Rm8.png",
      nome: "Calça de Alfaiataria Prestige",
      preco: 269.10,
      precoAntigo: 299.00,
      parcelas: "3x sem juros",
      cor: "#53192A",
      corNome: "Vinho",
      tamanhos: ["P", "M", "G"],
      quantidade: 1
    },
    {
      id: 9,
      category: "casacos",
      tag: "HOT",
      img: "fotos/Rm9.png",
      nome: "Blazer Modern Tailor",
      preco: 289.90,
      precoAntigo: null,
      parcelas: "3x sem juros",
      cor: "#4C6A92",
      corNome: "Azul Jeans",
      tamanhos: ["36", "38", "40"],
      quantidade: 1
    },
    {
      id: 10,
      category: "casacos",
      tag: "-15%",
      img: "fotos/Rm10.png",
      nome: "Terno Executive Collection",
      preco: 144.50,
      precoAntigo: 170.00,
      parcelas: "2x sem juros",
      cor: "#1F1F1F",
      corNome: "Preto Canelado",
      tamanhos: ["M", "G"],
      quantidade: 1
    },
    {
      id: 11,
      category: "casacos",
      tag: "PREMIUM",
      img: "fotos/Rm11.png",
      nome: "Jaqueta Bomber Urban",
      preco: 450.00,
      precoAntigo: null,
      parcelas: "5x sem juros",
      cor: "#EFECE6",
      corNome: "Marfim",
      tamanhos: ["P", "M"],
      quantidade: 1
    },
    {
      id: 12,
      category: "casacos",
      tag: "-12%",
      img: "fotos/Rm12.png",
      nome: "Jaqueta de Couro Heritage",
      preco: 132.00,
      precoAntigo: 150.00,
      parcelas: "2x sem juros",
      cor: "#5A1E2E",
      corNome: "Vinho Acetinado",
      tamanhos: ["P", "M", "G"],
      quantidade: 1
    },
    {
      id: 13,
      category: "casacos",
      tag: "TREND",
      img: "fotos/Rm13.png",
      nome: "Jaqueta Puffer Winter",
      preco: 899.00,
      precoAntigo: null,
      parcelas: "6x sem juros",
      cor: "#362821",
      corNome: "Marrom Café",
      tamanhos: ["P", "M"],
      quantidade: 1
    },
    {
      id: 14,
      category: "pijamas",
      tag: "-25%",
      img: "fotos/Rm19.png",
      nome: "Pijama Comfort Night",
      preco: 217.50,
      precoAntigo: 290.00,
      parcelas: "3x sem juros",
      cor: "#555555",
      corNome: "Cinza Chumbo",
      tamanhos: ["M", "G"],
      quantidade: 1
    }
  ]);

  // Função para controlar o contador de quantidade (+ / -) de cada card individualmente
  const alterarQuantidade = (id, mudança) => {
    setProdutos(produtos.map(p => {
      if (p.id === id) {
        const novaQtd = p.quantidade + mudança;
        return { ...p, quantidade: novaQtd < 1 ? 1 : novaQtd };
      }
      return p;
    }));
  };

  // Filtragem dos produtos que vão de fato aparecer na tela
  const produtosFiltrados = categoriaAtual === 'all' 
    ? produtos 
    : produtos.filter(p => p.category === categoriaAtual);

  return (
    <div className="loja-container">
      {/* HEADER */}
      <header className="header-montclair">
        <div className="header-top">
          <div className="header-left">
            <button className="icon-btn">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
            <button className="icon-btn" id="theme-toggle">
              <span className="material-symbols-outlined">dark_mode</span>
            </button>
          </div>
          <div className="logo">MontClair</div>
          <div className="header-right">
            <button className="icon-btn-favorite">
              <span className="material-symbols-outlined">favorite</span>
              <span className="favorite-badge">0</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="icon-btn-cart">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="cart-badge">0</span>
            </button>
          </div>
        </div>
        <div className="search-bar-container">
          <span className="material-symbols-outlined search-icon">search</span>
          <input type="text" placeholder="Buscar na loja..." className="search-input" />
        </div>
      </header>

      <div className="header-spacer"></div>

      {/* CONTAINER PRINCIPAL */}
      <div className="main-container">
        
        {/* SIDEBAR DE FILTROS */}
        <aside className="sidebar-filters">
          <h2>FILTROS</h2>
          <div className="filter-group">
            <h3>CATEGORIA</h3>
            <div className={`filter-dropdown ${filtroAberto ? 'active' : ''}`}>
              <div 
                className="dropdown-header" 
                id="btn-dropdown-filter"
                onClick={() => setFiltroAberto(!filtroAberto)}
                style={{ cursor: 'pointer' }}
              >
                <span>Vestuário</span>
                <span className="material-symbols-outlined arrow">expand_more</span>
              </div>
              
              {filtroAberto && (
                <ul className="submenu" id="filter-submenu">
                  <li 
                    className={`filter-option ${categoriaAtual === 'all' ? 'active' : ''}`} 
                    onClick={() => setCategoriaAtual('all')}
                  >
                    Ver Todas
                  </li>
                  <li 
                    className={`filter-option ${categoriaAtual === 'pijamas' ? 'active' : ''}`} 
                    onClick={() => setCategoriaAtual('pijamas')}
                  >
                    Pijamas
                  </li>
                  <li 
                    className={`filter-option ${categoriaAtual === 'calcas' ? 'active' : ''}`} 
                    onClick={() => setCategoriaAtual('calcas')}
                  >
                    Calças
                  </li>
                  <li 
                    className={`filter-option ${categoriaAtual === 'camisas' ? 'active' : ''}`} 
                    onClick={() => setCategoriaAtual('camisas')}
                  >
                    Camisas
                  </li>
                  <li 
                    className={`filter-option ${categoriaAtual === 'casacos' ? 'active' : ''}`} 
                    onClick={() => setCategoriaAtual('casacos')}
                  >
                    Casacos
                  </li>
                </ul>
              )}
            </div>
          </div>
        </aside>

        {/* GRID DE PRODUTOS */}
        <main className="products-grid">
          {produtosFiltrados.map((produto) => (
            <div className="product-card" data-category={produto.category} key={produto.id}>
              <div className="card-image-area">
                {produto.tag && <span className="tag-hot">{produto.tag}</span>}
                <button className="favorite-card-btn">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <img src={produto.img} alt={produto.nome} />
              </div>
              
              <div className="card-info">
                <h4 className="product-name">{produto.nome}</h4>
                <div className="price-box">
                  <div className="price-row">
                    <span className="price">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
                    {produto.precoAntigo && (
                      <span className="price-old">R$ {produto.precoAntigo.toFixed(2).replace('.', ',')}</span>
                    )}
                  </div>
                  <span className="installments">{produto.parcelas}</span>
                </div>
                
                <div className="color-selectors">
                  <span 
                    className="circle-color active" 
                    style={{ backgroundColor: produto.cor }} 
                    title={produto.corNome}
                  ></span>
                </div>
                
                <div className="size-selectors">
                  {produto.tamanhos.map((tamanho, idx) => (
                    <button className="size-btn" key={idx}>{tamanho}</button>
                  ))}
                </div>
                
                <div className="quantity-container">
                  <button className="qty-control" onClick={() => alterarQuantidade(produto.id, -1)}>-</button>
                  <input type="text" value={produto.quantidade} readOnly className="qty-val" />
                  <button className="qty-control" onClick={() => alterarQuantidade(produto.id, 1)}>+</button>
                </div>
                
                <button className="add-to-cart-btn">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
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