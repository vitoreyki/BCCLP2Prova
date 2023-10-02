import Compras from "../templates/Compras";
import Produto from "../templates/Produto";

export default function GradeCompras(props){

    if (props.listaProdutos){
        return(
            <div style={{
                width: '100%', 
                display: 'flex', 
                flexWrap: 'wrap',
                alignItems: 'center', 
                margin: '10px',
                padding: '10px',
                gap: '20px'}}>
                    {props.listaProdutos.map((produto, index) => (
                        <Compras key={index} produto={produto}/>
                    ))}
            </div>
        )
    }
    else{
        return (<h1>Carregando...</h1>)
    }
}