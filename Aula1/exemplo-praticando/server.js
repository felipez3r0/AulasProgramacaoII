"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Importa o módulo express e os tipos Express, Request e Response
const app = (0, express_1.default)(); // Cria uma instância do express
const port = 3000; // Define a porta do servidor
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});
app.get('/tabuada/:numero', (req, res) => {
    const numero = parseInt(req.params.numero); // Obtém o número da requisição
    let tabuada = ''; // Inicializa a tabuada como uma string vazia
    for (let i = 1; i <= 10; i++) { // Laço de 1 a 10
        tabuada += `${numero} x ${i} = ${numero * i}<br>`; // Adiciona a linha da tabuada
    }
    res.send(tabuada); // Envia a tabuada como resposta
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
