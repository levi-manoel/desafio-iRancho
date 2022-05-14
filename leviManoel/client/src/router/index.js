import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Pessoas from '../views/Pessoas.vue'
import PessoasDetalhes from '../views/Pessoas/PessoasDetalhes.vue'
import PessoasAdicionar from '../views/Pessoas/PessoasAdicionar.vue'
import PessoasEditar from '../views/Pessoas/PessoasEditar.vue'
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
      path: '/adicionar/pessoas',
      name: 'adicionar pessoas',
      component: PessoasAdicionar
    },
    {
      path: '/editar/pessoas/:id',
      name: 'editar pessoas',
      component: PessoasEditar
    },
    {
      path: '/pessoas/:id',
      name: 'pessoas detalhes',
      component: PessoasDetalhes
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
