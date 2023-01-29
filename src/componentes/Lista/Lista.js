import { Link } from "react-router-dom";
import { Button, Divider, Space, Table } from "antd";

export const Lista = ({ lista, editarRegistro, removerRegistro }) => {
  const colunas = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            <a
              onClick={() => {
                editarRegistro(record);
              }}
            >
              Editar
            </a>
            <Space>
              <a
                onClick={() => {
                  removerRegistro(record.id);
                }}
              >
                Remover
              </a>
            </Space>
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <h2>Lista</h2>
      <Table dataSource={lista} columns={colunas} />;
      {/* <ul>
        {lista &&
          lista.map((cadastro) => {
            return (
              <li key={cadastro.nome}>
                {cadastro.id} - {cadastro.nome} 
                <button
                  onClick={() => {
                    editarRegistro(cadastro);
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    removerRegistro(cadastro.id);
                  }}
                >
                  Remover
                </button>
              </li>
            );
          })}
      </ul> */}
    </>
  );
};
