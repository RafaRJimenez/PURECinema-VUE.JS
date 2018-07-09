<template>
<div>
	<div class="container-fluid p-0">
   		 <img class = "wallpaper" src="../assets/media/fondoDEF.jpg">
	</div>    
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
        this.$router.replace('Login')
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


</style>