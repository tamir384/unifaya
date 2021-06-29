<template>
<div class="q-pa-md">
  <q-table
      style="height: 400px"
      class="my-sticky-dynamic"
      title='articles'
      :data="articles"
      :columns="columns"
      row-key="rowKey"
      selection="multiple"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
  >
    <template v-slot:top-right>
      <q-tr>

      </q-tr>
      <q-tr>
        <q-td v-model="articles">
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
      rows: [],
      pagination: {
        rowsPerPage: 0
      },

      columns: [
        {
          name: 'index',
          label: '#',
          field: 'index'
        },
        {
          name: 'name',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.userName,
          format: val => `${val}`,
          sortable: true
        },
        {name: 'articleTitle', align: 'center', label: 'Article Title', field: 'articleTitle'},
        {name: 'category', label: 'Category', field: 'category', sortable: true},
        {name: 'description', label: 'Description', field: 'description'},
        {name: 'actions', label: 'Actions'},
      ],
    }
  },

  computed: mapState('articlesStore', ['editedArticleId', 'articles']),

  methods: {

    ...mapActions('articlesStore', ['getHoldedArticles', "deleteArticle"]),
    ...mapMutations("articlesStore", ['setEditedArticlesId']),


    deleteArticleById(id) {
      this.setEditedArticlesId(id);
      this.deleteArticle(id);
    },
    approveArticleById() {

    }
  },
  created() {
    this.getHoldedArticles();
  },

}
</script>

<style scoped>

</style>