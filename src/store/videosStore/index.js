import state from './videosStore.state'
import mutations from './videosStore.mutations'
import actions from './videosStore.actions'
import getters from './videosStore.getters'

export default {
    namespaced: true,
    state, actions, mutations, getters,
}