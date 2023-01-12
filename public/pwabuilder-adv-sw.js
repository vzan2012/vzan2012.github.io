importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
  {
    revision: "af562f66fdb8ddfc86132c54f12aca3c",
    url: "assets/index-017315fd.css",
  },
  {
    revision: "05e3a40331948fde05b184ab57f18df4",
    url: "assets/index-31fa5a03.js",
  },
  { revision: "c2836e579b6c03fb301e4977f79d31c1", url: "css/resume.css" },
  { revision: "17ef5324755f820addd39362aa9baf2c", url: "css/resume.min.css" },
  { revision: "39e987802d237ab76dc0a46bf0ce527d", url: "index.html" },
  { revision: "1ae80cd61159f5f817931e799f104147", url: "js/resume.js" },
  { revision: "60d5ac272e38bab0583e49832b4e7762", url: "js/resume.min.js" },
  { revision: "b2b0070533e9aab4806b952dfbc56574", url: "pwabuilder-adv-sw.js" },
  {
    revision: "5b8e85055bb8b4bf4ac7f4edddcf7ab7",
    url: "vendor/bootstrap/css/bootstrap-grid.css",
  },
  {
    revision: "c9654d9c891fe3e57fde9cd355a916a4",
    url: "vendor/bootstrap/css/bootstrap-grid.min.css",
  },
  {
    revision: "b69603cbb0408fbad0ea399a67ef095d",
    url: "vendor/bootstrap/css/bootstrap-reboot.css",
  },
  {
    revision: "38e73bab749ee7eba9bed51d6982a19e",
    url: "vendor/bootstrap/css/bootstrap-reboot.min.css",
  },
  {
    revision: "df40d6e4c661bcd1790dce6861e34ce4",
    url: "vendor/bootstrap/css/bootstrap.css",
  },
  {
    revision: "7cc40c199d128af6b01e74a28c5900b0",
    url: "vendor/bootstrap/css/bootstrap.min.css",
  },
  {
    revision: "1a94abb2d5270a12fa1ffba3a186737d",
    url: "vendor/bootstrap/js/bootstrap.bundle.js",
  },
  {
    revision: "a5334e475209f965b4862f3bedf32618",
    url: "vendor/bootstrap/js/bootstrap.bundle.min.js",
  },
  {
    revision: "702049b302bef35ba3614119b4c82cce",
    url: "vendor/bootstrap/js/bootstrap.js",
  },
  {
    revision: "61f338f870fcd0ff46362ef109d28533",
    url: "vendor/bootstrap/js/bootstrap.min.js",
  },
  {
    revision: "5e4593edba3261633fb69e9e7dcf4d26",
    url: "vendor/devicons/css/custom.css",
  },
  {
    revision: "c495654869785bc3df60216616814ad1",
    url: "vendor/font-awesome/css/font-awesome.css",
  },
  {
    revision: "269550530cc127b6aa5a35925a7de6ce",
    url: "vendor/font-awesome/css/font-awesome.min.css",
  },
  {
    revision: "ba0f90adf86e509dfabe178af9e726fc",
    url: "vendor/jquery-easing/jquery.easing.compatibility.js",
  },
  {
    revision: "b55af8280cffdeaed8cc30b960f68878",
    url: "vendor/jquery-easing/jquery.easing.js",
  },
  {
    revision: "e2d41e5c8fed838d9014fea53d45ce75",
    url: "vendor/jquery-easing/jquery.easing.min.js",
  },
  {
    revision: "11c05eb286ed576526bf4543760785b9",
    url: "vendor/jquery/jquery.js",
  },
  {
    revision: "220afd743d9e9643852e31a135a9f3ae",
    url: "vendor/jquery/jquery.min.js",
  },
  {
    revision: "1a94b73b4b451a7872de5d76f57024e4",
    url: "vendor/jquery/jquery.slim.js",
  },
  {
    revision: "d9b11ca4d877c327889805b73bb79edd",
    url: "vendor/jquery/jquery.slim.min.js",
  },
  {
    revision: "093ca662394ed698fdb5835e425d28dd",
    url: "vendor/simple-line-icons/css/simple-line-icons.css",
  },
]);
