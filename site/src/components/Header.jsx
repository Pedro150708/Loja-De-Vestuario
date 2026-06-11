import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="montclair-header">

        {/* Topo */}
        <div className="container-fluid py-4">
          <div className="row align-items-center">

            {/* Esquerda */}
            <div className="col-3">
              <div className="d-flex gap-3">
                <button className="header-circle-btn">
                  <i className="bi bi-three-dots"></i>
                </button>

                <button className="header-circle-btn">
                  <i className="bi bi-moon"></i>
                </button>
              </div>
            </div>

            {/* Logo */}
            <div className="col-6 text-center">
              <h1 className="logo-text">
                MONTCLAIR
              </h1>
            </div>

            {/* Direita */}
            <div className="col-3">
              <div className="d-flex justify-content-end gap-3">

                <button className="header-circle-btn">
                  <i className="bi bi-heart"></i>
                </button>

                <button className="header-circle-btn">
                  <i className="bi bi-person"></i>
                </button>

                <button className="header-circle-btn position-relative">
                  <i className="bi bi-bag"></i>

                  <span className="cart-badge">
                    0
                  </span>
                </button>

              </div>
            </div>

          </div>

          {/* Pesquisa */}
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="search-wrapper">

                <i className="bi bi-search search-icon"></i>

                <input
                  type="text"
                  className="search-input"
                  placeholder="Pesquise..."
                />

              </div>
            </div>
          </div>

        </div>

        {/* Barra de benefícios */}
        <div className="benefits-bar">

          <div className="benefit-item">
            <i className="bi bi-truck"></i>
            <span>Frete grátis acima de R$ 299</span>
          </div>

          <div className="benefit-item">
            <i className="bi bi-credit-card"></i>
            <span>Até 6x sem juros</span>
          </div>

          <div className="benefit-item">
            <i className="bi bi-star"></i>
            <span>10% OFF na primeira compra</span>
          </div>

          <div className="benefit-item">
            <i className="bi bi-arrow-repeat"></i>
            <span>Troca fácil</span>
          </div>

          <div className="benefit-item">
            <i className="bi bi-shield-check"></i>
            <span>Compra segura</span>
          </div>

        </div>

      </header>
    </>
  );
}