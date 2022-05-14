<template>
  <main>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Sexo</th>
          <th scope="col">Email</th>
          <th scope="col">Endereço</th>
          <th scope="col">Ativo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>{{ pessoa.no_pessoa }}</td>
          <td>{{ pessoa.sexo }}</td>
          <td>{{ pessoa.no_email }}</td>
          <td>{{ pessoa.endereco }}</td>
          <td>{{ pessoa.ic_ativo }}</td>
        </tr>
      </tbody>
    </table>
      <button @click="remove" class="btn btn-primary btn-block">Deletar</button>
      <router-link :to="link" class="btn btn-secondary btn-block"><button class="btn btn-secondary">Editar</button></router-link>
  </main>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      link: `/editar/pessoas/${this.$route.params.id}`,
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
