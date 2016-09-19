var Vue = require('vue')
var Vuex = require('vuex')
var Connexion = require('../connexion.vue')

Vue.use(Vuex)

describe('connexion.vue', function () {
  it('should render correct', function () {
    var vm = new Vue({
      template: '<div></div>',
      store: new Vuex.Store({
        state: {
          IN: true,
          conn: true
        }
      }),
      render: function (h) {
        return h(Connexion)
      }
    }).$mount()

    var nl = vm.$el.querySelectorAll('a')
    expect(nl.length).toBe(1)
  })
})
