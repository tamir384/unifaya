<template>
  <div>
    <q-btn style="font-size: 150%; width: 25%; background-color: rgba(220,0,0,0.71)" glossy class="homeButtons"
           icon="fab fa-google" @click="loginWithGoogle()">כניסה עם גוגל
    </q-btn>
  </div>
</template>

<script>
import firebaseAuth from "../../middleware/firebase/auth"

export default {
  name: "GoogleSignButton",
  data() {
    return {}
  },
  methods: {
    goToHomePage(){
      this.$router.push('/');
    },
   async loginWithGoogle() {
       await firebaseAuth.loginWithGoogle();
       this.goToHomePage();
    }
  }
}
</script>

<style scoped>

</style>