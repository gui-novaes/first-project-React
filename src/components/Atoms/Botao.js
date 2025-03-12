const BotaoAtom = (props) => {
    console.log('props', props);

    return (
    <>
        <button onClick={() => props.onAcaoDeClique(`Clicou no ${props.number}`)}>{props.children}</button>
    </>
);
};

export default BotaoAtom;  // disponibiliza essa constante para todos os arquivos do projeto