import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import {
    faThumbtack, faClipboardCheck, faInfoCircle, faShoppingCart, faSpinner,
    faExclamationCircle, faAngleDoubleUp, faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    ValidationObserver, ValidationProvider, extend, configure, localize,
} from 'vee-validate';
import tw from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueConfirmDialog from 'vue-confirm-dialog';
import message from './components/message-modal.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);
Vue.component('message', message);
/** 表單驗證 */
Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});
configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    },
});
localize('tw', tw);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

library.add(
    faThumbtack, faClipboard, faClipboardCheck, faInfoCircle, faShoppingCart,
    faSpinner, faExclamationCircle, faAngleDoubleUp, faAngleDoubleDown,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Loading, {
    color: '#D3AC2B',
    loader: 'dots',
    width: 64,
    height: 64,
    backgroundColor: '#888888',
    opacity: 0.8,
    zIndex: 999,
});

Vue.filter('cash', (val) => `$${val.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')}`);
Vue.filter('hideText', (text) => ((text.length > 10) ? `${text.substring(0, 9)}...` : text));
Vue.filter('hideDescipt', (text) => ((text.length > 40) ? `${text.substring(0, 39)}...` : text));
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
