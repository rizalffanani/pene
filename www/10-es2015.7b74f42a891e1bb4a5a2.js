(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1enk":function(t,e,n){"use strict";n.r(e),n.d(e,"GetokenPageModule",(function(){return p}));var s=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),r=n("tyNb"),c=n("mrSG"),a=n("qXBG"),u=n("fXoL"),d=n("e8h1");const b=[{path:"",component:(()=>{class t{constructor(t,e,n,s){this.auth=t,this.storage=e,this.router=n,this.loading=s}ngOnInit(){this.cektoken()}cektoken(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.loading.create({message:"Menyiapkan database...",spinner:"crescent"});t.present(),this.auth.cekToken().subscribe(e=>{1==e.success?(console.log("getting token from server: success"),this.storage.set("token",e.token),this.storage.set("data",e),t.dismiss(),this.router.navigate(["/"])):(console.log("getting token from server: failed"),t.dismiss(),this.router.navigate(["/"]))})}))}}return t.\u0275fac=function(e){return new(e||t)(u.Hb(a.a),u.Hb(d.b),u.Hb(r.g),u.Hb(i.w))},t.\u0275cmp=u.Bb({type:t,selectors:[["app-getoken"]],decls:1,vars:0,template:function(t,e){1&t&&u.Ib(0,"ion-content")},directives:[i.g],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(b)],r.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[s.b,o.d,i.u,g]]}),t})()}}]);