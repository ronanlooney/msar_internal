import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/PropertyCard.vue';
import Incidents from '../components/Incidents.vue';
import Users from '../components/Users.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/Incidents',
  component: Incidents,
}, {
  path: '/Users',
  component: Users,
}];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
