videoplayer
===========
Thanks to browserify, build.js is generated with all files needed for mains app features (including HTML files)
When the user opening the app for the first time, the browser doing only 2 requests (index.html + build.js)
Then build.js is stored in localstorage for instant load next time.
Once the user is back, it's checking if build.js has to be update.
All features most users needs should be in build.js. 
Others features are lazy loaded with ocLazyLoad.
