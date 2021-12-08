require('./bootstrap');
require('./helpers');
require('es6-promise').polyfill();

import { Dropdown, Collapse } from 'bootstrap';
import Vue from 'vue'

// Register your components here. Lazy loaded

Vue.component(
    'component-example',
    () => import(
        /* webpackPrefetch: true */
        /* webpackChunkName: "component-example" */
        './Components/ComponentExample.vue'
    )
);

let app = new Vue({
    el: '#app'
})
