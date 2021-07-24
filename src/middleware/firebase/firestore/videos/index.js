import 'firebase/firestore'
import firebaseInstance from '../../index'



async function readVideos(){
    const arr = [];

    return await firebaseInstance.firebase.firestore().collection(`videos`).doc(window.user.uid).collection('{categories}').get()
        .then(docs => {
            docs.forEach(doc => {
                arr.push(doc.data())
                console.log('docs', docs)
                console.log('doc', doc)
            });

            return arr;
        })

}
async function deleteVideo(id) {
    return await firebaseInstance.firebase.firestore().doc(`users/${window.user.uid}/users/${id}`).delete();
}

async function getUserById (options) {
    return await firebaseInstance.firebase.firestore().doc(`users/${window.user.uid}/users/${options.userId}`).get()
        .then(result => {

            return result;
        })
}

function getThisUserId() {
    return localStorage.getItem('uid')
}


async function updateUser(id, user){

    return await firebaseInstance.firebase.firestore().doc(`users/${window.user.uid}/users/${id}`).update(user);
}

function insertCollection(object){


    // object.uid = window.user.uid;
    object.id = firebaseInstance.firebase.firestore().collection(`videos`).doc().id;
    firebaseInstance.firebase.firestore().collection(`videos`).doc(object.id)
       .set(object)
        .then(r => console.log(r, 'SUCCESS'))
         .catch(e => console.log(e,'ERROR'))

}
async function getHoldedVideos(){
const arr = []
           await firebaseInstance.firebase.firestore().collection('videos').get()
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
    readVideos,
    getUserById,
    getThisUserId,
    getHoldedVideos,
    updateUser,
    deleteVideo,
}