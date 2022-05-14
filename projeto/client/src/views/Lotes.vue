<template>
  <main>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(lote, index) in lotes">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ lote.no_lote }}</td>
          <td>{{ lote.ds_lote }}</td>
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
  mounted () {
    this.axios.get('http://127.0.0.1:3001/lotes')
      .then(response => {
        this.lotes = response.data
      })
  }
}
</script>
