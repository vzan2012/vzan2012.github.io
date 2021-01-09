/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/resume.css",
    "revision": "c2836e579b6c03fb301e4977f79d31c1"
  },
  {
    "url": "css/resume.min.css",
    "revision": "17ef5324755f820addd39362aa9baf2c"
  },
  {
    "url": "img/favicons/apple-touch-icon-114x114.png",
    "revision": "c2c8cd5eeecede4ce5ed2aa437bbf2df"
  },
  {
    "url": "img/favicons/apple-touch-icon-120x120.png",
    "revision": "61f61fba4d72d09a558cf5605d0ba426"
  },
  {
    "url": "img/favicons/apple-touch-icon-144x144.png",
    "revision": "d4869a220f7a05fea76b47531e224961"
  },
  {
    "url": "img/favicons/apple-touch-icon-60x60.png",
    "revision": "98574b678dfc98ab2d2fd9cabe0fe8d5"
  },
  {
    "url": "img/favicons/apple-touch-icon-76x76.png",
    "revision": "5625be981344221c1a9babe690a3b113"
  },
  {
    "url": "img/favicons/apple-touch-icon.png",
    "revision": "62e358e69cc6abe560fd54801ea02470"
  },
  {
    "url": "img/favicons/favicon-144.png",
    "revision": "34491c57bcf8bc5d8ace8b6eaff00e13"
  },
  {
    "url": "img/favicons/favicon-192.png",
    "revision": "8404a5cb61b91de9fb5b2723151bae92"
  },
  {
    "url": "img/favicons/favicon-196.png",
    "revision": "4e6f8d41ba6c71c2486964778efdf529"
  },
  {
    "url": "img/favicons/favicon-32.png",
    "revision": "1d474bc99250f2527133b389d845d656"
  },
  {
    "url": "img/favicons/favicon-48.png",
    "revision": "0925d44496913609564dd8532654fcc6"
  },
  {
    "url": "img/favicons/favicon-512.png",
    "revision": "1130c1b9b658465df4798315c0b4648d"
  },
  {
    "url": "img/favicons/favicon-64.png",
    "revision": "b615ceb9bc30444d5b52183c68625dfd"
  },
  {
    "url": "img/favicons/favicon-72.png",
    "revision": "a3df912c6f323e9967ea1e0240d0e867"
  },
  {
    "url": "img/favicons/favicon-96.png",
    "revision": "eccb5861c4c24514c6a70badd548e43c"
  },
  {
    "url": "img/favicons/favicon.png",
    "revision": "d2089e4ba99ef80542d4410ad9a9494f"
  },
  {
    "url": "img/my-profile-photo_OLD.jpg",
    "revision": "c3e217386d04c662c59b6493e2d0b041"
  },
  {
    "url": "img/my-profile-photo.jpg",
    "revision": "49351d529abe2921bceba8ea784d7a1d"
  },
  {
    "url": "index.html",
    "revision": "68c316933bfaacd868448fdb23046cfb"
  },
  {
    "url": "js/resume.js",
    "revision": "1ae80cd61159f5f817931e799f104147"
  },
  {
    "url": "js/resume.min.js",
    "revision": "60d5ac272e38bab0583e49832b4e7762"
  },
  {
    "url": "manifest.json",
    "revision": "2d01a25122fd9c5f992189b8587f8bc0"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-grid.css",
    "revision": "5b8e85055bb8b4bf4ac7f4edddcf7ab7"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-grid.min.css",
    "revision": "c9654d9c891fe3e57fde9cd355a916a4"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-reboot.css",
    "revision": "b69603cbb0408fbad0ea399a67ef095d"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap-reboot.min.css",
    "revision": "38e73bab749ee7eba9bed51d6982a19e"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.css",
    "revision": "df40d6e4c661bcd1790dce6861e34ce4"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.min.css",
    "revision": "7cc40c199d128af6b01e74a28c5900b0"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "1a94abb2d5270a12fa1ffba3a186737d"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "a5334e475209f965b4862f3bedf32618"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.js",
    "revision": "702049b302bef35ba3614119b4c82cce"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.min.js",
    "revision": "61f338f870fcd0ff46362ef109d28533"
  },
  {
    "url": "vendor/devicons/css/custom.css",
    "revision": "5e4593edba3261633fb69e9e7dcf4d26"
  },
  {
    "url": "vendor/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "vendor/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "vendor/jquery-easing/jquery.easing.compatibility.js",
    "revision": "ba0f90adf86e509dfabe178af9e726fc"
  },
  {
    "url": "vendor/jquery-easing/jquery.easing.js",
    "revision": "b55af8280cffdeaed8cc30b960f68878"
  },
  {
    "url": "vendor/jquery-easing/jquery.easing.min.js",
    "revision": "e2d41e5c8fed838d9014fea53d45ce75"
  },
  {
    "url": "vendor/jquery/jquery.js",
    "revision": "11c05eb286ed576526bf4543760785b9"
  },
  {
    "url": "vendor/jquery/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "vendor/jquery/jquery.slim.js",
    "revision": "1a94b73b4b451a7872de5d76f57024e4"
  },
  {
    "url": "vendor/jquery/jquery.slim.min.js",
    "revision": "d9b11ca4d877c327889805b73bb79edd"
  },
  {
    "url": "vendor/simple-line-icons/css/simple-line-icons.css",
    "revision": "093ca662394ed698fdb5835e425d28dd"
  },
  {
    "url": "web-development/css/resume.css",
    "revision": "c2836e579b6c03fb301e4977f79d31c1"
  },
  {
    "url": "web-development/css/resume.min.css",
    "revision": "17ef5324755f820addd39362aa9baf2c"
  },
  {
    "url": "web-development/gulpfile.js",
    "revision": "a3b3f0411308e2d04ed20bbd1dfa0537"
  },
  {
    "url": "web-development/img/favicons/apple-touch-icon-114x114.png",
    "revision": "c2c8cd5eeecede4ce5ed2aa437bbf2df"
  },
  {
    "url": "web-development/img/favicons/apple-touch-icon-120x120.png",
    "revision": "61f61fba4d72d09a558cf5605d0ba426"
  },
  {
    "url": "web-development/img/favicons/apple-touch-icon-144x144.png",
    "revision": "d4869a220f7a05fea76b47531e224961"
  },
  {
    "url": "web-development/img/favicons/apple-touch-icon-60x60.png",
    "revision": "98574b678dfc98ab2d2fd9cabe0fe8d5"
  },
  {
    "url": "web-development/img/favicons/apple-touch-icon-76x76.png",
    "revision": "5625be981344221c1a9babe690a3b113"
  },
  {
    "url": "web-development/img/favicons/apple-touch-icon.png",
    "revision": "62e358e69cc6abe560fd54801ea02470"
  },
  {
    "url": "web-development/img/favicons/favicon-144.png",
    "revision": "34491c57bcf8bc5d8ace8b6eaff00e13"
  },
  {
    "url": "web-development/img/favicons/favicon-192.png",
    "revision": "8404a5cb61b91de9fb5b2723151bae92"
  },
  {
    "url": "web-development/img/favicons/favicon-196.png",
    "revision": "4e6f8d41ba6c71c2486964778efdf529"
  },
  {
    "url": "web-development/img/favicons/favicon-32.png",
    "revision": "1d474bc99250f2527133b389d845d656"
  },
  {
    "url": "web-development/img/favicons/favicon-48.png",
    "revision": "0925d44496913609564dd8532654fcc6"
  },
  {
    "url": "web-development/img/favicons/favicon-512.png",
    "revision": "1130c1b9b658465df4798315c0b4648d"
  },
  {
    "url": "web-development/img/favicons/favicon-64.png",
    "revision": "b615ceb9bc30444d5b52183c68625dfd"
  },
  {
    "url": "web-development/img/favicons/favicon-72.png",
    "revision": "a3df912c6f323e9967ea1e0240d0e867"
  },
  {
    "url": "web-development/img/favicons/favicon-96.png",
    "revision": "eccb5861c4c24514c6a70badd548e43c"
  },
  {
    "url": "web-development/img/favicons/favicon.png",
    "revision": "d2089e4ba99ef80542d4410ad9a9494f"
  },
  {
    "url": "web-development/img/my-profile-photo_OLD.jpg",
    "revision": "c3e217386d04c662c59b6493e2d0b041"
  },
  {
    "url": "web-development/img/my-profile-photo.jpg",
    "revision": "49351d529abe2921bceba8ea784d7a1d"
  },
  {
    "url": "web-development/index.html",
    "revision": "68c316933bfaacd868448fdb23046cfb"
  },
  {
    "url": "web-development/js/resume.js",
    "revision": "1ae80cd61159f5f817931e799f104147"
  },
  {
    "url": "web-development/js/resume.min.js",
    "revision": "60d5ac272e38bab0583e49832b4e7762"
  },
  {
    "url": "web-development/manifest.json",
    "revision": "2d01a25122fd9c5f992189b8587f8bc0"
  },
  {
    "url": "web-development/package-lock.json",
    "revision": "62ea6a861006e87d35507379bcc39eae"
  },
  {
    "url": "web-development/package.json",
    "revision": "9c7ba31fefecbdcd6d01c22d1da94fe3"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap-grid.css",
    "revision": "5b8e85055bb8b4bf4ac7f4edddcf7ab7"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap-grid.min.css",
    "revision": "c9654d9c891fe3e57fde9cd355a916a4"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap-reboot.css",
    "revision": "b69603cbb0408fbad0ea399a67ef095d"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap-reboot.min.css",
    "revision": "38e73bab749ee7eba9bed51d6982a19e"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap.css",
    "revision": "df40d6e4c661bcd1790dce6861e34ce4"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap.min.css",
    "revision": "7cc40c199d128af6b01e74a28c5900b0"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "1a94abb2d5270a12fa1ffba3a186737d"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "a5334e475209f965b4862f3bedf32618"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.js",
    "revision": "702049b302bef35ba3614119b4c82cce"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.min.js",
    "revision": "61f338f870fcd0ff46362ef109d28533"
  },
  {
    "url": "web-development/vendor/devicons/css/custom.css",
    "revision": "5e4593edba3261633fb69e9e7dcf4d26"
  },
  {
    "url": "web-development/vendor/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "web-development/vendor/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "web-development/vendor/jquery-easing/jquery.easing.compatibility.js",
    "revision": "ba0f90adf86e509dfabe178af9e726fc"
  },
  {
    "url": "web-development/vendor/jquery-easing/jquery.easing.js",
    "revision": "b55af8280cffdeaed8cc30b960f68878"
  },
  {
    "url": "web-development/vendor/jquery-easing/jquery.easing.min.js",
    "revision": "e2d41e5c8fed838d9014fea53d45ce75"
  },
  {
    "url": "web-development/vendor/jquery/jquery.js",
    "revision": "11c05eb286ed576526bf4543760785b9"
  },
  {
    "url": "web-development/vendor/jquery/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "web-development/vendor/jquery/jquery.slim.js",
    "revision": "1a94b73b4b451a7872de5d76f57024e4"
  },
  {
    "url": "web-development/vendor/jquery/jquery.slim.min.js",
    "revision": "d9b11ca4d877c327889805b73bb79edd"
  },
  {
    "url": "web-development/vendor/simple-line-icons/css/simple-line-icons.css",
    "revision": "093ca662394ed698fdb5835e425d28dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
