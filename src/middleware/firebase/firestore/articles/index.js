import firebaseInstance from '../../';


 async function insertCollection(object) {
    object.id = firebaseInstance.firebase.firestore().collection(`articles`).doc().id;
   await firebaseInstance.firebase.firestore().collection(`articles`).doc(object.id).set(object)
}

async function getHoldedArticles() {
    const arr = []
    await firebaseInstance.firebase.firestore().collection('articles').get()
        .then(docs => {
            docs.forEach(doc => {
                arr.push(doc.data())
            });
            console.log(arr);
        });
    return arr;
}

async function getSpecArticle(articleId) {
    const article = {};
    await firebaseInstance.firebase.firestore().collection('articles').doc(articleId).get()
        .then(doc => {
            Object.assign(article, doc.data())
        })
    return article;
}


export default {
    insertCollection,
    getHoldedArticles,
    getSpecArticle,
}