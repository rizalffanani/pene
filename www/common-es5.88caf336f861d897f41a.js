!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e,n,i,r,a,u){try{var o=t[a](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function o(t){i(u,r,a,o,s,"next",t)}function s(t){i(u,r,a,o,s,"throw",t)}o(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return o}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=function(){i.selection()},a=function(){i.selectionStart()},u=function(){i.selectionChanged()},o=function(){i.selectionEnd()},s=function(t){i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var i=e/n,r=t*i-t+"ms",a=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=r(regeneratorRuntime.mark((function t(e,n,i,r,a){var u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,i,a,r));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(u="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,r&&r.forEach((function(t){return u.classList.add(t)})),a&&Object.assign(u,a),n.appendChild(u),t.t0=u.componentOnReady,!t.t0){t.next=12;break}return t.next=12,u.componentOnReady();case 12:return t.abrupt("return",u);case 13:case"end":return t.stop()}}),t)})));return function(e,n,i,r,a){return t.apply(this,arguments)}}(),a=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("sxy2"),r=n("ItpF"),a=n("2c9M"),u=function(t,e){var n,u,o=function(t,i,r){if("undefined"!=typeof document){var a=document.elementFromPoint(t,i);a&&e(a)?a!==n&&(c(),s(a,r)):c()}},s=function(t,e){n=t,u||(u=n);var r=n;Object(i.g)((function(){return r.classList.add("ion-activated")})),e()},c=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(i.g)((function(){return e.classList.remove("ion-activated")})),t&&u!==n&&n.click(),n=void 0}};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return o(t.currentX,t.currentY,a.a)},onMove:function(t){return o(t.currentX,t.currentY,a.b)},onEnd:function(){c(!0),Object(a.e)(),u=void 0}})}},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));var i=function(t,e){return null!==e.closest(t)},a=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((r=!0,(i="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n),e):e;var n,i,r},u=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},o=/^[a-z][a-z0-9+\-.]*:/,s=function(){var t=r(regeneratorRuntime.mark((function t(e,n,i,r){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||o.test(e)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),a.push(e,i,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i,r){return t.apply(this,arguments)}}()},syrB:function(e,i,r){"use strict";r.d(i,"a",(function(){return p}));var a=r("3LUQ"),u=r("fXoL"),o=r("tk/3"),s=r("e8h1"),c=r("TEn/"),p=function(){var e=function(){function e(n,i,r,a){t(this,e),this.http=n,this.storage=i,this.navCtrl=r,this.alerts=a,this.isLoggedIn=!1,this.serverUP=!1,this.dataResult="error",this.API_URL="https://tes.privatco.id/mobileapi/"}return n(e,[{key:"tambahKeranjang",value:function(t){return this.http.post(this.API_URL+"tambahkeranjang",t).pipe()}},{key:"bayarPesanan",value:function(t){return this.http.post(this.API_URL+"cekout",t).pipe()}},{key:"hapusPesanan",value:function(t){return this.http.post(this.API_URL+"hapuspesanan",{pid:t}).pipe()}},{key:"hapusKeranjang",value:function(t){return this.http.post(this.API_URL+"hapuskeranjang",{pid:t}).pipe()}},{key:"simpanProfil",value:function(t){return this.http.post(this.API_URL+"simpanprofil",t).pipe()}},{key:"simpanPass",value:function(t){return this.http.post(this.API_URL+"simpanpassword",t).pipe()}},{key:"simpanProduk",value:function(t,e){return this.http.post(this.API_URL+"tambahproduk",{id:t,data:e}).pipe()}},{key:"simpanwww",value:function(t,e,n,i,r,a,u,o,s,c,p,h){return this.http.post(this.API_URL+"simpanwww",{q1:t,q3:e,q4:n,q5:i,q7:r,q8:a,q9:u,q10:o,q11:s,q12:c,q13:p,q14:h}).pipe()}},{key:"simpanAlamat",value:function(t,e){return this.http.post(this.API_URL+"tambahalamat",{id:t,data:e}).pipe()}},{key:"simpanAlamatUtama",value:function(t){return this.http.post(this.API_URL+"tambahalamat/1",{id:t}).pipe()}},{key:"hapusAlamat",value:function(t){return this.http.post(this.API_URL+"hapusalamat",{pid:t}).pipe()}},{key:"simpanRekening",value:function(t,e){return this.http.post(this.API_URL+"tambahrekening",{id:t,data:e}).pipe()}},{key:"hapusRekening",value:function(t){return this.http.post(this.API_URL+"hapusrekening",{pid:t}).pipe()}},{key:"sendChat",value:function(t){return this.http.post(this.API_URL+"kirimpesan",{pesan:t}).pipe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Ob(o.b),u.Ob(s.b),u.Ob(c.y),u.Ob(a.a))},e.\u0275prov=u.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},ybyN:function(e,i,r){"use strict";r.d(i,"a",(function(){return p}));var a=r("3LUQ"),u=r("fXoL"),o=r("tk/3"),s=r("e8h1"),c=r("TEn/"),p=function(){var e=function(){function e(n,i,r,a){t(this,e),this.http=n,this.storage=i,this.navCtrl=r,this.alerts=a,this.isLoggedIn=!1,this.serverUP=!1,this.dataResult="error",this.APP_URL="https://tes.privatco.id/",this.API_URL="https://tes.privatco.id/mobileapi/"}return n(e,[{key:"cekOngkir",value:function(t,e,n,i,r){return this.http.get(this.API_URL+"ceksongkir?dari="+t+"&berat="+e+"&tujuan="+n+"&kurir="+i+"&services="+r).pipe()}},{key:"apiUrl",value:function(){return this.API_URL}},{key:"getListItemstoko",value:function(t){return this.http.get(this.API_URL+"allproduk"+t)}},{key:"getSlider",value:function(){return this.http.get(this.API_URL+"slider").pipe()}},{key:"getNews",value:function(){return this.http.get(this.API_URL+"news").pipe()}},{key:"getListItems",value:function(t){return this.http.get(this.API_URL+"allnews"+t)}},{key:"dropBank",value:function(){return this.http.get(this.API_URL+"getbank").pipe()}},{key:"wasapRotator",value:function(){return this.http.get(this.API_URL+"getwhatsapp").pipe()}},{key:"dropProv",value:function(){return this.http.get(this.API_URL+"getprov").pipe()}},{key:"dropKab",value:function(t){return this.http.get(this.API_URL+"getkab/"+t).pipe()}},{key:"dropKec",value:function(t){return this.http.get(this.API_URL+"getkec/"+t).pipe()}},{key:"getProduk",value:function(){return this.http.get(this.API_URL+"produkterbaru").pipe()}},{key:"getProdukKategori",value:function(t){return this.http.get(this.API_URL+"produk?catid="+t).pipe()}},{key:"getChatNotif",value:function(){return this.http.get(this.API_URL+"chatnotif").pipe()}},{key:"getChat",value:function(){return this.http.get(this.API_URL+"chat").pipe()}},{key:"getBayar",value:function(){return this.http.get(this.API_URL+"bayarpesanan").pipe()}},{key:"getBayarDetail",value:function(t){return this.http.get(this.API_URL+"pembayaran/"+t).pipe()}},{key:"getKategori",value:function(){return this.http.get(this.API_URL+"kategori").pipe()}},{key:"getKeranjang",value:function(){return this.http.get(this.API_URL+"keranjang").pipe()}},{key:"alamatLoad",value:function(t){return this.http.get(this.API_URL+"alamat/?page="+t).pipe()}},{key:"alamatSingle",value:function(t,e){return this.http.get(this.API_URL+"getalamat/"+t+"/"+e).pipe()}},{key:"rekeningLoad",value:function(t){return this.http.get(this.API_URL+"rekening/?page="+t).pipe()}},{key:"rekeningSingle",value:function(t){return this.http.get(this.API_URL+"getrekening/"+t).pipe()}},{key:"lacakPaket",value:function(t){return this.http.get(this.API_URL+"lacakiriman/?trx="+t).pipe()}},{key:"profilLoad",value:function(){return this.http.get(this.API_URL+"profil")}},{key:"pesananLoad",value:function(t){return this.http.get(this.API_URL+"pesanan/?page="+t).pipe()}},{key:"pesananSingle",value:function(t){return this.http.get(this.API_URL+"pesanansingle/"+t).pipe()}},{key:"getProdukSingle",value:function(t){return this.http.get(this.API_URL+"produksingle?pid="+t).pipe()}},{key:"getSize",value:function(t,e){return this.http.get(this.API_URL+"size?pid="+t+"&proid="+e).pipe()}},{key:"getwww",value:function(t){return this.http.get(this.API_URL+"produkwww?pid="+t).pipe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Ob(o.b),u.Ob(s.b),u.Ob(c.y),u.Ob(a.a))},e.\u0275prov=u.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();