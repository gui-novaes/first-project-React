// import { useState } from "react";
import BotaoAtom from "./Atoms/Botao";

const Botao = (props) => {
    console.log('props', props);
    // const [soma, setSoma] = useState(0);
    // const [frase, setFrase] = useState("Meu nome ");

    // useLog(soma);

    // console.log('soma', soma);
    // console.log('frase', frase);

    // const handle = () => {
    //     setSoma(soma+1);
    // }

    // const handleFrase = () => {
    //     setFrase(frase + 'é Gui');
    // };

    return (
    <>
        <BotaoAtom></BotaoAtom>
    </>
);
};

export default Botao;  // disponibiliza essa constante para todos os arquivos do projeto