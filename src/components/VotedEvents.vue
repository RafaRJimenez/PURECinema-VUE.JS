<template>
  <div>
    <div class="container">
    <div class="row film text-center" v-for="film in Films">
      <div class="single col-md-8 text-center col-md-offset-4">
        <div class="title" id="title">{{film.Title}}</div>
         <div class="dateCity" v-model="film.Date">{{film.City}} - {{film.Date}} - {{film.Hour}}</div>
        <img class="poster" id="poster" :src="'https://image.tmdb.org/t/p/w300' + film.Poster"></img>
       <!--<div class="overview" id="overview">{{film.Overview}}</div>-->
       <div class="rate-voted">{{film.Rate}}</div>
        <input class="bid" id="bid" v-model="film.Bid"> Puja actual </input>
        <nav class="biding">
          <ul>
            <li v-on:click='biding(film, 5)'> +5 €</li>
            <li v-on:click='biding(film, 10)'> +10 €</li>
            <li v-on:click='biding(film, 20)'> +20 €</li> 
          </ul>
      </nav>
     
      </div>
    </div>
  </div>
  </div>
 
</template>

<script>
import {dbEvents} from '../firebaseConfig.js';
import {dbVotedEvents} from '../firebaseConfig.js';
import {db} from '../firebaseConfig.js';
import firebase from 'firebase';
import {dbUsers} from '../firebaseConfig.js';
import {router} from "../main.js";
import {dbConfirmedEvents} from '../firebaseConfig.js';
//dbEvents.on('child_added', snapshot=> this.Film.push(snapshot.val()))

export default {

	/*

	Here were are in biding place of application, so just cinema's user can use this component, 
	to prevent it we are checking the user role to either let him come inside or link him to 'home'

	 */

 beforeCreate(){
  var user = firebase.auth().currentUser.uid;
  dbUsers.orderByChild("id").equalTo(user).on("value", function(snapshot) {
   	 snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        var role = childData.role;
        if (role!="Cine"){
             alert("NO ESTÁS AUTORIZADO PARA VER ESTE CONTENIDO, SERÁS REDIGIRIDO")
             router.go(0);
        } else {
        }
   	 });
   });
 },
  data () {
      return {
       Films: [],
      }
    },
    created (){
    	
    	/* after call the firebase database, we are pushing to the array 'Films' the films 
    	which got 100 votes from users, so they are ready to start their bid.

    	*/

        dbVotedEvents.on('child_added', snapshot=> this.Films.push(snapshot.val()));
    },
    updated(){

    	/* Now we are checking the date of each film, so if it is the same as the actual date they are removed from the array 'Films' and therefore they are removed from user frontend view */

       this.Films.forEach(function(film, index, object) {
            var date = day();
            if (date == film.Date){
                object.splice(index, 1);
            }
        });
      today();

      // after removing from our actual array, we iterate each film from the database to check the date and add the film to the new database 'confirmedEvents' if this is needed, at the same time we remove the film from its actual dabatase 'votedEvents'

      function today(){
          var todayDate = day();
           dbVotedEvents.orderByChild("Date").equalTo(todayDate).on("value", function(snapshot) {
           snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var currentRef = db.ref('VotedEvents/' + key);
            currentRef.remove();
            var childData = childSnapshot.val();
            dbConfirmedEvents.push(childData);
            var name = childData.Title;
           });
        });
      };
      
      function day(){
         var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; 
          var yyyy = today.getFullYear();
          if(dd<10){
            dd='0'+dd;
          } 
          if(mm<10){
          mm='0'+mm;
         } 
         var todayDate = dd+'/'+mm+'/'+yyyy;
         return todayDate;
      }
    },

    /* Through the method 'biding' we allow the users cinema to raise the bid, it is 
    updated to the frontend through the array and to the single event database too, so each film is saving only the higest bid */

    methods: {
          biding: function(film, bid){
            film.Bid = film.Bid + bid;
            dbVotedEvents.child(film.id).child("Bid").set(film.Bid);
    	  } ,
    }
}



</script>

<style>

    .biding{

      margin-left: 240px;
    }

    .biding ul li {
       list-style-type: none; 
       border: 1px solid black;
       float: left;
       cursor: pointer;
       padding: 5px;
    }

    .bid{
      width: 50px;
      text-align: center;
    }

    .single{
    margin-left: 140px;
    margin-bottom: 30px;
    }


  .film{
    border: 1px solid #F3BD15;
    color: black;
    background-color: #6A6A6A;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 25px;
  }

  .rate-voted{
    margin-right: 40px;
    color: #6A6A6A;
  }

  
</style>