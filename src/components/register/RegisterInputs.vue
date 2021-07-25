<template>
  <div>
    <q-input bg-color="grey-6" class="registerInputs" standout="bg-grey-4 text-black" rounded outlined v-model="editedUser.fullName" label="שם מלא"/>
    <br>
    <q-input bg-color="grey-6" class="registerInputs" standout="bg-grey-4 text-black" rounded outlined v-model="editedUser.email" label="דואר אלקטרוני"/>
    <br>
    <q-input type="password" bg-color="grey-6" class="registerInputs" standout="bg-grey-4 text-black" rounded outlined v-model="editedUser.password" id="txtPassword" label="סיסמה"/>
    <br>
    <q-input type="password" bg-color="grey-6" class="registerInputs" standout="bg-grey-4 text-black" rounded outlined v-model="editedUser.password2" id="confirmPassword" label="אימות סיסמה"/>
    <br>
    <q-btn style="font-size: 140%; width: 15%; background-color: rgba(0,94,255,0.78)" class="homeButtons" glossy label="Register" @click="insert()"/>
  </div>
</template>

<script>
import firebaseInstance from "../../middleware/firebase";

export default {
  name: "RegisterInputs",
  data() {
    return {
      tableName: 'users',
      editedUser: {
        fullName: '',
        userName: '',
        password: '',
        password2: '',
        email: '',
      }
    }
  },
  methods: {
    confirmPassword() {
      const password = this.editedUser.password;
      const confirmPassword = this.editedUser.password2;
      if (password !== confirmPassword) {
        return false;
      }
      return true;
    },
    insert() {
      if (this.confirmPassword()) {

        // firebaseDatabase.create({entity: this.tableName, user: this.editedUser})
        //     .then(() => {
        //       this.$emit('userAdded')
        //       this.$emit('cardAdded')
        //       this.$router.push('/')
        //     });
        firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.editedUser.email, this.editedUser.password)
            .then((user) => {
              // Signed in
              console.log(user)
              this.$router.push('/')
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
        localStorage.setItem('displayName', this.editedUser.fullName)
      }
      else{
        alert("Passwords do not match.");
      }
    }
  }
}
</script>

<style scoped>

</style>