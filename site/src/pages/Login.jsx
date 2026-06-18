import { useState } from 'react';
import axios from 'axios';
import './Login.css';

// Configuração da URL base da sua API
const API_URL = 'http://localhost:5000/api';

export default function AuthScreen() {
  // Estado para controlar qual formulário está ativo: 'login' ou 'register'
  const [activeForm, setActiveForm] = useState('login');
  
  // Estado para controlar o tema: false = Normal (Light), true = Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Estados para os campos do formulário de Login
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  // Estados para os campos do formulário de Cadastro
  const [nameReg, setNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [phoneReg, setPhoneReg] = useState(''); // Campo opcional adicionado para bater com o Schema da API

  // Estados para controle de loading e erro visual
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Função para lidar com os envios dos formulários
  const handleSubmit = async (event, type) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      if (type === 'login') {
        // 1. Busca todos os usuários cadastrados na API
        const response = await axios.get(`${API_URL}/Usuarios`);
        const usuarios = response.data;

        // 2. Procura por um usuário com o e-mail e a senha correspondentes
        const usuarioValido = usuarios.find(
          (u) => u.email === emailLogin && u.senha === passwordLogin
        );

        if (usuarioValido) {
          // 3. Salva o ID do usuário autenticado no localStorage (usado na página de Perfil)
          localStorage.setItem('userId', usuarioValido.id.toString());
          alert(`Bem-vindo de volta, ${usuarioValido.nome}!`);
          
          // Redireciona o usuário para a página de perfil ou atualiza o estado global da aplicação
          window.location.href = '/perfil'; 
        } else {
          setErrorMessage('E-mail ou senha incorretos.');
        }

      } else {
        // Fluxo de Cadastro: Monta o objeto conforme o esquema 'Usuario' da OpenAPI
        const novoUsuario = {
          nome: nameReg,
          email: emailReg,
          senha: passwordReg,
          telefone: phoneReg || null,
          criadoEm: new Date().toISOString(), // Formato date-time exigido
          pedidos: []
        };

        // Envia a requisição POST para registrar o usuário na API
        await axios.post(`${API_URL}/Usuarios`, novoUsuario);

        alert('Conta criada com sucesso!');
        
        // Limpa os campos de registro e muda para a tela de login
        setNameReg('');
        setEmailReg('');
        setPasswordReg('');
        setPhoneReg('');
        setActiveForm('login');
      }
    } catch (error) {
      console.error(`Erro ao processar ${type}:`, error);
      setErrorMessage('Ocorreu um erro na comunicação com o servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`auth-body ${isDarkMode ? 'dark-mode' : ''}`}>
      
      {/* Botão de Alternar Tema */}
      <button 
        className="theme-toggle-btn" 
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? 'MODO NORMAL' : 'MODO DARK'}
      </button>

      <div className="main-container">
        <div className="auth-card">
          
          {/* IDENTIDADE DA LOJA */}
          <div className="logo-container">
            <h1 className="store-logo">SUA LOJA</h1>
          </div>

          {/* Exibição de mensagens de erro coletadas da API */}
          {errorMessage && <div className="error-banner">{errorMessage}</div>}

          {/* FORMULÁRIO DE LOGIN */}
          {activeForm === 'login' && (
            <div className="form-wrapper">
              <h2>Acesse sua conta</h2>
              <form onSubmit={(e) => handleSubmit(e, 'login')}>
                <div className="input-box">
                  <label htmlFor="email-login">E-mail</label>
                  <input 
                    type="email" 
                    id="email-login" 
                    placeholder="seu@email.com" 
                    value={emailLogin}
                    onChange={(e) => setEmailLogin(e.target.value)}
                    required 
                    disabled={loading}
                  />
                </div>
                
                <div className="input-box">
                  <div className="label-row">
                    <label htmlFor="password-login">Senha</label>
                    <a href="#forgot" className="forgot-pass">Esqueceu?</a>
                  </div>
                  <input 
                    type="password" 
                    id="password-login" 
                    placeholder="Sua senha" 
                    value={passwordLogin}
                    onChange={(e) => setPasswordLogin(e.target.value)}
                    required 
                    disabled={loading}
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'CONECTANDO...' : 'ENTRAR'}
                </button>
              </form>
              <p className="switch-notice">
                Novo por aqui?{' '}
                <button type="button" className="link-btn" onClick={() => { setActiveForm('register'); setErrorMessage(''); }} disabled={loading}>
                  Crie uma conta
                </button>
              </p>
            </div>
          )}

          {/* FORMULÁRIO DE CADASTRO */}
          {activeForm === 'register' && (
            <div className="form-wrapper">
              <h2>Crie sua conta</h2>
              <form onSubmit={(e) => handleSubmit(e, 'register')}>
                <div className="input-box">
                  <label htmlFor="name-reg">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name-reg" 
                    placeholder="Seu nome" 
                    value={nameReg}
                    onChange={(e) => setNameReg(e.target.value)}
                    required 
                    disabled={loading}
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="email-reg">E-mail</label>
                  <input 
                    type="email" 
                    id="email-reg" 
                    placeholder="seu@email.com" 
                    value={emailReg}
                    onChange={(e) => setEmailReg(e.target.value)}
                    required 
                    disabled={loading}
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="phone-reg">Telefone (Opcional)</label>
                  <input 
                    type="tel" 
                    id="phone-reg" 
                    placeholder="(00) 00000-0000" 
                    value={phoneReg}
                    onChange={(e) => setPhoneReg(e.target.value)}
                    disabled={loading}
                  />
                </div>
                
                <div className="input-box">
                  <label htmlFor="password-reg">Senha</label>
                  <input 
                    type="password" 
                    id="password-reg" 
                    placeholder="Mínimo 8 caracteres" 
                    value={passwordReg}
                    onChange={(e) => setPasswordReg(e.target.value)}
                    required 
                    disabled={loading}
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'CADASTRANDO...' : 'CADASTRAR'}
                </button>
              </form>
              <p className="switch-notice">
                Já tem conta?{' '}
                <button type="button" className="link-btn" onClick={() => { setActiveForm('login'); setErrorMessage(''); }} disabled={loading}>
                  Faça login
                </button>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}