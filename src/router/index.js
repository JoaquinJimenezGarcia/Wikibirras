import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Cruzcampo from '@/components/Cruzcampo'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cruzcampo',
      name: 'Cruzcampo',
      component: Cruzcampo,
      meta: {
        autentificado: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  console.log(usuario);
  let autorizacion = to.matched.some(record => record.meta.autentificado);

  if(autorizacion && !usuario) {
    next('login')
  } else if (!autorizacion && usuario) {
    next('cruzcampo')
  } else {
    next()
  }
})

export default router