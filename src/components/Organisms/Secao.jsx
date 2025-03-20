import BotaoAtom from "../Atoms/Botao";
import Span from "../Atoms/Span.tsx";
import Mouse from "../Molecules/Mouse.tsx";

const Secao = (props) => {
const handleClick = (valor) => {
    console.log('Botão clicado na seção: ' + valor)
}

    return (
        <>
            <div>
                <BotaoAtom onAcaoDeClique={handleClick} number="777">Botão na seção</BotaoAtom>
                <br />
                {/* está com HOC que quando clica transforma de span para input */}
                <Span>0</Span> 

                <Mouse render={(mouseState) => <Span>{mouseState.name}</Span>} />

                
            </div>
        </>
    );
    };
    
    export default Secao;