<template>
  <div class="q-pa-md">
    <q-table
        style="height: 400px"
        class="my-sticky-dynamic"
        title='articles'
        :data="articles"
        :columns="columns"
        :row-key="rowKey"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
        selection="multiple"
        :selected.sync="selected"
    >
      <template v-slot:body-cell-articleLink="props">
          <q-td key="articleLink" :props="props" >
            <a @click="$router.push(`/article/${props.row.id}`)">{{ props.row.id }}</a>
          </q-td>
      </template>

      <template v-slot:top-right>
        <q-tr>
          <q-td>
            <q-btn>delete</q-btn>
            <q-btn>approve</q-btn>
          </q-td>
        </q-tr>
      </template>




    </q-table>


  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "ApproveArticlesTable",

  data() {
    return {
      rowKey: '',
      // rows: [],
      selected: [],
      userUid: window.user.uid,
      pagination: {
        rowsPerPage: 0,
      },
      columns: [
        {
          name: 'name',
          label: 'Username',
          align: 'left',
          field: row => row.userName,
          sortable: true
        },
        {name: 'userId', align: 'center', label: 'userId', field: row => row.userUid},
        {
          name: 'Article Title',
          style: 'white-space: nowrap; max-width: 15px; width: 100px; overflow: hidden; text-overflow: "----";',
          align: 'center',
          label: 'Article Title',
          field: row => row.context.title
        },
        {
          name: 'text',
          style: 'white-space: nowrap; max-width: 5px; width: 100px; overflow: hidden; text-overflow: "----";',
          label: 'Text',
          field: row => row.context.text,
          sortable: true
        },
        {
          name: 'description',
          style: 'white-space: nowrap; max-width: 50px; width: 100px; overflow: hidden; text-overflow: "----";',
          label: 'Description',
          field: row => row.context.description
        },
        {
          name: 'articleLink',
          style: 'white-space: nowrap; max-width: 50px; width: 300px; overflow: hidden; text-overflow: "----";',
          label: 'Link To Article',
          field: 'articleLink'
        },
      ],
    }
  },


  computed: mapState('articlesStore', ['articleId', 'articles']),

  watch:{
    async selectedGroups(articles) {
      const arr = []
      if (this.articles) {
        await articles.map(article => {
          article.map(member => {
            const validation = this.selected.some(aArticle => aArticle.id === member.id)
            if (!validation) {
              arr.push(member)
            }
          })
        })
        this.selected = arr;
      }
    }
  },

    methods: {

      ...mapActions('articlesStore', ['getArticlesAC']),
      ...mapMutations("articlesStore", ['setEditedArticlesId', 'setArticles']),


      deleteArticleById(id) {
        this.setEditedArticlesId(id);
        this.deleteArticle(id);
      },
      getSelectedString() {
        return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.articles.length}`
      }
    },
    async created() {
      await this.getArticlesAC();
      console.log('articles: ', this.articles)
    },
}
</script>

<style scoped>

a {
  color: #027BE3;
  border-bottom: 1px #027BE3 solid;
}

a:hover {
  color: #9C27B0;
}
</style>