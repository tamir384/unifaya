<template>
  <div class="q-pa-md">

    <q-table
        style="height: 400px"
        class="my-sticky-dynamic"
        title='videos'
        :data="videos"
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
          <q-td v-model="videos">
            <q-btn>delete</q-btn>
            <q-btn>approve</q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import firestore from '../../middleware/firebase/firestore/videos'
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
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
        {name: 'videoTitle', align: 'center', label: 'Video Title', field: 'videoTitle'},
        {name: 'videoUrl', label: 'Video URL', field: 'videoUrl'},
        {name: 'category', label: 'Category', field: 'category', sortable: true},
        {name: 'description', label: 'Description', field: 'description'},
        {name: 'actions', label: 'Actions'},
      ],
    }
  },

  name: "HoldedVideosList",

  computed: mapState('videosStore', ['editedVideoId', 'videos']),

  methods: {

    ...mapActions('videosStore', ['getHoldedVideos', "deleteVideo"]),
    ...mapMutations("videosStore", ['setEditedVideoId']),


    deleteVideoById(id) {
      this.setEditedVideoId(id);
      this.deleteVideo(id);
    },
    approveVideoById() {

    }
  },
  created() {
    this.getHoldedVideos();
  },

}
</script>

<style lang="sass">
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
</style>