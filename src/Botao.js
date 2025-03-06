import { useState } from "react";

const Botao = () => {
    const [soma, setSoma] = useState(0);  // 'state' está em colchetes pq 
    const [frase, setFrase] = useState("Meu nome ");

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