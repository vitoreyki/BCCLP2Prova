import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import BarraSuperior from "./barras/BarraSuperior";
import GradeProdutos from "./componentes/GradeProdutos";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";
import ListaDeCompras from "./componentes/ListaDeCompras";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
  }, []);

  const [produtos, setProdutos] = useState([]);
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element={<>
              <Cabecalho />
              <BarraSuperior />
              <GradeProdutos listaProdutos={produtos} produtoSelecionado />
            </>}
            path="/"
          />
          <Route element={
            <>
              <Cabecalho/>
              <ListaDeCompras />
            </>}
            path="/lista"
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
