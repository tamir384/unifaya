<template>
  <q-layout view="hHh lpr fFf">

<!--    <q-header elevated class="bg-primary text-white" height-hint="98">-->
<!--      <q-toolbar>-->
<!--        <q-toolbar-title>-->
<!--          <q-avatar>-->
<!--            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
<!--          </q-avatar>-->
<!--          Title-->
<!--        </q-toolbar-title>-->
<!--      </q-toolbar>-->

<!--      <q-tabs align="left">-->
<!--        <home-buttons/>-->
<!--      </q-tabs>-->
<!--    </q-header>-->

    <q-page-container>
      <router-view />
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
</style>
