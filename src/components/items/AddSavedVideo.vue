<template>
  <div class="q-pa-md">
    Add User
    <q-input rounded outlined v-model="localEditedUser.fullName" label="Fullname"/>
    <q-input rounded outlined v-model="localEditedUser.userName" label="Username"/>
    <q-input rounded outlined v-model="localEditedUser.password" label="Password"/>
    <q-input rounded outlined v-model="localEditedUser.email" label="Email"/>
    <q-btn v-if="!$route.params.id" style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67) " class="homeButtons" @click="insert()" glossy label="insert"/>
    <q-btn v-else style="font-size: 140%; width: 10%; background-color: rgba(38,38,38,0.67)" glossy label="update" class="homeButtons" @click="update($route.params.id)"/>
  </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'


export default {
  name: "AddItem",
  props: ['tableName'],
  computed: mapState('users', ['editedUser']),

  data() {
    return {
      localEditedUser: {
        fullName: '',
        userName: '',
        password: '',
        email: '',
      }
    }
  },

  methods: {

    ...mapActions('users', ['updateUser', 'setEditUserByIdFirestore', 'insertUserFirestore', 'updateUserFirestore']),
    ...mapMutations('users', ['setEditedUser', 'setEditedUserId']),


    goToRegUsers() {
      this.$router.push(`/registeredUsersFirestore`);
    },

    insert() {
      this.setEditedUser(this.localEditedUser);
      this.insertUserFirestore();
      for (const key in this.localEditedUser) {
        this.localEditedUser[key] = '';
      }
    },
    update(id) {
      this.setEditedUserId(id);
      this.setEditedUser(this.localEditedUser);
      this.updateUserFirestore(id);
      this.goToRegUsers()
    },

  },
  created() {
    if (this.$route.params.id) {

      this.setEditedUserId(this.$route.params.id);
      this.setEditUserByIdFirestore()
          .then(() => {
            Object.assign(this.localEditedUser, this.editedUser);
          });
    }
  }
}
</script>

<style scoped>

</style>