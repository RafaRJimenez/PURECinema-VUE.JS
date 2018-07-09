<template>
	<div>
		<div class="container">
			<div class=" login-user">
				<div class="login-title"><h3>¡Conéctate!</h3></div>
				<input class="input-login" type="text" v-model='email' placeholder="Email"><br>
				<input class="input-login" type="password" v-model='password' placeholder="password"><br>
				<button class="connection" v-on:click='signIn'>Login</button>
				<div class="create-account">¿No tienes una cuenta? Tu puedes <router-link :to = "{name:'registerUserLink'}"> <a class = "nav-link router-create" href="">Crear una</a></router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'
	export default {
		name: 'login',
		data: function() {
			return {
				email: '',
				password:''
			}
		},
		methods: {
			signIn: function(){
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.$router.replace('CreateEvent') // when a user is logged he is linked to 'create event' component to start using application
					},
					function(err){
						alert('oops. ' + err.message) // If an error happens whe show the user what's the problem with a specific located message from firebase
					}
					);
			}
		}
	}



</script>

<style>
	h3{
		margin-top: 50px 0;
	}

	.router-create{
		width: 158px;
		margin: 0 auto;
	}

	.login-user{
		text-align: center;
		background-color: #323232;
		color: black;
		border-radius: 5px;
		border: 1px solid black;
		margin-bottom: 90px;
	}

	.login-title{
		margin: 20px 0;
	}

	.input-login{
		margin: 10px 0;
	}

	.connection{
		margin: 10px 0;
		cursor: pointer;
	}
	
	.create-account{
		margin: 25px 0;
	}

</style>