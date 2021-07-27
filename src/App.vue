<template>
  <q-layout class="main-layout" view="hHh lpr fFf">
    <q-page-container class="main-container">
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import Home from './pages/home/Home.vue'
import {mapActions} from 'vuex'
import HomeButtons from "./components/buttons/HomeButtons";

export default {
  name: 'LayoutDefault',

  methods: {...mapActions('auth', ['getUserId'])},

  components: {
    HomeButtons,
    Home
  },
  created() {
    if (JSON.parse(localStorage.user)) {
      window.user = JSON.parse(localStorage.user)
    }
  },


}
</script>

<style>

.main-layout{
  width: 100%;
  height: 100%;
}

.main-container{
  width: 100%;
  height: 100%;
}

</style>
