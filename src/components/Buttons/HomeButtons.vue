<template>
  <div class="homeButtonsDiv">
    <div id="headerButtons">
      <q-btn  v-if="!isConnected" @click="goToLoginPage()"  glossy class="homeButtons">התחברות
      </q-btn>
      <q-btn v-if="!isConnected" @click="goToRegisterPage()" glossy class="homeButtons">הרשמה
      </q-btn>
      <q-btn v-if="isConnected" @click="signOut()" glossy class="homeButtons">התנתק
      </q-btn>
      <q-btn glossy class="homeButtons" @click="goToBlogPage()">בלוג</q-btn>
      <q-btn @click="gotToVideosPage()" glossy class="homeButtons">סרטונים</q-btn>
      <q-btn glossy class="homeButtons">על עצמי</q-btn>
      <q-btn @click="goToRegisteredUsers()" glossy class="homeButtons">מועדפים
      </q-btn>
    </div>
  </div>
</template>


<script>

import firebaseInstance from '../../middleware/firebase'

export default {
  name: "HomeButtons",
  props: [],
  data() {
    return {
      isConnected: false,
    }
  },

  methods: {

    setAuthPersistence(){
      firebaseInstance.firebase.auth().setPersistence(firebaseInstance.firebase.auth.Auth.Persistence.NONE)
          .then(() => {
            var provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
            // In memory persistence will be applied to the signed in Google user
            // even though the persistence was set to 'none' and a page redirect
            // occurred.
            return firebaseInstance.firebase.auth().signInWithRedirect(provider);
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    },

    checkUserSign() {
      let user = undefined;

      if (JSON.parse(localStorage.user)){
        user = JSON.parse(localStorage.user);
      } else {
        user = firebaseInstance.firebase.auth().currentUser;
      }

      if (user) {
        // User is signed in.
        return true;
      } else {
        // No user is signed in.
        return false;
      }
    },

    goToRegisteredUsers() {
      this.$router.push(`/registeredUsers`);
    },
    goToLoginPage() {
      this.$router.push(`/LoginPage`);
    },
    goToRegisterPage() {
      this.$router.push(`/register`);
    },
    gotToVideosPage(){
      this.$router.push('/videos')
    },
    goToBlogPage(){
      this.$router.push('/blog')
    },

    signOut() {
      this.isConnected = false;
      window.user = undefined
      firebaseInstance.firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  },
  created() {
    this.checkUserSign() ? this.isConnected = true : this.isConnected = false;
    }
}
</script>

<style scoped>


#headerButtons {
  direction: rtl;
  text-align: center;
  margin-top: 5%;

}

</style>