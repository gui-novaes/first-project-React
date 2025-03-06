import { useState } from "react";


function WordCounter() {
    // hooks
    const [words, setWords] = useState('');
    const [countCharacters, setCountCharacters] = useState(0);
    const [countWords, setCountWords] = useState(0);

    // deixa todos os hooks vazios quando clica em 'Limpar'
    const clearTextArea = () => {
        setWords('');
        setCountCharacters('');
        setCountWords('');
    };

    return (
        <>
            <h1>Word Counter</h1>
            <div className="content">
                <label>
                    Write something here:
                    <br></br>
                    {/* Definindo textarea como tudo q o usuario digitar */}
                    <textarea value={words} onChange={e => setWords(String(e.target.value), 
                    
                    // contador de caracteres inclusive espaços
                    setCountCharacters(Number(e.target.value.length),
                
                    // contador de caracteres excluindo espaços
                    setCountWords(Number(e.target.value.replaceAll(" ","").length))))} //replaceAll remove todos os espaços do textarea
                    />
                    
                    {/* botao de limpar todo o conteúdo */}
                    <button onClick={clearTextArea}>Limpar</button>
                </label>

                {/* mostrando os contadores */}
                <div className="counters">
                    <span>Count Characters (counting spaces): {countCharacters}</span>
                    <br></br>
                    <span>Count Words (not counting spaces): {countWords}</span>
                </div>
            </div>
        </>
    )
}

export default WordCounter;