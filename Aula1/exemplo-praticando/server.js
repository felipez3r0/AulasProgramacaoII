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
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
