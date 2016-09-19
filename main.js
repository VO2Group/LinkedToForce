var Vue = require('vue')
var Vuex = require('Vuex')
var App = require('./app.vue')
var store = require('./store')

Vue.use(Vuex)

var st = new Vuex.Store(store)

var vm = new Vue({
  el: '#app',
  store: st,
  render: function (h) {
    return h(App)
  }
})

IN.Event.on(IN, 'auth', function () {
  st.dispatch('auth', IN)
});

jsforce.browser.on('connect', function (conn) {
  st.dispatch('connect', conn)
})
