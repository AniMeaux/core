importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "animeaux",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/client/0570839d25a2d274fda5.js",
    "revision": "8e51dda787944a174be1760cd28ca816"
  },
  {
    "url": "/_nuxt/client/0bab68fd6d9fae0a817b.js",
    "revision": "8d88b39c603e2f8f4de811d097381fe4"
  },
  {
    "url": "/_nuxt/client/0d55bbd5fdb85aa84f83.js",
    "revision": "73a71e02db3819c602cdec951c5b910f"
  },
  {
    "url": "/_nuxt/client/0eec77a295f3e9f2444a.js",
    "revision": "e0b781bf877096a687f75dd97547408e"
  },
  {
    "url": "/_nuxt/client/1bcd8757c2c1e9df6c53.js",
    "revision": "0d2fcd30add9321f06af6d26dabae0a7"
  },
  {
    "url": "/_nuxt/client/2253813c8c2673504bb6.js",
    "revision": "bba51499297d518350bf70ee607f10ae"
  },
  {
    "url": "/_nuxt/client/5cc5ab8be239b2c05e7e.js",
    "revision": "dd7d893a5706e69d40c08a661a70c630"
  },
  {
    "url": "/_nuxt/client/62edfd7e5767ce6e9c57.js",
    "revision": "d1ab5c1ec2329ab6cd6d51b614db3df1"
  },
  {
    "url": "/_nuxt/client/743dc2cfb1f68b913869.js",
    "revision": "6d7c74b615f92bac78716179548e8e59"
  },
  {
    "url": "/_nuxt/client/8a5db9f42101cf923667.js",
    "revision": "32408ea636aafa86ea5a46c44d86318f"
  },
  {
    "url": "/_nuxt/client/8beaa0407f8ba03a8949.js",
    "revision": "af47dc7e9c80013ba610b54d599b108e"
  },
  {
    "url": "/_nuxt/client/8f4c68f096f58956a683.js",
    "revision": "81c23b8ef3cf19f6a8ade8405e6cf958"
  },
  {
    "url": "/_nuxt/client/acf058fa3fe50340d8ce.js",
    "revision": "632dbc6403abf999f0b9715fcc9aaa07"
  },
  {
    "url": "/_nuxt/client/afffeee93394e2264c9a.js",
    "revision": "f57209a1a294975088ef42cc2909adc9"
  },
  {
    "url": "/_nuxt/client/b6c9f6637aeb069682ae.js",
    "revision": "5358a7abcd90b4401d0e8bfc4764b554"
  },
  {
    "url": "/_nuxt/client/b6f6fd5c392b01d6ea92.js",
    "revision": "5585427bad5461ab6457f9fe97896c85"
  },
  {
    "url": "/_nuxt/client/bb2c7e5e7cc3a18aa821.js",
    "revision": "646184e4513536015e672c354bc8f0c4"
  },
  {
    "url": "/_nuxt/client/c040e8637670061329b3.js",
    "revision": "4c32f9da9c6f34e5f80ac0b9de4a1bc4"
  },
  {
    "url": "/_nuxt/client/e27f98f4560b26248ed1.js",
    "revision": "d3605c63a594224d225079222ab6e979"
  },
  {
    "url": "/_nuxt/client/e8ab14f70152f029fbb3.js",
    "revision": "9044f2b3630225ba7eb692ec40c4a366"
  },
  {
    "url": "/_nuxt/client/eb6b5934a178048c17d2.js",
    "revision": "f1eda9064c362708af4b2f43c5437ffb"
  },
  {
    "url": "/_nuxt/client/f2be5db97defe08df7f2.js",
    "revision": "0c8bb90b04698fa9989622a5e530a314"
  },
  {
    "url": "/_nuxt/client/fa43e49f3006e40264ca.js",
    "revision": "6fa948c3e8cecf960e163ce35f88aea6"
  },
  {
    "url": "/_nuxt/server/21c7673bd6cc776126e6.js",
    "revision": "dbc626150de5fd4b0e09eb1664c33d78"
  },
  {
    "url": "/_nuxt/server/3d7f7bad1b2239800b85.js",
    "revision": "fb6c33fb680f88db94daa85beb7d1743"
  },
  {
    "url": "/_nuxt/server/4458508b40f218969a8b.js",
    "revision": "d463c039f6901c8529f589811aeaecc9"
  },
  {
    "url": "/_nuxt/server/4f3f492d076ba8860934.js",
    "revision": "628639c60d51afccbc5378dc4b568495"
  },
  {
    "url": "/_nuxt/server/59649af2f5b20bc13d60.js",
    "revision": "c7a3c822c90d79c6e3d9e956c5631432"
  },
  {
    "url": "/_nuxt/server/6eef7ddf9a705a90f2e5.js",
    "revision": "5466d1116d4d382f0827c51e3056db26"
  },
  {
    "url": "/_nuxt/server/78e3830ee75fffc0276a.js",
    "revision": "e6b1498d9a1dfd53195d4d8ec877a55d"
  },
  {
    "url": "/_nuxt/server/88fec44bc49fdc7c84a5.js",
    "revision": "fda6b56b4d12cea6efc61e29537c9e27"
  },
  {
    "url": "/_nuxt/server/930d677bc21c84e10b76.js",
    "revision": "ebfe2e9cc2d8b03f2e428112e0cf50e8"
  },
  {
    "url": "/_nuxt/server/aa60f0ff30ecd417770e.js",
    "revision": "5218bcb409da06b357d76591a4b5de2f"
  },
  {
    "url": "/_nuxt/server/b0f5c404e0bb4db01f1b.js",
    "revision": "3828178d2792bd5e175accb17f26cf5e"
  },
  {
    "url": "/_nuxt/server/d4847a958fb239e5d635.js",
    "revision": "3eee1bdefdf499c18b5a5df60ab8e0ed"
  },
  {
    "url": "/_nuxt/server/e5e7193f96a2d55f6359.js",
    "revision": "af8d945e17af51130d39a369727f69f7"
  },
  {
    "url": "/_nuxt/server/f4e9054af36fbd1738f0.js",
    "revision": "9c453ad16999fc42ba51ba1c6640abef"
  },
  {
    "url": "/_nuxt/server/fbf064ca0dd7fa2e2c61.js",
    "revision": "d2adac25af341906bd68c1314ef85755"
  },
  {
    "url": "/_nuxt/server/fca34e7bc261fd4daf23.js",
    "revision": "9749741c1f508cd624c21406de9c4a74"
  },
  {
    "url": "/_nuxt/server/feb9ccb224a79fb98a40.js",
    "revision": "93df36cdd12bc49de5cfc320f35a05c0"
  },
  {
    "url": "/_nuxt/server/server.js",
    "revision": "b4f498a73ea83bdca25a1210adbde90c"
  }
])

workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')
