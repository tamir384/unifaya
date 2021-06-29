import firebaseInstance from '../'
import 'firebase/storage'


async function uploadFile(options) { // options={file}
    console.log("file:", options.file)

    //Get elements
   await firebaseInstance.firebase.storage().ref(`allPictures/${options.file.name}`)
        .put(options.file);
}


function downloadFiles() {
    let arrOfImages = [];

    // Create a reference under which you want to list
    var listRef = firebaseInstance.firebase.storage().ref(`users/${window.user.uid}/images/`);

// Find all the prefixes and items.
    listRef.listAll()
        .then((res) => {
            console.log(res)
            res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                // arrOfImages.push(itemRef)
                console.log(itemRef.name)
                listRef.child(itemRef.name).getDownloadURL()
                    .then(url => console.log(url))

            });
        });
}

function deleteFiles(item){
    let storage = firebaseInstance.firebase.storage().ref(`users/${window.user.uid}/images/`);
    let deleteRef = storage.child(item);
    deleteRef.delete().then(url => console.log(url));

}


export default {
    uploadFile,
    downloadFiles,
    deleteFiles,
}