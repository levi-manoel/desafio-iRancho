import animaisServices from '../services/animais.services.js';

async function getAll(_req, res) {
  const { code, response } = await animaisServices.getAll();

  res.status(code).json(response);
}

async function getById(req, res) {
  const { id } = req.params;
  const { code, response } = await animaisServices.getById(id);

  res.status(code).json(response);
}

async function create(req, res) {
  const lote = req.body;
  const { code, response } = await animaisServices.create(lote);

  res.status(code).json(response);
}

async function update(req, res) {
  const lote = req.body;
  const { id } = req.params;

  const { code, response } = await animaisServices.update(lote, id);

  res.status(code).json(response);
}

async function remove(req, res) {
  const { id } = req.params;

  const { code, response } = await animaisServices.remove(id);

  res.status(code).json(response);
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};