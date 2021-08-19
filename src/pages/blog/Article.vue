<template>
  <div>
    <div class="articleDiv">
      <q-card
          class="bg-light-green-2 my-card articleCards"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);  word-wrap: break-word;"
      >
        {{ article.date }}
        <q-card-section>
          <div class="text-h6 articleHeader">{{ article.context.title }}</div>
          <br>
          <q-separator/>
          <div class="text-subtitle2 articleDescription">
            {{ article.context.description }}
          </div>
        </q-card-section>
        <q-separator/>

        <q-card-section class="q-pt-none textA">
          <p class="articleTextCard">{{ article.context.text }}</p>
        </q-card-section>
      </q-card>
    </div>
    <q-btn v-if="userUid" @click="saveArticle()"
           style=" font-size: 120%; font-weight: bold; width: 10%; background-color: rgba(255,255,255,0.63)" glossy
           class="fixed-top-right" :icon="'add'">הוספה למועדפים
    </q-btn>
      <q-btn @click="goToHomePage()"
             style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy
             class="homePageRedirect fixed-bottom">דף הבית
      </q-btn>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "Article",


  data() {
    return {  userUid: window.user.uid || localStorage.getItem('uid'),
    }
  },

  computed: {
    ...mapState('articlesStore', ['article'])
  },
  methods: {
    ...mapActions('articlesStore', ['getArticleByIdAC', 'saveArticleAC']),

    goToHomePage() {
      this.$router.push('/');
    },
   async saveArticle(){
      await this.saveArticleAC(this.article)
     alert('המאמר נוסף למועדפים')
    }
  },


  async created() {
    await this.getArticleByIdAC(this.$route.params.id)
  }

}
</script>

<style scoped>
.articleTextCard {
  font-size: 18px;
}

</style>