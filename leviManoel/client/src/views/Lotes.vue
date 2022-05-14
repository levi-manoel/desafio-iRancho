<template>
  <main>
    <ul>
      <li v-bind:key="index" v-for="(lote, index) in lotes">
        <div>
          <h6>{{ lote.no_lote }}</h6>
          <p>{{ lote.ds_lote }}</p>
        </div>
      </li>
    </ul>
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
