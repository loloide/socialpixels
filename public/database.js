import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, child, get } from "firebase/database";

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

//write database
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

//read database
window.database.readpixels = function() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'pixels')).then((pixels) => {
    //log pixels information
    console.log(pixels.val());
    //get individual pixels
    pixels.forEach(function(pixel) {
      var pixelData = pixel.val();
      console.log("Got from database: " + pixelData.x + "," + pixelData.y + "," + pixelData.h)
      fill(pixelData.h)
      noStroke()
      rect(pixelData.x, pixelData.y, 1, 1)
    }
    );}
  );}
