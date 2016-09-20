var Vue = require('vue')
var Vuex = require('Vuex')
var App = require('./components/app.vue')
var store = require('./vuex/store')

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
  st.dispatch('setIN', IN)
  IN.API
    .Raw('/people/~:(id,first-name,last-name,positions,interests,publications,patents,languages,skills,date-of-birth,email-address,phone-numbers,im-accounts,main-address,twitter-accounts,headline,picture-url,public-profile-url)')
    .result(function (data) {
      st.dispatch('setMe', data)
    })
});

jsforce.browser.on('connect', function (conn) {
  st.dispatch('setConn', conn)
})
