import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [pubkey,setpubkey]=useState('')
  useEffect(() => {
  const pubkey=window?.xnft?.solana?.publicKey?.toString();
  setpubkey(pubkey)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {pubkey}
        </a>
      </header>
    </div>
  );
}

export default App;
