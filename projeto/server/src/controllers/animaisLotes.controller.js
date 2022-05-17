import animaisLotesServices from '../services/animaisLotes.sevices.js';

async function getAll(_req, res) {
  const { code, response } = await animaisLotesServices.getAll();

  res.status(code).json(response);
}

export default {
  getAll,
};
