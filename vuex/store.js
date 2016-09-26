var state = {
  IN: null,
  meIN: null,
  SF: null,
  meSF: null
}

var mutations = {
  setIN: function (state, IN) {
    state.IN = IN
  },
  setMeIN: function (state, me) {
    state.meIN = me
  },
  setSF: function (state, SF) {
    state.SF = SF
  },
  setMeSF: function (state, me) {
    state.meSF = me
  }
}

module.exports = {
  state: state,
  mutations: mutations
}
