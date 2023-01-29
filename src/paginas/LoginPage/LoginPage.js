import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Input } from "antd";


export const LoginPage = ({ usuarioLogado, setUsuarioLogado }) => {

  const [usuarioLocal, setUsuarioLocal] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    if (usuarioLogado && usuarioLogado.nome) {
      navigate("/");
    }
  });

  const Login = () => {    
    if (usuarioLocal && usuarioLocal.nome) {
      setUsuarioLogado(usuarioLocal);
    }
  };

  return (
    <div className={styles.container}>
      <h3 style={{display: 'inline-block'}}>Login page</h3>
      <Input onChange={(e)=>{setUsuarioLocal({nome : e.target.value})}} />
      <Button type="primary"      
        onClick={() => {
          Login();
        }}
      >
        Login
      </Button>
    </div>
  );
};
