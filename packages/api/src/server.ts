import { app } from './app/app'
import { routes } from './app/routes'

app.use(routes)

app.get('/', (req, res) => {
    res.send({ message: 'Bem vindo a API de migração Alterdata'})
})

app.listen(3030, () => {
    console.log('Api running in port 3030')
})