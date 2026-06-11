import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-custom pt-5">

      <div className="container">

        <div className="row g-4">

          {/* Marca */}
          <div className="col-lg-4 col-md-6">

            <h3 className="fw-bold">Montclair</h3>

            <p className="text-light mt-3">
              Moda feminina e masculina com qualidade,
              elegância e conforto para todas as ocasiões.
            </p>

            <div className="social-icons mt-4">

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-tiktok"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>

          </div>

          {/* Institucional */}
          <div className="col-lg-2 col-md-6">

            <h5 className="footer-title">
              Institucional
            </h5>

            <a href="#" className="footer-link">
              Quem Somos
            </a>

            <a href="#" className="footer-link">
              Nossa História
            </a>

            <a href="#" className="footer-link">
              Trabalhe Conosco
            </a>

            <a href="#" className="footer-link">
              Blog
            </a>

          </div>

          {/* Atendimento */}
          <div className="col-lg-3 col-md-6">

            <h5 className="footer-title">
              Atendimento
            </h5>

            <a href="#" className="footer-link">
              Central de Ajuda
            </a>

            <a href="#" className="footer-link">
              Trocas e Devoluções
            </a>

            <a href="#" className="footer-link">
              Política de Privacidade
            </a>

            <a href="#" className="footer-link">
              Termos de Uso
            </a>

            <a href="#" className="footer-link">
              Rastrear Pedido
            </a>

          </div>

          {/* Contato */}
          <div className="col-lg-3 col-md-6">

            <h5 className="footer-title">
              Contato
            </h5>

            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              contato@montclair.com
            </p>

            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              (11) 99999-9999
            </p>

            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              São Paulo - SP
            </p>

          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="footer-bottom text-center pb-4">

          <p className="mb-1">
            © 2026 Montclair. Todos os direitos reservados.
          </p>

          <small className="text-light">
            Desenvolvido para proporcionar uma experiência de compra segura e moderna.
          </small>

        </div>

      </div>

    </footer>
  );
}

export default Footer;