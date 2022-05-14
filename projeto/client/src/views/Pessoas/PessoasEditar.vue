<template>
  <main>
    <h3>Editar {{ name }}</h3>
    <form>
      <label for="name-input">
        Nome:
        <input type="text" name="name-input" placeholder="Nome" v-model="name" />
      </label>

      <label for="email-input">
        Email:
        <input type="email" name="email-input" placeholder="Email" v-model="email" />
      </label>

      Endereço:
      <label for="adress-input">
        <input type="text" name="adress-input" placeholder="Endereço" v-model="adress" />
      </label>

      <label for="gender-select">
        Sexo:
        <select name="gender-select" v-model="gender">
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </label>

      <label for="active-select">
        É ativo:
        <select name="active-select" v-model="active">
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </label>

      <button @click.prevent="addPerson">Editar pessoa</button>
    </form>
  </main>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      adress: '',
      gender: 'M',
      active: 'true'
    }
  },
  mounted () {
    this.axios.get(`http://127.0.0.1:3001/pessoas/${this.$route.params.id}`)
      .then(({ data }) => {
        this.name = data.no_pessoa
        this.email = data.no_email
        this.adress = data.endereco
        this.gender = data.sexo
        this.active = data.ic_ativo === true ? 'true' : 'false'
      })
  },
  methods: {
    addPerson () {
      if (this.name === '' || this.email === '' || this.adress === '') {
        return alert('Preencha todos os campos')
      }

      this.axios.put(`http://127.0.0.1:3001/pessoas/${this.$route.params.id}`, {
        no_pessoa: this.name,
        no_email: this.email,
        endereco: this.adress,
        sexo: this.gender,
        ic_ativo: this.active === 'true'
      }).then(response => {
        alert(`${response.data.no_pessoa} foi editad${response.data.sexo === 'M' ? 'o' : 'a'} no banco de dados`)
      })
    }
  }
}
</script>
