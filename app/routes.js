module.exports = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider.state("home", {
		url: "/home",
		// templateUrl: "templates/home.tpl.html",
		templateUrl: 'templateId.html',
		controller: 'HomeCtrl'
	});
};
