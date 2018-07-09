import Vue from 'vue'
import VueRouter from "vue-router"
import {routes} from "./routes.js";
import App from './App.vue';
import firebase from 'firebase';
import {dbUsers} from './firebaseConfig.js';

Vue.use(VueRouter);

const router = new VueRouter({
routes,
mode: "history" // To remove # from routes

});

export{router};


// Checking where is going each user, and routing when they are not logged or don't have access

router.beforeEach((to, from, next) =>{
	let currentUser = firebase.auth().currentUser;
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('Home');
	else if (!requiresAuth && currentUser) next('Home');
	else next();
});


export default router




new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

/*

let app;

export default router

firebase.auth().onAuthStateChanged(function(user){
  	if (!app){
  		app = new Vue({
  		el: '#app',
  		router,
  		render: h => h(App),
		})
  	}

  	});
*/