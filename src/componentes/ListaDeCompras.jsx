import { useEffect, useState } from "react"
import GradeProdutos from "./GradeProdutos";
import Cabecalho from "../templates/Cabecalho";
import GradeCompras from "./GradeCompras";

export default function ListaDeCompras(props) {

    const [produto, setProduto] = useState([])

    useEffect(() => {
        const tempProduto = [];
        for (let i = 0; i < localStorage.length; i++) {
          tempProduto.push(JSON.parse(localStorage.getItem("produto" + i)));
        }
        setProduto(tempProduto);
      }, []); 

    return (

        <>
            <GradeCompras listaProdutos={produto} />
        </>
    )
}