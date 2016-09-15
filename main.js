var Vue = require('vue')
var Vuex = require('Vuex')
var App = require('./app.vue')
var store = require('./store')

Vue.use(Vuex)

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  render: function (h) {
    return h(App)
  }
})

jsforce.browser.on('connect', function (conn) {
  console.log(conn)
})
