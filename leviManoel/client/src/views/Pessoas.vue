<template>
  <main>
    <router-link to="/adicionar/pessoas">Adicionar pessoa</router-link>
    <ul>
      <li v-bind:key="index" v-for="(pessoa, index) in pessoas">
        <div>
          <h6>{{ pessoa.no_pessoa }}</h6>
          <router-link :to="links[index]">Detalhes</router-link>
        </div>
      </li>
    </ul>
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
    this.axios.get('http://127.0.0.1:3001/pessoas')
      .then(response => {
        this.pessoas = response.data
      })
  }
}
</script>
