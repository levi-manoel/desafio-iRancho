const getAllMock = [
  {
    "id": 1,
    "no_pessoa": "Levi Manoel",
    "no_email": "levimanoel.deob@gmail.com",
    "endereco": "Rua São Roque, 43",
    "sexo": "M",
    "ic_ativo": false
  },
  {
    "id": 2,
    "no_pessoa": "Lucas Manoel",
    "no_email": "lucas.cabj7@gmail.com",
    "endereco": "Rua do Trevo, 122",
    "sexo": "M",
    "ic_ativo": true
  },
  {
    "id": 3,
    "no_pessoa": "Luciano Cássio",
    "no_email": "cassioleto@gmail.com",
    "endereco": "Rua do Chorão, 89",
    "sexo": "M",
    "ic_ativo": false
  },
  {
    "id": 4,
    "no_pessoa": "Manoel Messias",
    "no_email": "messiaseloide@gmail.com",
    "endereco": "Rua Dona Santa, 20",
    "sexo": "M",
    "ic_ativo": false
  },
  {
    "id": 5,
    "no_pessoa": "Lóide Eulália",
    "no_email": "loide.eulalia@gmail.com",
    "endereco": "Rua Dona Santa, 20",
    "sexo": "F",
    "ic_ativo": true
  }
];

const getByIdMock = {
  dataValues: {
    "id": 3,
    "no_pessoa": "Luciano Cássio",
    "no_email": "cassioleto@gmail.com",
    "endereco": "Rua do Chorão, 89",
    "sexo": "M",
    "ic_ativo": false
  }
};

export default {
  getAllMock,
  getByIdMock,
};
