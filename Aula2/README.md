# Aula 2 - Testes automatizados e TDD

## Testes automatizados

Testes automatizados são testes que são executados automaticamente, sem a necessidade de intervenção humana. Eles são importantes para garantir que o código está funcionando corretamente e que mudanças feitas no código não quebraram funcionalidades existentes.

No Typescript, podemos usar a biblioteca `jest` para escrever testes automatizados. Jest é uma biblioteca de testes desenvolvida pelo Facebook e é muito popular. Para usá-la, basta instalar o pacote `jest` e criar arquivos de teste com a extensão `.test.ts`.

Os testes podem ser divididos em três tipos principais (pirâmide de testes):

3. Testes de ponta a ponta (end-to-end): testam o sistema como um todo, simulando a interação do usuário com o sistema.
2. Testes de integração: testam a integração entre duas ou mais unidades de código, verificando se elas funcionam corretamente juntas.
1. Testes unitários: testam uma unidade de código (função, classe, módulo) de forma isolada, sem depender de outras unidades de código.

Os testes unitários são os mais comuns e são os mais fáceis de escrever e manter. Quanto mais subimos na pirâmide, mais complexos e difíceis de escrever e manter os testes se tornam.

### Escrevendo um teste de exemplo

Vamos iniciar um novo projeto, para isso crie um diretório e execute o comando `npm init -y` para criar um arquivo `package.json`. 

Precisamos instalar o Typescript, para isso execute o comando `npm install -D typescript` e em seguida execute o comando `npx tsc --init` para criar um arquivo `tsconfig.json`.

Em seguida, crie um arquivo `index.ts` com o seguinte conteúdo:

```typescript
function soma(a: number, b: number): number {
  return a + b;
}

export default soma // Exporta a função sum
```

### Instalando o Jest

Para instalar o Jest e outras dependências necessárias, execute o seguinte comando:

```bash
npm install -D jest ts-jest @jest/globals
```

Para criar a configuração do Jest com o ts-jest, execute o seguinte comando:

```bash
npx ts-jest config:init
```

Isso vai criar um arquivo `jest.config.js` com as configurações necessárias para o Jest funcionar com o Typescript.

### Escrevendo um teste

Agora, crie um arquivo `index.test.ts` com o seguinte conteúdo:

```typescript
import soma from './index'
import { expect, test } from '@jest/globals'

test('soma 1 + 2 é igual a 3', () => { // Descrição do teste
  expect(soma(1, 2)).toBe(3) // Verifica se a função soma(1, 2) é igual a 3
})
```

Para executar os testes, execute o seguinte comando `npx jest` ou então adicione um script no `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## TDD (Test Driven Development)

TDD é uma prática de desenvolvimento de software que consiste em escrever os testes antes de escrever o código. O ciclo de desenvolvimento do TDD é composto por três passos:

1. Escrever um teste que falhe
2. Escrever o código que faça o teste passar
3. Refatorar o código (melhorar a implementação eliminando duplicações, melhorando a legibilidade, etc.)

O TDD é uma prática muito útil para garantir que o código está funcionando corretamente e que mudanças feitas no código não quebraram funcionalidades existentes. Além disso, o TDD incentiva a escrita de código mais modular e testável.

### Exemplo de TDD

Vamos criar uma função `subtrai` que subtrai dois números. Vamos seguir o ciclo de desenvolvimento do TDD:

1. Escrever um teste que falhe

Crie um arquivo `subtrai.test.ts` com o seguinte conteúdo:

```typescript
import subtrai from './subtrai'
import { expect, test } from '@jest/globals'

test('subtrai 2 - 1 é igual a 1', () => {
  expect(subtrai(2, 1)).toBe(1)
})
```

2. Escrever o código que faça o teste passar

Vamos criar um código que faça o teste passar, mesmo que ele não seja a implementação final. Crie um arquivo `subtrai.ts` com o seguinte conteúdo:

```typescript
function subtrai(a: number, b: number): number {
  return 1 // Implementação temporária
}

export default subtrai
```

Ao executar o teste com o comando `npx jest`, ele vai funcionar para o teste que criamos, esse é um exemplo muito básico, seria mais fácil fazer a implementação correta de uma vez, mas o objetivo é mostrar o ciclo de desenvolvimento do TDD.

3. Refatorar o código

Agora, vamos implementar a função `subtrai` corretamente. Modifique o arquivo `subtrai.ts` para o seguinte conteúdo:

```typescript
function subtrai(a: number, b: number): number {
  return a - b
}

export default subtrai
```

Podemos ajustar o teste também para rodar com números aleatórios e com isso garantir que a função está correta:

```typescript
import subtrai from './subtrai'
import { expect, test } from '@jest/globals'

const a = Math.floor(Math.random() * 100)
const b = Math.floor(Math.random() * 100)

test(`subtrai ${a} - ${b} é igual a ${a - b}`, () => {
  expect(subtrai(a, b)).toBe(a - b)
})
```

Se quiser ver os detalhes dos testes podemos executar o comando `npx jest --verbose`.

## Criando uma aplicação com Express e testes automatizados

Vamos criar uma aplicação com Express e testes automatizados. Para isso, vamos adicionar ao projeto as dependências necessárias:

```bash
npm install express@next
npm install -D @types/express @types/node
```

Crie um arquivo `server.ts` com o seguinte conteúdo:

```typescript
import express from 'express'
import { Express, Request, Response } from 'express'
import verificarCep from './cep'

const app: Express = express()

app.get('/verificar-cep/:cep', (req: Request, res: Response) => {
    const cep = req.params.cep
    const cepResponse = verificarCep(cep)
    res.send(cepResponse)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
```

Crie um arquivo `cep.ts` com o seguinte conteúdo:

```typescript
function verificarCep(cep: string): string {
  if (cep.length !== 8) {
    return 'CEP inválido'
  }

  return 'CEP válido'
}

export default verificarCep
```

Crie um arquivo `cep.test.ts` com o seguinte conteúdo:

```typescript
import verificarCep from './cep'
import { expect, test } from '@jest/globals'

test('verificarCep 12345678 é igual a CEP válido', () => {
  expect(verificarCep('12345678')).toBe('CEP válido')
})

test('verificarCep 123 é igual a CEP inválido', () => {
  expect(verificarCep('123')).toBe('CEP inválido')
})
```

## Praticando

1. Crie uma função chamada converterParaHexadecimal que recebe um número inteiro e retorna uma string com a representação hexadecimal desse número. Por exemplo, converterParaHexadecimal(255) deve retornar 'ff'. Escreva testes automatizados para essa função.

