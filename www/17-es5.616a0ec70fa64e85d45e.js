!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{YFaQ:function(e,i,o){"use strict";o.r(i),o.d(i,"Qam10PageModule",(function(){return J}));var r,b,c,u=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),l=o("tyNb"),p=o("mrSG"),d=o("3LUQ"),f=o("fXoL"),m=o("e8h1"),v=[{path:"",component:(r=function(){function e(n,i,o,r){t(this,e),this.formBuilder=n,this.storage=i,this.alert=o,this.router=r,this.submitAttempt=!1,this.ready=!1,this.inputForm=n.group({nama:["",a.l.compose([a.l.required])]})}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.storage.get("q10").then((function(t){t&&n.inputForm.controls.nama.setValue(t)}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"tes",value:function(t){this.id=this.inputForm.value.nama+t,this.inputForm.controls.nama.setValue(this.id),this.storage.set("q10",this.id)}},{key:"simpan",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.inputForm.valid?this.router.navigate(["/qam11"]):this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu");case 1:case"end":return t.stop()}}),t,this)})))}}])&&n(i.prototype,o),r&&n(i,r),e}(),r.\u0275fac=function(t){return new(t||r)(f.Hb(a.a),f.Hb(m.b),f.Hb(d.a),f.Hb(l.g))},r.\u0275cmp=f.Bb({type:r,selectors:[["app-qam10"]],decls:56,vars:1,consts:[["no-border",""],["color","dark"],[1,"form"],[3,"formGroup"],[1,"item"],[1,"titel"],[1,"input"],["formControlName","nama"],[1,"row"],[1,"col4"],["expand","full","size","large","color","def",3,"click"],[1,"col5"],["expand","full","color","danger","routerLink","/qam9"],["name","arrow-back-outline"],[1,"col2"],["expand","full","color","danger",3,"click"],["name","arrow-forward-outline"]],template:function(t,n){1&t&&(f.Kb(0,"ion-header",0),f.Kb(1,"ion-toolbar"),f.Kb(2,"ion-title",1),f.ec(3,"Aplikasi Pelaporan Cuaca"),f.Jb(),f.Jb(),f.Jb(),f.Kb(4,"ion-content"),f.Kb(5,"div",2),f.Kb(6,"form",3),f.Kb(7,"div",4),f.Kb(8,"div",5),f.ec(9,"Dew Point Temperature"),f.Jb(),f.Kb(10,"div",6),f.Ib(11,"ion-input",7),f.Jb(),f.Jb(),f.Jb(),f.Kb(12,"div",8),f.Kb(13,"div",9),f.Kb(14,"ion-button",10),f.Sb("click",(function(){return n.tes("7")})),f.ec(15,"7"),f.Jb(),f.Jb(),f.Kb(16,"div",9),f.Kb(17,"ion-button",10),f.Sb("click",(function(){return n.tes("8")})),f.ec(18,"8"),f.Jb(),f.Jb(),f.Kb(19,"div",9),f.Kb(20,"ion-button",10),f.Sb("click",(function(){return n.tes("9")})),f.ec(21,"9"),f.Jb(),f.Jb(),f.Kb(22,"div",9),f.Kb(23,"ion-button",10),f.Sb("click",(function(){return n.tes("4")})),f.ec(24,"4"),f.Jb(),f.Jb(),f.Kb(25,"div",9),f.Kb(26,"ion-button",10),f.Sb("click",(function(){return n.tes("5")})),f.ec(27,"5"),f.Jb(),f.Jb(),f.Kb(28,"div",9),f.Kb(29,"ion-button",10),f.Sb("click",(function(){return n.tes("6")})),f.ec(30,"6"),f.Jb(),f.Jb(),f.Kb(31,"div",9),f.Kb(32,"ion-button",10),f.Sb("click",(function(){return n.tes("1")})),f.ec(33,"1"),f.Jb(),f.Jb(),f.Kb(34,"div",9),f.Kb(35,"ion-button",10),f.Sb("click",(function(){return n.tes("2")})),f.ec(36,"2"),f.Jb(),f.Jb(),f.Kb(37,"div",9),f.Kb(38,"ion-button",10),f.Sb("click",(function(){return n.tes("3")})),f.ec(39,"3"),f.Jb(),f.Jb(),f.Ib(40,"div",9),f.Kb(41,"div",9),f.Kb(42,"ion-button",10),f.Sb("click",(function(){return n.tes("0")})),f.ec(43,"0"),f.Jb(),f.Jb(),f.Ib(44,"div",9),f.Jb(),f.Jb(),f.Jb(),f.Kb(45,"ion-footer"),f.Kb(46,"div",8),f.Kb(47,"div",11),f.Kb(48,"ion-button",12),f.Ib(49,"ion-icon",13),f.ec(50," Back"),f.Jb(),f.Jb(),f.Ib(51,"div",14),f.Kb(52,"div",11),f.Kb(53,"ion-button",15),f.Sb("click",(function(){return n.simpan()})),f.ec(54,"Next "),f.Ib(55,"ion-icon",16),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&t&&(f.xb(6),f.Wb("formGroup",n.inputForm))},directives:[s.i,s.t,s.s,s.g,a.m,a.h,a.c,s.k,s.C,a.g,a.b,s.e,s.h,s.A,l.h,s.j],styles:[".form[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:30px}.item[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{padding:5px 20px;font-size:90%}.row[_ngcontent-%COMP%]{margin-top:20px}.item[_ngcontent-%COMP%]   .titel[_ngcontent-%COMP%]{color:#2c3e50}.item[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;margin-top:5px}"]}),r)}],h=((c=function n(){t(this,n)}).\u0275mod=f.Fb({type:c}),c.\u0275inj=f.Eb({factory:function(t){return new(t||c)},imports:[[l.i.forChild(v)],l.i]}),c),J=((b=function n(){t(this,n)}).\u0275mod=f.Fb({type:b}),b.\u0275inj=f.Eb({factory:function(t){return new(t||b)},imports:[[u.b,a.d,s.u,a.k,h]]}),b)}}])}();