<template>
  <div>
    <h1 id="mainHeaderBlog" class="mainHeadersTxt">מועדפים</h1>
    <SavedArticlesTable></SavedArticlesTable>
    <q-btn @click="goToHomePage()"
           style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
           class="homePageRedirect fixed-bottom">דף הבית
    </q-btn>
  </div>
</template>

<script>
import SavedArticlesTable from "../../components/favorites/SavedArticlesTable";
export default {
name: "FavoritesPage",
  components:{SavedArticlesTable},
  data () {
    return {
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