<template>
  <div>
    <div v-for="film in Films">
      <div class="films">
      <div class="show-film">
        <div id="title">{{film.Title}}</div>
        <div id="cityDate">{{film.City}} - {{film.Date}} - {{film.Hour}}</div>
        <img id="poster" :src="'https://image.tmdb.org/t/p/w300' + film.Poster"></img>
       <!-- <div id="overview">{{film.Overview}}</div>-->
        <div class="rate-vote-event" v-model= "film.Rate"></div>
        <div id="votes">Votos: {{film.Votes}}</div>
        <div class ="addVotes" v-on:click='voteEvent(film)'>Quiero ir a este evento</div>
      </div>
    </div>
    </div>

  </div>
 
</template>

<script>
import {dbUsers} from '../firebaseConfig.js';
import {dbEvents} from '../firebaseConfig.js';
import {dbVotedEvents} from '../firebaseConfig.js';
import {db} from '../firebaseConfig.js';
import firebase from 'firebase';
//dbEvents.on('child_added', snapshot=> this.Film.push(snapshot.val()))

export default {
  data () {
      return {
       Films: []
      }
    },

    	// Pushing to the array all the events which have been built by the users, to start their votation

    created (){
        dbEvents.on('child_added', snapshot=> this.Films.push(snapshot.val()))
    },


    	/* The method 'voteEvent' is in charge of the votation system of the events. It includes add a new vote from each user if they are interested in it, so the 'forEach' bucle check all users that are included to the event, if they are inside the vote is not included, if they don`t the vote is added to the fronted from the array and updated in the database. 
		*/
		

    methods: {
          voteEvent: function(film){
            dbEvents.child(film.id).child("Votes").set(parseInt(film.Votes)+1);
            film.Votes ++;
            var check = "none";
            var currentRef = db.ref('events/' + film.id);
            var user = firebase.auth().currentUser.uid;
            db.ref("events/"+ film.id +"/users").once("value", function(snapshot) {
            	snapshot.forEach(function(childSnapshot) {
               		var key = childSnapshot.key;
            		var childData = childSnapshot.val();
            		if (childData == user){
              		check = "created";
               		dbEvents.child(film.id).child("Votes").set(parseInt(film.Votes)-1);
               		film.Votes--;
            		} 
           		 });
          	});

            	/*
    			Finally we check if the event has received 100 votes, in that case we update everything again and move the event from 'voteEvent' database to 'votedEvents'.
    			*/

              if (check == "none"){
                var currentRef = db.ref('events/' + film.id +'/users');
             	 currentRef.push(user);
           	 		if (film.Votes == 100){
               			 var currentRef = db.ref('events/' + film.id);
                		 currentRef.remove();
               		     this.Films.splice(this.Films.indexOf(film), 1);
                         var myRef = db.ref().push().getKey();
                         film.id= myRef;
                         dbVotedEvents.child(myRef).set(film);
                    }
                    else {
                       alert("Ya estás apuntado a este evento!!");
                    }
   			  }	
          }
    }
    
}

</script>

<style>
  
  body{
    background-color: black;
  }

  #addVotes{
    margin: 50px 200px 50px 0;
    float: none;
    height: 400px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  #votes{
    width: 70px;
    text-align: center;
    height: 40px;
    margin: 20px auto;
  }

  #cityDate{
    color: #282828;
  }
 /*
  #overview{
    font-size: 15px!important;
    margin: 20px 45px 20px;
    padding: 50px 0;
    border-bottom: 1px solid yellow;
  }
  */
  #films{
    width: 100%;
    margin: 0 auto;
  }
  .show-film{
    width: 40%;
    border: 1px solid #F3BD15;
    border-radius: 5px;
    float: left;
    font-size: 20px!important;
    text-align: center;
    margin-left: 80px;
    background-color: grey;
    margin-bottom: 20px;
  }

  #overview{
    width: 400px;
    float: right;
  }

  .rate-vote-event{
    float: right;
    width: 140px;
    height: 30px;
    position: absolute;
    font-weight: 50px;
    margin: -31px 525px;
  }
  
  #datetime{
    width: 300px;
    height: 50px;
    font-weight: 50px;
  }

  .addVotes{
    color: #F3BD15;
    width: 100px;
    height: 50px;
    background-color: black;
    margin: 40px auto;
    font-size: 15px;
    padding-top: 2px;
    border-radius: 5px;
    cursor: pointer;
  }

</style>