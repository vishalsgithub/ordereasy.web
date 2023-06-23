'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9540d7aa9324e688296043c0d31fd0d8",
"index.html": "933b8ff3cb49721fa5c7f90128779283",
"/": "933b8ff3cb49721fa5c7f90128779283",
"main.dart.js": "3d93a5c42155d5724abf58875ac11a4f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3adf39db34cfec34bdb89bb9c669be7e",
"assets/AssetManifest.json": "144403770b56d7cd6eb8975a7754b132",
"assets/NOTICES": "bb7094c6c020e7582fba976b693a0e7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6314285e79f870d7490d50f4786cd939",
"assets/fonts/MaterialIcons-Regular.otf": "e6d64a9378afe6328fadc2fad8571142",
"assets/assets/ic_google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/order_success.gif": "ad56fb628a38435f7ccf8776c47b796d",
"assets/assets/order_prepair.gif": "d9dfc51288056f68fffddba5ad68f522",
"assets/assets/images/bestfood/ic_best_food_6.jpeg": "6fb4d65f2b28d7545fd3ecb895af8941",
"assets/assets/images/bestfood/ic_best_food_7.jpeg": "671986b07138c07da9817dafb03127d9",
"assets/assets/images/bestfood/ic_best_food_10.jpeg": "2320a4844ba054be538c40e6862c169f",
"assets/assets/images/bestfood/logotp.png": "28ae3d5a967eaa341c1490412f873e4f",
"assets/assets/images/bestfood/ic_best_food_1.jpeg": "642c886b5d7d8b8ff9e688b002f1ca66",
"assets/assets/images/bestfood/logoteapost.png": "0d3ac4db453b63eeaef321fc570e7161",
"assets/assets/images/bestfood/teapost1.jpg": "9d2f37d6a4de8ee87d3df5ad11bc18a8",
"assets/assets/images/bestfood/ic_best_food_2.jpeg": "75274d964667aecc9ac8d076ac62e26d",
"assets/assets/images/bestfood/teapost2.jpg": "95ca95825fd1b5c48cb54148a471417d",
"assets/assets/images/bestfood/ic_best_food_3.jpeg": "688eb31885ddd522bb7d91b563bee160",
"assets/assets/images/bestfood/menus/ic_food_express3.png": "992b0e558b3a15c054adbc73b6af48c2",
"assets/assets/images/bestfood/menus/ic_food_express2.png": "009c77fc787f1e6a2555ee0b2b0f4f34",
"assets/assets/images/bestfood/menus/ic_home.png": "883c90129a1e79aa60d37cb66829a2a2",
"assets/assets/images/bestfood/menus/ic_app_icon_black.png": "7a30dc878368216d4e74768d29e2864a",
"assets/assets/images/bestfood/menus/ic_credit_card.png": "b046ba8e2050ba8db86efd79aef29319",
"assets/assets/images/bestfood/menus/ic_delete.png": "c8e38a93e1b0aa819ef9b7224c5f1f0c",
"assets/assets/images/bestfood/menus/ic_cart.png": "04674a5d16849561f89188eb724a5cec",
"assets/assets/images/bestfood/menus/ic_account.png": "70c2ad64c6bc3c9b5400e762a54980a7",
"assets/assets/images/bestfood/menus/ic_app_icon.png": "811a6b8913a0fb5094ca7baab43ef6f2",
"assets/assets/images/bestfood/menus/ic_near_by.png": "6764f2d60c138b53a696da8a194c7292",
"assets/assets/images/bestfood/menus/ic_food_express.png": "ff8daa08963a47aecce38d950457f756",
"assets/assets/images/bestfood/menus/ic_search_menu.png": "18f941292522ceb64951157abb24f2f5",
"assets/assets/images/bestfood/teapost.jpeg": "d02b4a3eea1bd1cb7706ec32b23d9acb",
"assets/assets/images/bestfood/ic_best_food_8.jpeg": "5d428e7d169839845c6b7fe5941adb19",
"assets/assets/images/bestfood/ic_best_food_4.jpeg": "fd96d2f14b1e2232597afbdbf0402785",
"assets/assets/images/bestfood/ic_best_food_5.jpeg": "28d5dd388994627e3cf2e5e88a48665f",
"assets/assets/images/bestfood/ic_best_food_9.jpeg": "66a6104142e08b315579854324830d9a",
"assets/assets/images/topmenu/ic_sushi.png": "b4977c8006b2aa33576443e716d1c90c",
"assets/assets/images/topmenu/ic_ice_cream.png": "0d02df9b6ca60e33a7ab1ad3f707c328",
"assets/assets/images/topmenu/ic_pizza.png": "d970ed0836334cb0ccea8f02125d8a84",
"assets/assets/images/topmenu/ic_burger.png": "2406bdef149efed8d0a70472f261fccd",
"assets/assets/images/topmenu/ic_pasta.png": "ff3e6bbd0f46c7ba28becf250d1c6159",
"assets/assets/images/topmenu/ic_cake.png": "68ca078aaf28ad7537eafae7f9871561",
"assets/assets/images/topmenu/ic_soft_drink.png": "526cd712f0782c1c8b8fa7d9ac73e7be",
"assets/assets/images/menus/ic_food_express3.png": "992b0e558b3a15c054adbc73b6af48c2",
"assets/assets/images/menus/ic_food_express2.png": "009c77fc787f1e6a2555ee0b2b0f4f34",
"assets/assets/images/menus/ic_home.png": "883c90129a1e79aa60d37cb66829a2a2",
"assets/assets/images/menus/ic_app_icon_black.png": "7a30dc878368216d4e74768d29e2864a",
"assets/assets/images/menus/ic_credit_card.png": "b046ba8e2050ba8db86efd79aef29319",
"assets/assets/images/menus/ic_delete.png": "c8e38a93e1b0aa819ef9b7224c5f1f0c",
"assets/assets/images/menus/ic_cart.png": "04674a5d16849561f89188eb724a5cec",
"assets/assets/images/menus/ic_account.png": "70c2ad64c6bc3c9b5400e762a54980a7",
"assets/assets/images/menus/ic_app_icon.png": "811a6b8913a0fb5094ca7baab43ef6f2",
"assets/assets/images/menus/ic_near_by.png": "6764f2d60c138b53a696da8a194c7292",
"assets/assets/images/menus/ic_food_express.png": "ff8daa08963a47aecce38d950457f756",
"assets/assets/images/menus/ic_search_menu.png": "18f941292522ceb64951157abb24f2f5",
"assets/assets/images/popular_foods/ic_popular_food_1.png": "604f1327a5c4f3c47957de9dd584cfe8",
"assets/assets/images/popular_foods/ic_popular_food_2.png": "c76484183aaa154b59d45af7728c5377",
"assets/assets/images/popular_foods/ic_popular_food_3.png": "9e1d95ab833ee4d1efe560a304f1e30f",
"assets/assets/images/popular_foods/ic_popular_food_6.png": "d981f47d57df38fd04aae8bafdeeda49",
"assets/assets/images/popular_foods/ic_popular_food_4.png": "d3503f895d700633996bf89e2caeaa29",
"assets/assets/images/popular_foods/ic_popular_food_5.png": "db0398fa3040ca0c8b9574d5c5635dd2",
"assets/assets/images/transparent.png": "92a7f15604a2868ccc75f6faad510c0a",
"assets/assets/ic_nonveg.png": "e52423848e5321c406749a11d4d31f66",
"assets/assets/ic_facebook.png": "c679773f28c026bc6e5f9c475ec32a6f",
"assets/assets/OrderEasy.png": "dff8c599ddf9797e42bfdcf25e9fc042",
"assets/assets/food_loader.gif": "bf73a9ff6f8f622e0b44f679b4c34540",
"assets/assets/oe_logo.png": "f65bbe178183efbe813591b3cd35a39d",
"assets/assets/ic_veg.png": "0d2aeb0194eb3782fab9b17073c397a1",
"assets/assets/logo.png": "dff8c599ddf9797e42bfdcf25e9fc042",
"assets/assets/food_load.gif": "c4cb9abc7c69713e7e816e6a624ce7f8",
"assets/assets/callperson.png": "89f5816d81bae94ff0e54044fd4108dc",
"assets/assets/icons/call1.svg": "9f036c8e2d5abe4b91ed0c587699f916",
"assets/assets/icons/gmail.svg": "01fa57e5f675bf7020de0d9ad9d619f1",
"assets/assets/icons/instagram.svg": "eddc0648277ca4edb5c47e85067a28c9",
"assets/assets/icons/instagram2.svg": "397f7e52564f4753d211d6b68f78243f",
"assets/assets/icons/mail.svg": "0f8d4a183becdb2c66023a703496f2cf",
"assets/assets/icons/time.svg": "f8ac1702520bd67be492c75cef2d13fd",
"assets/assets/icons/whatsapp.svg": "afd93984c9d2d01ac0e138eff7e038d9",
"assets/assets/icons/youtube.svg": "f01c27ad5df20707d97773fc4b1845b7",
"assets/assets/icons/call.svg": "c7c4f6d55d4ff37293f667931215fa3f",
"assets/assets/icons/facebook1.svg": "0bf00931479d1bb618509537c0ce324b",
"assets/assets/icons/whatsapp1.svg": "9b1db846caeb85b156b70b3373fe4ac2",
"assets/assets/profile.png": "7971997e68f70e6ee0b1df2245f9c2a3",
"assets/assets/bg_login.png": "d59bccbe2f7aac216ac2b0119f314be5",
"assets/assets/bgbell.jpeg": "5e2a5069add0c23cefd0f2b82d97e708",
"assets/assets/order_ready.gif": "a4584f23e2c1c3915ff3d3dca4e9cf21",
"assets/assets/order_pending.json": "77a0e5f02122aebc000491010b778808",
"assets/assets/wrong_qr.gif": "e5a2c25c7a62978c376d5d12cf7a6b03",
"assets/assets/callpers.png": "7cfedaef1c13f9f8a828a2a304e3a723",
"assets/assets/ic_contact_us.jpg": "1c5bea528e78cee0916595d823af167a",
"assets/assets/order_rejected.json": "500f9a72c0ee66ef899451b33dfce986",
"assets/assets/yes1.mp3": "80c8e69c178ad1f4038959ffc9fe500f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
