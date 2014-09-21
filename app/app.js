require('./lib/angular/angular.min.js');
require('./lib/angular-ui-router/release/angular-ui-router.min.js');
require('./lib/oclazyload/dist/ocLazyLoad.min.js');
require('./templates/home.tpl.js');

angular.module('VideoPlayer', ['ui.router', 'oc.lazyLoad', 'VideoPlayer.templates.home']).config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider.state("home", {
		url: "/home",
		templateUrl: 'templates/home.tpl.html',
		controller: 'HomeCtrl'
	}).state("products", {
		url: "/products",
		templateUrl: 'templates/products.tpl.html',
		controller: 'ProductsCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad',
				function ($ocLazyLoad) {
					return $ocLazyLoad.load({
						name: 'app',
						files: ['js/controllers/ProductsCtrl.js']
					});
				}
			]
		}
	});
});

require('./js/controllers/HomeCtrl.js');
