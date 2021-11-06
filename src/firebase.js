import * as firebase from "firebase";
import "firebase/database";

// let config = {
//   apiKey: "xxx",
//   authDomain: "bezkoder-firebase.firebaseapp.com",
//   databaseURL: "https://bezkoder-firebase.firebaseio.com",
//   projectId: "bezkoder-firebase",
//   storageBucket: "bezkoder-firebase.appspot.com",
//   messagingSenderId: "xxx",
//   appId: "xxx",
// };

// let config = { 
//   apiKey: "AIzaSyBfGRf3rz_p6R21JDLYjpYjXjwKrLaHb8c",
//   authDomain: "nm-tayal.firebaseapp.com",
//   databaseURL: "https://nm-tayal-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "nm-tayal",
//   storageBucket: "nm-tayal.appspot.com",
//   messagingSenderId: "816237299811",
//   appId: "1:816237299811:web:507e570a2200ce90dd1056",
//   measurementId: "G-FD3QSMYTP3"
// };


let config = { 
  apiKey: "AIzaSyDoQE54LLeT_NMPBSWPpLAG16xxI89aru0",
  authDomain: "yanmieemie.firebaseapp.com",
  projectId: "yanmieemie",
  storageBucket: "yanmieemie.appspot.com",
  messagingSenderId: "674535492026",
  appId: "1:674535492026:web:62778440a5b208d52ef583"

  // apiKey: "AIzaSyCkm291w41Hh9ST_mLd3b-oxR1f3Sjd8gY",
  // authDomain: "h2fnote.firebaseapp.com",
  // databaseURL: "https://h2fnote-default-rtdb.firebaseio.com",
  // projectId: "h2fnote",
  // storageBucket: "h2fnote.appspot.com",
  // messagingSenderId: "813097034040",
  // appId: "1:813097034040:web:519e3cc628d721f42661cd",
  // measurementId: "G-DNG7BEFMTW"
};

firebase.initializeApp(config);

export default firebase.database();
