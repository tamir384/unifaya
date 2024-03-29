import firebaseInstance from '../../';


async function insertArticle(object) {
    object.id = firebaseInstance.firebase.firestore().collection(`articles`).doc().id;
    await firebaseInstance.firebase.firestore().collection(`articles`).doc(object.id).set(object)
}

async function insertSavedArticle(object) {
   await firebaseInstance.firebase.firestore().collection('users').doc(window.user.uid).collection('savedArticles').doc(object.id).set(object)
}


async function getHoldedArticles() {
    const arr = []
    await firebaseInstance.firebase.firestore().collection('articles').get()
        .then(docs => {
            docs.forEach(doc => {
                arr.push(doc.data())
            });
        });
    return arr;
}

async function getSavedArticles() {
    const arr = []
    await firebaseInstance.firebase.firestore().collection('users').doc(window.user.uid).collection('savedArticles').get()
        .then(docs => {
            docs.forEach(doc => {
                arr.push(doc.data())
            });
        });
    return arr;
}

async function getSpecArticle(Id) {
    const article = {};
    await firebaseInstance.firebase.firestore().collection('articles').doc(Id).get()
        .then(doc => {
            Object.assign(article, doc.data())
        })
    return article;
}

async function deleteArticleById(id) {
    return await firebaseInstance.firebase.firestore().collection('articles').doc(id).delete()
}

async function deleteArticleFromFavoritesById(id){
    return await firebaseInstance.firebase.firestore().collection('users').doc(window.user.uid).collection('savedArticles').doc(id).delete()
}


async function updateArticle(article) {
    return await firebaseInstance.firebase.firestore().collection('articles').doc(article.id).update(article)
}


export default {
    insertArticle,
    insertSavedArticle,
    getHoldedArticles,
    getSavedArticles,
    getSpecArticle,
    deleteArticleById,
    deleteArticleFromFavoritesById,
    updateArticle,
}