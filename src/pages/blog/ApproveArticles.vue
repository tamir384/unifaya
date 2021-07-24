<template>
<div>
  <ApproveArticlesTable/>
  <q-btn id="newArtBtn" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
         class="homePageRedirect fixed-bottom">דף הבית
  </q-btn>
</div>
</template>

<script>
import ApproveArticlesTable from "../../components/blog/ApproveArticlesTable";
export default {
  name: "ApproveArticles",
  components: {ApproveArticlesTable},
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
    created(){
    },
  }
}
</script>

<style scoped>

</style>