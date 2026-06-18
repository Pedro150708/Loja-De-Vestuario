import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function AlterarSenha() {

  const navigate = useNavigate();

  const [senhaAtual, setSenhaAtual] =
    useState("");

  const [novaSenha, setNovaSenha] =
    useState("");

  const [confirmarSenha, setConfirmarSenha] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [mensagem, setMensagem] =
    useState("");

  const [erro, setErro] =
    useState("");

  async function alterarSenha(e) {

    e.preventDefault();

    setMensagem("");
    setErro("");

    if (novaSenha !== confirmarSenha) {

      setErro(
        "As senhas não coincidem."
      );

      return;
    }

    try {

      setLoading(true);

      const response =
        await api.put(
          "/Auth/change-password",
          {
            senhaAtual,
            novaSenha
          }
        );

      setMensagem(
        response.data.mensagem
      );

      setSenhaAtual("");
      setNovaSenha("");
      setConfirmarSenha("");

      setTimeout(() => {

        navigate("/perfil");

      }, 1500);

    } catch (error) {

      console.error(error);

      setErro(
        error.response?.data ||
        "Erro ao alterar senha."
      );

    } finally {

      setLoading(false);

    }
  }

  return (

    <div className="container py-5">

      <div
        className="card mx-auto p-4"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="mb-4">

          Alterar Senha

        </h2>

        {mensagem && (

          <div
            className="alert alert-success"
          >
            {mensagem}
          </div>

        )}

        {erro && (

          <div
            className="alert alert-danger"
          >
            {erro}
          </div>

        )}

        <form onSubmit={alterarSenha}>

          <div className="mb-3">

            <label className="form-label">

              Senha Atual

            </label>

            <input
              type="password"
              className="form-control"
              value={senhaAtual}
              onChange={(e) =>
                setSenhaAtual(
                  e.target.value
                )
              }
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">

              Nova Senha

            </label>

            <input
              type="password"
              className="form-control"
              value={novaSenha}
              onChange={(e) =>
                setNovaSenha(
                  e.target.value
                )
              }
              required
            />

          </div>

          <div className="mb-4">

            <label className="form-label">

              Confirmar Nova Senha

            </label>

            <input
              type="password"
              className="form-control"
              value={confirmarSenha}
              onChange={(e) =>
                setConfirmarSenha(
                  e.target.value
                )
              }
              required
            />

          </div>

          <button
            className="btn btn-dark w-100"
            disabled={loading}
          >

            {loading
              ? "Salvando..."
              : "Alterar Senha"}

          </button>

        </form>

      </div>

    </div>
  );
}