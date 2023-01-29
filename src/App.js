import HomePage from "./paginas/HomePage";
import { PageContainer } from "./paginas/PageContainer/PageConainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./paginas/LoginPage";
import { useState } from "react";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState({ nome: null });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route
            index
            element={
              <HomePage
                usuarioLogado={usuarioLogado}
                setUsuarioLogado={setUsuarioLogado}
              />
            }
          />          
        </Route>

        <Route
          path="/login"
          element={
            <LoginPage
              usuarioLogado={usuarioLogado}
              setUsuarioLogado={setUsuarioLogado}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
