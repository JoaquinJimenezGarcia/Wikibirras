<template>
  <div class="hello">
    <a href="#" @click="logout">Cerrar sesión</a>
    <h1>{{ msg }}</h1>
    <h2>Panel de Administración</h2>

    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              Añadir cerveza
            </div>
            <div class="card-body">
              <form @submit="addCerveza">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="newCerveza.nombre" placeholder="Nombre de cerveza">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="newCerveza.descripcion_corta" placeholder="Descripcion Corta">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="newCerveza.descripcion_larga" placeholder="Descripcion Larga">
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-8 text-center">
          <div class="card">
            <div class="card-header">
              Cervezas
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Cruzcampo',
  data () {
    return {
      msg: 'Añade, elimina o modifica cervezas',
      newCerveza: {
        nombre: '',
        origen: '',
        tipo: '',
        descripcion_corta: '',
        descripcion_larga: '',
        diabeticos: '',
        graduacion: '',
        imagen: '',
        link_compra: ''
      }
    }
  },
  methods: {
      logout(){
          firebase.auth().signOut()
            .then(() => this.$router.replace('home'))
      },
      addCerveza() {
        let db = firebase.database()
        let cervezasRef = db.ref('cervezas')

        alert(this.newCerveza.nombre)
        cervezasRef.push(this.newCerveza)
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