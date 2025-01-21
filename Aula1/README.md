# Aula 1 - Introdução ao Node/Typescript/Express

## Node.js

Nas palavras do próprio site oficial: Node.js é um ambiente de execução JavaScript de código aberto e multiplataforma. O Node.js executa o motor V8 JavaScript, o mesmo núcleo do Google Chrome. Isso permite que você execute JavaScript no lado do servidor. Um aplicativo Node.js roda em um único processo, sem criar uma nova thread para cada requisição. Isso permite que o Node.js gerencie milhares de conexões simultâneas com um único servidor, sem a sobrecarga de gerenciar a concorrência de threads, o que poderia ser uma fonte significativa de erros.

Existem vantagens e desvantagens em utilizar o Node.js (assim como toda tecnologia), mas o fato é que ele é uma ferramenta muito poderosa e que pode ser utilizada em diversas situações.

## NPM

O NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele é utilizado para instalar, atualizar e remover pacotes do Node.js. Um pacote é um conjunto de arquivos que contém código JavaScript e metadados que descrevem o pacote, como nome, versão, dependências, etc.

## Typescript

Typescript é um superconjunto de JavaScript que adiciona tipagem estática ao código. Isso significa que você pode definir tipos para variáveis, funções, etc. e o compilador do Typescript irá verificar se o código está correto. Isso pode ajudar a evitar erros comuns em JavaScript, como passar o tipo errado de argumento para uma função, por exemplo. Além disso, o Typescript também adiciona algumas funcionalidades que não existem em JavaScript, como interfaces e enums.

### Instalação

Para instalar o Node.js, basta acessar o site oficial e baixar o instalador para o seu sistema operacional. No site oficial do Node você pode escolher o SO e a forma de instalação (https://nodejs.org/en/download)

Para Windows a instalação mais simples é utilizar das das opções prebuilt, que são instaladores que já incluem o Node.js e o npm (Node Package Manager).

### Iniciando um projeto

Para iniciar um projeto Node.js, basta criar uma pasta e executar o comando `npm init` dentro dela. Isso irá criar um arquivo `package.json` que contém as informações do projeto, como nome, versão, dependências, etc.

Depois podemos instalar o Typescript com o comando `npm i -D typescript`. Isso irá instalar o Typescript como uma dependência de desenvolvimento.

Para iniciar as configurações do Typescript, podemos executar o comando `npx tsc --init`. Isso irá criar um arquivo `tsconfig.json`.

Para compilar o código Typescript para JavaScript, basta executar o comando `npx tsc`. Isso irá compilar todos os arquivos `.ts` da pasta atual para arquivos `.js`. O comando `npx` é utilizado para executar um pacote que não está instalado globalmente, como é o caso do Typescript nesse exemplo.

### Primeiro código com Typescript

Vamos criar um arquivo `index.ts` com o seguinte conteúdo:

```typescript
const helloWorld = 'Olá mundo!'
console.log(helloWorld)
```

Depois de compilar o código com o comando `npx tsc`, podemos executar o arquivo `index.js` com o comando `node index.js`. Isso irá exibir a mensagem `Olá mundo!` no console.

### Tipando funções e variáveis

Podemos adicionar tipos para variáveis e funções no Typescript. Por exemplo:

```typescript
function soma(a: number, b: number): number {
  return a + b
}

const resultado = soma(1, 2)
console.log(resultado)
```

Nesse exemplo, a função `soma` recebe dois argumentos do tipo `number` e retorna um valor do tipo `number`. Isso significa que se tentarmos chamar a função `soma` com argumentos de outro tipo, o compilador do Typescript irá gerar um erro.

### Interfaces

Interfaces são uma forma de definir um contrato para um objeto. Por exemplo:

```typescript
interface Pessoa {
  nome: string
  idade: number
}

function saudar(pessoa: Pessoa): string {
  return `Olá, ${pessoa.nome}!`
}

const pessoa: Pessoa = { nome: 'João', idade: 30 }
console.log(saudar(pessoa))
```

Nesse exemplo, a função `saudar` recebe um objeto do tipo `Pessoa` e retorna uma string. Se tentarmos chamar a função `saudar` com um objeto que não tenha as propriedades `nome` e `idade`, o compilador do Typescript irá gerar um erro.

### Enums

Enums são uma forma de definir um conjunto de valores que podem ser utilizados como constantes. Por exemplo:

```typescript
enum DiasDaSemana {
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
  Domingo
}

function diaUtil(dia: DiasDaSemana): boolean {
  return dia >= DiasDaSemana.Segunda && dia <= DiasDaSemana.Sexta
}

const hoje = DiasDaSemana.Quarta
console.log(diaUtil(hoje))
```

Nesse exemplo, o enum `DiasDaSemana` define os dias da semana como constantes. A função `diaUtil` recebe um argumento do tipo `DiasDaSemana` e retorna um valor booleano. Se tentarmos chamar a função `diaUtil` com um valor que não seja do tipo `DiasDaSemana`, o compilador do Typescript irá gerar um erro.

## Express

Express é um framework web para Node.js que facilita a criação de APIs e aplicações web. Ele fornece uma série de funcionalidades que simplificam o desenvolvimento de aplicações web, como roteamento, middlewares, etc.

### Instalação

Para instalar o Express, basta executar o comando `npm i express@next`. Isso irá instalar o Express como uma dependência do projeto. A versão `@next` é a versão mais recente do Express (v5).

Para garantir que os tipos sejam reconhecidos pelo Typescript, podemos instalar os pacotes `@types/express @types/node` com o comando `npm i -D @types/express @types/node`.

### Criando um servidor

Para criar um servidor com o Express, basta criar um arquivo `server.ts` (ou com o nome que preferir) com o seguinte conteúdo:

```typescript
import express, { Express, Request, Response } from "express" // Importa o módulo express e os tipos Express, Request e Response

const app: Express = express() // Cria uma instância do express
const port = 3000 // Define a porta do servidor

app.get('/', (req: Request, res: Response) => { // Define uma rota para a raiz do servidor
  res.send('Olá mundo!')
})

app.listen(port, () => { // Inicia o servidor na porta definida
  console.log(`Servidor rodando em http://localhost:${port}`)
})
```

Depois de criar o arquivo `server.ts`, basta compilar o código com o comando `npx tsc` e executar o arquivo `server.js` com o comando `node server.js`. Isso irá iniciar o servidor na porta 3000 e exibir a mensagem `Servidor rodando em http://localhost:3000` no console. Diferente dos exemplos anteriores neste caso a aplicação vai ficar executando até que seja interrompida, para isso basta pressionar `Ctrl + C`.

