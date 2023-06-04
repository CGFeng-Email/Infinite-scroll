import App from './App';
import Vue from 'vue';

import {
	Button,
	Cell,
	List  
} from 'vant';

Vue.use(Button);
Vue.use(Cell);
Vue.use(List);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
