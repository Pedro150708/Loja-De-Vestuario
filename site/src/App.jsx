import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sacola from "./pages/Sacola";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import AlterarSenha from "./pages/AlterarSenha";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Páginas com Header/Footer */}
        <Route element={<Layout />}>
  <Route path="/" element={<Home />}
  />
  <Route path="/produtos" element={<Produtos />}
  />
  <Route path="/sacola" element={<Sacola />}
  />
  <Route path="/perfil" element={<Perfil />}
  />
  <Route path="/alterar-senha" element={<AlterarSenha />}
  />
</Route>

        {/* Página sem Layout */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;