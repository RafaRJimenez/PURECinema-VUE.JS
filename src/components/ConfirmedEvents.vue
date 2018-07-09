<template>
  <div>
    <div v-for="film in Films"> <!-- This v-for allow us to iterate each film which we saved in Films array -->
      <div class="films">
      <div id="film">
        <div class="title-confirmed">{{film.Title}}</div>
        <div id="cityDate">{{film.City}} - {{film.Date}} - {{film.Hour}}</div>
        <img id="poster" :src="'https://image.tmdb.org/t/p/w300' + film.Poster"></img>
       <!-- <div id="overview">{{film.Overview}}</div>-->
        <div id="rate" v-model= "film.Rate"></div>
      </div>
    </div>
    </div>

  </div>
 
</template>

<script>
import {dbUsers} from '../firebaseConfig.js';
import {dbEvents} from '../firebaseConfig.js';
import {dbVotedEvents} from '../firebaseConfig.js';
import {dbConfirmedEvents} from '../firebaseConfig.js';
import {db} from '../firebaseConfig.js';
import firebase from 'firebase';

export default {
  data () {
      return {
       Films: []
      }
    },
    created (){ // pushing to the array each film which has finished cinemas biding. 
        dbConfirmedEvents.on('child_added', snapshot=> this.Films.push(snapshot.val()))
    }
    
  }

</script>

<style>
  
  body{
    background-color: black;
  }

  .title-confirmed{
    font-size: 45px;
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

  #films{
    width: 100%;
    margin: 0 auto;
  }
  #film{
    width: 40%;
    border: 1px solid #F3BD15;
    border-radius: 5px;
    float: left;
    font-size: 20px!important;
    text-align: center;
    margin-left: 80px;
    background-color: grey;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  #overview{
    width: 400px;
    float: right;
  }

  #datetime{
    width: 300px;
    height: 50px;
    font-weight: 50px;
  }


</style>