import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Pessoas from '../views/Pessoas.vue'
import PessoaDetalhes from '../views/PessoaDetalhes.vue'
import Animais from '../views/Animais.vue'
import Lotes from '../views/Lotes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pessoas',
      name: 'pessoas',
      component: Pessoas
    },
    {
      path: '/pessoas/:id',
      name: 'pessoas detalhes',
      component: PessoaDetalhes
    },
    {
      path: '/animais',
      name: 'animais',
      component: Animais
    },
    {
      path: '/lotes',
      name: 'lotes',
      component: Lotes
    }
  ]
})
