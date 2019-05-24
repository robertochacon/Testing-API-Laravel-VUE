import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/productos',
      name: 'prductos',
      component: () => import('./views/Productos.vue')
    },
    {
      path: '/tiendas',
      name: 'tiendas',
      component: () => import('./views/Tiendas.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('./views/Contacto.vue')
    }
  ]
})
