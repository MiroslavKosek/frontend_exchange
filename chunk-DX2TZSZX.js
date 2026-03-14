import{b as xt,c as yt,d as vt,e as Le,f as we,h as ne,i as St}from"./chunk-DNRR6W5O.js";import{a as Ot,b as Pt,c as Ve,d as re}from"./chunk-U3BOHROW.js";import{a as At}from"./chunk-VABBVO7S.js";import{a as Pe,b as Be,c as ie,d as w,e as oe,j as Lt,l as wt,o as Dt,p as Et,s as W,t as Fe,u as ae,v as Ae,w as Bt,x as Ft}from"./chunk-MXMXG2EY.js";import{$b as Ze,Ab as bt,Ac as Y,Bb as I,Bc as de,Ca as J,Cb as x,Cc as ee,Da as ye,Db as ft,Eb as ht,Ec as te,Fa as m,Fb as E,Ib as Q,Ic as N,Jb as c,K as ot,Kb as z,L as me,Lb as ue,Ld as fe,M as ge,Ma as lt,Mb as gt,Na as k,O as Ie,Pc as _e,Q as y,Rb as ce,Sa as S,Sb as Me,Sc as Z,Ta as ve,Tb as X,Ub as G,V as f,Va as mt,W as h,Wa as Ce,Wc as je,X as K,Xa as $,Xc as Qe,Ya as u,Z as at,Zd as kt,_b as qe,a as le,aa as C,ae as De,b as Ye,bc as B,bd as Ct,be as V,cb as _,ec as ke,ee as Ee,fa as O,fb as ut,g as et,ga as rt,gb as ct,ia as j,ic as pe,jb as r,jc as Ue,ka as st,kb as d,kc as It,lb as p,mb as b,mc as F,nc as q,nd as Tt,oa as xe,od as Mt,pb as pt,qb as P,rb as D,sb as H,sd as Oe,tb as A,v as tt,vb as M,vd as be,w as nt,wb as l,wd as R,xb as dt,xd as L,yb as _t,z as it,zb as Te,zc as Se}from"./chunk-C32UFHK6.js";var Qt=["data-p-icon","bars"],Vt=(()=>{class n extends wt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=j(n)))(i||n)}})();static \u0275cmp=S({type:n,selectors:[["","data-p-icon","bars"]],features:[$],attrs:Qt,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,i){t&1&&(K(),pt(0,"path",0))},encapsulation:2})}return n})();var Ht=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var Rt=(n,s)=>({instance:n,processedItem:s}),en=()=>({exact:!1}),tn=(n,s)=>({$implicit:n,root:s});function nn(n,s){if(n&1&&b(0,"li",6),n&2){let e=l().$implicit,t=l();Q(t.getItemProp(e,"style")),c(t.cn(t.cx("separator"),e==null?null:e.styleClass)),r("pBind",t.ptm("separator")),_("id",t.getItemId(e))}}function on(n,s){if(n&1&&b(0,"span",17),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),r("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,i,"itemIcon")),_("tabindex",-1)}}function an(n,s){if(n&1&&(d(0,"span",18),z(1),p()),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),r("ngStyle",o.getItemProp(t,"labelStyle"))("id",o.getItemLabelId(t))("pBind",o.getPTOptions(t,i,"itemLabel")),m(),gt(" ",o.getItemLabel(t)," ")}}function rn(n,s){if(n&1&&b(0,"span",19),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),r("ngStyle",o.getItemProp(t,"labelStyle"))("innerHTML",o.getItemLabel(t),J)("id",o.getItemLabelId(t))("pBind",o.getPTOptions(t,i,"itemLabel"))}}function sn(n,s){if(n&1&&b(0,"p-badge",20),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.getItemProp(t,"badgeStyleClass")),r("value",o.getItemProp(t,"badge"))("pt",o.getPTOptions(t,i,"pcBadge"))("unstyled",o.unstyled())}}function ln(n,s){if(n&1&&(K(),b(0,"svg",24)),n&2){let e=l(6),t=e.$implicit,i=e.index,o=l();c(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function mn(n,s){if(n&1&&(K(),b(0,"svg",25)),n&2){let e=l(6),t=e.$implicit,i=e.index,o=l();c(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function un(n,s){if(n&1&&(P(0),u(1,ln,1,3,"svg",22)(2,mn,1,3,"svg",23),D()),n&2){let e=l(6);m(),r("ngIf",e.root),m(),r("ngIf",!e.root)}}function cn(n,s){}function pn(n,s){n&1&&u(0,cn,0,0,"ng-template")}function dn(n,s){if(n&1&&(P(0),u(1,un,3,2,"ng-container",9)(2,pn,1,0,null,21),D()),n&2){let e=l(5);m(),r("ngIf",!e.submenuiconTemplate),m(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function _n(n,s){if(n&1&&(d(0,"a",13),u(1,on,1,5,"span",14)(2,an,2,6,"span",15)(3,rn,1,6,"ng-template",null,1,B)(5,sn,1,5,"p-badge",16)(6,dn,3,2,"ng-container",9),p()),n&2){let e=E(4),t=l(3),i=t.$implicit,o=t.index,a=l();c(a.cn(a.cx("itemLink"),a.getItemProp(i,"linkClass"))),r("ngStyle",a.getItemProp(i,"linkStyle"))("pBind",a.getPTOptions(i,o,"itemLink")),_("href",a.getItemProp(i,"url"),ye)("data-automationid",a.getItemProp(i,"automationId"))("title",a.getItemProp(i,"title"))("target",a.getItemProp(i,"target"))("tabindex",-1),m(),r("ngIf",a.getItemProp(i,"icon")),m(),r("ngIf",a.getItemProp(i,"escape"))("ngIfElse",e),m(3),r("ngIf",a.getItemProp(i,"badge")),m(),r("ngIf",a.isItemGroup(i))}}function bn(n,s){if(n&1&&b(0,"span",17),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),r("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,i,"itemIcon")),_("tabindex",-1)}}function fn(n,s){if(n&1&&(d(0,"span",17),z(1),p()),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),r("ngStyle",o.getItemProp(t,"labelStyle"))("pBind",o.getPTOptions(t,i,"itemLabel")),m(),ue(o.getItemLabel(t))}}function hn(n,s){if(n&1&&b(0,"span",28),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.cn(o.cx("itemLabel"),o.getItemProp(t,"labelClass"))),r("ngStyle",o.getItemProp(t,"labelStyle"))("innerHTML",o.getItemLabel(t),J)("pBind",o.getPTOptions(t,i,"itemLabel"))}}function gn(n,s){if(n&1&&b(0,"p-badge",20),n&2){let e=l(4),t=e.$implicit,i=e.index,o=l();c(o.getItemProp(t,"badgeStyleClass")),r("value",o.getItemProp(t,"badge"))("pt",o.getPTOptions(t,i,"pcBadge"))("unstyled",o.unstyled())}}function In(n,s){if(n&1&&(K(),b(0,"svg",24)),n&2){let e=l(6),t=e.$implicit,i=e.index,o=l();c(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function xn(n,s){if(n&1&&(K(),b(0,"svg",25)),n&2){let e=l(6),t=e.$implicit,i=e.index,o=l();c(o.cx("submenuIcon")),r("pBind",o.getPTOptions(t,i,"submenuIcon"))}}function yn(n,s){if(n&1&&(P(0),u(1,In,1,3,"svg",22)(2,xn,1,3,"svg",23),D()),n&2){let e=l(6);m(),r("ngIf",e.root),m(),r("ngIf",!e.root)}}function vn(n,s){}function Cn(n,s){n&1&&u(0,vn,0,0,"ng-template")}function Tn(n,s){if(n&1&&(P(0),u(1,yn,3,2,"ng-container",9)(2,Cn,1,0,null,21),D()),n&2){let e=l(5);m(),r("ngIf",!e.submenuiconTemplate),m(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function Mn(n,s){if(n&1&&(d(0,"a",26),u(1,bn,1,5,"span",14)(2,fn,2,5,"span",27)(3,hn,1,5,"ng-template",null,2,B)(5,gn,1,5,"p-badge",16)(6,Tn,3,2,"ng-container",9),p()),n&2){let e=E(4),t=l(3),i=t.$implicit,o=t.index,a=l();c(a.cn(a.cx("itemLink"),a.getItemProp(i,"linkClass"))),r("routerLink",a.getItemProp(i,"routerLink"))("queryParams",a.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",a.getItemProp(i,"routerLinkActiveOptions")||Me(23,en))("target",a.getItemProp(i,"target"))("ngStyle",a.getItemProp(i,"linkStyle"))("fragment",a.getItemProp(i,"fragment"))("queryParamsHandling",a.getItemProp(i,"queryParamsHandling"))("preserveFragment",a.getItemProp(i,"preserveFragment"))("skipLocationChange",a.getItemProp(i,"skipLocationChange"))("replaceUrl",a.getItemProp(i,"replaceUrl"))("state",a.getItemProp(i,"state"))("pBind",a.getPTOptions(i,o,"itemLink")),_("data-automationid",a.getItemProp(i,"automationId"))("title",a.getItemProp(i,"title"))("tabindex",-1),m(),r("ngIf",a.getItemProp(i,"icon")),m(),r("ngIf",a.getItemProp(i,"escape"))("ngIfElse",e),m(3),r("ngIf",a.getItemProp(i,"badge")),m(),r("ngIf",a.isItemGroup(i))}}function kn(n,s){if(n&1&&(P(0),u(1,_n,7,14,"a",11)(2,Mn,7,24,"a",12),D()),n&2){let e=l(2).$implicit,t=l();m(),r("ngIf",!t.getItemProp(e,"routerLink")),m(),r("ngIf",t.getItemProp(e,"routerLink"))}}function Sn(n,s){}function Ln(n,s){n&1&&u(0,Sn,0,0,"ng-template")}function wn(n,s){if(n&1&&(P(0),u(1,Ln,1,0,null,29),D()),n&2){let e=l(2).$implicit,t=l();m(),r("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",G(2,tn,e.item,t.root))}}function On(n,s){if(n&1){let e=A();d(0,"ul",30),M("itemClick",function(i){f(e);let o=l(3);return h(o.itemClick.emit(i))})("itemMouseEnter",function(i){f(e);let o=l(3);return h(o.onItemMouseEnter(i))}),p()}if(n&2){let e=l(2).$implicit,t=l();r("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,G(13,Rt,t,e)))("pt",t.pt())("pBind",t.ptm("submenu"))("unstyled",t.unstyled()),_("aria-labelledby",t.getItemLabelId(e))}}function Pn(n,s){if(n&1){let e=A();d(0,"li",7,0)(2,"div",8),M("click",function(i){f(e);let o=l().$implicit,a=l();return h(a.onItemClick(i,o))})("mouseenter",function(i){f(e);let o=l().$implicit,a=l();return h(a.onItemMouseEnter({$event:i,processedItem:o}))}),u(3,kn,3,2,"ng-container",9)(4,wn,2,5,"ng-container",9),p(),u(5,On,1,16,"ul",10),p()}if(n&2){let e=l(),t=e.$implicit,i=e.index,o=l();Q(o.getItemProp(t,"style")),c(o.cn(o.cx("item",G(23,Rt,o,t)),o.getItemProp(t,"styleClass"))),r("pBind",o.getPTOptions(t,i,"item"))("tooltipOptions",o.getItemProp(t,"tooltipOptions"))("pTooltipUnstyled",o.unstyled()),_("id",o.getItemId(t))("data-p-highlight",o.isItemActive(t))("data-p-focused",o.isItemFocused(t))("data-p-disabled",o.isItemDisabled(t))("aria-label",o.getItemLabel(t))("aria-disabled",o.isItemDisabled(t)||void 0)("aria-haspopup",o.isItemGroup(t)&&!o.getItemProp(t,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(t)?o.isItemActive(t):void 0)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(i)),m(2),c(o.cx("itemContent")),r("pBind",o.getPTOptions(t,i,"itemContent")),m(),r("ngIf",!o.itemTemplate),m(),r("ngIf",o.itemTemplate),m(),r("ngIf",o.isItemVisible(t)&&o.isItemGroup(t))}}function Dn(n,s){if(n&1&&u(0,nn,1,6,"li",4)(1,Pn,6,26,"li",5),n&2){let e=s.$implicit,t=l();r("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),m(),r("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var En=["start"],Bn=["end"],Fn=["item"],An=["menuicon"],Vn=["submenuicon"],Hn=["menubutton"],Nn=["rootmenu"],Rn=["*"];function Kn(n,s){n&1&&H(0)}function $n(n,s){if(n&1&&(d(0,"div",7),u(1,Kn,1,0,"ng-container",8),p()),n&2){let e=l();c(e.cx("start")),r("pBind",e.ptm("start")),m(),r("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function zn(n,s){if(n&1&&(K(),b(0,"svg",11)),n&2){let e=l(2);r("pBind",e.ptm("buttonIcon"))}}function qn(n,s){}function Zn(n,s){n&1&&u(0,qn,0,0,"ng-template")}function Un(n,s){if(n&1){let e=A();d(0,"a",9,2),M("click",function(i){f(e);let o=l();return h(o.menuButtonClick(i))})("keydown",function(i){f(e);let o=l();return h(o.menuButtonKeydown(i))}),u(2,zn,1,1,"svg",10)(3,Zn,1,0,null,8),p()}if(n&2){let e=l();c(e.cx("button")),r("pBind",e.ptm("button")),_("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),m(2),r("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),m(),r("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function jn(n,s){n&1&&H(0)}function Qn(n,s){if(n&1&&(d(0,"div",7),u(1,jn,1,0,"ng-container",8),p()),n&2){let e=l();c(e.cx("end")),r("pBind",e.ptm("end")),m(),r("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function Gn(n,s){if(n&1&&(d(0,"div"),_t(1),p()),n&2){let e=l();c(e.cx("end"))}}var Wn={submenu:({instance:n,processedItem:s})=>({display:n.isItemActive(s)?"flex":"none"})},Jn={root:({instance:n})=>["p-menubar p-component",{"p-menubar-mobile":n.queryMatches(),"p-menubar-mobile-active":n.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:n,processedItem:s})=>["p-menubar-item",{"p-menubar-item-active":n.isItemActive(s),"p-focus":n.isItemFocused(s),"p-disabled":n.isItemDisabled(s)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ge=(()=>{class n extends Ee{name="menubar";style=Ht;classes=Jn;inlineStyles=Wn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=j(n)))(i||n)}})();static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();var Nt=new Ie("MENUBAR_INSTANCE"),We=(()=>{class n{autoHide;autoHideDelay;mouseLeaves=new et;mouseLeft$=this.mouseLeaves.pipe(it(()=>tt(this.autoHideDelay)),nt(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||n)};static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})(),Xn=(()=>{class n extends ie{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new C;itemMouseEnter=new C;menuFocus=new C;menuBlur=new C;menuKeydown=new C;mouseLeaveSubscriber;menubarService=y(We);_componentStyle=y(Ge);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,i=null){return e&&e.item?Qe(e.item[t],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return Z(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:i})}}getPTOptions(e,t,i){return this.ptm(i,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=j(n)))(i||n)}})();static \u0275cmp=S({type:n,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostVars:7,hostBindings:function(t,i){t&2&&(_("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId)("role","menubar"),Q(i.inlineStyles),c(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",F],autoZIndex:[2,"autoZIndex","autoZIndex",F],baseZIndex:[2,"baseZIndex","baseZIndex",q],mobileActive:[2,"mobileActive","mobileActive",F],autoDisplay:[2,"autoDisplay","autoDisplay",F],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",q],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[$],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","id","pBind"],[3,"ngStyle","innerHTML","id","pBind"],[3,"value","pt","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled"]],template:function(t,i){t&1&&u(0,Dn,2,2,"ng-template",3),t&2&&r("ngForOf",i.items)},dependencies:[n,te,Se,Y,ee,de,ne,Le,we,Ae,re,Ve,w,Ot,Pt,ae,Fe,V,oe],encapsulation:2})}return n})(),Je=(()=>{class n extends ie{document;platformId;el;renderer;cd;menubarService;componentName="Menubar";$pcMenubar=y(Nt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new C;onBlur=new C;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=O(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=O([]);number=O(0);focusedItemInfo=O({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=y(Ge);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${Z(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,i,o,a,T){super(),this.document=e,this.platformId=t,this.el=i,this.renderer=o,this.cd=a,this.menubarService=T,rt(()=>{let g=this.activeItemPath();Z(g)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||Pe("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,i={},o=""){let a=[];return e&&e.forEach((T,g)=>{let v=(o!==""?o+"_":"")+g,U={item:T,index:g,level:t,key:v,parent:i,parentKey:o};U.items=this.createProcessedItems(T.items,t+1,U,v),a.push(U)}),a}bindMatchMediaListener(){if(N(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?Qe(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:i}=e,o=this.isProcessedItemGroup(i),a=_e(i.parent);if(this.isSelected(i)){let{index:g,key:v,level:U,parentKey:ze,item:he}=i;this.activeItemPath.set(this.activeItemPath().filter(se=>v!==se.key&&v.startsWith(se.key))),this.focusedItemInfo.set({index:g,level:U,parentKey:ze,item:he}),this.dirty=!a,L(this.rootmenu?.el.nativeElement)}else if(o)this.onItemChange(e);else{let g=a?i:this.activeItemPath().find(v=>v.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,g?g.index:-1),this.mobileActive=!1,L(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){fe()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,t){let i=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let o=this.focusedItemInfo();this.focusedItemInfo.set(Ye(le({},o),{item:i.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=R(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:i,isFocus:o}=e;if(_e(i))return;let{index:a,key:T,level:g,parentKey:v,items:U,item:ze}=i,he=Z(U),se=this.activeItemPath().filter(Xe=>Xe.parentKey!==v&&Xe.parentKey!==T);he&&se.push(i),this.focusedItemInfo.set({index:a,level:g,parentKey:v,item:ze}),he&&(this.dirty=!0),o&&L(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(se)}toggle(e){this.mobileActive?(this.mobileActive=!1,W.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,W.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{L(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&L(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),L(this.rootmenu?.el.nativeElement)}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let o=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:o?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let i=this.document.activeElement;i&&this.el.nativeElement.contains(i)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Ct(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return Z(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&Z(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&Z(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,o=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(a=>this.isItemMatched(a)),i!==-1&&(o=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?_e(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(o=>o.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(_e(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let a=this.findLastItemIndex();this.changeFocusedItemIndex(e,a)}}else{let o=this.activeItemPath().find(a=>a.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:o?o.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let a=this.activeItemPath().filter(T=>T.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a)}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],i=t?this.activeItemPath().find(o=>o.key===t.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let o=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o),e.preventDefault()}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=R(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&(R(t,'[data-pc-section="itemlink"]')||R(t,"a,button"));i?i.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return je(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?je(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e}bindResizeListener(){N(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{fe()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){N(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||n)(k(at),k(xe),k(st),k(lt),k(It),k(We))};static \u0275cmp=S({type:n,selectors:[["p-menubar"]],contentQueries:function(t,i,o){if(t&1&&Te(o,En,4)(o,Bn,4)(o,Fn,4)(o,An,4)(o,Vn,4)(o,De,4),t&2){let a;I(a=x())&&(i.startTemplate=a.first),I(a=x())&&(i.endTemplate=a.first),I(a=x())&&(i.itemTemplate=a.first),I(a=x())&&(i.menuIconTemplate=a.first),I(a=x())&&(i.submenuIconTemplate=a.first),I(a=x())&&(i.templates=a)}},viewQuery:function(t,i){if(t&1&&bt(Hn,5)(Nn,5),t&2){let o;I(o=x())&&(i.menubutton=o.first),I(o=x())&&(i.rootmenu=o.first)}},hostVars:2,hostBindings:function(t,i){t&2&&c(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",F],baseZIndex:[2,"baseZIndex","baseZIndex",q],autoDisplay:[2,"autoDisplay","autoDisplay",F],autoHide:[2,"autoHide","autoHide",F],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",q],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[ce([We,Ge,{provide:Nt,useExisting:n},{provide:Be,useExisting:n}]),Ce([w]),$],ngContentSelectors:Rn,decls:7,vars:20,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","mousedown","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind","unstyled"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,i){if(t&1&&(dt(),u(0,$n,2,4,"div",3)(1,Un,4,9,"a",4),d(2,"ul",5,0),M("itemClick",function(a){return i.onItemClick(a)})("mousedown",function(a){return i.onMenuMouseDown(a)})("focus",function(a){return i.onMenuFocus(a)})("blur",function(a){return i.onMenuBlur(a)})("keydown",function(a){return i.onKeyDown(a)})("itemMouseEnter",function(a){return i.onItemMouseEnter(a)})("mouseleave",function(a){return i.onMouseLeave(a)}),p(),u(4,Qn,2,4,"div",6)(5,Gn,2,2,"ng-template",null,1,B)),t&2){let o=E(6);r("ngIf",i.startTemplate||i._startTemplate),m(),r("ngIf",i.model&&i.model.length>0),m(),r("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath())("pt",i.pt())("pBind",i.ptm("rootList"))("unstyled",i.unstyled()),_("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),m(2),r("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",o)}},dependencies:[te,Y,ee,ne,Xn,re,w,Vt,ae,V,oe],encapsulation:2,changeDetection:0})}return n})(),Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=ge({imports:[Je,V,V]})}return n})();var $t=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var ei=["pMenuItemContent",""],Re=n=>({$implicit:n}),ti=()=>({exact:!1}),ni=n=>({item:n});function ii(n,s){n&1&&H(0)}function oi(n,s){if(n&1&&(d(0,"a",6),u(1,ii,1,0,"ng-container",7),p()),n&2){let e=l(2),t=E(4);c(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),r("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("pBind",e.getPTOptions("itemLink")),_("title",e.item.title)("href",e.item.url||null,ye)("data-automationid",e.item.automationId)("tabindex",-1),m(),r("ngTemplateOutlet",t)("ngTemplateOutletContext",X(11,Re,e.item))}}function ai(n,s){n&1&&H(0)}function ri(n,s){if(n&1&&(d(0,"a",8),u(1,ai,1,0,"ng-container",7),p()),n&2){let e=l(2),t=E(4);c(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),r("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Me(19,ti))("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("pBind",e.getPTOptions("itemLink")),_("data-automationid",e.item.automationId)("tabindex",-1)("title",e.item.title),m(),r("ngTemplateOutlet",t)("ngTemplateOutletContext",X(20,Re,e.item))}}function si(n,s){if(n&1&&(P(0),u(1,oi,2,13,"a",4)(2,ri,2,22,"a",5),D()),n&2){let e=l();m(),r("ngIf",!(e.item!=null&&e.item.routerLink)),m(),r("ngIf",e.item==null?null:e.item.routerLink)}}function li(n,s){}function mi(n,s){n&1&&u(0,li,0,0,"ng-template")}function ui(n,s){if(n&1&&(P(0),u(1,mi,1,0,null,7),D()),n&2){let e=l();m(),r("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",X(2,Re,e.item))}}function ci(n,s){if(n&1&&b(0,"span",12),n&2){let e=l(2);c(e.cn(e.cx("itemIcon",X(5,ni,e.item)),e.item.iconClass)),r("pBind",e.getPTOptions("itemIcon"))("ngStyle",e.item.iconStyle),_("data-pc-section","itemicon")}}function pi(n,s){if(n&1&&(d(0,"span",13),z(1),p()),n&2){let e=l(2);c(e.cn(e.cx("itemLabel"),e.item.labelClass)),r("ngStyle",e.item.labelStyle)("pBind",e.getPTOptions("itemLabel")),_("data-pc-section","itemlabel"),m(),ue(e.item.label)}}function di(n,s){if(n&1&&(b(0,"span",14),qe(1,"safeHtml")),n&2){let e=l(2);c(e.cn(e.cx("itemLabel"),e.item.labelClass)),r("ngStyle",e.item.labelStyle)("innerHTML",Ze(1,6,e.item.label),J)("pBind",e.getPTOptions("itemLabel")),_("data-pc-section","itemlabel")}}function _i(n,s){if(n&1&&b(0,"p-badge",15),n&2){let e=l(2);r("styleClass",e.item.badgeStyleClass)("value",e.item.badge)("pt",e.getPTOptions("pcBadge"))("unstyled",e.unstyled())}}function bi(n,s){if(n&1&&u(0,ci,1,7,"span",9)(1,pi,2,6,"span",10)(2,di,2,8,"ng-template",null,1,B)(4,_i,1,4,"p-badge",11),n&2){let e=E(3),t=l();r("ngIf",t.item.icon),m(),r("ngIf",t.item.escape!==!1)("ngIfElse",e),m(3),r("ngIf",t.item.badge)}}var fi=["start"],hi=["end"],gi=["header"],Ii=["item"],xi=["submenuheader"],yi=["list"],vi=["container"],qt=(n,s)=>({item:n,id:s});function Ci(n,s){n&1&&H(0)}function Ti(n,s){if(n&1&&(d(0,"div",8),u(1,Ci,1,0,"ng-container",9),p()),n&2){let e=l(2);c(e.cx("start")),r("pBind",e.ptm("start")),_("data-pc-section","start"),m(),r("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function Mi(n,s){if(n&1&&b(0,"li",13),n&2){let e=l(4);c(e.cx("separator")),r("pBind",e.ptm("separator")),_("data-pc-section","separator")}}function ki(n,s){if(n&1&&(d(0,"span"),z(1),p()),n&2){let e=l(3).$implicit;m(),ue(e.label)}}function Si(n,s){if(n&1&&(b(0,"span",17),qe(1,"safeHtml")),n&2){let e=l(3).$implicit;r("innerHTML",Ze(1,1,e.label),J)}}function Li(n,s){if(n&1&&(P(0),u(1,ki,2,1,"span",16)(2,Si,2,3,"ng-template",null,2,B),D()),n&2){let e=E(3),t=l(2).$implicit;m(),r("ngIf",t.escape!==!1)("ngIfElse",e)}}function wi(n,s){n&1&&H(0)}function Oi(n,s){if(n&1&&(d(0,"li",14),u(1,Li,4,2,"ng-container",7)(2,wi,1,0,"ng-container",15),p()),n&2){let e=l(),t=e.$implicit,i=e.index,o=l(3);c(o.cx("submenuLabel")),r("pBind",o.ptm("submenuLabel"))("tooltipOptions",t.tooltipOptions)("pTooltipUnstyled",o.unstyled()),_("data-automationid",t.automationId)("id",o.menuitemId(t,o.id,i))("data-pc-section","submenulabel"),m(),r("ngIf",!o.submenuHeaderTemplate&&!o._submenuHeaderTemplate),m(),r("ngTemplateOutlet",o.submenuHeaderTemplate??o._submenuHeaderTemplate)("ngTemplateOutletContext",X(11,Re,t))}}function Pi(n,s){if(n&1&&b(0,"li",13),n&2){let e=l(5);c(e.cx("separator")),r("pBind",e.ptm("separator")),_("data-pc-section","separator")}}function Di(n,s){if(n&1){let e=A();d(0,"li",19),M("onMenuItemClick",function(i){f(e);let o=l(),a=o.$implicit,T=o.index,g=l().index,v=l(3);return h(v.itemClick(i,v.menuitemId(a,v.id,g,T)))}),p()}if(n&2){let e=l(),t=e.$implicit,i=e.index,o=l().index,a=l(3);Q(t.style),c(a.cn(a.cx("item",G(17,qt,t,a.menuitemId(t,a.id,o,i))),t==null?null:t.styleClass)),r("pBind",a.ptm("item"))("pMenuItemContent",t)("itemTemplate",a.itemTemplate??a._itemTemplate)("idx",i)("menuitemId",a.menuitemId(t,a.id,o,i))("tooltipOptions",t.tooltipOptions)("pTooltipUnstyled",a.unstyled())("unstyled",a.unstyled()),_("aria-label",a.label(t.label))("data-p-focused",a.isItemFocused(a.menuitemId(t,a.id,o,i)))("data-p-disabled",a.disabled(t.disabled))("aria-disabled",a.disabled(t.disabled))("id",a.menuitemId(t,a.id,o,i))}}function Ei(n,s){if(n&1&&u(0,Pi,1,4,"li",11)(1,Di,1,20,"li",18),n&2){let e=s.$implicit,t=l().$implicit;r("ngIf",e.separator&&(e.visible!==!1||t.visible!==!1)),m(),r("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||t.visible!==!1))}}function Bi(n,s){if(n&1&&u(0,Mi,1,4,"li",11)(1,Oi,3,13,"li",12)(2,Ei,2,2,"ng-template",10),n&2){let e=s.$implicit;r("ngIf",e.separator&&e.visible!==!1),m(),r("ngIf",!e.separator),m(),r("ngForOf",e.items)}}function Fi(n,s){if(n&1&&u(0,Bi,3,3,"ng-template",10),n&2){let e=l(2);r("ngForOf",e.model)}}function Ai(n,s){if(n&1&&b(0,"li",13),n&2){let e=l(4);c(e.cx("separator")),r("pBind",e.ptm("separator")),_("data-pc-section","separator")}}function Vi(n,s){if(n&1){let e=A();d(0,"li",21),M("onMenuItemClick",function(i){f(e);let o=l(),a=o.$implicit,T=o.index,g=l(3);return h(g.itemClick(i,g.menuitemId(a,g.id,T)))}),p()}if(n&2){let e=l(),t=e.$implicit,i=e.index,o=l(3);c(o.cn(o.cx("item",G(16,qt,t,o.menuitemId(t,o.id,i))),t==null?null:t.styleClass)),r("pBind",o.ptm("item"))("pMenuItemContent",t)("itemTemplate",o.itemTemplate??o._itemTemplate)("idx",i)("menuitemId",o.menuitemId(t,o.id,i))("ngStyle",t.style)("tooltipOptions",t.tooltipOptions)("unstyled",o.unstyled())("pTooltipUnstyled",o.unstyled()),_("aria-label",o.label(t.label))("data-p-focused",o.isItemFocused(o.menuitemId(t,o.id,i)))("data-p-disabled",o.disabled(t.disabled))("aria-disabled",o.disabled(t.disabled))("id",o.menuitemId(t,o.id,i))}}function Hi(n,s){if(n&1&&u(0,Ai,1,4,"li",11)(1,Vi,1,19,"li",20),n&2){let e=s.$implicit;r("ngIf",e.separator&&e.visible!==!1),m(),r("ngIf",!e.separator&&e.visible!==!1)}}function Ni(n,s){if(n&1&&u(0,Hi,2,2,"ng-template",10),n&2){let e=l(2);r("ngForOf",e.model)}}function Ri(n,s){n&1&&H(0)}function Ki(n,s){if(n&1&&(d(0,"div",8),u(1,Ri,1,0,"ng-container",9),p()),n&2){let e=l(2);c(e.cx("end")),r("pBind",e.ptm("end")),_("data-pc-section","end"),m(),r("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function $i(n,s){if(n&1){let e=A();d(0,"div",4,0),M("click",function(i){f(e);let o=l();return h(o.onOverlayClick(i))})("pMotionOnBeforeEnter",function(i){f(e);let o=l();return h(o.onOverlayBeforeEnter(i))})("pMotionOnAfterLeave",function(){f(e);let i=l();return h(i.onOverlayAfterLeave())}),u(2,Ti,2,5,"div",5),d(3,"ul",6,1),M("focus",function(i){f(e);let o=l();return h(o.onListFocus(i))})("blur",function(i){f(e);let o=l();return h(o.onListBlur(i))})("keydown",function(i){f(e);let o=l();return h(o.onListKeyDown(i))}),u(5,Fi,1,1,null,7)(6,Ni,1,1,null,7),p(),u(7,Ki,2,5,"div",5),p()}if(n&2){let e=l();Q(e.sx("root")),c(e.cn(e.cx("root"),e.styleClass)),r("ngStyle",e.style)("pBind",e.ptm("root"))("pMotion",e.visible||!e.popup)("pMotionName","p-anchored-overlay")("pMotionAppear",!!e.popup)("pMotionDisabled",!e.popup)("pMotionOptions",e.computedMotionOptions()),_("id",e.id)("data-p",e.dataP),m(2),r("ngIf",e.startTemplate??e._startTemplate),m(),c(e.cx("list")),r("pBind",e.ptm("list")),_("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),m(2),r("ngIf",e.hasSubMenu()),m(),r("ngIf",!e.hasSubMenu()),m(),r("ngIf",e.endTemplate??e._endTemplate)}}var zi={root:({instance:n})=>({position:n.popup?"absolute":"relative"})},qi={root:({instance:n})=>["p-menu p-component",{"p-menu-overlay":n.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:n,item:s,id:e})=>["p-menu-item",{"p-focus":n.focusedOptionId()&&e===n.focusedOptionId(),"p-disabled":n.disabled(s.disabled)},s.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:n})=>["p-menu-item-icon",n.icon,n.iconClass],itemLabel:"p-menu-item-label"},Ne=(()=>{class n extends Ee{name="menu";style=$t;classes=qi;inlineStyles=zi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=j(n)))(i||n)}})();static \u0275prov=me({token:n,factory:n.\u0275fac})}return n})();var zt=new Ie("MENU_INSTANCE"),Zt=(()=>{class n{platformId;sanitizer;constructor(e,t){this.platformId=e,this.sanitizer=t}transform(e){return!e||!N(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(t){return new(t||n)(k(xe,16),k(xt,16))};static \u0275pipe=mt({name:"safeHtml",type:n,pure:!0})}return n})(),Zi=(()=>{class n extends ie{item;itemTemplate;menuitemId=pe("");idx=pe(0);onMenuItemClick=new C;menu;_componentStyle=y(Ne);hostName="Menu";constructor(e){super(),this.menu=e}onItemClick(e,t){this.onMenuItemClick.emit({originalEvent:e,item:t})}getPTOptions(e){return this.menu.getPTOptions(e,this.item,this.idx(),this.menuitemId())}static \u0275fac=function(t){return new(t||n)(k(ot(()=>Ke)))};static \u0275cmp=S({type:n,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate",menuitemId:[1,"menuitemId"],idx:[1,"idx"]},outputs:{onMenuItemClick:"onMenuItemClick"},features:[ce([Ne]),$],attrs:ei,decls:5,vars:6,consts:[["itemContent",""],["htmlLabel",""],[3,"click","pBind"],[4,"ngIf"],["pRipple","",3,"class","ngStyle","target","pBind",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","target","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind","ngStyle",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"styleClass","value","pt","unstyled",4,"ngIf"],[3,"pBind","ngStyle"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"styleClass","value","pt","unstyled"]],template:function(t,i){t&1&&(d(0,"div",2),M("click",function(a){return i.onItemClick(a,i.item)}),u(1,si,3,2,"ng-container",3)(2,ui,2,4,"ng-container",3)(3,bi,5,4,"ng-template",null,0,B),p()),t&2&&(c(i.cx("itemContent")),r("pBind",i.getPTOptions("itemContent")),_("data-pc-section","content"),m(),r("ngIf",!i.itemTemplate),m(),r("ngIf",i.itemTemplate))},dependencies:[te,Y,ee,de,ne,Le,we,Ae,re,w,ae,Fe,V,oe,Zt],encapsulation:2})}return n})(),Ke=(()=>{class n extends ie{overlayService;componentName="Menu";model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=pe(void 0);motionOptions=pe(void 0);computedMotionOptions=ke(()=>le(le({},this.ptm("motion")),this.motionOptions()));onShow=new C;onHide=new C;onBlur=new C;onFocus=new C;listViewChild=Ue("list");containerViewChild=Ue("container");$appendTo=ke(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ke(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=O(-1);selectedOptionIndex=O(-1);focused=!1;overlayVisible=!1;$pcMenu=y(zt,{optional:!0,skipSelf:!0})??void 0;_componentStyle=y(Ne);bindDirectiveInstance=y(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}constructor(e){super(),this.overlayService=e,this.id=this.id||Pe("pn_id_")}getPTOptions(e,t,i,o){return this.ptm(e,{context:{item:t,index:i,focused:this.isItemFocused(o),disabled:this.disabled(t.disabled)}})}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.container&&!this.overlayVisible&&(this.container=void 0),this.target=e.currentTarget,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}onInit(){this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayBeforeEnter(e){this.container=e.element,this.container&&(Mt(this.container,{position:"absolute",top:"0"}),this.appendOverlay(),this.moveOnTop(),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Tt(this.container,this.target),L(this.listViewChild()?.nativeElement),this.onShow.emit({}))}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.overlayVisible=!1,this.onHide.emit({})}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?Oe(this.document.body,this.container):Oe(this.$appendTo(),this.container))}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&Oe(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&W.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!fe()&&this.hide()}menuitemId(e,t,i,o){return e?.id??`${t}_${i}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(L(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let t=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(t),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)L(this.target),this.hide(),e.preventDefault();else{let t=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(t),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(be(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let t=R(this.containerViewChild()?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=t&&(R(t,'[data-pc-section="itemlink"]')||R(t,"a,button"));this.popup&&L(this.target),i?i.click():t&&t.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...be(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...be(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let t=be(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]');if(t.length>0){let i=e>=t.length?t.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(t[i].getAttribute("id"))}}itemClick(e,t){let{originalEvent:i,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){i.preventDefault();return}!o.url&&!o.routerLink&&i.preventDefault(),o.command&&o.command({originalEvent:i,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==t&&this.focusedOptionIndex.set(t)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&N(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",t=>{let i=this.containerViewChild()?.nativeElement&&!this.containerViewChild()?.nativeElement.contains(t.target),o=!(this.target&&(this.target===t.target||this.target.contains(t.target)));!this.popup&&i&&o&&this.onListBlur(t),this.preventDocumentDefault&&this.overlayVisible&&i&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&N(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&N(this.platformId)&&(this.scrollHandler=new Lt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null),this.container&&(this.autoZIndex&&W.clear(this.container),this.container=void 0)}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&(this.autoZIndex&&W.clear(this.container),this.container=void 0),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(t=>t.visible!==!1):e.visible===!1}get dataP(){return this.cn({popup:this.popup})}static \u0275fac=function(t){return new(t||n)(k(kt))};static \u0275cmp=S({type:n,selectors:[["p-menu"]],contentQueries:function(t,i,o){if(t&1&&Te(o,fi,4)(o,hi,4)(o,gi,4)(o,Ii,4)(o,xi,4)(o,De,4),t&2){let a;I(a=x())&&(i.startTemplate=a.first),I(a=x())&&(i.endTemplate=a.first),I(a=x())&&(i.headerTemplate=a.first),I(a=x())&&(i.itemTemplate=a.first),I(a=x())&&(i.submenuHeaderTemplate=a.first),I(a=x())&&(i.templates=a)}},viewQuery:function(t,i){t&1&&ft(i.listViewChild,yi,5)(i.containerViewChild,vi,5),t&2&&ht(2)},inputs:{model:"model",popup:[2,"popup","popup",F],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",F],baseZIndex:[2,"baseZIndex","baseZIndex",q],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",q],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[ce([Ne,{provide:zt,useExisting:n},{provide:Be,useExisting:n}]),Ce([w]),$],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"click","pMotionOnBeforeEnter","pMotionOnAfterLeave","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"class","pBind",4,"ngIf"],["role","menu",3,"focus","blur","keydown","pBind"],[4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class","pBind",4,"ngIf"],["pTooltip","","role","none",3,"class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["pTooltip","","role","none",3,"pBind","tooltipOptions","pTooltipUnstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","style","tooltipOptions","pTooltipUnstyled","unstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","tooltipOptions","pTooltipUnstyled","unstyled"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled"]],template:function(t,i){t&1&&ut(0,$i,8,26,"div",3),t&2&&ct(!i.popup||i.overlayVisible?0:-1)},dependencies:[te,Se,Y,ee,de,ne,Zi,re,Ve,w,ae,V,oe,Et,Dt,Zt],encapsulation:2,changeDetection:0})}return n})(),Ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ve({type:n});static \u0275inj=ge({imports:[Ke,V,V]})}return n})();function Qi(n,s){n&1&&(d(0,"div",4),b(1,"i",5),d(2,"span",6),z(3,"Exchange App"),p()())}function Gi(n,s){if(n&1){let e=A();d(0,"div",7)(1,"p-button",8),M("onClick",function(i){f(e);let o=E(3);return h(o.toggle(i))}),p(),b(2,"p-menu",9,2),p()}if(n&2){let e=l();m(),r("label",e.username()),m(),r("model",e.userMenuItems)("popup",!0)}}var $e=class n{authService=y(St);router=y(vt);themeService=y(At);items;userMenuItems=[];username=O("");isDarkMode=O(!1);themeSubscription;ngOnInit(){this.username.set(this.authService.getUsernameFromToken()),this.themeSubscription=this.themeService.theme$.subscribe(s=>{this.isDarkMode.set(s==="dark"),this.updateMenu()}),this.items=[{label:"Dashboard",icon:"pi pi-home",routerLink:"/dashboard"},{label:"History",icon:"pi pi-history",routerLink:"/history"}],this.updateMenu()}updateMenu(){this.userMenuItems=[{label:this.isDarkMode()?"Light mode":"Dark mode",icon:this.isDarkMode()?"pi pi-sun":"pi pi-moon",command:()=>this.toggleTheme()},{separator:!0},{label:"Logout",icon:"pi pi-sign-out",command:()=>this.logout()}]}toggleTheme(){let s=this.isDarkMode()?"light":"dark";this.themeService.setTheme(s)}logout(){this.authService.logout(),this.router.navigate(["/login"])}ngOnDestroy(){this.themeSubscription&&this.themeSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["app-navbar"]],decls:5,vars:1,consts:[["start",""],["end",""],["userMenu",""],[1,"w-full",3,"model"],[1,"flex","items-center","gap-2","pr-4"],[1,"pi","pi-chart-line","text-primary","text-2xl"],[1,"font-bold","text-xl","text-primary"],[1,"flex","items-center","gap-2"],["icon","pi pi-user","variant","text",3,"onClick","label"],[3,"model","popup"]],template:function(e,t){e&1&&(d(0,"p-menubar",3),u(1,Qi,4,0,"ng-template",null,0,B)(3,Gi,4,3,"ng-template",null,1,B),p()),e&2&&r("model",t.items)},dependencies:[Kt,Je,Ft,Bt,Ut,Ke],encapsulation:2})};var jt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=S({type:n,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"p-4"]],template:function(e,t){e&1&&(b(0,"app-navbar"),d(1,"div",0),b(2,"router-outlet"),p())},dependencies:[$e,yt],encapsulation:2})};export{jt as Layout};
