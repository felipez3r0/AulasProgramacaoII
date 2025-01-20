import express, { Express, Request, Response } from "express" // Importa o módulo express e os tipos Express, Request e Response

const app: Express = express() // Cria uma instância do express
const port = 3000 // Define a porta do servidor

app.get('/', (req: Request, res: Response) => { // Define uma rota para a raiz do servidor
  res.send('Olá mundo!')
})

app.listen(port, () => { // Inicia o servidor na porta definida
  console.log(`Servidor rodando em http://localhost:${port}`)
})