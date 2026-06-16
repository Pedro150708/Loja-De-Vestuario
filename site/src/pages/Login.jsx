import { useState } from 'react';
import './Login.css';

export default function AuthScreen() {
  // Estado para controlar qual formulário está ativo: 'login' ou 'register'
  const [activeForm, setActiveForm] = useState('login');
  
  // Estado para controlar o tema: false = Normal (Light), true = Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Função para lidar com os envios dos formulários
  const handleSubmit = (event, type) => {
    event.preventDefault();
    if (type === 'login') {
      alert('Conectando à sua conta...');
    } else {
      alert('Conta criada com sucesso!');
      setActiveForm('login'); // Retorna para o login após cadastrar
    }
  };

  return (
    <div className={`auth-body ${isDarkMode ? 'dark-mode' : ''}`}>
      
      {/* Botão de Alternar Tema (Discreto e Elegante) */}
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

          {/* FORMULÁRIO DE LOGIN */}
          {activeForm === 'login' && (
            <div className="form-wrapper">
              <h2>Acesse sua conta</h2>
              <form onSubmit={(e) => handleSubmit(e, 'login')}>
                <div className="input-box">
                  <label htmlFor="email-login">E-mail</label>
                  <input type="email" id="email-login" placeholder="seu@email.com" required />
                </div>
                
                <div className="input-box">
                  <div className="label-row">
                    <label htmlFor="password-login">Senha</label>
                    <a href="#forgot" className="forgot-pass">Esqueceu?</a>
                  </div>
                  <input type="password" id="password-login" placeholder="Sua senha" required />
                </div>

                <button type="submit" className="btn-primary">ENTRAR</button>
              </form>
              <p className="switch-notice">
                Novo por aqui?{' '}
                <button type="button" className="link-btn" onClick={() => setActiveForm('register')}>
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
                  <input type="text" id="name-reg" placeholder="Seu nome" required />
                </div>

                <div className="input-box">
                  <label htmlFor="email-reg">E-mail</label>
                  <input type="email" id="email-reg" placeholder="seu@email.com" required />
                </div>
                
                <div className="input-box">
                  <label htmlFor="password-reg">Senha</label>
                  <input type="password" id="password-reg" placeholder="Mínimo 8 caracteres" required />
                </div>

                <button type="submit" className="btn-primary">CADASTRAR</button>
              </form>
              <p className="switch-notice">
                Já tem conta?{' '}
                <button type="button" className="link-btn" onClick={() => setActiveForm('login')}>
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