import Firebase from "firebase";

var config = {
    apiKey: "AIzaSyADi5IpHojGBzX8g9cKqAg5-oqQ9M8Qu_Y",
    authDomain: "proyecto-48ea4.firebaseapp.com",
    databaseURL: "https://proyecto-48ea4.firebaseio.com",
    projectId: "proyecto-48ea4",
    storageBucket: "proyecto-48ea4.appspot.com",
    messagingSenderId: "767586985441"
  };

  //Initializing Firebase and exporting every path of databases to work with them

 const firebaseApp = Firebase.initializeApp(config);
 const db = firebaseApp.database();
 export {db};
 export const dbEvents = db.ref("events");
 export const dbVotedEvents = db.ref("VotedEvents");
 export const dbConfirmedEvents = db.ref("ConfirmedEvents");
 export const dbUsers = db.ref("Users");
 export {firebaseApp};