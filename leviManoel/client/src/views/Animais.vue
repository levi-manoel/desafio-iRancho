<template>
  <main>
    Lista de parceiros
    <ul>
      <li v-bind:key="index" v-for="(animal, index) in animals">
        {{animal.no_animal}}
      </li>
    </ul>
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
    this.axios.get('http://127.0.0.1:3001/animais')
      .then(response => {
        this.animals = response.data
      })
  }
}
</script>
