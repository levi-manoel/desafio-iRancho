<template>
  <main>
    <h3>Adicionar pessoa</h3>
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

      <button @click.prevent="addPerson">Adicionar pessoa</button>
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

      this.axios.post('http://127.0.0.1:3001/pessoas', {
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
