import style from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginPage = ({ usuarioLogado, setUsuarioLogado }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (usuarioLogado && usuarioLogado.nome) {
      navigate("/");
    }
  });

  const Login = () => {
    setUsuarioLogado({ id: 1, nome: "Pimentel" });
  };

  return (
    <div>
      <h3>Login page</h3>
      <button
        onClick={() => {
          Login();
        }}
      >
        {" "}
        Login
      </button>
    </div>
  );
};
