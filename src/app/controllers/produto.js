const { Produto } = require('../models');
const moment = require('moment');

class ProdutoController {
  async create(req, res) {
    const { nome, descricao, preco } = req.body;

    var produto;
    const data_criacao = moment(Date.now()).format('YYYY-MM-DD');

    try {
      produto = await Produto.create({ nome, descricao, preco, data_criacao });
    } catch (error) {
      console.log(`create: ${error}`);
      return res.status(400).send({ error: 'Erro ao criar produto' });
    }

    return res.status(200).json(produto);
  }

  async findOne(req, res) {
    const { id } = req.params;

    var produto;
    try {
      produto = await Produto.findOne({ where: { id } });

    } catch (error) {
      console.log(`findOne: ${error}`)
      return res.status(400).send({ error: 'Erro ao procurar produto' });
    }

    return res.status(200).json(produto);
  }

  async findAll(req, res) {
    var produtos;
    try {
      produtos = await Produto.findAll();

    } catch (error) {
      console.log(`findAll: ${error}`)
      return res.status(400).send({ error: 'Erro ao retornar todas os produtos' });
    }

    return res.status(200).json(produtos);
  }

  async update(req, res) {
    const { id } = req.params;
    //const { nome, descricao, preco } = req.body;
    const data = req.body;
    const data_atualizacao = moment(Date.now()).format('YYYY-MM-DD');

    var ver;
    try {
      ver = await Produto.update({ ...data, data_atualizacao }, { where: { id } });

    } catch (error) {
      console.log(`update: ${error}`);
      return res.status(400).send({ error: 'Erro ao atualizar produto' });
    }

    if (ver == 0) {
      return res.status(400).send({ error: 'Erro ao atualizar produto' });
    }

    const produto = await Produto.findOne({ where: { id } });

    return res.status(200).json(produto);
  }

  async remove(req, res) {
    const { id } = req.params;

    var ver;

    try {
      ver = await Produto.destroy({ where: { id } });

    } catch (error) {
      console.log(`remove: ${error}`)
      return res.status(400).send({ error: 'Erro ao excluir produto' });
    }

    if (ver == 0) {
      return res.status(400).send({ error: 'Erro ao excluir produto.' });
    }

    return res.status(200).send()
  }
}


module.exports = new ProdutoController();
