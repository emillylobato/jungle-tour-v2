import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post("/auth/login", { email, password });
    console.log("Login OK:", response.data);
  } catch (err) {
    console.error("Erro no login:", err.response?.data || err.message);
  }
};

function LoginPage() {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, senha);

      // redireciona com base no tipo
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.tipo === "cliente") {
        navigate("/cliente");
      } else {
        navigate("/fornecedor");
      }
    } catch (err) {
      alert("Erro no login");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
