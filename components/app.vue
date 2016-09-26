<template>
  <div class=app>
    <h1>LinkedToForce</h1>
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
<style>
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
</style>
