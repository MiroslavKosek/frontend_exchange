import{b as Y,c as X,d as C,f as Me,j as St,l as Tt,n as Nt,p as xe,q as ae,s as we,v as kt}from"./chunk-BNRJNGZC.js";import{$c as xt,Ab as yt,Cc as Vt,Da as He,Ea as d,Gd as se,I as fe,Ib as F,Ja as W,Jb as _t,K as ne,Ka as R,Kb as Z,L as j,La as f,M as B,Ma as q,Na as u,Nc as Mt,O as D,Oa as A,Q as v,Qa as ct,Va as _,Vb as bt,Vd as Ot,W as w,Wa as ut,X as E,Xa as ht,Y as me,Ya as O,Yb as H,Yd as Ve,Za as S,Zb as g,Zd as Q,a as c,ab as h,ae as K,b as x,ba as p,bb as T,bc as s,bd as wt,ca as lt,cb as L,cc as Ct,db as ie,ec as b,g as ot,ga as V,gb as pt,ha as je,ia as ge,ic as Ge,id as Et,j as rt,ja as m,jb as z,kb as ve,kd as At,la as Le,ld as It,mb as I,md as Ft,nb as l,nd as ze,o as st,ob as ye,pb as oe,qb as _e,qc as Dt,rb as ft,sb as N,sc as be,sd as Ue,ta as dt,tb as k,u as at,ub as mt,uc as Ce,wa as y,wb as re,xb as gt,xc as De,yb as M,zb as vt}from"./chunk-MEJDI5XR.js";var $t=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(d(He),d(Le))};static \u0275dir=f({type:t})}return t})(),In=(()=>{class t extends $t{static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=f({type:t,features:[u]})}return t})(),Ke=new D("");var Fn={provide:Ke,useExisting:ne(()=>Wt),multi:!0};function On(){let t=Ge()?Ge().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Sn=new D(""),Wt=(()=>{class t extends $t{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!On())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(d(He),d(Le),d(Sn,8))};static \u0275dir=f({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&I("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[F([Fn]),u]})}return t})();function Ye(t){return t==null||Xe(t)===0}function Xe(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Je=new D(""),et=new D(""),Tn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Bt=class{static min(n){return Nn(n)}static max(n){return kn(n)}static required(n){return Bn(n)}static requiredTrue(n){return Rn(n)}static email(n){return Pn(n)}static minLength(n){return jn(n)}static maxLength(n){return Ln(n)}static pattern(n){return Hn(n)}static nullValidator(n){return qt()}static compose(n){return Jt(n)}static composeAsync(n){return tn(n)}};function Nn(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function kn(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Bn(t){return Ye(t.value)?{required:!0}:null}function Rn(t){return t.value===!0?null:{required:!0}}function Pn(t){return Ye(t.value)||Tn.test(t.value)?null:{email:!0}}function jn(t){return n=>{let e=n.value?.length??Xe(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Ln(t){return n=>{let e=n.value?.length??Xe(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Hn(t){if(!t)return qt;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Ye(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function qt(t){return null}function Zt(t){return t!=null}function Qt(t){return ct(t)?rt(t):t}function Kt(t){let n={};return t.forEach(e=>{n=e!=null?c(c({},n),e):n}),Object.keys(n).length===0?null:n}function Yt(t,n){return n.map(e=>e(t))}function Gn(t){return!t.validate}function Xt(t){return t.map(n=>Gn(n)?n:e=>n.validate(e))}function Jt(t){if(!t)return null;let n=t.filter(Zt);return n.length==0?null:function(e){return Kt(Yt(e,n))}}function en(t){return t!=null?Jt(Xt(t)):null}function tn(t){if(!t)return null;let n=t.filter(Zt);return n.length==0?null:function(e){let i=Yt(e,n).map(Qt);return at(i).pipe(st(Kt))}}function nn(t){return t!=null?tn(Xt(t)):null}function Rt(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function on(t){return t._rawValidators}function rn(t){return t._rawAsyncValidators}function $e(t){return t?Array.isArray(t)?t:[t]:[]}function Ae(t,n){return Array.isArray(t)?t.includes(n):t===n}function Pt(t,n){let e=$e(n);return $e(t).forEach(o=>{Ae(e,o)||e.push(o)}),e}function jt(t,n){return $e(n).filter(e=>!Ae(t,e))}var Ie=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=en(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=nn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},U=class extends Ie{name;get formDirective(){return null}get path(){return null}},P=class extends Ie{_parent=null;name=null;valueAccessor=null},Fe=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ho=(()=>{class t extends Fe{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(d(P,2))};static \u0275dir=f({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[u]})}return t})(),po=(()=>{class t extends Fe{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(d(U,10))};static \u0275dir=f({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[u]})}return t})();var le="VALID",Ee="INVALID",J="PENDING",de="DISABLED",G=class{},Oe=class extends G{value;source;constructor(n,e){super(),this.value=n,this.source=e}},ce=class extends G{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ue=class extends G{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ee=class extends G{status;source;constructor(n,e){super(),this.status=n,this.source=e}},We=class extends G{source;constructor(n){super(),this.source=n}},pe=class extends G{source;constructor(n){super(),this.source=n}};function tt(t){return(ke(t)?t.validators:t)||null}function zn(t){return Array.isArray(t)?en(t):t||null}function nt(t,n){return(ke(n)?n.asyncValidators:t)||null}function Un(t){return Array.isArray(t)?nn(t):t||null}function ke(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function sn(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new fe(1e3,"");if(!i[e])throw new fe(1001,"")}function an(t,n,e){t._forEachChild((i,o)=>{if(e[o]===void 0)throw new fe(1002,"")})}var te=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return H(this.statusReactive)}set status(n){H(()=>this.statusReactive.set(n))}_status=g(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===le}get invalid(){return this.status===Ee}get pending(){return this.status==J}get disabled(){return this.status===de}get enabled(){return this.status!==de}errors;get pristine(){return H(this.pristineReactive)}set pristine(n){H(()=>this.pristineReactive.set(n))}_pristine=g(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return H(this.touchedReactive)}set touched(n){H(()=>this.touchedReactive.set(n))}_touched=g(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new ot;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Pt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Pt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(jt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(jt(n,this._rawAsyncValidators))}hasValidator(n){return Ae(this._rawValidators,n)}hasAsyncValidator(n){return Ae(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(x(c({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ue(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new ue(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(x(c({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ce(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new ce(!0,i))}markAsPending(n={}){this.status=J;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ee(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(x(c({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=de,this.errors=null,this._forEachChild(o=>{o.disable(x(c({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Oe(this.value,i)),this._events.next(new ee(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(x(c({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=le,this._forEachChild(i=>{i.enable(x(c({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(x(c({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===le||this.status===J)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Oe(this.value,e)),this._events.next(new ee(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(x(c({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?de:le}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=J,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Qt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ee(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new p,this.statusChanges=new p}_calculateStatus(){return this._allControlsDisabled()?de:this.errors?Ee:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(J)?J:this._anyControlsHaveStatus(Ee)?Ee:le}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),o&&this._events.next(new ce(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ue(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){ke(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=zn(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Un(this._rawAsyncValidators)}},Se=class extends te{constructor(n,e,i){super(tt(e),nt(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){an(this,!0,n),Object.keys(n).forEach(i=>{sn(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,x(c({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new pe(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((o,r)=>{i=e(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var qe=class extends Se{};var Be=new D("",{factory:()=>Re}),Re="always";function ln(t,n){return[...n.path,t]}function Ze(t,n,e=Re){it(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),Wn(t,n),Zn(t,n),qn(t,n),$n(t,n)}function Lt(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Ne(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Te(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function $n(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function it(t,n){let e=on(t);n.validator!==null?t.setValidators(Rt(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=rn(t);n.asyncValidator!==null?t.setAsyncValidators(Rt(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let o=()=>t.updateValueAndValidity();Te(n._rawValidators,o),Te(n._rawAsyncValidators,o)}function Ne(t,n){let e=!1;if(t!==null){if(n.validator!==null){let o=on(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(n.asyncValidator!==null){let o=rn(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let i=()=>{};return Te(n._rawValidators,i),Te(n._rawAsyncValidators,i),e}function Wn(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&dn(t,n)})}function qn(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&dn(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function dn(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Zn(t,n){let e=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Qn(t,n){t==null,it(t,n)}function Kn(t,n){return Ne(t,n)}function cn(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Yn(t){return Object.getPrototypeOf(t.constructor)===In}function Xn(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function un(t,n){if(!n)return null;Array.isArray(n);let e,i,o;return n.forEach(r=>{r.constructor===Wt?e=r:Yn(r)?i=r:o=r}),o||i||e||null}function Jn(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Ht(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Gt(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var he=class extends te{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(tt(e),nt(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ke(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Gt(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new pe(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ht(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ht(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Gt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var ei=t=>t instanceof he;var ti={provide:P,useExisting:ne(()=>ni)},zt=Promise.resolve(),ni=(()=>{class t extends P{_changeDetectorRef;callSetDisabledState;control=new he;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new p;constructor(e,i,o,r,a,An){super(),this._changeDetectorRef=a,this.callSetDisabledState=An,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=un(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),cn(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ze(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){zt.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,o=i!==0&&b(i);zt.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?ln(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(d(U,9),d(Je,10),d(et,10),d(Ke,10),d(Ct,8),d(Be,8))};static \u0275dir=f({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[F([ti]),u,ge]})}return t})();var mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=f({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Qe=class extends te{constructor(n,e,i){super(tt(e),nt(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){an(this,!1,n),n.forEach((i,o)=>{sn(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,o)=>{i.reset(n[o],x(c({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new pe(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var ii=(()=>{class t extends U{callSetDisabledState;get submitted(){return H(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=g(()=>this._submittedReactive());_submittedReactive=V(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ne(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Ze(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Lt(e.control||null,e,!1),Jn(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Xn(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new We(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,o=this.form.get(e.path);i!==o&&(Lt(i||null,e),ei(o)&&(Ze(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);Qn(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&Kn(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){it(this.form,this),this._oldForm&&Ne(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(d(Je,10),d(et,10),d(Be,8))};static \u0275dir=f({type:t,features:[u,ge]})}return t})();var hn=new D("");var oi={provide:P,useExisting:ne(()=>ri)},ri=(()=>{class t extends P{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new p;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,o,r,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=un(this,r)}ngOnChanges(e){this._added||this._setUpControl(),cn(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ln(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||t)(d(U,13),d(Je,10),d(et,10),d(Ke,10),d(hn,8))};static \u0275dir=f({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[F([oi]),u,ge]})}return t})();var si={provide:U,useExisting:ne(()=>ai)},ai=(()=>{class t extends ii{form=null;ngSubmit=new p;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=f({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&I("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[F([si]),u]})}return t})();var pn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=B({})}return t})();function Ut(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var go=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let o=this._reduceControls(e),r={};return Ut(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new Se(o,r)}record(e,i=null){let o=this._reduceControls(e);return new qe(o,i)}control(e,i,o){let r={};return this.useNonNullable?(Ut(i)?r=i:(r.validators=i,r.asyncValidators=o),new he(e,x(c({},r),{nonNullable:!0}))):new he(e,i,o)}array(e,i,o){let r=e.map(a=>this._createControl(a));return new Qe(r,i,o)}_reduceControls(e){let i={};return Object.keys(e).forEach(o=>{i[o]=this._createControl(e[o])}),i}_createControl(e){if(e instanceof he)return e;if(e instanceof te)return e;if(Array.isArray(e)){let i=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(i,o,r)}else return this.control(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vo=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Be,useValue:e.callSetDisabledState??Re}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=B({imports:[pn]})}return t})(),yo=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:hn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Be,useValue:e.callSetDisabledState??Re}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=B({imports:[pn]})}return t})();var Pe=(()=>{class t extends X{modelValue=V(void 0);$filled=g(()=>Mt(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=f({type:t,features:[u]})}return t})();var fn=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var li=`
    ${fn}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,di={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},mn=(()=>{class t extends K{name="inputtext";style=li;classes=di;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var gn=new D("INPUTTEXT_INSTANCE"),Lo=(()=>{class t extends Pe{componentName="InputText";hostName="";ptInputText=s();pInputTextPT=s();pInputTextUnstyled=s();bindDirectiveInstance=v(C,{self:!0});$pcInputText=v(gn,{optional:!0,skipSelf:!0})??void 0;ngControl=v(P,{optional:!0,self:!0});pcFluid=v(Me,{optional:!0,host:!0,skipSelf:!0});pSize;variant=s();fluid=s(void 0,{transform:b});invalid=s(void 0,{transform:b});$variant=g(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=v(mn);constructor(){super(),je(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),je(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=f({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,o){i&1&&I("input",function(){return o.onInput()}),i&2&&(_("data-p",o.dataP),M(o.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[F([mn,{provide:gn,useExisting:t},{provide:Y,useExisting:t}]),q([C]),u]})}return t})(),Ho=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=B({})}return t})();var ci=["data-p-icon","times"],yn=(()=>{class t extends Tt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=W({type:t,selectors:[["","data-p-icon","times"]],features:[u],attrs:ci,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(me(),pt(0,"path",0))},encapsulation:2})}return t})();var _n=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var hi=["container"],pi=["icon"],fi=["closeicon"],mi=["*"],gi=t=>({closeCallback:t});function vi(t,n){t&1&&z(0)}function yi(t,n){if(t&1&&A(0,vi,1,0,"ng-container",4),t&2){let e=l();h("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function _i(t,n){if(t&1&&ie(0,"i",1),t&2){let e=l();M(e.cn(e.cx("icon"),e.icon)),h("pBind",e.ptm("icon")),_("data-p",e.dataP)}}function bi(t,n){t&1&&z(0)}function Ci(t,n){if(t&1&&A(0,bi,1,0,"ng-container",5),t&2){let e=l();h("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",Z(2,gi,e.closeCallback))}}function Di(t,n){if(t&1&&ie(0,"span",9),t&2){let e=l(3);h("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,dt),_("data-p",e.dataP)}}function Vi(t,n){if(t&1&&(T(0,"div"),A(1,Di,1,4,"span",8),L()),t&2){let e=l(2);y(),h("ngIf",!e.escape)}}function Mi(t,n){if(t&1&&(T(0,"span",7),vt(1),L()),t&2){let e=l(3);h("pBind",e.ptm("text"))("ngClass",e.cx("text")),_("data-p",e.dataP),y(),yt(e.text)}}function xi(t,n){if(t&1&&A(0,Mi,2,4,"span",10),t&2){let e=l(2);h("ngIf",e.escape&&e.text)}}function wi(t,n){if(t&1&&(A(0,Vi,2,1,"div",6)(1,xi,1,1,"ng-template",null,0,bt),T(3,"span",7),oe(4),L()),t&2){let e=mt(2),i=l();h("ngIf",!i.escape)("ngIfElse",e),y(3),h("pBind",i.ptm("text"))("ngClass",i.cx("text")),_("data-p",i.dataP)}}function Ei(t,n){if(t&1&&ie(0,"i",7),t&2){let e=l(2);M(e.cn(e.cx("closeIcon"),e.closeIcon)),h("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),_("data-p",e.dataP)}}function Ai(t,n){t&1&&z(0)}function Ii(t,n){if(t&1&&A(0,Ai,1,0,"ng-container",4),t&2){let e=l(2);h("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Fi(t,n){if(t&1&&(me(),ie(0,"svg",14)),t&2){let e=l(2);M(e.cx("closeIcon")),h("pBind",e.ptm("closeIcon")),_("data-p",e.dataP)}}function Oi(t,n){if(t&1){let e=ve();T(0,"button",11),I("click",function(o){w(e);let r=l();return E(r.close(o))}),O(1,Ei,1,5,"i",12),O(2,Ii,1,1,"ng-container"),O(3,Fi,1,4,":svg:svg",13),L()}if(t&2){let e=l();M(e.cx("closeButton")),h("pBind",e.ptm("closeButton")),_("aria-label",e.closeAriaLabel)("data-p",e.dataP),y(),S(e.closeIcon?1:-1),y(),S(e.closeIconTemplate||e._closeIconTemplate?2:-1),y(),S(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Si={root:({instance:t})=>["p-message p-component p-message-"+t.severity,t.variant&&"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},bn=(()=>{class t extends K{name="message";style=_n;classes=Si;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Cn=new D("MESSAGE_INSTANCE"),Ti=(()=>{class t extends X{componentName="Message";_componentStyle=v(bn);bindDirectiveInstance=v(C,{self:!0});$pcMessage=v(Cn,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=s(void 0);computedMotionOptions=g(()=>c(c({},this.ptm("motion")),this.motionOptions()));onClose=new p;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=V(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275cmp=W({type:t,selectors:[["p-message"]],contentQueries:function(i,o,r){if(i&1&&_e(r,hi,4)(r,pi,4)(r,fi,4)(r,Ve,4),i&2){let a;N(a=k())&&(o.containerTemplate=a.first),N(a=k())&&(o.iconTemplate=a.first),N(a=k())&&(o.closeIconTemplate=a.first),N(a=k())&&(o.templates=a)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(i,o){i&1&&(ut(function(){return"p-message-enter-active"}),ht(function(){return"p-message-leave-active"})),i&2&&(_("data-p",o.dataP),M(o.cn(o.cx("root"),o.styleClass)),re("p-message-leave-active",!o.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",b],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",b],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[F([bn,{provide:Cn,useExisting:t},{provide:Y,useExisting:t}]),q([C]),u],ngContentSelectors:mi,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(i,o){i&1&&(ye(),T(0,"div",1)(1,"div",1),O(2,yi,1,1,"ng-container"),O(3,_i,1,4,"i",2),O(4,Ci,1,4,"ng-container")(5,wi,5,5),O(6,Oi,4,8,"button",3),L()()),i&2&&(M(o.cx("contentWrapper")),h("pBind",o.ptm("contentWrapper")),_("data-p",o.dataP),y(),M(o.cx("content")),h("pBind",o.ptm("content")),_("data-p",o.dataP),y(),S(o.iconTemplate||o._iconTemplate?2:-1),y(),S(o.icon?3:-1),y(),S(o.containerTemplate||o._containerTemplate?4:5),y(2),S(o.closable?6:-1))},dependencies:[De,Dt,be,Ce,yn,kt,Q,C,xe],encapsulation:2,changeDetection:0})}return t})(),ur=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=B({imports:[Ti,Q,Q]})}return t})();var Dn=(()=>{class t extends Pe{required=s(void 0,{transform:b});invalid=s(void 0,{transform:b});disabled=s(void 0,{transform:b});name=s();_disabled=V(!1);$disabled=g(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,i){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=f({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[u]})}return t})();var Dr=(()=>{class t extends Dn{pcFluid=v(Me,{optional:!0,host:!0,skipSelf:!0});fluid=s(void 0,{transform:b});variant=s();size=s();inputSize=s();pattern=s();min=s();max=s();step=s();minlength=s();maxlength=s();$variant=g(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275dir=f({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[u]})}return t})();var Vn=["content"],Ni=["overlay"],Mn=["*","*"],ki=()=>({mode:null}),En=t=>({$implicit:t}),Bi=t=>({mode:t});function Ri(t,n){t&1&&z(0)}function Pi(t,n){if(t&1&&(oe(0),A(1,Ri,1,0,"ng-container",3)),t&2){let e=l();y(),h("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Z(3,En,_t(2,ki)))}}function ji(t,n){t&1&&z(0)}function Li(t,n){if(t&1){let e=ve();T(0,"div",5,0),I("click",function(){w(e);let o=l(2);return E(o.onOverlayClick())}),T(2,"p-motion",6),I("onBeforeEnter",function(o){w(e);let r=l(2);return E(r.onOverlayBeforeEnter(o))})("onEnter",function(o){w(e);let r=l(2);return E(r.onOverlayEnter(o))})("onAfterEnter",function(o){w(e);let r=l(2);return E(r.onOverlayAfterEnter(o))})("onBeforeLeave",function(o){w(e);let r=l(2);return E(r.onOverlayBeforeLeave(o))})("onLeave",function(o){w(e);let r=l(2);return E(r.onOverlayLeave(o))})("onAfterLeave",function(o){w(e);let r=l(2);return E(r.onOverlayAfterLeave(o))}),T(3,"div",5,1),I("click",function(o){w(e);let r=l(2);return E(r.onOverlayContentClick(o))}),oe(5,1),A(6,ji,1,0,"ng-container",3),L()()()}if(t&2){let e=l(2);gt(e.sx("root")),M(e.cn(e.cx("root"),e.styleClass)),h("pBind",e.ptm("root")),y(2),h("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),y(),M(e.cn(e.cx("content"),e.contentStyleClass)),h("pBind",e.ptm("content")),y(3),h("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Z(15,En,Z(13,Bi,e.overlayMode)))}}function Hi(t,n){if(t&1&&A(0,Li,7,17,"div",4),t&2){let e=l();h("ngIf",e.modalVisible)}}var Gi={root:()=>({position:"absolute",top:"0"})},zi=`
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,Ui={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},xn=(()=>{class t extends K{name="overlay";style=zi;classes=Ui;inlineStyles=Gi;static \u0275fac=(()=>{let e;return function(o){return(e||(e=m(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),wn=new D("OVERLAY_INSTANCE"),Wr=(()=>{class t extends X{overlayService;zone;componentName="Overlay";$pcOverlay=v(wn,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return ae.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return ae.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return ae.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return ae.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=s(void 0);inline=s(!1);motionOptions=s(void 0);computedMotionOptions=g(()=>c(c({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new p;onBeforeShow=new p;onShow=new p;onBeforeHide=new p;onHide=new p;onAnimationStart=new p;onAnimationDone=new p;onBeforeEnter=new p;onEnter=new p;onAfterEnter=new p;onBeforeLeave=new p;onLeave=new p;onAfterLeave=new p;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=s();$appendTo=g(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=v(xn);bindDirectiveInstance=v(C,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(Vt(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return c(c({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return c(c({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Ft(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Ue(this.targetEl),this.modal&&xt(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Ue(this.targetEl),this.modal&&wt(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=V(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),we.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}setZIndex(){this.autoZIndex&&we.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?ze(this.document.body,this.overlayEl):ze(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=At(this.targetEl)+"px",this.$appendTo()==="self"?It(this.overlayEl,this.targetEl):Et(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new St(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let o=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&o}):o)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!se()}):!se())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!se()}):!se())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),we.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(i){return new(i||t)(d(Ot),d(lt))};static \u0275cmp=W({type:t,selectors:[["p-overlay"]],contentQueries:function(i,o,r){if(i&1&&_e(r,Vn,4)(r,Ve,4),i&2){let a;N(a=k())&&(o.contentTemplate=a.first),N(a=k())&&(o.templates=a)}},viewQuery:function(i,o){if(i&1&&ft(Ni,5)(Vn,5),i&2){let r;N(r=k())&&(o.overlayViewChild=r.first),N(r=k())&&(o.contentViewChild=r.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[F([xn,{provide:wn,useExisting:t},{provide:Y,useExisting:t}]),q([C]),u],ngContentSelectors:Mn,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(i,o){i&1&&(ye(Mn),O(0,Pi,2,5)(1,Hi,1,1,"div",2)),i&2&&S(o.inline()?0:1)},dependencies:[De,be,Ce,Q,C,xe,Nt],encapsulation:2,changeDetection:0})}return t})();export{Ke as a,Wt as b,Bt as c,P as d,ho as e,po as f,ni as g,mo as h,ri as i,ai as j,go as k,vo as l,yo as m,Lo as n,Ho as o,Dn as p,Dr as q,yn as r,Wr as s,Ti as t,ur as u};
