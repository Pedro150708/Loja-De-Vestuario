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

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
}

export function getToken() {
    return localStorage.getItem("token");
}

export function getUsuario() {
    return JSON.parse(
        localStorage.getItem("usuario")
    );
}

export function isAuthenticated() {
    return !!localStorage.getItem("token");
}