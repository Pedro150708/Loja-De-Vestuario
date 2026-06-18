import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";


export default function Header() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("theme");

    if (temaSalvo === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const novoTema = !darkMode;

    setDarkMode(novoTema);

    if (novoTema) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <header className="montclair-header">

        {/* Topo */}
        <div className="container-fluid py-3">
          <div className="row align-items-center">

            {/* Esquerda */}
            <div className="col-4 col-md-3">
              <div className="d-flex gap-3">
                <button
                  className="header-circle-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menuLateral"
                >
                  <i className="bi bi-list"></i>
                </button>

                <button
                  className="header-circle-btn"
                  onClick={toggleDarkMode}
                >
                  <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon"}`}></i>
                </button>
              </div>
            </div>

            {/* Logo */}
            <div className="col-4 col-md-6 text-center">
              <Link to="/" className="logo-link">
                <h1 className="logo-text">
                  MONTCLAIR
                </h1>
              </Link>
            </div>

            {/* Direita */}
            <div className="col-4 col-md-3">
              <div className="d-flex justify-content-end gap-3">

                <Link to="/favoritos" className="header-circle-btn">
                  <i className="bi bi-heart"></i>
                </Link>

                <Link to="/Perfil" className="header-circle-btn">
                  <i className="bi bi-person"></i>
                </Link>

                <Link
                to="/carrinho"
                className="header-circle-btn position-relative">
                  <i className="bi bi-bag"></i>
                  <span className="cart-badge">
                    0
                  </span>
                </Link>

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
      <div
  className="offcanvas offcanvas-start"
  tabIndex="-1"
  id="menuLateral"
>

  <div className="offcanvas-header">
    <h5 className="offcanvas-title">
      Menu
    </h5>

    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="offcanvas"
    ></button>
  </div>

  <div className="offcanvas-body">

    <ul className="navbar-mobile">
      <li><a href="">Início</a></li>
      <li><a href="Produtos">Produtos</a></li>
      <li><a href="Acessorios">Masculino</a></li>
      <li><a href="RoupaFeminina">Feminino</a></li>
      <li><a href="AlterarSenha">Contato</a></li>
    </ul>

  </div>

</div>
    </>
  );
}