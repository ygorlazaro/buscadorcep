const viaCep = require('../../services/viaCep')

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


test('busca um cep válido', async () => {
    const cep = '21235280';

    /** @type {Endereco} */
    const endereco = await viaCep(cep);

    expect(endereco).toBeDefined();
    expect(endereco.cep).toBe('21235-280');
    expect(endereco.localidade).toBe('Rio de Janeiro');
});