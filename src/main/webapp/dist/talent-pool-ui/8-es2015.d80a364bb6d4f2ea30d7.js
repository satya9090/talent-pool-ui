(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1kll":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),a=n("tyNb"),o=n("6NWb"),l=n("fXoL"),r=n("wHSu");let s=(()=>{class e{constructor(){this.faPhone=r.f,this.faEnvelope=r.d}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-profile"]],decls:14,vars:2,consts:[[1,"card"],[1,"card-body"],[1,"text-center"],["src","http://genchi.info/images/profile-picture-12.jpg","alt","...",1,"img-thumbnail"],[1,"d-flex","align-items-center"],[3,"icon"],[1,"email"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275element"](3,"img",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"h5"),l["\u0275\u0275text"](5,"Debanande Mohanty"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"p",4),l["\u0275\u0275element"](7,"fa-icon",5),l["\u0275\u0275elementStart"](8,"span",6),l["\u0275\u0275text"](9,"123456789"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"p",4),l["\u0275\u0275element"](11,"fa-icon",5),l["\u0275\u0275elementStart"](12,"span",6),l["\u0275\u0275text"](13,"test@gmail.com / test@mail.com"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("icon",t.faPhone),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("icon",t.faEnvelope))},directives:[o.a],styles:[".email[_ngcontent-%COMP%]{display:inline-block;padding-left:1rem}"]}),e})();var c=n("kt0X");let m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-notification"]],inputs:{details:"details"},decls:10,vars:7,consts:[[1,"card"],[1,"card-body"],[1,"d-flex","w-100"],[1,"img-thumbnail","profile-image",3,"src","alt"],[1,"message-details"],[1,"message"],[1,"text-right","date"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275element"](3,"img",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275elementStart"](5,"p",5),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"p",6),l["\u0275\u0275text"](8),l["\u0275\u0275pipe"](9,"date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("src",t.details.from.profileImage,l["\u0275\u0275sanitizeUrl"])("alt",t.details.from.name),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](t.details.message),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind2"](9,4,t.details.date,"dd/mm/yyyy")))},pipes:[i.DatePipe],styles:[".card[_ngcontent-%COMP%]{margin-bottom:.5rem}.card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{max-height:5rem}.card[_ngcontent-%COMP%]   .message-details[_ngcontent-%COMP%]{flex:1;padding-left:.5rem}.card[_ngcontent-%COMP%]   .message-details[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-size:.9rem;font-style:italic}.card[_ngcontent-%COMP%]   .message-details[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:grey;font-weight:600;font-size:.8rem}"]}),e})();function d(e,t){1&e&&l["\u0275\u0275element"](0,"app-notification",1),2&e&&l["\u0275\u0275property"]("details",t.$implicit)}let p=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.store.select("jobSeekerState").subscribe(e=>{this.notifications=e.notifications})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](c.h))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-notification-list"]],decls:1,vars:1,consts:[[3,"details",4,"ngFor","ngForOf"],[3,"details"]],template:function(e,t){1&e&&l["\u0275\u0275template"](0,d,1,1,"app-notification",0),2&e&&l["\u0275\u0275property"]("ngForOf",t.notifications)},directives:[i.NgForOf,m],styles:[""]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"row","mt-2"],[1,"col-md-3"],[1,"col-md-9"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275element"](2,"app-profile"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"div",2),l["\u0275\u0275element"](4,"app-notification-list"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},directives:[s,p],styles:[""]}),e})();n.d(t,"JobSeekerModule",(function(){return u}));const g=[{path:"",component:f}];let u=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,o.b,a.e.forChild(g)]]}),e})()}}]);