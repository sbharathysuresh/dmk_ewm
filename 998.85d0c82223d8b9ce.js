"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[998],{4998:(W,s,c)=>{c.r(s),c.d(s,{TimelineDemoModule:()=>V});var a=c(9808),d=c(4175),m=c(9783),e=c(4893);function g(t,i){1&t&&e.GkF(0)}function v(t,i){1&t&&e.GkF(0)}const r=function(t){return{$implicit:t}};function _(t,i){if(1&t&&(e.ynx(0),e.YNc(1,v,1,0,"ng-container",4),e.BQk()),2&t){const n=e.oxw().$implicit,l=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",l.markerTemplate)("ngTemplateOutletContext",e.VKq(2,r,n))}}function f(t,i){1&t&&e._UZ(0,"div",10)}function T(t,i){1&t&&e._UZ(0,"div",11)}function h(t,i){1&t&&e.GkF(0)}function x(t,i){if(1&t&&(e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,g,1,0,"ng-container",4),e.qZA(),e.TgZ(3,"div",5),e.YNc(4,_,2,4,"ng-container",6),e.YNc(5,f,1,0,"ng-template",null,7,e.W1O),e.YNc(7,T,1,0,"div",8),e.qZA(),e.TgZ(8,"div",9),e.YNc(9,h,1,0,"ng-container",4),e.qZA()()),2&t){const n=i.$implicit,l=i.last,p=e.MAs(6),o=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",o.oppositeTemplate)("ngTemplateOutletContext",e.VKq(7,r,n)),e.xp6(2),e.Q6J("ngIf",o.markerTemplate)("ngIfElse",p),e.xp6(3),e.Q6J("ngIf",!l),e.xp6(2),e.Q6J("ngTemplateOutlet",o.contentTemplate)("ngTemplateOutletContext",e.VKq(9,r,n))}}const C=function(t,i,n,l,p,o,X){return{"p-timeline p-component":!0,"p-timeline-left":t,"p-timeline-right":i,"p-timeline-top":n,"p-timeline-bottom":l,"p-timeline-alternate":p,"p-timeline-vertical":o,"p-timeline-horizontal":X}};let Z=(()=>{class t{constructor(n){this.el=n,this.align="left",this.layout="vertical"}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"content":this.contentTemplate=n.template;break;case"opposite":this.oppositeTemplate=n.template;break;case"marker":this.markerTemplate=n.template}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-timeline"]],contentQueries:function(n,l,p){if(1&n&&e.Suo(p,m.jx,4),2&n){let o;e.iGM(o=e.CRH())&&(l.templates=o)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},decls:2,vars:13,consts:[[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["marker",""],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0),e.YNc(1,x,10,11,"div",1),e.qZA()),2&n&&(e.Tol(l.styleClass),e.Q6J("ngStyle",l.style)("ngClass",e.Hh0(5,C,"left"===l.align,"right"===l.align,"top"===l.align,"bottom"===l.align,"alternate"===l.align,"vertical"===l.layout,"horizontal"===l.layout)),e.xp6(1),e.Q6J("ngForOf",l.value))},dependencies:[a.mk,a.sg,a.O5,a.tP,a.PC],styles:[".p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:column-reverse}\n"],encapsulation:2,changeDetection:0}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,m.m8]}),t})();var u=c(845);function A(t,i){1&t&&e.GkF(0)}function q(t,i){if(1&t&&(e.TgZ(0,"div",8),e.Hsn(1,1),e.YNc(2,A,1,0,"ng-container",6),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",n.headerTemplate)}}function D(t,i){1&t&&e.GkF(0)}function b(t,i){if(1&t&&(e.TgZ(0,"div",9),e._uU(1),e.YNc(2,D,1,0,"ng-container",6),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.header," "),e.xp6(1),e.Q6J("ngTemplateOutlet",n.titleTemplate)}}function J(t,i){1&t&&e.GkF(0)}function Q(t,i){if(1&t&&(e.TgZ(0,"div",10),e._uU(1),e.YNc(2,J,1,0,"ng-container",6),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.subheader," "),e.xp6(1),e.Q6J("ngTemplateOutlet",n.subtitleTemplate)}}function k(t,i){1&t&&e.GkF(0)}function w(t,i){1&t&&e.GkF(0)}function N(t,i){if(1&t&&(e.TgZ(0,"div",11),e.Hsn(1,2),e.YNc(2,w,1,0,"ng-container",6),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",n.footerTemplate)}}const Y=["*",[["p-header"]],[["p-footer"]]],O=["*","p-header","p-footer"];let U=(()=>{class t{constructor(n){this.el=n}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"title":this.titleTemplate=n.template;break;case"subtitle":this.subtitleTemplate=n.template;break;case"content":default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template}})}getBlockableElement(){return this.el.nativeElement.children[0]}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-card"]],contentQueries:function(n,l,p){if(1&n&&(e.Suo(p,m.h4,5),e.Suo(p,m.$_,5),e.Suo(p,m.jx,4)),2&n){let o;e.iGM(o=e.CRH())&&(l.headerFacet=o.first),e.iGM(o=e.CRH())&&(l.footerFacet=o.first),e.iGM(o=e.CRH())&&(l.templates=o)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:O,decls:9,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,l){1&n&&(e.F$t(Y),e.TgZ(0,"div",0),e.YNc(1,q,3,1,"div",1),e.TgZ(2,"div",2),e.YNc(3,b,3,2,"div",3),e.YNc(4,Q,3,2,"div",4),e.TgZ(5,"div",5),e.Hsn(6),e.YNc(7,k,1,0,"ng-container",6),e.qZA(),e.YNc(8,N,3,1,"div",7),e.qZA()()),2&n&&(e.Tol(l.styleClass),e.Q6J("ngClass","p-card p-component")("ngStyle",l.style),e.xp6(1),e.Q6J("ngIf",l.headerFacet||l.headerTemplate),e.xp6(2),e.Q6J("ngIf",l.header||l.titleTemplate),e.xp6(1),e.Q6J("ngIf",l.subheader||l.subtitleTemplate),e.xp6(3),e.Q6J("ngTemplateOutlet",l.contentTemplate),e.xp6(1),e.Q6J("ngIf",l.footerFacet||l.footerTemplate))},dependencies:[a.mk,a.O5,a.tP,a.PC],styles:[".p-card-header img{width:100%}\n"],encapsulation:2,changeDetection:0}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,m.m8]}),t})();function F(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function z(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function I(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function j(t,i){if(1&t&&(e.TgZ(0,"small",13),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Oqu(n.date)}}function S(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function B(t,i){if(1&t&&(e.TgZ(0,"span",14),e._UZ(1,"i",15),e.qZA()),2&t){const n=i.$implicit;e.Udp("background-color",n.color),e.xp6(1),e.Q6J("ngClass",n.icon)}}function $(t,i){if(1&t&&e._UZ(0,"img",20),2&t){const n=e.oxw().$implicit;e.Q6J("src","assets/demo/images/product/"+n.image,e.LSH)("alt",n.name)}}function G(t,i){if(1&t&&(e.TgZ(0,"p-card",16),e.YNc(1,$,1,2,"img",17),e.TgZ(2,"p",18),e._uU(3,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.qZA(),e._UZ(4,"button",19),e.qZA()),2&t){const n=i.$implicit;e.Q6J("header",n.status)("subheader",n.date),e.xp6(1),e.Q6J("ngIf",n.image)}}function H(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit," ")}function E(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit," ")}function R(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit," ")}function P(t,i){1&t&&e._uU(0," \xa0 ")}let K=(()=>{class t{constructor(){this.events1=[],this.events2=[]}ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:m.dv.SHOPPING_CART,color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:m.dv.COG,color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:m.dv.ENVELOPE,color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:m.dv.CHECK,color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:48,vars:8,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card"],[3,"value"],["pTemplate","content"],["align","right",3,"value"],["align","alternate",3,"value"],["pTemplate","opposite"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","z-1","w-2rem","h-2rem","align-items-center","justify-content-center","text-white","border-circle","shadow-2"],[3,"ngClass"],[3,"header","subheader"],["width","200","class","shadow-2",3,"src","alt",4,"ngIf"],[1,"line-height-3","my-3"],["pButton","","label","Read more",1,"p-button-outlined","mb-5"],["width","200",1,"shadow-2",3,"src","alt"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Left Align"),e.qZA(),e.TgZ(5,"p-timeline",3),e.YNc(6,F,1,1,"ng-template",4),e.qZA()()(),e.TgZ(7,"div",1)(8,"div",2)(9,"h5"),e._uU(10,"Right Align"),e.qZA(),e.TgZ(11,"p-timeline",5),e.YNc(12,z,1,1,"ng-template",4),e.qZA()()(),e.TgZ(13,"div",1)(14,"div",2)(15,"h5"),e._uU(16,"Alternate Align"),e.qZA(),e.TgZ(17,"p-timeline",6),e.YNc(18,I,1,1,"ng-template",4),e.qZA()()(),e.TgZ(19,"div",1)(20,"div",2)(21,"h5"),e._uU(22,"Opposite Content"),e.qZA(),e.TgZ(23,"p-timeline",3),e.YNc(24,j,2,1,"ng-template",4),e.YNc(25,S,1,1,"ng-template",7),e.qZA()()()(),e.TgZ(26,"div",2)(27,"h5"),e._uU(28,"Customized"),e.qZA(),e.TgZ(29,"p-timeline",8),e.YNc(30,B,2,3,"ng-template",9),e.YNc(31,G,5,3,"ng-template",4),e.qZA()(),e.TgZ(32,"div",2)(33,"h5"),e._uU(34,"Horizontal"),e.qZA(),e.TgZ(35,"h6"),e._uU(36,"Top Align"),e.qZA(),e.TgZ(37,"p-timeline",10),e.YNc(38,H,1,1,"ng-template",4),e.qZA(),e.TgZ(39,"h6"),e._uU(40,"Bottom Align"),e.qZA(),e.TgZ(41,"p-timeline",11),e.YNc(42,E,1,1,"ng-template",4),e.qZA(),e.TgZ(43,"h6"),e._uU(44,"Alternate Align"),e.qZA(),e.TgZ(45,"p-timeline",12),e.YNc(46,R,1,1,"ng-template",4),e.YNc(47,P,1,0,"ng-template",7),e.qZA()()),2&n&&(e.xp6(5),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(8),e.Q6J("value",l.events2),e.xp6(4),e.Q6J("value",l.events2),e.xp6(4),e.Q6J("value",l.events2))},dependencies:[a.mk,a.O5,Z,m.jx,u.Hq,U],styles:["@media screen and (max-width: 960px){  .customized-timeline .p-timeline-event:nth-child(even){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:K}]),d.Bz]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,y,u.hJ,M,L]}),t})()}}]);