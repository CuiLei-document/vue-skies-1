import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import '@/assets/icons';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.onload = () => {
    setTimeout(() => {
        window.scrollTo(0, 100);
    }, 1000);
};

const width  = document.documentElement.clientWidth;
if(width > 500) {
    window.alert('请扫描二维码，手机观看最佳效果')
    const img = document.createElement('img');
    img.src = './skies.png';
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%,-50%)';
    img.style.boxShadow = '0 3px 3px rgba(0,0,0,0.2)';
    document.body.appendChild(img)
}