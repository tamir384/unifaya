export default {

    setArticles: ((state, articles) => {

        articles.forEach(article => state.articles.push(article));
        state.articles = articles
    } ),

    setArticleId: ((state, id) => state.articleId = id),

    setEditedArticles: ((state, articles) => {
        Object.assign(state.articles, articles);
    }),

    resetEditedArticleId: ((state) => state.articleId = ''),

    resetArticles: ((state) => {
        for (const key in state.article) {
            state.article[key] = '';
        }
    }),

    editArticle: ((state, article) => {
        const index = state.articles.findIndex(p => p.id === article.id)// function (p) {if (p.id === user.id) return indexOf(p))
        state.articles.splice(index, 1, article)
    }),
    deleteArticle: ((state) => {
        const index = state.articles.findIndex(p => p.id === state.articleId)
        state.articles.splice(index, 1)
    }),
    setArticle: ((state, article) => {
        state.article = article;
    })

}
