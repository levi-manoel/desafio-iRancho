<template>
  <main>
    <h3>Adicionar pessoa</h3>
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

      <button class="btn btn-primary btn-lg btn-block mt-2" @click.prevent="addPerson">Adicionar pessoa</button>
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
  methods: {
    addPerson () {
      if (this.name === '' || this.email === '' || this.adress === '') {
        return alert('Preencha todos os campos')
      }

      this.axios.post('https://fazenda-3000-db.herokuapp.com/pessoas', {
        no_pessoa: this.name,
        no_email: this.email,
        endereco: this.adress,
        sexo: this.gender,
        ic_ativo: this.active === 'true'
      }).then(response => {
        alert(`${response.data.no_pessoa} foi adicionad${response.data.sexo === 'M' ? 'o' : 'a'} ao banco de dados`)
      })
    }
  }
}
</script>
