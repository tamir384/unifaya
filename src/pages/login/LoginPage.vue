<template>
  <div>
    <form class="loginInputBox">
      <LoginInputs></LoginInputs>
      <br>
      <GoogleSignButton id="googleSignInButton"/>
    </form>
    <q-btn @click="goToHomePage()"
           style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
           class="homePageRedirect fixed-bottom">דף הבית
    </q-btn>
  </div>
</template>

<script>
import LoginInputs from "../../components/login/LoginInputs";
import GoogleSignButton from "../../components/login/GoogleSignButton";


export default {
  name: "loginPage",
  components: {
    LoginInputs, GoogleSignButton,
  },
  created() {
    if (window.user) {
      this.goToHomePage()
    }
  },
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
  }
}

</script>

<style scoped>


</style>