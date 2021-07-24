<template>
  <div>
    <q-btn style=" width: 6%; background-color: rgba(255,0,0,0.67)" glossy id="editButton" @click="postNewArticle()">כתיבת מאמר</q-btn>
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
    postNewArticle(){
      this.$router.push('/PostArticles')
    }
  }
}
</script>

<style>

#homeRegButton{
  margin-top: 25%;
}

</style>