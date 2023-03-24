
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  
  import {getDatabase} from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.13.0/firebase-database.js';

  const firebaseConfig = {
    apiKey: "AIzaSyAyOMDyVttiMBG1yTRVEiRmbV8p0TKk9NM",
    authDomain: "webs-94f49.firebaseapp.com",
    databaseURL: "https://webs-94f49-default-rtdb.firebaseio.com",
    projectId: "webs-94f49",
    storageBucket: "webs-94f49.appspot.com",
    messagingSenderId: "642610742924",
    appId: "1:642610742924:web:80d217ce89d56ee1c49da9",
    measurementId: "G-8JZ8744C0B"
  };



  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  export {db};
 

 
