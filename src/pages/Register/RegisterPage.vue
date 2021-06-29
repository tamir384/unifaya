<template>
  <div>
    <form class="loginInputBox">
  <RegisterInputs></RegisterInputs>
    </form>
    <q-btn @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy id="homeRegButton" class="homePageRedirect">דף הבית
    </q-btn>
  </div>
</template>

<script>

import RegisterInputs from "../../components/Register/RegisterInputs";

export default {
  name: "RegisterPage",
  components: {
    RegisterInputs
  },
  data(){
    return {

    }
  },
  methods: {
    goToHomePage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

#homeRegButton{
  margin-top: 11%;
}

</style>