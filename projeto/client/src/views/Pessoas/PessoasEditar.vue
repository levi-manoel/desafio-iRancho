<template>
  <main>
    <h3>Editar {{ name }}</h3>
    <form>
      <div class="row">
        <div class="col">
          <label for="name-input">Nome:</label>
          <input type="text" id="name-input" class="form-control" placeholder="Nome" v-model="name" />
        </div>
        <div class="col">
          <label for="email-input">Email:</label>
          <input type="email" id="email-input" class="form-control" placeholder="Email" v-model="email" />
        </div>
      </div>

      <div class="form-group mt-3">
        <label for="adress-input">Endereço:</label>
        <input type="text" id="adress-input" class="form-control" placeholder="Endereço" v-model="adress" />
      </div>

      <div class="row">
        <div class="col">
          <label for="gender-select">Sexo:</label>
          <select id="gender-select" v-model="gender" class="form-control">
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>

        <div class="col">
          <label for="active-select">É ativo</label>
          <select id="active-select" v-model="active" class="form-control">
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
      </div>

      <button class="btn btn-primary btn-lg btn-block mt-2" @click.prevent="editPerson">Editar pessoa</button>
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
    editPerson () {
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
