import './Register.css';

export default function RegisterSuccess() {
  return (
    <div className="success-body">
      <div className="success-card">
        <div className="icon-wrap">✓</div>
        <h1>CONTA CRIADA!</h1>
        <h2>BEM-VINDO AO CLUBE</h2>
        <p className="success-desc">
          Seu cadastro foi realizado com sucesso. Agora você tem acesso exclusivo às nossas coleções de alta costura e alfaiataria premium.
        </p>
        
        <button className="btn-shop" onClick={() => window.location.href = '/'}>
          COMEÇAR A EXPLORAR
        </button>
      </div>
    </div>
  );
}