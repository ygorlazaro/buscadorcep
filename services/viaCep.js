// @ts-nocheck
const axios = require('axios');

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
 * @returns {Promise<AxiosResponse<Endereco>>}
 */
const viaCep = async cep => {
    if (!cep) {
        throw new Error("O cep precisa ser informado");
    }

    const cleanCep = cep.replace('-', '');
    const url = `https://viacep.com.br/ws/${cleanCep}/json/`;

    return axios.get(url);
};

module.exports = viaCep;