<template>
<div>
  <q-btn @click="GoToUploadVideos()" style=" width: 8%; background-color: rgba(255,0,0,0.67)" > העלת סרטונים</q-btn>
  <video-cards/>
  <q-btn id="homeRegButton" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
          class="homePageRedirect">דף הבית
  </q-btn>
</div>
</template>

<script>
import VideoCards from "../../components/Videos/VideoCards";
export default {
  name: "VideosPage",
  components: {
    VideoCards
  },
  methods: {
    GoToUploadVideos(){
      this.$router.push('/UploadVideos')
    },

    goToHomePage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>