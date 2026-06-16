import { useState } from 'react';
import './produtos.css'; // Certifique-se de que o CSS está na mesma pasta ou ajuste o caminho

export default function Produtos() {
  // Estado simples para controlar a abertura do menu dropdown
  const [menuAberto, setMenuAberto] = useState(false);
  // Estado para simular a contagem do carrinho
  const [contadorCarrinho, setContadorCarrinho] = useState(0);

  // Array de objetos contendo os dados de todos os seus 10 produtos
  const listaProdutos = [
    {
      id: 1,
      tag: "-14%",
      img: "fotos/roupafeminina1.jpg",
      titulo: "Conjunto Aurora de Alfaiataria Bege",
      descricao: "Blazer cropped estruturado + saia curta de alfaiataria, corte elegante com vibe moderna e sofisticada",
      preco: "R$ 429,00",
      precoAntigo: "R$ 499,00",
      parcelas: "4x sem juros",
      cores: ["beige", "wine active", "black"],
      tamanhos: ["PP", "P", "M", "G"]
    },
    {
      id: 2,
      tag: "-15%",
      img: "fotos/roupafeminina2.jpg",
      titulo: "Sobretudo Noite Clássica de Lã Batida",
      descricao: "Sobretudo preto alongado, quente, imponente e perfeito pra um look dramático elegante",
      preco: "R$ 849,00",
      precoAntigo: "R$ 999,00",
      parcelas: "6x sem juros",
      cores: ["black", "blue active", "white"],
      tamanhos: ["PP", "P", "M", "G"]
    },
    {
      id: 3,
      tag: null,
      img: "fotos/roupafeminina3.jpg",
      titulo: "Calça Cargo Barrel Urban Light Denim",
      descricao: "Jeans claro estilo barrel, cintura baixa e modelagem cargo com pegada street fashion",
      preco: "R$ 289,00",
      precoAntigo: "R$ 349,00",
      parcelas: "3x sem juros",
      cores: ["denim-light active", "denim-dark", "offwhite"],
      tamanhos: ["PP", "P", "M", "G"]
    },
    {
      id: 4,
      tag: null,
      img: "fotos/bolsamc.png",
      titulo: "Bolsa Élan Noir",
      descricao: "sofisticação noturna. Uma bolsa estruturada em preto fosco, com acabamento minimalista e logo em baixo relevo discreto. Elegante e atemporal",
      preco: "R$ 389,90",
      precoAntigo: null,
      parcelas: "2x sem juros",
      cores: [],
      tamanhos: []
    },
    {
      id: 5,
      tag: "-10%",
      img: "fotos/bolsamc2.jpg",
      titulo: "Bolsa Lumière Beige",
      descricao: "Uma peça leve e versátil em tom bege suave, com alça dourada delicada e design clean. Ideal para uso diário com elegância",
      preco: "R$ 296,90",
      precoAntigo: "329,90",
      parcelas: "2x sem juros",
      cores: [],
      tamanhos: []
    },
    {
      id: 6,
      tag: "-16%",
      img: "fotos/sapatofeminino1.jpg",
      titulo: "Ankle Boot MontClair Noir Block Heel",
      descricao: "Bota preta de cano curto com salto bloco alto e zíper lateral moderno",
      preco: "R$ 459,00",
      precoAntigo: "R$ 549,00",
      parcelas: "2x sem juros",
      cores: ["black active", "white", "terracotta"],
      tamanhos: ["20-25", "25-30", "30-35"]
    },
    {
      id: 7,
      tag: "-25%",
      img: "fotos/sapatofeminino2.jpg",
      titulo: "Louboutin Rouge Signature Stiletto",
      descricao: "Scarpin de luxo com icônica sola vermelha e salto altíssimo elegante",
      preco: "R$ 1.374,75",
      precoAntigo: "R$ 5.499,00",
      parcelas: "3x sem juros",
      cores: ["black active", "white", "gray"],
      tamanhos: ["20-15", "25-30", "30-35"]
    },
    {
      id: 8,
      tag: null,
      img: "fotos/sapatomasculino1.jpg",
      titulo: "Greggo Patent Black Elegance",
      descricao: "Sapato social em couro envernizado preto, extremamente refinado e formal",
      preco: "R$ 6.499,00",
      precoAntigo: null,
      parcelas: "6x sem juros",
      cores: ["black active"],
      tamanhos: ["20-25", "25-30", "30-35"]
    },
    {
      id: 9,
      tag: "-14%",
      img: "fotos/sapatomasculino2.jpg",
      titulo: "MontClair Titan Combat Boot",
      descricao: "Bota masculina preta com solado tratorado robusto e fechamento por cadarço",
      preco: "R$ 599,00",
      precoAntigo: "R$ 699,00",
      parcelas: "4x sem juros",
      cores: ["black active", "white", "gray"],
      tamanhos: ["20-25", "25-30", "30-35"]
    },
    {
      id: 10,
      tag: "-5%",
      img: "fotos/bolsamc6.jpg",
      titulo: "Bolsa Alba Mini",
      descricao: "Pequena e delicada, perfeita para o essencial. Um dos modelos mais procurados da coleção",
      preco: "R$ 265,90",
      precoAntigo: "R$ 279,90",
      parcelas: "6x sem juros",
      cores: [],
      tamanhos: []
    }
  ];

  // Função para simular a adição ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setContadorCarrinho(prev => prev + 1);
    console.log(`Produto adicionado: ${produto.titulo}`);
  };

  return (
    <div className="produtos-container">
      {/* HEADER */}
      <header>
        <div className="header-top">
          <div className="header-left">
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
          </div>

          <div className="logo" style={{ textAlign: 'center' }}>
            MONTCLAIR
          </div>
          
          <div className="header-right">
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
                {contadorCarrinho}
              </div>
            </div>
          </div>
        </div>

        <div className="header-search">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Pesquise..." />
          </div>
        </div>
      </header>

      {/* TÍTULO */}
      <section className="section-title">
        <div>
          <h2>Produtos</h2>
          <p>Mais produtos de nossa comunidade</p>
          <button>
            <a href="http://127.0.0.1:5501/pagina_inicial/index.html#">← Voltar a página inicial</a>
          </button>
        </div>
      </section>

      {/* PRODUTOS GRID */}
      <section className="products-grid">
        {listaProdutos.map((produto) => (
          <div className="product-card" key={produto.id}>
            
            {/* Renderiza a tag de desconto apenas se ela existir */}
            {produto.tag && <div className="tag">{produto.tag}</div>}

            <button className="fav-btn">
              <i className="fa-regular fa-heart"></i>
            </button>

            <img src={produto.img} alt={produto.titulo} />

            <div className="product-info">
              <h3>{produto.titulo}</h3>
              <p>{produto.descricao}</p>

              <div className="price-row">
                <h4>{produto.preco}</h4>
                {produto.precoAntigo && <span className="old-price">{produto.precoAntigo}</span>}
              </div>

              <p>{produto.parcelas}</p>

              {/* Renderiza as cores dinamicamente se houverem */}
              {produto.cores.length > 0 && (
                <div className="colors">
                  {produto.cores.map((cor, index) => (
                    <span key={index} className={`color ${cor}`}></span>
                  ))}
                </div>
              )}

              {/* Renderiza os tamanhos dinamicamente se houverem */}
              {produto.tamanhos.length > 0 && (
                <div className="sizes">
                  {produto.tamanhos.map((tamanho, index) => (
                    <button key={index}>{tamanho}</button>
                  ))}
                </div>
              )}

              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button 
                className="buy-btn" 
                onClick={() => adicionarAoCarrinho(produto)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}