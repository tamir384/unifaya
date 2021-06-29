<template>
  <div>
    <q-btn style="font-size: 140%; width: 10%; background-color: rgba(255,0,0,0.67)" @click="goToApproveArticles()" glossy label="Approve"/>
  <div class="freeText" style="width: 1000px; direction: rtl">
    <q-input color="black" bg-color="grey-6" v-model="title" label="כותרת"/>
    <q-input
        v-model="text"
        filled
        color="black"
        bg-color="grey-6"
        type="textarea"
        standout="bg-grey-4 text-black"
        label="טקסט חופשי"
    />
    <q-btn id="postArtBtn" color="red" glossy>שלח בקשה לאישור</q-btn>
  </div>
    <q-btn id="newArtBtn" @click="goToHomePage()" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
           class="homePageRedirect fixed-bottom">דף הבית
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "postArticles",
    data () {
      return {
        title: '',
        text: ''
      }
    },
  methods:{
    goToHomePage(){
      this.$router.push('/');
    },
    uploadText(){

    },
    goToApproveArticles(){
      this.$router.push('/ApproveArticles')
    }
  }
  }
</script>

<style scoped>
.freeText{
  margin-left: 25%;
  padding: 10%;
  font-size: 50px;
}

#newArtBtn{
}

</style>