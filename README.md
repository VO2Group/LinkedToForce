# LinkedToForce

This [Vue.js][1] application creates Salesforce contacts from LinkedIn profiles. The application use the [LinkedIn Javascript SDK][2] to retrieve profile informations and use the [JSForce][3] library for CRUD operations in Salesforce.

## Use npm as build tool

Take a look to [npm scripts][4] defined in [package.json][5] file :

```json
{
  "scripts": {
    "start": "npm run watch & npm run serve",
    "test": "karma start karma.conf.js",
    "build": "browserify -t vueify -o linkedtoforce.js main.js",
    "minify": "uglifyjs -o linkedtoforce.min.js linkedtoforce.js",
    "watch": "watchify -t vueify -o linkedtoforce.js main.js",
    "serve": "browser-sync start -s -f 'index.html,linkedtoforce.js'"
  }
}
```

[1]: https://vuejs.org/ "Vue.js"
[2]: https://jsforce.github.io "JSForce"
[3]: https://developer.linkedin.com/docs/getting-started-js-sdk "LinkedIn"
[4]: https://docs.npmjs.com/misc/scripts "npm scripts"
[5]: package.json
