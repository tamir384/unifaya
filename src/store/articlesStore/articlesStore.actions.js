import firestore from '../../middleware/firebase/firestore/articles';


export default {

    insertArticle: async ({}, context) => {
        debugger
       await firestore.insertCollection(context)
            .catch(e => console.error(e))
        debugger;
    },


    getArticlesAC: async ({commit}) => {

        const articles = await firestore.getHoldedArticles();

        commit('setArticles', articles)

    },

    getArticleByIdAC: async ({commit}, articleId) =>{
        const article = await firestore.getSpecArticle(articleId);

        commit('setArticle', article)
        debugger;
    },

    deleteArticle: async ({state, commit},id) => {

        await firestore.deleteArticle(id);

        commit('deleteArticle');

        commit('resetEditedArticleId');

    },


}