<template>
  <main>
    <h3>{{ pessoa.no_pessoa }}, {{ pessoa.sexo }}</h3>
    <div>
      <p><strong>Email:</strong> {{ pessoa.no_email }}</p>
      <p><strong>Endereço:</strong> {{ pessoa.endereco }}</p>
    </div>
    <div>
      <button @click="remove">Deletar</button>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      pessoa: {}
    }
  },
  mounted () {
    this.axios.get(`http://127.0.0.1:3001/pessoas/${this.id}`)
      .then(response => {
        this.pessoa = response.data
      })
  },
  methods: {
    remove () {
      this.axios.delete(`http://127.0.0.1:3001/pessoas/${this.id}`)
        .then(response => {
          alert(`${response.data.no_pessoa} foi deletad${response.data.sexo === 'M' ? 'o' : 'a'} do banco de dados`)
        })
      this.$router.push({ name: 'pessoas' })
    }
  }
}
</script>
