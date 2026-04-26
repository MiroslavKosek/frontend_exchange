import{b as xt,c as yt,d as Oe,e as Ve,g as ie,h as Pt}from"./chunk-SJYZSILT.js";import{a as Dt,b as ze,c as qe,d as ue}from"./chunk-QA5W5UB2.js";import{a as At,b as Ft}from"./chunk-VHHJBKZH.js";import{a as Ne,b as ye,c as ae,d as w,e as me,j as wt,l as Et,o as et,p as tt,s as le,t as Bt,u as nt,v as Ze,w as Ot,x as Vt}from"./chunk-BNRJNGZC.js";import{Ab as J,Bb as he,Cc as U,Da as Le,Ea as D,Gd as se,Hd as Tt,Ib as Ie,Ja as B,Jb as Ee,K as Me,Ka as Pe,Kb as ht,Kc as G,L as de,Lb as te,M as Ce,Ma as _e,Na as j,Nc as L,O as pe,Oa as c,Q as I,Rb as It,Rc as oe,Sb as ft,Sc as re,Ua as Qe,Va as g,Vb as R,Vd as St,W as _,X as b,Y as F,Ya as We,Yc as Ae,Yd as $e,Za as Xe,Zb as Ye,Zd as z,_ as ct,a as Y,ab as m,ae as Re,b as ve,ba as M,bb as p,bc as De,cb as d,cc as gt,db as h,ec as v,fc as N,fe as kt,g as at,ga as k,gb as pt,ge as Lt,ha as Te,hb as O,ib as V,id as vt,ja as W,jb as Je,jd as Mt,je as He,kb as K,kd as Fe,la as Se,ld as Ct,mb as E,nb as s,nd as Ke,ob as _t,pa as dt,pb as bt,qb as we,rb as be,rc as Be,rd as H,sb as C,sc as fe,sd as P,ta as ee,tb as T,tc as ge,ua as ke,ub as q,uc as xe,v as mt,w as lt,wa as l,xb as X,xc as ne,yb as u,z as ut,zb as $}from"./chunk-MEJDI5XR.js";var jt=["data-p-icon","bars"],Kt=(()=>{class o extends Et{static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(o)))(n||o)}})();static \u0275cmp=B({type:o,selectors:[["","data-p-icon","bars"]],features:[j],attrs:jt,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,n){t&1&&(F(),pt(0,"path",0))},encapsulation:2})}return o})();var Nt=`
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
`;var Rt=(o,a)=>({instance:o,processedItem:a}),Yt=()=>({exact:!1}),en=(o,a)=>({$implicit:o,root:a});function tn(o,a){if(o&1&&h(0,"li",6),o&2){let e=s().$implicit,t=s();X(t.getItemProp(e,"style")),u(t.cn(t.cx("separator"),e==null?null:e.styleClass)),m("pBind",t.ptm("separator")),g("id",t.getItemId(e))}}function nn(o,a){if(o&1&&h(0,"span",17),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),m("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),g("tabindex",-1)}}function on(o,a){if(o&1&&(p(0,"span",18),$(1),d()),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("id",i.getItemLabelId(t))("pBind",i.getPTOptions(t,n,"itemLabel")),l(),he(" ",i.getItemLabel(t)," ")}}function rn(o,a){if(o&1&&h(0,"span",19),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("innerHTML",i.getItemLabel(t),ee)("id",i.getItemLabelId(t))("pBind",i.getPTOptions(t,n,"itemLabel"))}}function sn(o,a){if(o&1&&h(0,"p-badge",20),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.getItemProp(t,"badgeStyleClass")),m("value",i.getItemProp(t,"badge"))("pt",i.getPTOptions(t,n,"pcBadge"))("unstyled",i.unstyled())}}function an(o,a){if(o&1&&(F(),h(0,"svg",24)),o&2){let e=s(6),t=e.$implicit,n=e.index,i=s();u(i.cx("submenuIcon")),m("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function mn(o,a){if(o&1&&(F(),h(0,"svg",25)),o&2){let e=s(6),t=e.$implicit,n=e.index,i=s();u(i.cx("submenuIcon")),m("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function ln(o,a){if(o&1&&(O(0),c(1,an,1,3,"svg",22)(2,mn,1,3,"svg",23),V()),o&2){let e=s(6);l(),m("ngIf",e.root),l(),m("ngIf",!e.root)}}function un(o,a){}function cn(o,a){o&1&&c(0,un,0,0,"ng-template")}function dn(o,a){if(o&1&&(O(0),c(1,ln,3,2,"ng-container",9)(2,cn,1,0,null,21),V()),o&2){let e=s(5);l(),m("ngIf",!e.submenuiconTemplate),l(),m("ngTemplateOutlet",e.submenuiconTemplate)}}function pn(o,a){if(o&1&&(p(0,"a",13),c(1,nn,1,5,"span",14)(2,on,2,6,"span",15)(3,rn,1,6,"ng-template",null,1,R)(5,sn,1,5,"p-badge",16)(6,dn,3,2,"ng-container",9),d()),o&2){let e=q(4),t=s(3),n=t.$implicit,i=t.index,r=s();u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),m("ngStyle",r.getItemProp(n,"linkStyle"))("pBind",r.getPTOptions(n,i,"itemLink")),g("href",r.getItemProp(n,"url"),ke)("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("target",r.getItemProp(n,"target"))("tabindex",-1),l(),m("ngIf",r.getItemProp(n,"icon")),l(),m("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),l(3),m("ngIf",r.getItemProp(n,"badge")),l(),m("ngIf",r.isItemGroup(n))}}function _n(o,a){if(o&1&&h(0,"span",17),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),m("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),g("tabindex",-1)}}function bn(o,a){if(o&1&&(p(0,"span",17),$(1),d()),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("pBind",i.getPTOptions(t,n,"itemLabel")),l(),J(i.getItemLabel(t))}}function hn(o,a){if(o&1&&h(0,"span",28),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("innerHTML",i.getItemLabel(t),ee)("pBind",i.getPTOptions(t,n,"itemLabel"))}}function In(o,a){if(o&1&&h(0,"p-badge",20),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s();u(i.getItemProp(t,"badgeStyleClass")),m("value",i.getItemProp(t,"badge"))("pt",i.getPTOptions(t,n,"pcBadge"))("unstyled",i.unstyled())}}function fn(o,a){if(o&1&&(F(),h(0,"svg",24)),o&2){let e=s(6),t=e.$implicit,n=e.index,i=s();u(i.cx("submenuIcon")),m("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function gn(o,a){if(o&1&&(F(),h(0,"svg",25)),o&2){let e=s(6),t=e.$implicit,n=e.index,i=s();u(i.cx("submenuIcon")),m("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function xn(o,a){if(o&1&&(O(0),c(1,fn,1,3,"svg",22)(2,gn,1,3,"svg",23),V()),o&2){let e=s(6);l(),m("ngIf",e.root),l(),m("ngIf",!e.root)}}function yn(o,a){}function vn(o,a){o&1&&c(0,yn,0,0,"ng-template")}function Mn(o,a){if(o&1&&(O(0),c(1,xn,3,2,"ng-container",9)(2,vn,1,0,null,21),V()),o&2){let e=s(5);l(),m("ngIf",!e.submenuiconTemplate),l(),m("ngTemplateOutlet",e.submenuiconTemplate)}}function Cn(o,a){if(o&1&&(p(0,"a",26),c(1,_n,1,5,"span",14)(2,bn,2,5,"span",27)(3,hn,1,5,"ng-template",null,2,R)(5,In,1,5,"p-badge",16)(6,Mn,3,2,"ng-container",9),d()),o&2){let e=q(4),t=s(3),n=t.$implicit,i=t.index,r=s();u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),m("routerLink",r.getItemProp(n,"routerLink"))("queryParams",r.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",r.getItemProp(n,"routerLinkActiveOptions")||Ee(23,Yt))("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("fragment",r.getItemProp(n,"fragment"))("queryParamsHandling",r.getItemProp(n,"queryParamsHandling"))("preserveFragment",r.getItemProp(n,"preserveFragment"))("skipLocationChange",r.getItemProp(n,"skipLocationChange"))("replaceUrl",r.getItemProp(n,"replaceUrl"))("state",r.getItemProp(n,"state"))("pBind",r.getPTOptions(n,i,"itemLink")),g("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),l(),m("ngIf",r.getItemProp(n,"icon")),l(),m("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),l(3),m("ngIf",r.getItemProp(n,"badge")),l(),m("ngIf",r.isItemGroup(n))}}function Tn(o,a){if(o&1&&(O(0),c(1,pn,7,14,"a",11)(2,Cn,7,24,"a",12),V()),o&2){let e=s(2).$implicit,t=s();l(),m("ngIf",!t.getItemProp(e,"routerLink")),l(),m("ngIf",t.getItemProp(e,"routerLink"))}}function Sn(o,a){}function kn(o,a){o&1&&c(0,Sn,0,0,"ng-template")}function Ln(o,a){if(o&1&&(O(0),c(1,kn,1,0,null,29),V()),o&2){let e=s(2).$implicit,t=s();l(),m("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",te(2,en,e.item,t.root))}}function Pn(o,a){if(o&1){let e=K();p(0,"ul",30),E("itemClick",function(n){_(e);let i=s(3);return b(i.itemClick.emit(n))})("itemMouseEnter",function(n){_(e);let i=s(3);return b(i.onItemMouseEnter(n))}),d()}if(o&2){let e=s(2).$implicit,t=s();m("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,te(13,Rt,t,e)))("pt",t.pt())("pBind",t.ptm("submenu"))("unstyled",t.unstyled()),g("aria-labelledby",t.getItemLabelId(e))}}function wn(o,a){if(o&1){let e=K();p(0,"li",7,0)(2,"div",8),E("click",function(n){_(e);let i=s().$implicit,r=s();return b(r.onItemClick(n,i))})("mouseenter",function(n){_(e);let i=s().$implicit,r=s();return b(r.onItemMouseEnter({$event:n,processedItem:i}))}),c(3,Tn,3,2,"ng-container",9)(4,Ln,2,5,"ng-container",9),d(),c(5,Pn,1,16,"ul",10),d()}if(o&2){let e=s(),t=e.$implicit,n=e.index,i=s();X(i.getItemProp(t,"style")),u(i.cn(i.cx("item",te(23,Rt,i,t)),i.getItemProp(t,"styleClass"))),m("pBind",i.getPTOptions(t,n,"item"))("tooltipOptions",i.getItemProp(t,"tooltipOptions"))("pTooltipUnstyled",i.unstyled()),g("id",i.getItemId(t))("data-p-highlight",i.isItemActive(t))("data-p-focused",i.isItemFocused(t))("data-p-disabled",i.isItemDisabled(t))("aria-label",i.getItemLabel(t))("aria-disabled",i.isItemDisabled(t)||void 0)("aria-haspopup",i.isItemGroup(t)&&!i.getItemProp(t,"to")?"menu":void 0)("aria-expanded",i.isItemGroup(t)?i.isItemActive(t):void 0)("aria-setsize",i.getAriaSetSize())("aria-posinset",i.getAriaPosInset(n)),l(2),u(i.cx("itemContent")),m("pBind",i.getPTOptions(t,n,"itemContent")),l(),m("ngIf",!i.itemTemplate),l(),m("ngIf",i.itemTemplate),l(),m("ngIf",i.isItemVisible(t)&&i.isItemGroup(t))}}function En(o,a){if(o&1&&c(0,tn,1,6,"li",4)(1,wn,6,26,"li",5),o&2){let e=a.$implicit,t=s();m("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),l(),m("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var Dn=["start"],Bn=["end"],On=["item"],Vn=["menuicon"],An=["submenuicon"],Fn=["menubutton"],Kn=["rootmenu"],Nn=["*"];function $n(o,a){o&1&&Je(0)}function Rn(o,a){if(o&1&&(p(0,"div",7),c(1,$n,1,0,"ng-container",8),d()),o&2){let e=s();u(e.cx("start")),m("pBind",e.ptm("start")),l(),m("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Hn(o,a){if(o&1&&(F(),h(0,"svg",11)),o&2){let e=s(2);m("pBind",e.ptm("buttonIcon"))}}function zn(o,a){}function Zn(o,a){o&1&&c(0,zn,0,0,"ng-template")}function qn(o,a){if(o&1){let e=K();p(0,"a",9,2),E("click",function(n){_(e);let i=s();return b(i.menuButtonClick(n))})("keydown",function(n){_(e);let i=s();return b(i.menuButtonKeydown(n))}),c(2,Hn,1,1,"svg",10)(3,Zn,1,0,null,8),d()}if(o&2){let e=s();u(e.cx("button")),m("pBind",e.ptm("button")),g("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),l(2),m("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),l(),m("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Un(o,a){o&1&&Je(0)}function Gn(o,a){if(o&1&&(p(0,"div",7),c(1,Un,1,0,"ng-container",8),d()),o&2){let e=s();u(e.cx("end")),m("pBind",e.ptm("end")),l(),m("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function jn(o,a){if(o&1&&(p(0,"div"),bt(1),d()),o&2){let e=s();u(e.cx("end"))}}var Qn={submenu:({instance:o,processedItem:a})=>({display:o.isItemActive(a)?"flex":"none"})},Wn={root:({instance:o})=>["p-menubar p-component",{"p-menubar-mobile":o.queryMatches(),"p-menubar-mobile-active":o.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:o,processedItem:a})=>["p-menubar-item",{"p-menubar-item-active":o.isItemActive(a),"p-focus":o.isItemFocused(a),"p-disabled":o.isItemDisabled(a)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},it=(()=>{class o extends Re{name="menubar";style=Nt;classes=Wn;inlineStyles=Qn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(o)))(n||o)}})();static \u0275prov=de({token:o,factory:o.\u0275fac})}return o})();var $t=new pe("MENUBAR_INSTANCE"),ot=(()=>{class o{autoHide;autoHideDelay;mouseLeaves=new at;mouseLeft$=this.mouseLeaves.pipe(ut(()=>mt(this.autoHideDelay)),lt(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||o)};static \u0275prov=de({token:o,factory:o.\u0275fac})}return o})(),Xn=(()=>{class o extends ae{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new M;itemMouseEnter=new M;menuFocus=new M;menuBlur=new M;menuKeydown=new M;mouseLeaveSubscriber;menubarService=I(ot);_componentStyle=I(it);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,n=null){return e&&e.item?re(e.item[t],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return L(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}}getPTOptions(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(o)))(n||o)}})();static \u0275cmp=B({type:o,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostVars:7,hostBindings:function(t,n){t&2&&(g("id",n.root?n.menuId:null)("aria-activedescendant",n.focusedItemId)("role","menubar"),X(n.inlineStyles),u(n.level===0?n.cx("rootList"):n.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",v],autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",N],mobileActive:[2,"mobileActive","mobileActive",v],autoDisplay:[2,"autoDisplay","autoDisplay",v],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",N],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[j],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","id","pBind"],[3,"ngStyle","innerHTML","id","pBind"],[3,"value","pt","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled"]],template:function(t,n){t&1&&c(0,En,2,2,"ng-template",3),t&2&&m("ngForOf",n.items)},dependencies:[o,ne,Be,fe,xe,ge,ie,Oe,Ve,Ze,ue,qe,w,Dt,ze,nt,Bt,z,me],encapsulation:2})}return o})(),rt=(()=>{class o extends ae{document;platformId;el;renderer;cd;menubarService;componentName="Menubar";$pcMenubar=I($t,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new M;onBlur=new M;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=k(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=k([]);number=k(0);focusedItemInfo=k({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=I(it);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${L(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,n,i,r,y){super(),this.document=e,this.platformId=t,this.el=n,this.renderer=i,this.cd=r,this.menubarService=y,Te(()=>{let x=this.activeItemPath();L(x)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||Ne("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,n={},i=""){let r=[];return e&&e.forEach((y,x)=>{let f=(i!==""?i+"_":"")+x,S={item:y,index:x,level:t,key:f,parent:n,parentKey:i};S.items=this.createProcessedItems(y.items,t+1,S,f),r.push(S)}),r}bindMatchMediaListener(){if(U(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?re(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:t,processedItem:n}=e,i=this.isProcessedItemGroup(n),r=G(n.parent);if(this.isSelected(n)){let{index:x,key:f,level:S,parentKey:Q,item:Z}=n;this.activeItemPath.set(this.activeItemPath().filter(A=>f!==A.key&&f.startsWith(A.key))),this.focusedItemInfo.set({index:x,level:S,parentKey:Q,item:Z}),this.dirty=!r,P(this.rootmenu?.el.nativeElement)}else if(i)this.onItemChange(e);else{let x=r?n:this.activeItemPath().find(f=>f.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,x?x.index:-1),this.mobileActive=!1,P(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){se()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,n=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},n)}changeFocusedItemIndex(e,t){let n=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let i=this.focusedItemInfo();this.focusedItemInfo.set(ve(Y({},i),{item:n.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=H(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:n,isFocus:i}=e;if(G(n))return;let{index:r,key:y,level:x,parentKey:f,items:S,item:Q}=n,Z=L(S),A=this.activeItemPath().filter(ce=>ce.parentKey!==f&&ce.parentKey!==y);Z&&A.push(n),this.focusedItemInfo.set({index:r,level:x,parentKey:f,item:Q}),Z&&(this.dirty=!0),i&&P(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(A)}toggle(e){this.mobileActive?(this.mobileActive=!1,le.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,le.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{P(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&P(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),P(this.rootmenu?.el.nativeElement)}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let i=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:i?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Ae(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return L(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&L(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&L(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,i=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(i=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?G(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(i=>i.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(G(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let i=this.activeItemPath().find(r=>r.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:i?i.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(y=>y.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],n=t?this.activeItemPath().find(i=>i.key===t.parentKey):null;if(n){this.onItemChange({originalEvent:e,processedItem:n});let i=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(i),e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=H(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(H(t,'[data-pc-section="itemlink"]')||H(t,"a,button"));n?n.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return oe(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?oe(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}bindResizeListener(){U(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{se()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){U(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),n=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||o)(D(ct),D(dt),D(Se),D(Le),D(gt),D(ot))};static \u0275cmp=B({type:o,selectors:[["p-menubar"]],contentQueries:function(t,n,i){if(t&1&&we(i,Dn,4)(i,Bn,4)(i,On,4)(i,Vn,4)(i,An,4)(i,$e,4),t&2){let r;C(r=T())&&(n.startTemplate=r.first),C(r=T())&&(n.endTemplate=r.first),C(r=T())&&(n.itemTemplate=r.first),C(r=T())&&(n.menuIconTemplate=r.first),C(r=T())&&(n.submenuIconTemplate=r.first),C(r=T())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&be(Fn,5)(Kn,5),t&2){let i;C(i=T())&&(n.menubutton=i.first),C(i=T())&&(n.rootmenu=i.first)}},hostVars:2,hostBindings:function(t,n){t&2&&u(n.cn(n.cx("root"),n.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",N],autoDisplay:[2,"autoDisplay","autoDisplay",v],autoHide:[2,"autoHide","autoHide",v],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",N],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[Ie([ot,it,{provide:$t,useExisting:o},{provide:ye,useExisting:o}]),_e([w]),j],ngContentSelectors:Nn,decls:7,vars:20,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","mousedown","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind","unstyled"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,n){if(t&1&&(_t(),c(0,Rn,2,4,"div",3)(1,qn,4,9,"a",4),p(2,"ul",5,0),E("itemClick",function(r){return n.onItemClick(r)})("mousedown",function(r){return n.onMenuMouseDown(r)})("focus",function(r){return n.onMenuFocus(r)})("blur",function(r){return n.onMenuBlur(r)})("keydown",function(r){return n.onKeyDown(r)})("itemMouseEnter",function(r){return n.onItemMouseEnter(r)})("mouseleave",function(r){return n.onMouseLeave(r)}),d(),c(4,Gn,2,4,"div",6)(5,jn,2,2,"ng-template",null,1,R)),t&2){let i=q(6);m("ngIf",n.startTemplate||n._startTemplate),l(),m("ngIf",n.model&&n.model.length>0),l(),m("items",n.processedItems)("itemTemplate",n.itemTemplate)("menuId",n.id)("root",!0)("baseZIndex",n.baseZIndex)("autoZIndex",n.autoZIndex)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("focusedItemId",n.focused?n.focusedItemId:void 0)("submenuiconTemplate",n.submenuIconTemplate||n._submenuIconTemplate)("activeItemPath",n.activeItemPath())("pt",n.pt())("pBind",n.ptm("rootList"))("unstyled",n.unstyled()),g("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),l(2),m("ngIf",n.endTemplate||n._endTemplate)("ngIfElse",i)}},dependencies:[ne,fe,xe,ie,Xn,ue,w,Kt,nt,z,me],encapsulation:2,changeDetection:0})}return o})(),Ht=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Pe({type:o});static \u0275inj=Ce({imports:[rt,z,z]})}return o})();var zt=`
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }
    

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
        will-change: transform;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`;var Yn=["sublist"],ei=o=>({processedItem:o}),ti=()=>({exact:!1}),ni=(o,a)=>({$implicit:o,hasSubmenu:a});function ii(o,a){if(o&1&&h(0,"li",8),o&2){let e=s().$implicit,t=s(2);X(t.getItemProp(e,"style")),u(t.cn(t.cx("separator"),t.getItemProp(e,"class"),t.getItemProp(e,"styleClass"))),m("pBind",t._ptm("separator")),g("id",t.getItemId(e))}}function oi(o,a){if(o&1&&h(0,"span",19),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),m("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),g("tabindex",-1)}}function ri(o,a){if(o&1&&(p(0,"span",19),$(1),d()),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("pBind",i.getPTOptions(t,n,"itemLabel")),l(),he(" ",i.getItemLabel(t)," ")}}function si(o,a){if(o&1&&h(0,"span",20),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("innerHTML",i.getItemLabel(t),ee)("pBind",i.getPTOptions(t,n,"itemLabel"))}}function ai(o,a){if(o&1&&(p(0,"span"),$(1),d()),o&2){let e=s(4).$implicit,t=s(2);u(t.cn(t.cx("itemBadge"),t.getItemProp(e,"badgeStyleClass"))),l(),J(t.getItemProp(e,"badge"))}}function mi(o,a){if(o&1&&(F(),h(0,"svg",23)),o&2){let e=s(5),t=e.$implicit,n=e.index,i=s(2);u(i.cx("submenuIcon")),m("pBind",i.getPTOptions(t,n,"submenuIcon")),g("aria-hidden",!0)}}function li(o,a){}function ui(o,a){o&1&&c(0,li,0,0,"ng-template",24),o&2&&Qe("aria-hidden",!0)}function ci(o,a){if(o&1&&(O(0),c(1,mi,1,4,"svg",21)(2,ui,1,1,null,22),V()),o&2){let e=s(6);l(),m("ngIf",!e.tieredMenu.submenuIconTemplate&&!e.tieredMenu._submenuIconTemplate),l(),m("ngTemplateOutlet",e.tieredMenu.submenuIconTemplate||e.tieredMenu._submenuIconTemplate)}}function di(o,a){if(o&1&&(p(0,"a",15),c(1,oi,1,5,"span",16)(2,ri,2,5,"span",17)(3,si,1,5,"ng-template",null,2,R)(5,ai,2,3,"span",18)(6,ci,3,2,"ng-container",11),d()),o&2){let e=q(4),t=s(3),n=t.$implicit,i=t.index,r=s(2);u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),m("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("pBind",r.getPTOptions(n,i,"itemLink")),g("href",r.getItemProp(n,"url"),ke)("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),l(),m("ngIf",r.getItemProp(n,"icon")),l(),m("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),l(3),m("ngIf",r.getItemProp(n,"badge")),l(),m("ngIf",r.isItemGroup(n))}}function pi(o,a){if(o&1&&h(0,"span",19),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),m("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),g("aria-hidden",!0)("tabindex",-1)}}function _i(o,a){if(o&1&&(p(0,"span",19),$(1),d()),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("pBind",i.getPTOptions(t,n,"itemLabel")),l(),he(" ",i.getItemLabel(t)," ")}}function bi(o,a){if(o&1&&h(0,"span",20),o&2){let e=s(4),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("itemLabel"),i.getItemProp(t,"labelClass"))),m("ngStyle",i.getItemProp(t,"labelStyle"))("innerHTML",i.getItemLabel(t),ee)("pBind",i.getPTOptions(t,n,"itemLabel"))}}function hi(o,a){if(o&1&&(p(0,"span"),$(1),d()),o&2){let e=s(4).$implicit,t=s(2);u(t.cn(t.cx("itemBadge"),t.getItemProp(e,"badgeStyleClass"))),l(),J(t.getItemProp(e,"badge"))}}function Ii(o,a){if(o&1&&(F(),h(0,"svg",23)),o&2){let e=s(5),t=e.$implicit,n=e.index,i=s(2);u(i.cx("submenuIcon")),m("pBind",i.getPTOptions(t,n,"submenuIcon")),g("aria-hidden",!0)}}function fi(o,a){}function gi(o,a){o&1&&c(0,fi,0,0,"ng-template",24),o&2&&Qe("aria-hidden",!0)}function xi(o,a){if(o&1&&(O(0),c(1,Ii,1,4,"svg",21)(2,gi,1,1,null,22),V()),o&2){let e=s(6);l(),m("ngIf",!e.tieredMenu.submenuIconTemplate&&!e.tieredMenu._submenuIconTemplate),l(),m("ngTemplateOutlet",e.tieredMenu.submenuIconTemplate||e.tieredMenu._submenuIconTemplate)}}function yi(o,a){if(o&1&&(p(0,"a",25),c(1,pi,1,6,"span",16)(2,_i,2,5,"span",17)(3,bi,1,5,"ng-template",null,2,R)(5,hi,2,3,"span",18)(6,xi,3,2,"ng-container",11),d()),o&2){let e=q(4),t=s(3),n=t.$implicit,i=t.index,r=s(2);u(r.cn(r.cx("itemLink"),r.getItemProp(n,"linkClass"))),m("routerLink",r.getItemProp(n,"routerLink"))("queryParams",r.getItemProp(n,"queryParams"))("routerLinkActive","p-tieredmenu-item-link-active")("routerLinkActiveOptions",r.getItemProp(n,"routerLinkActiveOptions")||Ee(23,ti))("target",r.getItemProp(n,"target"))("ngStyle",r.getItemProp(n,"linkStyle"))("fragment",r.getItemProp(n,"fragment"))("queryParamsHandling",r.getItemProp(n,"queryParamsHandling"))("preserveFragment",r.getItemProp(n,"preserveFragment"))("skipLocationChange",r.getItemProp(n,"skipLocationChange"))("replaceUrl",r.getItemProp(n,"replaceUrl"))("state",r.getItemProp(n,"state"))("pBind",r.getPTOptions(n,i,"itemLink")),g("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),l(),m("ngIf",r.getItemProp(n,"icon")),l(),m("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),l(3),m("ngIf",r.getItemProp(n,"badge")),l(),m("ngIf",r.isItemGroup(n))}}function vi(o,a){if(o&1&&(O(0),c(1,di,7,14,"a",13)(2,yi,7,24,"a",14),V()),o&2){let e=s(2).$implicit,t=s(2);l(),m("ngIf",!t.getItemProp(e,"routerLink")),l(),m("ngIf",t.getItemProp(e,"routerLink"))}}function Mi(o,a){}function Ci(o,a){o&1&&c(0,Mi,0,0,"ng-template")}function Ti(o,a){if(o&1&&(O(0),c(1,Ci,1,0,null,26),V()),o&2){let e=s(2).$implicit,t=s(2);l(),m("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",te(2,ni,e.item,t.getItemProp(e,"items")))}}function Si(o,a){if(o&1){let e=K();p(0,"p-tieredmenusub",27),E("itemClick",function(n){_(e);let i=s(4);return b(i.itemClick.emit(n))})("itemMouseEnter",function(n){_(e);let i=s(4);return b(i.onItemMouseEnter(n))}),d()}if(o&2){let e=s(2).$implicit,t=s(2);m("items",e.items)("itemTemplate",t.itemTemplate)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("visible",t.isItemActive(e)&&t.isItemGroup(e))("activeItemPath",t.activeItemPath())("focusedItemId",t.focusedItemId)("ariaLabelledBy",t.getItemId(e))("level",t.level+1)("pt",t.pt())("motionOptions",t.motionOptions)("unstyled",t.unstyled())}}function ki(o,a){if(o&1){let e=K();p(0,"li",9,1)(2,"div",10),E("click",function(n){_(e);let i=s().$implicit,r=s(2);return b(r.onItemClick(n,i))})("mouseenter",function(n){_(e);let i=s().$implicit,r=s(2);return b(r.onItemMouseEnter({$event:n,processedItem:i}))}),c(3,vi,3,2,"ng-container",11)(4,Ti,2,5,"ng-container",11),d(),c(5,Si,1,12,"p-tieredmenusub",12),d()}if(o&2){let e=s(),t=e.$implicit,n=e.index,i=s(2);u(i.cn(i.cx("item",ht(23,ei,t)),i.getItemProp(t,"styleClass"))),m("ngStyle",i.getItemProp(t,"style"))("pBind",i.getPTOptions(t,n,"item"))("pTooltip",i.getItemProp(t,"tooltip"))("tooltipOptions",i.getItemProp(t,"tooltipOptions"))("pTooltipUnstyled",i.unstyled()),g("id",i.getItemId(t))("data-p-highlight",i.isItemActive(t))("data-p-focused",i.isItemFocused(t))("data-p-disabled",i.isItemDisabled(t))("aria-label",i.getItemLabel(t))("aria-disabled",i.isItemDisabled(t)||void 0)("aria-haspopup",i.isItemGroup(t)&&!i.getItemProp(t,"to")?"menu":void 0)("aria-expanded",i.isItemGroup(t)?i.isItemActive(t):void 0)("aria-setsize",i.getAriaSetSize())("aria-posinset",i.getAriaPosInset(n)),l(2),u(i.cx("itemContent")),m("pBind",i.getPTOptions(t,n,"itemContent")),l(),m("ngIf",!i.itemTemplate),l(),m("ngIf",i.itemTemplate),l(),m("ngIf",i.isItemVisible(t)&&i.isItemGroup(t))}}function Li(o,a){if(o&1&&c(0,ii,1,6,"li",6)(1,ki,6,25,"li",7),o&2){let e=a.$implicit,t=s(2);m("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),l(),m("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}function Pi(o,a){if(o&1){let e=K();p(0,"ul",4,0),E("keydown",function(n){_(e);let i=s();return b(i.menuKeydown.emit(n))})("focus",function(n){_(e);let i=s();return b(i.menuFocus.emit(n))})("blur",function(n){_(e);let i=s();return b(i.menuBlur.emit(n))})("pMotionOnBeforeEnter",function(n){_(e);let i=s();return b(i.onBeforeEnter(n))})("pMotionOnAfterLeave",function(){_(e);let n=s();return b(n.onAfterLeave())}),c(2,Li,2,2,"ng-template",5),d()}if(o&2){let e=s();X(e.inlineStyles),u(e.root?e.cx("rootList"):e.cx("submenu")),m("id",e.menuId+"_list")("tabindex",e.tabindex)("pBind",e._ptm(e.root?"rootList":"submenu"))("pMotion",e.root?!0:e.visible)("pMotionDisabled",e.root)("pMotionAppear",!0)("pMotionName","p-anchored-overlay")("pMotionOptions",e.motionOptions),g("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy)("aria-activedescendant",e.focusedItemId)("aria-orientation","vertical"),l(2),m("ngForOf",e.items)}}var wi=["submenuicon"],Ei=["item"],Di=["rootmenu"],Bi=["container"];function Oi(o,a){if(o&1){let e=K();p(0,"div",3,0),E("click",function(n){_(e);let i=s();return b(i.onOverlayClick(n))})("pMotionOnBeforeEnter",function(n){_(e);let i=s();return b(i.onOverlayBeforeEnter(n))})("pMotionOnAfterEnter",function(){_(e);let n=s();return b(n.onOverlayAfterEnter())})("pMotionOnAfterLeave",function(){_(e);let n=s();return b(n.onOverlayAfterLeave())}),p(2,"p-tieredMenuSub",4,1),E("itemClick",function(n){_(e);let i=s();return b(i.onItemClick(n))})("menuFocus",function(n){_(e);let i=s();return b(i.onMenuFocus(n))})("menuBlur",function(n){_(e);let i=s();return b(i.onMenuBlur(n))})("menuKeydown",function(n){_(e);let i=s();return b(i.onKeyDown(n))})("itemMouseEnter",function(n){_(e);let i=s();return b(i.onItemMouseEnter(n))}),d()()}if(o&2){let e=s();u(e.cn(e.cx("root"),e.styleClass)),m("id",e.id)("ngStyle",e.style)("pBind",e.ptm("root"))("pMotion",e.visible||!e.popup)("pMotionName","p-anchored-overlay")("pMotionAppear",!0)("pMotionDisabled",!e.popup)("pMotionOptions",e.computedMotionOptions()),l(2),m("root",!0)("visible",!0)("items",e.processedItems)("itemTemplate",e.itemTemplate||e._itemTemplate)("menuId",e.id)("tabindex",e.disabled?-1:e.tabindex)("ariaLabel",e.ariaLabel)("ariaLabelledBy",e.ariaLabelledBy)("baseZIndex",e.baseZIndex)("autoZIndex",e.autoZIndex)("autoDisplay",e.autoDisplay)("popup",e.popup)("focusedItemId",e.focused?e.focusedItemId:void 0)("activeItemPath",e.activeItemPath())("pt",e.pt())("unstyled",e.unstyled())("motionOptions",e.computedMotionOptions())}}var Vi={submenu:({instance:o,processedItem:a})=>({display:o.isItemActive(a)?"flex":"none"})},Ai={root:({instance:o})=>["p-tieredmenu p-component",{"p-tieredmenu-overlay":o.popup,"p-tieredmenu-mobile":o.queryMatches()}],start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:({instance:o,processedItem:a})=>["p-tieredmenu-item",{"p-tieredmenu-item-active":o.isItemActive(a),"p-focus":o.isItemFocused(a),"p-disabled":o.isItemDisabled(a)}],itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",itemBadge:"p-menuitem-badge",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},st=(()=>{class o extends Re{name="tieredmenu";style=zt;classes=Ai;inlineStyles=Vi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(o)))(n||o)}})();static \u0275prov=de({token:o,factory:o.\u0275fac})}return o})();var qt=new pe("TIEREDMENU_INSTANCE"),Zt=new pe("TIEREDMENUSUB_INSTANCE"),Fi=(()=>{class o extends ae{el;renderer;tieredMenu;get visible(){return this._visible}set visible(e){this._visible=e,(this._visible||this.root)&&this.render.set(!0)}items;itemTemplate;root=!1;autoDisplay;autoZIndex=!0;baseZIndex=0;popup;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath=De([]);motionOptions;tabindex=0;inlineStyles;itemClick=new M;itemMouseEnter=new M;menuFocus=new M;menuBlur=new M;menuKeydown=new M;sublistViewChild;render=k(!1);_componentStyle=I(st);bindDirectiveInstance=I(w,{self:!0});$pcTieredMenu=I(qt,{optional:!0,skipSelf:!0})??void 0;$pcTieredMenuSub=I(Zt,{optional:!0,skipSelf:!0})??void 0;_visible=!1;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}constructor(e,t,n){super(),this.el=e,this.renderer=t,this.tieredMenu=n}positionSubmenu(e){U(this.tieredMenu.platformId)&&e&&Tt(e,this.level)}getItemProp(e,t,n=null){return e&&e.item?re(e.item[t],n):void 0}getItemId(e){return e.item?.id??`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemLabel(e){return this.getItemProp(e,"label")}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>{let n=this.isItemVisible(t),i=n&&this.getItemProp(t,"separator");return!n||i}).length+1}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath()?this.activeItemPath().some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return L(e.items)}_ptm(e,t){return this.$pcTieredMenu?this.$pcTieredMenu.ptm(e,t):this.ptm(e,t)}getPTOptions(e,t,n){return this._ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}onBeforeEnter(e){this.positionSubmenu(e.element)}onAfterLeave(){this.render.set(!1)}static \u0275fac=function(t){return new(t||o)(D(Se),D(Le),D(Me(()=>Ge)))};static \u0275cmp=B({type:o,selectors:[["p-tieredMenuSub"],["p-tieredmenusub"]],viewQuery:function(t,n){if(t&1&&be(Yn,5),t&2){let i;C(i=T())&&(n.sublistViewChild=i.first)}},inputs:{visible:"visible",items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",v],autoDisplay:[2,"autoDisplay","autoDisplay",v],autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",N],popup:[2,"popup","popup",v],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",N],focusedItemId:"focusedItemId",activeItemPath:[1,"activeItemPath"],motionOptions:"motionOptions",tabindex:[2,"tabindex","tabindex",N],inlineStyles:"inlineStyles"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[Ie([{provide:Zt,useExisting:Me(()=>o)},{provide:ye,useExisting:Me(()=>o)}]),_e([w]),j],decls:1,vars:1,consts:[["sublist",""],["listItem",""],["htmlLabel",""],["role","menu",3,"class","id","tabindex","pBind","style","pMotion","pMotionDisabled","pMotionAppear","pMotionName","pMotionOptions"],["role","menu",3,"keydown","focus","blur","pMotionOnBeforeEnter","pMotionOnAfterLeave","id","tabindex","pBind","pMotion","pMotionDisabled","pMotionAppear","pMotionName","pMotionOptions"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem",3,"ngStyle","class","pBind","pTooltip","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem",3,"ngStyle","pBind","pTooltip","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"items","itemTemplate","autoDisplay","menuId","visible","activeItemPath","focusedItemId","ariaLabelledBy","level","pt","motionOptions","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","items","itemTemplate","autoDisplay","menuId","visible","activeItemPath","focusedItemId","ariaLabelledBy","level","pt","motionOptions","unstyled"]],template:function(t,n){t&1&&We(0,Pi,3,17,"ul",3),t&2&&Xe(n.render()?0:-1)},dependencies:[o,ne,Be,fe,xe,ge,ie,Oe,Ve,Ze,ue,qe,w,ze,z,me,tt,et],encapsulation:2})}return o})(),Ge=(()=>{class o extends ae{overlayService;componentName="TieredMenu";set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}popup;style;styleClass;breakpoint="960px";autoZIndex=!0;baseZIndex=0;autoDisplay=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";id;ariaLabel;ariaLabelledBy;disabled=!1;tabindex=0;appendTo=De(void 0);motionOptions=De(void 0);computedMotionOptions=Ye(()=>Y(Y({},this.ptm("motion")),this.motionOptions()));onShow=new M;onHide=new M;rootmenu;containerViewChild;submenuIconTemplate;itemTemplate;templates;$appendTo=Ye(()=>this.appendTo()||this.config.overlayAppendTo());render=k(!1);container;outsideClickListener;resizeListener;scrollHandler;target;relatedTarget;visible;dirty=!1;focused=!1;activeItemPath=k([]);number=k(0);focusedItemInfo=k({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=I(st);bindDirectiveInstance=I(w,{self:!0});matchMediaListener;query;queryMatches=k(!1);_submenuIconTemplate;_itemTemplate;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item?.id?e.item.id:e.index!==-1?`${this.id}${L(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e){super(),this.overlayService=e,Te(()=>{let t=this.activeItemPath();L(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onInit(){this.bindMatchMediaListener(),this.id=this.id||Ne("pn_id_")}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}bindMatchMediaListener(){if(U(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches)},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,t=0,n={},i=""){let r=[];return e&&e.forEach((y,x)=>{let f=(i!==""?i+"_":"")+x,S={item:y,index:x,level:t,key:f,parent:n,parentKey:i};S.items=this.createProcessedItems(y.items,t+1,S,f),r.push(S)}),r}getItemProp(e,t){return e?re(e[t]):void 0}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isProcessedItemGroup(e){return e&&L(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&L(e.items)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}onItemClick(e){let{originalEvent:t,processedItem:n}=e,i=this.isProcessedItemGroup(n),r=G(n.parent);if(this.isSelected(n)){let{index:x,key:f,level:S,parentKey:Q,item:Z}=n;this.activeItemPath.set(this.activeItemPath().filter(A=>f!==A.key&&f.startsWith(A.key))),this.focusedItemInfo.set({index:x,level:S,parentKey:Q,item:Z}),this.dirty=!0,P(this.rootmenu?.sublistViewChild?.nativeElement)}else if(i)this.onItemChange(e);else{let x=r?n:this.activeItemPath().find(f=>f.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,x?.index??-1),P(this.rootmenu?.sublistViewChild?.nativeElement)}}onItemMouseEnter(e){se()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Ae(e.key)&&this.searchItems(e,e.key);break}}onArrowDownKey(e){let t=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index],n=this.isProccessedItemGroup(t),i=t?.item;n&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:i}),this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}onArrowUpKey(e){if(e.altKey){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(e,!0),e.preventDefault()}else{let t=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()}}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(!t){e.preventDefault();return}let n=this.activeItemPath().find(y=>y.key===t.parentKey);G(t.parent)||(this.focusedItemInfo.set({index:-1,parentKey:n?n.parentKey:"",item:t.item}),this.searchValue="",this.onArrowDownKey(e));let r=this.activeItemPath().filter(y=>y.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),e.preventDefault()}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=H(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(H(t,'[data-pc-section="itemlink"]')||H(t,"a,button"));if(n?n.click():t&&t.click(),!this.popup){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&(this.focusedItemInfo().index=this.findFirstFocusedItemIndex())}}e.preventDefault()}onItemChange(e,t){let{processedItem:n,isFocus:i}=e;if(G(n))return;let{index:r,key:y,level:x,parentKey:f,items:S,item:Q}=n,Z=L(S),A=this.activeItemPath().filter(ce=>ce.parentKey!==f&&ce.parentKey!==y);Z&&A.push(n),this.focusedItemInfo.set({index:r,level:x,parentKey:f,item:Q}),Z&&(this.dirty=!0),i&&P(this.rootmenu?.sublistViewChild?.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(A)}onMenuFocus(e){this.focused=!0,this.focusedItemInfo().index===-1&&this.popup}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1}onOverlayBeforeEnter(e){this.popup&&(this.container=e.element,Mt(this.container,{position:"absolute"}),this.moveOnTop(),this.onShow.emit({}),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.alignOverlay())}onOverlayAfterEnter(){this.popup&&(this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.scrollInView()),P(this.rootmenu?.sublistViewChild?.nativeElement)}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.render.set(!1),this.onHide.emit({})}relativeAlign=!1;alignOverlay(){this.container&&this.target&&(this.relativeAlign?Ct(this.container,this.target):vt(this.container,this.target),Fe(this.target)>Fe(this.container)&&(this.container.style.minWidth=Fe(this.target)+"px"))}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?Ke(this.document.body,this.container):Ke(this.$appendTo(),this.container))}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&Ke(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&le.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(e,t){this.popup&&(this.onHide.emit({}),this.visible=!1),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),t&&P(this.relatedTarget||this.target||this.rootmenu?.sublistViewChild?.nativeElement),this.dirty=!1}toggle(e){this.visible?this.hide(e,!0):this.show(e)}show(e,t){this.popup&&(this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null,this.relativeAlign=e?.relativeAlign||null),this.render.set(!0),this.focusedItemInfo.set({index:-1,level:0,parentKey:""}),t&&P(this.rootmenu?.sublistViewChild?.nativeElement),this.cd.markForCheck()}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,i=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(i=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return oe(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?oe(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}changeFocusedItemIndex(e,t){if(this.focusedItemInfo().index!==t){let n=this.focusedItemInfo();this.focusedItemInfo.set(ve(Y({},n),{item:this.visibleItems[t].item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=H(this.rootmenu?.el?.nativeElement,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new wt(this.target,e=>{this.visible&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}bindResizeListener(){U(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{se()||this.hide(e,!0)})))}bindOutsideClickListener(){U(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.containerViewChild&&!this.containerViewChild.nativeElement.contains(e.target),n=this.popup?!(this.target&&(this.target===e.target||this.target.contains(e.target))):!0;t&&n&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onOverlayHide(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.cd.destroyed||(this.target=null),this.container&&this.autoZIndex&&le.clear(this.container)}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.restoreOverlayAppend(),this.onOverlayHide()),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||o)(D(St))};static \u0275cmp=B({type:o,selectors:[["p-tieredMenu"],["p-tieredmenu"],["p-tiered-menu"]],contentQueries:function(t,n,i){if(t&1&&we(i,wi,4)(i,Ei,4)(i,$e,4),t&2){let r;C(r=T())&&(n.submenuIconTemplate=r.first),C(r=T())&&(n.itemTemplate=r.first),C(r=T())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&be(Di,5)(Bi,5),t&2){let i;C(i=T())&&(n.rootmenu=i.first),C(i=T())&&(n.containerViewChild=i.first)}},inputs:{model:"model",popup:[2,"popup","popup",v],style:"style",styleClass:"styleClass",breakpoint:"breakpoint",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",N],autoDisplay:[2,"autoDisplay","autoDisplay",v],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",v],tabindex:[2,"tabindex","tabindex",N],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide"},features:[Ie([st,{provide:qt,useExisting:o},{provide:ye,useExisting:o}]),_e([w]),j],decls:1,vars:1,consts:[["container",""],["rootmenu",""],[3,"id","class","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"click","pMotionOnBeforeEnter","pMotionOnAfterEnter","pMotionOnAfterLeave","id","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","root","visible","items","itemTemplate","menuId","tabindex","ariaLabel","ariaLabelledBy","baseZIndex","autoZIndex","autoDisplay","popup","focusedItemId","activeItemPath","pt","unstyled","motionOptions"]],template:function(t,n){t&1&&We(0,Oi,4,27,"div",2),t&2&&Xe(n.render()||!n.popup?0:-1)},dependencies:[ne,ge,Fi,ie,ue,w,z,me,tt,et],encapsulation:2,changeDetection:0})}return o})(),Ut=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Pe({type:o});static \u0275inj=Ce({imports:[Ge,z,z]})}return o})();function $i(o,a){o&1&&(p(0,"div",4),h(1,"i",5),p(2,"span",6),$(3),It(4,"translate"),d()()),o&2&&(l(3),J(ft(4,1,"Exchange App")))}function Ri(o,a){if(o&1){let e=K();p(0,"div",7)(1,"p-button",8),E("onClick",function(n){_(e);let i=q(3);return b(i.toggle(n))}),d(),h(2,"p-tieredmenu",9,2),d()}if(o&2){let e=s();l(),m("label",e.username()),l(),m("model",e.userMenuItems)("popup",!0)}}var je=class o{translate=I(kt);authService=I(Pt);router=I(yt);themeService=I(At);translationService=I(Ft);logger=I(He);selectedLang="en";items;userMenuItems=[];username=k("");isDarkMode=k(!1);themeSubscription;ngOnInit(){this.logger.trace("Navbar component initialized."),this.username.set(this.authService.getUsernameFromToken()),this.selectedLang=this.translationService.currentLang(),this.themeSubscription=this.themeService.theme$.subscribe(a=>{this.logger.debug(`Navbar observed theme change to: '${a}'. Updating UI state.`),this.isDarkMode.set(a==="dark"),this.updateMenu()}),this.items=this.buildMainItems(),this.updateMenu()}buildMainItems(){return[{label:this.translate.instant("Dashboard"),icon:"pi pi-home",routerLink:"/dashboard"},{label:this.translate.instant("History"),icon:"pi pi-history",routerLink:"/history"}]}updateMenu(){this.userMenuItems=[{label:this.translate.instant("Change language"),icon:"pi pi-globe",items:[{label:this.translate.instant("English"),icon:"icon-en",command:()=>this.switch_language("en")},{label:this.translate.instant("Czech"),icon:"icon-cz",command:()=>this.switch_language("cs")}]},{label:this.isDarkMode()?this.translate.instant("Light mode"):this.translate.instant("Dark mode"),icon:this.isDarkMode()?"pi pi-sun":"pi pi-moon",command:()=>this.toggleTheme()},{separator:!0},{label:this.translate.instant("Logout"),icon:"pi pi-sign-out",command:()=>this.logout()}]}switch_language(a){this.logger.info(`User initiated language switch to: '${a}' via Navbar.`),this.translationService.setLanguage(a),this.selectedLang=this.translationService.currentLang(),this.items=this.buildMainItems(),this.updateMenu()}toggleTheme(){let a=this.isDarkMode()?"light":"dark";this.logger.info(`User toggled theme to: '${a}' via Navbar.`),this.themeService.setTheme(a)}logout(){this.logger.info("User clicked logout from Navbar."),this.authService.logout(),this.router.navigate(["/login"])}ngOnDestroy(){this.logger.trace("Navbar component destroyed. Unsubscribing from observables."),this.themeSubscription&&this.themeSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=B({type:o,selectors:[["app-navbar"]],decls:5,vars:1,consts:[["start",""],["end",""],["userMenu",""],[1,"w-full",3,"model"],[1,"flex","items-center","gap-2","pr-4"],[1,"pi","pi-chart-line","text-primary","text-2xl"],[1,"font-bold","text-xl","text-primary"],[1,"flex","items-center","gap-2"],["icon","pi pi-user","variant","text",3,"onClick","label"],[3,"model","popup"]],template:function(e,t){e&1&&(p(0,"p-menubar",3),c(1,$i,5,3,"ng-template",null,0,R)(3,Ri,4,3,"ng-template",null,1,R),d()),e&2&&m("model",t.items)},dependencies:[Ht,rt,Vt,Ot,Ut,Ge,Lt],encapsulation:2})};var Gt=class o{logger=I(He);ngOnInit(){this.logger.trace("Main layout wrapper initialized.")}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=B({type:o,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"p-4"]],template:function(e,t){e&1&&(h(0,"app-navbar"),p(1,"div",0),h(2,"router-outlet"),d())},dependencies:[je,xt],encapsulation:2})};export{Gt as Layout};
