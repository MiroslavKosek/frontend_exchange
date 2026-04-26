import{c as Oe,h as qe}from"./chunk-SJYZSILT.js";import{a as We,b as Ze,c as ve,e as Ke,f as Xe,h as Je,i as Ye,j as et,k as tt,m as nt,n as le,o as it,q as rt,r as at,s as st,t as dt,u as ct}from"./chunk-R2GDFMGW.js";import{a as ze,b as G,c as K,d as _,e as C,k as ot,l as de,w as pt,x as lt}from"./chunk-BNRJNGZC.js";import{$a as ke,Ab as j,Bb as Pe,Eb as Be,Fb as Le,Gb as Fe,Hb as Y,Ib as $,Ja as v,Jb as Ne,K as Ie,Ka as A,Kb as oe,L,M as F,Ma as O,Na as w,O as N,Oa as u,Pc as Ve,Q as f,Rb as q,Sb as W,Va as Q,Vb as he,Vd as je,W as k,Wd as $e,X as S,Xd as He,Y as R,Ya as ue,Yd as pe,Za as me,Zb as Re,Zd as b,_a as xe,_d as te,ab as o,ae as H,ba as ne,bb as l,bc as _e,cb as p,db as V,eb as fe,ec as ee,fb as ge,fc as ye,fe as Ge,ga as U,gb as J,ge as Ue,hb as M,ib as E,ja as y,jb as x,je as Qe,kb as D,lb as Se,mb as I,nb as d,ob as Z,pb as z,qb as ie,rb as Me,sb as g,sc as re,tb as h,tc as Ae,ub as Ee,uc as ae,wa as r,wb as De,xb as P,xc as se,yb as m,zb as B}from"./chunk-MEJDI5XR.js";var ut=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Bt=["header"],Lt=["title"],Ft=["subtitle"],Nt=["content"],Rt=["footer"],At=["*",[["p-header"]],[["p-footer"]]],Ot=["*","p-header","p-footer"];function Vt(t,a){t&1&&x(0)}function zt(t,a){if(t&1&&(l(0,"div",1),z(1,1),u(2,Vt,1,0,"ng-container",2),p()),t&2){let e=d();m(e.cx("header")),o("pBind",e.ptm("header")),r(2),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function jt(t,a){if(t&1&&(M(0),B(1),E()),t&2){let e=d(2);r(),j(e.header)}}function $t(t,a){t&1&&x(0)}function Ht(t,a){if(t&1&&(l(0,"div",1),u(1,jt,2,1,"ng-container",3)(2,$t,1,0,"ng-container",2),p()),t&2){let e=d();m(e.cx("title")),o("pBind",e.ptm("title")),r(),o("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),r(),o("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function Gt(t,a){if(t&1&&(M(0),B(1),E()),t&2){let e=d(2);r(),j(e.subheader)}}function Ut(t,a){t&1&&x(0)}function Qt(t,a){if(t&1&&(l(0,"div",1),u(1,Gt,2,1,"ng-container",3)(2,Ut,1,0,"ng-container",2),p()),t&2){let e=d();m(e.cx("subtitle")),o("pBind",e.ptm("subtitle")),r(),o("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),r(),o("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function qt(t,a){t&1&&x(0)}function Wt(t,a){t&1&&x(0)}function Zt(t,a){if(t&1&&(l(0,"div",1),z(1,2),u(2,Wt,1,0,"ng-container",2),p()),t&2){let e=d();m(e.cx("footer")),o("pBind",e.ptm("footer")),r(2),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Kt=`
    ${ut}

    .p-card {
        display: block;
    }
`,Xt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},mt=(()=>{class t extends H{name="card";style=Kt;classes=Xt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ft=new N("CARD_INSTANCE"),we=(()=>{class t extends K{componentName="Card";$pcCard=f(ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(_,{self:!0});_componentStyle=f(mt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){Ve(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=U(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["p-card"]],contentQueries:function(i,n,c){if(i&1&&ie(c,$e,5)(c,He,5)(c,Bt,4)(c,Lt,4)(c,Ft,4)(c,Nt,4)(c,Rt,4)(c,pe,4),i&2){let s;g(s=h())&&(n.headerFacet=s.first),g(s=h())&&(n.footerFacet=s.first),g(s=h())&&(n.headerTemplate=s.first),g(s=h())&&(n.titleTemplate=s.first),g(s=h())&&(n.subtitleTemplate=s.first),g(s=h())&&(n.contentTemplate=s.first),g(s=h())&&(n.footerTemplate=s.first),g(s=h())&&(n.templates=s)}},hostVars:4,hostBindings:function(i,n){i&2&&(P(n._style()),m(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[$([mt,{provide:ft,useExisting:t},{provide:G,useExisting:t}]),O([_]),w],ngContentSelectors:Ot,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,n){i&1&&(Z(At),u(0,zt,3,4,"div",0),l(1,"div",1),u(2,Ht,3,5,"div",0)(3,Qt,3,5,"div",0),l(4,"div",1),z(5),u(6,qt,1,0,"ng-container",2),p(),u(7,Zt,3,4,"div",0),p()),i&2&&(o("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),r(),m(n.cx("body")),o("pBind",n.ptm("body")),r(),o("ngIf",n.header||n.titleTemplate||n._titleTemplate),r(),o("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),r(),m(n.cx("content")),o("pBind",n.ptm("content")),r(2),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),o("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[se,re,ae,b,C,_],encapsulation:2,changeDetection:0})}return t})(),gt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[we,b,C,b,C]})}return t})();var Yt=["data-p-icon","eye"],ht=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","eye"]],features:[w],attrs:Yt,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(i,n){i&1&&(R(),J(0,"path",0))},encapsulation:2})}return t})();var en=["data-p-icon","eyeslash"],_t=(()=>{class t extends de{pathId;onInit(){this.pathId="url(#"+ze()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["","data-p-icon","eyeslash"]],features:[w],attrs:en,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(R(),fe(0,"g"),J(1,"path",0),ge(),fe(2,"defs")(3,"clipPath",1),J(4,"rect",2),ge()()),i&2&&(Q("clip-path",n.pathId),r(3),Se("id",n.pathId))},encapsulation:2})}return t})();var yt=`
    .p-password {
        display: inline-flex;
        position: relative;
    }

    .p-password .p-password-overlay {
        min-width: 100%;
    }

    .p-password-meter {
        height: dt('password.meter.height');
        background: dt('password.meter.background');
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-label {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-weak {
        background: dt('password.strength.weak.background');
    }

    .p-password-meter-medium {
        background: dt('password.strength.medium.background');
    }

    .p-password-meter-strong {
        background: dt('password.strength.strong.background');
    }

    .p-password-fluid {
        display: flex;
    }

    .p-password-fluid .p-password-input {
        width: 100%;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password-overlay {
        padding: dt('password.overlay.padding');
        background: dt('password.overlay.background');
        color: dt('password.overlay.color');
        border: 1px solid dt('password.overlay.border.color');
        box-shadow: dt('password.overlay.shadow');
        border-radius: dt('password.overlay.border.radius');
    }

    .p-password-content {
        display: flex;
        flex-direction: column;
        gap: dt('password.content.gap');
    }

    .p-password-toggle-mask-icon {
        inset-inline-end: dt('form.field.padding.x');
        color: dt('password.icon.color');
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * calc(dt('icon.size') / 2));
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-password-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-clear-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-clear-icon):has(.p-password-toggle-mask-icon)  .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));
    }

`;var tn=["content"],nn=["footer"],on=["header"],rn=["clearicon"],an=["hideicon"],sn=["showicon"],pn=["overlay"],ln=["input"],wt=t=>({class:t}),dn=t=>({width:t});function cn(t,a){if(t&1){let e=D();R(),l(0,"svg",10),I("click",function(){k(e);let n=d(2);return S(n.clear())}),p()}if(t&2){let e=d(2);m(e.cx("clearIcon")),o("pBind",e.ptm("clearIcon"))}}function un(t,a){}function mn(t,a){t&1&&u(0,un,0,0,"ng-template")}function fn(t,a){if(t&1){let e=D();M(0),u(1,cn,1,3,"svg",7),l(2,"span",8),I("click",function(){k(e);let n=d();return S(n.clear())}),u(3,mn,1,0,null,9),p(),E()}if(t&2){let e=d();r(),o("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),r(),m(e.cx("clearIcon")),o("pBind",e.ptm("clearIcon")),r(),o("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function gn(t,a){if(t&1){let e=D();R(),l(0,"svg",13),I("click",function(){k(e);let n=d(3);return S(n.onMaskToggle())}),p()}if(t&2){let e=d(3);m(e.cx("maskIcon")),o("pBind",e.ptm("maskIcon"))}}function hn(t,a){}function _n(t,a){t&1&&u(0,hn,0,0,"ng-template")}function yn(t,a){if(t&1){let e=D();l(0,"span",8),I("click",function(){k(e);let n=d(3);return S(n.onMaskToggle())}),u(1,_n,1,0,null,14),p()}if(t&2){let e=d(3);o("pBind",e.ptm("maskIcon")),r(),o("ngTemplateOutlet",e.hideIconTemplate||e._hideIconTemplate)("ngTemplateOutletContext",oe(3,wt,e.cx("maskIcon")))}}function vn(t,a){if(t&1&&(M(0),u(1,gn,1,3,"svg",11)(2,yn,2,5,"span",12),E()),t&2){let e=d(2);r(),o("ngIf",!e.hideIconTemplate&&!e._hideIconTemplate),r(),o("ngIf",e.hideIconTemplate||e._hideIconTemplate)}}function bn(t,a){if(t&1){let e=D();R(),l(0,"svg",16),I("click",function(){k(e);let n=d(3);return S(n.onMaskToggle())}),p()}if(t&2){let e=d(3);m(e.cx("unmaskIcon")),o("pBind",e.ptm("unmaskIcon"))}}function wn(t,a){}function Cn(t,a){t&1&&u(0,wn,0,0,"ng-template")}function Tn(t,a){if(t&1){let e=D();l(0,"span",8),I("click",function(){k(e);let n=d(3);return S(n.onMaskToggle())}),u(1,Cn,1,0,null,14),p()}if(t&2){let e=d(3);o("pBind",e.ptm("unmaskIcon")),r(),o("ngTemplateOutlet",e.showIconTemplate||e._showIconTemplate)("ngTemplateOutletContext",oe(3,wt,e.cx("unmaskIcon")))}}function In(t,a){if(t&1&&(M(0),u(1,bn,1,3,"svg",15)(2,Tn,2,5,"span",12),E()),t&2){let e=d(2);r(),o("ngIf",!e.showIconTemplate&&!e._showIconTemplate),r(),o("ngIf",e.showIconTemplate||e._showIconTemplate)}}function xn(t,a){if(t&1&&(M(0),u(1,vn,3,2,"ng-container",5)(2,In,3,2,"ng-container",5),E()),t&2){let e=d();r(),o("ngIf",e.unmasked),r(),o("ngIf",!e.unmasked)}}function kn(t,a){t&1&&x(0)}function Sn(t,a){t&1&&x(0)}function Mn(t,a){if(t&1&&(M(0),u(1,Sn,1,0,"ng-container",9),E()),t&2){let e=d(2);r(),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}function En(t,a){if(t&1&&(l(0,"div",18)(1,"div",18),V(2,"div",19),p(),l(3,"div",18),B(4),p()()),t&2){let e=d(2);m(e.cx("content")),o("pBind",e.ptm("content")),r(),m(e.cx("meter")),o("pBind",e.ptm("meter")),r(),m(e.cx("meterLabel")),o("ngStyle",oe(15,dn,e.meter?e.meter.width:""))("pBind",e.ptm("meterLabel")),Q("data-p",e.meterDataP),r(),m(e.cx("meterText")),o("pBind",e.ptm("meterText")),r(),j(e.infoText)}}function Dn(t,a){t&1&&x(0)}function Pn(t,a){if(t&1){let e=D();l(0,"div",8),I("click",function(n){k(e);let c=d();return S(c.onOverlayClick(n))}),u(1,kn,1,0,"ng-container",9)(2,Mn,2,1,"ng-container",17)(3,En,5,17,"ng-template",null,3,he)(5,Dn,1,0,"ng-container",9),p()}if(t&2){let e=Ee(4),i=d();P(i.sx("overlay")),m(i.cx("overlay")),o("pBind",i.ptm("overlay")),Q("data-p",i.overlayDataP),r(),o("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),r(),o("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),r(3),o("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}var Bn=`
${yt}

/* For PrimeNG */
.p-password-overlay {
    min-width: 100%;
}

p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: dt('inputtext.invalid.border.color');
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: dt('inputtext.focus.border.color');
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: dt('inputtext.invalid.placeholder.color');
}

.p-password-fluid-directive {
    width: 100%;
}

/* Animations */
.p-password-enter {
    animation: p-animate-password-enter 300ms cubic-bezier(.19,1,.22,1);
}

.p-password-leave {
    animation: p-animate-password-leave 300ms cubic-bezier(.19,1,.22,1);
}

@keyframes p-animate-password-enter {
    from {
        opacity: 0;
        transform: scale(0.93);
    }
}

@keyframes p-animate-password-leave {
    to {
        opacity: 0;
        transform: scale(0.93);
    }
}
`,Ln={root:({instance:t})=>({position:t.$appendTo()==="self"?"relative":void 0}),overlay:{position:"absolute"}},Fn={root:({instance:t})=>["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}],rootDirective:({instance:t})=>["p-password p-inputtext p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-password-fluid-directive":t.hasFluid}],pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?"p-password-meter-"+t.meter.strength:""}`,meterText:"p-password-meter-text",clearIcon:"p-password-clear-icon"},vt=(()=>{class t extends H{name="password";style=Bn;classes=Fn;inlineStyles=Ln;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var bt=new N("PASSWORD_INSTANCE");var Nn={provide:We,useExisting:Ie(()=>ce),multi:!0},ce=(()=>{class t extends rt{componentName="Password";bindDirectiveInstance=f(_,{self:!0});$pcPassword=f(bt,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}ariaLabel;ariaLabelledBy;label;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;toggleMask;inputStyleClass;styleClass;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;tabindex;appendTo=_e("self");motionOptions=_e(void 0);overlayOptions;onFocus=new ne;onBlur=new ne;onClear=new ne;overlayViewChild;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;$appendTo=Re(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;value=null;translationSubscription;_componentStyle=f(vt);overlayService=f(je);onInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"hideicon":this._hideIconTemplate=e.template;break;case"showicon":this._showIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onInput(e){this.value=e.target.value,this.onModelChange(this.value)}onInputFocus(e){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(e)}onKeyUp(e){if(this.feedback){let i=e.target.value;if(this.updateUI(i),e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(e){let i=null,n=null;switch(this.testStrength(e)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null;break}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}testStrength(e){let i=0;return this.strongCheckRegExp?.test(e)?i=3:this.mediumCheckRegExp?.test(e)?i=2:e.length&&(i=1),i}promptText(){return this.promptLabel||this.getTranslation(te.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(te.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(te.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(te.STRONG)}inputType(e){return e?"text":"password"}getTranslation(e){return this.config.getTranslation(e)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}writeControlValue(e,i){e===void 0?this.value=null:this.value=e,this.feedback&&this.updateUI(this.value||""),i(this.value),this.cd.markForCheck()}onDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}get containerDataP(){return this.cn({fluid:this.hasFluid})}get meterDataP(){return this.cn({[this.meter?.strength]:this.meter?.strength})}get overlayDataP(){return this.cn({["overlay-"+this.$appendTo()]:"overlay-"+this.$appendTo()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["p-password"]],contentQueries:function(i,n,c){if(i&1&&ie(c,tn,4)(c,nn,4)(c,on,4)(c,rn,4)(c,an,4)(c,sn,4)(c,pe,4),i&2){let s;g(s=h())&&(n.contentTemplate=s.first),g(s=h())&&(n.footerTemplate=s.first),g(s=h())&&(n.headerTemplate=s.first),g(s=h())&&(n.clearIconTemplate=s.first),g(s=h())&&(n.hideIconTemplate=s.first),g(s=h())&&(n.showIconTemplate=s.first),g(s=h())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&Me(pn,5)(ln,5),i&2){let c;g(c=h())&&(n.overlayViewChild=c.first),g(c=h())&&(n.input=c.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(Q("data-p",n.containerDataP),P(n.sx("root")),m(n.cn(n.cx("root"),n.styleClass)))},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",ye],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",ee],toggleMask:[2,"toggleMask","toggleMask",ee],inputStyleClass:"inputStyleClass",styleClass:"styleClass",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",ee],autofocus:[2,"autofocus","autofocus",ee],tabindex:[2,"tabindex","tabindex",ye],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],overlayOptions:"overlayOptions"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[$([Nn,vt,{provide:bt,useExisting:t},{provide:G,useExisting:t}]),O([_]),w],decls:8,vars:33,consts:[["input",""],["overlay",""],["content",""],["defaultContent",""],["pInputText","",3,"input","focus","blur","keyup","pSize","ngStyle","value","variant","invalid","pAutoFocus","pt","unstyled"],[4,"ngIf"],[3,"visibleChange","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["data-p-icon","times",3,"click","pBind"],["data-p-icon","eyeslash",3,"class","pBind","click",4,"ngIf"],[3,"pBind","click",4,"ngIf"],["data-p-icon","eyeslash",3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","eye",3,"class","pBind","click",4,"ngIf"],["data-p-icon","eye",3,"click","pBind"],[4,"ngIf","ngIfElse"],[3,"pBind"],[3,"ngStyle","pBind"]],template:function(i,n){if(i&1){let c=D();l(0,"input",4,0),I("input",function(T){return n.onInput(T)})("focus",function(T){return n.onInputFocus(T)})("blur",function(T){return n.onInputBlur(T)})("keyup",function(T){return n.onKeyUp(T)}),p(),u(2,fn,4,5,"ng-container",5)(3,xn,3,2,"ng-container",5),l(4,"p-overlay",6,1),Fe("visibleChange",function(T){return k(c),Le(n.overlayVisible,T)||(n.overlayVisible=T),S(T)}),u(6,Pn,6,10,"ng-template",null,2,he),p()}i&2&&(m(n.cn(n.cx("pcInputText"),n.inputStyleClass)),o("pSize",n.size())("ngStyle",n.inputStyle)("value",n.value)("variant",n.$variant())("invalid",n.invalid())("pAutoFocus",n.autofocus)("pt",n.ptm("pcInputText"))("unstyled",n.unstyled()),Q("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("tabindex",n.tabindex)("type",n.unmasked?"text":"password")("placeholder",n.placeholder)("autocomplete",n.autocomplete)("name",n.name())("maxlength",n.maxlength()||n.maxLength)("minlength",n.minlength())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0),r(2),o("ngIf",n.showClear&&n.value!=null),r(),o("ngIf",n.toggleMask),r(),o("hostAttrSelector",n.$attrSelector),Be("visible",n.overlayVisible),o("options",n.overlayOptions)("target","@parent")("appendTo",n.$appendTo())("unstyled",n.unstyled())("pt",n.ptm("pcOverlay"))("motionOptions",n.motionOptions()))},dependencies:[se,re,ae,Ae,le,ot,at,_t,ht,st,b,C,_],encapsulation:2,changeDetection:0})}return t})(),Ct=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[ce,b,C,b,C]})}return t})();var Tt=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-floatlabel .p-inputwrapper,
    .p-inputgroup .p-iftalabel .p-inputwrapper {
        display: inline-flex;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label,
    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,
    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var An=["*"],On=`
    ${Tt}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,Vn={root:({instance:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},It=(()=>{class t extends H{name="inputgroup";style=On;classes=Vn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var xt=new N("INPUTGROUP_INSTANCE"),Ce=(()=>{class t extends K{componentName="InputGroup";_componentStyle=f(It);$pcInputGroup=f(xt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(i,n){i&2&&m(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass"},features:[$([It,{provide:xt,useExisting:t},{provide:G,useExisting:t}]),O([_]),w],ngContentSelectors:An,decls:1,vars:0,template:function(i,n){i&1&&(Z(),z(0))},dependencies:[C],encapsulation:2})}return t})(),kt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[Ce,b,b]})}return t})();var jn=["*"],$n={root:"p-inputgroupaddon"},St=(()=>{class t extends H{name="inputgroupaddon";classes=$n;static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),Mt=new N("INPUTGROUPADDON_INSTANCE"),Te=(()=>{class t extends K{componentName="InputGroupAddon";_componentStyle=f(St);$pcInputGroupAddon=f(Mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(n){return(e||(e=y(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(i,n){i&2&&(P(n.hostStyle),m(n.cn(n.cx("root"),n.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[$([St,{provide:Mt,useExisting:t},{provide:G,useExisting:t}]),O([_]),w],ngContentSelectors:jn,decls:1,vars:0,template:function(i,n){i&1&&(Z(),z(0))},dependencies:[C],encapsulation:2})}return t})(),Et=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=A({type:t});static \u0275inj=F({imports:[Te,b,b]})}return t})();var Gn=()=>({width:"400px"}),Un=(t,a)=>a.severity;function Qn(t,a){if(t&1&&(l(0,"p-message",11),B(1),p()),t&2){let e=a.$implicit,i=a.$index;De("mt-4",i!==0),o("severity",e.severity)("closable",e==null?null:e.closable),r(),Pe(" ",e.content," ")}}function qn(t,a){t&1&&(l(0,"p-message",7),B(1),q(2,"translate"),p()),t&2&&(r(),j(W(2,1,"Username is required.")))}function Wn(t,a){t&1&&(l(0,"p-message",7),B(1),q(2,"translate"),p()),t&2&&(r(),j(W(2,1,"Password is required.")))}var Dt=class t{translate=f(Ge);fb=f(tt);authService=f(qe);router=f(Oe);logger=f(Qe);loginForm=this.fb.nonNullable.group({username:["",ve.required],password:["",ve.required]});isLoading=U(!1);messages=U([]);formSubmitted=U(!1);onSubmit(){if(this.formSubmitted.set(!0),this.loginForm.valid){let{username:a,password:e}=this.loginForm.getRawValue();this.logger.info(`Login form submitted for user: '${a}'`),this.isLoading.set(!0),this.messages.set([]),this.authService.login(a,e).subscribe({next:()=>{this.logger.info(`Login UI flow successful for '${a}'. Redirecting to root.`),this.isLoading.set(!1),this.router.navigate(["/"])},error:i=>{this.logger.error(`Login UI flow failed for user: '${a}'. Displaying error message.`,i),this.isLoading.set(!1);let n="Invalid username or password.";i.status===0?n="Server is unreachable. Please check your connection or try again later.":i.status>=500&&(n="An internal server error occurred. Please try again later."),this.messages.set([{severity:"error",content:this.translate.instant(n),closable:!1}])}}),this.formSubmitted.set(!1)}else this.logger.warn("Login attempt blocked: Form submitted with invalid validation state.")}isInvalid(a){let e=this.loginForm.get(a);return e?.invalid&&(e.touched||this.formSubmitted())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-login"]],decls:22,vars:28,consts:[[1,"card","login"],[1,"m-2",3,"header"],[3,"severity","mt-4","closable"],[3,"ngSubmit","formGroup"],[1,"my-2"],[1,"pi","pi-user"],["pInputText","","formControlName","username","fluid","",3,"invalid","placeholder"],["severity","error","size","small","variant","simple"],[1,"pi","pi-lock"],["formControlName","password","fluid","",3,"invalid","toggleMask","feedback","placeholder"],["icon","pi pi-sign-in","styleClass","w-full","type","submit",3,"label","disabled","loading"],[3,"severity","closable"]],template:function(e,i){e&1&&(l(0,"div",0)(1,"p-card",1),q(2,"translate"),xe(3,Qn,2,5,"p-message",2,Un),l(5,"form",3),I("ngSubmit",function(){return i.onSubmit()}),l(6,"div",4)(7,"p-inputgroup")(8,"p-inputgroup-addon"),V(9,"i",5),p(),V(10,"input",6),q(11,"translate"),p(),ue(12,qn,3,3,"p-message",7),p(),l(13,"div",4)(14,"p-inputgroup")(15,"p-inputgroup-addon"),V(16,"i",8),p(),V(17,"p-password",9),q(18,"translate"),p(),ue(19,Wn,3,3,"p-message",7),p(),V(20,"p-button",10),q(21,"translate"),p()()()),e&2&&(r(),P(Ne(27,Gn)),o("header",Y(W(2,19,"Login to Exchange App"))),r(2),ke(i.messages()),r(2),o("formGroup",i.loginForm),r(5),o("placeholder",Y(W(11,21,"Username")))("invalid",i.isInvalid("username")),r(2),me(i.isInvalid("username")?12:-1),r(5),o("placeholder",Y(W(18,23,"Password")))("invalid",i.isInvalid("password"))("toggleMask",!0)("feedback",!1),r(2),me(i.isInvalid("password")?19:-1),r(),o("label",Y(W(21,25,"Login")))("disabled",i.loginForm.invalid)("loading",i.isLoading()))},dependencies:[nt,Je,Ze,Ke,Xe,et,Ye,gt,we,it,le,Ct,ce,lt,pt,ct,dt,kt,Ce,Et,Te,Ue],styles:[".login[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh}"]})};export{Dt as Login};
