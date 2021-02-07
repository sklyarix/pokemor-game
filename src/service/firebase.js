import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBm9wUM243Y1VaLI9WmnUaYlg6k-0jO_ho",
    authDomain: "pokemon-game-86f43.firebaseapp.com",
    databaseURL: "https://pokemon-game-86f43-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-86f43",
    storageBucket: "pokemon-game-86f43.appspot.com",
    messagingSenderId: "857743510244",
    appId: "1:857743510244:web:52cc3a5c81f83b51dafaf1"
  };
  
  firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();

export default database;