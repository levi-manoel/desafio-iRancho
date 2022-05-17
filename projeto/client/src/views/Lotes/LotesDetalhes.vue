<template>
  <main>
    <div>
      <h3>{{ lote.no_lote }}</h3>
      <p>{{ lote.ds_lote }}</p>
    </div>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome do animal</th>
          <th scope="col">Raça</th>
          <th scope="col">Sexo</th>
          <th scope="col">Peso</th>
          <th scope="col">Data de entrada</th>
          <th scope="col">Data de saída</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(animal, index) in lote.animais">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ animal.no_animal }}</td>
          <td>{{ animal.no_raca }}</td>
          <td>{{ animal.sexo }}</td>
          <td>{{ animal.vr_peso }}</td>
          <td>{{ animal.AnimalLote.dt_entrada }}</td>
          <td>{{ animal.AnimalLote.dt_saida }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      lote: {}
    }
  },
  mounted () {
    this.axios.get(`https://fazenda-3000-db.herokuapp.com/${this.id}`)
      .then(response => {
        this.lote = response.data
      })
  }
}
</script>
