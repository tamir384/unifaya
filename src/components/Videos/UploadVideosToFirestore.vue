<template>

  <div class="image-css" style="background-color: #ffffff">

    <div style="width: 25%">
      <br>
      <p class="p-file-card">הוספת תמונה</p>
      <q-input bg-color="grey-6" standout="bg-grey-4 text-black" rounded outlined v-model="localEditedVideo.videoTitle" label="Title"/>
      <br>
      <q-input bg-color="grey-6" standout="bg-grey-4 text-black" rounded outlined v-model="localEditedVideo.videoUrl" label="YouTube URL"/>
      <div id="textAreaVids" class="q-pa-md" style="max-width: 300px">
      <q-input type="textarea" bg-color="grey-6" standout="bg-grey-4 text-black" rounded outlined v-model="localEditedVideo.description" label="Description"/>
      </div>
      <div class="q-pa-md">
        <div class="q-gutter-md row">
          <q-select
              label="נושא"
              transition-show="flip-up"
              transition-hide="flip-down"
              v-model="localEditedVideo.category"
              :options="options"
              style="width: 250px"
          />
    </div>
    <div>
      <q-img class="=preview"/>
      <br>
      <div class="btn">
        <q-btn round icon="upload" color="primary" text-color="yellow-13" @click="insert()"></q-btn>
      </div>
    </div>

  </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'


export default {
  name: "Storage",
  computed: mapState('videosStore', ['editedVideo']),
  temp: 0,

  data() {
    return {
      localEditedVideo:{
        userName: `${window.user.displayName}`,
        videoTitle: '',
        videoUrl: '',
        category: '',
        description: '',
        holding: true,
      },
      options:[
          'test1', 'test2', 'test3', 'test4'
      ]
    }
  },


  methods: {
    ...mapActions('videosStore', ['getUsersFirestore', "deleteVideo", 'insertVideo']),
    ...mapMutations('videosStore', ['setEditedVideo']),

     async insert(){
      await this.setEditedVideo(this.localEditedVideo)
      await this.insertVideo()
      for (const key in this.localEditedVideo) {
        this.localEditedVideo[key] = '';
      }
    },
  },
  created() {

  }
}
</script>

<style scoped>
body {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#textAreaVids{
  display: inline;
}



</style>