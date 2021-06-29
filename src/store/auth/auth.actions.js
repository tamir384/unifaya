import firestore from '../../middleware/firebase/firestore/videos'



export default {
/// >>>>>>>> GET USER BY ID <<<<<<<<<< ///
    async getUserById({commit}, id) {
        const user = await firestore.getUserById(id);
        commit('setUser', user)
    },
/// >>>>>>>> GET USER BY ID <<<<<<<<<< ///


    /// >>>>>>>> GET THIS LOGGED IN USER <<<<<<<<<< ///
    async getUserId({commit}) {
        const userId = await firestore.getThisUserId();
        commit('setUserId', userId)
    },
    /// >>>>>>>> GET THIS LOGGED IN USER <<<<<<<<<< ///
}