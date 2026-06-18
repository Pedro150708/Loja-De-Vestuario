import { useState, useEffect } from 'react';
import axios from 'axios';
import './Perfil.css';

// Configuração da URL base da sua API (ajuste a porta conforme o seu backend)
const API_URL = 'http://localhost:5000/api';

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Simulação/Obtenção do ID do usuário logado (geralmente salvo no localStorage no login)
    // Se não houver no localStorage, usamos o ID 1 como fallback para testes
    const loggedUserId = localStorage.getItem('userId') || '1';

    // 2. Busca os dados do usuário de forma dinâmica na API (/api/Usuarios/{id})
    axios.get(`${API_URL}/usuarios/${loggedUserId}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados do perfil:", err);
        setError("Não foi possível carregar os dados do perfil.");
        setLoading(false);
      });
  }, []);

  // Função para formatar a data de criação do usuário (criadoEm)
  const formatMemberSince = (dateString) => {
    if (!dateString) return "Membro";
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  };

  // Função de Logout (exemplo limpando o localStorage)
  const handleLogout = () => {
    localStorage.removeItem('userId');
    // Adicione aqui o redirecionamento ou alteração de estado global se necessário
    alert('Você saiu do sistema!');
    window.location.reload(); 
  };

  if (loading) {
    return (
      <div className="profile-body">
        <div className="profile-container" style={{ textAlign: 'center', padding: '40px' }}>
          <p>Carregando dados do perfil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-body">
        <div className="profile-container" style={{ textAlign: 'center', padding: '40px', color: 'red' }}>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Se a API não retornar nada e não houver erro direto
  if (!user) return null;

  // Cálculo de pontos fictício/vulnerável ao modelo ou baseado em pedidos (sua API não tem campo 'pontos' explícito)
  // Aqui estamos calculando 1 ponto a cada R$ 10,00 gastos nos pedidos reais retornados pela API
  const calculatedPoints = user.pedidos 
    ? Math.floor(user.pedidos.reduce((total, pedido) => total + (pedido.valorTotal || 0), 0) / 10)
    : 0;

  return (
    <div className="profile-body">
      <div className="profile-container">
        
        {/* Cabeçalho do Perfil mapeado dinamicamente */}
        <div className="profile-header">
          <div className="avatar-placeholder">
            {user.nome ? user.nome.charAt(0).toUpperCase() : 'U'}
          </div>
          <h2>Olá, {user.nome}</h2>
          <p className="subtitle">Membro Club desde {formatMemberSince(user.criadoEm)}</p>
        </div>

        {/* Painel de Benefícios VIP */}
        <div className="vip-card">
          <div className="vip-info">
            <span>SEUS PONTOS</span>
            {/* Exibe os pontos calculados com base no histórico real de pedidos do usuário */}
            <h3>{calculatedPoints} PTS</h3>
          </div>
          <div className="coupon-box">
            <span>CUPOM ATIVO:</span>
            <strong className="coupon-code">PRESENCA10</strong>
          </div>
        </div>

        {/* Menu de Opções */}
        <div className="profile-menu">
          <button className="menu-item" onClick={() => alert(`Você possui ${user.pedidos?.length || 0} pedido(s) cadastrado(s).`)}>
            <span>Meus Pedidos ({user.pedidos?.length || 0})</span>
            <span className="arrow">→</span>
          </button>
          
          <button className="menu-item" onClick={() => alert(`E-mail cadastrado: ${user.email}\nTelefone: ${user.telefone || 'Não informado'}`)}>
            <span>Dados da Conta</span>
            <span className="arrow">→</span>
          </button>
          
          <button className="btn-logout" onClick={handleLogout}>LOGOUT / SAIR</button>
        </div>

      </div>
    </div>
  );
}