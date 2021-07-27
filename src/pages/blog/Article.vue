<template>
  <div class="articleDiv">
    <q-card
        class="bg-light-green-2 my-card articleCards"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);  word-wrap: break-word;"
    >
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
        {{ article.context.text }}
      </q-card-section>
    </q-card>
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
    return {

    }
  },

  computed: {
    ...mapState('articlesStore', ['article'])
  },
  methods: {
    ...mapActions('articlesStore', ['getArticleByIdAC']),

    goToHomePage() {
      this.$router.push('/');
    },
  },


  async created() {
    await this.getArticleByIdAC(this.$route.params.id)
  }

}
</script>

<style scoped>


</style>