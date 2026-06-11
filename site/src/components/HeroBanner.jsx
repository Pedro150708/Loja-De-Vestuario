import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">

      <div className="hero-overlay">

        <h1>
          Elegância que transforma presença
        </h1>

        <p>
          Descubra a nova coleção Montclair.
        </p>

        <button className="btn btn-light btn-lg">
          Comprar Agora
        </button>

      </div>

    </section>
  );
}

export default HeroBanner;