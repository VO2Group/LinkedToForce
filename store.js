var state = {
  IN: null,
  conn: null
}

var mutations = {
  auth: function (state, IN) {
    state.IN = IN
  },
  connect: function (state, conn) {
    state.conn = conn
  }
}

module.exports = {
  state: state,
  mutations: mutations
}
