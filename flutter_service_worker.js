'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "c90a1ee53d17105aac77facc4f966252",
"manifest.json": "629904470ce0597d6aeba9cb1d4df157",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "4a4a896a19320878bd94ac233d1e17ee",
"index.html": "54d8e35eab1c45d690390cc55ee498af",
"/": "54d8e35eab1c45d690390cc55ee498af",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "a2778f2e6b8a7cbc3a7d66e0cc15c69a",
".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/logs/HEAD": "16a0251c7ad0acfd905d55ae520e66ed",
".git/logs/refs/heads/master": "16a0251c7ad0acfd905d55ae520e66ed",
".git/logs/refs/remotes/origin/master": "2920df41547c081972a4247599fe98f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "ca374eee0808cb0496c682be2deacc0e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "e82610464e8780b216d64e0e534e5532",
".git/objects/50/332802596448d3952c3a55e6b1bdc5d6dc332e": "11ee88f13e00c69ea6e1adeae577aa95",
".git/objects/50/4c803a304bc6aabe08728384fd2cfac5211772": "c80559bc8aee61f97e4e07e716a98134",
".git/objects/a8/a00d6764abf45a339f9f5f1849ac7eec143884": "9f02f45a010ab985eb20e4f3c87b0d35",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/32/591f43c0bc4d327cb23571c4668b588c110e71": "1eb93a464eba8c33cece9dfe45f42a9d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/6b/ac280ef68a18b982032da71885652da830746f": "ccf1148bc86bca7dad8ae1093c0b6780",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/7d1365276393c3629cff2d6996602cfe2280b0": "104e038d809c02507188865540d20a64",
".git/objects/dd/d9e364c78ad0fd7094be93b93f128190a3e8a2": "4c24e5f354a491f96a586b171e89416d",
".git/objects/66/7f6c8ee3de73780629bd92b4ae8f10dc95833a": "42c388e8d15e3f24c0db92d3c8ecdbb3",
".git/objects/66/ae60a388d7982ed7f7384280125c2c37b9b45d": "8d343f5928ce4deac9dedcc375379ec1",
".git/objects/89/57ac9ea2e324f62d83dada71b97227245dc3de": "4ba0fb2e45b904596b24e20e9e70ff5f",
".git/objects/6f/5a7d14d6f55b6beb0d0babc7c5efccb4906166": "dbbbd1fe261acd0ae6ab8a80956c606f",
".git/objects/33/ec73c446983e720c3c60c5c4b559b1f9990c00": "637acde4d6ff960d07875a49eeedf58d",
".git/objects/33/8bd5a5670f1aaadb987a0188e6f1fdb1af7f19": "6d98a2f7cb12d3e283b8cb2066862e9a",
".git/objects/70/bd1f796bf4f8dc738cb1eb0bc2c30e89086673": "a71e628ae2cb096ac2f799e2ad9fa6e4",
".git/objects/2f/00a1daa12289eb7c09ee3dfcd78ac87408f2e3": "65a7fcc1a97d10ccb259e30c990770d4",
".git/objects/fe/7b2b74927fb41e9632229cd887ccaeafe651da": "df8c86d059b281e0997c6632267064ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/13/b905be4be66f6651cc2fc4f94b52588a24e0ba": "7263850f060eff534499d91a89102b15",
".git/objects/48/9500b6c67c526be276a197888114ca220a87b9": "4bb67ec767a4c437dd5de9c915848143",
".git/objects/48/260faa0f9147bc2b2391896f516569ba9390b1": "ecf1b531ef7d5b94ff2a76e27f8b1f79",
".git/objects/a0/4b5f09a45ac4cb0dd194069bfdb0bced43f854": "7998a31e6d1e0b3096c3bf793da710b1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/de/5861576c9d657543d7f0a1b3a7b9815bb9866a": "26a2dfc4050cc5651e4ab19e2a5d4ef5",
".git/objects/fb/5cb53d9a074ca0c0c036f3521a2f5f48acc5f2": "4b98555f75ad57f26eee628def0304d5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/92/97e9773c0363f0e91b265c02258c882a95c6e3": "4d810a49f0ccbee0f4b25fb02f1d4609",
".git/objects/8b/eae02a5f6a2341b984f3cf2fc4cb64be5b0364": "e706583dfeb6200007d19496e32fb008",
".git/objects/04/c62ca73153157f6cad596a2c39f021844ac8fa": "1d90d8ffe2c48c2e3ce07b0b80adb1ff",
".git/objects/7c/ab36fa49cae61cdb9ca9d7a14754f5b01d0814": "89099ac0b86c1ea0d78c2d36ca52ff73",
".git/objects/7c/7789a8091f583a01ab0a22f8119e1b3d2e8b0f": "29c9c9e9c2cac66b3b33b90073857407",
".git/objects/76/465f68ee2396aa000980c1f8099ec115f0fc5d": "b3ca517e44d99e5c402457a4c0d4ffef",
".git/objects/30/4155bc3a0a56d4418d64518c59c1afeb03deae": "9cc757b45da90cb16cbfd75f69bc3255",
".git/objects/ac/7d2c2ebf7deadcd6214437f94f0e841cdf8995": "aae0175d636e70adcfdc70634638d44c",
".git/objects/fa/1f0edeb53da84b00ea18a261f456c0f2e547bd": "22d54feca213dafcbf7f3e8d1942db3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9d/9c2e027771487b37a4d5f9b9ff9fdc7ca1f929": "015839992b35406a71dc6038d6c2f327",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/7f/4daef0da552ded2c112984e4ddb893f6675d36": "8c74b1a98b79fdcadee70e134e4ff7c8",
".git/objects/25/4441443bbc9dfe0ab8248c2b47f48382b93085": "1e0c07eb4843c2e7c8659430083668de",
".git/objects/59/824e60f4708ac517624078cda25599b63fc2a7": "0f3d5f50caff1c41798af9da900f956d",
".git/objects/0f/c0bb338181fc176306c93c444d0c678555d3a3": "5338cadc161bf1aff2026fdb76d3fffe",
".git/objects/21/b2f940fe5396ee545db51e5ee28ca0e8ab7b64": "178a234a65608bead87628953d2b6519",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/91/67cacb14fce53f7201ace0a24516568fceacae": "29b08bdcf19f7257fd8b73a8ff6c9a9e",
".git/objects/68/d0743746f9ed2ffb4a1952bd3b76d386c63ddf": "794c3cc42d234eda95465e249231574d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/refs/heads/master": "6edafd97de23e8f6cce9e860d4bea1fa",
".git/refs/remotes/origin/master": "6edafd97de23e8f6cce9e860d4bea1fa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
