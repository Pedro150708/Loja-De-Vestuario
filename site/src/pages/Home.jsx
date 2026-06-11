import { useEffect, useState } from "react";

import api from "../services/api";

import HeroBanner from "../components/HeroBanner";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function carregarProdutos() {

      try {

        const response = await api.get("/Produtos");

        setProdutos(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    }

    carregarProdutos();

  }, []);

  return (
    <>
      <HeroBanner />

      <section className="container py-5">

        <h2 className="mb-4">
          Produtos em Destaque
        </h2>

        {loading ? (

          <p>Carregando...</p>

        ) : (

          <div className="row g-4">

            {produtos.map(produto => (

              <div
                key={produto.id}
                className="col-lg-3 col-md-6"
              >
                <ProductCard produto={produto} />
              </div>

            ))}

          </div>

        )}

      </section>
    </>
  );
}

export default Home;