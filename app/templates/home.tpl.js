angular.module('templates-dist', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("templates/home.tpl.html",
    "test template");
}]);
