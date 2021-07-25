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
    uploadText() {
      firestore.insertCollection({
        context: this.context,
        userName: this.userName,
        userUid: window.user.uid,
        approved: false
      });
    },
    goToApproveArticles() {
      this.$router.push('/ApproveArticles')
    }
  },
  created() {
  }
}
</script>

<style scoped>
.freeText {
  margin-left: 25%;
  padding: 10%;
  font-size: 50px;
}

#newArtBtn {
}

</style>