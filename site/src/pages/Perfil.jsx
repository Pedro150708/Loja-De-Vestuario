import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import "./Perfil.css";

export default function Perfil() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    carregarPerfil();

  }, []);

  async function carregarPerfil() {

    try {

      const response =
        await api.get("/Auth/me");

      setUser(response.data);

    } catch (err) {

      console.error(err);

      setError(
        "Faça login para acessar seu perfil."
      );

      navigate("/login");

    } finally {

      setLoading(false);

    }
  }

  function handleLogout() {

    localStorage.removeItem("token");

    localStorage.removeItem("usuario");

    navigate("/login");
  }

  if (loading) {

    return (

      <div className="profile-body">
        <div className="profile-container">

          <h3>
            Carregando perfil...
          </h3>

        </div>
      </div>

    );
  }

  if (error) {

    return (

      <div className="profile-body">
        <div className="profile-container">

          <h3>{error}</h3>

        </div>
      </div>

    );
  }

  return (

    <div className="profile-body">

      <div className="profile-container">

        <div className="profile-header">

          <div className="avatar-placeholder">

            {user.nome?.charAt(0)}

          </div>

          <h2>

            Olá, {user.nome}

          </h2>

          <p className="subtitle">

            Conta autenticada

          </p>

        </div>

        <div className="vip-card">

          <div className="vip-info">

            <span>E-mail</span>

            <h3>

              {user.email}

            </h3>

          </div>

        </div>

        <div className="profile-menu">

          <button
            className="menu-item"
            onClick={() =>
              alert(
                `Nome: ${user.nome}\nEmail: ${user.email}`
              )
            }
          >

            <span>
              Dados da Conta
            </span>

            <span className="arrow">
              →
            </span>

          </button>

          <button
            className="menu-item"
            onClick={() =>
              navigate(
                "/alterar-senha"
              )
            }
          >

            <span>
              Alterar Senha
            </span>

            <span className="arrow">
              →
            </span>

          </button>

          <button
            className="btn-logout"
            onClick={handleLogout}
          >

            LOGOUT / SAIR

          </button>

        </div>

      </div>

    </div>
  );
}