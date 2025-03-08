import { useState } from "react";
import useLog from "./hooks/useLog";

const Botao = () => {
    const [soma, setSoma] = useState(0);
    const [frase, setFrase] = useState("Meu nome ");

    useLog(soma);

    console.log('soma', soma);
    console.log('frase', frase);

    const handle = () => {
        setSoma(soma+1);
    }

    const handleFrase = () => {
        setFrase(frase + 'é Gui');
    };

    return (
    <>
        <button onClick={(handle)}>Soma</button>
        <br></br>
        <button onClick={(handleFrase)}>Muda Frase</button>
    </>
);
};

export default Botao;  // disponibiliza essa constante para todos os arquivos do projeto