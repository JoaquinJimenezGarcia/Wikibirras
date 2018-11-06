<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#" @click="logout">Cerrar sesión</a>
    <h2>Panel de Administración</h2>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Cruzcampo',
  data () {
    return {
      msg: 'Añade, elimina o modifica cervezas'
    }
  },
  methods: {
      logout(){
          firebase.auth().signOut()
            .then(() => this.$router.replace('home'))
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>