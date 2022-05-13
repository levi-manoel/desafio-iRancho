import pessoasServices from '../services/pessoas.services.js';

async function getAll(_res, res) {
  const pessoas = await pessoasServices.getAll();

  res.status(200).json(pessoas);
}

async function getById(req, res) {
  const { id } = req.params;
  const { code, response } = await pessoasServices.getById(id);

  res.status(code).json(response);
}

async function create(req, res) {
  const personOrPeople = req.body;
  const { code, response } = await pessoasServices.create(personOrPeople);

  res.status(code).json(response);
}

async function update(req, res) {
  const updatedPerson = req.body;
  const { id } = req.params;

  const { code, response } = await pessoasServices.update(updatedPerson, id);

  res.status(code).json(response);
}

export default {
  getAll,
  getById,
  create,
  update,
};
