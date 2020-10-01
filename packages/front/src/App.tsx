import React, { useEffect, useLayoutEffect, useState } from 'react';
import ICompanies from '@migradorweb/api/src/app/infra/interfaces/ICompanies'
import { api } from './services/api';
import GlobalStyle from './styles/global'

function App() {

  const [companies, setCompanies] = useState<ICompanies>([])

  useEffect(() => {
    const response = api.get('/companies')
    
    if (!response) {
      setCompanies(response)
      }
    else {
      console.error('Nada localizado')
    }
    
  }, [setCompanies])

  return (
    <>
    <<GlobalStyle whiteColor />
    <div className="App">
     <h2>Agente de Migração Alterdata</h2>
    </div>
    </>
  );
}

export default App;
