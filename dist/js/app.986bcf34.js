(function(){"use strict";var r={2741:function(r,e,t){var a=t(144),i=function(){var r=this,e=r._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/hcv-gallery"}},[r._v("Gallery")])],1),e("router-view")],1)},o=[],n=t(1001),s={},u=(0,n.Z)(s,i,o,!1,null,null,null),l=u.exports,h=t(8345),c=function(){var r=this,e=r._self._c;return e("div",{staticClass:"gallery"},r._l(this.$store.state.images,(function(r){return e("div",{key:r.id,staticClass:"image"},[e("router-link",{attrs:{to:{name:"image",params:{id:r.id}}}},[e("img",{staticClass:"gallery-image",attrs:{src:r.url}})])],1)})),0)},d=[],p={name:"HomeView"},v=p,m=(0,n.Z)(v,c,d,!1,null,null,null),g=m.exports,f=function(){var r=this,e=r._self._c;return e("div",{staticClass:"image-view"},[e("div",{staticClass:"display"},[e("i",{directives:[{name:"show",rawName:"v-show",value:1!=r.$route.params.id,expression:"$route.params.id != 1"}],staticClass:"fa-solid fa-arrow-left",on:{click:r.moveLeft}}),e("img",{staticClass:"image-display",attrs:{src:r.imageUrl,alt:""}}),e("i",{directives:[{name:"show",rawName:"v-show",value:14!=r.$route.params.id,expression:"$route.params.id != 14"}],staticClass:"fa-solid fa-arrow-right",on:{click:r.moveRight}})])])},y=[],_=(t(7658),{methods:{moveRight(){this.$router.push({name:"image",params:{id:this.$route.params.id+1}})},moveLeft(){this.$router.push({name:"image",params:{id:this.$route.params.id-1}})}},computed:{imageUrl(){return this.$store.state.images[this.$route.params.id-1].url}}}),j=_,b=(0,n.Z)(j,f,y,!1,null,null,null),w=b.exports;a.ZP.use(h.ZP);const x=[{path:"/hcv-gallery",name:"home",component:g},{path:"/hcv-gallery/:id",name:"image",component:w}],O=new h.ZP({routes:x});var k=O,C=t(629);a.ZP.use(C.ZP);var $=new C.ZP.Store({state:{images:[{id:1,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000289/hcv/IMG_8298_ioai92.jpg"},{id:2,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000289/hcv/IMG_1218_opa4oj.jpg"},{id:3,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000289/hcv/20200919_142340_yfxhy4.jpg"},{id:4,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000288/hcv/DSC_0765_o5izam.jpg"},{id:5,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000288/hcv/20200808_195811_vbk5ab.jpg"},{id:6,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000288/hcv/school_outside_of_Durban_uirdwu.jpg"},{id:7,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/20200607_172218-2_hpe1pb.jpg"},{id:8,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/20191229_120351_ywotuv.jpg"},{id:9,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/Children-Standing-Desks_yavcsf.jpg"},{id:10,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000287/hcv/nathan-dumlao-71u2fOofI-U-unsplash_lnsqhm.jpg"},{id:11,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000286/hcv/good-faces-xmSWVeGEnJw-unsplash_oqzpv2.jpg"},{id:12,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000286/hcv/PlaylistCareerReadiness_aghbjt.png"},{id:13,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000285/hcv/IMG_7355_Original_y1k8wx.jpg"},{id:14,url:"https://res.cloudinary.com/dvnhxbhjh/image/upload/v1677000285/hcv/11_year_olds_tweents_tojwcu.jpg"}],currentImage:{}},getters:{},mutations:{LOAD_IMAGES(r,e){r.images=e}},actions:{},modules:{}});a.ZP.config.productionTip=!1,new a.ZP({router:k,store:$,render:r=>r(l)}).$mount("#app")}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return r[a](o,o.exports,t),o.exports}t.m=r,function(){var r=[];t.O=function(e,a,i,o){if(!a){var n=1/0;for(h=0;h<r.length;h++){a=r[h][0],i=r[h][1],o=r[h][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||n>=o)&&Object.keys(t.O).every((function(r){return t.O[r](a[u])}))?a.splice(u--,1):(s=!1,o<n&&(n=o));if(s){r.splice(h--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var h=r.length;h>0&&r[h-1][2]>o;h--)r[h]=r[h-1];r[h]=[a,i,o]}}(),function(){t.d=function(r,e){for(var a in e)t.o(e,a)&&!t.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};t.O.j=function(e){return 0===r[e]};var e=function(e,a){var i,o,n=a[0],s=a[1],u=a[2],l=0;if(n.some((function(e){return 0!==r[e]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(u)var h=u(t)}for(e&&e(a);l<n.length;l++)o=n[l],t.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return t.O(h)},a=self["webpackChunkhcv_gallery"]=self["webpackChunkhcv_gallery"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(2741)}));a=t.O(a)})();
//# sourceMappingURL=app.986bcf34.js.map