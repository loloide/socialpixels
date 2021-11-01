import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, on } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDstHMTKDX10g3A0sv_1kEXqpvdgKONPUE",
  authDomain: "socialpixels-2e86f.firebaseapp.com",
  databaseURL: "https://socialpixels-2e86f-default-rtdb.firebaseio.com/",
  projectId: "socialpixels-2e86f",
  storageBucket: "socialpixels-2e86f.appspot.com",
  messagingSenderId: "514242334673",
  appId: "1:514242334673:web:cb1132c6cf0c2aa0121af0",
  measurementId: "G-MLB27VF9WG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//write
window.database = {};
window.database.writepixel = function(xpos, ypos) {
  const db = getDatabase();
  const postListRef = ref(db, 'pixels');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    x: xpos,
    y:ypos,
    h:hex
  });
  console.log("sent to database")
};

//read
window.database.readpixels = function() {
  console.log("read database")
  const db = admin.database();
  const ref = db.ref('pixels');

  ref.on('value', (snapshot) => {
    console.log(snapshot.val());
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  });
}
