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
    "revision": "803f39e5eda4d8895b48ca62dcbef64f"
  },
  {
    "url": "css/resume.min.css",
    "revision": "06501d9931d89b8a9630d3bf687acf91"
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
    "url": "img/my-profile-photo.jpg",
    "revision": "c3e217386d04c662c59b6493e2d0b041"
  },
  {
    "url": "index.html",
    "revision": "1987e62073306d07b869fa0a17aff012"
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
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "vendor/bootstrap/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "vendor/bootstrap/js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "vendor/devicons/css/devicons.css",
    "revision": "b72ad786d78eb1aa09edcc91f75751cb"
  },
  {
    "url": "vendor/devicons/css/devicons.min.css",
    "revision": "fd1f5fd2d31a07e99105522fff10b2a5"
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
    "revision": "6a07da9fae934baf3f749e876bbfdd96"
  },
  {
    "url": "vendor/jquery/jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "vendor/jquery/jquery.slim.js",
    "revision": "450d478c0491cf0b2d365997faff70dd"
  },
  {
    "url": "vendor/jquery/jquery.slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "vendor/simple-line-icons/css/simple-line-icons.css",
    "revision": "093ca662394ed698fdb5835e425d28dd"
  },
  {
    "url": "web-development/css/resume.css",
    "revision": "803f39e5eda4d8895b48ca62dcbef64f"
  },
  {
    "url": "web-development/css/resume.min.css",
    "revision": "06501d9931d89b8a9630d3bf687acf91"
  },
  {
    "url": "web-development/gulpfile.js",
    "revision": "f7944de1998e9ddc100a637a5ef884a0"
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
    "url": "web-development/img/my-profile-photo.jpg",
    "revision": "c3e217386d04c662c59b6493e2d0b041"
  },
  {
    "url": "web-development/index.html",
    "revision": "1987e62073306d07b869fa0a17aff012"
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
    "revision": "555c91080d1e16e19ebcb4c1f83e6324"
  },
  {
    "url": "web-development/package.json",
    "revision": "53aab2255d14b14c8f7094cf59763e79"
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
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "web-development/vendor/bootstrap/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "web-development/vendor/bootstrap/js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "web-development/vendor/devicons/css/devicons.css",
    "revision": "b72ad786d78eb1aa09edcc91f75751cb"
  },
  {
    "url": "web-development/vendor/devicons/css/devicons.min.css",
    "revision": "fd1f5fd2d31a07e99105522fff10b2a5"
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
    "revision": "6a07da9fae934baf3f749e876bbfdd96"
  },
  {
    "url": "web-development/vendor/jquery/jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "web-development/vendor/jquery/jquery.slim.js",
    "revision": "450d478c0491cf0b2d365997faff70dd"
  },
  {
    "url": "web-development/vendor/jquery/jquery.slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "web-development/vendor/simple-line-icons/css/simple-line-icons.css",
    "revision": "093ca662394ed698fdb5835e425d28dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
