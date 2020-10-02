import { createApp} from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import Router from './router'

import "./assets/js/bootstrap.min.js";


/*new Vue({
	router,
	  render: h => h(App)
}).$mount('#app')
*/
createApp(App)
	.use(Router)
	.mount('#app');
