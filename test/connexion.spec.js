var Vue = require('vue')
var Vuex = require('vuex')
var Connexion = require('../connexion.vue')
var store = require('../store')

Vue.use(Vuex)

describe('connexion.vue', function () {
  it('should render correct', function () {
    var vm = new Vue({
      template: '<div></div>',
      store: new Vuex.Store(store),
      render: function (h) {
        return h(Connexion)
      }
    }).$mount()

    var nl = vm.$el.querySelectorAll('a')
    expect(nl.length).toBe(1)
  })
})
