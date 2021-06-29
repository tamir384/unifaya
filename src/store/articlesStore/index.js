import state from './articlesStore.state'
import mutations from './articlesStore.mutations'
import actions from './articlesStore.actions'
import getters from './articlesStore.getters'

export default {
    namespaced: true,
    state, actions, mutations, getters,
}