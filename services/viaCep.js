const fetch = require('node-fetch');

/**
 * @typedef Endereco
 * @prop {string} cep
 * @prop {string} logradouro
 * @prop {string} complemento
 * @prop {string} bairro
 * @prop {string} localidade
 * @prop {string} uf
 * @prop {string} unidade
 * @prop {string} ibge
 * @prop {string} gia
 */

/**
 * Busca um endereço a partir de um CEP
 * 
 * @param {string} cep 
 * @returns {Promise<Endereco>}
 */
const viaCep = async cep => {
    if (!cep) {
        throw new Error("O cep precisa ser informado");
    }

    const cleanCep = cep.replace('-', '');
    const url = `https://viacep.com.br/ws/${cleanCep}/json/`;

    const response = await fetch(url);

    return response.json();
};

module.exports = viaCep;