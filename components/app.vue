<template>
  <div class=app>
    <span>CVVO2</span>
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
  body {
    font-family: 'Teko', sans-serif;
  }
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50px;
  }
</style>
