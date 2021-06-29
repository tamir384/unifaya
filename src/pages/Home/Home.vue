<template>
  <div>
    <h1 class="mainHeadersTxt">ברוכים הבאים</h1>
    <HomeButtons/>
  </div>

</template>

<script>

import HomeButtons from "../../components/Buttons/HomeButtons";
export default {
  name:'Home',
  components: {
    HomeButtons
  },

  data() {
    return {
    }
  }
}
</script>

<style>

</style>
