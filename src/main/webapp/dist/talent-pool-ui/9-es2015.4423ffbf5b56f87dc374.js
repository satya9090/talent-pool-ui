(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8fhk":function(t,e,n){"use strict";n.r(e),n.d(e,"RecruiterModule",(function(){return O}));var c=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),r=n("6NWb"),s=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["app-search"]],decls:7,vars:0,consts:[[1,"form-row"],[1,"col-10"],["type","text","ngModel","","name","searchText",1,"form-control"],[1,"col"],["type","button",1,"btn","btn-link","btn-sm"]],template:function(t,e){1&t&&(s.Rb(0,"form"),s.Rb(1,"div",0),s.Rb(2,"div",1),s.Nb(3,"input",2),s.Qb(),s.Rb(4,"div",3),s.Rb(5,"button",4),s.Dc(6,"Advance Search"),s.Qb(),s.Qb(),s.Qb(),s.Qb())},directives:[i.x,i.o,i.p,i.b,i.n,i.q],styles:[""]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["app-filter"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Rb(0,"p"),s.Dc(1,"filter works!"),s.Qb())},styles:[""]}),t})();var l=n("kt0X"),d=n("wHSu"),p=n("GiMP");function f(t,e){if(1&t&&(s.Rb(0,"span",12),s.Dc(1),s.Qb()),2&t){const t=e.$implicit;s.zb(1),s.Gc(" ",t.minor," ",t.experienceInYears,"yrs ")}}let g=(()=>{class t{constructor(t){this.store=t,this.faDownload=d.c}ngOnInit(){}toggleSelection(){this.store.dispatch(new p.b(this.details.candidateId))}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(l.h))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-profile-details"]],inputs:{details:"details"},decls:17,vars:8,consts:[[1,"card"],[1,"card-body"],[1,"d-flex","align-items-center"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"ngModel","change"],[1,"img-thumbnail",3,"src"],[1,"details"],[1,"identity"],[1,"name"],[3,"icon"],[1,"description"],["class","chip",4,"ngFor","ngForOf"],[1,"chip"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"div",3),s.Rb(4,"input",4),s.dc("change",(function(){return e.toggleSelection()})),s.Qb(),s.Qb(),s.Nb(5,"img",5),s.Rb(6,"div",6),s.Rb(7,"div",7),s.Rb(8,"span",8),s.Dc(9),s.Qb(),s.Rb(10,"span"),s.Dc(11),s.Qb(),s.Nb(12,"fa-icon",9),s.Qb(),s.Rb(13,"p",10),s.Dc(14),s.Qb(),s.Rb(15,"div"),s.Bc(16,f,2,2,"span",11),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t&&(s.zb(4),s.lc("ngModel",e.details.selected),s.zb(1),s.lc("src",e.details.profileImage,s.wc),s.zb(4),s.Gc(" ",e.details.firstName," ",e.details.lastName," "),s.zb(2),s.Fc("Experience : ",e.details.experience," year(s)"),s.zb(1),s.lc("icon",e.faDownload),s.zb(2),s.Fc(" Description : ",e.details.profileDescription," "),s.zb(2),s.lc("ngForOf",e.details.skills))},directives:[i.a,i.n,i.q,r.a,c.k],styles:[".card[_ngcontent-%COMP%]{margin-bottom:.5rem}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:.5rem}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .img-thumbnail[_ngcontent-%COMP%]{max-height:10rem}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{padding-left:.5rem}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-weight:400;font-size:.9rem}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600;font-size:1rem}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{padding-top:.3rem;font-size:.8rem}"]}),t})();function u(t,e){1&t&&s.Nb(0,"app-profile-details",1),2&t&&s.lc("details",e.$implicit)}let m=(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.store.select("recruiterState").subscribe(t=>{this.profiles=t.profiles})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(l.h))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-profile-list"]],decls:1,vars:1,consts:[[3,"details",4,"ngFor","ngForOf"],[3,"details"]],template:function(t,e){1&t&&s.Bc(0,u,1,1,"app-profile-details",0),2&t&&s.lc("ngForOf",e.profiles)},directives:[c.k,g],styles:[""]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Gb({type:t,selectors:[["app-home"]],decls:12,vars:0,consts:[[1,"row","mt-2"],[1,"col-12"],[1,"row"],[1,"col-md-3"],[1,"col-md-9"],[1,"text-right"],[1,"btn","btn-primary"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Nb(2,"app-search"),s.Qb(),s.Qb(),s.Nb(3,"br"),s.Rb(4,"div",2),s.Rb(5,"div",3),s.Nb(6,"app-filter"),s.Qb(),s.Rb(7,"div",4),s.Nb(8,"app-profile-list"),s.Rb(9,"div",5),s.Rb(10,"button",6),s.Dc(11,"Download"),s.Qb(),s.Qb(),s.Qb(),s.Qb())},directives:[a,b,m],styles:[""]}),t})();var y=n("pKmL");let O=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[c.b,i.k,r.b,o.e.forChild([{path:"",component:h}]),y.a]]}),t})()}}]);