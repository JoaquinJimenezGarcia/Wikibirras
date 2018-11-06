<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="usuario" placeholder="Email" name="email" id="email">
            <input type="password" v-model="password" placeholder="Contraseña">
            <input type="submit" value="Acceder">
        </form>
        <pre>
            {{ $data }}
        </pre>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        data() {
           return {
               usuario: '',
               password: '',
           } 
        },
        methods: {
            login() {
                firebase.auth()
                    .signInWithEmailAndPassword(this.usuario, this.password)
                    .then(
                        (user) => this.$router.replace('/cruzcampo'),
                        (error) => alert(error.message)
                    )
                    .catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                    });
            }
        }
    }
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    form > * {
        display: block;
    }
</style>


