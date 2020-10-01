import { Request, Response } from 'express';
import { connection } from '../database/config'
import { ICompanies }  from '../infra/interfaces/ICompanies'


export class CompaniesController {
    async index(req: Request, res: Response) {
        const companies : Array<ICompanies> = await connection('ns.empresas').select('razaosocial').select('codigo').select('inicio_atividades');
    
        if(!companies) {
            return res.status(400).json({error: 'No Companies exist'});
        }
        
        return res.status(200).json({data: {companies}}); 
    }
}

export default new CompaniesController();


