var Vue = require('vue')
var Vuex = require('vuex')
var Linkedin = require('../linkedin.vue')
var store = require('../store')

Vue.use(Vuex)

describe('linkedin.vue', function () {
  it('should render correct', function () {
    var vm = new Vue({
      template: '<div></div>',
      store: new Vuex.Store(store),
      render: function (h) {
        return h(Linkedin)
      }
    }).$mount()

    var nl = vm.$el.querySelectorAll('button')
    expect(nl.length).toBe(1)
  })
})
