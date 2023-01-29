import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Formulario from "componentes/Formulario";
import Lista from "componentes/Lista";
import { Button, Divider } from 'antd';

export const HomePage = ({ usuarioLogado, setUsuarioLogado }) => {
  const db = [
    { id: 1, nome: "João Inácio", cargo: "Analista de Sistemas" },
    { id: 2, nome: "Pedro Castilho", cargo: "Analista de Suporte" },
    { id: 3, nome: "Roberto Fernandes", cargo: "Analista de Testes" },
  ];

  const novoCadastroAtual = { id: "", nome: "" };

  //STATES
  const [lista, setLista] = useState(db);
  const [cadastroAtual, setCadastroAtual] = useState(novoCadastroAtual);
  const [editando, setEditando] = useState(false);
  const [incluindo, setIncluindo] = useState(false);

  //CRUD
  const onCadastroFeito = (registro) => {
    if (!editando) {
      setCadastroAtual(novoCadastroAtual);
      //inclui o novo registro
      setLista([...lista, registro]);
    } else {
      setEditando(false);
      setIncluindo(false);
      setCadastroAtual(novoCadastroAtual);
      //atualiza lista
      setLista(lista.map((item) => (item.id === registro.id ? registro : item)));
    }
  };

  const removerRegistro = (id) => {
    setEditando(false);
    setLista(lista.filter((item) => item.id !== id));
  };

  const editarRegistro = (registro) => {
    setEditando(true);
    setCadastroAtual(registro);
  };

  //check usuarioLogado
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
    <>
      <div className={styles.cabecalho}>
        Usuário: <span>{usuarioLogado.nome} </span>
        <Button type="primary" size="small" danger
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </Button>
      </div>
      <Divider style={{margin : "12px"}}/>
      <div className={styles.container}>
        <div className={styles.cadastro}>
          <Formulario
            cadastroAtual={cadastroAtual}
            setCadastroAtual={setCadastroAtual}
            onCadastroFeito={onCadastroFeito}
            setEditando={setEditando}
            editando={editando}
            incluindo={incluindo}
            setIncluindo={setIncluindo}
            lista={lista}
          />
         
        </div>
        <div className={styles.lista}>
          <Lista
            lista={lista}
            editarRegistro={editarRegistro}
            removerRegistro={removerRegistro}            
          />
        </div>
      </div>
    </>
  );
};
