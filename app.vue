<style>
  html {
    background: url(assets/cvvo2.png) no-repeat center center fixed;
    background-size: cover;
  }
  body {
    font-family: 'Teko', sans-serif;
  }
</style>
<template>
  <div>
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
