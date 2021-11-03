const { Compra } = require('../models');
const moment = require('moment');

class CompraController {
  async create(req, res) {
    const { total, tipo_pagamento, status } = req.body;

    var compra;
    const data_criacao = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    try {
      compra = await Compra.create({ total, data_criacao, tipo_pagamento, status });
    } catch (error) {
      console.log(`create: ${error}`);
      return res.status(400).send({ error: 'Erro ao criar compra' });
    }

    return res.status(200).json(compra);
  }

  async findOne(req, res) {
    const { id } = req.params;

    var compra;
    try {
      compra = await Compra.findOne({ where: { id } });

    } catch (error) {
      console.log(`findOne: ${error}`)
      return res.status(400).send({ error: 'Erro ao procurar compra' });
    }

    return res.status(200).json(compra);
  }

  async findAll(req, res) {
    var compras;
    try {
      compras = await Compra.findAll();

    } catch (error) {
      console.log(`findAll: ${error}`)
      return res.status(400).send({ error: 'Erro ao retornar todas as compras' });
    }

    return res.status(200).json(compras);
  }

  async update(req, res) {
    const { id } = req.params;
    //const { total, tipo_pagamento, status } = req.body;
    const data = req.body;

    var ver;
    try {
      ver = await Compra.update(data, { where: { id } });

    } catch (error) {
      console.log(`update: ${error}`);
      return res.status(400).send({ error: 'Erro ao atualizar compra' });
    }

    if (ver == 0) {
      return res.status(400).send({ error: 'Erro ao atualizar compra' });
    }

    const compra = await Compra.findOne({ where: { id } });

    return res.status(200).json(compra);
  }

  async remove(req, res) {
    const { id } = req.params;

    var ver;

    try {
      ver = await Compra.destroy({ where: { id } });

    } catch (error) {
      console.log(`remove: ${error}`)
      return res.status(400).send({ error: 'Erro ao excluir compra' });
    }

    if (ver == 0) {
      return res.status(400).send({ error: 'Erro ao excluir compra.' });
    }

    return res.status(200).send()
  }
}

module.exports = new CompraController();
