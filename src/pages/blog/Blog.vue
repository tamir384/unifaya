<template>
  <div>
    <BlogTabs/>
  <q-btn id="homeRegButton" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
          class="homePageRedirect">דף הבית
  </q-btn>
  </div>
</template>

<script>

import BlogTabs from "../../components/blog/BlogTabs";

export default {
  name: "Blog",
  components:{
    BlogTabs
  },
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },

  }
}
</script>

<style>

#homeRegButton{
  margin-top: 25%;
}

</style>