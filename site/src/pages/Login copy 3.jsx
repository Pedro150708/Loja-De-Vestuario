import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [activeForm, setActiveForm] = useState("login");

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event, type) => {

    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {

      // LOGIN
      if (type === "login") {

        const response = await api.post(
          "/Auth/login",
          {
            email: emailLogin,
            senha: passwordLogin
          }
        );

        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "usuario",
          JSON.stringify(response.data.usuario)
        );

        alert(
          `Bem-vindo, ${response.data.usuario.nome}!`
        );

        navigate("/perfil");
      }

      // CADASTRO
      else {

        await api.post(
          "/Auth/register",
          {
            nome: nameReg,
            email: emailReg,
            senha: passwordReg,
            telefone: phoneReg
          }
        );

        alert(
          "Conta criada com sucesso!"
        );

        setNameReg("");
        setEmailReg("");
        setPasswordReg("");
        setPhoneReg("");

        setActiveForm("login");
      }

    } catch (error) {

      console.error(error);

      if (
        error.response?.data
      ) {
        setErrorMessage(
          error.response.data
        );
      } else {
        setErrorMessage(
          "Erro ao conectar com o servidor."
        );
      }

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className={`auth-body ${isDarkMode ? "dark-mode" : ""}`}>

      <button
        className="theme-toggle-btn"
        onClick={() =>
          setIsDarkMode(!isDarkMode)
        }
      >
        {isDarkMode
          ? "MODO NORMAL"
          : "MODO DARK"}
      </button>

      <div className="main-container">

        <div className="auth-card">

          <div className="logo-container">
            <h1 className="store-logo">
              MONTCLAIR
            </h1>
          </div>

          {errorMessage && (
            <div className="error-banner">
              {errorMessage}
            </div>
          )}

          {/* LOGIN */}

          {activeForm === "login" && (

            <div className="form-wrapper">

              <h2>
                Acesse sua conta
              </h2>

              <form
                onSubmit={(e) =>
                  handleSubmit(
                    e,
                    "login"
                  )
                }
              >

                <div className="input-box">

                  <label>
                    E-mail
                  </label>

                  <input
                    type="email"
                    value={emailLogin}
                    onChange={(e) =>
                      setEmailLogin(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                <div className="input-box">

                  <label>
                    Senha
                  </label>

                  <input
                    type="password"
                    value={passwordLogin}
                    onChange={(e) =>
                      setPasswordLogin(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn-primary"
                >
                  {loading
                    ? "ENTRANDO..."
                    : "ENTRAR"}
                </button>

              </form>

              <p className="switch-notice">

                Novo por aqui?

                <button
                  type="button"
                  className="link-btn"
                  onClick={() =>
                    setActiveForm(
                      "register"
                    )
                  }
                >
                  Criar conta
                </button>

              </p>

            </div>
          )}

          {/* CADASTRO */}

          {activeForm === "register" && (

            <div className="form-wrapper">

              <h2>
                Criar conta
              </h2>

              <form
                onSubmit={(e) =>
                  handleSubmit(
                    e,
                    "register"
                  )
                }
              >

                <div className="input-box">

                  <label>
                    Nome
                  </label>

                  <input
                    type="text"
                    value={nameReg}
                    onChange={(e) =>
                      setNameReg(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                <div className="input-box">

                  <label>
                    E-mail
                  </label>

                  <input
                    type="email"
                    value={emailReg}
                    onChange={(e) =>
                      setEmailReg(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                <div className="input-box">

                  <label>
                    Telefone
                  </label>

                  <input
                    type="text"
                    value={phoneReg}
                    onChange={(e) =>
                      setPhoneReg(
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="input-box">

                  <label>
                    Senha
                  </label>

                  <input
                    type="password"
                    value={passwordReg}
                    onChange={(e) =>
                      setPasswordReg(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn-primary"
                >
                  {loading
                    ? "CADASTRANDO..."
                    : "CADASTRAR"}
                </button>

              </form>

              <p className="switch-notice">

                Já possui conta?

                <button
                  type="button"
                  className="link-btn"
                  onClick={() =>
                    setActiveForm(
                      "login"
                    )
                  }
                >
                  Fazer login
                </button>

              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}