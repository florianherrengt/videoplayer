angular.module('VideoPlayer.templates.home', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("templates/home.tpl.html",
    "<p>test template</p>");
}]);
