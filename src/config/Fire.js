import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAEatFGkHlRRpadLFkP8fVm6VNVIdbKtMw",
    authDomain: "mttn-e5c32.firebaseapp.com",
    databaseURL: "https://mttn-e5c32.firebaseio.com",
    projectId: "mttn-e5c32",
    storageBucket: "mttn-e5c32.appspot.com",
    messagingSenderId: "795528555576",
    appId: "1:795528555576:web:6299aa0af53fdf23ad4acd",
    measurementId: "G-0T235P4T49"
  };
  
  const fire=firebase.initializeApp(firebaseConfig);
export default fire;