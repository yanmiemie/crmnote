import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from "element-ui";
import vuetify   from './plugins/vuetify'
// import store     from './plugins/store'
import Print from 'vue-print-nb' 
// import vdnd from 'vue-smooth-dnd'

// import vuedraggable from 'vuedraggable'
Vue.use(Print); //註冊 
// Vue.use(vdnd); //註冊 
// Vue.use(vuedraggable); //註冊 
Vue.config.productionTip = false  

new Vue({
  // store,
  router,
  // draggable,
  vuetify, 
  print,
  render: h => h(App)
}).$mount('#app')