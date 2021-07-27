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

async function getSpecArticle(Id) {
    const article = {};
    await firebaseInstance.firebase.firestore().collection('articles').doc(Id).get()
        .then(doc => {
            Object.assign(article, doc.data())
        })
    return article;
}

async function deleteArticleById(id){
     return await firebaseInstance.firebase.firestore().collection('articles').doc(id).delete()
}


export default {
    insertCollection,
    getHoldedArticles,
    getSpecArticle,
    deleteArticleById,
}