<template>
  <div>
    <q-input bg-color="grey-6" class="loginInputs" standout="bg-grey-4 text-black" rounded outlined
             v-model="editedUser.email" label="Email"/>
    <br>
    <q-input type="password" bg-color="grey-6" class="loginInputs" standout="bg-grey-4 text-black" rounded outlined
             v-model="editedUser.password" label="Password"/>
    <br>
    <q-btn style="font-size: 140%; width: 15%; background-color: rgba(0,94,255,0.78)" glossy label="log-in"
           class="homeButtons" @click="loginWithEmailAndPass()"/>
  </div>
</template>

<script>

import firebaseAuth from "../../middleware/firebase/auth";

export default {
  name: "LoginInputs",
  data() {
    return {
      editedUser: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    goToHomePage(){
      this.$router.push('/');
    },
    async loginWithEmailAndPass() {
      await firebaseAuth.signInWithEmailAndPassword(this.editedUser.email, this.editedUser.password);
      this.goToHomePage();
    }
  }
}
</script>

<style scoped>

</style>