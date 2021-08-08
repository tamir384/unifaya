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
    >
      <template v-slot:body-cell-articleLink="props">
        <q-td key="articleLink" :props="props">
          <a @click="$router.push(`/article/${props.row.id}`)">{{ props.row.id }}</a>
        </q-td>
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td key="actions" :props="props">
          <q-btn @click="deleteArticleById(props.row.id)">delete</q-btn>
        </q-td>
      </template>
    </q-table>

  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "SavedArticlesTable",

  data() {
    return {
      rowKey: '',
      userUid: window.user.uid,
      pagination: {
        rowsPerPage: 0,
      },
      columns: [
        {
          name: 'date',
          label: 'Date',
          align: 'left',
          field: row => row.date,
          sortable: true
        },
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
        {name: 'actions', align: 'center', label: 'Actions'},
      ],
    }
  },


  computed: mapState('articlesStore', ['articleId', 'articles']),


  methods: {
    ...mapActions('articlesStore', ['getSavedArticlesAC', 'deleteArticleFromFavorites']),
    ...mapMutations("articlesStore", ['setArticleId', 'resetArticles']),


    async deleteArticleById(id) {
      await this.setArticleId(id);
      await this.deleteArticleFromFavorites(id)
    },


  },
  async created(){
    await this.getSavedArticlesAC();
    console.log(this.articles);
  }
}
</script>

<style lang="sass" scoped>


.my-sticky-dynamic
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */



  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  thead tr:first-child th
    top: 0

a
  color: #027BE3
  border-bottom: 1px #027BE3 solid

a:hover
  color: #9C27B0


</style>