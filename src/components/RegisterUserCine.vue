<template>
	<div class="container">
		<div class="row text-center register">
			<div class="sign-up text-center col-md-5">
				<p>Rellena los datos para crear una nueva cuenta!</p>
				<input type='text' v-model='email' placeholder="Email"><br>
				<input type='password' v-model='password' placeholder="Password"><br>
				<button v-on:click='signUp'>¡Regístrate!</button>
				<div> Vuelve a Login si ya tienes una cuenta creada: <router-link :to = "{name:'loginUserLink'}"><a class = "login nav-link" href="">Login</a> </router-link></div>
			</div>
		</div>	
	</div>
</template>

<script>
import {dbUsers} from '../firebaseConfig.js';
import firebase from 'firebase';
export default {
	name: 'signUp',
	data: function() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {

		/* In this case, we are setting a different role to user (cine), 
         this component is built to let clear to cinemas they are an important side of the application, so they can find their registration button standing out in header */

		signUp: function(){
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				 (user) => {
				 	 let newUser = {
          					email: this.email,
          					role: "Cine", 
          					id: firebase.auth().currentUser.uid
        				}
         					dbUsers.push(newUser);
					this.$router.replace('CreateEvent')
				},
				function (err) {
					alert('ooops. ' + err.message)
				}
				);
		}		




	}
}
</script>

<style>
span {
	margin-top: 280px;
}

.register{
	background-color: #323232;
	width: 800px;
	margin: 0 auto;
	border-radius: 25px;
	border: 1px solid #F3BD15;
	color: black;
	margin-bottom: 30px;
}

.sign-up{
	margin: 0 auto;
}

.sign-up input {
	margin: 10px 0;
}

.sign-up button {
	margin-bottom: 20px;
	margin-top: 20px;
	cursor: pointer;
}

.sign-up p {
	margin-top: 30px;
}

.login {
	margin-top: 20px;
	margin-bottom: 10px;
	border-top: 3px solid #F3BD15;
	border-bottom: 3px solid #F3BD15;
	border-right: none;
	border-left: none;
}
	
</style>