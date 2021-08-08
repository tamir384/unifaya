import firestore from '../../middleware/firebase/firestore/articles';


export default {

    insertArticle: async ({}, context) => {
        await firestore.insertArticle(context)
            .catch(e => console.error(e))
    },

    saveArticleAC: async ({}, context) => {
        await firestore.insertSavedArticle(context)
            .catch(e => console.error(e))
    },


    getArticlesAC: async ({commit}) => {

        const articles = await firestore.getHoldedArticles();

        commit('setArticles', articles)

    },

    getSavedArticlesAC: async ({commit}) => {

        const articles = await firestore.getSavedArticles();

        commit('setArticles', articles)
    },

    getArticleByIdAC: async ({commit}, articleId) => {
        const article = await firestore.getSpecArticle(articleId);

        commit('setArticle', article)
    },

    deleteArticle: async ({state, commit}, id) => {

        await firestore.deleteArticleById(id);

        commit('deleteArticle');

        commit('resetEditedArticleId');

    },
    deleteArticleFromFavorites: async ({state, commit}, id) => {

        await firestore.deleteArticleFromFavoritesById(id);

        commit('deleteArticle');

        commit('resetEditedArticleId');
    },

    updateArticle: async ({state, commit}, article) => {

        await firestore.updateArticle(article);

        commit('editArticle')
    },


}