<template>
  <header class="container">
    <nav class = "navbar navbar-toggleable-md navbar-light">
     <div class="goHome"><a href="/" class="navbar-brand link">Inicio</a></div>
      <ul class="nav row">
      
          <router-link :to = "{name:'registerUserLink'}" tag="li"> <a href="#" class="btn btn-danger user-register offset-2 p-3"> ¡Regístrate para crear eventos!</a></router-link>
          <router-link :to = "{name:'registerUserCineLink'}" tag="li"> <a href="#" class="btn btn-danger cine-register offset-2 p-3"> Registro para gerentes de cine</a></router-link>
          <router-link :to = "{name:'loginUserLink'}" class="login-li" tag="li"><a href="#" class="btn login-header"> Login</a> </router-link>
    
      </ul>
    </nav>
  </header>

</template>

<style>
  body {
    background-color: black;
    font-family: 'Russo One', sans-serif;
  }

  header{
  margin-bottom: 20px;
  font-size: 1.5em;
  width: 100%;
  background-color: black;
  }

  .user-register{
    margin-right: 15px;
    background-color: black;
    border: 1px solid #F3BD15;
    color: #F3BD15;
    margin-top: 15px;
  }

  .login-header{
    margin-right: 15px;
    background-color: black;
    border: 1px solid #F3BD15;
    color: #F3BD15;
    margin-top: 15px;
  }

  .login-header:hover{
    color: #F3BD15;
  }


  .login-li{
    margin: 7px 16px;
  }

  .user-register:hover{
   background-color: #FFDF00;
   color: black;
  } 

    .cine-register{
    margin-top: 15px;
    margin-right: 109px;;
    background-color: black;
    border: 1px solid #F3BD15;
    color: #F3BD15;
  }

  .cine-register:hover{
    background-color: #FFDF00;
    color: black;
  } 

  .link{
    margin-left: 15px;
  }


  .goHome{
    color: #FFDF00;
    background-color: #F3BD15;
    width: 96px;
    height: 47px;
    text-align: center;
    vertical-align: middle;  
    border-radius: 5px;
    padding-right: 5px;
  }


</style>