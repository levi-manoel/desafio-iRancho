import lotesServices from '../services/lotes.services.js';

async function getAll(_req, res) {
  const { code, response } = await lotesServices.getAll();

  res.status(code).json(response);
}

async function getById(req, res) {
  const { id } = req.params;
  const { code, response } = await lotesServices.getById(id);

  res.status(code).json(response);
}

async function create(req, res) {
  const lote = req.body;
  const { code, response } = await lotesServices.create(lote);

  res.status(code).json(response);
}

async function update(req, res) {
  const lote = req.body;
  const { id } = req.params;

  const { code, response } = await lotesServices.update(lote, id);

  res.status(code).json(response);
}

export default {
  getAll,
  getById,
  create,
  update,
};
