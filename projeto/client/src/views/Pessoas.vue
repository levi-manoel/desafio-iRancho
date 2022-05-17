<template>
  <main>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col"><router-link to="/adicionar/pessoas">Adicionar pessoa</router-link></th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(pessoa, index) in pessoas">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ pessoa.no_pessoa }}</td>
          <td><router-link :to="links[index]">Detalhes</router-link></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  data () {
    return {
      pessoas: []
    }
  },
  computed: {
    links () {
      return this.pessoas.map((pessoa) => `/pessoas/${pessoa.id}`)
    }
  },
  mounted () {
    this.axios.get('https://fazenda-3000-db.herokuapp.com/pessoas')
      .then(response => {
        this.pessoas = response.data
      })
  }
}
</script>
