<template>
  <div>
  <div class="blogTabBox">
    <h1 id="mainHeaderBlog" class="mainHeadersTxt">מועדפים</h1>
    <q-tabs
        v-model="tab"
        inline-label
        class="bg-brown-8 text-white shadow-2"
    >
      <q-tab class="full-width" name="savedVideos"  icon="fas fa-play" label="סרטונים שמורים" />
      <q-tab class="full-width" name="savedArticles" icon="fab fa-readme" label="מאמרים שמורים" />
    </q-tabs>

    <q-separator/>
  </div>
    <q-btn @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
            class="homePageRedirect">דף הבית
    </q-btn>
  </div>
</template>

<script>
export default {
name: "FavoritesPage",
  data () {
    return {
      tab: ['savedVideos', 'savedArticles']
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