var state = {
  linkedin: false,
  salesforce: false
}

var mutations = {
  onLinkedin: function (state, status) {
    state.linkedin = status
  },
  onSalesforce: function (state, status) {
    state.salesforce = status
  }
}

module.exports = {
  state: state,
  mutations: mutations
}
