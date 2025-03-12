import logo from './logo.svg';
import './App.css';
import React from 'react';
import Botao from '../src/components/Atoms/Botao';
import Calculator from '../src/components/Templates/Calculator';
import Temperature from '../src/components/Templates/Temperature';
import WordCounter from '../src/components/Templates/WordCounter';
import Secao from './components/Organisms/Secao';
// import useLog from './hooks/useLog';

function App() {
  // const botao = <button></button>  // essa constante está recebendo uma expressão JSX, pq está retornando HTML

  // const [nome, setNome] = useState('Kim');
  // const assinado = useLog(nome);
  // console.log('app', assinado);

  const handleClick = (valor) => {
    alert(valor);
  }

  const handleClickTipoDois = (valor) => {
    alert(valor + ' ... Att, Gui');
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Secao></Secao>

          {/* <button onClick={() => setNome("Gui Novaes")}>Sobrenome</button> */}

          <p>
            Meu primeiro projeto
          </p>

          <Botao onAcaoDeClique={handleClick} number="1">Botão 1</Botao>
          <Botao onAcaoDeClique={handleClickTipoDois} number="2">Botão 2</Botao>
          <Botao onAcaoDeClique={handleClick} number="3">Botão 3</Botao>
          <Botao onAcaoDeClique={handleClickTipoDois} number="4">Botão 4</Botao>
          <Botao onAcaoDeClique={handleClick} number="5">Botão 5</Botao>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <br></br>
      <div><Calculator></Calculator></div>
      <div> <Temperature></Temperature> </div>
      <div> <WordCounter></WordCounter> </div>
    </>
  );
}

export default App;
