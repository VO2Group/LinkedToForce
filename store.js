var state = {
  IN: null,
  me: null,
  conn: null
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
  }
}

module.exports = {
  state: state,
  mutations: mutations
}
