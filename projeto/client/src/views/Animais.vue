<template>
  <main>
    <ul>
      <li v-bind:key="index" v-for="(animal, index) in animals">
        <div>
          <h6>{{ animal.no_animal }}</h6>
          <p>Dono: {{ animal.dono.no_pessoa }}</p>
        </div>
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
