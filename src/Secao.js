import Botao from "./Botao";

const Secao = (props) => {
const handleClick = (valor) => {
    console.log('Botão clicado na seção: ' + valor)
}

    return (
        <>
            <div>
                <Botao onAcaoDeClique={handleClick} number="777">Botão na seção</Botao>
            </div>
        </>
    );
    };
    
    export default Secao;