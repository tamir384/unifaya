<template>
  <div class="q-pa-md">

    <q-table
        :title="'Videos'"
        :data="users"
        :columns="columns"
        row-key="name"
        binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="fullName" :props="props" @click="goToUser(props.row.id)">{{ props.row.fullName }}</q-td>
          <q-td key="userName" :props="props">{{ props.row.userName }}</q-td>
          <q-td key="password" :props="props">{{ props.row.password }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="actions" :props="props">{{ props.row.actions }}
            <q-btn :props="props" @click="deleteUserById(props.row.id)">
              delete
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import {  mapState, mapActions, mapMutations } from 'vuex'
import firebaseDatabase from '../drivers/firebase/database'

export default {
  name: "TableView",
  props: ['tableName'],
  data() {
    return {
      columns: [
        {name: 'fullName', label: 'Fullname', field: 'fullName'},
        {name: 'userName', label: 'Username', field: 'userName'},
        {name: 'password', label: 'Password', field: 'password'},
        {name: 'email', label: 'Email', field: 'email'},
        {name: 'actions', label: 'Actions'},
      ],
    }
  },
  computed: mapState('users', ['editedUserId', 'users']),
  methods: {

    ...mapActions('users', ['deleteUser', 'getUsersFirestore', "deleteUserFirestore"]),
    ...mapMutations("users",['setEditedUserId']),

    goToUser(id) {
      this.$router.push(`/user/Firestore/${id}`)
    },
    deleteUserById(id){
      this.setEditedUserId(id);
      this.deleteUserFirestore(id);
    }
  },
  created() {
    this.getUsersFirestore();
  },
}
</script>

<style scoped>

</style>