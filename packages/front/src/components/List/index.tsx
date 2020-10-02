import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Table } from './styles'

interface Companies {
    id: string;
    razaosocial: string;
    codigo: string;
    inicioatividades: string;
}


const List: React.FC = () => {

    const [companies, setCompanies] = useState<Companies[]>([]);

    useEffect(() => {
        api.get<Companies[]>('/companies')
            .then((response) => {
                const result = response.data

                if (!result) {
                    alert('Nenhuma Informação Localizada')
                }

                setCompanies(result);
            })
    }, []);

    return (
        <div>
            <h3>Empresas</h3>
            <Table>
                <tr>
                    <th>ID</th>
                    <th>Razao Social</th>                    

                </tr>
                {
                    companies.map((empresas) => {
                        return <tr> 
                                <td>{empresas.codigo}</td> 
                                <td key={empresas.codigo}>{empresas.razaosocial}</td>                                
                            </tr>
                    })
                }

            </Table>



        </div>
    )
}

export { List }