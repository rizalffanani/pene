(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{ckp2:function(t,n,i){"use strict";i.r(n),i.d(n,"Qam9PageModule",(function(){return p}));var o=i("ofXK"),e=i("3Pt+"),r=i("TEn/"),b=i("tyNb"),c=i("mrSG"),u=i("3LUQ"),a=i("fXoL"),s=i("e8h1");const l=[{path:"",component:(()=>{class t{constructor(t,n,i,o){this.formBuilder=t,this.storage=n,this.alert=i,this.router=o,this.submitAttempt=!1,this.ready=!1,this.inputForm=t.group({nama:["",e.l.compose([e.l.required])]})}ngOnInit(){}ionViewWillEnter(){return Object(c.a)(this,void 0,void 0,(function*(){this.storage.get("q9").then(t=>{t&&this.inputForm.controls.nama.setValue(t)})}))}tes(t){this.id=this.inputForm.value.nama+t,this.inputForm.controls.nama.setValue(this.id),this.storage.set("q9",this.id)}simpan(){return Object(c.a)(this,void 0,void 0,(function*(){this.inputForm.valid?this.router.navigate(["/qam10"]):this.alert.presentAlert("Lengkapi Formulir","Lengkapi formulir terlebih dahulu")}))}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(e.a),a.Hb(s.b),a.Hb(u.a),a.Hb(b.g))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-qam9"]],decls:56,vars:1,consts:[["no-border",""],["color","dark"],[1,"form"],[3,"formGroup"],[1,"item"],[1,"titel"],[1,"input"],["formControlName","nama"],[1,"row"],[1,"col4"],["expand","full","size","large","color","def",3,"click"],[1,"col5"],["expand","full","color","danger","routerLink","/qam8"],["name","arrow-back-outline"],[1,"col2"],["expand","full","color","danger",3,"click"],["name","arrow-forward-outline"]],template:function(t,n){1&t&&(a.Kb(0,"ion-header",0),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-title",1),a.ec(3,"Aplikasi Pelaporan Cuaca"),a.Jb(),a.Jb(),a.Jb(),a.Kb(4,"ion-content"),a.Kb(5,"div",2),a.Kb(6,"form",3),a.Kb(7,"div",4),a.Kb(8,"div",5),a.ec(9,"Air Temperature"),a.Jb(),a.Kb(10,"div",6),a.Ib(11,"ion-input",7),a.Jb(),a.Jb(),a.Jb(),a.Kb(12,"div",8),a.Kb(13,"div",9),a.Kb(14,"ion-button",10),a.Sb("click",(function(){return n.tes("7")})),a.ec(15,"7"),a.Jb(),a.Jb(),a.Kb(16,"div",9),a.Kb(17,"ion-button",10),a.Sb("click",(function(){return n.tes("8")})),a.ec(18,"8"),a.Jb(),a.Jb(),a.Kb(19,"div",9),a.Kb(20,"ion-button",10),a.Sb("click",(function(){return n.tes("9")})),a.ec(21,"9"),a.Jb(),a.Jb(),a.Kb(22,"div",9),a.Kb(23,"ion-button",10),a.Sb("click",(function(){return n.tes("4")})),a.ec(24,"4"),a.Jb(),a.Jb(),a.Kb(25,"div",9),a.Kb(26,"ion-button",10),a.Sb("click",(function(){return n.tes("5")})),a.ec(27,"5"),a.Jb(),a.Jb(),a.Kb(28,"div",9),a.Kb(29,"ion-button",10),a.Sb("click",(function(){return n.tes("6")})),a.ec(30,"6"),a.Jb(),a.Jb(),a.Kb(31,"div",9),a.Kb(32,"ion-button",10),a.Sb("click",(function(){return n.tes("1")})),a.ec(33,"1"),a.Jb(),a.Jb(),a.Kb(34,"div",9),a.Kb(35,"ion-button",10),a.Sb("click",(function(){return n.tes("2")})),a.ec(36,"2"),a.Jb(),a.Jb(),a.Kb(37,"div",9),a.Kb(38,"ion-button",10),a.Sb("click",(function(){return n.tes("3")})),a.ec(39,"3"),a.Jb(),a.Jb(),a.Ib(40,"div",9),a.Kb(41,"div",9),a.Kb(42,"ion-button",10),a.Sb("click",(function(){return n.tes("0")})),a.ec(43,"0"),a.Jb(),a.Jb(),a.Ib(44,"div",9),a.Jb(),a.Jb(),a.Jb(),a.Kb(45,"ion-footer"),a.Kb(46,"div",8),a.Kb(47,"div",11),a.Kb(48,"ion-button",12),a.Ib(49,"ion-icon",13),a.ec(50," Back"),a.Jb(),a.Jb(),a.Ib(51,"div",14),a.Kb(52,"div",11),a.Kb(53,"ion-button",15),a.Sb("click",(function(){return n.simpan()})),a.ec(54,"Next "),a.Ib(55,"ion-icon",16),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.xb(6),a.Wb("formGroup",n.inputForm))},directives:[r.i,r.t,r.s,r.g,e.m,e.h,e.c,r.k,r.C,e.g,e.b,r.e,r.h,r.A,b.h,r.j],styles:[".form[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:30px}.item[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{padding:5px 20px;font-size:90%}.row[_ngcontent-%COMP%]{margin-top:20px}.item[_ngcontent-%COMP%]   .titel[_ngcontent-%COMP%]{color:#2c3e50}.item[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;margin-top:5px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[b.i.forChild(l)],b.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[o.b,e.d,r.u,e.k,d]]}),t})()}}]);