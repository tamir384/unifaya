<template>
  <div>
    <q-btn v-show="this.isAdmin" style="font-size: 140%; width: 10%; background-color: rgba(255,0,0,0.67)"
           @click="goToApproveArticles()"
           glossy label="אישור מאמרים"/>
    <div class="freeText" style="width: 1000px; direction: rtl">
      <q-input color="black" bg-color="grey-6" v-model="context.title" label="כותרת"/>
      <q-input color="black" bg-color="grey-6" v-model="context.description" label="תקציר"/>
      <q-input
          v-model="context.text"
          filled
          color="black"
          bg-color="grey-6"
          type="textarea"
          standout="bg-grey-4 text-black"
          label="טקסט חופשי"
      />
      <q-btn id="postArtBtn" @click="uploadText()" color="red" glossy>שלח בקשה לאישור</q-btn>
    </div>
    <q-btn id="newArtBtn" @click="goToHomePage()"
           style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
           class="homePageRedirect fixed-bottom">דף הבית
    </q-btn>
  </div>
</template>

<script>
import firestore from '../../middleware/firebase/firestore/articles'
import {mapState, mapActions, mapMutations} from 'vuex';


export default {
  name: "postArticles",
  data() {
    return {
      context: {
        title: '',
        description: '',
        text: '',
      },
      userName: (window.user.displayName) || localStorage.getItem('displayName'),
      userUid: (window.user.uid),
      isAdmin: window.user.uid === "h8aXlN8o8Ggp8KeJHS4YYevm0DT2",
      approved: false,
      timestamp: '',
      miliseconds: undefined,
    }
  },
  computed: {
    ...mapState("articlesStore", ['article', 'articles', 'articleId'])
  },


  methods: {
    ...mapActions("articlesStore", ['insertArticle']),


    goToHomePage() {
      this.$router.push('/');
    },
    async uploadText() {
      this.getNow();
      await firestore.insertArticle({
        context: this.context,
        userName: this.userName,
        userUid: window.user.uid,
        approved: this.approved,
        date: this.timestamp,
        miliseconds: this.miliseconds,
      });
      // for (const key in this.context){
      //   this.context.key = '';
      // }
      if (this.approved === false) {
        alert('תודה! המאמר נשלח ויפורסם באתר ברגע שיאושר ע"י צוות האתר')
      }
      for (const key in this.context) {
        this.context[key] = '';
      }
    },

    getNow: function () {
      const today = new Date();
      const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const miliSeconds = today.getTime();
      const dateTime = date + ' | ' + time;
      this.timestamp = dateTime;
      this.miliseconds = miliSeconds;
    },

    goToApproveArticles() {
      this.$router.push('/ApproveArticles')
    }
  },
  created() {
    if (this.isAdmin) {
      this.approved = true
    }
  }
}
</script>

<style scoped>
.freeText {
  margin-left: 25%;
  padding: 10%;
  font-size: 50px;
}


</style>