<template>
  <div class="blogTabBox">
    <h1 id="mainHeaderBlog" class="mainHeadersTxt">מאמרים</h1>
    <q-tabs
        v-model="tab"
        inline-label
        class="bg-brown-8 text-white shadow-2"
    >
      <q-tab class="full-width" name="socialArticles" icon="fas fa-feather-alt" label="מאמרים שיתופיים"/>
      <q-tab class="full-width" name="mainArticles" icon="whatshot" label="מאמרים של בעל האתר"/>
    </q-tabs>

    <q-separator/>

    <q-tab-panels v-for="article of this.articles" v-model="tab" animated class="bg-teal-2 text-dark">
      <q-tab-panel  name="socialArticles">
        <div class="text-h6 articleTabs">{{article.context.title}}</div>
        {{article.context.description}}
      </q-tab-panel>

      <q-tab-panel name="socialArticles">
        <div class="text-h7">שם של המאמר 2</div>
        2 תקציר המאמר
      </q-tab-panel>

      <q-tab-panel name="mainArticles">
        <div class="text-h6">שם של המאמר 3</div>
        3 תקציר המאמר
        <q-separator/>
        <div class="text-h6">שם של המאמר 4</div>
        תקציר המאמר4
      </q-tab-panel>

      <q-tab-panel name="socialArticles">
        <div class="text-h7">שם של המאמר 2</div>
        2 תקציר המאמר
      </q-tab-panel>
    </q-tab-panels>

  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: "BlogTabs",
  data() {
    return {
      tab: 'asdasd'
    }
  },
  computed:{
    ...mapState('articlesStore',['articles'])
  },

  methods:{
    ...mapActions('articlesStore',['getArticlesAC'])
  },
  created() {
    this.getArticlesAC();
  }
}
</script>

<style>

.blogTabBox {
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 50px;
  float: inside;
  height: 50%;
}

#mainHeaderBlog {
  margin-top: 1%;
}


</style>