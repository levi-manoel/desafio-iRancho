function validateName(name) {
  if (!name) return { code: 400, response: { error: 'Nome não pode ser vazio' }};

  return true;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!email) return { code: 400, response: { error: 'Email não pode ser vazio' }};
  if (!emailRegex.test(email)) return { code: 400, response: { error: 'Email em formato inválido' }};

  return true;
}

function validateAddress(address) {
  if (!address) return { code: 400, response: { error: 'Endereço não pode ser vazio' }};

  return true;
}

function validateGender(gender) {
  if (!gender) return { code: 400, response: { error: 'Sexo não pode ser vazio' }};
  if (gender !== 'M' && gender !== 'F') return { code: 400, response: { error: 'Sexo inválido' }};

  return true;
}

function validateIcAtivo(icAtivo) {
  if (!icAtivo && icAtivo !== false) return { code: 400, response: { error: 'ic_ativo não pode ser vazio' }};
  if (icAtivo !== true && icAtivo !== false) return { code: 400, response: { error: 'ic_ativo inválido' }};

  return true;
}

function validatePostPessoa(req, res, next) {
  const { no_pessoa, no_email, endereco, sexo, ic_ativo } = req.body;

  const isNameValid = validateName(no_pessoa);
  if (isNameValid !== true) return res.status(isNameValid.code).json(isNameValid.response);

  const isEmailValid = validateEmail(no_email);
  if (isEmailValid !== true) return res.status(isEmailValid.code).json(isEmailValid.response);

  const isAddressValid = validateAddress(endereco);
  if (isAddressValid !== true) return res.status(isAddressValid.code).json(isAddressValid.response);

  const isGenderValid = validateGender(sexo);
  if (isGenderValid !== true) return res.status(isGenderValid.code).json(isGenderValid.response);

  const isIcAtivoValid = validateIcAtivo(ic_ativo);
  if (isIcAtivoValid !== true) return res.status(isIcAtivoValid.code).json(isIcAtivoValid.response);

  next();
}

export default validatePostPessoa;
