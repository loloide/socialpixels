import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue, child, get } from "firebase/database";

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
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'pixels')).then((pixels) => {
    console.log(pixels.val());
    pixels.forEach(function(pixel) {
      console.log(pixel.val())
      //still needs to draw >:(
      fill(hex);  
      noStroke();
      rect(pixel.val.x, pixel.val.y)
    }
    // for (i in pixels.val()) {
    //   var pixelData = pixels.val(child)
    //   console.log(pixelData)
    // }
    );}
  );}
