if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>a(e,n),t={module:{uri:n},exports:r,require:d};s[n]=Promise.all(c.map((e=>t[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850-da07acdb1d6df326.js",revision:"da07acdb1d6df326"},{url:"/_next/static/chunks/29107295-1494f237b9e407ad.js",revision:"1494f237b9e407ad"},{url:"/_next/static/chunks/293-8a6ad96da2d474ce.js",revision:"8a6ad96da2d474ce"},{url:"/_next/static/chunks/311-f85e3b0fe677aa82.js",revision:"f85e3b0fe677aa82"},{url:"/_next/static/chunks/36bcf0ca-f4dd9838ef290a06.js",revision:"f4dd9838ef290a06"},{url:"/_next/static/chunks/517-a6cd6f1d501348da.js",revision:"a6cd6f1d501348da"},{url:"/_next/static/chunks/562.1a2a35fd8d3b8c3c.js",revision:"1a2a35fd8d3b8c3c"},{url:"/_next/static/chunks/563.fbd5f4f9151f8110.js",revision:"fbd5f4f9151f8110"},{url:"/_next/static/chunks/590-b0ebc823b7f06818.js",revision:"b0ebc823b7f06818"},{url:"/_next/static/chunks/632-4a21aa6383d3c36e.js",revision:"4a21aa6383d3c36e"},{url:"/_next/static/chunks/645-e3a090e727fde646.js",revision:"e3a090e727fde646"},{url:"/_next/static/chunks/70.092e463191ba0713.js",revision:"092e463191ba0713"},{url:"/_next/static/chunks/81-ac881a8e3f751c57.js",revision:"ac881a8e3f751c57"},{url:"/_next/static/chunks/866-2c3abb1c0c34c8fa.js",revision:"2c3abb1c0c34c8fa"},{url:"/_next/static/chunks/894-3133bb3f644b6c0f.js",revision:"3133bb3f644b6c0f"},{url:"/_next/static/chunks/923-8f94452e1d7f5c79.js",revision:"8f94452e1d7f5c79"},{url:"/_next/static/chunks/926-5196b02f6f0c6447.js",revision:"5196b02f6f0c6447"},{url:"/_next/static/chunks/d7eeaac4-38bcc99042d509e9.js",revision:"38bcc99042d509e9"},{url:"/_next/static/chunks/framework-81da43a8dcd978d9.js",revision:"81da43a8dcd978d9"},{url:"/_next/static/chunks/main-ced3f855a9c65218.js",revision:"ced3f855a9c65218"},{url:"/_next/static/chunks/pages/_error-a3c517a7a4d3c9c8.js",revision:"a3c517a7a4d3c9c8"},{url:"/_next/static/chunks/pages/bridge-170081f723e771e6.js",revision:"170081f723e771e6"},{url:"/_next/static/chunks/pages/collections-f9558b052f2820c8.js",revision:"f9558b052f2820c8"},{url:"/_next/static/chunks/pages/collections/%5Bid%5D-67951b0dce5a7e34.js",revision:"67951b0dce5a7e34"},{url:"/_next/static/chunks/pages/collections/%5Bid%5D/nft/new-eba7e3fd6d03960d.js",revision:"eba7e3fd6d03960d"},{url:"/_next/static/chunks/pages/collections/item/new-fc1364037f0d48c4.js",revision:"fc1364037f0d48c4"},{url:"/_next/static/chunks/pages/index-ddaf1eabcd9b6f7e.js",revision:"ddaf1eabcd9b6f7e"},{url:"/_next/static/chunks/pages/marketplace-589493309d9ee361.js",revision:"589493309d9ee361"},{url:"/_next/static/chunks/pages/nfts/%5Bslug%5D-8a4f450a11077101.js",revision:"8a4f450a11077101"},{url:"/_next/static/chunks/pages/users/%5Bid%5D-038e15375b94caa1.js",revision:"038e15375b94caa1"},{url:"/_next/static/chunks/pages/users/profile/create-768529279fd5a574.js",revision:"768529279fd5a574"},{url:"/_next/static/chunks/pages/users/profile/update-7515bf7623bdb942.js",revision:"7515bf7623bdb942"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-845e4bf3e7f4d42a.js",revision:"845e4bf3e7f4d42a"},{url:"/_next/static/css/2a5095c95b272393.css",revision:"2a5095c95b272393"},{url:"/_next/static/css/e4eccfba81387e58.css",revision:"e4eccfba81387e58"},{url:"/_next/static/media/bridge.eb55ff34.png",revision:"96869f380cf3363a3bde352b71cc1da5"},{url:"/_next/static/media/hero_image.fda8f487.png",revision:"52c5b27cce919875113e5b204a77e09f"},{url:"/_next/static/media/hero_wallet.3222f7d5.png",revision:"62b8806d5c898002491baa8d1f3d62b6"},{url:"/_next/static/media/mint.f848caa4.png",revision:"6a0c45aba6901d6fc39d4ec4111c7a5f"},{url:"/_next/static/media/price-tag.ed87a6ce.svg",revision:"2a9f7e83908dff095ede7e058a7fceeb"},{url:"/_next/static/zjSijCnXRzDO7t2TGHw-m/_buildManifest.js",revision:"a5c23007f1a806776ad0c39da694239b"},{url:"/_next/static/zjSijCnXRzDO7t2TGHw-m/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/zjSijCnXRzDO7t2TGHw-m/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/avatar/user01.png",revision:"6a1a4841c6d348bb08e4b421e216e6c7"},{url:"/collection/dummyImage.svg",revision:"149b1cb9fd2a6fc1aee4d70bd15f98ea"},{url:"/fonts/MonumentExtended-Regular.otf",revision:"73b9994bb505da43a387d107849baf95"},{url:"/fonts/MonumentExtended-Ultrabold.otf",revision:"3b24078346a6ae8b9caeca47834fcea9"},{url:"/fonts/MonumentExtended.woff",revision:"f4c616d04417f78e261b52710b5b72f4"},{url:"/icon-192x192.png",revision:"e9ff706e28623393886b7166677c19ac"},{url:"/icon-256x256.png",revision:"afcde2e0dfe1e90b9b85c671fcf0157d"},{url:"/icon-384x384.png",revision:"9b0a4f580b5fbd71eaf4fa562deac904"},{url:"/icon-512x512.png",revision:"b6643eea48368ab8538c565c626bdb64"},{url:"/icons/apps.svg",revision:"89a1c56cad3180c1d21868b14211914b"},{url:"/icons/binance.svg",revision:"b5d3232f9736eefdb871820b08c6823b"},{url:"/icons/bridge.png",revision:"96869f380cf3363a3bde352b71cc1da5"},{url:"/icons/chart-line.svg",revision:"0899ef4c4dfe44d882aeaca8a00c04ba"},{url:"/icons/closeIcon.svg",revision:"050fb09a7af5d2884dfda02fbd115199"},{url:"/icons/dark-heart.png",revision:"0a170b9b7f7bbf794dde6425115c900d"},{url:"/icons/downIcon.svg",revision:"5a80f3900c477880d1dab77c7d3af01a"},{url:"/icons/envelope.svg",revision:"714aaeffe59e3dae69ee89f8dbf9af74"},{url:"/icons/eth.svg",revision:"d748d2d18a5ccbc1a4a8ed2b0674f075"},{url:"/icons/eth_classic.svg",revision:"76bc616f6ec03be3db0f5dfa24eb565e"},{url:"/icons/events.svg",revision:"b792daca90aff7fddf569850c46cf2ca"},{url:"/icons/exploreNFT.png",revision:"7324f31b45aa0a295c1e279d66b4d177"},{url:"/icons/eye.svg",revision:"7616f2218c9e3f8a9318d835bdd05690"},{url:"/icons/filter.svg",revision:"4e56dc8cb50654b43f6c8c282526f302"},{url:"/icons/grid4.svg",revision:"7bf81b9c41830840901329f043640d03"},{url:"/icons/grid9.svg",revision:"453e3257762ecf6ce959cd947e49182c"},{url:"/icons/heart.svg",revision:"24866d39731b1fbd5ca5c74a11da3245"},{url:"/icons/hero_image.png",revision:"52c5b27cce919875113e5b204a77e09f"},{url:"/icons/hero_wallet.png",revision:"62b8806d5c898002491baa8d1f3d62b6"},{url:"/icons/info.svg",revision:"da4b17017d57dda591f21d7c42b0234f"},{url:"/icons/list.svg",revision:"19cf1e264f812de83c791e09767f9e48"},{url:"/icons/matic.svg",revision:"4ce4ba8c8c32c7740a4af560e8e673ec"},{url:"/icons/mint.png",revision:"6a0c45aba6901d6fc39d4ec4111c7a5f"},{url:"/icons/notification.svg",revision:"e13dbc03827266327a4d1475245e0e71"},{url:"/icons/people.svg",revision:"8a20548589d96ec9e07c2d031706f9cd"},{url:"/icons/price-tag.svg",revision:"2a9f7e83908dff095ede7e058a7fceeb"},{url:"/icons/right-arrow.svg",revision:"a96f56b85844b4df7732227c9f0d50cf"},{url:"/icons/search.svg",revision:"f453fb1e4c3e0d7368a06011590b0172"},{url:"/icons/timer.svg",revision:"7921d804c0a8b1effad01486f4bc3b93"},{url:"/icons/toggle.png",revision:"087c78edc2432d5bde545e08b4e23dd9"},{url:"/icons/verification.svg",revision:"c3438fe4e17d153393107311b7f8f2de"},{url:"/icons/wallet.svg",revision:"d70fc6b8768bccffeebec2a170ece754"},{url:"/images/art.png",revision:"6b7523859901741935fa6578b98bbf98"},{url:"/images/cartoons.png",revision:"2af84784078c09b017d1dd922c4c2d60"},{url:"/images/collectibles.png",revision:"802b62666e43dfbc73f9f93205e70a0d"},{url:"/images/domain_names.png",revision:"240df04c19a02640531d24c96a7bc7af"},{url:"/images/fashion.png",revision:"6330a05933640912ec612dd77f967c5d"},{url:"/images/gift_cards.png",revision:"4c84c00489c4f5670a8f5d26eafef479"},{url:"/images/memes.png",revision:"98fcd31dbd4a7a16ae8cc903b7b505f9"},{url:"/images/movies.png",revision:"806a1b993b89c06646bba16f427f3af9"},{url:"/images/music.jpg",revision:"297353f04fca2cda6b4fd373d6532be2"},{url:"/images/photography.jpg",revision:"4b626fd9b54af0c5b53bdc7ab0f1c36d"},{url:"/images/sports.jpg",revision:"868a65858e5282d9f19d935fc14a280f"},{url:"/images/ticketing.png",revision:"a6a437cc4ea59f8f8d2a38a3028ffb48"},{url:"/images/video-game-assets.png",revision:"5d38dc657f94afd719869c4d6c377616"},{url:"/images/virtual-land.png",revision:"d44e810ccecd3f14abee5f532c7733e0"},{url:"/images/wearables.png",revision:"44260910af0336c95f7226281a441253"},{url:"/logo/bnb.png",revision:"162aaf57c64bd732a87c2d553a12f165"},{url:"/logo/eth.jpg",revision:"30316fed437a0b869a3354f77349051e"},{url:"/logo/eth.png",revision:"da8858bee297e9ecf5affaff33a11798"},{url:"/logo/logo.svg",revision:"38d8414d7e1081ff351a0e51f48d1ab2"},{url:"/logo/metamask.svg",revision:"ef4df78e93e72b6e35a1a0eb1090c5dd"},{url:"/logo/vefi_nft_logo.svg",revision:"33abb3a1747796cb86b37cb4aba9ba86"},{url:"/logo/wallet.svg",revision:"0fe743f7b87f87c9ceb77fb21dbd5e9b"},{url:"/manifest.json",revision:"7be64bf709467d60306fb1777383333a"},{url:"/marketplace/topSellers/1.png",revision:"d0869e6bf47538c662a13cd7193a953c"},{url:"/marketplace/topSellers/2.png",revision:"d3bfe47309cd51c5b4b1fe493c98de05"},{url:"/marketplace/topSellers/3.png",revision:"469c58af32e109bef50d812c2927fa83"},{url:"/marketplace/topSellers/4.png",revision:"a35a8e102896b7b1b95408cf86ef5a56"},{url:"/marketplace/topSellers/5.png",revision:"d11920d4a362faa99062a95d943f5353"},{url:"/marketplace/topSellers/6.png",revision:"c17afcca4cc3bbadf3d32cbebef600c1"},{url:"/marketplace/topSellers/7.png",revision:"44b7de423dc88f5dd0dccdc1a0c748db"},{url:"/marketplace/topSellers/8.png",revision:"6f66ad3f2e27ec8c7ee9a8de3d210388"},{url:"/nft/nft01.png",revision:"d24e6cda1b956a95936d21e012a03cbd"},{url:"/nft/nft02.png",revision:"4056fd22e5517b7e9cb553cc244eed5f"},{url:"/nft/nft03.png",revision:"6d04cfdfec687f6dbf8379c6b59610b6"},{url:"/objects/bg.png",revision:"558cf88fa3ff8eea77d6829c3dc3cca7"},{url:"/objects/bridge.svg",revision:"f5b192a721a57e11bc78266765e1c3ad"},{url:"/objects/bridge2.svg",revision:"96b0a87e7a235d7d5b5fca0bf0e34a33"},{url:"/objects/colorBackground.svg",revision:"0a88136d5f6a47ed5ca3f9f3db03d227"},{url:"/objects/colorBg.svg",revision:"0ad1fde4064d8933d6e9310cf0fd2f4e"},{url:"/objects/marketplaceObjects.svg",revision:"0eae733f9e4ac81d7d1780a638c51e41"},{url:"/objects/objectGrouped.png",revision:"fb3b7129b854b3f5e7b148bf0f7975df"},{url:"/objects/round.svg",revision:"df31050d008b76e72cde126190e8a3ee"},{url:"/objects/row-head.png",revision:"da2e353004960fcf95a6e781b968277b"},{url:"/objects/solarSystem.png",revision:"45ce945a8a3f27db91b6077a8f757a74"},{url:"/static/favicon.ico",revision:"3c329555f8e3d7299c90eafa6eb891ce"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));