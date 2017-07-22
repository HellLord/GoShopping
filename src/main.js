/**
 * Created by Fairlady on 2017/07/22.
 */
import Vue from 'vue';
import App from './App.vue';

import './static/css/mui.min.css';
import './static/mui.min.js';
import mint from 'mint-ui';
Vue.use(mint);
import '../node_modules/mint-ui/lib/style.css';
import './static/css/main.css'



new Vue({
    el:'#view',
    render:function (created){
        return created(App)
    }
});