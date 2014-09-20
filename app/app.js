require('./lib/angular/angular.min.js');
require('./lib/angular-ui-router/release/angular-ui-router.min.js');
// require('./templates/home.tpl.js');
// angular.module('templates-dist', []).run(['$templateCache',
// 	function ($templateCache) {
// 		$templateCache.put("templates/home.tpl.html",
// 			"test template");
// 	}
// ]);
angular.module('VideoPlayer', ['ui.router', 'templates-dist']).config(require('./routes.js'));
