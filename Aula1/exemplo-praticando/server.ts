import express, { Express, Request, Response } from "express" // Importa o módulo express e os tipos Express, Request e Response

const app: Express = express() // Cria uma instância do express
const port = 3000 // Define a porta do servidor

app.get('/', (req: Request, res: Response) => { // Define uma rota para a raiz do servidor
  res.send('Olá mundo!')
})

app.get('/tabuada/:numero', (req: Request, res: Response) => { // Define uma rota para a tabuada
  const numero: number = parseInt(req.params.numero) // Obtém o número da requisição
  let tabuada: string = '' // Inicializa a tabuada como uma string vazia

  for (let i = 1; i <= 10; i++) { // Laço de 1 a 10
    tabuada += `${numero} x ${i} = ${numero * i}<br>` // Adiciona a linha da tabuada
  }

  res.send(tabuada) // Envia a tabuada como resposta
})

app.listen(port, () => { // Inicia o servidor na porta definida
  console.log(`Servidor rodando em http://localhost:${port}`)
})