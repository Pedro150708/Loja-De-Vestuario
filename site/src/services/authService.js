import api from "./api";

export async function login(email, senha) {
  const response = await api.post("/Auth/login", {
    email,
    senha
  });

  localStorage.setItem(
    "token",
    response.data.token
  );

  localStorage.setItem(
    "usuario",
    JSON.stringify(response.data.usuario)
  );

  return response.data;
}

export async function register(
  nome,
  email,
  senha,
  telefone
) {
  const response = await api.post(
    "/Auth/register",
    {
      nome,
      email,
      senha,
      telefone
    }
  );

  return response.data;
}

export async function getProfile() {
  const response =
    await api.get("/Auth/me");

  return response.data;
}

export async function updateProfile(
  nome,
  telefone
) {
  const response =
    await api.put(
      "/Auth/update-profile",
      {
        nome,
        telefone
      }
    );

  return response.data;
}

export async function changePassword(
  senhaAtual,
  novaSenha
) {
  const response =
    await api.put(
      "/Auth/change-password",
      {
        senhaAtual,
        novaSenha
      }
    );

  return response.data;
}

export async function logoutApi() {
  await api.post("/Auth/logout");
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
}

export function getUsuario() {
  return JSON.parse(
    localStorage.getItem("usuario")
  );
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}