### Rotas

O Express permite definir rotas para diferentes URLs. Por exemplo:

```typescript
app.get('/hello', (req, res) => {
  res.send('Olá!')
})

app.get('/goodbye', (req, res) => {
  res.send('Adeus!')
})
```

Nesse exemplo, definimos duas rotas: `/hello` e `/goodbye`. Quando acessamos a URL `http://localhost:3000/hello`, o servidor responde com a mensagem `Olá!`. Quando acessamos a URL `http://localhost:3000/goodbye`, o servidor responde com a mensagem `Adeus!`.

Podemos receber parâmetros nas rotas, por exemplo:

```typescript
app.get('/hello/:name', (req, res) => {
  const name = req.params.name // Obtém o parâmetro da URL chamado 'name'
  res.send(`Olá, ${name}!`)
})
```

Nesse exemplo, definimos uma rota `/hello/:name` que recebe um parâmetro `name`. Quando acessamos a URL `http://localhost:3000/hello/João`, o servidor responde com a mensagem `Olá, João!`.

Podemos fazer o envio de dados com um JSON via POST para o servidor, por exemplo:

```typescript
app.use(express.json()) // Habilita o uso de JSON no corpo da requisição

app.post('/hello', (req, res) => {
  const name = req.body.name // Obtém o parâmetro 'name' do corpo da requisição
  res.send(`Olá, ${name}!`)
})
```

O Express é um framework não opinativo, o que significa que ele não impõe uma estrutura específica para a aplicação. Vamos discutir nas próximas aulas como organizar uma aplicação Express de forma eficiente e escalável.

## Praticando 🚀

Crie uma rota chamada `/tabuada/:numero` que receba um número como parâmetro e retorne a tabuada desse número. Por exemplo, ao acessar a URL `http://localhost:3000/tabuada/7`, o servidor deve responder com o seguinte texto:

```plaintext
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

## Desafio 🏆

Vamos construir uma API básica para gerenciar uma lista de compras, esses itens ficarão armazenados em um array apenas na memória. A API deve ter as seguintes rotas:

- `GET /compras`: Retorna a lista de compras
- `POST /compras`: Adiciona um item à lista de compras

O item a ser adicionado deve ser enviado no corpo da requisição como um JSON com a seguinte estrutura:

```json
{
  "nome": "Arroz",
  "quantidade": 2
}
```

O item deve ter um nome e uma quantidade. A API deve validar se o nome e a quantidade foram enviados corretamente e retornar um erro caso contrário.

## Referências 📚

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)