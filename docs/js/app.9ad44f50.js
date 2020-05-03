(function(e){function t(t){for(var a,i,n=t[0],l=t[1],u=t[2],d=0,h=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,n=1;n<s.length;n++){var l=s[n];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="vue-product-carousel/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var c=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container mx-auto p-5"},[e._m(0),s("vue-product-carousel",{staticClass:"flex justify-center w-2/3 mb-20 mx-auto cursor-move",attrs:{reverse:!0,images:e.images}}),e._m(1)],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"py-20 border-b border-gray-300 text-center"},[s("h1",{staticClass:"text-3xl lg:text-5xl font-bold leading-tigh"},[e._v("A flexible product carousel for Vue.js")]),s("p",{staticClass:"leading-relaxed text-2xl lg:text-2xl text-gray-600"},[e._v(" Loop a series of images in a 360 rotatation carousel with this plugin for Vue.js ")]),s("div",{staticClass:"flex mt-6 justify-center"},[s("a",{staticClass:"rounded-lg px-5 py-4 bg-green-600 hover:bg-green-500 text-lg text-white font-semibold leading-tight",attrs:{href:"#started"}},[e._v("Get started")]),s("a",{staticClass:"ml-4 rounded-lg px-5 py-4 bg-gray-300 hover:bg-gray-200 text-lg text-gray-800 font-semibold leading-tight",attrs:{href:"https://github.com/deviznet/vue-product-carousel"}},[e._v("Github")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"pt-20 border-t border-gray-300",attrs:{id:"started"}},[s("h2",{staticClass:"text-2xl font-medium"},[e._v("Installation")]),s("p",{staticClass:"text-gray-600 text-lg"},[e._v("Quick start guide for installing and configuring the plugin")]),s("pre",{staticClass:"flex flex-col rounded-lg bg-gray-800 p-5 my-10 overflow-x-scroll"},[e._v("      "),s("code",{staticClass:"text-gray-500 mb-1 select-none"},[e._v("# Using npm")]),e._v("\n      "),s("code",{staticClass:"text-white mb-5 select-all"},[e._v("npm install vue-product-carousel")]),e._v("\n      "),s("code",{staticClass:"text-gray-500 mb-1 select-none"},[e._v("# Using yarn")]),e._v("\n      "),s("code",{staticClass:"text-white select-all"},[e._v("yarn add vue-product-carousel")]),e._v("\n    ")]),s("p",{staticClass:"text-gray-600 text-lg"},[e._v("Import the plugin as a component inside your vue template")]),s("pre",{staticClass:"flex flex-col rounded-lg bg-gray-800 p-5 my-10 text-white overflow-x-scroll"},[e._v("      "),s("code",{staticClass:"mb-1 select-all"},[e._v("import "),s("span",{staticClass:"text-blue-500"},[e._v("VueProductCarousel")]),e._v(" from "),s("span",{staticClass:"text-green-500"},[e._v("'vue-product-carousel'")]),e._v(";")]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v("export default {")]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v(" data: "),s("span",{staticClass:"text-white"},[e._v("({")])]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v("   images: ["),s("span",{staticClass:"text-green-500"},[e._v("'/img1.png'")]),e._v(", "),s("span",{staticClass:"text-green-500"},[e._v("'/img2.png'")]),e._v(", "),s("span",{staticClass:"text-green-500"},[e._v("'/img3.png'")]),e._v("]")]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v(" }),")]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v(" components: {")]),e._v("\n      "),s("code",{staticClass:"mb-1 text-blue-500"},[e._v("   VueProductCarousel")]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v(" }")]),e._v("\n      "),s("code",{staticClass:"mb-1"},[e._v("};")]),e._v("\n    ")]),s("p",{staticClass:"text-gray-600 text-lg"},[e._v("Use the tag "),s("code",{staticClass:"bg-gray-800 inline-block px-1 rounded-lg text-base text-red-500"},[e._v("vue-product-carousel")]),e._v(" inside your template section and set the "),s("code",{staticClass:"bg-gray-800 inline-block px-1 rounded-lg text-base text-yellow-500"},[e._v("images")]),e._v(" attribute with all images in an array.")]),s("pre",{staticClass:"flex flex-col rounded-lg bg-gray-800 p-5 my-10 overflow-x-scroll"},[e._v("      "),s("code",{staticClass:"text-gray-500 mb-1 select-all"},[e._v("<"),s("span",{staticClass:"text-red-500"},[e._v("vue-product-carousel")]),e._v(" "),s("span",{staticClass:"text-yellow-500"},[e._v("images")]),e._v('="'),s("span",{staticClass:"text-green-500"},[e._v("images")]),e._v('"></'),s("span",{staticClass:"text-red-500"},[e._v("vue-product-carousel")]),e._v(">")]),e._v("\n    ")])])}],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-product-carousel"},[e.isLoaded?[s("img",{attrs:{src:e.carousel.currentPath,draggable:"false"},on:{mouseup:e.handleMouseUp,mousedown:e.handleMouseDown,mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave,touchend:e.handleTouchEnd,touchstart:e.handleTouchStart,touchmove:e.handleTouchMove}})]:e._t("default")],2)},n=[];function l(e){const t=[];return e&&e.map(e=>new Promise((t,s)=>{const a=new Image;a.src=e,a.onload=()=>t(a),a.onabort=()=>s(e),a.onerror=()=>s(e)})),Promise.all(t)}var u={name:"vue-product-carousel",props:{images:{type:Array,required:!0,default:()=>[]},speed:{type:Number,default:10},reverse:{type:Boolean,default:!1},infinite:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:()=>({isLoaded:!1,carousel:{current:0,currentPath:null},mouse:{isMoving:!1,savedPosition:0,currentPosition:0}}),beforeMount(){this.$emit("loading"),l(this.images).then(()=>{this.isLoaded=!0,this.$emit("loaded")})},created(){this.carousel.currentPath=this.images[this.carousel.current]},methods:{handleMouseUp(){this.mouse.isMoving=!1,this.$emit("stopping")},handleMouseLeave(){this.mouse.isMoving=!1,this.$emit("stopping")},handleMouseDown(e){this.disabled||(this.mouse.savedPosition=e.pageX,this.mouse.isMoving=!0,this.$emit("starting"))},handleTouchStart(e){e.preventDefault(),this.disabled||(this.mouse.savedPosition=e.touches[0].pageX,this.mouse.isMoving=!0,this.$emit("starting"))},handleTouchEnd(){this.mouse.isMoving=!1,this.$emit("stopping")},handleTouchMove(e){e.preventDefault(),this.handleMovement(e.touches[0].pageX)},handleMouseMove(e){this.handleMovement(e.pageX)},handleMovement(e){if(this.mouse.isMoving){this.mouse.currentPosition=e;const t=this.mouse.currentPosition-this.mouse.savedPosition;Math.abs(t)>this.speed&&(this.mouse.savedPosition=this.mouse.currentPosition,t>0&&!this.reverse||t<0&&this.reverse?this.slideToRight():this.slideToLeft())}},slideToRight(){this.carousel.current<this.images.length?(this.carousel.current+=1,this.carousel.currentPath=this.images[this.carousel.current-1]):this.infinite&&(this.carousel.current=0,this.carousel.currentPath=this.images[this.carousel.current])},slideToLeft(){this.carousel.current>1?(this.carousel.current-=1,this.carousel.currentPath=this.images[this.carousel.current-1]):this.infinite&&(this.carousel.current=this.images.length,this.carousel.currentPath=this.images[this.carousel.current-1])},slideTo(e){this.images[e]&&(this.carousel.current=e,this.carousel.currentPath=this.images[this.carousel.current])}}},c=u,d=s("2877"),h=Object(d["a"])(c,i,n,!1,null,null,null),v=h.exports,g={data:()=>({images:[]}),beforeMount(){for(let e=1;e<=25;e+=1)this.images.push(`img/${e}.png`)},components:{VueProductCarousel:v}},p=g,m=Object(d["a"])(p,r,o,!1,null,null,null),f=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:e=>e(f)}).$mount("#app")}});
//# sourceMappingURL=app.9ad44f50.js.map