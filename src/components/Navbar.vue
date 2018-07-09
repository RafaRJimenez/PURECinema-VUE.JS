
<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light navbar-edit">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to = "{name:'createEventLink'}" class="event-li" tag="li"> <a class = "nav-link nav-edit" href="">Crea un evento</a></router-link>
      </li>
      <li class="nav-item">
         <router-link :to = "{name:'voteEventLink'}" tag="li"> <a class = "nav-link" href="">Únete a un evento!</a></router-link>
      </li>
      <li class="nav-item">
         <router-link :to = "{name:'VotedEventsLink'}" tag="li"> <a class = "nav-link" href="">Eventos en subasta</a></router-link>
      </li>
      <li class="nav-item">
         <router-link :to = "{name:'confirmedEventsLink'}" tag="li"> <a class = "nav-link" href="">Eventos confirmados</a></router-link>
      </li>
      <li class="nav-item">
        <a v-on:click='logout' class="nav-link disabled logout-li"  href="#">CERRAR SESIÓN</a>
      </li>
    </ul>
  </div>
</nav>    

        	</div>
</template>

<script>



import axios from 'axios';
import firebase from 'firebase';
var database;

export default {
  data() {
    return {
    }
  },
  methods:{
    logout: function() {
      firebase.auth().signOut().then(() =>{
        this.$router.replace('Login');
      })
    }
  }
}
</script>

<style>

  body{
      background-color: black;
  }
  
  .wallpaper{
    width: 100%;
    height: 800px;
  }
  
  .navbar-edit{
    background-color: #323232!important;
    color: #F3BD15!important;
    margin: 50px!important;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle; 
  }

  .nav-link{
    color: #F3BD15!important;
    border-right: 1px solid #F3BD15;
    border-left: 2px solid #F3BD15;
  }

  .logout-li{
    margin-right: 70px;
  }

  .event-li{
    margin-left:69px;
  }


</style>