var Vue = require('vue')
var Vuex = require('vuex')
var Linkedin = require('../linkedin.vue')

Vue.use(Vuex)

describe('linkedin.vue', function () {
  it('should render correct', function () {
    var vm = new Vue({
      template: '<div></div>',
      store: new Vuex.Store({
        state: {
          IN: null
        }
      }),
      render: function (h) {
        return h(Linkedin)
      }
    }).$mount()

    var nl = vm.$el.querySelectorAll('a')
    expect(nl.length).toBe(1)
  })
})
