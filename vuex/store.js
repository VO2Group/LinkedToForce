var state = {
  IN: null,
  me: null,
  conn: null,
  res: null
}

var mutations = {
  setIN: function (state, IN) {
    state.IN = IN
  },
  setMe: function (state, me) {
    state.me = me
  },
  setConn: function (state, conn) {
    state.conn = conn
  },
  setRes: function (state, res) {
    state.res = res
  }
}

module.exports = {
  state: state,
  mutations: mutations
}
