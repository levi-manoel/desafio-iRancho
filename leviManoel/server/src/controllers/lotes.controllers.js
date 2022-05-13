import lotesServices from '../services/lotes.services.js';

async function getAll(req, res) {
  const { code, response } = await lotesServices.getAll();

  res.status(code).json(response);
}

export default {
  getAll,
};
