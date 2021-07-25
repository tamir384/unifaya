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
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "Article",
  data() {
    return {}
  },

  computed: {
    ...mapState('articlesStore', ['article'])
  },
  methods: {
    ...mapActions('articlesStore', ['getArticleByIdAC'])
  },


  async created() {
    await this.getArticleByIdAC(this.$route.params.id)
  }

}
</script>

<style scoped>


</style>