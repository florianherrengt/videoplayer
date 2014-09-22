angular.module('VideoPlayer').controller('HomeCtrl', function ($scope) {
	var video = document.getElementsByTagName('video')[0];
	video.addEventListener("timeupdate", function () {
		var time, hrs, mins, secs, ret;
		time = video.currentTime.toFixed(0);

    hrs = ~~ (time / 3600);
		mins = ~~ ((time % 3600) / 60);
		secs = time % 60;

		ret = "";

		if (hrs > 0)
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");

		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		console.log(ret);
	}, false);
});
