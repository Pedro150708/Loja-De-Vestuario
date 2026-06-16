import React, { useState } from 'react';
import './Login.css'; // Importando o seu arquivo de estilização

export default function Login() {
  // Criando os "estados" para armazenar o que o usuário digita
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função que será executada quando o usuário clicar no botão de Entrar
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede a página de recarregar

    // Aqui entra a lógica de autenticação (integração com banco de dados/API)
    console.log('Tentativa de login com:', { email, password });
    alert(`Login iniciado para o e-mail: ${email}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Acessar Conta</h2>

        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Entrar</button>

        <div className="login-footer">
          <p>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
}