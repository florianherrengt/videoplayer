require('./lib/angular/angular.min.js');
require('./lib/angular-ui-router/release/angular-ui-router.min.js');
require('./lib/oclazyload/dist/ocLazyLoad.min.js');
require('./templates/home.tpl.js');

angular.module('VideoPlayer', ['ui.router', 'oc.lazyLoad', 'VideoPlayer.templates.home']).config(require('./routes.js'));

require('./js/controllers/HomeCtrl.js');
