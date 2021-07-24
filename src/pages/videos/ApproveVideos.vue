<template>
  <div>
<holded-videos-list></holded-videos-list>
    <q-btn id="homeRegButton" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
           class="homePageRedirect">דף הבית
    </q-btn>
  </div>
</template>

<script>
import HoldedVideosList from "../../components/videos/HoldedVideosList";
export default {
  name: "ApproveVideos",
  data(){
    return{
      userUid: localStorage.getItem('uid'),
    }
  },
  components: {
    HoldedVideosList
  },
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
    created(){
      console.log(this.userUid)
    },
  }
}
</script>

<style scoped>

</style>