import logo from './logo.svg';
import './App.css';
import React from 'react';
import Botao from './Botao';
import Calculator from './Calculator';
import Temperature from './Temperature';
import WordCounter from './WordCounter';

function App() {
  // const botao = <button></button>  // essa constante está recebendo uma expressão JSX, pq está retornando HTML

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Meu primeiro projeto
          </p>
          <Botao></Botao>
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
