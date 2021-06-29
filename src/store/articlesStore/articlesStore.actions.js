import firestore from '../../middleware/firebase/firestore/videos';
import database from "../../middleware/firebase/database";


export default {

    insertArticle: async ({state, commit}) => {

        const localArticlesId = [];

        const localCategories = [];


        const article = {};

        Object.assign(article, state.editedArticle);


        await firestore.insertCollection(article);


        commit('resetEditedArticle');

        commit('insertArticle', article);
    },



    getHoldedArticles: async ({commit}) => {
// const users = state.videos.
//
//         Object.assign(users)

        const articles = await firestore.getHoldedArticles();

        commit('setVideos', articles)
    },

    deleteArticle: async ({state, commit},id) => {

        await firestore.deleteArticle(id);

        commit('deleteArticle');

        commit('resetEditedArticleId');

    },


}