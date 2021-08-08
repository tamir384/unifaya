<template>
  <div class="blogTabBox">
    <h1 id="mainHeaderBlog" class="mainHeadersTxt">מאמרים</h1>
    <q-btn style=" width: 9%; background-color: rgba(255,0,0,0.67)" glossy id="editButton" @click="postNewArticle()">כתיבת מאמר</q-btn>
    <q-tabs
        v-model="tab"
        inline-label
        class="bg-brown-8 text-white shadow-2"
    >
      <q-tab class="full-width" name="socialArticles" icon="fas fa-feather-alt" label="מאמרים שיתופיים">
      </q-tab>
      <q-tab class="full-width" name="mainArticles" icon="whatshot" label="מאמרים של בעל האתר"/>
    </q-tabs>

    <q-separator/>
<div class="globalArticles">
    <q-tab-panels v-for="article of this.articles" v-model="tab" animated class="bg-teal-2 text-dark">
      <q-tab-panel v-if="article.userUid === isAdmin" name="mainArticles">
        {{article.userName}}
        <br>
        {{article.date}}
        <div @click="$router.push(`/article/${article.id}`)" class="text-h6 articleTabs">
          <a class="articleTitleTabs">{{article.context.title}}</a>
        </div>
        {{article.context.description}}
        <q-separator/>
      </q-tab-panel>



      <q-tab-panel v-if="article.userUid !== isAdmin && article.approved === true" name="socialArticles">
        {{article.userName}}
        <div @click="$router.push(`/article/${article.id}`)" class="text-h6 articleTabs">
          <a class="articleTitleTabs">{{article.context.title}}</a>
        </div>
        {{article.context.description}}
        <q-separator/>
      </q-tab-panel>
    </q-tab-panels>
</div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "BlogTabs",
  data() {
    return {
      tab: 'asdasd',
      isAdmin: 'h8aXlN8o8Ggp8KeJHS4YYevm0DT2',
    }
  },
  computed:{
    ...mapState('articlesStore',['articles'])
  },

  methods:{
    ...mapActions('articlesStore',['getArticlesAC']),

    postNewArticle(){
      this.$router.push('/PostArticles')
    }

  },
  created() {
    this.getArticlesAC();
  }
}
</script>

<style scoped>

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

.globalArticles{
  overflow-y: scroll;
  max-height: 400px;
}

.articleTitleTabs {
  color: #027BE3;
  border-bottom: 1px #027BE3 solid;
}

.articleTitleTabs:hover {
  color: #9C27B0;
}


</style>