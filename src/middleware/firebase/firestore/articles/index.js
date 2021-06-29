import 'firebase/firestore'
import firebaseInstance from '../../index'



async function readArticles(){
    const arr = [];

    return await firebaseInstance.firebase.firestore().collection(`articles`).doc(window.user.uid).collection('{categories}').get()
        .then(docs => {
            debugger;
            docs.forEach(doc => {
                arr.push(doc.data())
                console.log('docs', docs)
                console.log('doc', doc)
            });

            return arr;
        })

}
async function deleteArticle(id) {
    return await firebaseInstance.firebase.firestore().doc(`articles/${window.user.uid}/users/${id}`).delete();
}

async function getArticleById (options) {
    return await firebaseInstance.firebase.firestore().doc(`articles/${window.user.uid}/users/${options.userId}`).get()
        .then(result => {

            return result;
        })
}

function getThisUserIdArticles() {
    return localStorage.getItem('uid')
}


async function updateArticle(id, user){

    return await firebaseInstance.firebase.firestore().doc(`articles/${window.user.uid}/users/${id}`).update(user);
}

function insertCollection(object){


    // object.uid = window.user.uid;
    object.id = firebaseInstance.firebase.firestore().collection(`articles`).doc().id;
    debugger
    firebaseInstance.firebase.firestore().collection(`articles`).doc(object.id)
       .set(object)
        .then(r => console.log(r, 'SUCCESS'))
         .catch(e => console.log(e,'ERROR'))

}
async function getHoldedArticles(){
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

async function approveVideos(){

}

export default {
    insertCollection,
    readArticles,
    getArticleById,
    getThisUserIdArticles,
    getHoldedArticles,
    updateArticle,
    deleteArticle,
}