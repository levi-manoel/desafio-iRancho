<template>
  <main>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
          <th scope="col">Qntd de animais</th>
          <th scope="col"><router-link to="/">Adicionar Lote</router-link></th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(lote, index) in lotes">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ lote.no_lote }}</td>
          <td>{{ lote.ds_lote }}</td>
          <td>{{ lote.animais.length }}</td>
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
      lotes: []
    }
  },
  computed: {
    links () {
      return this.lotes.map(lote => `/lotes/${lote.id}`)
    }
  },
  mounted () {
    this.axios.get('https://fazenda-3000-db.herokuapp.com/lotes')
      .then(response => {
        this.lotes = response.data
      })
  }
}
</script>
