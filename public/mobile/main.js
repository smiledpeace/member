import Vue from 'vue';
import App from './app';
import vueUtil from '../js/common/vueUtil';
import axios from 'axios';
Vue.use(vueUtil);
require('../styles/mobile/index.less');

const vm = new Vue({
    el: '#app',
    data: {
        type: document.getElementById('type').value || '',
        param1: document.getElementById('param1').value || '',
        param2: document.getElementById('param2').value || '',
        param3: document.getElementById('param3').value || '',
        param4: document.getElementById('param4').value || '',
    },
    components: {
        App
    },
    created() {
        console.log(1234123);
        axios.post('/query/queryData', {a: 123}).then(res => {
            console.log(res);
        })
    }
});