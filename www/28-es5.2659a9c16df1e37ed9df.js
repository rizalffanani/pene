!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"Sa0/":function(e,o,i){"use strict";i.r(o),i.d(o,"Tab5PageModule",(function(){return v}));var r,c,a,u=i("ofXK"),b=i("3Pt+"),s=i("TEn/"),l=i("tyNb"),p=i("mrSG"),f=i("3LUQ"),m=i("fXoL"),d=i("e8h1"),h=[{path:"",component:(r=function(){function e(n,o,i,r){t(this,e),this.formBuilder=n,this.alert=o,this.storage=i,this.router=r,this.submitAttempt=!1,this.ready=!1,this.inputForm=n.group({q1:["",b.l.compose([b.l.required])]})}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.storage.get("q1").then((function(t){t&&n.inputForm.controls.q1.setValue(t)}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"tes",value:function(t){this.inputForm.controls.q1.setValue(t),this.storage.set("q1",t)}},{key:"simpan",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.inputForm.valid?this.router.navigate(["/qam3"]):this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");case 1:case"end":return t.stop()}}),t,this)})))}}])&&n(o.prototype,i),r&&n(o,r),e}(),r.\u0275fac=function(t){return new(t||r)(m.Hb(b.a),m.Hb(f.a),m.Hb(d.b),m.Hb(l.g))},r.\u0275cmp=m.Bb({type:r,selectors:[["app-tab5"]],decls:26,vars:1,consts:[["no-border",""],["color","dark"],[1,"form"],[3,"formGroup"],[1,"item"],[1,"titel"],[1,"input"],["formControlName","q1"],[1,"row"],[1,"col12"],["expand","full","size","large","color","def",3,"click"],[1,"col7"],[1,"col5"],["expand","full","color","danger",3,"click"],["name","arrow-forward-outline"]],template:function(t,n){1&t&&(m.Kb(0,"ion-header",0),m.Kb(1,"ion-toolbar"),m.Kb(2,"ion-title",1),m.ec(3,"Aplikasi Pelaporan Cuaca"),m.Jb(),m.Jb(),m.Jb(),m.Kb(4,"ion-content"),m.Kb(5,"div",2),m.Kb(6,"form",3),m.Kb(7,"div",4),m.Kb(8,"div",5),m.ec(9,"Identification of the type of report"),m.Jb(),m.Kb(10,"div",6),m.Ib(11,"ion-input",7),m.Jb(),m.Jb(),m.Jb(),m.Kb(12,"div",8),m.Kb(13,"div",9),m.Kb(14,"ion-button",10),m.Sb("click",(function(){return n.tes("MET REPORT")})),m.ec(15,"MET REPORT"),m.Jb(),m.Jb(),m.Kb(16,"div",9),m.Kb(17,"ion-button",10),m.Sb("click",(function(){return n.tes("SPECIAL")})),m.ec(18,"SPECIAL"),m.Jb(),m.Jb(),m.Jb(),m.Jb(),m.Jb(),m.Kb(19,"ion-footer"),m.Kb(20,"div",8),m.Ib(21,"div",11),m.Kb(22,"div",12),m.Kb(23,"ion-button",13),m.Sb("click",(function(){return n.simpan()})),m.ec(24,"Next "),m.Ib(25,"ion-icon",14),m.Jb(),m.Jb(),m.Jb(),m.Jb()),2&t&&(m.xb(6),m.Wb("formGroup",n.inputForm))},directives:[s.i,s.t,s.s,s.g,b.m,b.h,b.c,s.k,s.C,b.g,b.b,s.e,s.h,s.j],styles:[".form[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:30px}.item[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{padding:5px 20px;font-size:90%}.row[_ngcontent-%COMP%]{margin-top:20px}.item[_ngcontent-%COMP%]   .titel[_ngcontent-%COMP%]{color:#2c3e50}.item[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;margin-top:5px}"]}),r)}],g=((a=function n(){t(this,n)}).\u0275mod=m.Fb({type:a}),a.\u0275inj=m.Eb({factory:function(t){return new(t||a)},imports:[[l.i.forChild(h)],l.i]}),a),v=((c=function n(){t(this,n)}).\u0275mod=m.Fb({type:c}),c.\u0275inj=m.Eb({factory:function(t){return new(t||c)},imports:[[u.b,b.d,s.u,b.k,g]]}),c)}}])}();