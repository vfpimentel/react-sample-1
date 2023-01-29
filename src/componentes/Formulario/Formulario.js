import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Formulario.module.css";
import { Button, Form, Input, Divider } from "antd";

export const Formulario = ({
  cadastroAtual,
  setCadastroAtual,
  onCadastroFeito,
  setEditando,
  editando,
  incluindo,
  setIncluindo,
  lista,
}) => {
  //todo:ajustar!!
  // const param = useParams();

  const novoCadastro = { id: "", nome: "", cargo: "" };
  const [cadastro, setCadastro] = useState(cadastroAtual);

  useEffect(() => {
    if (!cadastro || !cadastro.id || cadastro.id !== cadastroAtual.id) {
      setCadastro(cadastroAtual);
    }
  });

  const cancelarFn = (evento) => {
    evento.preventDefault();
    setEditando(false);
    setCadastro(novoCadastro);
    setCadastroAtual(novoCadastro);
  };

  const salvarFn = (evento) => {
    evento.preventDefault();
    onCadastroFeito(cadastro);
    //limpa os campos do form
    setCadastro(novoCadastro);
  };

  const updateCampoFn = (evento) => {
    const { name, value } = evento.target;
    setCadastro({ ...cadastro, [name]: value });
  };
  const [form] = Form.useForm();

  return (
    <>
      <Form
        className={styles.formulario}
        form={form}
        name="basic"
        size="small"
        onSubmit={salvarFn}
      >
        <h2>Cadastro</h2>
        <Form.Item label="Código">
          <Input
            name="id"
            readOnly={true}
            size="small"
            value={cadastro.id}
            className={styles.campos}
            onChange={updateCampoFn}
            style={{ width: "100px" }}
          />
        </Form.Item>
        <Form.Item label="Nome">
          <Input
            name="nome"
            required={true}
            size="small"
            className={styles.campos}
            readOnly={!incluindo && !editando}
            value={cadastro.nome}
            onChange={updateCampoFn}
          ></Input>
        </Form.Item>
        <Form.Item label="Cargo">
          <Input
            name="cargo"
            required={true}
            size="small"
            readOnly={!incluindo && !editando}
            className={styles.campos}
            value={cadastro.cargo}
            onChange={updateCampoFn}
          ></Input>
        </Form.Item>
        <Form.Item>
          <div className={styles.botoes}>
            <Button
              type="primary"
              htmlType="submit"
              size="small"
              onClick={() => {
                onCadastroFeito(cadastro);
              }}
            >
              Salvar
            </Button>
            <Button
              type="default"
              onClick={cancelarFn}
              size="small"
              style={{ marginLeft: "5px" }}
            >
              Cancelar
            </Button>
            <Button
              type="default"
              size="small"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                setEditando(false);
                setIncluindo(true);
                novoCadastro.id = lista.length + 1;
                setCadastroAtual(novoCadastro);
              }}
            >
              Novo Cadastro
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
