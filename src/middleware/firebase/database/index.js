import firebaseInstance from '../'
import database from 'firebase/database'


function getRef(options){
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`);
}

function read(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`).once('value')
        .then(res => {
            const arr = [];
            const map = res.val();
            for (const key in map){
                const user = map[key];
                user.id = key;
                arr.push(user)
            }
            return arr;
        });
}

function create(options){
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`).push(options.user)
}

function deleteVideo(options) {
    return firebaseInstance.firebase.database().ref(`videos/${options.id}`).remove()
        .then(result => {
            return result
        });
}
function updateUser (options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}/${options.id}`).set(options.user)
        .then(result => {
            console.log('resultUpdate: ', result);
            return result
        });
}

function getUserById (options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}/${options.id}`).once('value')
        .then(result => {
            return result.val();
        })
}

export default {
    read,
    create,
    deleteVideo,
    updateUser,
    getUserById,
    getRef,
}