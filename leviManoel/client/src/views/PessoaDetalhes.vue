<template>
  <main>
    <h3>{{ pessoa.no_pessoa }}, {{ pessoa.sexo }}</h3>
    <div>
      <p><strong>Email:</strong> {{ pessoa.no_email }}</p>
      <p><strong>Endereço:</strong> {{ pessoa.endereco }}</p>
    </div>
  </main>
</template>

{"id":1,"no_pessoa":"Levi Manoel","no_email":"levimanoel.deob@gmail.com","endereco":"Rua São Roque, 43","sexo":"M","ic_ativo":false}

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
  }
}
</script>
