<template>
  <main>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Animal</th>
          <th scope="col">Dono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(animal, index) in animals">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ animal.no_animal }}</td>
          <td>{{ animal.dono.no_pessoa }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  data () {
    return {
      animals: []
    }
  },
  mounted () {
    this.axios.get('https://fazenda-3000-db.herokuapp.com/animais')
      .then(response => {
        this.animals = response.data
      })
  }
}
</script>
