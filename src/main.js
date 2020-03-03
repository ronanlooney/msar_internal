import Vue from 'vue';
import './plugins/axios';
import router from './router/index';
import App from './App.vue';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
