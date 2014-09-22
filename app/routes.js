module.exports = function ($stateProvider, $urlRouterProvider) {
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
						name: 'VideoPlayer',
						files: ['js/controllers/ProductsCtrl.js']
					});
				}
			]
		}
	});
};
