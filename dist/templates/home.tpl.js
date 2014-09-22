angular.module('VideoPlayer.templates.home', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("templates/home.tpl.html",
    "<video width=320 height=240 controls><source src=http://cdn.adjustyourset.tv/1/5704/5704_1_Savile-Row-Inspired-The-Collection.mp4 type=video/mp4>Your browser does not support the video tag.</source></video>");
}]);
