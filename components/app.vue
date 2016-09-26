<template>
  <div class=app>
    <h1>CVVO2</h1>
    <linkedin></linkedin>
    <salesforce></salesforce>
    <connexion></connexion>
    <injection></injection>
  </div>
</template>
<script>
  var Linkedin = require('./linkedin.vue')
  var Salesforce = require('./salesforce.vue')
  var Connexion = require('./connexion.vue')
  var Injection = require('./injection.vue')

  module.exports = {
    components: {
      linkedin: Linkedin,
      salesforce: Salesforce,
      connexion: Connexion,
      injection: Injection
    }
  }
</script>
