export default {

    setArticles: ((state, articles) => state.articles = articles),

    setEditedArticlesId: ((state, id) => state.editedArticlesId = id),

    setEditedArticles: ((state, article) => {
        debugger;
        Object.assign(state.editedArticle, article)
    }),

    resetEditedArticlesId: ((state) => state.resetEditedArticlesId = ''),

    resetEditedArticles: ((state) => {
        for (const key in state.editedArticle) {
            state.editedArticle[key] = '';
        }
        if (state.editedArticle.id) {
            delete state.editedArticle.id;
        }
    }),

    editArticle: ((state, article) => {
        const index = state.articles.findIndex(p => p.id === article.id)// function (p) {if (p.id === user.id) return indexOf(p))
        state.articles.splice(index, 1, article)
    }),
    deleteArticle: ((state) => {
        const index = state.articles.findIndex(p => p.id === state.editedArticleId)
        state.articles.splice(index, 1)
    }),
    insertArticle: ((state, article) => {
        state.articles.push(article)
    })

}
