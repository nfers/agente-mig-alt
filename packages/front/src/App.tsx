import React from 'react'
import { GlobalStyle } from './styles/global'
import {List} from './components/List'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h2>Agente de Migração Alterdata</h2>

        <div className="table">
          <List />

        </div>
      </div>
    </>
  );
}

export default App;
