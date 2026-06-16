import { useState } from 'react';
import './Perfil.css';

export default function Perfil() {
  // Dados simulados do cliente da sua loja de vestuário
  const [user] = useState({
    name: "Ana Silva",
    email: "ana.silva@email.com",
    memberSince: "Março de 2026",
    points: 150
  });

  return (
    <div className="profile-body">
      <div className="profile-container">
        
        {/* Cabeçalho do Perfil */}
        <div className="profile-header">
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
          <h2>Olá, {user.name}</h2>
          <p className="subtitle">Membro Club desde {user.memberSince}</p>
        </div>

        {/* Painel de Benefícios VIP */}
        <div className="vip-card">
          <div className="vip-info">
            <span>SEUS PONTOS</span>
            <h3>{user.points} PTS</h3>
          </div>
          <div className="coupon-box">
            <span>CUPOM ATIVO:</span>
            <strong className="coupon-code">PRESENCA10</strong>
          </div>
        </div>

        {/* Menu de Opções */}
        <div className="profile-menu">
          <button className="menu-item">
            <span>Meus Pedidos</span>
            <span className="arrow">→</span>
          </button>
          <button className="menu-item">
            <span>Endereços de Entrega</span>
            <span className="arrow">→</span>
          </button>
          <button className="menu-item">
            <span>Dados da Conta</span>
            <span className="arrow">→</span>
          </button>
          <button className="btn-logout">LOGOUT / SAIR</button>
        </div>

      </div>
    </div>
  );
}