import { useEffect, useState } from "react";
import "./HeroBanner.css";

const banners = [
  {
    imagem: "banner1.webp",
    titulo: "Coleção Exclusiva",
    subtitulo: "Elegância para todas as ocasiões",
  },
  {
    imagem: "banner2.webp",
    titulo: "Nova Coleção Feminina",
    subtitulo: "Peças exclusivas e sofisticadas",
  },
  {
    imagem: "banner3.webp",
    titulo: "Estilo Atemporal",
    subtitulo: "Moda que atravessa gerações",
  },
];

function HeroBanner() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="hero">

      {banners.map((banner, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === slide ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${banner.imagem})`,
          }}
        >
          <div className="hero-overlay">

            <div className="hero-content">

              <span className="hero-tag">
                NOVA COLEÇÃO
              </span>

              <h1>
                {banner.titulo}
              </h1>

              <p>
                {banner.subtitulo}
              </p>

              <button className="hero-btn">
                Comprar Agora
              </button>

            </div>

          </div>
        </div>
      ))}

      <div className="hero-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={
              slide === index
                ? "indicator active"
                : "indicator"
            }
            onClick={() => setSlide(index)}
          />
        ))}
      </div>

    </section>
  );
}

export default HeroBanner;