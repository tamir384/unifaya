<template>
  <div>
    <h1 class="mainHeadersTxt">Unifaya</h1>
    <HomeButtons/>
  </div>
</template>

<script>

import HomeButtons from "../../components/buttons/HomeButtons";
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

body{
  overflow: hidden;
}

</style>
