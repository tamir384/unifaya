<template>
  <div>
<holded-videos-list></holded-videos-list>
    <q-btn id="homeRegButton" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
           label class="homePageRedirect">דף הבית
    </q-btn>
  </div>
</template>

<script>
import HoldedVideosList from "../../components/Videos/HoldedVideosList";
export default {
  name: "ApproveVideos",
  components: {
    HoldedVideosList
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