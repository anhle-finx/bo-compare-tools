if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const l=e=>i(e,o),c={module:{uri:o},exports:a,require:l};s[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Compare-408f7cd3.css",revision:null},{url:"assets/Compare-5c0b71cb.js",revision:null},{url:"assets/ConfigsCompare-10dfcf79.js",revision:null},{url:"assets/Dashboard-461410af.css",revision:null},{url:"assets/Dashboard-e0f27e4c.js",revision:null},{url:"assets/db-78ad1c80.js",revision:null},{url:"assets/icon-e5751860.svg",revision:null},{url:"assets/index-7fcdc119.js",revision:null},{url:"assets/index-c44629be.css",revision:null},{url:"assets/use-real-shape-2d983f8e.js",revision:null},{url:"icon.svg",revision:"ef773a3066a9edbdf374b026142ccb87"},{url:"icons/maskable_icon_x128.png",revision:"f2a55a2cbeb1119379649aa515cc9c2e"},{url:"icons/maskable_icon_x192.png",revision:"b9ac9b05e54d577f24677180e81dc479"},{url:"icons/maskable_icon_x384.png",revision:"34b31afd667a76b3e8bde9d65fe041a7"},{url:"icons/maskable_icon_x48.png",revision:"196364073593bb4c1753ded2796d2b75"},{url:"icons/maskable_icon_x512.png",revision:"312e9f40ee4fb4844d0344a68df29aba"},{url:"icons/maskable_icon_x72.png",revision:"a2c67e0309b8ce89c0456507e7c864e9"},{url:"icons/maskable_icon_x96.png",revision:"600952d3ff7912aedf7f944bda55906f"},{url:"icons/maskable_icon.png",revision:"581496adeca9aa460c920dd287b5532c"},{url:"index.html",revision:"358c84b396a35c38ef3dbebec6e4a172"},{url:"noflash.js",revision:"e0a31b98d56e8d3da6d9f83ef65b680b"},{url:"registerSW.js",revision:"bf3975aac0d935e381beecfb0424c2c5"},{url:"manifest.webmanifest",revision:"699fa6e115f65091e411bea2b8297700"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
