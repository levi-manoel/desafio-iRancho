<template>
  <main>
    Lista de parceiros
    <ul>
      <li v-bind:key="index" v-for="(client, index) in clients">
        {{client.no_pessoa}}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data () {
    return {
      clients: []
    }
  },
  mounted () {
    this.axios.get('http://127.0.0.1:3001/pessoas')
      .then(response => {
        this.clients = response.data
      })
  }
}
</script>
