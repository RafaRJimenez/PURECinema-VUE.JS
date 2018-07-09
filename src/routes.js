import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CreateEvent from "./components/CreateEvent.vue";
import VoteEvent from "./components/VoteEvent.vue";
import RegisterUser from "./components/RegisterUser.vue";
import LoginUser from "./components/LoginUser.vue";
import VotedEvents from "./components/VotedEvents.vue";
import ConfirmedEvents from "./components/ConfirmedEvents.vue";
import RegisterUserCine from "./components/RegisterUserCine.vue";
import Navbar from "./components/Navbar.vue";

export const routes = [
{path:'*', redirect: '/Home'},
{path:'/', redirect: '/Home'},
{path: "/Home", component: Home ,name:"homeLink"},
{path: "/Header", component: Header ,name:"headerLink"},
{path: "/Footer", component: Footer, name:"footerLink"},
{path: "/CreateEvent", component: CreateEvent, name:"createEventLink", meta: {requiresAuth:true}},
{path: "/VoteEvent", component: VoteEvent, name:"voteEventLink", meta: {requiresAuth:true}},
{path: "/RegisterUser", component: RegisterUser, name:"registerUserLink"},
{path: "/LoginUser", component: LoginUser, name:"loginUserLink"},
{path: "/VotedEvents", component: VotedEvents, name:"VotedEventsLink", meta: {requiresAuth:true}},
{path: "/ConfirmedEvents", component: ConfirmedEvents, name:"confirmedEventsLink", meta: {requiresAuth:true}},
{path: "/RegisterUserCine", component: RegisterUserCine, name:"registerUserCineLink"},
{path: "/Navbar", component: Navbar, name:"navbarLink"}
]