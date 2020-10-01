import { Router } from "express";
import cors from 'cors'
import Companies from '../controllers/companies.controller'
import { options } from "../infra/corsConfig";

const routes = Router()

routes.use(cors(options))
routes.options('*', cors(options));

const companiesController = Companies

routes.get('/companies', companiesController.index)


export { routes }