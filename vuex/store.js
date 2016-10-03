var state = {
  IN: null,
  SF: null,
  me: null,
  me2: null
}

var mutations = {
  setIN: function (state, IN) {
    state.IN = IN
  },
  setSF: function (state, SF) {
    state.SF = SF
  },
  setMe: function (state, me) {
    state.me = me
  },
  setMe2: function (state, me) {
    state.me2 = me
  }
}

module.exports = {
  state: state,
  mutations: mutations
}
