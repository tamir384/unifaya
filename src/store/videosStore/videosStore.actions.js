import firestore from '../../middleware/firebase/firestore/videos';
import database from "../../middleware/firebase/database";


export default {

    insertVideo: async ({state, commit}) => {

        const localUsersId = [];

        const localCategories = [];


        const video = {};

        Object.assign(video, state.editedVideo);


        await firestore.insertVideo(video);


        commit('resetEditedVideo');

        commit('insertVideo', video);
    },



    getHoldedVideos: async ({commit}) => {
// const users = state.videos.
//
//         Object.assign(users)

        const videos = await firestore.getHoldedVideos();

        commit('setVideos', videos)
    },

    deleteVideo: async ({state, commit},id) => {

        await firestore.deleteVideo(id);

        commit('deleteVideo');

        commit('resetEditedVideoId');

    },


}