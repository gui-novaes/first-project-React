import BotaoAtom from "../Atoms/Botao";

const Secao = (props) => {
const handleClick = (valor) => {
    console.log('Botão clicado na seção: ' + valor)
}

    return (
        <>
            <div>
                <BotaoAtom onAcaoDeClique={handleClick} number="777">Botão na seção</BotaoAtom>
            </div>
        </>
    );
    };
    
    export default Secao;