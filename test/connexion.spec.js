var Vue = require('vue')
var Vuex = require('vuex')
var Connexion = require('../components/connexion.vue')

Vue.use(Vuex)

var vm = new Vue({
  template: '<div></div>',
  store: new Vuex.Store({
    state: {
      IN: {},
      SF: {}
    }
  }),
  render: function (h) {
    return h(Connexion)
  }
}).$mount()

describe('connexion.vue', function () {
  it('should render correctly', function () {
    var nl = vm.$el.querySelectorAll('button')
    expect(nl.length).toBe(1)
  })
})
