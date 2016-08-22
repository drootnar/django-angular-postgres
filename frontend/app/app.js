/* Libs */
require("angular/angular");  
require("angular-route/angular-route");  
require("angular-resource/angular-resource");
require("angular-ui-bootstrap/index");

/* Globals */
_ = require("lodash");  
_urlPrefixes = {  
  API: "api/v1/",
  TEMPLATES: "static/app/"
};

/* Components */
require("./components/home/home");
require("./components/blog/blog");

/* App Dependencies */
angular.module("myApp", [  
  "Home", // this is our component
  "Blog",
  "ngResource",
  "ngRoute",
  "ui.bootstrap"
]);

/* Config Vars */
var routesConfig = require("./routes");

/* App Config */
angular.module("myApp").config(routesConfig); 