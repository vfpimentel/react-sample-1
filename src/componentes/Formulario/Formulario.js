import { useParams } from "react-router-dom";
import styles from "./Formulario.module.css";

export const Formulario = () => {
  const param = useParams();

  return (
    <>
      <h1>Formulário</h1>
      <h3>ID: {param.id} </h3>
    </>
  );
};
