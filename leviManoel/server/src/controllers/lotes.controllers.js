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

export default {
  getAll,
  getById,
};
