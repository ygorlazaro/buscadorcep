# buscadorcep

## Status de testing: ![](https://travis-ci.org/ygorlazaro/buscadorcep.svg?branch=master)

Ferramenta de pesquisa de cep para node e JavaScript client-side. Utiliza como backend a API do ViaCEP.

Como desenhado até o momento, a biblioteca é compatível com qualquer framework front-end, como React, React Native, Vue.JS, Angular e AngularJS.

## Ajude o projeto! https://github.com/ygorlazaro/buscadorcep

# Versão 2.0.0

- Melhoria de velocidade
- Breaking change: `axios` removido como dependência, o retorno do método agora não tem mais o "envelope" `AxiosResponse`

# Como utilizar

Instale o componente:

`npm install buscadorcep`

O componente exporta uma função que retorna um endereço recebendo um cep como parâmetro:

```
//Node.JS
const buscadorcep = require('buscadorcep');

//ES6
//import buscadorcep = require('buscadorcep');

const endereco = await buscadorcep('21235280');

console.log(endereco);

/*
retorno:

{
  "cep": "21235-280",
  "logradouro": "Estrada do Colégio",
  "complemento": "",
  "bairro": "Colégio",
  "localidade": "Rio de Janeiro",
  "uf": "RJ",
  "unidade": "",
  "ibge": "3304557",
  "gia": ""
}
*/
```

Como o serviço retorna uma Promise, é possível utilizar encadeamento de `.then()` e `.catch()`;

```
buscadorcep('21235280')
    .then(response => response)
    .then(endereco => console.log(endereco));
```    
