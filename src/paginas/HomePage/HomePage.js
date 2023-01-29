import style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const HomePage = ({ usuarioLogado, setUsuarioLogado }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioLogado || !usuarioLogado.nome) {
      navigate("/login");
    }
  });

  const logOut = () => {
    setUsuarioLogado({});
    navigate("/login");
  };

  return (
    <div>
      <h3>Página principal</h3>
      <span>Usuário Logado: {usuarioLogado.nome} </span>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};
