<template>
<div>
  <UploadVideosToFirestore/>d
  <q-btn style="font-size: 140%; width: 10%; background-color: rgba(255,0,0,0.67)" @click="approveVideos()" glossy label="Approve"/>
  <q-btn id="homeRegButton" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
         label class="homePageRedirect">דף הבית
  </q-btn>
</div>
</template>

<script>
import UploadVideosToFirestore from "../../components/Videos/UploadVideosToFirestore";

export default {
  name: "UploadVideosPage",
  components:{
    UploadVideosToFirestore,
  },
  data(){
    return{

    }
  },
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
    approveVideos(){
      this.$router.push('/ApproveVideos')
    }
  }
}
</script>

<style scoped>

</style>