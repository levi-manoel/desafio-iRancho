function validadeLoteName(name) {
  if (!name) return { code: 400, response: { error: 'Nome não pode ser vazio' } };
  if (typeof name !== 'string') return { code: 400, response: { error: 'Nome tem que ser um texto' } };

  return true;
}

function validateLoteDescription(desc) {
  if (!desc) return { code: 400, response: { error: 'Descrição não pode ser vazia' } };
  if (typeof desc !== 'string') return { code: 400, response: { error: 'Descrição tem que ser um texto' } };

  return true;
}

function postLoteValidations(req, res, next) {
  const { no_lote, ds_lote } = req.body;

  const isNameValid = validadeLoteName(no_lote);
  if (isNameValid !== true) return res.status(isNameValid.code).json(isNameValid.response);

  const isDescValid = validateLoteDescription(ds_lote);
  if (isDescValid !== true) return res.status(isDescValid.code).json(isDescValid.response);

  next();
}

export default postLoteValidations;
