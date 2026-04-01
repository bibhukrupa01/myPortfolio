(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function e1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dx={exports:{}},yd={},Nx={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=Symbol.for("react.element"),t1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),r1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),a1=Symbol.for("react.forward_ref"),l1=Symbol.for("react.suspense"),u1=Symbol.for("react.memo"),c1=Symbol.for("react.lazy"),zg=Symbol.iterator;function f1(n){return n===null||typeof n!="object"?null:(n=zg&&n[zg]||n["@@iterator"],typeof n=="function"?n:null)}var Ix={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ux=Object.assign,Fx={};function fl(n,e,t){this.props=n,this.context=e,this.refs=Fx,this.updater=t||Ix}fl.prototype.isReactComponent={};fl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ox(){}Ox.prototype=fl.prototype;function l_(n,e,t){this.props=n,this.context=e,this.refs=Fx,this.updater=t||Ix}var u_=l_.prototype=new Ox;u_.constructor=l_;Ux(u_,fl.prototype);u_.isPureReactComponent=!0;var Bg=Array.isArray,kx=Object.prototype.hasOwnProperty,c_={current:null},zx={key:!0,ref:!0,__self:!0,__source:!0};function Bx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kx.call(e,i)&&!zx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xu,type:n,key:s,ref:o,props:r,_owner:c_.current}}function d1(n,e){return{$$typeof:Xu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function f_(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xu}function h1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Hg=/\/+/g;function qd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?h1(""+n.key):e.toString(36)}function of(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Xu:case t1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+qd(o,0):i,Bg(r)?(t="",n!=null&&(t=n.replace(Hg,"$&/")+"/"),of(r,e,t,"",function(u){return u})):r!=null&&(f_(r)&&(r=d1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+qd(s,a);o+=of(s,e,t,l,r)}else if(l=f1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+qd(s,a++),o+=of(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nc(n,e,t){if(n==null)return n;var i=[],r=0;return of(n,i,"","",function(s){return e.call(t,s,r++)}),i}function p1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},af={transition:null},m1={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:af,ReactCurrentOwner:c_};function Hx(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:nc,forEach:function(n,e,t){nc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return nc(n,function(){e++}),e},toArray:function(n){return nc(n,function(e){return e})||[]},only:function(n){if(!f_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=fl;rt.Fragment=n1;rt.Profiler=r1;rt.PureComponent=l_;rt.StrictMode=i1;rt.Suspense=l1;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;rt.act=Hx;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ux({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=c_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)kx.call(e,l)&&!zx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Xu,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:o1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:s1,_context:n},n.Consumer=n};rt.createElement=Bx;rt.createFactory=function(n){var e=Bx.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:a1,render:n}};rt.isValidElement=f_;rt.lazy=function(n){return{$$typeof:c1,_payload:{_status:-1,_result:n},_init:p1}};rt.memo=function(n,e){return{$$typeof:u1,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=af.transition;af.transition={};try{n()}finally{af.transition=e}};rt.unstable_act=Hx;rt.useCallback=function(n,e){return Xn.current.useCallback(n,e)};rt.useContext=function(n){return Xn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return Xn.current.useEffect(n,e)};rt.useId=function(){return Xn.current.useId()};rt.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return Xn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};rt.useRef=function(n){return Xn.current.useRef(n)};rt.useState=function(n){return Xn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return Xn.current.useTransition()};rt.version="18.3.1";Nx.exports=rt;var Yt=Nx.exports;const _1=e1(Yt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=Yt,v1=Symbol.for("react.element"),x1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,S1=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M1={key:!0,ref:!0,__self:!0,__source:!0};function Vx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)y1.call(e,i)&&!M1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:v1,type:n,key:s,ref:o,props:r,_owner:S1.current}}yd.Fragment=x1;yd.jsx=Vx;yd.jsxs=Vx;Dx.exports=yd;var k=Dx.exports,up={},Gx={exports:{}},Ri={},Wx={exports:{}},Xx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,K){var P=N.length;N.push(K);e:for(;0<P;){var re=P-1>>>1,xe=N[re];if(0<r(xe,K))N[re]=K,N[P]=xe,P=re;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],P=N.pop();if(P!==K){N[0]=P;e:for(var re=0,xe=N.length,Xe=xe>>>1;re<Xe;){var Y=2*(re+1)-1,ne=N[Y],fe=Y+1,ce=N[fe];if(0>r(ne,P))fe<xe&&0>r(ce,ne)?(N[re]=ce,N[fe]=P,re=fe):(N[re]=ne,N[Y]=P,re=Y);else if(fe<xe&&0>r(ce,P))N[re]=ce,N[fe]=P,re=fe;else break e}}return K}function r(N,K){var P=N.sortIndex-K.sortIndex;return P!==0?P:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=N)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function y(N){if(_=!1,x(N),!g)if(t(l)!==null)g=!0,W(C);else{var K=t(u);K!==null&&G(y,K.startTime-N)}}function C(N,K){g=!1,_&&(_=!1,h(R),R=-1),p=!0;var P=f;try{for(x(K),d=t(l);d!==null&&(!(d.expirationTime>K)||N&&!L());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var xe=re(d.expirationTime<=K);K=n.unstable_now(),typeof xe=="function"?d.callback=xe:d===t(l)&&i(l),x(K)}else i(l);d=t(l)}if(d!==null)var Xe=!0;else{var Y=t(u);Y!==null&&G(y,Y.startTime-K),Xe=!1}return Xe}finally{d=null,f=P,p=!1}}var A=!1,E=null,R=-1,M=5,S=-1;function L(){return!(n.unstable_now()-S<M)}function U(){if(E!==null){var N=n.unstable_now();S=N;var K=!0;try{K=E(!0,N)}finally{K?z():(A=!1,E=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(U)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=U,z=function(){$.postMessage(null)}}else z=function(){m(U,0)};function W(N){E=N,A||(A=!0,z())}function G(N,K){R=m(function(){N(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,W(C))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var P=f;f=K;try{return N()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=f;f=N;try{return K()}finally{f=P}},n.unstable_scheduleCallback=function(N,K,P){var re=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?re+P:re):P=re,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=P+xe,N={id:c++,callback:K,priorityLevel:N,startTime:P,expirationTime:xe,sortIndex:-1},P>re?(N.sortIndex=P,e(u,N),t(l)===null&&N===t(u)&&(_?(h(R),R=-1):_=!0,G(y,P-re))):(N.sortIndex=xe,e(l,N),g||p||(g=!0,W(C))),N},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(N){var K=f;return function(){var P=f;f=K;try{return N.apply(this,arguments)}finally{f=P}}}})(Xx);Wx.exports=Xx;var E1=Wx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1=Yt,wi=E1;function le(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jx=new Set,_u={};function Bo(n,e){ja(n,e),ja(n+"Capture",e)}function ja(n,e){for(_u[n]=e,n=0;n<e.length;n++)jx.add(e[n])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,w1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},Gg={};function A1(n){return cp.call(Gg,n)?!0:cp.call(Vg,n)?!1:w1.test(n)?Gg[n]=!0:(Vg[n]=!0,!1)}function C1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function R1(n,e,t,i){if(e===null||typeof e>"u"||C1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Mn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var d_=/[\-:]([a-z])/g;function h_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(d_,h_);Mn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(d_,h_);Mn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(d_,h_);Mn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function p_(n,e,t,i){var r=Mn.hasOwnProperty(e)?Mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R1(e,t,r,i)&&(t=null),i||r===null?A1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qr=T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ic=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),m_=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),__=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),hp=Symbol.for("react.suspense_list"),g_=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),$x=Symbol.for("react.offscreen"),Wg=Symbol.iterator;function gl(n){return n===null||typeof n!="object"?null:(n=Wg&&n[Wg]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,$d;function Il(n){if($d===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$d=e&&e[1]||""}return`
`+$d+n}var Kd=!1;function Zd(n,e){if(!n||Kd)return"";Kd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Il(n):""}function P1(n){switch(n.tag){case 5:return Il(n.type);case 16:return Il("Lazy");case 13:return Il("Suspense");case 19:return Il("SuspenseList");case 0:case 2:case 15:return n=Zd(n.type,!1),n;case 11:return n=Zd(n.type.render,!1),n;case 1:return n=Zd(n.type,!0),n;default:return""}}function pp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case fp:return"Profiler";case m_:return"StrictMode";case dp:return"Suspense";case hp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case qx:return(n.displayName||"Context")+".Consumer";case Yx:return(n._context.displayName||"Context")+".Provider";case __:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case g_:return e=n.displayName||null,e!==null?e:pp(n.type)||"Memo";case us:e=n._payload,n=n._init;try{return pp(n(e))}catch{}}return null}function b1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===m_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Us(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Kx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L1(n){var e=Kx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function rc(n){n._valueTracker||(n._valueTracker=L1(n))}function Zx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Kx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Nf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mp(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Xg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Us(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qx(n,e){e=e.checked,e!=null&&p_(n,"checked",e,!1)}function _p(n,e){Qx(n,e);var t=Us(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?gp(n,e.type,t):e.hasOwnProperty("defaultValue")&&gp(n,e.type,Us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function jg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function gp(n,e,t){(e!=="number"||Nf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ul=Array.isArray;function ba(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Us(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function vp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Yg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(le(92));if(Ul(t)){if(1<t.length)throw Error(le(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Us(t)}}function Jx(n,e){var t=Us(e.value),i=Us(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function qg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ey(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ey(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sc,ty=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(sc=sc||document.createElement("div"),sc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function gu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var jl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D1=["Webkit","ms","Moz","O"];Object.keys(jl).forEach(function(n){D1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),jl[e]=jl[n]})});function ny(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||jl.hasOwnProperty(n)&&jl[n]?(""+e).trim():e+"px"}function iy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ny(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var N1=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yp(n,e){if(e){if(N1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Sp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mp=null;function v_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ep=null,La=null,Da=null;function $g(n){if(n=qu(n)){if(typeof Ep!="function")throw Error(le(280));var e=n.stateNode;e&&(e=wd(e),Ep(n.stateNode,n.type,e))}}function ry(n){La?Da?Da.push(n):Da=[n]:La=n}function sy(){if(La){var n=La,e=Da;if(Da=La=null,$g(n),e)for(n=0;n<e.length;n++)$g(e[n])}}function oy(n,e){return n(e)}function ay(){}var Qd=!1;function ly(n,e,t){if(Qd)return n(e,t);Qd=!0;try{return oy(n,e,t)}finally{Qd=!1,(La!==null||Da!==null)&&(ay(),sy())}}function vu(n,e){var t=n.stateNode;if(t===null)return null;var i=wd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(le(231,e,typeof t));return t}var Tp=!1;if(Wr)try{var vl={};Object.defineProperty(vl,"passive",{get:function(){Tp=!0}}),window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,vl)}catch{Tp=!1}function I1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Yl=!1,If=null,Uf=!1,wp=null,U1={onError:function(n){Yl=!0,If=n}};function F1(n,e,t,i,r,s,o,a,l){Yl=!1,If=null,I1.apply(U1,arguments)}function O1(n,e,t,i,r,s,o,a,l){if(F1.apply(this,arguments),Yl){if(Yl){var u=If;Yl=!1,If=null}else throw Error(le(198));Uf||(Uf=!0,wp=u)}}function Ho(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function uy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Kg(n){if(Ho(n)!==n)throw Error(le(188))}function k1(n){var e=n.alternate;if(!e){if(e=Ho(n),e===null)throw Error(le(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Kg(r),n;if(s===i)return Kg(r),e;s=s.sibling}throw Error(le(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(t.alternate!==i)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?n:e}function cy(n){return n=k1(n),n!==null?fy(n):null}function fy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=fy(n);if(e!==null)return e;n=n.sibling}return null}var dy=wi.unstable_scheduleCallback,Zg=wi.unstable_cancelCallback,z1=wi.unstable_shouldYield,B1=wi.unstable_requestPaint,Xt=wi.unstable_now,H1=wi.unstable_getCurrentPriorityLevel,x_=wi.unstable_ImmediatePriority,hy=wi.unstable_UserBlockingPriority,Ff=wi.unstable_NormalPriority,V1=wi.unstable_LowPriority,py=wi.unstable_IdlePriority,Sd=null,yr=null;function G1(n){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(Sd,n,void 0,(n.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:j1,W1=Math.log,X1=Math.LN2;function j1(n){return n>>>=0,n===0?32:31-(W1(n)/X1|0)|0}var oc=64,ac=4194304;function Fl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Of(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Fl(a):(s&=o,s!==0&&(i=Fl(s)))}else o=t&~r,o!==0?i=Fl(o):s!==0&&(i=Fl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ir(e),r=1<<t,i|=n[t],e&=~r;return i}function Y1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ir(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Y1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ap(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function my(){var n=oc;return oc<<=1,!(oc&4194240)&&(oc=64),n}function Jd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ju(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ir(e),n[e]=t}function $1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ir(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function y_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ir(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var xt=0;function _y(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var gy,S_,vy,xy,yy,Cp=!1,lc=[],Ss=null,Ms=null,Es=null,xu=new Map,yu=new Map,fs=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qg(n,e){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":xu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(e.pointerId)}}function xl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qu(e),e!==null&&S_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Z1(n,e,t,i,r){switch(e){case"focusin":return Ss=xl(Ss,n,e,t,i,r),!0;case"dragenter":return Ms=xl(Ms,n,e,t,i,r),!0;case"mouseover":return Es=xl(Es,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return xu.set(s,xl(xu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,yu.set(s,xl(yu.get(s)||null,n,e,t,i,r)),!0}return!1}function Sy(n){var e=fo(n.target);if(e!==null){var t=Ho(e);if(t!==null){if(e=t.tag,e===13){if(e=uy(t),e!==null){n.blockedOn=e,yy(n.priority,function(){vy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Rp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Mp=i,t.target.dispatchEvent(i),Mp=null}else return e=qu(t),e!==null&&S_(e),n.blockedOn=t,!1;e.shift()}return!0}function Jg(n,e,t){lf(n)&&t.delete(e)}function Q1(){Cp=!1,Ss!==null&&lf(Ss)&&(Ss=null),Ms!==null&&lf(Ms)&&(Ms=null),Es!==null&&lf(Es)&&(Es=null),xu.forEach(Jg),yu.forEach(Jg)}function yl(n,e){n.blockedOn===e&&(n.blockedOn=null,Cp||(Cp=!0,wi.unstable_scheduleCallback(wi.unstable_NormalPriority,Q1)))}function Su(n){function e(r){return yl(r,n)}if(0<lc.length){yl(lc[0],n);for(var t=1;t<lc.length;t++){var i=lc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ss!==null&&yl(Ss,n),Ms!==null&&yl(Ms,n),Es!==null&&yl(Es,n),xu.forEach(e),yu.forEach(e),t=0;t<fs.length;t++)i=fs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fs.length&&(t=fs[0],t.blockedOn===null);)Sy(t),t.blockedOn===null&&fs.shift()}var Na=Qr.ReactCurrentBatchConfig,kf=!0;function J1(n,e,t,i){var r=xt,s=Na.transition;Na.transition=null;try{xt=1,M_(n,e,t,i)}finally{xt=r,Na.transition=s}}function eT(n,e,t,i){var r=xt,s=Na.transition;Na.transition=null;try{xt=4,M_(n,e,t,i)}finally{xt=r,Na.transition=s}}function M_(n,e,t,i){if(kf){var r=Rp(n,e,t,i);if(r===null)uh(n,e,i,zf,t),Qg(n,i);else if(Z1(r,n,e,t,i))i.stopPropagation();else if(Qg(n,i),e&4&&-1<K1.indexOf(n)){for(;r!==null;){var s=qu(r);if(s!==null&&gy(s),s=Rp(n,e,t,i),s===null&&uh(n,e,i,zf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else uh(n,e,i,null,t)}}var zf=null;function Rp(n,e,t,i){if(zf=null,n=v_(i),n=fo(n),n!==null)if(e=Ho(n),e===null)n=null;else if(t=e.tag,t===13){if(n=uy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return zf=n,null}function My(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H1()){case x_:return 1;case hy:return 4;case Ff:case V1:return 16;case py:return 536870912;default:return 16}default:return 16}}var ps=null,E_=null,uf=null;function Ey(){if(uf)return uf;var n,e=E_,t=e.length,i,r="value"in ps?ps.value:ps.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return uf=r.slice(n,1<i?1-i:void 0)}function cf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function uc(){return!0}function e0(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uc:e0,this.isPropagationStopped=e0,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),e}var dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},T_=Pi(dl),Yu=Ht({},dl,{view:0,detail:0}),tT=Pi(Yu),eh,th,Sl,Md=Ht({},Yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:w_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Sl&&(Sl&&n.type==="mousemove"?(eh=n.screenX-Sl.screenX,th=n.screenY-Sl.screenY):th=eh=0,Sl=n),eh)},movementY:function(n){return"movementY"in n?n.movementY:th}}),t0=Pi(Md),nT=Ht({},Md,{dataTransfer:0}),iT=Pi(nT),rT=Ht({},Yu,{relatedTarget:0}),nh=Pi(rT),sT=Ht({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),oT=Pi(sT),aT=Ht({},dl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lT=Pi(aT),uT=Ht({},dl,{data:0}),n0=Pi(uT),cT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=dT[n])?!!e[n]:!1}function w_(){return hT}var pT=Ht({},Yu,{key:function(n){if(n.key){var e=cT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=cf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:w_,charCode:function(n){return n.type==="keypress"?cf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?cf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mT=Pi(pT),_T=Ht({},Md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i0=Pi(_T),gT=Ht({},Yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:w_}),vT=Pi(gT),xT=Ht({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),yT=Pi(xT),ST=Ht({},Md,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),MT=Pi(ST),ET=[9,13,27,32],A_=Wr&&"CompositionEvent"in window,ql=null;Wr&&"documentMode"in document&&(ql=document.documentMode);var TT=Wr&&"TextEvent"in window&&!ql,Ty=Wr&&(!A_||ql&&8<ql&&11>=ql),r0=" ",s0=!1;function wy(n,e){switch(n){case"keyup":return ET.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ay(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _a=!1;function wT(n,e){switch(n){case"compositionend":return Ay(e);case"keypress":return e.which!==32?null:(s0=!0,r0);case"textInput":return n=e.data,n===r0&&s0?null:n;default:return null}}function AT(n,e){if(_a)return n==="compositionend"||!A_&&wy(n,e)?(n=Ey(),uf=E_=ps=null,_a=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ty&&e.locale!=="ko"?null:e.data;default:return null}}var CT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!CT[n.type]:e==="textarea"}function Cy(n,e,t,i){ry(i),e=Bf(e,"onChange"),0<e.length&&(t=new T_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var $l=null,Mu=null;function RT(n){ky(n,0)}function Ed(n){var e=xa(n);if(Zx(e))return n}function PT(n,e){if(n==="change")return e}var Ry=!1;if(Wr){var ih;if(Wr){var rh="oninput"in document;if(!rh){var a0=document.createElement("div");a0.setAttribute("oninput","return;"),rh=typeof a0.oninput=="function"}ih=rh}else ih=!1;Ry=ih&&(!document.documentMode||9<document.documentMode)}function l0(){$l&&($l.detachEvent("onpropertychange",Py),Mu=$l=null)}function Py(n){if(n.propertyName==="value"&&Ed(Mu)){var e=[];Cy(e,Mu,n,v_(n)),ly(RT,e)}}function bT(n,e,t){n==="focusin"?(l0(),$l=e,Mu=t,$l.attachEvent("onpropertychange",Py)):n==="focusout"&&l0()}function LT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ed(Mu)}function DT(n,e){if(n==="click")return Ed(e)}function NT(n,e){if(n==="input"||n==="change")return Ed(e)}function IT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var or=typeof Object.is=="function"?Object.is:IT;function Eu(n,e){if(or(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!cp.call(e,r)||!or(n[r],e[r]))return!1}return!0}function u0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function c0(n,e){var t=u0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=u0(t)}}function by(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?by(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ly(){for(var n=window,e=Nf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Nf(n.document)}return e}function C_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function UT(n){var e=Ly(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&by(t.ownerDocument.documentElement,t)){if(i!==null&&C_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=c0(t,s);var o=c0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var FT=Wr&&"documentMode"in document&&11>=document.documentMode,ga=null,Pp=null,Kl=null,bp=!1;function f0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bp||ga==null||ga!==Nf(i)||(i=ga,"selectionStart"in i&&C_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Kl&&Eu(Kl,i)||(Kl=i,i=Bf(Pp,"onSelect"),0<i.length&&(e=new T_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ga)))}function cc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:cc("Animation","AnimationEnd"),animationiteration:cc("Animation","AnimationIteration"),animationstart:cc("Animation","AnimationStart"),transitionend:cc("Transition","TransitionEnd")},sh={},Dy={};Wr&&(Dy=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Td(n){if(sh[n])return sh[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Dy)return sh[n]=e[t];return n}var Ny=Td("animationend"),Iy=Td("animationiteration"),Uy=Td("animationstart"),Fy=Td("transitionend"),Oy=new Map,d0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){Oy.set(n,e),Bo(e,[n])}for(var oh=0;oh<d0.length;oh++){var ah=d0[oh],OT=ah.toLowerCase(),kT=ah[0].toUpperCase()+ah.slice(1);Gs(OT,"on"+kT)}Gs(Ny,"onAnimationEnd");Gs(Iy,"onAnimationIteration");Gs(Uy,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(Fy,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);Bo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ol));function h0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,O1(i,e,void 0,n),n.currentTarget=null}function ky(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;h0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;h0(r,a,u),s=l}}}if(Uf)throw n=wp,Uf=!1,wp=null,n}function bt(n,e){var t=e[Up];t===void 0&&(t=e[Up]=new Set);var i=n+"__bubble";t.has(i)||(zy(e,n,2,!1),t.add(i))}function lh(n,e,t){var i=0;e&&(i|=4),zy(t,n,i,e)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Tu(n){if(!n[fc]){n[fc]=!0,jx.forEach(function(t){t!=="selectionchange"&&(zT.has(t)||lh(t,!1,n),lh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[fc]||(e[fc]=!0,lh("selectionchange",!1,e))}}function zy(n,e,t,i){switch(My(e)){case 1:var r=J1;break;case 4:r=eT;break;default:r=M_}t=r.bind(null,e,t,n),r=void 0,!Tp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function uh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ly(function(){var u=s,c=v_(t),d=[];e:{var f=Oy.get(n);if(f!==void 0){var p=T_,g=n;switch(n){case"keypress":if(cf(t)===0)break e;case"keydown":case"keyup":p=mT;break;case"focusin":g="focus",p=nh;break;case"focusout":g="blur",p=nh;break;case"beforeblur":case"afterblur":p=nh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=t0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vT;break;case Ny:case Iy:case Uy:p=oT;break;case Fy:p=yT;break;case"scroll":p=tT;break;case"wheel":p=MT;break;case"copy":case"cut":case"paste":p=lT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=i0}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=vu(v,h),y!=null&&_.push(wu(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Mp&&(g=t.relatedTarget||t.fromElement)&&(fo(g)||g[Xr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?fo(g):null,g!==null&&(m=Ho(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=t0,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=i0,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:xa(p),x=g==null?f:xa(g),f=new _(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,fo(c)===u&&(_=new _(h,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,h=g,v=0,x=_;x;x=Xo(x))v++;for(x=0,y=h;y;y=Xo(y))x++;for(;0<v-x;)_=Xo(_),v--;for(;0<x-v;)h=Xo(h),x--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Xo(_),h=Xo(h)}_=null}else _=null;p!==null&&p0(d,f,p,_,!1),g!==null&&m!==null&&p0(d,m,g,_,!0)}}e:{if(f=u?xa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=PT;else if(o0(f))if(Ry)C=NT;else{C=LT;var A=bT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=DT);if(C&&(C=C(n,u))){Cy(d,C,t,c);break e}A&&A(n,f,u),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&gp(f,"number",f.value)}switch(A=u?xa(u):window,n){case"focusin":(o0(A)||A.contentEditable==="true")&&(ga=A,Pp=u,Kl=null);break;case"focusout":Kl=Pp=ga=null;break;case"mousedown":bp=!0;break;case"contextmenu":case"mouseup":case"dragend":bp=!1,f0(d,t,c);break;case"selectionchange":if(FT)break;case"keydown":case"keyup":f0(d,t,c)}var E;if(A_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _a?wy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Ty&&t.locale!=="ko"&&(_a||R!=="onCompositionStart"?R==="onCompositionEnd"&&_a&&(E=Ey()):(ps=c,E_="value"in ps?ps.value:ps.textContent,_a=!0)),A=Bf(u,R),0<A.length&&(R=new n0(R,n,null,t,c),d.push({event:R,listeners:A}),E?R.data=E:(E=Ay(t),E!==null&&(R.data=E)))),(E=TT?wT(n,t):AT(n,t))&&(u=Bf(u,"onBeforeInput"),0<u.length&&(c=new n0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}ky(d,e)})}function wu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Bf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=vu(n,t),s!=null&&i.unshift(wu(n,s,r)),s=vu(n,e),s!=null&&i.push(wu(n,s,r))),n=n.return}return i}function Xo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function p0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=vu(t,s),l!=null&&o.unshift(wu(t,l,a))):r||(l=vu(t,s),l!=null&&o.push(wu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var BT=/\r\n?/g,HT=/\u0000|\uFFFD/g;function m0(n){return(typeof n=="string"?n:""+n).replace(BT,`
`).replace(HT,"")}function dc(n,e,t){if(e=m0(e),m0(n)!==e&&t)throw Error(le(425))}function Hf(){}var Lp=null,Dp=null;function Np(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ip=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,GT=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(n){return _0.resolve(null).then(n).catch(WT)}:Ip;function WT(n){setTimeout(function(){throw n})}function ch(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Su(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Su(e)}function Ts(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function g0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var hl=Math.random().toString(36).slice(2),hr="__reactFiber$"+hl,Au="__reactProps$"+hl,Xr="__reactContainer$"+hl,Up="__reactEvents$"+hl,XT="__reactListeners$"+hl,jT="__reactHandles$"+hl;function fo(n){var e=n[hr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Xr]||t[hr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=g0(n);n!==null;){if(t=n[hr])return t;n=g0(n)}return e}n=t,t=n.parentNode}return null}function qu(n){return n=n[hr]||n[Xr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(le(33))}function wd(n){return n[Au]||null}var Fp=[],ya=-1;function Ws(n){return{current:n}}function Dt(n){0>ya||(n.current=Fp[ya],Fp[ya]=null,ya--)}function Rt(n,e){ya++,Fp[ya]=n.current,n.current=e}var Fs={},In=Ws(Fs),Qn=Ws(!1),bo=Fs;function Ya(n,e){var t=n.type.contextTypes;if(!t)return Fs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Jn(n){return n=n.childContextTypes,n!=null}function Vf(){Dt(Qn),Dt(In)}function v0(n,e,t){if(In.current!==Fs)throw Error(le(168));Rt(In,e),Rt(Qn,t)}function By(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,b1(n)||"Unknown",r));return Ht({},t,i)}function Gf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fs,bo=In.current,Rt(In,n),Rt(Qn,Qn.current),!0}function x0(n,e,t){var i=n.stateNode;if(!i)throw Error(le(169));t?(n=By(n,e,bo),i.__reactInternalMemoizedMergedChildContext=n,Dt(Qn),Dt(In),Rt(In,n)):Dt(Qn),Rt(Qn,t)}var Dr=null,Ad=!1,fh=!1;function Hy(n){Dr===null?Dr=[n]:Dr.push(n)}function YT(n){Ad=!0,Hy(n)}function Xs(){if(!fh&&Dr!==null){fh=!0;var n=0,e=xt;try{var t=Dr;for(xt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Dr=null,Ad=!1}catch(r){throw Dr!==null&&(Dr=Dr.slice(n+1)),dy(x_,Xs),r}finally{xt=e,fh=!1}}return null}var Sa=[],Ma=0,Wf=null,Xf=0,Ni=[],Ii=0,Lo=null,Fr=1,Or="";function no(n,e){Sa[Ma++]=Xf,Sa[Ma++]=Wf,Wf=n,Xf=e}function Vy(n,e,t){Ni[Ii++]=Fr,Ni[Ii++]=Or,Ni[Ii++]=Lo,Lo=n;var i=Fr;n=Or;var r=32-ir(i)-1;i&=~(1<<r),t+=1;var s=32-ir(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fr=1<<32-ir(e)+r|t<<r|i,Or=s+n}else Fr=1<<s|t<<r|i,Or=n}function R_(n){n.return!==null&&(no(n,1),Vy(n,1,0))}function P_(n){for(;n===Wf;)Wf=Sa[--Ma],Sa[Ma]=null,Xf=Sa[--Ma],Sa[Ma]=null;for(;n===Lo;)Lo=Ni[--Ii],Ni[Ii]=null,Or=Ni[--Ii],Ni[Ii]=null,Fr=Ni[--Ii],Ni[Ii]=null}var Ei=null,yi=null,Nt=!1,er=null;function Gy(n,e){var t=ki(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function y0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ei=n,yi=Ts(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ei=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:Fr,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ki(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ei=n,yi=null,!0):!1;default:return!1}}function Op(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kp(n){if(Nt){var e=yi;if(e){var t=e;if(!y0(n,e)){if(Op(n))throw Error(le(418));e=Ts(t.nextSibling);var i=Ei;e&&y0(n,e)?Gy(i,t):(n.flags=n.flags&-4097|2,Nt=!1,Ei=n)}}else{if(Op(n))throw Error(le(418));n.flags=n.flags&-4097|2,Nt=!1,Ei=n}}}function S0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ei=n}function hc(n){if(n!==Ei)return!1;if(!Nt)return S0(n),Nt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Np(n.type,n.memoizedProps)),e&&(e=yi)){if(Op(n))throw Wy(),Error(le(418));for(;e;)Gy(n,e),e=Ts(e.nextSibling)}if(S0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(le(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=Ts(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=Ei?Ts(n.stateNode.nextSibling):null;return!0}function Wy(){for(var n=yi;n;)n=Ts(n.nextSibling)}function qa(){yi=Ei=null,Nt=!1}function b_(n){er===null?er=[n]:er.push(n)}var qT=Qr.ReactCurrentBatchConfig;function Ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var i=t.stateNode}if(!i)throw Error(le(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,n))}return n}function pc(n,e){throw n=Object.prototype.toString.call(e),Error(le(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function M0(n){var e=n._init;return e(n._payload)}function Xy(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Rs(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=vh(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var C=x.type;return C===ma?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===us&&M0(C)===v.type)?(y=r(v,x.props),y.ref=Ml(h,v,x),y.return=h,y):(y=gf(x.type,x.key,x.props,null,h.mode,y),y.ref=Ml(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=xh(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,C){return v===null||v.tag!==7?(v=yo(x,h.mode,y,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ic:return x=gf(v.type,v.key,v.props,null,h.mode,x),x.ref=Ml(h,null,v),x.return=h,x;case pa:return v=xh(v,h.mode,x),v.return=h,v;case us:var y=v._init;return d(h,y(v._payload),x)}if(Ul(v)||gl(v))return v=yo(v,h.mode,x,null),v.return=h,v;pc(h,v)}return null}function f(h,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ic:return x.key===C?l(h,v,x,y):null;case pa:return x.key===C?u(h,v,x,y):null;case us:return C=x._init,f(h,v,C(x._payload),y)}if(Ul(x)||gl(x))return C!==null?null:c(h,v,x,y,null);pc(h,x)}return null}function p(h,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ic:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,C);case pa:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,C);case us:var A=y._init;return p(h,v,x,A(y._payload),C)}if(Ul(y)||gl(y))return h=h.get(x)||null,c(v,h,y,C,null);pc(v,y)}return null}function g(h,v,x,y){for(var C=null,A=null,E=v,R=v=0,M=null;E!==null&&R<x.length;R++){E.index>R?(M=E,E=null):M=E.sibling;var S=f(h,E,x[R],y);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&e(h,E),v=s(S,v,R),A===null?C=S:A.sibling=S,A=S,E=M}if(R===x.length)return t(h,E),Nt&&no(h,R),C;if(E===null){for(;R<x.length;R++)E=d(h,x[R],y),E!==null&&(v=s(E,v,R),A===null?C=E:A.sibling=E,A=E);return Nt&&no(h,R),C}for(E=i(h,E);R<x.length;R++)M=p(E,h,R,x[R],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?R:M.key),v=s(M,v,R),A===null?C=M:A.sibling=M,A=M);return n&&E.forEach(function(L){return e(h,L)}),Nt&&no(h,R),C}function _(h,v,x,y){var C=gl(x);if(typeof C!="function")throw Error(le(150));if(x=C.call(x),x==null)throw Error(le(151));for(var A=C=null,E=v,R=v=0,M=null,S=x.next();E!==null&&!S.done;R++,S=x.next()){E.index>R?(M=E,E=null):M=E.sibling;var L=f(h,E,S.value,y);if(L===null){E===null&&(E=M);break}n&&E&&L.alternate===null&&e(h,E),v=s(L,v,R),A===null?C=L:A.sibling=L,A=L,E=M}if(S.done)return t(h,E),Nt&&no(h,R),C;if(E===null){for(;!S.done;R++,S=x.next())S=d(h,S.value,y),S!==null&&(v=s(S,v,R),A===null?C=S:A.sibling=S,A=S);return Nt&&no(h,R),C}for(E=i(h,E);!S.done;R++,S=x.next())S=p(E,h,R,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?R:S.key),v=s(S,v,R),A===null?C=S:A.sibling=S,A=S);return n&&E.forEach(function(U){return e(h,U)}),Nt&&no(h,R),C}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ic:e:{for(var C=x.key,A=v;A!==null;){if(A.key===C){if(C=x.type,C===ma){if(A.tag===7){t(h,A.sibling),v=r(A,x.props.children),v.return=h,h=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===us&&M0(C)===A.type){t(h,A.sibling),v=r(A,x.props),v.ref=Ml(h,A,x),v.return=h,h=v;break e}t(h,A);break}else e(h,A);A=A.sibling}x.type===ma?(v=yo(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=gf(x.type,x.key,x.props,null,h.mode,y),y.ref=Ml(h,v,x),y.return=h,h=y)}return o(h);case pa:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=xh(x,h.mode,y),v.return=h,h=v}return o(h);case us:return A=x._init,m(h,v,A(x._payload),y)}if(Ul(x))return g(h,v,x,y);if(gl(x))return _(h,v,x,y);pc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=vh(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var $a=Xy(!0),jy=Xy(!1),jf=Ws(null),Yf=null,Ea=null,L_=null;function D_(){L_=Ea=Yf=null}function N_(n){var e=jf.current;Dt(jf),n._currentValue=e}function zp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ia(n,e){Yf=n,L_=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Zn=!0),n.firstContext=null)}function Wi(n){var e=n._currentValue;if(L_!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(Yf===null)throw Error(le(308));Ea=n,Yf.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var ho=null;function I_(n){ho===null?ho=[n]:ho.push(n)}function Yy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,I_(e)):(t.next=r.next,r.next=t),e.interleaved=t,jr(n,i)}function jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cs=!1;function U_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ws(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,jr(n,t)}return r=i.interleaved,r===null?(e.next=e,I_(i)):(e.next=r.next,r.next=e),i.interleaved=e,jr(n,t)}function ff(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,y_(n,t)}}function E0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function qf(n,e,t,i){var r=n.updateQueue;cs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Ht({},d,f);break e;case 2:cs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);No|=o,n.lanes=o,n.memoizedState=d}}function T0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var $u={},Sr=Ws($u),Cu=Ws($u),Ru=Ws($u);function po(n){if(n===$u)throw Error(le(174));return n}function F_(n,e){switch(Rt(Ru,e),Rt(Cu,n),Rt(Sr,$u),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=xp(e,n)}Dt(Sr),Rt(Sr,e)}function Ka(){Dt(Sr),Dt(Cu),Dt(Ru)}function $y(n){po(Ru.current);var e=po(Sr.current),t=xp(e,n.type);e!==t&&(Rt(Cu,n),Rt(Sr,t))}function O_(n){Cu.current===n&&(Dt(Sr),Dt(Cu))}var Ot=Ws(0);function $f(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dh=[];function k_(){for(var n=0;n<dh.length;n++)dh[n]._workInProgressVersionPrimary=null;dh.length=0}var df=Qr.ReactCurrentDispatcher,hh=Qr.ReactCurrentBatchConfig,Do=0,Bt=null,rn=null,dn=null,Kf=!1,Zl=!1,Pu=0,$T=0;function En(){throw Error(le(321))}function z_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!or(n[t],e[t]))return!1;return!0}function B_(n,e,t,i,r,s){if(Do=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,df.current=n===null||n.memoizedState===null?JT:ew,n=t(i,r),Zl){s=0;do{if(Zl=!1,Pu=0,25<=s)throw Error(le(301));s+=1,dn=rn=null,e.updateQueue=null,df.current=tw,n=t(i,r)}while(Zl)}if(df.current=Zf,e=rn!==null&&rn.next!==null,Do=0,dn=rn=Bt=null,Kf=!1,e)throw Error(le(300));return n}function H_(){var n=Pu!==0;return Pu=0,n}function lr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Bt.memoizedState=dn=n:dn=dn.next=n,dn}function Xi(){if(rn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=dn===null?Bt.memoizedState:dn.next;if(e!==null)dn=e,rn=n;else{if(n===null)throw Error(le(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},dn===null?Bt.memoizedState=dn=n:dn=dn.next=n}return dn}function bu(n,e){return typeof e=="function"?e(n):e}function ph(n){var e=Xi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Bt.lanes|=c,No|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,or(i,e.memoizedState)||(Zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,No|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function mh(n){var e=Xi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);or(s,e.memoizedState)||(Zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ky(){}function Zy(n,e){var t=Bt,i=Xi(),r=e(),s=!or(i.memoizedState,r);if(s&&(i.memoizedState=r,Zn=!0),i=i.queue,V_(eS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,Lu(9,Jy.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(le(349));Do&30||Qy(t,e,r)}return r}function Qy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Jy(n,e,t,i){e.value=t,e.getSnapshot=i,tS(e)&&nS(n)}function eS(n,e,t){return t(function(){tS(e)&&nS(n)})}function tS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!or(n,t)}catch{return!0}}function nS(n){var e=jr(n,1);e!==null&&rr(e,n,1,-1)}function w0(n){var e=lr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bu,lastRenderedState:n},e.queue=n,n=n.dispatch=QT.bind(null,Bt,n),[e.memoizedState,n]}function Lu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function iS(){return Xi().memoizedState}function hf(n,e,t,i){var r=lr();Bt.flags|=n,r.memoizedState=Lu(1|e,t,void 0,i===void 0?null:i)}function Cd(n,e,t,i){var r=Xi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&z_(i,o.deps)){r.memoizedState=Lu(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=Lu(1|e,t,s,i)}function A0(n,e){return hf(8390656,8,n,e)}function V_(n,e){return Cd(2048,8,n,e)}function rS(n,e){return Cd(4,2,n,e)}function sS(n,e){return Cd(4,4,n,e)}function oS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function aS(n,e,t){return t=t!=null?t.concat([n]):null,Cd(4,4,oS.bind(null,e,n),t)}function G_(){}function lS(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&z_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function uS(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&z_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function cS(n,e,t){return Do&21?(or(t,e)||(t=my(),Bt.lanes|=t,No|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=t)}function KT(n,e){var t=xt;xt=t!==0&&4>t?t:4,n(!0);var i=hh.transition;hh.transition={};try{n(!1),e()}finally{xt=t,hh.transition=i}}function fS(){return Xi().memoizedState}function ZT(n,e,t){var i=Cs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},dS(n))hS(e,t);else if(t=Yy(n,e,t,i),t!==null){var r=Wn();rr(t,n,i,r),pS(t,e,i)}}function QT(n,e,t){var i=Cs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(dS(n))hS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,or(a,o)){var l=e.interleaved;l===null?(r.next=r,I_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Yy(n,e,r,i),t!==null&&(r=Wn(),rr(t,n,i,r),pS(t,e,i))}}function dS(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function hS(n,e){Zl=Kf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function pS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,y_(n,t)}}var Zf={readContext:Wi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},JT={readContext:Wi,useCallback:function(n,e){return lr().memoizedState=[n,e===void 0?null:e],n},useContext:Wi,useEffect:A0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,hf(4194308,4,oS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return hf(4194308,4,n,e)},useInsertionEffect:function(n,e){return hf(4,2,n,e)},useMemo:function(n,e){var t=lr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=lr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ZT.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=lr();return n={current:n},e.memoizedState=n},useState:w0,useDebugValue:G_,useDeferredValue:function(n){return lr().memoizedState=n},useTransition:function(){var n=w0(!1),e=n[0];return n=KT.bind(null,n[1]),lr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=lr();if(Nt){if(t===void 0)throw Error(le(407));t=t()}else{if(t=e(),pn===null)throw Error(le(349));Do&30||Qy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,A0(eS.bind(null,i,s,n),[n]),i.flags|=2048,Lu(9,Jy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=lr(),e=pn.identifierPrefix;if(Nt){var t=Or,i=Fr;t=(i&~(1<<32-ir(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Pu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=$T++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ew={readContext:Wi,useCallback:lS,useContext:Wi,useEffect:V_,useImperativeHandle:aS,useInsertionEffect:rS,useLayoutEffect:sS,useMemo:uS,useReducer:ph,useRef:iS,useState:function(){return ph(bu)},useDebugValue:G_,useDeferredValue:function(n){var e=Xi();return cS(e,rn.memoizedState,n)},useTransition:function(){var n=ph(bu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Ky,useSyncExternalStore:Zy,useId:fS,unstable_isNewReconciler:!1},tw={readContext:Wi,useCallback:lS,useContext:Wi,useEffect:V_,useImperativeHandle:aS,useInsertionEffect:rS,useLayoutEffect:sS,useMemo:uS,useReducer:mh,useRef:iS,useState:function(){return mh(bu)},useDebugValue:G_,useDeferredValue:function(n){var e=Xi();return rn===null?e.memoizedState=n:cS(e,rn.memoizedState,n)},useTransition:function(){var n=mh(bu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Ky,useSyncExternalStore:Zy,useId:fS,unstable_isNewReconciler:!1};function Qi(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Bp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Rd={isMounted:function(n){return(n=n._reactInternals)?Ho(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Cs(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(rr(e,n,r,i),ff(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Cs(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(rr(e,n,r,i),ff(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Cs(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ws(n,r,i),e!==null&&(rr(e,n,i,t),ff(e,n,i))}};function C0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eu(t,i)||!Eu(r,s):!0}function mS(n,e,t){var i=!1,r=Fs,s=e.contextType;return typeof s=="object"&&s!==null?s=Wi(s):(r=Jn(e)?bo:In.current,i=e.contextTypes,s=(i=i!=null)?Ya(n,r):Fs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function R0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Rd.enqueueReplaceState(e,e.state,null)}function Hp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},U_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wi(s):(s=Jn(e)?bo:In.current,r.context=Ya(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rd.enqueueReplaceState(r,r.state,null),qf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Za(n,e){try{var t="",i=e;do t+=P1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function _h(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Vp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var nw=typeof WeakMap=="function"?WeakMap:Map;function _S(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Jf||(Jf=!0,Qp=i),Vp(n,e)},t}function gS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Vp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Vp(n,e),typeof i!="function"&&(As===null?As=new Set([this]):As.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function P0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new nw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=_w.bind(null,n,e,t),e.then(n,n))}function b0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function L0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,ws(t,e,1))),t.lanes|=1),n)}var iw=Qr.ReactCurrentOwner,Zn=!1;function zn(n,e,t,i){e.child=n===null?jy(e,null,t,i):$a(e,n.child,t,i)}function D0(n,e,t,i,r){t=t.render;var s=e.ref;return Ia(e,r),i=B_(n,e,t,i,s,r),t=H_(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Nt&&t&&R_(e),e.flags|=1,zn(n,e,i,r),e.child)}function N0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Z_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,vS(n,e,s,i,r)):(n=gf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Eu,t(o,i)&&n.ref===e.ref)return Yr(n,e,r)}return e.flags|=1,n=Rs(s,i),n.ref=e.ref,n.return=e,e.child=n}function vS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Eu(s,i)&&n.ref===e.ref)if(Zn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Zn=!0);else return e.lanes=n.lanes,Yr(n,e,r)}return Gp(n,e,t,i,r)}function xS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(wa,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(wa,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(wa,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(wa,pi),pi|=i;return zn(n,e,r,t),e.child}function yS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Gp(n,e,t,i,r){var s=Jn(t)?bo:In.current;return s=Ya(e,s),Ia(e,r),t=B_(n,e,t,i,s,r),i=H_(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Nt&&i&&R_(e),e.flags|=1,zn(n,e,t,r),e.child)}function I0(n,e,t,i,r){if(Jn(t)){var s=!0;Gf(e)}else s=!1;if(Ia(e,r),e.stateNode===null)pf(n,e),mS(e,t,i),Hp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Wi(u):(u=Jn(t)?bo:In.current,u=Ya(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&R0(e,o,i,u),cs=!1;var f=e.memoizedState;o.state=f,qf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Qn.current||cs?(typeof c=="function"&&(Bp(e,t,c,i),l=e.memoizedState),(a=cs||C0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Wi(l):(l=Jn(t)?bo:In.current,l=Ya(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&R0(e,o,i,l),cs=!1,f=e.memoizedState,o.state=f,qf(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Qn.current||cs?(typeof p=="function"&&(Bp(e,t,p,i),g=e.memoizedState),(u=cs||C0(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Wp(n,e,t,i,s,r)}function Wp(n,e,t,i,r,s){yS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&x0(e,t,!1),Yr(n,e,s);i=e.stateNode,iw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=$a(e,n.child,null,s),e.child=$a(e,null,a,s)):zn(n,e,a,s),e.memoizedState=i.state,r&&x0(e,t,!0),e.child}function SS(n){var e=n.stateNode;e.pendingContext?v0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&v0(n,e.context,!1),F_(n,e.containerInfo)}function U0(n,e,t,i,r){return qa(),b_(r),e.flags|=256,zn(n,e,t,i),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function jp(n){return{baseLanes:n,cachePool:null,transitions:null}}function MS(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(Ot,r&1),n===null)return kp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ld(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=jp(t),e.memoizedState=Xp,n):W_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rs(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?jp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Xp,i}return s=n.child,n=s.sibling,i=Rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function W_(n,e){return e=Ld({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function mc(n,e,t,i){return i!==null&&b_(i),$a(e,n.child,null,t),n=W_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function rw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=_h(Error(le(422))),mc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ld({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$a(e,n.child,null,o),e.child.memoizedState=jp(o),e.memoizedState=Xp,s);if(!(e.mode&1))return mc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=_h(s,i,void 0),mc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Zn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,jr(n,r),rr(i,n,r,-1))}return K_(),i=_h(Error(le(421))),mc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=gw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=Ts(r.nextSibling),Ei=e,Nt=!0,er=null,n!==null&&(Ni[Ii++]=Fr,Ni[Ii++]=Or,Ni[Ii++]=Lo,Fr=n.id,Or=n.overflow,Lo=e),e=W_(e,i.children),e.flags|=4096,e)}function F0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),zp(n.return,e,t)}function gh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ES(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&F0(n,t,e);else if(n.tag===19)F0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&$f(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),gh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&$f(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}gh(e,!0,t,null,s);break;case"together":gh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),No|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(le(153));if(e.child!==null){for(n=e.child,t=Rs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Rs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function sw(n,e,t){switch(e.tag){case 3:SS(e),qa();break;case 5:$y(e);break;case 1:Jn(e.type)&&Gf(e);break;case 4:F_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(jf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?MS(n,e,t):(Rt(Ot,Ot.current&1),n=Yr(n,e,t),n!==null?n.sibling:null);Rt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ES(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,xS(n,e,t)}return Yr(n,e,t)}var TS,Yp,wS,AS;TS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yp=function(){};wS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,po(Sr.current);var s=null;switch(t){case"input":r=mp(n,r),i=mp(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=vp(n,r),i=vp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Hf)}yp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_u.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_u.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&bt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};AS=function(n,e,t,i){t!==i&&(e.flags|=4)};function El(n,e){if(!Nt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Tn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ow(n,e,t){var i=e.pendingProps;switch(P_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(e),null;case 1:return Jn(e.type)&&Vf(),Tn(e),null;case 3:return i=e.stateNode,Ka(),Dt(Qn),Dt(In),k_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(hc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,er!==null&&(tm(er),er=null))),Yp(n,e),Tn(e),null;case 5:O_(e);var r=po(Ru.current);if(t=e.type,n!==null&&e.stateNode!=null)wS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Tn(e),null}if(n=po(Sr.current),hc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hr]=e,i[Au]=s,n=(e.mode&1)!==0,t){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<Ol.length;r++)bt(Ol[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":Xg(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":Yg(i,s),bt("invalid",i)}yp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&dc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dc(i.textContent,a,n),r=["children",""+a]):_u.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(t){case"input":rc(i),jg(i,s,!0);break;case"textarea":rc(i),qg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ey(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hr]=e,n[Au]=i,TS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Sp(t,i),t){case"dialog":bt("cancel",n),bt("close",n),r=i;break;case"iframe":case"object":case"embed":bt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ol.length;r++)bt(Ol[r],n);r=i;break;case"source":bt("error",n),r=i;break;case"img":case"image":case"link":bt("error",n),bt("load",n),r=i;break;case"details":bt("toggle",n),r=i;break;case"input":Xg(n,i),r=mp(n,i),bt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),bt("invalid",n);break;case"textarea":Yg(n,i),r=vp(n,i),bt("invalid",n);break;default:r=i}yp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ty(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&gu(n,l):typeof l=="number"&&gu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_u.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",n):l!=null&&p_(n,s,l,o))}switch(t){case"input":rc(n),jg(n,i,!1);break;case"textarea":rc(n),qg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Us(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ba(n,!!i.multiple,s,!1):i.defaultValue!=null&&ba(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Hf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tn(e),null;case 6:if(n&&e.stateNode!=null)AS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(t=po(Ru.current),po(Sr.current),hc(e)){if(i=e.stateNode,t=e.memoizedProps,i[hr]=e,(s=i.nodeValue!==t)&&(n=Ei,n!==null))switch(n.tag){case 3:dc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&dc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hr]=e,e.stateNode=i}return Tn(e),null;case 13:if(Dt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Nt&&yi!==null&&e.mode&1&&!(e.flags&128))Wy(),qa(),e.flags|=98560,s=!1;else if(s=hc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[hr]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tn(e),s=!1}else er!==null&&(tm(er),er=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?on===0&&(on=3):K_())),e.updateQueue!==null&&(e.flags|=4),Tn(e),null);case 4:return Ka(),Yp(n,e),n===null&&Tu(e.stateNode.containerInfo),Tn(e),null;case 10:return N_(e.type._context),Tn(e),null;case 17:return Jn(e.type)&&Vf(),Tn(e),null;case 19:if(Dt(Ot),s=e.memoizedState,s===null)return Tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)El(s,!1);else{if(on!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=$f(n),o!==null){for(e.flags|=128,El(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>Qa&&(e.flags|=128,i=!0,El(s,!1),e.lanes=4194304)}else{if(!i)if(n=$f(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),El(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Nt)return Tn(e),null}else 2*Xt()-s.renderingStartTime>Qa&&t!==1073741824&&(e.flags|=128,i=!0,El(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Ot.current,Rt(Ot,i?t&1|2:t&1),e):(Tn(e),null);case 22:case 23:return $_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(Tn(e),e.subtreeFlags&6&&(e.flags|=8192)):Tn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function aw(n,e){switch(P_(e),e.tag){case 1:return Jn(e.type)&&Vf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ka(),Dt(Qn),Dt(In),k_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return O_(e),null;case 13:if(Dt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(le(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Dt(Ot),null;case 4:return Ka(),null;case 10:return N_(e.type._context),null;case 22:case 23:return $_(),null;case 24:return null;default:return null}}var _c=!1,Pn=!1,lw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function qp(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var O0=!1;function uw(n,e){if(Lp=kf,n=Ly(),C_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Dp={focusedElem:n,selectionRange:t},kf=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Qi(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){Vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return g=O0,O0=!1,g}function Ql(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&qp(e,t,s)}r=r.next}while(r!==i)}}function Pd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function $p(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function CS(n){var e=n.alternate;e!==null&&(n.alternate=null,CS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hr],delete e[Au],delete e[Up],delete e[XT],delete e[jT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function RS(n){return n.tag===5||n.tag===3||n.tag===4}function k0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||RS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Hf));else if(i!==4&&(n=n.child,n!==null))for(Kp(n,e,t),n=n.sibling;n!==null;)Kp(n,e,t),n=n.sibling}function Zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zp(n,e,t),n=n.sibling;n!==null;)Zp(n,e,t),n=n.sibling}var gn=null,Ji=!1;function ts(n,e,t){for(t=t.child;t!==null;)PS(n,e,t),t=t.sibling}function PS(n,e,t){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(Sd,t)}catch{}switch(t.tag){case 5:Pn||Ta(t,e);case 6:var i=gn,r=Ji;gn=null,ts(n,e,t),gn=i,Ji=r,gn!==null&&(Ji?(n=gn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):gn.removeChild(t.stateNode));break;case 18:gn!==null&&(Ji?(n=gn,t=t.stateNode,n.nodeType===8?ch(n.parentNode,t):n.nodeType===1&&ch(n,t),Su(n)):ch(gn,t.stateNode));break;case 4:i=gn,r=Ji,gn=t.stateNode.containerInfo,Ji=!0,ts(n,e,t),gn=i,Ji=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qp(t,e,o),r=r.next}while(r!==i)}ts(n,e,t);break;case 1:if(!Pn&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}ts(n,e,t);break;case 21:ts(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,ts(n,e,t),Pn=i):ts(n,e,t);break;default:ts(n,e,t)}}function z0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new lw),e.forEach(function(i){var r=vw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Yi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gn=a.stateNode,Ji=!1;break e;case 3:gn=a.stateNode.containerInfo,Ji=!0;break e;case 4:gn=a.stateNode.containerInfo,Ji=!0;break e}a=a.return}if(gn===null)throw Error(le(160));PS(s,o,r),gn=null,Ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bS(e,n),e=e.sibling}function bS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Yi(e,n),ar(n),i&4){try{Ql(3,n,n.return),Pd(3,n)}catch(_){Vt(n,n.return,_)}try{Ql(5,n,n.return)}catch(_){Vt(n,n.return,_)}}break;case 1:Yi(e,n),ar(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(Yi(e,n),ar(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{gu(r,"")}catch(_){Vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qx(r,s),Sp(a,o);var u=Sp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?iy(r,d):c==="dangerouslySetInnerHTML"?ty(r,d):c==="children"?gu(r,d):p_(r,c,d,u)}switch(a){case"input":_p(r,s);break;case"textarea":Jx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ba(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ba(r,!!s.multiple,s.defaultValue,!0):ba(r,!!s.multiple,s.multiple?[]:"",!1))}r[Au]=s}catch(_){Vt(n,n.return,_)}}break;case 6:if(Yi(e,n),ar(n),i&4){if(n.stateNode===null)throw Error(le(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Vt(n,n.return,_)}}break;case 3:if(Yi(e,n),ar(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Su(e.containerInfo)}catch(_){Vt(n,n.return,_)}break;case 4:Yi(e,n),ar(n);break;case 13:Yi(e,n),ar(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Y_=Xt())),i&4&&z0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(u=Pn)||c,Yi(e,n),Pn=u):Yi(e,n),ar(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ql(4,f,f.return);break;case 1:Ta(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Vt(i,t,_)}}break;case 5:Ta(f,f.return);break;case 22:if(f.memoizedState!==null){H0(d);continue}}p!==null?(p.return=f,Ee=p):H0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ny("display",o))}catch(_){Vt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Vt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yi(e,n),ar(n),i&4&&z0(n);break;case 21:break;default:Yi(e,n),ar(n)}}function ar(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(RS(t)){var i=t;break e}t=t.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(gu(r,""),i.flags&=-33);var s=k0(n);Zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=k0(n);Kp(n,a,o);break;default:throw Error(le(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function cw(n,e,t){Ee=n,LS(n)}function LS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_c;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=_c;var u=Pn;if(_c=o,(Pn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?V0(r):l!==null?(l.return=o,Ee=l):V0(r);for(;s!==null;)Ee=s,LS(s),s=s.sibling;Ee=r,_c=a,Pn=u}B0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):B0(n)}}function B0(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||Pd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&T0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}T0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Su(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Pn||e.flags&512&&$p(e)}catch(f){Vt(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function H0(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function V0(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Pd(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{$p(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{$p(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var fw=Math.ceil,Qf=Qr.ReactCurrentDispatcher,X_=Qr.ReactCurrentOwner,Vi=Qr.ReactCurrentBatchConfig,ft=0,pn=null,Qt=null,yn=0,pi=0,wa=Ws(0),on=0,Du=null,No=0,bd=0,j_=0,Jl=null,$n=null,Y_=0,Qa=1/0,br=null,Jf=!1,Qp=null,As=null,gc=!1,ms=null,ed=0,eu=0,Jp=null,mf=-1,_f=0;function Wn(){return ft&6?Xt():mf!==-1?mf:mf=Xt()}function Cs(n){return n.mode&1?ft&2&&yn!==0?yn&-yn:qT.transition!==null?(_f===0&&(_f=my()),_f):(n=xt,n!==0||(n=window.event,n=n===void 0?16:My(n.type)),n):1}function rr(n,e,t,i){if(50<eu)throw eu=0,Jp=null,Error(le(185));ju(n,t,i),(!(ft&2)||n!==pn)&&(n===pn&&(!(ft&2)&&(bd|=t),on===4&&ds(n,yn)),ei(n,i),t===1&&ft===0&&!(e.mode&1)&&(Qa=Xt()+500,Ad&&Xs()))}function ei(n,e){var t=n.callbackNode;q1(n,e);var i=Of(n,n===pn?yn:0);if(i===0)t!==null&&Zg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Zg(t),e===1)n.tag===0?YT(G0.bind(null,n)):Hy(G0.bind(null,n)),GT(function(){!(ft&6)&&Xs()}),t=null;else{switch(_y(i)){case 1:t=x_;break;case 4:t=hy;break;case 16:t=Ff;break;case 536870912:t=py;break;default:t=Ff}t=zS(t,DS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function DS(n,e){if(mf=-1,_f=0,ft&6)throw Error(le(327));var t=n.callbackNode;if(Ua()&&n.callbackNode!==t)return null;var i=Of(n,n===pn?yn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=td(n,i);else{e=i;var r=ft;ft|=2;var s=IS();(pn!==n||yn!==e)&&(br=null,Qa=Xt()+500,xo(n,e));do try{pw();break}catch(a){NS(n,a)}while(!0);D_(),Qf.current=s,ft=r,Qt!==null?e=0:(pn=null,yn=0,e=on)}if(e!==0){if(e===2&&(r=Ap(n),r!==0&&(i=r,e=em(n,r))),e===1)throw t=Du,xo(n,0),ds(n,i),ei(n,Xt()),t;if(e===6)ds(n,i);else{if(r=n.current.alternate,!(i&30)&&!dw(r)&&(e=td(n,i),e===2&&(s=Ap(n),s!==0&&(i=s,e=em(n,s))),e===1))throw t=Du,xo(n,0),ds(n,i),ei(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:io(n,$n,br);break;case 3:if(ds(n,i),(i&130023424)===i&&(e=Y_+500-Xt(),10<e)){if(Of(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ip(io.bind(null,n,$n,br),e);break}io(n,$n,br);break;case 4:if(ds(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ir(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fw(i/1960))-i,10<i){n.timeoutHandle=Ip(io.bind(null,n,$n,br),i);break}io(n,$n,br);break;case 5:io(n,$n,br);break;default:throw Error(le(329))}}}return ei(n,Xt()),n.callbackNode===t?DS.bind(null,n):null}function em(n,e){var t=Jl;return n.current.memoizedState.isDehydrated&&(xo(n,e).flags|=256),n=td(n,e),n!==2&&(e=$n,$n=t,e!==null&&tm(e)),n}function tm(n){$n===null?$n=n:$n.push.apply($n,n)}function dw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!or(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ds(n,e){for(e&=~j_,e&=~bd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ir(e),i=1<<t;n[t]=-1,e&=~i}}function G0(n){if(ft&6)throw Error(le(327));Ua();var e=Of(n,0);if(!(e&1))return ei(n,Xt()),null;var t=td(n,e);if(n.tag!==0&&t===2){var i=Ap(n);i!==0&&(e=i,t=em(n,i))}if(t===1)throw t=Du,xo(n,0),ds(n,e),ei(n,Xt()),t;if(t===6)throw Error(le(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,io(n,$n,br),ei(n,Xt()),null}function q_(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Qa=Xt()+500,Ad&&Xs())}}function Io(n){ms!==null&&ms.tag===0&&!(ft&6)&&Ua();var e=ft;ft|=1;var t=Vi.transition,i=xt;try{if(Vi.transition=null,xt=1,n)return n()}finally{xt=i,Vi.transition=t,ft=e,!(ft&6)&&Xs()}}function $_(){pi=wa.current,Dt(wa)}function xo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,VT(t)),Qt!==null)for(t=Qt.return;t!==null;){var i=t;switch(P_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vf();break;case 3:Ka(),Dt(Qn),Dt(In),k_();break;case 5:O_(i);break;case 4:Ka();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:N_(i.type._context);break;case 22:case 23:$_()}t=t.return}if(pn=n,Qt=n=Rs(n.current,null),yn=pi=e,on=0,Du=null,j_=bd=No=0,$n=Jl=null,ho!==null){for(e=0;e<ho.length;e++)if(t=ho[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ho=null}return n}function NS(n,e){do{var t=Qt;try{if(D_(),df.current=Zf,Kf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kf=!1}if(Do=0,dn=rn=Bt=null,Zl=!1,Pu=0,X_.current=null,t===null||t.return===null){on=1,Du=e,Qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=yn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=b0(o);if(p!==null){p.flags&=-257,L0(p,o,a,s,e),p.mode&1&&P0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){P0(s,u,e),K_();break e}l=Error(le(426))}}else if(Nt&&a.mode&1){var m=b0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),L0(m,o,a,s,e),b_(Za(l,a));break e}}s=l=Za(l,a),on!==4&&(on=2),Jl===null?Jl=[s]:Jl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=_S(s,l,e);E0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(As===null||!As.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=gS(s,a,e);E0(s,y);break e}}s=s.return}while(s!==null)}FS(t)}catch(C){e=C,Qt===t&&t!==null&&(Qt=t=t.return);continue}break}while(!0)}function IS(){var n=Qf.current;return Qf.current=Zf,n===null?Zf:n}function K_(){(on===0||on===3||on===2)&&(on=4),pn===null||!(No&268435455)&&!(bd&268435455)||ds(pn,yn)}function td(n,e){var t=ft;ft|=2;var i=IS();(pn!==n||yn!==e)&&(br=null,xo(n,e));do try{hw();break}catch(r){NS(n,r)}while(!0);if(D_(),ft=t,Qf.current=i,Qt!==null)throw Error(le(261));return pn=null,yn=0,on}function hw(){for(;Qt!==null;)US(Qt)}function pw(){for(;Qt!==null&&!z1();)US(Qt)}function US(n){var e=kS(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?FS(n):Qt=e,X_.current=null}function FS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=aw(t,e),t!==null){t.flags&=32767,Qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,Qt=null;return}}else if(t=ow(t,e,pi),t!==null){Qt=t;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=n}while(e!==null);on===0&&(on=5)}function io(n,e,t){var i=xt,r=Vi.transition;try{Vi.transition=null,xt=1,mw(n,e,t,i)}finally{Vi.transition=r,xt=i}return null}function mw(n,e,t,i){do Ua();while(ms!==null);if(ft&6)throw Error(le(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(le(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if($1(n,s),n===pn&&(Qt=pn=null,yn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gc||(gc=!0,zS(Ff,function(){return Ua(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vi.transition,Vi.transition=null;var o=xt;xt=1;var a=ft;ft|=4,X_.current=null,uw(n,t),bS(t,n),UT(Dp),kf=!!Lp,Dp=Lp=null,n.current=t,cw(t),B1(),ft=a,xt=o,Vi.transition=s}else n.current=t;if(gc&&(gc=!1,ms=n,ed=r),s=n.pendingLanes,s===0&&(As=null),G1(t.stateNode),ei(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jf)throw Jf=!1,n=Qp,Qp=null,n;return ed&1&&n.tag!==0&&Ua(),s=n.pendingLanes,s&1?n===Jp?eu++:(eu=0,Jp=n):eu=0,Xs(),null}function Ua(){if(ms!==null){var n=_y(ed),e=Vi.transition,t=xt;try{if(Vi.transition=null,xt=16>n?16:n,ms===null)var i=!1;else{if(n=ms,ms=null,ed=0,ft&6)throw Error(le(331));var r=ft;for(ft|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Ql(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(CS(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ql(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pd(9,a)}}catch(C){Vt(a,a.return,C)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(ft=r,Xs(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(Sd,n)}catch{}i=!0}return i}finally{xt=t,Vi.transition=e}}return!1}function W0(n,e,t){e=Za(t,e),e=_S(n,e,1),n=ws(n,e,1),e=Wn(),n!==null&&(ju(n,1,e),ei(n,e))}function Vt(n,e,t){if(n.tag===3)W0(n,n,t);else for(;e!==null;){if(e.tag===3){W0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(As===null||!As.has(i))){n=Za(t,n),n=gS(e,n,1),e=ws(e,n,1),n=Wn(),e!==null&&(ju(e,1,n),ei(e,n));break}}e=e.return}}function _w(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(yn&t)===t&&(on===4||on===3&&(yn&130023424)===yn&&500>Xt()-Y_?xo(n,0):j_|=t),ei(n,e)}function OS(n,e){e===0&&(n.mode&1?(e=ac,ac<<=1,!(ac&130023424)&&(ac=4194304)):e=1);var t=Wn();n=jr(n,e),n!==null&&(ju(n,e,t),ei(n,t))}function gw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),OS(n,t)}function vw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),OS(n,t)}var kS;kS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Qn.current)Zn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Zn=!1,sw(n,e,t);Zn=!!(n.flags&131072)}else Zn=!1,Nt&&e.flags&1048576&&Vy(e,Xf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pf(n,e),n=e.pendingProps;var r=Ya(e,In.current);Ia(e,t),r=B_(null,e,i,n,r,t);var s=H_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jn(i)?(s=!0,Gf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,U_(e),r.updater=Rd,e.stateNode=r,r._reactInternals=e,Hp(e,i,n,t),e=Wp(null,e,i,!0,s,t)):(e.tag=0,Nt&&s&&R_(e),zn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(pf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yw(i),n=Qi(i,n),r){case 0:e=Gp(null,e,i,n,t);break e;case 1:e=I0(null,e,i,n,t);break e;case 11:e=D0(null,e,i,n,t);break e;case 14:e=N0(null,e,i,Qi(i.type,n),t);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Gp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),I0(n,e,i,r,t);case 3:e:{if(SS(e),n===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qy(n,e),qf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Za(Error(le(423)),e),e=U0(n,e,i,t,r);break e}else if(i!==r){r=Za(Error(le(424)),e),e=U0(n,e,i,t,r);break e}else for(yi=Ts(e.stateNode.containerInfo.firstChild),Ei=e,Nt=!0,er=null,t=jy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qa(),i===r){e=Yr(n,e,t);break e}zn(n,e,i,t)}e=e.child}return e;case 5:return $y(e),n===null&&kp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Np(i,r)?o=null:s!==null&&Np(i,s)&&(e.flags|=32),yS(n,e),zn(n,e,o,t),e.child;case 6:return n===null&&kp(e),null;case 13:return MS(n,e,t);case 4:return F_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=$a(e,null,i,t):zn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),D0(n,e,i,r,t);case 7:return zn(n,e,e.pendingProps,t),e.child;case 8:return zn(n,e,e.pendingProps.children,t),e.child;case 12:return zn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(jf,i._currentValue),i._currentValue=o,s!==null)if(or(s.value,o)){if(s.children===r.children&&!Qn.current){e=Yr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),zp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),zp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ia(e,t),r=Wi(r),i=i(r),e.flags|=1,zn(n,e,i,t),e.child;case 14:return i=e.type,r=Qi(i,e.pendingProps),r=Qi(i.type,r),N0(n,e,i,r,t);case 15:return vS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),pf(n,e),e.tag=1,Jn(i)?(n=!0,Gf(e)):n=!1,Ia(e,t),mS(e,i,r),Hp(e,i,r,t),Wp(null,e,i,!0,n,t);case 19:return ES(n,e,t);case 22:return xS(n,e,t)}throw Error(le(156,e.tag))};function zS(n,e){return dy(n,e)}function xw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(n,e,t,i){return new xw(n,e,t,i)}function Z_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yw(n){if(typeof n=="function")return Z_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===__)return 11;if(n===g_)return 14}return 2}function Rs(n,e){var t=n.alternate;return t===null?(t=ki(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function gf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Z_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ma:return yo(t.children,r,s,e);case m_:o=8,r|=8;break;case fp:return n=ki(12,t,e,r|2),n.elementType=fp,n.lanes=s,n;case dp:return n=ki(13,t,e,r),n.elementType=dp,n.lanes=s,n;case hp:return n=ki(19,t,e,r),n.elementType=hp,n.lanes=s,n;case $x:return Ld(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Yx:o=10;break e;case qx:o=9;break e;case __:o=11;break e;case g_:o=14;break e;case us:o=16,i=null;break e}throw Error(le(130,n==null?n:typeof n,""))}return e=ki(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=ki(7,n,i,e),n.lanes=t,n}function Ld(n,e,t,i){return n=ki(22,n,i,e),n.elementType=$x,n.lanes=t,n.stateNode={isHidden:!1},n}function vh(n,e,t){return n=ki(6,n,null,e),n.lanes=t,n}function xh(n,e,t){return e=ki(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Sw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Q_(n,e,t,i,r,s,o,a,l){return n=new Sw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ki(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},U_(s),n}function Mw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function BS(n){if(!n)return Fs;n=n._reactInternals;e:{if(Ho(n)!==n||n.tag!==1)throw Error(le(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(n.tag===1){var t=n.type;if(Jn(t))return By(n,t,e)}return e}function HS(n,e,t,i,r,s,o,a,l){return n=Q_(t,i,!0,n,r,s,o,a,l),n.context=BS(null),t=n.current,i=Wn(),r=Cs(t),s=Hr(i,r),s.callback=e??null,ws(t,s,r),n.current.lanes=r,ju(n,r,i),ei(n,i),n}function Dd(n,e,t,i){var r=e.current,s=Wn(),o=Cs(r);return t=BS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ws(r,e,o),n!==null&&(rr(n,r,o,s),ff(n,r,o)),o}function nd(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function X0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function J_(n,e){X0(n,e),(n=n.alternate)&&X0(n,e)}function Ew(){return null}var VS=typeof reportError=="function"?reportError:function(n){console.error(n)};function eg(n){this._internalRoot=n}Nd.prototype.render=eg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(le(409));Dd(n,e,null,null)};Nd.prototype.unmount=eg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Io(function(){Dd(null,n,null,null)}),e[Xr]=null}};function Nd(n){this._internalRoot=n}Nd.prototype.unstable_scheduleHydration=function(n){if(n){var e=xy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fs.length&&e!==0&&e<fs[t].priority;t++);fs.splice(t,0,n),t===0&&Sy(n)}};function tg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function j0(){}function Tw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=nd(o);s.call(u)}}var o=HS(e,i,n,0,null,!1,!1,"",j0);return n._reactRootContainer=o,n[Xr]=o.current,Tu(n.nodeType===8?n.parentNode:n),Io(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=nd(l);a.call(u)}}var l=Q_(n,0,!1,null,null,!1,!1,"",j0);return n._reactRootContainer=l,n[Xr]=l.current,Tu(n.nodeType===8?n.parentNode:n),Io(function(){Dd(e,l,t,i)}),l}function Ud(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nd(o);a.call(l)}}Dd(e,o,n,r)}else o=Tw(t,e,n,r,i);return nd(o)}gy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Fl(e.pendingLanes);t!==0&&(y_(e,t|1),ei(e,Xt()),!(ft&6)&&(Qa=Xt()+500,Xs()))}break;case 13:Io(function(){var i=jr(n,1);if(i!==null){var r=Wn();rr(i,n,1,r)}}),J_(n,1)}};S_=function(n){if(n.tag===13){var e=jr(n,134217728);if(e!==null){var t=Wn();rr(e,n,134217728,t)}J_(n,134217728)}};vy=function(n){if(n.tag===13){var e=Cs(n),t=jr(n,e);if(t!==null){var i=Wn();rr(t,n,e,i)}J_(n,e)}};xy=function(){return xt};yy=function(n,e){var t=xt;try{return xt=n,e()}finally{xt=t}};Ep=function(n,e,t){switch(e){case"input":if(_p(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=wd(i);if(!r)throw Error(le(90));Zx(i),_p(i,r)}}}break;case"textarea":Jx(n,t);break;case"select":e=t.value,e!=null&&ba(n,!!t.multiple,e,!1)}};oy=q_;ay=Io;var ww={usingClientEntryPoint:!1,Events:[qu,xa,wd,ry,sy,q_]},Tl={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Aw={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=cy(n),n===null?null:n.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||Ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Sd=vc.inject(Aw),yr=vc}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ww;Ri.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(le(200));return Mw(n,e,null,t)};Ri.createRoot=function(n,e){if(!tg(n))throw Error(le(299));var t=!1,i="",r=VS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Q_(n,1,!1,null,null,t,!1,i,r),n[Xr]=e.current,Tu(n.nodeType===8?n.parentNode:n),new eg(e)};Ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(le(188)):(n=Object.keys(n).join(","),Error(le(268,n)));return n=cy(e),n=n===null?null:n.stateNode,n};Ri.flushSync=function(n){return Io(n)};Ri.hydrate=function(n,e,t){if(!Id(e))throw Error(le(200));return Ud(null,n,e,!0,t)};Ri.hydrateRoot=function(n,e,t){if(!tg(n))throw Error(le(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=VS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=HS(e,null,n,1,t??null,r,!1,s,o),n[Xr]=e.current,Tu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nd(e)};Ri.render=function(n,e,t){if(!Id(e))throw Error(le(200));return Ud(null,n,e,!1,t)};Ri.unmountComponentAtNode=function(n){if(!Id(n))throw Error(le(40));return n._reactRootContainer?(Io(function(){Ud(null,null,n,!1,function(){n._reactRootContainer=null,n[Xr]=null})}),!0):!1};Ri.unstable_batchedUpdates=q_;Ri.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Id(t))throw Error(le(200));if(n==null||n._reactInternals===void 0)throw Error(le(38));return Ud(n,e,t,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function GS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GS)}catch(n){console.error(n)}}GS(),Gx.exports=Ri;var Cw=Gx.exports,Y0=Cw;up.createRoot=Y0.createRoot,up.hydrateRoot=Y0.hydrateRoot;function Lr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function WS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ja={duration:.5,overwrite:!1,delay:0},ng,Sn,It,zi=1e8,Tt=1/zi,nm=Math.PI*2,Rw=nm/4,Pw=0,XS=Math.sqrt,bw=Math.cos,Lw=Math.sin,mn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},qr=function(e){return typeof e=="number"},ig=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ti=function(e){return e!==!1},rg=function(){return typeof window<"u"},xc=function(e){return Gt(e)||mn(e)},jS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,Dw=/random\([^)]+\)/g,Nw=/,\s*/g,q0=/(?:-?\.?\d|\.)+/gi,YS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qS=/[+-]=-?[.\d]+/,Iw=/[^,'"\[\]\s]+/gi,Uw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,ur,im,sg,Ai={},id={},$S,KS=function(e){return(id=el(e,Ai))&&li},og=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Nu=function(e,t){return!t&&console.warn(e)},ZS=function(e,t){return e&&(Ai[e]=t)&&id&&(id[e]=t)||Ai},Iu=function(){return 0},Fw={suppressEvents:!0,isStart:!0,kill:!1},vf={suppressEvents:!0,kill:!1},Ow={suppressEvents:!0},ag={},Ps=[],rm={},QS,_i={},Sh={},$0=30,xf=[],lg="",ug=function(e){var t=e[0],i,r;if(Er(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=xf.length;r--&&!xf[r].targetTest(t););i=xf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new MM(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||ug(Bi(e))[0]._gsap},JS=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():ig(i)&&e.getAttribute&&e.getAttribute(t)||i},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},Fa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},kw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},rd=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(rm={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cg=function(e){return!!(e._initted||e._startAt||e.add)},eM=function(e,t,i,r){Ps.length&&!Sn&&rd(),e.render(t,i,!!(Sn&&t<0&&cg(e))),Ps.length&&!Sn&&rd()},tM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Iw).length<2?t:mn(e)?e.trim():e},nM=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},zw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},el=function(e,t){for(var i in t)e[i]=t[i];return e},K0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},sd=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},tu=function(e){var t=e.parent||kt,i=e.keyframes?zw(Nn(e.keyframes)):Ci;if(ti(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Bw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},iM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Fd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Hw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sm=function(e,t,i,r){return e._startAt&&(Sn?e._startAt.revert(vf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Vw=function n(e){return!e||e._ts&&n(e.parent)},Z0=function(e){return e._repeat?tl(e._tTime,e=e.duration()+e._rDelay)*e:0},tl=function(e,t){var i=Math.floor(e=Ft(e/t));return e&&i===e?i-1:i},od=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Od=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},kd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Od(e),i._dirty||Mo(i,e)),e},rM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=od(e.rawTime(),t),(!t._dur||Ku(0,t.totalDuration(),i)-t._tTime>Tt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Tt}},pr=function(e,t,i,r){return t.parent&&Os(t),t._start=Ft((qr(i)?i:i||e!==kt?Di(e,i,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),iM(e,t,"_first","_last",e._sort?"_start":0),om(t)||(e._recent=t),r||rM(e,t),e._ts<0&&kd(e,e._tTime),e},sM=function(e,t){return(Ai.ScrollTrigger||og("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},oM=function(e,t,i,r,s){if(dg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&QS!==vi.frame)return Ps.push(e),e._lazy=[s,r],1},Gw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},om=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ww=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Gw(e)&&!(!e._initted&&om(e))||(e._ts<0||e._dp._ts<0)&&!om(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Ku(0,e._tDur,t),c=tl(l,a),e._yoyo&&c&1&&(o=1-o),c!==tl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Sn||r||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&oM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Tt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&sm(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Os(e,1),!i&&!Sn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},nl=function(e,t,i,r){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!r&&kd(e,e._tTime=e._tDur*a),e.parent&&Od(e),i||Mo(e.parent,e),e},Q0=function(e){return e instanceof Vn?Mo(e):nl(e,e._dur)},jw={_start:0,endTime:Iu,totalDuration:Iu},Di=function n(e,t,i){var r=e.labels,s=e._recent||jw,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Nn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},nu=function(e,t,i){var r=qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;o.immediateRender=ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Ku=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!mn(e)||!(t=Uw.exec(e))?"":t[1]},Yw=function(e,t,i){return js(i,function(r){return Ku(e,t,r)})},am=[].slice,aM=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==ur},qw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||aM(r,1)?(s=i).push.apply(s,Bi(r)):i.push(r)})||i},Bi=function(e,t,i){return It&&!t&&It.selector?It.selector(e):mn(e)&&!i&&(im||!il())?am.call((t||sg).querySelectorAll(e),0):Nn(e)?qw(e,i):aM(e)?am.call(e,0):e?[e]:[]},lm=function(e){return e=Bi(e)[0]||Nu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?Nu("Invalid scope")||sg.createElement("div"):e)}},lM=function(e){return e.sort(function(){return .5-Math.random()})},uM=function(e){if(Gt(e))return e;var t=Er(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return mn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],h,v,x,y,C,A,E,R,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,zi])[1],!M){for(E=-zi;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],h=l?Math.min(M,_)*c-.5:r%M,v=M===zi?0:l?_*d/M-.5:r/M|0,E=0,R=zi,A=0;A<_;A++)x=A%M-h,y=v-(A/M|0),m[A]=C=u?Math.abs(u==="y"?y:x):XS(x*x+y*y),C>E&&(E=C),C<R&&(R=C);r==="random"&&lM(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,i=i&&_<0?xM(i):i}return _=(m[f]-m.min)/m.max||0,Ft(m.b+(i?i(_):_)*m.v)+m.u}},um=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ft(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(qr(i)?0:bn(i))}},cM=function(e,t){var i=Nn(e),r,s;return!i&&Er(e)&&(r=i=e.radius||zi,e.values?(e=Bi(e.values),(s=!qr(e[0]))&&(r*=r)):e=um(e.increment)),js(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=zi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||qr(o)?c:c+bn(o)}:um(e))},fM=function(e,t,i,r){return js(Nn(e)?!t:i===!0?!!(i=0):!r,function(){return Nn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},$w=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Kw=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},Zw=function(e,t,i){return hM(e,t,0,1,i)},dM=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},Qw=function n(e,t,i){var r=t-e;return Nn(e)?dM(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},Jw=function n(e,t,i){var r=t-e,s=r*2;return Nn(e)?dM(e,n(0,e.length-1),t):js(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Uu=function(e){return e.replace(Dw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Nw);return fM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},hM=function(e,t,i,r,s){var o=t-e,a=r-i;return js(s,function(l){return i+((l-e)/o*a||0)})},eA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Nn(e)&&!Nn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=el(Nn(e)?[]:{},e));if(!c){for(l in t)fg.call(a,e,l,"get",t[l]);s=function(g){return mg(g,a)||(o?e.p:e)}}}return js(i,s)},J0=function(e,t,i){var r=e.labels,s=zi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=It,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&rd(),a&&(It=a),c=l?s.apply(u,l):s.call(u),It=o,c},kl=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&Si(e,"onInterrupt"),e},Ca,pM=[],mM=function(e){if(e)if(e=!e.name&&e.default||e,rg()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Iu,render:mg,add:fg,kill:_A,modifier:mA,rawVars:0},o={targetTest:0,get:0,getSetter:pg,aliases:{},register:0};if(il(),e!==r){if(_i[t])return;Ci(r,Ci(sd(e,s),o)),el(r.prototype,el(s,sd(e,o))),_i[r.prop=t]=r,e.targetTest&&(xf.push(r),ag[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ZS(t,r),e.register&&e.register(li,r,ii)}else pM.push(e)},Et=255,zl={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Mh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Et+.5|0},_M=function(e,t,i){var r=e?qr(e)?[e>>16,e>>8&Et,e&Et]:0:zl.black,s,o,a,l,u,c,d,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zl[e])r=zl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(q0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Mh(l+1/3,s,o),r[1]=Mh(l,s,o),r[2]=Mh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(YS),i&&r.length<4&&(r[3]=1),r}else r=e.match(q0)||zl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Et,o=r[1]/Et,a=r[2]/Et,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},gM=function(e){var t=[],i=[],r=-1;return e.split(bs).forEach(function(s){var o=s.match(Aa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},ev=function(e,t,i){var r="",s=(e+r).match(bs),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=_M(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=gM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(bs,"1").split(Aa),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(bs),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},bs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),tA=/hsl[a]?\(/,vM=function(e){var t=e.join(" "),i;if(bs.lastIndex=0,bs.test(t))return i=tA.test(t),e[1]=ev(e[1],i),e[0]=ev(e[0],i,gM(e[1])),!0},Fu,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,g=function _(m){var h=n()-r,v=m===!0,x,y,C,A;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(A=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](C,f,A,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$S&&(!im&&rg()&&(ur=im=window,sg=ur.document||{},Ai.gsap=li,(ur.gsapVersions||(ur.gsapVersions=[])).push(li.version),KS(id||ur.GreenSockGlobals||!ur.gsap&&ur||{}),pM.forEach(mM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Fu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Fu=0,u=Iu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(y,C,A,E){m(y,C,A,E),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),il(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),il=function(){return!Fu&&vi.wake()},at={},nA=/^[\d.\-M][\d.\-,\s]/,iA=/["']/g,rA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(iA,"").trim():+u,r=l.substr(a+1).trim();return t},sA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},oA=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[rA(t[1])]:sA(e).split(",").map(tM)):at._CE&&nA.test(e)?at._CE("",e):i},xM=function(e){return function(t){return 1-e(1-t)}},yM=function n(e,t){for(var i=e._first,r;i;)i instanceof Vn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Eo=function(e,t){return e&&(Gt(e)?e:at[e]||oA(e))||t},Vo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ni(e,function(a){at[a]=Ai[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},SM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/nm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Lw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:SM(a);return s=nm/s,l.config=function(u,c){return n(e,u,c)},l},Th=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:SM(i);return r.config=function(s){return n(e,s)},r};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Vo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Vo("Elastic",Eh("in"),Eh("out"),Eh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Vo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Vo("Circ",function(n){return-(XS(1-n*n)-1)});Vo("Sine",function(n){return n===1?1:-bw(n*Rw)+1});Vo("Back",Th("in"),Th("out"),Th());at.SteppedEase=at.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((r*Ku(0,o,a)|0)+s)*i}}};Ja.ease=at["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return lg+=n+","+n+"Params,"});var MM=function(e,t){this.id=Pw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:JS,this.set=t?t.getSetter:pg},Ou=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nl(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Fu||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(il(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kd(this,i),!s._dp||s.parent||rM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),eM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Z0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Z0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?tl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?od(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Tt?0:this._rts,this.totalTime(Ku(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Od(this),Hw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ft(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?od(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Ow);var r=Sn;return Sn=i,cg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Sn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Q0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Q0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),ti(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ti(r)),this._dur||(this._zTime=-Tt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Tt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:nM,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){kl(this)},n}();Ci(Ou.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Vn=function(n){WS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ti(i.sortChildren),kt&&pr(i.parent||kt,Lr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&sM(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return nu(0,arguments,this),this},t.from=function(r,s,o){return nu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return nu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,tu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Di(this,o),1),this},t.call=function(r,s,o){return pr(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Zt(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,tu(o).immediateRender=ti(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,tu(a).immediateRender=ti(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ft(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,h,v,x,y,C,A,E;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ft(c%m),c===l?(_=this._repeat,f=u):(C=Ft(c/m),_=~~C,_&&_===C&&(f=u,_--),f>u&&(f=u)),C=tl(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),A&&_&1&&(f=u-f,E=1),_!==C&&!this._lock){var R=A&&C&1,M=R===(A&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Ft(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;yM(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Xw(this,Ft(a),Ft(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(Si(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=-Tt);break}}p=g}else{p=this._last;for(var S=r<0?r:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||Sn&&cg(p)),f!==this._time||!this._ts&&!h){v=0,g&&(c+=this._zTime=S?-Tt:Tt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Od(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qr(s)||(s=Di(this,s,r)),!(r instanceof Ou)){if(Nn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Gt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?pr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Zt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Fd(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||Iu,o);return a.data="isPause",this._hasPause=1,pr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_s!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Bi(r),l=this._first,u=qr(s),c;l;)l instanceof Zt?kw(l._targets,a)&&(u?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,g=Zt.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&nl(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),J0(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),J0(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ft(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=zi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ft(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;nl(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(eM(kt,od(r,kt)),QS=vi.frame),vi.frame>=$0){$0+=Ti.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Ti.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Ou);Ci(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var aA=function(e,t,i,r,s,o,a){var l=new ii(this._pt,e,t,0,1,RM,null,s),u=0,c=0,d,f,p,g,_,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Uu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(yh)||[];d=yh.exec(r);)g=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Fa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=yh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(qS.test(r)||h)&&(l.e=0),this._pt=l,l},fg=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?dA:AM:hg,g;if(mn(r)&&(~r.indexOf("random(")&&(r=Uu(r)),r.charAt(1)==="="&&(g=Fa(f,r)+(bn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||cm)return!isNaN(f*r)&&r!==""?(g=new ii(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?pA:CM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&og(t,r),aA.call(this,e,t,f,r,p,l||Ti.stringFilter,u))},lA=function(e,t,i,r,s){if(Gt(e)&&(e=iu(e,s,t,i,r)),!Er(e)||e.style&&e.nodeType||Nn(e)||jS(e))return mn(e)?iu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=iu(e[a],s,t,i,r);return o},EM=function(e,t,i,r,s,o){var a,l,u,c;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:lA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ii(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ca))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},_s,cm,dg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!ng,y=e.timeline,C,A,E,R,M,S,L,U,z,j,$,W,G;if(y&&(!f||!s)&&(s="none"),e._ease=Eo(s,Ja.ease),e._yEase=d?xM(Eo(d===!0?s:d,Ja.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(U=m[0]?So(m[0]).harness:0,W=U&&r[U.prop],C=sd(r,ag),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?vf:Fw),_._lazy=0),o){if(Os(e._startAt=Zt.set(m,Ci({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!_&&ti(l),startAt:null,delay:0,onUpdate:u&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!p)&&e._startAt.revert(vf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),E=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ti(l),immediateRender:a,stagger:0,parent:h},C),W&&(E[U.prop]=W),Os(e._startAt=Zt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(vf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ti(l)||l&&!g,A=0;A<m.length;A++){if(M=m[A],L=M._gsap||ug(m)[A]._gsap,e._ptLookup[A]=j={},rm[L.id]&&Ps.length&&rd(),$=v===m?A:v.indexOf(M),U&&(z=new U).init(M,W||C,e,$,v)!==!1&&(e._pt=R=new ii(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(N){j[N]=R}),z.priority&&(S=1)),!U||W)for(E in C)_i[E]&&(z=EM(E,C,e,$,M,v))?z.priority&&(S=1):j[E]=R=fg.call(e,M,E,"get",C[E],$,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),x&&e._pt&&(_s=e,kt.killTweensOf(M,j,e.globalTime(t)),G=!e.parent,_s=0),e._pt&&l&&(rm[L.id]=1)}S&&PM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&y.render(zi,!0,!0)},uA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return cm=1,e.vars[t]="+=0",dg(e,a),cm=0,l?Nu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Wt(i)+bn(d.e)),d.b&&(d.b=c.s+bn(d.b))},cA=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=el({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},fA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Nn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},iu=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Uu(e):e},TM=lg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wM={};ni(TM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return wM[n]=1});var Zt=function(n){WS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:tu(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=r.parent||kt,x=(Nn(i)||jS(i)?qr(i[0]):"length"in r)?[i]:Bi(i),y,C,A,E,R,M,S,L;if(a._targets=x.length?ug(x):Nu("GSAP target "+i+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||xc(u)||xc(c)){if(r=a.vars,y=a.timeline=new Vn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Lr(a),y._start=0,f||xc(u)||xc(c)){if(E=x.length,S=f&&uM(f),Er(f))for(R in f)~TM.indexOf(R)&&(L||(L={}),L[R]=f[R]);for(C=0;C<E;C++)A=sd(r,wM),A.stagger=0,h&&(A.yoyoEase=h),L&&el(A,L),M=x[C],A.duration=+iu(u,Lr(a),C,M,x),A.delay=(+iu(c,Lr(a),C,M,x)||0)-a._delay,!f&&E===1&&A.delay&&(a._delay=c=A.delay,a._start+=c,A.delay=0),y.to(M,A,S?S(C,M,x):0),y._ease=at.none;y.duration()?u=c=0:a.timeline=0}else if(g){tu(Ci(y.vars.defaults,{ease:"none"})),y._ease=Eo(g.ease||r.ease||"none");var U=0,z,j,$;if(Nn(g))g.forEach(function(W){return y.to(x,W,">")}),y.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||fA(R,g[R],A,g.easeEach);for(R in A)for(z=A[R].sort(function(W,G){return W.t-G.t}),U=0,C=0;C<z.length;C++)j=z[C],$={ease:j.e,duration:(j.t-(C?z[C-1].t:0))/100*u},$[R]=j.v,y.to(x,$,U),U+=$.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!ng&&(_s=Lr(a),kt.killTweensOf(x),_s=0),pr(v,Lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Ft(v._time)&&ti(d)&&Vw(Lr(a))&&v.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-c)||0)),m&&sM(Lr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Tt&&!c?l:r<Tt?0:r,f,p,g,_,m,h,v,x,y;if(!u)Ww(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Ft(d%_),d===l?(g=this._repeat,f=u):(m=Ft(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),h=this._yoyo&&g&1,h&&(y=this._yEase,f=u-f),m=tl(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(x&&this._yEase&&yM(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ft(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(oM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/u),this._from&&(this.ratio=v=1-v),!a&&d&&!s&&!m&&(Si(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&sm(this,r,s,o),Si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&sm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Os(this,1),!s&&!(c&&!a)&&(d||a||h)&&(Si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Fu||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||dg(this,u),c=this._ease(u/this._dur),uA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(kd(this,0),this.parent||iM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||kl(this),this.parent&&o!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Bi(r):a,u=this._ptLookup,c=this._pt,d,f,p,g,_,m,h;if((!s||s==="all")&&Bw(a,l))return s==="all"&&(this._pt=0),kl(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},ni(s,function(v){return _[v]=1}),s=_),s=cA(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,g=f,p={}):(p=d[h]=d[h]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Fd(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&kl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return nu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return nu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Ou);Ci(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new Vn,t=am.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var hg=function(e,t,i){return e[t]=i},AM=function(e,t,i){return e[t](i)},dA=function(e,t,i,r){return e[t](r.fp,i)},hA=function(e,t,i){return e.setAttribute(t,i)},pg=function(e,t){return Gt(e[t])?AM:ig(e[t])&&e.setAttribute?hA:hg},CM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},pA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},RM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},mg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},mA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},_A=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},gA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},PM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ii=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||CM,this.d=l||this,this.set=u||hg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=gA,this.m=i,this.mt=s,this.tween=r},n}();ni(lg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ag[n]=1});Ai.TweenMax=Ai.TweenLite=Zt;Ai.TimelineLite=Ai.TimelineMax=Vn;kt=new Vn({sortChildren:!1,defaults:Ja,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=vM;var To=[],yf={},vA=[],tv=0,xA=0,wh=function(e){return(yf[e]||vA).map(function(t){return t()})},fm=function(){var e=Date.now(),t=[];e-tv>2&&(wh("matchMediaInit"),To.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=ur.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),wh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),tv=e,wh("matchMedia"))},bM=function(){function n(t,i){this.selector=i&&lm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=xA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=It,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=lm(s)),It=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),It=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=It;It=null,i(this),It=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Vn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Zt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=To.length;o--;)To[o].id===this.id&&To.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),yA=function(){function n(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Er(i)||(i={matches:i});var o=new bM(0,s||this.scope),a=o.conditions={},l,u,c;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=ur.matchMedia(i[u]),l&&(To.indexOf(o)<0&&To.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(fm):l.addEventListener("change",fm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ad={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return mM(r)})},timeline:function(e){return new Vn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=Bi(e)[0]);var s=So(e||{}).get,o=i?nM:tM;return i==="native"&&(i=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,i,r)):function(a,l,u){return o((_i[a]&&_i[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=_i[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ca._pt=0,d.init(e,i?c+i:c,Ca,0,[e]),d.render(1,d),Ca._pt&&mg(1,Ca)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Ja.ease)),K0(Ja,e||{})},config:function(e){return K0(Ti,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_i[a]&&!Ai[a]&&Nu(t+" effect requires "+a+" plugin.")}),Sh[t]=function(a,l,u){return i(Bi(a),Ci(l||{},s),u)},o&&(Vn.prototype[t]=function(a,l,u){return this.add(Sh[t](a,Er(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):at},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vn(e),r,s;for(i.smoothChildTiming=ti(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&pr(i,r,r._start-r._delay),r=s;return pr(kt,i,0),i},context:function(e,t){return e?new bM(e,t):It},matchMedia:function(e){return new yA(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||fm()},addEventListener:function(e,t){var i=yf[e]||(yf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Qw,wrapYoyo:Jw,distribute:uM,random:fM,snap:cM,normalize:Zw,getUnit:bn,clamp:Yw,splitColor:_M,toArray:Bi,selector:lm,mapRange:hM,pipe:$w,unitize:Kw,interpolate:eA,shuffle:lM},install:KS,effects:Sh,ticker:vi,updateRoot:Vn.updateRoot,plugins:_i,globalTimeline:kt,core:{PropTween:ii,globals:ZS,Tween:Zt,Timeline:Vn,Animation:Ou,getCache:So,_removeLinkedListItem:Fd,reverting:function(){return Sn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return ng=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ad[n]=Zt[n]});vi.add(Vn.updateRoot);Ca=ad.to({},{duration:0});var SA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},MA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=SA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ah=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},ni(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}MA(a,s)}}}},li=ad.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Sn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ah("roundProps",um),Ah("modifiers"),Ah("snap",cM))||ad;Zt.version=Vn.version=li.version="3.14.2";$S=1;rg()&&il();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nv,gs,Oa,_g,mo,iv,gg,EA=function(){return typeof window<"u"},$r={},ro=180/Math.PI,ka=Math.PI/180,jo=Math.atan2,rv=1e8,vg=/([A-Z])/g,TA=/(left|right|width|margin|padding|x)/i,wA=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},RA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},PA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},LM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},DM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bA=function(e,t,i){return e.style[t]=i},LA=function(e,t,i){return e.style.setProperty(t,i)},DA=function(e,t,i){return e._gsap[t]=i},NA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},IA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},UA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",ri=zt+"Origin",FA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in $r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Nr(r,a)}):this.tfm[e]=o.x?o[e]:Nr(r,e),e===ri&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},NM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},OA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=gg(),(!s||!s.isStart)&&!i[zt]&&(NM(i),r.zOrigin&&i[ri]&&(i[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},IM=function(e,t){var i={target:e,props:[],revert:OA,save:FA};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},UM,hm=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(vg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,rl(t)||t,1)||""},sv="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,i){var r=t||mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(sv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?sv[o]:"")+e},pm=function(){EA()&&window.document&&(nv=window,gs=nv.document,Oa=gs.documentElement,mo=hm("div")||{style:{}},hm("div"),zt=rl(zt),ri=zt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",UM=!!rl("perspective"),gg=li.core.reverting,_g=1)},ov=function(e){var t=e.ownerSVGElement,i=hm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Oa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Oa.removeChild(i),s},av=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},FM=function(e){var t,i;try{t=e.getBBox()}catch{t=ov(e),i=1}return t&&(t.width||t.height)||i||(t=ov(e)),t&&!t.width&&!t.x&&!t.y?{x:+av(e,["x","cx","x1"])||0,y:+av(e,["y","cy","y1"])||0,width:0,height:0}:t},OM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&FM(e))},ks=function(e,t){if(t){var i=e.style,r;t in $r&&t!==ri&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(vg,"-$1").toLowerCase())):i.removeAttribute(t)}},vs=function(e,t,i,r,s,o){var a=new ii(e._pt,t,i,0,1,o?DM:LM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},lv={deg:1,rad:1,turn:1},kA={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=mo.style,l=TA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",g,_,m,h;if(r===o||!s||lv[r]||lv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&OM(e),(p||o==="%")&&($r[t]||~t.indexOf("adius")))return g=h?e.getBBox()[l?"width":"height"]:e[c],Wt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===gs||!_.appendChild)&&(_=gs.body),m=_._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Wt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[c],v?e.style[t]=v:ks(e,t)}else(p||o==="%")&&!kA[Mi(_,"display")]&&(a.position=Mi(e,"position")),_===e&&(a.position="static"),_.appendChild(mo),g=mo[c],_.removeChild(mo),a.position="absolute";return l&&p&&(m=So(_),m.time=vi.time,m.width=_[c]),Wt(f?g*s/d:g&&s?d/g*s:0)},Nr=function(e,t,i,r){var s;return _g||pm(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),$r[t]&&t!=="transform"?(s=zu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ud(Mi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ld[t]&&ld[t](e,t,i)||Mi(e,t)||JS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},zA=function(e,t,i,r){if(!i||i==="none"){var s=rl(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new ii(this._pt,e.style,t,0,1,RM),l=0,u=0,c,d,f,p,g,_,m,h,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Mi(e,t)||r,_?e.style[t]=_:ks(e,t)),c=[i,r],vM(c),i=c[0],r=c[1],f=i.match(Aa)||[],C=r.match(Aa)||[],C.length){for(;d=Aa.exec(r);)m=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Fa(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=Aa.lastIndex-x.length,x||(x=x||Ti.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=zs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?DM:LM;return qS.test(r)&&(a.e=0),this._pt=a,a},uv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=uv[i]||i,t[1]=uv[r]||r,t.join(" ")},HA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],$r[a]&&(l=1,a=a==="transformOrigin"?ri:zt),ks(i,a);l&&(ks(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",zu(i,1),o.uncache=1,NM(r)))}},ld={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ii(e._pt,t,i,0,0,HA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ku=[1,0,0,1,0,0],kM={},zM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cv=function(e){var t=Mi(e,zt);return zM(t)?ku:t.substr(7).match(YS).map(Wt)},xg=function(e,t){var i=e._gsap||So(e),r=e.style,s=cv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ku:s):(s===ku&&!e.offsetParent&&e!==Oa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Oa.appendChild(e)),s=cv(e),l?r.display=l:ks(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Oa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mm=function(e,t,i,r,s,o){var a=e._gsap,l=s||xg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,A,E,R,M;i?l!==ku&&(E=p*m-g*_)&&(R=y*(m/E)+C*(-_/E)+(_*v-m*h)/E,M=y*(-g/E)+C*(p/E)-(p*v-g*h)/E,y=R,C=M):(A=FM(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),C=A.y+(~(x[1]||x[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(h=y-u,v=C-c,a.xOffset=d+(h*p+v*_)-h,a.yOffset=f+(h*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ri]="0px 0px",o&&(vs(o,a,"xOrigin",u,y),vs(o,a,"yOrigin",c,C),vs(o,a,"xOffset",d,a.xOffset),vs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},zu=function(e,t){var i=e._gsap||new MM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Mi(e,ri)||"0",c,d,f,p,g,_,m,h,v,x,y,C,A,E,R,M,S,L,U,z,j,$,W,G,N,K,P,re,xe,Xe,Y,ne;return c=d=f=_=m=h=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&OM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),E=xg(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),mm(e,G||u,!!G||i.originIsAbsolute,i.smooth!==!1,E)),C=i.xOrigin||0,A=i.yOrigin||0,E!==ku&&(L=E[0],U=E[1],z=E[2],j=E[3],c=$=E[4],d=W=E[5],E.length===6?(p=Math.sqrt(L*L+U*U),g=Math.sqrt(j*j+z*z),_=L||U?jo(U,L)*ro:0,v=z||j?jo(z,j)*ro+_:0,v&&(g*=Math.abs(Math.cos(v*ka))),i.svg&&(c-=C-(C*L+A*z),d-=A-(C*U+A*j))):(ne=E[6],Xe=E[7],P=E[8],re=E[9],xe=E[10],Y=E[11],c=E[12],d=E[13],f=E[14],R=jo(ne,xe),m=R*ro,R&&(M=Math.cos(-R),S=Math.sin(-R),G=$*M+P*S,N=W*M+re*S,K=ne*M+xe*S,P=$*-S+P*M,re=W*-S+re*M,xe=ne*-S+xe*M,Y=Xe*-S+Y*M,$=G,W=N,ne=K),R=jo(-z,xe),h=R*ro,R&&(M=Math.cos(-R),S=Math.sin(-R),G=L*M-P*S,N=U*M-re*S,K=z*M-xe*S,Y=j*S+Y*M,L=G,U=N,z=K),R=jo(U,L),_=R*ro,R&&(M=Math.cos(R),S=Math.sin(R),G=L*M+U*S,N=$*M+W*S,U=U*M-L*S,W=W*M-$*S,L=G,$=N),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,h=180-h),p=Wt(Math.sqrt(L*L+U*U+z*z)),g=Wt(Math.sqrt(W*W+ne*ne)),R=jo($,W),v=Math.abs(R)>2e-4?R*ro:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zM(Mi(e,zt)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Wt(p),i.scaleY=Wt(g),i.rotation=Wt(_)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ri]=ud(u)),i.xOffset=i.yOffset=0,i.force3D=Ti.force3D,i.renderTransform=i.svg?GA:UM?BM:VA,i.uncache=0,i},ud=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ch=function(e,t,i){var r=bn(t);return Wt(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},VA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,BM(e,t)},qs="0deg",wl="0px",$s=") ",BM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==qs||c!==qs)){var A=parseFloat(c)*ka,E=Math.sin(A),R=Math.cos(A),M;A=parseFloat(d)*ka,M=Math.cos(A),o=Ch(v,o,E*M*-x),a=Ch(v,a,-Math.sin(A)*-x),l=Ch(v,l,R*M*-x+x)}m!==wl&&(y+="perspective("+m+$s),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==wl||a!==wl||l!==wl)&&(y+=l!==wl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$s),u!==qs&&(y+="rotate("+u+$s),c!==qs&&(y+="rotateY("+c+$s),d!==qs&&(y+="rotateX("+d+$s),(f!==qs||p!==qs)&&(y+="skew("+f+", "+p+$s),(g!==1||_!==1)&&(y+="scale("+g+", "+_+$s),v.style[zt]=y||"translate(0, 0)"},GA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,A,E,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ka,u*=ka,C=Math.cos(l)*d,A=Math.sin(l)*d,E=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=ka,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,A*=M)),C=Wt(C),A=Wt(A),E=Wt(E),R=Wt(R)):(C=d,R=f,A=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=zs(p,"x",o,"px"),y=zs(p,"y",a,"px")),(g||_||m||h)&&(x=Wt(x+g-(g*C+_*E)+m),y=Wt(y+_-(g*A+_*R)+h)),(r||s)&&(M=p.getBBox(),x=Wt(x+r/100*M.width),y=Wt(y+s/100*M.height)),M="matrix("+C+","+A+","+E+","+R+","+x+","+y+")",p.setAttribute("transform",M),v&&(p.style[zt]=M)},WA=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ro:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*rv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*rv)%o-~~(u/o)*o)),e._pt=f=new ii(e._pt,t,i,r,u,AA),f.e=c,f.u="deg",e._props.push(i),f},fv=function(e,t){for(var i in t)e[i]=t[i];return e},XA=function(e,t,i){var r=fv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=zu(i,1),ks(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=zu(i,1),o[zt]=u);for(l in $r)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=bn(u),g=bn(c),d=p!==g?zs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new ii(e._pt,a,l,d,f-d,dm),e._pt.u=g||0,e._props.push(l));fv(a,r)};ni("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ld[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(g){return Nr(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var HM={name:"css",register:pm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,g,_,m,h,v,x,y,C,A,E,R,M;_g||pm(),this.styles=this.styles||IM(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(_i[_]&&EM(_,t,i,r,e,s)))){if(p=typeof c,g=ld[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Uu(c)),g)g(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",bs.lastIndex=0,bs.test(u)||(m=bn(u),h=bn(c),h?m!==h&&(u=zs(e,_,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],mn(u)&&~u.indexOf("random(")&&(u=Uu(u)),bn(u+"")||u==="auto"||(u+=Ti.units[_]||bn(Nr(e,_))||""),(u+"").charAt(1)==="="&&(u=Nr(e,_))):u=Nr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in _r&&(_==="autoAlpha"&&(f===1&&Nr(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),vs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=_r[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in $r,x){if(this.styles.save(_),M=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Mi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Mi(e,"perspective"),S?e.style.perspective=S:ks(e,"perspective")}d=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||zu(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ii(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new ii(this._pt,C,"scaleY",C.scaleY,(v?Fa(C.scaleY,v+d):d)-C.scaleY||0,dm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ri,0,a[ri]),c=BA(c),C.svg?mm(e,c,0,A,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&vs(this,C,"zOrigin",C.zOrigin,h),vs(this,a,_,ud(u),ud(c)));continue}else if(_==="svgOrigin"){mm(e,c,1,A,0,this);continue}else if(_ in kM){WA(this,C,_,f,v?Fa(f,v+c):c);continue}else if(_==="smoothOrigin"){vs(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){XA(this,c,e);continue}}else _ in a||(_=rl(_)||_);if(x||(d||d===0)&&(f||f===0)&&!wA.test(c)&&_ in a)m=(u+"").substr((f+"").length),d||(d=0),h=bn(c)||(_ in Ti.units?Ti.units[_]:m),m!==h&&(f=zs(e,_,u,h)),this._pt=new ii(this._pt,x?C:a,_,f,(v?Fa(f,v+d):d)-f,!x&&(h==="px"||_==="zIndex")&&t.autoRound!==!1?PA:dm),this._pt.u=h||0,x&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=RA):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=CA);else if(_ in a)zA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){og(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}E&&PM(this)},render:function(e,t){if(t.tween._time||!gg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Nr,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in $r&&t!==ri&&(e._gsap.x||Nr(e,"x"))?i&&iv===i?t==="scale"?NA:DA:(iv=i||{})&&(t==="scale"?IA:UA):e.style&&!ig(e.style[t])?bA:~t.indexOf("-")?LA:pg(e,t)},core:{_removeProperty:ks,_getMatrix:xg}};li.utils.checkPrefix=rl;li.core.getStyleSaver=IM;(function(n,e,t,i){var r=ni(n+","+e+","+t,function(s){$r[s]=1});ni(e,function(s){Ti.units[s]="deg",kM[s]=1}),_r[r[13]]=n+","+e,ni(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ti.units[n]="px"});li.registerPlugin(HM);var vn=li.registerPlugin(HM)||li;vn.core.Tween;function jA(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function YA(n,e,t){return e&&jA(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Sf,xi,xs,ys,za,VM,so,ru,GM,kr,Zi,WM,XM=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},jM=1,Ra=[],nt=[],Mr=[],su=Date.now,_m=function(e,t){return t},qA=function(){var e=ru.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,Mr),nt=i,Mr=r,_m=function(o,a){return t[o](a)}},Ls=function(e,t){return~Mr.indexOf(e)&&Mr[Mr.indexOf(e)+1][t]},ou=function(e){return!!~GM.indexOf(e)},Fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},yc="scrollLeft",Sc="scrollTop",gm=function(){return kr&&kr.isPressed||nt.cache++},cd=function(e,t){var i=function r(s){if(s||s===0){jM&&(xi.history.scrollRestoration="manual");var o=kr&&kr.isPressed;s=r.v=Math.round(s)||(kr&&kr.iOS?1:0),e(s),r.cacheID=nt.cache,o&&_m("ss",s)}else(t||nt.cache!==r.cacheID||_m("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:yc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cd(function(n){return arguments.length?xi.scrollTo(n,sn.sc()):xi.pageXOffset||xs[yc]||ys[yc]||za[yc]||0})},sn={s:Sc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:cd(function(n){return arguments.length?xi.scrollTo(Gn.sc(),n):xi.pageYOffset||xs[Sc]||ys[Sc]||za[Sc]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$A=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;ou(e)&&(e=xs.scrollingElement||ys);var s=nt.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Fn(e,"scroll",gm);var a=nt[s+o],l=a||(nt[s+o]=cd(Ls(e,i),!0)||(ou(e)?r:cd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},vm=function(e,t,i){var r=e,s=e,o=su(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=su();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,h=su();return(g||g===0)&&g!==r&&c(g),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-_)*1e3};return{update:c,reset:d,getVelocity:f}},Al=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},YM=function(){ru=xn.core.globals().ScrollTrigger,ru&&ru.core&&qA()},qM=function(e){return xn=e||XM(),!Sf&&xn&&typeof document<"u"&&document.body&&(xi=window,xs=document,ys=xs.documentElement,za=xs.body,GM=[xi,xs,ys,za],xn.utils.clamp,WM=xn.core.context||function(){},so="onpointerenter"in za?"pointer":"mouse",VM=jt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=jt.eventTypes=("ontouchstart"in ys?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ys?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jM=0},500),YM(),Sf=1),Sf};Gn.op=sn;nt.cache=0;var jt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Sf||qM(xn)||console.warn("Please gsap.registerPlugin(Observer)"),ru||YM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,C=i.onRight,A=i.onLeft,E=i.onUp,R=i.onDown,M=i.onChangeX,S=i.onChangeY,L=i.onChange,U=i.onToggleX,z=i.onToggleY,j=i.onHover,$=i.onHoverEnd,W=i.onMove,G=i.ignoreCheck,N=i.isNormalizer,K=i.onGestureStart,P=i.onGestureEnd,re=i.onWheel,xe=i.onEnable,Xe=i.onDisable,Y=i.onClick,ne=i.scrollSpeed,fe=i.capture,ce=i.allowClicks,Ae=i.lockAxis,Pe=i.onLockAxis;this.target=a=qn(a)||ys,this.vars=i,p&&(p=xn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(xi.getComputedStyle(za).lineHeight)||22);var je,Je,D,Fe,Be,qe,ye,V=this,De=0,ke=0,b=i.passive||!c&&i.passive!==!1,T=Bs(a,Gn),X=Bs(a,sn),te=T(),ie=X(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",be=ou(a),oe=a.ownerDocument||xs,me=[0,0,0],Oe=[0,0,0],ae=0,ve=function(){return ae=su()},Ie=function(Ce,lt){return(V.event=Ce)&&p&&$A(Ce.target,p)||lt&&Q&&Ce.pointerType!=="touch"||G&&G(Ce,lt)},He=function(){V._vx.reset(),V._vy.reset(),Je.pause(),d&&d(V)},ge=function(){var Ce=V.deltaX=dv(me),lt=V.deltaY=dv(Oe),de=Math.abs(Ce)>=r,Ge=Math.abs(lt)>=r;L&&(de||Ge)&&L(V,Ce,lt,me,Oe),de&&(C&&V.deltaX>0&&C(V),A&&V.deltaX<0&&A(V),M&&M(V),U&&V.deltaX<0!=De<0&&U(V),De=V.deltaX,me[0]=me[1]=me[2]=0),Ge&&(R&&V.deltaY>0&&R(V),E&&V.deltaY<0&&E(V),S&&S(V),z&&V.deltaY<0!=ke<0&&z(V),ke=V.deltaY,Oe[0]=Oe[1]=Oe[2]=0),(Fe||D)&&(W&&W(V),D&&(m&&D===1&&m(V),v&&v(V),D=0),Fe=!1),qe&&!(qe=!1)&&Pe&&Pe(V),Be&&(re(V),Be=!1),je=0},Ve=function(Ce,lt,de){me[de]+=Ce,Oe[de]+=lt,V._vx.update(Ce),V._vy.update(lt),u?je||(je=requestAnimationFrame(ge)):ge()},Ye=function(Ce,lt){Ae&&!ye&&(V.axis=ye=Math.abs(Ce)>Math.abs(lt)?"x":"y",qe=!0),ye!=="y"&&(me[2]+=Ce,V._vx.update(Ce,!0)),ye!=="x"&&(Oe[2]+=lt,V._vy.update(lt,!0)),u?je||(je=requestAnimationFrame(ge)):ge()},dt=function(Ce){if(!Ie(Ce,1)){Ce=Al(Ce,c);var lt=Ce.clientX,de=Ce.clientY,Ge=lt-V.x,Ue=de-V.y,We=V.isDragging;V.x=lt,V.y=de,(We||(Ge||Ue)&&(Math.abs(V.startX-lt)>=s||Math.abs(V.startY-de)>=s))&&(D||(D=We?2:1),We||(V.isDragging=!0),Ye(Ge,Ue))}},F=V.onPress=function(ze){Ie(ze,1)||ze&&ze.button||(V.axis=ye=null,Je.pause(),V.isPressed=!0,ze=Al(ze),De=ke=0,V.startX=V.x=ze.clientX,V.startY=V.y=ze.clientY,V._vx.reset(),V._vy.reset(),Fn(N?a:oe,Zi[1],dt,b,!0),V.deltaX=V.deltaY=0,x&&x(V))},Z=V.onRelease=function(ze){if(!Ie(ze,1)){Un(N?a:oe,Zi[1],dt,!0);var Ce=!isNaN(V.y-V.startY),lt=V.isDragging,de=lt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ge=Al(ze);!de&&Ce&&(V._vx.reset(),V._vy.reset(),c&&ce&&xn.delayedCall(.08,function(){if(su()-ae>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(oe.createEvent){var Ue=oe.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,xi,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent(Ue)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&lt&&!N&&Je.restart(!0),D&&ge(),h&&lt&&h(V),y&&y(V,de)}},J=function(Ce){return Ce.touches&&Ce.touches.length>1&&(V.isGesturing=!0)&&K(Ce,V.isDragging)},ee=function(){return(V.isGesturing=!1)||P(V)},ue=function(Ce){if(!Ie(Ce)){var lt=T(),de=X();Ve((lt-te)*ne,(de-ie)*ne,1),te=lt,ie=de,d&&Je.restart(!0)}},Le=function(Ce){if(!Ie(Ce)){Ce=Al(Ce,c),re&&(Be=!0);var lt=(Ce.deltaMode===1?l:Ce.deltaMode===2?xi.innerHeight:1)*g;Ve(Ce.deltaX*lt,Ce.deltaY*lt,0),d&&!N&&Je.restart(!0)}},$e=function(Ce){if(!Ie(Ce)){var lt=Ce.clientX,de=Ce.clientY,Ge=lt-V.x,Ue=de-V.y;V.x=lt,V.y=de,Fe=!0,d&&Je.restart(!0),(Ge||Ue)&&Ye(Ge,Ue)}},St=function(Ce){V.event=Ce,j(V)},Mt=function(Ce){V.event=Ce,$(V)},st=function(Ce){return Ie(Ce)||Al(Ce,c)&&Y(V)};Je=V._dc=xn.delayedCall(f||.25,He).pause(),V.deltaX=V.deltaY=0,V._vx=vm(0,50,!0),V._vy=vm(0,50,!0),V.scrollX=T,V.scrollY=X,V.isDragging=V.isGesturing=V.isPressed=!1,WM(this),V.enable=function(ze){return V.isEnabled||(Fn(be?oe:a,"scroll",gm),o.indexOf("scroll")>=0&&Fn(be?oe:a,"scroll",ue,b,fe),o.indexOf("wheel")>=0&&Fn(a,"wheel",Le,b,fe),(o.indexOf("touch")>=0&&VM||o.indexOf("pointer")>=0)&&(Fn(a,Zi[0],F,b,fe),Fn(oe,Zi[2],Z),Fn(oe,Zi[3],Z),ce&&Fn(a,"click",ve,!0,!0),Y&&Fn(a,"click",st),K&&Fn(oe,"gesturestart",J),P&&Fn(oe,"gestureend",ee),j&&Fn(a,so+"enter",St),$&&Fn(a,so+"leave",Mt),W&&Fn(a,so+"move",$e)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Fe=D=!1,V._vx.reset(),V._vy.reset(),te=T(),ie=X(),ze&&ze.type&&F(ze),xe&&xe(V)),V},V.disable=function(){V.isEnabled&&(Ra.filter(function(ze){return ze!==V&&ou(ze.target)}).length||Un(be?oe:a,"scroll",gm),V.isPressed&&(V._vx.reset(),V._vy.reset(),Un(N?a:oe,Zi[1],dt,!0)),Un(be?oe:a,"scroll",ue,fe),Un(a,"wheel",Le,fe),Un(a,Zi[0],F,fe),Un(oe,Zi[2],Z),Un(oe,Zi[3],Z),Un(a,"click",ve,!0),Un(a,"click",st),Un(oe,"gesturestart",J),Un(oe,"gestureend",ee),Un(a,so+"enter",St),Un(a,so+"leave",Mt),Un(a,so+"move",$e),V.isEnabled=V.isPressed=V.isDragging=!1,Xe&&Xe(V))},V.kill=V.revert=function(){V.disable();var ze=Ra.indexOf(V);ze>=0&&Ra.splice(ze,1),kr===V&&(kr=0)},Ra.push(V),N&&ou(a)&&(kr=V),V.enable(_)},YA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();jt.version="3.14.2";jt.create=function(n){return new jt(n)};jt.register=qM;jt.getAll=function(){return Ra.slice()};jt.getById=function(n){return Ra.filter(function(e){return e.vars.id===n})[0]};XM()&&xn.registerPlugin(jt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Te,da,tt,Ct,gi,pt,yg,fd,Bu,au,Bl,Mc,Cn,zd,xm,Bn,hv,pv,ha,$M,Rh,KM,kn,ym,ZM,QM,ls,Sm,Sg,Ba,Mg,lu,Mm,Ph,Ec=1,Rn=Date.now,bh=Rn(),Gi=0,Hl=0,mv=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},_v=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},KA=function n(){return Hl&&requestAnimationFrame(n)},gv=function(){return zd=1},vv=function(){return zd=0},cr=function(e){return e},Vl=function(e){return Math.round(e*1e5)/1e5||0},JM=function(){return typeof window<"u"},eE=function(){return Te||JM()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Uo=function(e){return!!~yg.indexOf(e)},tE=function(e){return(e==="Height"?Mg:tt["inner"+e])||gi["client"+e]||pt["client"+e]},nE=function(e){return Ls(e,"getBoundingClientRect")||(Uo(e)?function(){return Af.width=tt.innerWidth,Af.height=Mg,Af}:function(){return Ir(e)})},ZA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?tE(s):e["client"+s])||0}},QA=function(e,t){return!t||~Mr.indexOf(e)?nE(e):function(){return Af}},gr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-nE(e)()[s]:Uo(e)?(gi[i]||pt[i])-tE(r):e[i]-e["offset"+r])},Tc=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},mi=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Gl=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},Cl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Lh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Yo=Math.abs,iE="left",rE="top",Eg="right",Tg="bottom",wo="width",Ao="height",uu="Right",cu="Left",fu="Top",du="Bottom",Kt="padding",Ui="margin",sl="Width",wg="Height",nn="px",Fi=function(e){return tt.getComputedStyle(e)},JA=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},xv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ir=function(e,t){var i=t&&Fi(e)[xm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},dd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},sE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},eC=function(e){return function(t){return Te.utils.snap(sE(e),t)}},Ag=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},tC=function(e){return function(t,i){return Ag(sE(e))(t,i.direction)}},wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ac=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},yv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cc={toggleActions:"play",anticipatePin:0},hd={top:0,left:0,center:.5,bottom:1,right:1},Mf=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in hd?hd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,g=Ct.createElement("div"),_=Uo(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=_?pt:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===sn?Eg:Tg)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(g,h.children[0]):h.appendChild(g),g._offset=g["offset"+r.op.d2],Ef(g,0,r,v),g},Ef=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",Te.set(e,s)},Qe=[],Em={},Hu,Sv=function(){return Rn()-Gi>34&&(Hu||(Hu=requestAnimationFrame(Vr)))},qo=function(){(!kn||!kn.isPressed||kn.startX>pt.clientWidth)&&(nt.cache++,kn?Hu||(Hu=requestAnimationFrame(Vr)):Vr(),Gi||Oo("scrollStart"),Gi=Rn())},Dh=function(){QM=tt.innerWidth,ZM=tt.innerHeight},Wl=function(e){nt.cache++,(e===!0||!Cn&&!KM&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!ym||QM!==tt.innerWidth||Math.abs(tt.innerHeight-ZM)>tt.innerHeight*.25))&&fd.restart(!0)},Fo={},nC=[],oE=function n(){return cn(it,"scrollEnd",n)||_o(!0)},Oo=function(e){return Fo[e]&&Fo[e].map(function(t){return t()})||nC},hi=[],aE=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},lE=function(){return nt.forEach(function(e){return Ln(e)&&++e.cacheID&&(e.rec=e())})},Cg=function(e,t){var i;for(Bn=0;Bn<Qe.length;Bn++)i=Qe[Bn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));lu=!0,t&&aE(t),t||Oo("revert")},uE=function(e,t){nt.cache++,(t||!Hn)&&nt.forEach(function(i){return Ln(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(tt.history.scrollRestoration=Sg=e)},Hn,Co=0,Mv,iC=function(){if(Mv!==Co){var e=Mv=Co;requestAnimationFrame(function(){return e===Co&&_o(!0)})}},cE=function(){pt.appendChild(Ba),Mg=!kn&&Ba.offsetHeight||tt.innerHeight,pt.removeChild(Ba)},Ev=function(e){return Bu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_o=function(e,t){if(gi=Ct.documentElement,pt=Ct.body,yg=[tt,Ct,gi,pt],Gi&&!e&&!lu){fn(it,"scrollEnd",oE);return}cE(),Hn=it.isRefreshing=!0,lu||lE();var i=Oo("refreshInit");$M&&it.sort(),t||Cg(),nt.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),lu=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Mm=1,Ev(!0),Qe.forEach(function(r){var s=gr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Ev(!1),Mm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),uE(Sg,1),fd.pause(),Co++,Hn=2,Vr(2),Qe.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Hn=it.isRefreshing=!1,Oo("refresh")},Tm=0,Tf=1,hu,Vr=function(e){if(e===2||!Hn&&!lu){it.isUpdating=!0,hu&&hu.update(0);var t=Qe.length,i=Rn(),r=i-bh>=50,s=t&&Qe[0].scroll();if(Tf=Tm>s?-1:1,Hn||(Tm=s),r&&(Gi&&!zd&&i-Gi>200&&(Gi=0,Oo("scrollEnd")),Bl=bh,bh=i),Tf<0){for(Bn=t;Bn-- >0;)Qe[Bn]&&Qe[Bn].update(0,r);Tf=1}else for(Bn=0;Bn<t;Bn++)Qe[Bn]&&Qe[Bn].update(0,r);it.isUpdating=!1}Hu=0},wm=[iE,rE,Tg,Eg,Ui+du,Ui+uu,Ui+fu,Ui+cu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wf=wm.concat([wo,Ao,"boxSizing","max"+sl,"max"+wg,"position",Ui,Kt,Kt+fu,Kt+uu,Kt+du,Kt+cu]),rC=function(e,t,i){Ha(i);var r=e._gsap;if(r.spacerIsNative)Ha(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=wm.length,o=t.style,a=e.style,l;s--;)l=wm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Tg]=a[Eg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wo]=dd(e,Gn)+nn,o[Ao]=dd(e,sn)+nn,o[Kt]=a[Ui]=a[rE]=a[iE]="0",Ha(r),a[wo]=a["max"+sl]=i[wo],a[Ao]=a["max"+wg]=i[Ao],a[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},sC=/([A-Z])/g,Ha=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(sC,"-$1").toLowerCase())}},Pc=function(e){for(var t=wf.length,i=e.style,r=[],s=0;s<t;s++)r.push(wf[s],i[wf[s]]);return r.t=e,r},oC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Af={left:0,top:0},Tv=function(e,t,i,r,s,o,a,l,u,c,d,f,p,g){Ln(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Mf("0"+e.substr(3),i):0));var _=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Gl(e))p&&(e=Te.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Ef(a,i,r,!0);else{Ln(t)&&(t=t(l));var x=(e||"0").split(" "),y,C,A,E;v=qn(t,l)||pt,y=Ir(v)||{},(!y||!y.left&&!y.top)&&Fi(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Ir(v),E?v.style.display=E:v.style.removeProperty("display")),C=Mf(x[0],y[r.d]),A=Mf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-A,a&&Ef(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,M=o._isStart;m="scroll"+r.d2,Ef(o,R,r,M&&R>20||!M&&(d?Math.max(pt[m],gi[m]):o.parentNode[m])<=R+1),d&&(u=Ir(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+nn))}return p&&v&&(m=Ir(v),p.seek(f),h=Ir(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},aC=/(webkit|moz|length|cssText|inset)/i,wv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!aC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},fE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},bc=function(e,t,i){var r={};r[t.p]="+="+i,Te.set(e,r)},Av=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=fE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Te.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),it.isTouch&&fn(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){da||n.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hl){this.update=this.refresh=this.kill=cr;return}i=xv(mi(i)||Gl(i)||i.nodeType?{trigger:i}:i,Cc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:sn,L=!d&&d!==0,U=qn(i.scroller||tt),z=Te.core.getCache(U),j=Uo(U),$=("pinType"in i?i.pinType:Ls(U,"pinType")||j&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],G=L&&i.toggleActions.split(" "),N="markers"in i?i.markers:Cc.markers,K=j?0:parseFloat(Fi(U)["border"+S.p2+sl])||0,P=this,re=i.onRefreshInit&&function(){return i.onRefreshInit(P)},xe=ZA(U,j,S),Xe=QA(U,j),Y=0,ne=0,fe=0,ce=Bs(U,S),Ae,Pe,je,Je,D,Fe,Be,qe,ye,V,De,ke,b,T,X,te,ie,Q,be,oe,me,Oe,ae,ve,Ie,He,ge,Ve,Ye,dt,F,Z,J,ee,ue,Le,$e,St,Mt;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=U,P.scroll=E?E.time.bind(E):ce,Je=ce(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&($M=1,i.refreshPriority===-9999&&(hu=P)),z.tweenScroll=z.tweenScroll||{top:Av(U,sn),left:Av(U,Gn)},P.tweenTo=Ae=z.tweenScroll[S.p],P.scrubDuration=function(de){J=Gl(de)&&de,J?Z?Z.duration(de):Z=Te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:J,paused:!0,onComplete:function(){return h&&h(P)}}):(Z&&Z.progress(1).kill(),Z=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),dt=0,l||(l=r.vars.id)),y&&((!oo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Te.set(j?[pt,gi]:U,{scrollBehavior:"auto"}),nt.forEach(function(de){return Ln(de)&&de.target===(j?Ct.scrollingElement||gi:U)&&(de.smooth=!1)}),je=Ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?eC(r):y.snapTo==="labelsDirectional"?tC(r):y.directional!==!1?function(de,Ge){return Ag(y.snapTo)(de,Rn()-ne<500?0:Ge.direction)}:Te.utils.snap(y.snapTo),ee=y.duration||{min:.1,max:2},ee=oo(ee)?au(ee.min,ee.max):au(ee,ee),ue=Te.delayedCall(y.delay||J/2||.1,function(){var de=ce(),Ge=Rn()-ne<500,Ue=Ae.tween;if((Ge||Math.abs(P.getVelocity())<10)&&!Ue&&!zd&&Y!==de){var We=(de-Fe)/T,Ut=r&&!L?r.totalProgress():We,et=Ge?0:(Ut-F)/(Rn()-Bl)*1e3||0,wt=Te.utils.clamp(-We,1-We,Yo(et/2)*et/.185),en=We+(y.inertia===!1?0:wt),Pt,At,gt=y,ui=gt.onStart,w=gt.onInterrupt,I=gt.onComplete;if(Pt=je(en,P),Gl(Pt)||(Pt=en),At=Math.max(0,Math.round(Fe+Pt*T)),de<=Be&&de>=Fe&&At!==de){if(Ue&&!Ue._initted&&Ue.data<=Yo(At-de))return;y.inertia===!1&&(wt=Pt-We),Ae(At,{duration:ee(Yo(Math.max(Yo(en-Ut),Yo(Pt-Ut))*.185/et/.05||0)),ease:y.ease||"power3",data:Yo(At-de),onInterrupt:function(){return ue.restart(!0)&&w&&w(P)},onComplete:function(){P.update(),Y=ce(),r&&!L&&(Z?Z.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),dt=F=r&&!L?r.totalProgress():P.progress,v&&v(P),I&&I(P)}},de,wt*T,At-de-wt*T),ui&&ui(P,Ae.tween)}}else P.isActive&&Y!==de&&ue.restart(!0)}).pause()),l&&(Em[l]=P),f=P.trigger=qn(f||p!==!0&&p),Mt=f&&f._gsap&&f._gsap.stRevert,Mt&&(Mt=Mt(P)),p=p===!0?f:qn(p),mi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Ui||(g=!g&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:Kt),P.pin=p,Pe=Te.core.getCache(p),Pe.spacer?X=Pe.pinState:(A&&(A=qn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=Pc(A))),Pe.spacer=Q=A||Ct.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Pe.pinState=X=Pc(p)),i.force3D!==!1&&Te.set(p,{force3D:!0}),P.spacer=Q=Pe.spacer,Ye=Fi(p),ve=Ye[g+S.os2],oe=Te.getProperty(p),me=Te.quickSetter(p,S.a,nn),Nh(p,Q,Ye),ie=Pc(p)),N){ke=oo(N)?xv(N,yv):yv,V=Rc("scroller-start",l,U,S,ke,0),De=Rc("scroller-end",l,U,S,ke,0,V),be=V["offset"+S.op.d2];var st=qn(Ls(U,"content")||U);qe=this.markerStart=Rc("start",l,st,S,ke,be,0,E),ye=this.markerEnd=Rc("end",l,st,S,ke,be,0,E),E&&(St=Te.quickSetter([qe,ye],S.a,nn)),!$&&!(Mr.length&&Ls(U,"fixedMarkers")===!0)&&(JA(j?pt:U),Te.set([V,De],{force3D:!0}),He=Te.quickSetter(V,S.a,nn),Ve=Te.quickSetter(De,S.a,nn))}if(E){var ze=E.vars.onUpdate,Ce=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),ze&&ze.apply(E,Ce||[])})}if(P.previous=function(){return Qe[Qe.indexOf(P)-1]},P.next=function(){return Qe[Qe.indexOf(P)+1]},P.revert=function(de,Ge){if(!Ge)return P.kill(!0);var Ue=de!==!1||!P.enabled,We=Cn;Ue!==P.isReverted&&(Ue&&(Le=Math.max(ce(),P.scroll.rec||0),fe=P.progress,$e=r&&r.progress()),qe&&[qe,ye,V,De].forEach(function(Ut){return Ut.style.display=Ue?"none":"block"}),Ue&&(Cn=P,P.update(Ue)),p&&(!C||!P.isActive)&&(Ue?rC(p,Q,X):Nh(p,Q,Fi(p),Ie)),Ue||P.update(Ue),Cn=We,P.isReverted=Ue)},P.refresh=function(de,Ge,Ue,We){if(!((Cn||!P.enabled)&&!Ge)){if(p&&de&&Gi){fn(n,"scrollEnd",oE);return}!Hn&&re&&re(P),Cn=P,Ae.tween&&!Ue&&(Ae.tween.kill(),Ae.tween=0),Z&&Z.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(we){return we.vars.immediateRender&&we.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ut=xe(),et=Xe(),wt=E?E.duration():gr(U,S),en=T<=.01||!T,Pt=0,At=We||0,gt=oo(Ue)?Ue.end:i.end,ui=i.endTrigger||f,w=oo(Ue)?Ue.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),I=P.pinnedContainer=i.pinnedContainer&&qn(i.pinnedContainer,P),H=f&&Math.max(0,Qe.indexOf(P))||0,B=H,O,se,pe,Me,he,Se,Ne,Re,ut,yt,ct,tn,ot;for(N&&oo(Ue)&&(tn=Te.getProperty(V,S.p),ot=Te.getProperty(De,S.p));B-- >0;)Se=Qe[B],Se.end||Se.refresh(0,1)||(Cn=P),Ne=Se.pin,Ne&&(Ne===f||Ne===p||Ne===I)&&!Se.isReverted&&(yt||(yt=[]),yt.unshift(Se),Se.revert(!0,!0)),Se!==Qe[B]&&(H--,B--);for(Ln(w)&&(w=w(P)),w=mv(w,"start",P),Fe=Tv(w,f,Ut,S,ce(),qe,V,P,et,K,$,wt,E,P._startClamp&&"_startClamp")||(p?-.001:0),Ln(gt)&&(gt=gt(P)),mi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(mi(w)?w.split(" ")[0]:"")+gt:(Pt=Mf(gt.substr(2),Ut),gt=mi(w)?w:(E?Te.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Fe):Fe)+Pt,ui=f)),gt=mv(gt,"end",P),Be=Math.max(Fe,Tv(gt||(ui?"100% 0":wt),ui,Ut,S,ce()+Pt,ye,De,P,et,K,$,wt,E,P._endClamp&&"_endClamp"))||-.001,Pt=0,B=H;B--;)Se=Qe[B]||{},Ne=Se.pin,Ne&&Se.start-Se._pinPush<=Fe&&!E&&Se.end>0&&(O=Se.end-(P._startClamp?Math.max(0,Se.start):Se.start),(Ne===f&&Se.start-Se._pinPush<Fe||Ne===I)&&isNaN(w)&&(Pt+=O*(1-Se.progress)),Ne===p&&(At+=O));if(Fe+=Pt,Be+=Pt,P._startClamp&&(P._startClamp+=Pt),P._endClamp&&!Hn&&(P._endClamp=Be||-.001,Be=Math.min(Be,gr(U,S))),T=Be-Fe||(Fe-=.01)&&.001,en&&(fe=Te.utils.clamp(0,1,Te.utils.normalize(Fe,Be,Le))),P._pinPush=At,qe&&Pt&&(O={},O[S.a]="+="+Pt,I&&(O[S.p]="-="+ce()),Te.set([qe,ye],O)),p&&!(Mm&&P.end>=gr(U,S)))O=Fi(p),Me=S===sn,pe=ce(),Oe=parseFloat(oe(S.a))+At,!wt&&Be>1&&(ct=(j?Ct.scrollingElement||gi:U).style,ct={style:ct,value:ct["overflow"+S.a.toUpperCase()]},j&&Fi(pt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+S.a.toUpperCase()]="scroll")),Nh(p,Q,O),ie=Pc(p),se=Ir(p,!0),Re=$&&Bs(U,Me?Gn:sn)(),g?(Ie=[g+S.os2,T+At+nn],Ie.t=Q,B=g===Kt?dd(p,S)+T+At:0,B&&(Ie.push(S.d,B+nn),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=B+nn)),Ha(Ie),I&&Qe.forEach(function(we){we.pin===I&&we.vars.pinSpacing!==!1&&(we._subPinOffset=!0)}),$&&ce(Le)):(B=dd(p,S),B&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=B+nn)),$&&(he={top:se.top+(Me?pe-Fe:Re)+nn,left:se.left+(Me?Re:pe-Fe)+nn,boxSizing:"border-box",position:"fixed"},he[wo]=he["max"+sl]=Math.ceil(se.width)+nn,he[Ao]=he["max"+wg]=Math.ceil(se.height)+nn,he[Ui]=he[Ui+fu]=he[Ui+uu]=he[Ui+du]=he[Ui+cu]="0",he[Kt]=O[Kt],he[Kt+fu]=O[Kt+fu],he[Kt+uu]=O[Kt+uu],he[Kt+du]=O[Kt+du],he[Kt+cu]=O[Kt+cu],te=oC(X,he,C),Hn&&ce(0)),r?(ut=r._initted,Rh(1),r.render(r.duration(),!0,!0),ae=oe(S.a)-Oe+T+At,ge=Math.abs(T-ae)>1,$&&ge&&te.splice(te.length-2,2),r.render(0,!0,!0),ut||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Rh(0)):ae=T,ct&&(ct.value?ct.style["overflow"+S.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+S.a));else if(f&&ce()&&!E)for(se=f.parentNode;se&&se!==pt;)se._pinOffset&&(Fe-=se._pinOffset,Be-=se._pinOffset),se=se.parentNode;yt&&yt.forEach(function(we){return we.revert(!1,!0)}),P.start=Fe,P.end=Be,Je=D=Hn?Le:ce(),!E&&!Hn&&(Je<Le&&ce(Le),P.scroll.rec=0),P.revert(!1,!0),ne=Rn(),ue&&(Y=-1,ue.restart(!0)),Cn=0,r&&L&&(r._initted||$e)&&r.progress()!==$e&&r.progress($e||0,!0).render(r.time(),!0,!0),(en||fe!==P.progress||E||_||r&&!r._initted)&&(r&&!L&&(r._initted||fe||r.vars.immediateRender!==!1)&&r.totalProgress(E&&Fe<-.001&&!fe?Te.utils.normalize(Fe,Be,0):fe,!0),P.progress=en||(Je-Fe)/T===fe?0:fe),p&&g&&(Q._pinOffset=Math.round(P.progress*ae)),Z&&Z.invalidate(),isNaN(tn)||(tn-=Te.getProperty(V,S.p),ot-=Te.getProperty(De,S.p),bc(V,S,tn),bc(qe,S,tn-(We||0)),bc(De,S,ot),bc(ye,S,ot-(We||0))),en&&!Hn&&P.update(),c&&!Hn&&!b&&(b=!0,c(P),b=!1)}},P.getVelocity=function(){return(ce()-D)/(Rn()-Bl)*1e3||0},P.endAnimation=function(){Cl(P.callbackAnimation),r&&(Z?Z.progress(1):r.paused()?L||Cl(r,P.direction<0,1):Cl(r,r.reversed()))},P.labelToScroll=function(de){return r&&r.labels&&(Fe||P.refresh()||Fe)+r.labels[de]/r.duration()*T||0},P.getTrailing=function(de){var Ge=Qe.indexOf(P),Ue=P.direction>0?Qe.slice(0,Ge).reverse():Qe.slice(Ge+1);return(mi(de)?Ue.filter(function(We){return We.vars.preventOverlaps===de}):Ue).filter(function(We){return P.direction>0?We.end<=Fe:We.start>=Be})},P.update=function(de,Ge,Ue){if(!(E&&!Ue&&!de)){var We=Hn===!0?Le:P.scroll(),Ut=de?0:(We-Fe)/T,et=Ut<0?0:Ut>1?1:Ut||0,wt=P.progress,en,Pt,At,gt,ui,w,I,H;if(Ge&&(D=Je,Je=E?ce():We,y&&(F=dt,dt=r&&!L?r.totalProgress():et)),m&&p&&!Cn&&!Ec&&Gi&&(!et&&Fe<We+(We-D)/(Rn()-Bl)*m?et=1e-4:et===1&&Be>We+(We-D)/(Rn()-Bl)*m&&(et=.9999)),et!==wt&&P.enabled){if(en=P.isActive=!!et&&et<1,Pt=!!wt&&wt<1,w=en!==Pt,ui=w||!!et!=!!wt,P.direction=et>wt?1:-1,P.progress=et,ui&&!Cn&&(At=et&&!wt?0:et===1?1:wt===1?2:3,L&&(gt=!w&&G[At+1]!=="none"&&G[At+1]||G[At],H=r&&(gt==="complete"||gt==="reset"||gt in r))),M&&(w||H)&&(H||d||!r)&&(Ln(M)?M(P):P.getTrailing(M).forEach(function(pe){return pe.endAnimation()})),L||(Z&&!Cn&&!Ec?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",et,r._tTime/r._tDur):(Z.vars.totalProgress=et,Z.invalidate().restart())):r&&r.totalProgress(et,!!(Cn&&(ne||de)))),p){if(de&&g&&(Q.style[g+S.os2]=ve),!$)me(Vl(Oe+ae*et));else if(ui){if(I=!de&&et>wt&&Be+1>We&&We+1>=gr(U,S),C)if(!de&&(en||I)){var B=Ir(p,!0),O=We-Fe;wv(p,pt,B.top+(S===sn?O:0)+nn,B.left+(S===sn?0:O)+nn)}else wv(p,Q);Ha(en||I?te:ie),ge&&et<1&&en||me(Oe+(et===1&&!I?ae:0))}}y&&!Ae.tween&&!Cn&&!Ec&&ue.restart(!0),a&&(w||x&&et&&(et<1||!Ph))&&Bu(a.targets).forEach(function(pe){return pe.classList[en||x?"add":"remove"](a.className)}),o&&!L&&!de&&o(P),ui&&!Cn?(L&&(H&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(P)),(w||!Ph)&&(u&&w&&Lh(P,u),W[At]&&Lh(P,W[At]),x&&(et===1?P.kill(!1,1):W[At]=0),w||(At=et===1?1:3,W[At]&&Lh(P,W[At]))),R&&!en&&Math.abs(P.getVelocity())>(Gl(R)?R:2500)&&(Cl(P.callbackAnimation),Z?Z.progress(1):Cl(r,gt==="reverse"?1:!et,1))):L&&o&&!Cn&&o(P)}if(Ve){var se=E?We/E.duration()*(E._caScrollDist||0):We;He(se+(V._isFlipped?1:0)),Ve(se)}St&&St(-We/E.duration()*(E._caScrollDist||0))}},P.enable=function(de,Ge){P.enabled||(P.enabled=!0,fn(U,"resize",Wl),j||fn(U,"scroll",qo),re&&fn(n,"refreshInit",re),de!==!1&&(P.progress=fe=0,Je=D=Y=ce()),Ge!==!1&&P.refresh())},P.getTween=function(de){return de&&Ae?Ae.tween:Z},P.setPositions=function(de,Ge,Ue,We){if(E){var Ut=E.scrollTrigger,et=E.duration(),wt=Ut.end-Ut.start;de=Ut.start+wt*de/et,Ge=Ut.start+wt*Ge/et}P.refresh(!1,!1,{start:_v(de,Ue&&!!P._startClamp),end:_v(Ge,Ue&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(de){if(Ie&&de){var Ge=Ie.indexOf(S.d)+1;Ie[Ge]=parseFloat(Ie[Ge])+de+nn,Ie[1]=parseFloat(Ie[1])+de+nn,Ha(Ie)}},P.disable=function(de,Ge){if(de!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Ge||Z&&Z.pause(),Le=0,Pe&&(Pe.uncache=1),re&&cn(n,"refreshInit",re),ue&&(ue.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!j)){for(var Ue=Qe.length;Ue--;)if(Qe[Ue].scroller===U&&Qe[Ue]!==P)return;cn(U,"resize",Wl),j||cn(U,"scroll",qo)}},P.kill=function(de,Ge){P.disable(de,Ge),Z&&!Ge&&Z.kill(),l&&delete Em[l];var Ue=Qe.indexOf(P);Ue>=0&&Qe.splice(Ue,1),Ue===Bn&&Tf>0&&Bn--,Ue=0,Qe.forEach(function(We){return We.scroller===P.scroller&&(Ue=1)}),Ue||Hn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,de&&r.revert({kill:!1}),Ge||r.kill()),qe&&[qe,ye,V,De].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),hu===P&&(hu=0),p&&(Pe&&(Pe.uncache=1),Ue=0,Qe.forEach(function(We){return We.pin===p&&Ue++}),Ue||(Pe.spacer=0)),i.onKill&&i.onKill(P)},Qe.push(P),P.enable(!1,!1),Mt&&Mt(P),r&&r.add&&!T){var lt=P.update;P.update=function(){P.update=lt,nt.cache++,Fe||Be||P.refresh()},Te.delayedCall(.01,P.update),T=.01,Fe=Be=0}else P.refresh();p&&iC()},n.register=function(i){return da||(Te=i||eE(),JM()&&window.document&&n.enable(),da=Hl),da},n.defaults=function(i){if(i)for(var r in i)Cc[r]=i[r];return Cc},n.disable=function(i,r){Hl=0,Qe.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(tt,"wheel",qo),cn(Ct,"scroll",qo),clearInterval(Mc),cn(Ct,"touchcancel",cr),cn(pt,"touchstart",cr),wc(cn,Ct,"pointerdown,touchstart,mousedown",gv),wc(cn,Ct,"pointerup,touchend,mouseup",vv),fd.kill(),Tc(cn);for(var s=0;s<nt.length;s+=3)Ac(cn,nt[s],nt[s+1]),Ac(cn,nt[s],nt[s+2])},n.enable=function(){if(tt=window,Ct=document,gi=Ct.documentElement,pt=Ct.body,Te&&(Bu=Te.utils.toArray,au=Te.utils.clamp,Sm=Te.core.context||cr,Rh=Te.core.suppressOverwrites||cr,Sg=tt.history.scrollRestoration||"auto",Tm=tt.pageYOffset||0,Te.core.globals("ScrollTrigger",n),pt)){Hl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",cE(),KA(),jt.register(Te),n.isTouch=jt.isTouch,ls=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ym=jt.isTouch===1,fn(tt,"wheel",qo),yg=[tt,Ct,gi,pt],Te.matchMedia?(n.matchMedia=function(u){var c=Te.matchMedia(),d;for(d in u)c.add(d,u[d]);return c},Te.addEventListener("matchMediaInit",function(){lE(),Cg()}),Te.addEventListener("matchMediaRevert",function(){return aE()}),Te.addEventListener("matchMedia",function(){_o(0,1),Oo("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return Dh(),Dh})):console.warn("Requires GSAP 3.11.0 or later"),Dh(),fn(Ct,"scroll",qo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Te.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ir(pt),sn.m=Math.round(a.top+sn.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),Mc=setInterval(Sv,250),Te.delayedCall(.5,function(){return Ec=0}),fn(Ct,"touchcancel",cr),fn(pt,"touchstart",cr),wc(fn,Ct,"pointerdown,touchstart,mousedown",gv),wc(fn,Ct,"pointerup,touchend,mouseup",vv),xm=Te.utils.checkPrefix("transform"),wf.push(xm),da=Rn(),fd=Te.delayedCall(.2,_o).pause(),ha=[Ct,"visibilitychange",function(){var u=tt.innerWidth,c=tt.innerHeight;Ct.hidden?(hv=u,pv=c):(hv!==u||pv!==c)&&Wl()},Ct,"DOMContentLoaded",_o,tt,"load",_o,tt,"resize",Wl],Tc(fn),Qe.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)Ac(cn,nt[l],nt[l+1]),Ac(cn,nt[l],nt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Ph=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Mc)||(Mc=r)&&setInterval(Sv,r),"ignoreMobileResize"in i&&(ym=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Tc(cn)||Tc(fn,i.autoRefreshEvents||"none"),KM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=qn(i),o=nt.indexOf(s),a=Uo(s);~o&&nt.splice(o,a?6:2),r&&(a?Mr.unshift(tt,r,pt,r,gi,r):Mr.unshift(s,r))},n.clearMatchMedia=function(i){Qe.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?qn(i):i).getBoundingClientRect(),a=o[s?wo:Ao]*r||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=qn(i));var o=i.getBoundingClientRect(),a=o[s?wo:Ao],l=r==null?a/2:r in hd?hd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},n.killAll=function(i){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Fo.killAll||[];Fo={},r.forEach(function(s){return s()})}},n}();it.version="3.14.2";it.saveStyles=function(n){return n?Bu(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),Sm())}}):hi};it.revert=function(n,e){return Cg(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Wl(!0):(da||it.register())&&_o(!0)};it.update=function(n){return++nt.cache&&Vr(n===!0?2:0)};it.clearScrollMemory=uE;it.maxScroll=function(n,e){return gr(n,e?Gn:sn)};it.getScrollFunc=function(n,e){return Bs(qn(n),e?Gn:sn)};it.getById=function(n){return Em[n]};it.getAll=function(){return Qe.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Gi};it.snapDirectional=Ag;it.addEventListener=function(n,e){var t=Fo[n]||(Fo[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=Fo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=Te.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),fn(it,"refresh",function(){return s=e.batchMax()})),Bu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var Cv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ih=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===gi&&n(pt,t)},Lc={auto:1,scroll:1},lC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Lc[(l=Fi(s)).overflowY]||Lc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Uo(s)&&(Lc[(l=Fi(s)).overflowY]||Lc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},dE=function(e,t,i,r){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&lC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(Ct,jt.eventTypes[0],Pv,!1,!0)},onDisable:function(){return cn(Ct,jt.eventTypes[0],Pv,!0)}})},uC=/(input|label|select|textarea)/i,Rv,Pv=function(e){var t=uC.test(e.target.tagName);(t||Rv)&&(e._gsapAllow=!0,Rv=t)},cC=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=qn(e.target)||gi,c=Te.core.globals().ScrollSmoother,d=c&&c.get(),f=ls&&(e.content&&qn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Bs(u,sn),g=Bs(u,Gn),_=1,m=(jt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,h=0,v=Ln(r)?function(){return r(a)}:function(){return r||2.8},x,y,C=dE(u,e.type,!0,s),A=function(){return y=!1},E=cr,R=cr,M=function(){l=gr(u,sn),R=au(ls?1:0,l),i&&(E=au(0,gr(u,Gn))),x=Co},S=function(){f._gsap.y=Vl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},L=function(){if(y){requestAnimationFrame(A);var N=Vl(a.deltaY/2),K=R(p.v-N);if(f&&K!==p.v+p.offset){p.offset=K-p.v;var P=Vl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=nt.cache,Vr()}return!0}p.offset&&S(),y=!0},U,z,j,$,W=function(){M(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&Te.set(f,{y:"+=0"}),e.ignoreCheck=function(G){return ls&&G.type==="touchmove"&&L()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){y=!1;var G=_;_=Vl((tt.visualViewport&&tt.visualViewport.scale||1)/m),U.pause(),G!==_&&Ih(u,_>1.01?!0:i?!1:"x"),z=g(),j=p(),M(),x=Co},e.onRelease=e.onGestureStart=function(G,N){if(p.offset&&S(),!N)$.restart(!0);else{nt.cache++;var K=v(),P,re;i&&(P=g(),re=P+K*.05*-G.velocityX/.227,K*=Cv(g,P,re,gr(u,Gn)),U.vars.scrollX=E(re)),P=p(),re=P+K*.05*-G.velocityY/.227,K*=Cv(p,P,re,gr(u,sn)),U.vars.scrollY=R(re),U.invalidate().duration(K).play(.01),(ls&&U.vars.scrollY>=l||P>=l-1)&&Te.to({},{onUpdate:W,duration:K})}o&&o(G)},e.onWheel=function(){U._ts&&U.pause(),Rn()-h>1e3&&(x=0,h=Rn())},e.onChange=function(G,N,K,P,re){if(Co!==x&&M(),N&&i&&g(E(P[2]===N?z+(G.startX-G.x):g()+N-P[1])),K){p.offset&&S();var xe=re[2]===K,Xe=xe?j+G.startY-G.y:p()+K-re[1],Y=R(Xe);xe&&Xe!==Y&&(j+=Y-Xe),p(Y)}(K||N)&&Vr()},e.onEnable=function(){Ih(u,i?!1:"x"),it.addEventListener("refresh",W),fn(tt,"resize",W),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Ih(u,!0),cn(tt,"resize",W),it.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=ls,ls&&!p()&&p(1),ls&&Te.ticker.add(cr),$=a._dc,U=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:fE(p,p(),function(){return U.pause()})},onUpdate:Vr,onComplete:$.vars.onComplete}),a};it.sort=function(n){if(Ln(n))return Qe.sort(n);var e=tt.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),Qe.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new jt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return kn;if(n===!0&&kn)return kn.enable();if(n===!1){kn&&kn.kill(),kn=n;return}var e=n instanceof jt?n:cC(n);return kn&&kn.target===e.target&&kn.kill(),Uo(e.target)&&(kn=e),e};it.core={_getVelocityProp:vm,_inputObserver:dE,_scrollers:nt,_proxies:Mr,bridge:{ss:function(){Gi||Oo("scrollStart"),Gi=Rn()},ref:function(){return Cn}}};eE()&&Te.registerPlugin(it);/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let bv=typeof document<"u"?Yt.useLayoutEffect:Yt.useEffect,Lv=n=>n&&!Array.isArray(n)&&typeof n=="object",Dc=[],fC={},hE=vn;const Rg=(n,e=Dc)=>{let t=fC;Lv(n)?(t=n,n=null,e="dependencies"in t?t.dependencies:Dc):Lv(e)&&(t=e,e="dependencies"in t?t.dependencies:Dc),n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:r}=t,s=Yt.useRef(!1),o=Yt.useRef(hE.context(()=>{},i)),a=Yt.useRef(u=>o.current.add(null,u)),l=e&&e.length&&!r;return l&&bv(()=>(s.current=!0,()=>o.current.revert()),Dc),bv(()=>{if(n&&o.current.add(n,i),!l||!s.current)return()=>o.current.revert()},e),{context:o.current,contextSafe:a.current}};Rg.register=n=>{hE=n};Rg.headless=!0;/*!
 * ScrollToPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dn,pE,Gr,vr,Ds,mE,Va,Nc,_E=function(){return typeof window<"u"},gE=function(){return Dn||_E()&&(Dn=window.gsap)&&Dn.registerPlugin&&Dn},vE=function(e){return typeof e=="string"},Dv=function(e){return typeof e=="function"},Vu=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===Gr||e===vr||e===Ds?Math.max(vr[r],Ds[r])-(Gr["inner"+i]||vr[s]||Ds[s]):e[r]-e["offset"+i]},Gu=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===Gr&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=vr[i]!=null?vr:Ds),function(){return e[i]}},dC=function(e,t,i,r){if(Dv(e)&&(e=e(t,i,r)),typeof e!="object")return vE(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Dv(e[o])?e[o](t,i,r):e[o];return s},xE=function(e,t){if(e=mE(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===Gr||t===Ds,s=r?{top:vr.clientTop-(Gr.pageYOffset||vr.scrollTop||Ds.scrollTop||0),left:vr.clientLeft-(Gr.pageXOffset||vr.scrollLeft||Ds.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=Gu(t,"x")(),o.y+=Gu(t,"y")()),o},Nv=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:vE(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?Vu(t,i)-s:Math.min(Vu(t,i),xE(e,t)[i]-s)},Am=function(){Dn=gE(),_E()&&Dn&&typeof document<"u"&&document.body&&(Gr=window,Ds=document.body,vr=document.documentElement,mE=Dn.utils.toArray,Dn.config({autoKillThreshold:7}),Va=Dn.config(),pE=1)},Go={version:"3.14.2",name:"scrollTo",rawVars:1,register:function(e){Dn=e,Am()},init:function(e,t,i,r,s){pE||Am();var o=this,a=Dn.getProperty(e,"scrollSnapType");o.isWin=e===Gr,o.target=e,o.tween=i,t=dC(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Va).autoKill,o.getX=Gu(e,"x"),o.getY=Gu(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Nc||(Nc=Dn.core.globals().ScrollTrigger),Dn.getProperty(e,"scrollBehavior")==="smooth"&&Dn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Nv(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Nv(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,u=t.isWin,c=t.snap,d=t.snapInline,f,p,g,_,m;i;)i.r(e,i.d),i=i._next;f=u||!t.skipX?t.getX():a,p=u||!t.skipY?t.getY():l,g=p-l,_=f-a,m=Va.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>m||_<-m)&&f<Vu(r,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&p<Vu(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),u?Gr.scrollTo(t.skipX?f:t.x,t.skipY?p:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),c&&(e===1||e===0)&&(p=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=p+1,r.scrollLeft=f+1,r.scrollTop=p,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Nc&&Nc.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};Go.max=Vu;Go.getOffset=xE;Go.buildGetter=Gu;Go.config=function(n){Va||Am()||(Va=Dn.config());for(var e in n)Va[e]=n[e]};gE()&&Dn.registerPlugin(Go);vn.registerPlugin(Go);function hC({isGSAPLoaded:n}){const[e,t]=Yt.useState(!1),[i,r]=Yt.useState(!1);Yt.useEffect(()=>{const l=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const s=()=>t(!e),o=()=>t(!1),a=(l,u)=>{l.preventDefault(),o();const c=document.querySelector(u);c&&(n?vn.to(window,{duration:1.5,scrollTo:{y:c,offsetY:80},ease:"power2.inOut"}):c.scrollIntoView({behavior:"smooth",block:"start"}))};return k.jsx("nav",{className:"nav",id:"navigation",style:{background:i?"rgba(15, 15, 15, 0.95)":"rgba(15, 15, 15, 0.9)"},children:k.jsxs("div",{className:"nav__container",children:[k.jsx("a",{href:"#home",className:"nav__logo",onClick:l=>a(l,"#home"),children:"BKP"}),k.jsxs("ul",{className:`nav__menu ${e?"active":""}`,id:"navMenu",children:[k.jsx("li",{children:k.jsx("a",{href:"#home",className:"nav__link",onClick:l=>a(l,"#home"),children:"Home"})}),k.jsx("li",{children:k.jsx("a",{href:"#about",className:"nav__link",onClick:l=>a(l,"#about"),children:"About"})}),k.jsx("li",{children:k.jsx("a",{href:"#portfolio",className:"nav__link",onClick:l=>a(l,"#portfolio"),children:"Portfolio"})}),k.jsx("li",{children:k.jsx("a",{href:"#services",className:"nav__link",onClick:l=>a(l,"#services"),children:"Services"})}),k.jsx("li",{children:k.jsx("a",{href:"#experience",className:"nav__link",onClick:l=>a(l,"#experience"),children:"Experience"})}),k.jsx("li",{children:k.jsx("a",{href:"#testimonials",className:"nav__link",onClick:l=>a(l,"#testimonials"),children:"Testimonials"})}),k.jsx("li",{children:k.jsx("a",{href:"#contact",className:"nav__link",onClick:l=>a(l,"#contact"),children:"Contact"})})]}),k.jsxs("div",{className:`nav__toggle ${e?"active":""}`,id:"navToggle",onClick:s,children:[k.jsx("span",{}),k.jsx("span",{}),k.jsx("span",{})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pg="168",pC=0,Iv=1,mC=2,yE=1,_C=2,Pr=3,Hs=0,si=1,Ur=2,Ns=0,Ga=1,Uv=2,Fv=3,Ov=4,gC=5,uo=100,vC=101,xC=102,yC=103,SC=104,MC=200,EC=201,TC=202,wC=203,Cm=204,Rm=205,AC=206,CC=207,RC=208,PC=209,bC=210,LC=211,DC=212,NC=213,IC=214,UC=0,FC=1,OC=2,pd=3,kC=4,zC=5,BC=6,HC=7,SE=0,VC=1,GC=2,Is=0,WC=1,XC=2,jC=3,YC=4,qC=5,$C=6,KC=7,ME=300,ol=301,al=302,Pm=303,bm=304,Bd=306,Lm=1e3,go=1001,Dm=1002,Hi=1003,ZC=1004,Ic=1005,tr=1006,Uh=1007,vo=1008,Kr=1009,EE=1010,TE=1011,Wu=1012,bg=1013,ko=1014,zr=1015,Zu=1016,Lg=1017,Dg=1018,ll=1020,wE=35902,AE=1021,CE=1022,nr=1023,RE=1024,PE=1025,Wa=1026,ul=1027,bE=1028,Ng=1029,LE=1030,Ig=1031,Ug=1033,Cf=33776,Rf=33777,Pf=33778,bf=33779,Nm=35840,Im=35841,Um=35842,Fm=35843,Om=36196,km=37492,zm=37496,Bm=37808,Hm=37809,Vm=37810,Gm=37811,Wm=37812,Xm=37813,jm=37814,Ym=37815,qm=37816,$m=37817,Km=37818,Zm=37819,Qm=37820,Jm=37821,Lf=36492,e_=36494,t_=36495,DE=36283,n_=36284,i_=36285,r_=36286,QC=3200,JC=3201,eR=0,tR=1,hs="",fr="srgb",Ys="srgb-linear",Fg="display-p3",Hd="display-p3-linear",md="linear",Lt="srgb",_d="rec709",gd="p3",$o=7680,kv=519,nR=512,iR=513,rR=514,NE=515,sR=516,oR=517,aR=518,lR=519,zv=35044,Bv="300 es",Br=2e3,vd=2001;class pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,s_=180/Math.PI;function Qu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Kn(n,e,t){return Math.max(e,Math.min(t,n))}function uR(n,e){return(n%e+e)%e}function Oh(n,e,t){return(1-t)*n+t*e}function Rl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],C=r[2],A=r[5],E=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*A,s[6]=o*h+a*y+l*E,s[1]=u*_+c*v+d*C,s[4]=u*m+c*x+d*A,s[7]=u*h+c*y+d*E,s[2]=f*_+p*v+g*C,s[5]=f*m+p*x+g*A,s[8]=f*h+p*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kh=new Ze;function IE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cR(){const n=xd("canvas");return n.style.display="block",n}const Hv={};function pu(n){n in Hv||(Hv[n]=!0,console.warn(n))}function fR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Vv=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gv=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pl={[Ys]:{transfer:md,primaries:_d,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[fr]:{transfer:Lt,primaries:_d,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hd]:{transfer:md,primaries:gd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Gv),fromReference:n=>n.applyMatrix3(Vv)},[Fg]:{transfer:Lt,primaries:gd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gv),fromReference:n=>n.applyMatrix3(Vv).convertLinearToSRGB()}},dR=new Set([Ys,Hd]),mt={enabled:!0,_workingColorSpace:Ys,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Pl[e].toReference,r=Pl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Pl[n].primaries},getTransfer:function(n){return n===hs?md:Pl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Pl[e].luminanceCoefficients)}};function Xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ko;class hR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ko===void 0&&(Ko=xd("canvas")),Ko.width=e.width,Ko.height=e.height;const i=Ko.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ko}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xa(t[i]/255)*255):t[i]=Xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pR=0;class UE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=Qu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bh(r[o].image)):s.push(Bh(r[o]))}else s=Bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mR=0;class oi extends pl{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,i=go,r=go,s=tr,o=vo,a=nr,l=Kr,u=oi.DEFAULT_ANISOTROPY,c=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=Qu(),this.name="",this.source=new UE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ME)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lm:e.x=e.x-Math.floor(e.x);break;case go:e.x=e.x<0?0:1;break;case Dm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lm:e.y=e.y-Math.floor(e.y);break;case go:e.y=e.y<0?0:1;break;case Dm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=ME;oi.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(h+1)/2,A=(c+f)/4,E=(d+_)/4,R=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _R extends pl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new oi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new UE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zo extends _R{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class FE extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gR extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ju{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||u!==p||c!==g){let m=1-a;const h=l*f+u*p+c*g+d*_,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,h*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+g*y,d=d*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*p-u*f,e[t+1]=l*g+c*f+u*d-a*p,e[t+2]=u*g+c*p+a*f-l*d,e[t+3]=c*g-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"YXZ":this._x=f*c*d+u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"ZXY":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d-f*p*g;break;case"ZYX":this._x=f*c*d-u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d+f*p*g;break;case"YZX":this._x=f*c*d+u*p*g,this._y=u*p*d+f*c*g,this._z=u*c*g-f*p*d,this._w=u*c*d-f*p*g;break;case"XZY":this._x=f*c*d-u*p*g,this._y=u*p*d-f*c*g,this._z=u*c*g+f*p*d,this._w=u*c*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new q,Wv=new Ju;class ec{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uc.copy(i.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bl),Fc.subVectors(this.max,bl),Zo.subVectors(e.a,bl),Qo.subVectors(e.b,bl),Jo.subVectors(e.c,bl),ns.subVectors(Qo,Zo),is.subVectors(Jo,Qo),Ks.subVectors(Zo,Jo);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ks.z,Ks.y,ns.z,0,-ns.x,is.z,0,-is.x,Ks.z,0,-Ks.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ks.y,Ks.x,0];return!Vh(t,Zo,Qo,Jo,Fc)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,Zo,Qo,Jo,Fc))?!1:(Oc.crossVectors(ns,is),t=[Oc.x,Oc.y,Oc.z],Vh(t,Zo,Qo,Jo,Fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new q,new q,new q,new q,new q,new q,new q,new q],qi=new q,Uc=new ec,Zo=new q,Qo=new q,Jo=new q,ns=new q,is=new q,Ks=new q,bl=new q,Fc=new q,Oc=new q,Zs=new q;function Vh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const vR=new ec,Ll=new q,Gh=new q;class Vd{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ll.subVectors(e,this.center);const t=Ll.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ll,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ll.copy(e.center).add(Gh)),this.expandByPoint(Ll.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new q,Wh=new q,kc=new q,rs=new q,Xh=new q,zc=new q,jh=new q;class OE{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wh.copy(e).add(t).multiplyScalar(.5),kc.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Wh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kc),a=rs.dot(this.direction),l=-rs.dot(kc),u=rs.lengthSq(),c=Math.abs(1-o*o);let d,f,p,g;if(c>0)if(d=o*l-a,f=o*a-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wh).addScaledVector(kc,f),p}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const i=wr.dot(this.direction),r=wr.dot(wr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,r,s){Xh.subVectors(t,e),zc.subVectors(i,e),jh.crossVectors(Xh,zc);let o=this.direction.dot(jh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(zc.crossVectors(rs,zc));if(l<0)return null;const u=a*this.direction.dot(Xh.cross(rs));if(u<0||l+u>o)return null;const c=-a*rs.dot(jh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ea.setFromMatrixColumn(e,0).length(),s=1/ea.setFromMatrixColumn(e,1).length(),o=1/ea.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,g=u*c,_=u*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,g=a*c,_=a*d;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*d,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+_,t[5]=o*c,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*c,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xR,e,yR)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ss.crossVectors(i,fi),ss.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ss.crossVectors(i,fi)),ss.normalize(),Bc.crossVectors(fi,ss),r[0]=ss.x,r[4]=Bc.x,r[8]=fi.x,r[1]=ss.y,r[5]=Bc.y,r[9]=fi.y,r[2]=ss.z,r[6]=Bc.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],C=i[15],A=r[0],E=r[4],R=r[8],M=r[12],S=r[1],L=r[5],U=r[9],z=r[13],j=r[2],$=r[6],W=r[10],G=r[14],N=r[3],K=r[7],P=r[11],re=r[15];return s[0]=o*A+a*S+l*j+u*N,s[4]=o*E+a*L+l*$+u*K,s[8]=o*R+a*U+l*W+u*P,s[12]=o*M+a*z+l*G+u*re,s[1]=c*A+d*S+f*j+p*N,s[5]=c*E+d*L+f*$+p*K,s[9]=c*R+d*U+f*W+p*P,s[13]=c*M+d*z+f*G+p*re,s[2]=g*A+_*S+m*j+h*N,s[6]=g*E+_*L+m*$+h*K,s[10]=g*R+_*U+m*W+h*P,s[14]=g*M+_*z+m*G+h*re,s[3]=v*A+x*S+y*j+C*N,s[7]=v*E+x*L+y*$+C*K,s[11]=v*R+x*U+y*W+C*P,s[15]=v*M+x*z+y*G+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*u-_*f*u+_*l*p-a*m*p-d*l*h+a*f*h,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*h-o*f*h,y=c*_*u-g*d*u+g*a*p-o*_*p-c*a*h+o*d*h,C=g*d*l-c*_*l-g*a*f+o*_*f+c*a*m-o*d*m,A=t*v+i*x+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=v*E,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*h+t*f*h)*E,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*E,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(g*d*s-c*_*s-g*i*p+t*_*p+c*i*h-t*d*h)*E,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*h+t*a*h)*E,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*E,e[12]=C*E,e[13]=(c*_*r-g*d*r+g*i*f-t*_*f-c*i*m+t*d*m)*E,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,g=s*d,_=o*c,m=o*d,h=a*d,v=l*u,x=l*c,y=l*d,C=i.x,A=i.y,E=i.z;return r[0]=(1-(_+h))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+x)*E,r[9]=(m-v)*E,r[10]=(1-(f+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ea.set(r[0],r[1],r[2]).length();const o=ea.set(r[4],r[5],r[6]).length(),a=ea.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const u=1/s,c=1/o,d=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=d,$i.elements[9]*=d,$i.elements[10]*=d,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Br){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Br)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vd)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===Br)g=(o+s)*d,_=-2*d;else if(a===vd)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ea=new q,$i=new Jt,xR=new q(0,0,0),yR=new q(1,1,1),ss=new q,Bc=new q,fi=new q,Xv=new Jt,jv=new Ju;class Zr{constructor(e=0,t=0,i=0,r=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jv.setFromEuler(this),this.setFromQuaternion(jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class kE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SR=0;const Yv=new q,ta=new Ju,Ar=new Jt,Hc=new q,Dl=new q,MR=new q,ER=new Ju,qv=new q(1,0,0),$v=new q(0,1,0),Kv=new q(0,0,1),Zv={type:"added"},TR={type:"removed"},na={type:"childadded",child:null},Yh={type:"childremoved",child:null};class ai extends pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=Qu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new q,t=new Zr,i=new Ju,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ze}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(qv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,t){return Yv.copy(e).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hc.copy(e):Hc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Dl,Hc,this.up):Ar.lookAt(Hc,Dl,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),ta.setFromRotationMatrix(Ar),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zv),na.child=e,this.dispatchEvent(na),na.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(TR),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zv),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,e,MR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dl,ER,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ai.DEFAULT_UP=new q(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new q,Cr=new q,qh=new q,Rr=new q,ia=new q,ra=new q,Qv=new q,$h=new q,Kh=new q,Zh=new q;class mr{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),Cr.subVectors(i,t),qh.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(Cr),l=Ki.dot(qh),u=Cr.dot(Cr),c=Cr.dot(qh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),Cr.subVectors(e,t),Ki.cross(Cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Ki.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ia.subVectors(r,i),ra.subVectors(s,i),$h.subVectors(e,i);const l=ia.dot($h),u=ra.dot($h);if(l<=0&&u<=0)return t.copy(i);Kh.subVectors(e,r);const c=ia.dot(Kh),d=ra.dot(Kh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ia,o);Zh.subVectors(e,s);const p=ia.dot(Zh),g=ra.dot(Zh);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(ra,a);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Qv.subVectors(s,r),a=(d-c)/(d-c+(p-g)),t.copy(r).addScaledVector(Qv,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(ia,o).addScaledVector(ra,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=uR(e,1),t=Kn(t,0,1),i=Kn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qh(o,s,e+1/3),this.g=Qh(o,s,e),this.b=Qh(o,s,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,t=fr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fr){const i=zE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=zh(e.r),this.g=zh(e.g),this.b=zh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fr){return mt.fromWorkingColorSpace(An.copy(this),e),Math.round(Kn(An.r*255,0,255))*65536+Math.round(Kn(An.g*255,0,255))*256+Math.round(Kn(An.b*255,0,255))}getHexString(e=fr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=fr){mt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,r=An.b;return e!==fr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Vc);const i=Oh(os.h,Vc.h,t),r=Oh(os.s,Vc.s,t),s=Oh(os.l,Vc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new vt;vt.NAMES=zE;let wR=0;class tc extends pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=Qu(),this.name="",this.type="Material",this.blending=Ga,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cm,this.blendDst=Rm,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=pd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ga&&(i.blending=this.blending),this.side!==Hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cm&&(i.blendSrc=this.blendSrc),this.blendDst!==Rm&&(i.blendDst=this.blendDst),this.blendEquation!==uo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mu extends tc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=SE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new q,Gc=new _t;class sr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gc.fromBufferAttribute(this,t),Gc.applyMatrix3(e),this.setXY(t,Gc.x,Gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zv&&(e.usage=this.usage),e}}class BE extends sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class HE extends sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ro extends sr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let AR=0;const Li=new Jt,Jh=new ai,sa=new q,di=new ec,Nl=new ec,un=new q;class Jr extends pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Qu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IE(e)?HE:BE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ro(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nl.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(di.min,Nl.min),di.expandByPoint(un),un.addVectors(di.max,Nl.max),di.expandByPoint(un)):(di.expandByPoint(Nl.min),di.expandByPoint(Nl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)un.fromBufferAttribute(a,u),l&&(sa.fromBufferAttribute(e,u),un.add(sa)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new q,l[R]=new q;const u=new q,c=new q,d=new q,f=new _t,p=new _t,g=new _t,_=new q,m=new q;function h(R,M,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[R].add(_),a[M].add(_),a[S].add(_),l[R].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],L=S.start,U=S.count;for(let z=L,j=L+U;z<j;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new q,y=new q,C=new q,A=new q;function E(R){C.fromBufferAttribute(r,R),A.copy(C);const M=a[R];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(A,M);const L=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,M=v.length;R<M;++R){const S=v[R],L=S.start,U=S.count;for(let z=L,j=L+U;z<j;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,u=new q,c=new q,d=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let h=0;h<c;h++)f[g++]=u[p++]}return new sr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jv=new Jt,Qs=new OE,Wc=new Vd,ex=new q,oa=new q,aa=new q,la=new q,ep=new q,Xc=new q,jc=new _t,Yc=new _t,qc=new _t,tx=new q,nx=new q,ix=new q,$c=new q,Kc=new q;class xr extends ai{constructor(e=new Jr,t=new mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(ep.fromBufferAttribute(d,e),o?Xc.addScaledVector(ep,c):Xc.addScaledVector(ep.sub(t),c))}t.add(Xc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wc.copy(i.boundingSphere),Wc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Wc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Wc,ex)===null||Qs.origin.distanceToSquared(ex)>(e.far-e.near)**2))&&(Jv.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(Jv),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const A=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);r=Zc(this,h,e,i,u,c,d,A,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Zc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const A=y,E=y+1,R=y+2;r=Zc(this,h,e,i,u,c,d,A,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,x=m+1,y=m+2;r=Zc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function CR(n,e,t,i,r,s,o,a){let l;if(e.side===si?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hs,a),l===null)return null;Kc.copy(a),Kc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Kc);return u<t.near||u>t.far?null:{distance:u,point:Kc.clone(),object:n}}function Zc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,oa),n.getVertexPosition(l,aa),n.getVertexPosition(u,la);const c=CR(n,e,t,i,oa,aa,la,$c);if(c){r&&(jc.fromBufferAttribute(r,a),Yc.fromBufferAttribute(r,l),qc.fromBufferAttribute(r,u),c.uv=mr.getInterpolation($c,oa,aa,la,jc,Yc,qc,new _t)),s&&(jc.fromBufferAttribute(s,a),Yc.fromBufferAttribute(s,l),qc.fromBufferAttribute(s,u),c.uv1=mr.getInterpolation($c,oa,aa,la,jc,Yc,qc,new _t)),o&&(tx.fromBufferAttribute(o,a),nx.fromBufferAttribute(o,l),ix.fromBufferAttribute(o,u),c.normal=mr.getInterpolation($c,oa,aa,la,tx,nx,ix,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new q,materialIndex:0};mr.getNormal(oa,aa,la,d.normal),c.face=d}return c}class ml extends Jr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ro(u,3)),this.setAttribute("normal",new Ro(c,3)),this.setAttribute("uv",new Ro(d,2));function g(_,m,h,v,x,y,C,A,E,R,M){const S=y/E,L=C/R,U=y/2,z=C/2,j=A/2,$=E+1,W=R+1;let G=0,N=0;const K=new q;for(let P=0;P<W;P++){const re=P*L-z;for(let xe=0;xe<$;xe++){const Xe=xe*S-U;K[_]=Xe*v,K[m]=re*x,K[h]=j,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[h]=A>0?1:-1,c.push(K.x,K.y,K.z),d.push(xe/E),d.push(1-P/R),G+=1}}for(let P=0;P<R;P++)for(let re=0;re<E;re++){const xe=f+re+$*P,Xe=f+re+$*(P+1),Y=f+(re+1)+$*(P+1),ne=f+(re+1)+$*P;l.push(xe,Xe,ne),l.push(Xe,Y,ne),N+=6}a.addGroup(p,N,M),p+=N,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=cl(n[t]);for(const r in i)e[r]=i[r]}return e}function RR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const PR={clone:cl,merge:On};var bR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vs extends tc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bR,this.fragmentShader=LR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cl(e.uniforms),this.uniformsGroups=RR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class GE extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new q,rx=new _t,sx=new _t;class Oi extends GE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=s_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return s_*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,rx,sx),t.subVectors(sx,rx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ua=-90,ca=1;class DR extends ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(ua,ca,e,t);r.layers=this.layers,this.add(r);const s=new Oi(ua,ca,e,t);s.layers=this.layers,this.add(s);const o=new Oi(ua,ca,e,t);o.layers=this.layers,this.add(o);const a=new Oi(ua,ca,e,t);a.layers=this.layers,this.add(a);const l=new Oi(ua,ca,e,t);l.layers=this.layers,this.add(l);const u=new Oi(ua,ca,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class WE extends oi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ol,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NR extends zo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new WE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ml(5,5,5),s=new Vs({name:"CubemapFromEquirect",uniforms:cl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:Ns});s.uniforms.tEquirect.value=t;const o=new xr(r,s),a=t.minFilter;return t.minFilter===vo&&(t.minFilter=tr),new DR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tp=new q,IR=new q,UR=new Ze;class ao{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tp.subVectors(i,t).cross(IR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||UR.getNormalMatrix(e),r=this.coplanarPoint(tp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Vd,Qc=new q;class XE{constructor(e=new ao,t=new ao,i=new ao,r=new ao,s=new ao,o=new ao){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-h).normalize(),i[1].setComponents(l+s,f+u,m+p,y+h).normalize(),i[2].setComponents(l+o,f+c,m+g,y+v).normalize(),i[3].setComponents(l-o,f-c,m-g,y-v).normalize(),i[4].setComponents(l-a,f-d,m-_,y-x).normalize(),t===Br)i[5].setComponents(l+a,f+d,m+_,y+x).normalize();else if(t===vd)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qc.x=r.normal.x>0?e.max.x:e.min.x,Qc.y=r.normal.y>0?e.max.y:e.min.y,Qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function FR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Gd extends Jr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),C=v+1+u*(h+1),A=v+1+u*h;p.push(x,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new Ro(g,3)),this.setAttribute("normal",new Ro(_,3)),this.setAttribute("uv",new Ro(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.width,e.height,e.widthSegments,e.heightSegments)}}var OR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$R=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hP="gl_FragColor = linearToOutputTexel( gl_FragColor );",pP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_P=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$P=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:OR,alphahash_pars_fragment:kR,alphamap_fragment:zR,alphamap_pars_fragment:BR,alphatest_fragment:HR,alphatest_pars_fragment:VR,aomap_fragment:GR,aomap_pars_fragment:WR,batching_pars_vertex:XR,batching_vertex:jR,begin_vertex:YR,beginnormal_vertex:qR,bsdfs:$R,iridescence_fragment:KR,bumpmap_pars_fragment:ZR,clipping_planes_fragment:QR,clipping_planes_pars_fragment:JR,clipping_planes_pars_vertex:eP,clipping_planes_vertex:tP,color_fragment:nP,color_pars_fragment:iP,color_pars_vertex:rP,color_vertex:sP,common:oP,cube_uv_reflection_fragment:aP,defaultnormal_vertex:lP,displacementmap_pars_vertex:uP,displacementmap_vertex:cP,emissivemap_fragment:fP,emissivemap_pars_fragment:dP,colorspace_fragment:hP,colorspace_pars_fragment:pP,envmap_fragment:mP,envmap_common_pars_fragment:_P,envmap_pars_fragment:gP,envmap_pars_vertex:vP,envmap_physical_pars_fragment:PP,envmap_vertex:xP,fog_vertex:yP,fog_pars_vertex:SP,fog_fragment:MP,fog_pars_fragment:EP,gradientmap_pars_fragment:TP,lightmap_pars_fragment:wP,lights_lambert_fragment:AP,lights_lambert_pars_fragment:CP,lights_pars_begin:RP,lights_toon_fragment:bP,lights_toon_pars_fragment:LP,lights_phong_fragment:DP,lights_phong_pars_fragment:NP,lights_physical_fragment:IP,lights_physical_pars_fragment:UP,lights_fragment_begin:FP,lights_fragment_maps:OP,lights_fragment_end:kP,logdepthbuf_fragment:zP,logdepthbuf_pars_fragment:BP,logdepthbuf_pars_vertex:HP,logdepthbuf_vertex:VP,map_fragment:GP,map_pars_fragment:WP,map_particle_fragment:XP,map_particle_pars_fragment:jP,metalnessmap_fragment:YP,metalnessmap_pars_fragment:qP,morphinstance_vertex:$P,morphcolor_vertex:KP,morphnormal_vertex:ZP,morphtarget_pars_vertex:QP,morphtarget_vertex:JP,normal_fragment_begin:eb,normal_fragment_maps:tb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:rb,normalmap_pars_fragment:sb,clearcoat_normal_fragment_begin:ob,clearcoat_normal_fragment_maps:ab,clearcoat_pars_fragment:lb,iridescence_pars_fragment:ub,opaque_fragment:cb,packing:fb,premultiplied_alpha_fragment:db,project_vertex:hb,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:xb,shadowmap_vertex:yb,shadowmask_pars_fragment:Sb,skinbase_vertex:Mb,skinning_pars_vertex:Eb,skinning_vertex:Tb,skinnormal_vertex:wb,specularmap_fragment:Ab,specularmap_pars_fragment:Cb,tonemapping_fragment:Rb,tonemapping_pars_fragment:Pb,transmission_fragment:bb,transmission_pars_fragment:Lb,uv_pars_fragment:Db,uv_pars_vertex:Nb,uv_vertex:Ib,worldpos_vertex:Ub,background_vert:Fb,background_frag:Ob,backgroundCube_vert:kb,backgroundCube_frag:zb,cube_vert:Bb,cube_frag:Hb,depth_vert:Vb,depth_frag:Gb,distanceRGBA_vert:Wb,distanceRGBA_frag:Xb,equirect_vert:jb,equirect_frag:Yb,linedashed_vert:qb,linedashed_frag:$b,meshbasic_vert:Kb,meshbasic_frag:Zb,meshlambert_vert:Qb,meshlambert_frag:Jb,meshmatcap_vert:e2,meshmatcap_frag:t2,meshnormal_vert:n2,meshnormal_frag:i2,meshphong_vert:r2,meshphong_frag:s2,meshphysical_vert:o2,meshphysical_frag:a2,meshtoon_vert:l2,meshtoon_frag:u2,points_vert:c2,points_frag:f2,shadow_vert:d2,shadow_frag:h2,sprite_vert:p2,sprite_frag:m2},_e={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},dr={basic:{uniforms:On([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:On([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:On([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:On([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:On([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:On([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:On([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:On([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:On([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:On([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:On([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:On([_e.common,_e.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:On([_e.lights,_e.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};dr.physical={uniforms:On([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Jc={r:0,b:0,g:0},eo=new Zr,_2=new Jt;function g2(n,e,t,i,r,s,o){const a=new vt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Bd)?(c===void 0&&(c=new xr(new ml(1,1,1),new Vs({name:"BackgroundCubeMaterial",uniforms:cl(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),eo.copy(x.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_2.makeRotationFromEuler(eo)),c.material.toneMapped=mt.getTransfer(y.colorSpace)!==Lt,(d!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new xr(new Gd(2,2),new Vs({name:"BackgroundMaterial",uniforms:cl(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Jc,VE(n)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:m}}function v2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,U,z,j){let $=!1;const W=d(z,U,L);s!==W&&(s=W,u(s.object)),$=p(S,z,U,j),$&&g(S,z,U,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,L,U,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function d(S,L,U){const z=U.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let $=j[L.id];$===void 0&&($={},j[L.id]=$);let W=$[z];return W===void 0&&(W=f(l()),$[z]=W),W}function f(S){const L=[],U=[],z=[];for(let j=0;j<t;j++)L[j]=0,U[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,U,z){const j=s.attributes,$=L.attributes;let W=0;const G=U.getAttributes();for(const N in G)if(G[N].location>=0){const P=j[N];let re=$[N];if(re===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),P===void 0||P.attribute!==re||re&&P.data!==re.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(S,L,U,z){const j={},$=L.attributes;let W=0;const G=U.getAttributes();for(const N in G)if(G[N].location>=0){let P=$[N];P===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const re={};re.attribute=P,P&&P.data&&(re.data=P.data),j[N]=re,W++}s.attributes=j,s.attributesNum=W,s.index=z}function _(){const S=s.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const U=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;U[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),j[S]!==L&&(n.vertexAttribDivisor(S,L),j[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let U=0,z=L.length;U<z;U++)L[U]!==S[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function x(S,L,U,z,j,$,W){W===!0?n.vertexAttribIPointer(S,L,U,j,$):n.vertexAttribPointer(S,L,U,z,j,$)}function y(S,L,U,z){_();const j=z.attributes,$=U.getAttributes(),W=L.defaultAttributeValues;for(const G in $){const N=$[G];if(N.location>=0){let K=j[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const P=K.normalized,re=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const Xe=xe.buffer,Y=xe.type,ne=xe.bytesPerElement,fe=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===bg;if(K.isInterleavedBufferAttribute){const ce=K.data,Ae=ce.stride,Pe=K.offset;if(ce.isInstancedInterleavedBuffer){for(let je=0;je<N.locationSize;je++)h(N.location+je,ce.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let je=0;je<N.locationSize;je++)m(N.location+je);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let je=0;je<N.locationSize;je++)x(N.location+je,re/N.locationSize,Y,P,Ae*ne,(Pe+re/N.locationSize*je)*ne,fe)}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)h(N.location+ce,K.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ce=0;ce<N.locationSize;ce++)x(N.location+ce,re/N.locationSize,Y,P,re*ne,re/N.locationSize*ce*ne,fe)}}else if(W!==void 0){const P=W[G];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(N.location,P);break;case 3:n.vertexAttrib3fv(N.location,P);break;case 4:n.vertexAttrib4fv(N.location,P);break;default:n.vertexAttrib1fv(N.location,P)}}}}v()}function C(){R();for(const S in i){const L=i[S];for(const U in L){const z=L[U];for(const j in z)c(z[j].object),delete z[j];delete L[U]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const U in L){const z=L[U];for(const j in z)c(z[j].object),delete z[j];delete L[U]}delete i[S.id]}function E(S){for(const L in i){const U=i[L];if(U[S.id]===void 0)continue;const z=U[S.id];for(const j in z)c(z[j].object),delete z[j];delete U[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function x2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let g=0;g<d;g++)p+=c[g];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==nr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===Zu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Kr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zr&&!E)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function S2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ao,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(g,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function M2(n){let e=new WeakMap;function t(o,a){return a===Pm?o.mapping=ol:a===bm&&(o.mapping=al),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pm||a===bm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new NR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class E2 extends GE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pa=4,ox=[.125,.215,.35,.446,.526,.582],co=20,np=new E2,ax=new vt;let ip=null,rp=0,sp=0,op=!1;const lo=(1+Math.sqrt(5))/2,fa=1/lo,lx=[new q(-lo,fa,0),new q(lo,fa,0),new q(-fa,0,lo),new q(fa,0,lo),new q(0,lo,-fa),new q(0,lo,fa),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class ux{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ip=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,ef(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ol||e.mapping===al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tr,minFilter:tr,generateMipmaps:!1,type:Zu,format:nr,colorSpace:Ys,depthBuffer:!1},r=cx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T2(s)),this._blurMaterial=w2(s,e,t)}return r}_compileMaterial(e){const t=new xr(this._lodPlanes[0],e);this._renderer.compile(t,np)}_sceneToCubeUV(e,t,i,r){const a=new Oi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(ax),c.toneMapping=Is,c.autoClear=!1;const p=new mu({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),g=new xr(new ml,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(ax),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;ef(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ol||e.mapping===al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ef(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,np)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lx[(r-s-1)%lx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new xr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*co-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):co;m>co&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${co}`);const h=[];let v=0;for(let E=0;E<co;++E){const R=E/_,M=Math.exp(-R*R/2);h.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Pa?r-x+Pa:0),A=4*(this._cubeSize-y);ef(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(d,np)}}function T2(n){const e=[],t=[],i=[];let r=n;const s=n-Pa+1+ox.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Pa?l=ox[o-n+Pa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,R=A>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(M,_*g*A),x.set(f,m*g*A);const S=[A,A,A,A,A,A];y.set(S,h*g*A)}const C=new Jr;C.setAttribute("position",new sr(v,_)),C.setAttribute("uv",new sr(x,m)),C.setAttribute("faceIndex",new sr(y,h)),e.push(C),r>Pa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cx(n,e,t){const i=new zo(n,e,t);return i.texture.mapping=Bd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ef(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function w2(n,e,t){const i=new Float32Array(co),r=new q(0,1,0);return new Vs({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function fx(){return new Vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function dx(){return new Vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Og(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Og(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Pm||l===bm,c=l===ol||l===al;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ux(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new ux(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function C2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function R2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],A=v[x+1],E=v[x+2];f.push(C,A,A,E,E,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,A=x+1,E=x+2;f.push(C,A,A,E,E,C)}}else return;const m=new(IE(f)?HE:BE)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function P2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<_.length;v++)t.update(h,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function b2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function L2(n,e,t){const i=new WeakMap,r=new hn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*A*4*d),R=new FE(E,C,A,d);R.type=zr,R.needsUpdate=!0;const M=y*4;for(let L=0;L<d;L++){const U=h[L],z=v[L],j=x[L],$=C*A*4*L;for(let W=0;W<U.count;W++){const G=W*M;g===!0&&(r.fromBufferAttribute(U,W),E[$+G+0]=r.x,E[$+G+1]=r.y,E[$+G+2]=r.z,E[$+G+3]=0),_===!0&&(r.fromBufferAttribute(z,W),E[$+G+4]=r.x,E[$+G+5]=r.y,E[$+G+6]=r.z,E[$+G+7]=0),m===!0&&(r.fromBufferAttribute(j,W),E[$+G+8]=r.x,E[$+G+9]=r.y,E[$+G+10]=r.z,E[$+G+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new _t(C,A)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function D2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class YE extends oi{constructor(e,t,i,r,s,o,a,l,u,c=Wa){if(c!==Wa&&c!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Wa&&(i=ko),i===void 0&&c===ul&&(i=ll),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Hi,this.minFilter=l!==void 0?l:Hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qE=new oi,hx=new YE(1,1),$E=new FE,KE=new gR,ZE=new WE,px=[],mx=[],_x=new Float32Array(16),gx=new Float32Array(9),vx=new Float32Array(4);function _l(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=px[r];if(s===void 0&&(s=new Float32Array(r),px[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wd(n,e){let t=mx[e];t===void 0&&(t=new Int32Array(e),mx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function N2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function U2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function O2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;vx.set(i),n.uniformMatrix2fv(this.addr,!1,vx),ln(t,i)}}function k2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;gx.set(i),n.uniformMatrix3fv(this.addr,!1,gx),ln(t,i)}}function z2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;_x.set(i),n.uniformMatrix4fv(this.addr,!1,_x),ln(t,i)}}function B2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function V2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function G2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function W2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function X2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function j2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function Y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function q2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hx.compareFunction=NE,s=hx):s=qE,t.setTexture2D(e||s,r)}function $2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||KE,r)}function K2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ZE,r)}function Z2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$E,r)}function Q2(n){switch(n){case 5126:return N2;case 35664:return I2;case 35665:return U2;case 35666:return F2;case 35674:return O2;case 35675:return k2;case 35676:return z2;case 5124:case 35670:return B2;case 35667:case 35671:return H2;case 35668:case 35672:return V2;case 35669:case 35673:return G2;case 5125:return W2;case 36294:return X2;case 36295:return j2;case 36296:return Y2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return K2;case 36289:case 36303:case 36311:case 36292:return Z2}}function J2(n,e){n.uniform1fv(this.addr,e)}function eL(n,e){const t=_l(e,this.size,2);n.uniform2fv(this.addr,t)}function tL(n,e){const t=_l(e,this.size,3);n.uniform3fv(this.addr,t)}function nL(n,e){const t=_l(e,this.size,4);n.uniform4fv(this.addr,t)}function iL(n,e){const t=_l(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rL(n,e){const t=_l(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sL(n,e){const t=_l(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oL(n,e){n.uniform1iv(this.addr,e)}function aL(n,e){n.uniform2iv(this.addr,e)}function lL(n,e){n.uniform3iv(this.addr,e)}function uL(n,e){n.uniform4iv(this.addr,e)}function cL(n,e){n.uniform1uiv(this.addr,e)}function fL(n,e){n.uniform2uiv(this.addr,e)}function dL(n,e){n.uniform3uiv(this.addr,e)}function hL(n,e){n.uniform4uiv(this.addr,e)}function pL(n,e,t){const i=this.cache,r=e.length,s=Wd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qE,s[o])}function mL(n,e,t){const i=this.cache,r=e.length,s=Wd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||KE,s[o])}function _L(n,e,t){const i=this.cache,r=e.length,s=Wd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ZE,s[o])}function gL(n,e,t){const i=this.cache,r=e.length,s=Wd(t,r);an(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$E,s[o])}function vL(n){switch(n){case 5126:return J2;case 35664:return eL;case 35665:return tL;case 35666:return nL;case 35674:return iL;case 35675:return rL;case 35676:return sL;case 5124:case 35670:return oL;case 35667:case 35671:return aL;case 35668:case 35672:return lL;case 35669:case 35673:return uL;case 5125:return cL;case 36294:return fL;case 36295:return dL;case 36296:return hL;case 35678:case 36198:case 36298:case 36306:case 35682:return pL;case 35679:case 36299:case 36307:return mL;case 35680:case 36300:case 36308:case 36293:return _L;case 36289:case 36303:case 36311:case 36292:return gL}}class xL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q2(t.type)}}class yL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vL(t.type)}}class SL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function xx(n,e){n.seq.push(e),n.map[e.id]=e}function ML(n,e,t){const i=n.name,r=i.length;for(ap.lastIndex=0;;){const s=ap.exec(i),o=ap.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){xx(t,u===void 0?new xL(a,n,e):new yL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new SL(a),xx(t,d)),t=d}}}class Df{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ML(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function yx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const EL=37297;let TL=0;function wL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AL(n){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n);let i;switch(e===t?i="":e===gd&&t===_d?i="LinearDisplayP3ToLinearSRGB":e===_d&&t===gd&&(i="LinearSRGBToLinearDisplayP3"),n){case Ys:case Hd:return[i,"LinearTransferOETF"];case fr:case Fg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wL(n.getShaderSource(e),o)}else return r}function CL(n,e){const t=AL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RL(n,e){let t;switch(e){case WC:t="Linear";break;case XC:t="Reinhard";break;case jC:t="Cineon";break;case YC:t="ACESFilmic";break;case $C:t="AgX";break;case KC:t="Neutral";break;case qC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tf=new q;function PL(){mt.getLuminanceCoefficients(tf);const n=tf.x.toFixed(4),e=tf.y.toFixed(4),t=tf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xl).join(`
`)}function LL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xl(n){return n!==""}function Mx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ex(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NL=/^[ \t]*#include +<([\w\d./]+)>/gm;function o_(n){return n.replace(NL,UL)}const IL=new Map;function UL(n,e){let t=Ke[e];if(t===void 0){const i=IL.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return o_(t)}const FL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tx(n){return n.replace(FL,OL)}function OL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_C?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function zL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ol:case al:e="ENVMAP_TYPE_CUBE";break;case Bd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case al:e="ENVMAP_MODE_REFRACTION";break}return e}function HL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case SE:e="ENVMAP_BLENDING_MULTIPLY";break;case VC:e="ENVMAP_BLENDING_MIX";break;case GC:e="ENVMAP_BLENDING_ADD";break}return e}function VL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function GL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kL(t),u=zL(t),c=BL(t),d=HL(t),f=VL(t),p=bL(t),g=LL(s),_=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xl).join(`
`),h.length>0&&(h+=`
`)):(m=[wx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xl).join(`
`),h=[wx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Is?RL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,CL("linearToOutputTexel",t.outputColorSpace),PL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xl).join(`
`)),o=o_(o),o=Mx(o,t),o=Ex(o,t),a=o_(a),a=Mx(a,t),a=Ex(a,t),o=Tx(o),a=Tx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,y=v+h+a,C=yx(r,r.VERTEX_SHADER,x),A=yx(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(A).trim();let $=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,A);else{const G=Sx(r,C,"vertex"),N=Sx(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+G+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||j==="")&&(W=!1);W&&(L.diagnostics={runnable:$,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(C),r.deleteShader(A),R=new Df(r,_),M=DL(r,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,EL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let WL=0;class XL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jL(e),t.set(e,i)),i}}class jL{constructor(e){this.id=WL++,this.code=e,this.usedTimes=0}}function YL(n,e,t,i,r,s,o){const a=new kE,l=new XL,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,U,z){const j=U.fog,$=z.geometry,W=M.isMeshStandardMaterial?U.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),N=G&&G.mapping===Bd?G.image.height:null,K=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const P=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=P!==void 0?P.length:0;let xe=0;$.morphAttributes.position!==void 0&&(xe=1),$.morphAttributes.normal!==void 0&&(xe=2),$.morphAttributes.color!==void 0&&(xe=3);let Xe,Y,ne,fe;if(K){const st=dr[K];Xe=st.vertexShader,Y=st.fragmentShader}else Xe=M.vertexShader,Y=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const ce=n.getRenderTarget(),Ae=z.isInstancedMesh===!0,Pe=z.isBatchedMesh===!0,je=!!M.map,Je=!!M.matcap,D=!!G,Fe=!!M.aoMap,Be=!!M.lightMap,qe=!!M.bumpMap,ye=!!M.normalMap,V=!!M.displacementMap,De=!!M.emissiveMap,ke=!!M.metalnessMap,b=!!M.roughnessMap,T=M.anisotropy>0,X=M.clearcoat>0,te=M.dispersion>0,ie=M.iridescence>0,Q=M.sheen>0,be=M.transmission>0,oe=T&&!!M.anisotropyMap,me=X&&!!M.clearcoatMap,Oe=X&&!!M.clearcoatNormalMap,ae=X&&!!M.clearcoatRoughnessMap,ve=ie&&!!M.iridescenceMap,Ie=ie&&!!M.iridescenceThicknessMap,He=Q&&!!M.sheenColorMap,ge=Q&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,Ye=!!M.specularColorMap,dt=!!M.specularIntensityMap,F=be&&!!M.transmissionMap,Z=be&&!!M.thicknessMap,J=!!M.gradientMap,ee=!!M.alphaMap,ue=M.alphaTest>0,Le=!!M.alphaHash,$e=!!M.extensions;let St=Is;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(St=n.toneMapping);const Mt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:Y,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ys,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:Je,envMap:D,envMapMode:D&&G.mapping,envMapCubeUVHeight:N,aoMap:Fe,lightMap:Be,bumpMap:qe,normalMap:ye,displacementMap:f&&V,emissiveMap:De,normalMapObjectSpace:ye&&M.normalMapType===tR,normalMapTangentSpace:ye&&M.normalMapType===eR,metalnessMap:ke,roughnessMap:b,anisotropy:T,anisotropyMap:oe,clearcoat:X,clearcoatMap:me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ae,dispersion:te,iridescence:ie,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:Q,sheenColorMap:He,sheenRoughnessMap:ge,specularMap:Ve,specularColorMap:Ye,specularIntensityMap:dt,transmission:be,transmissionMap:F,thicknessMap:Z,gradientMap:J,opaque:M.transparent===!1&&M.blending===Ga&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:Le,combine:M.combine,mapUv:je&&_(M.map.channel),aoMapUv:Fe&&_(M.aoMap.channel),lightMapUv:Be&&_(M.lightMap.channel),bumpMapUv:qe&&_(M.bumpMap.channel),normalMapUv:ye&&_(M.normalMap.channel),displacementMapUv:V&&_(M.displacementMap.channel),emissiveMapUv:De&&_(M.emissiveMap.channel),metalnessMapUv:ke&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(M.sheenRoughnessMap.channel),specularMapUv:Ve&&_(M.specularMap.channel),specularColorMapUv:Ye&&_(M.specularColorMap.channel),specularIntensityMapUv:dt&&_(M.specularIntensityMap.channel),transmissionMapUv:F&&_(M.transmissionMap.channel),thicknessMapUv:Z&&_(M.thicknessMap.channel),alphaMapUv:ee&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ye||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(je||ee),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ur,flipSided:M.side===si,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&M.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=u.has(1),Mt.vertexUv2s=u.has(2),Mt.vertexUv3s=u.has(3),u.clear(),Mt}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),M.push(a.mask)}function y(M){const S=g[M.type];let L;if(S){const U=dr[S];L=PR.clone(U.uniforms)}else L=M.uniforms;return L}function C(M,S){let L;for(let U=0,z=c.length;U<z;U++){const j=c[U];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new GL(n,S,M,s),c.push(L)),L}function A(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:R}}function qL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $L(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ax(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||$L),i.length>1&&i.sort(f||Ax),r.length>1&&r.sort(f||Ax)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function KL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cx,n.set(i,[o])):r>=s.length?(o=new Cx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new vt};break;case"SpotLight":t={position:new q,direction:new q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function QL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JL=0;function eD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tD(n){const e=new ZL,t=QL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,s=new Jt,o=new Jt;function a(u){let c=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,x=0,y=0,C=0,A=0,E=0;u.sort(eD);for(let M=0,S=u.length;M<S;M++){const L=u[M],U=L.color,z=L.intensity,j=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=U.r*z,d+=U.g*z,f+=U.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],z);E++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,N=t.get(L);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(U).multiplyScalar(z),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;const G=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,G.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=G.matrix,L.castShadow){const N=t.get(L);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=$,y++}_++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const G=L.shadow,N=t.get(L);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=E,i.version=JL++)}function l(u,c){let d=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Rx(n){const e=new tD(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rx(n),e.set(r,[a])):s>=o.length?(a=new Rx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class iD extends tc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rD extends tc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aD(n,e,t){let i=new XE;const r=new _t,s=new _t,o=new hn,a=new iD({depthPacking:JC}),l=new rD,u={},c=t.maxTextureSize,d={[Hs]:si,[si]:Hs,[Ur]:Ur},f=new Vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:sD,fragmentShader:oD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jr;g.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yE;let h=this.type;this.render=function(A,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ns),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=h!==Pr&&this.type===Pr,j=h===Pr&&this.type!==Pr;for(let $=0,W=A.length;$<W;$++){const G=A[$],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||z===!0||j===!0){const re=this.type!==Pr?{minFilter:Hi,magFilter:Hi}:{};N.map!==null&&N.map.dispose(),N.map=new zo(r.x,r.y,re),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const P=N.getViewportCount();for(let re=0;re<P;re++){const xe=N.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(o),N.updateMatrices(G,re),i=N.getFrustum(),y(E,R,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===Pr&&v(N,R),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function v(A,E){const R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zo(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,R,p,_,null)}function x(A,E,R,M){let S=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=S.uuid,z=E.uuid;let j=u[U];j===void 0&&(j={},u[U]=j);let $=j[z];$===void 0&&($=S.clone(),j[z]=$,E.addEventListener("dispose",C)),S=$}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Pr?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=R}return S}function y(A,E,R,M,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const z=e.update(A),j=A.material;if(Array.isArray(j)){const $=z.groups;for(let W=0,G=$.length;W<G;W++){const N=$[W],K=j[N.materialIndex];if(K&&K.visible){const P=x(A,K,M,S);A.onBeforeShadow(n,A,E,R,z,P,N),n.renderBufferDirect(R,null,z,P,A,N),A.onAfterShadow(n,A,E,R,z,P,N)}}}else if(j.visible){const $=x(A,j,M,S);A.onBeforeShadow(n,A,E,R,z,$,null),n.renderBufferDirect(R,null,z,$,A,null),A.onAfterShadow(n,A,E,R,z,$,null)}}const U=A.children;for(let z=0,j=U.length;z<j;z++)y(U[z],E,R,M,S)}function C(A){A.target.removeEventListener("dispose",C);for(const R in u){const M=u[R],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function lD(n){function e(){let F=!1;const Z=new hn;let J=null;const ee=new hn(0,0,0,0);return{setMask:function(ue){J!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){F=ue},setClear:function(ue,Le,$e,St,Mt){Mt===!0&&(ue*=St,Le*=St,$e*=St),Z.set(ue,Le,$e,St),ee.equals(Z)===!1&&(n.clearColor(ue,Le,$e,St),ee.copy(Z))},reset:function(){F=!1,J=null,ee.set(-1,0,0,0)}}}function t(){let F=!1,Z=null,J=null,ee=null;return{setTest:function(ue){ue?fe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!F&&(n.depthMask(ue),Z=ue)},setFunc:function(ue){if(J!==ue){switch(ue){case UC:n.depthFunc(n.NEVER);break;case FC:n.depthFunc(n.ALWAYS);break;case OC:n.depthFunc(n.LESS);break;case pd:n.depthFunc(n.LEQUAL);break;case kC:n.depthFunc(n.EQUAL);break;case zC:n.depthFunc(n.GEQUAL);break;case BC:n.depthFunc(n.GREATER);break;case HC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ue}},setLocked:function(ue){F=ue},setClear:function(ue){ee!==ue&&(n.clearDepth(ue),ee=ue)},reset:function(){F=!1,Z=null,J=null,ee=null}}}function i(){let F=!1,Z=null,J=null,ee=null,ue=null,Le=null,$e=null,St=null,Mt=null;return{setTest:function(st){F||(st?fe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(st){Z!==st&&!F&&(n.stencilMask(st),Z=st)},setFunc:function(st,ze,Ce){(J!==st||ee!==ze||ue!==Ce)&&(n.stencilFunc(st,ze,Ce),J=st,ee=ze,ue=Ce)},setOp:function(st,ze,Ce){(Le!==st||$e!==ze||St!==Ce)&&(n.stencilOp(st,ze,Ce),Le=st,$e=ze,St=Ce)},setLocked:function(st){F=st},setClear:function(st){Mt!==st&&(n.clearStencil(st),Mt=st)},reset:function(){F=!1,Z=null,J=null,ee=null,ue=null,Le=null,$e=null,St=null,Mt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,x=null,y=null,C=null,A=new vt(0,0,0),E=0,R=!1,M=null,S=null,L=null,U=null,z=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=W>=2);let N=null,K={};const P=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),xe=new hn().fromArray(P),Xe=new hn().fromArray(re);function Y(F,Z,J,ee){const ue=new Uint8Array(4),Le=n.createTexture();n.bindTexture(F,Le),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<J;$e++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(Z+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Le}const ne={};ne[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),s.setFunc(pd),qe(!1),ye(Iv),fe(n.CULL_FACE),Fe(Ns);function fe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ce(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ae(F,Z){return c[F]!==Z?(n.bindFramebuffer(F,Z),c[F]=Z,F===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Z),F===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(F,Z){let J=f,ee=!1;if(F){J=d.get(Z),J===void 0&&(J=[],d.set(Z,J));const ue=F.textures;if(J.length!==ue.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,$e=ue.length;Le<$e;Le++)J[Le]=n.COLOR_ATTACHMENT0+Le;J.length=ue.length,ee=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ee=!0);ee&&n.drawBuffers(J)}function je(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const Je={[uo]:n.FUNC_ADD,[vC]:n.FUNC_SUBTRACT,[xC]:n.FUNC_REVERSE_SUBTRACT};Je[yC]=n.MIN,Je[SC]=n.MAX;const D={[MC]:n.ZERO,[EC]:n.ONE,[TC]:n.SRC_COLOR,[Cm]:n.SRC_ALPHA,[bC]:n.SRC_ALPHA_SATURATE,[RC]:n.DST_COLOR,[AC]:n.DST_ALPHA,[wC]:n.ONE_MINUS_SRC_COLOR,[Rm]:n.ONE_MINUS_SRC_ALPHA,[PC]:n.ONE_MINUS_DST_COLOR,[CC]:n.ONE_MINUS_DST_ALPHA,[LC]:n.CONSTANT_COLOR,[DC]:n.ONE_MINUS_CONSTANT_COLOR,[NC]:n.CONSTANT_ALPHA,[IC]:n.ONE_MINUS_CONSTANT_ALPHA};function Fe(F,Z,J,ee,ue,Le,$e,St,Mt,st){if(F===Ns){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),F!==gC){if(F!==_||st!==R){if((m!==uo||x!==uo)&&(n.blendEquation(n.FUNC_ADD),m=uo,x=uo),st)switch(F){case Ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uv:n.blendFunc(n.ONE,n.ONE);break;case Fv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ov:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ov:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}h=null,v=null,y=null,C=null,A.set(0,0,0),E=0,_=F,R=st}return}ue=ue||Z,Le=Le||J,$e=$e||ee,(Z!==m||ue!==x)&&(n.blendEquationSeparate(Je[Z],Je[ue]),m=Z,x=ue),(J!==h||ee!==v||Le!==y||$e!==C)&&(n.blendFuncSeparate(D[J],D[ee],D[Le],D[$e]),h=J,v=ee,y=Le,C=$e),(St.equals(A)===!1||Mt!==E)&&(n.blendColor(St.r,St.g,St.b,Mt),A.copy(St),E=Mt),_=F,R=!1}function Be(F,Z){F.side===Ur?ce(n.CULL_FACE):fe(n.CULL_FACE);let J=F.side===si;Z&&(J=!J),qe(J),F.blending===Ga&&F.transparent===!1?Fe(Ns):Fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),De(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function ye(F){F!==pC?(fe(n.CULL_FACE),F!==S&&(F===Iv?n.cullFace(n.BACK):F===mC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),S=F}function V(F){F!==L&&($&&n.lineWidth(F),L=F)}function De(F,Z,J){F?(fe(n.POLYGON_OFFSET_FILL),(U!==Z||z!==J)&&(n.polygonOffset(Z,J),U=Z,z=J)):ce(n.POLYGON_OFFSET_FILL)}function ke(F){F?fe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function b(F){F===void 0&&(F=n.TEXTURE0+j-1),N!==F&&(n.activeTexture(F),N=F)}function T(F,Z,J){J===void 0&&(N===null?J=n.TEXTURE0+j-1:J=N);let ee=K[J];ee===void 0&&(ee={type:void 0,texture:void 0},K[J]=ee),(ee.type!==F||ee.texture!==Z)&&(N!==J&&(n.activeTexture(J),N=J),n.bindTexture(F,Z||ne[F]),ee.type=F,ee.texture=Z)}function X(){const F=K[N];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(F){xe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),xe.copy(F))}function ge(F){Xe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function Ve(F,Z){let J=l.get(Z);J===void 0&&(J=new WeakMap,l.set(Z,J));let ee=J.get(F);ee===void 0&&(ee=n.getUniformBlockIndex(Z,F.name),J.set(F,ee))}function Ye(F,Z){const ee=l.get(Z).get(F);a.get(Z)!==ee&&(n.uniformBlockBinding(Z,ee,F.__bindingPointIndex),a.set(Z,ee))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},N=null,K={},c={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,x=null,y=null,C=null,A=new vt(0,0,0),E=0,R=!1,M=null,S=null,L=null,U=null,z=null,xe.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:ce,bindFramebuffer:Ae,drawBuffers:Pe,useProgram:je,setBlending:Fe,setMaterial:Be,setFlipSided:qe,setCullFace:ye,setLineWidth:V,setPolygonOffset:De,setScissorTest:ke,activeTexture:b,bindTexture:T,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Ie,updateUBOMapping:Ve,uniformBlockBinding:Ye,texStorage2D:Oe,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:be,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:He,viewport:ge,reset:dt}}function Px(n,e,t,i){const r=uD(i);switch(t){case AE:return n*e;case RE:return n*e;case PE:return n*e*2;case bE:return n*e/r.components*r.byteLength;case Ng:return n*e/r.components*r.byteLength;case LE:return n*e*2/r.components*r.byteLength;case Ig:return n*e*2/r.components*r.byteLength;case CE:return n*e*3/r.components*r.byteLength;case nr:return n*e*4/r.components*r.byteLength;case Ug:return n*e*4/r.components*r.byteLength;case Cf:case Rf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pf:case bf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Im:case Fm:return Math.max(n,16)*Math.max(e,8)/4;case Nm:case Um:return Math.max(n,8)*Math.max(e,8)/2;case Om:case km:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ym:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $m:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Km:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lf:case e_:case t_:return Math.ceil(n/4)*Math.ceil(e/4)*16;case DE:case n_:return Math.ceil(n/4)*Math.ceil(e/4)*8;case i_:case r_:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uD(n){switch(n){case Kr:case EE:return{byteLength:1,components:1};case Wu:case TE:case Zu:return{byteLength:2,components:1};case Lg:case Dg:return{byteLength:2,components:4};case ko:case bg:case zr:return{byteLength:4,components:1};case wE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new _t,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,T){return p?new OffscreenCanvas(b,T):xd("canvas")}function _(b,T,X){let te=1;const ie=ke(b);if((ie.width>X||ie.height>X)&&(te=X/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(te*ie.width),be=Math.floor(te*ie.height);d===void 0&&(d=g(Q,be));const oe=T?g(Q,be):d;return oe.width=Q,oe.height=be,oe.getContext("2d").drawImage(b,0,0,Q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+be+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Hi&&b.minFilter!==tr}function h(b){n.generateMipmap(b)}function v(b,T,X,te,ie=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=T;if(T===n.RED&&(X===n.FLOAT&&(Q=n.R32F),X===n.HALF_FLOAT&&(Q=n.R16F),X===n.UNSIGNED_BYTE&&(Q=n.R8)),T===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.R8UI),X===n.UNSIGNED_SHORT&&(Q=n.R16UI),X===n.UNSIGNED_INT&&(Q=n.R32UI),X===n.BYTE&&(Q=n.R8I),X===n.SHORT&&(Q=n.R16I),X===n.INT&&(Q=n.R32I)),T===n.RG&&(X===n.FLOAT&&(Q=n.RG32F),X===n.HALF_FLOAT&&(Q=n.RG16F),X===n.UNSIGNED_BYTE&&(Q=n.RG8)),T===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RG8UI),X===n.UNSIGNED_SHORT&&(Q=n.RG16UI),X===n.UNSIGNED_INT&&(Q=n.RG32UI),X===n.BYTE&&(Q=n.RG8I),X===n.SHORT&&(Q=n.RG16I),X===n.INT&&(Q=n.RG32I)),T===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),T===n.RGBA){const be=ie?md:mt.getTransfer(te);X===n.FLOAT&&(Q=n.RGBA32F),X===n.HALF_FLOAT&&(Q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Q=be===Lt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(b,T){let X;return b?T===null||T===ko||T===ll?X=n.DEPTH24_STENCIL8:T===zr?X=n.DEPTH32F_STENCIL8:T===Wu&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ko||T===ll?X=n.DEPTH_COMPONENT24:T===zr?X=n.DEPTH_COMPONENT32F:T===Wu&&(X=n.DEPTH_COMPONENT16),X}function y(b,T){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Hi&&b.minFilter!==tr?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function C(b){const T=b.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&c.delete(T)}function A(b){const T=b.target;T.removeEventListener("dispose",A),M(T)}function E(b){const T=i.get(b);if(T.__webglInit===void 0)return;const X=b.source,te=f.get(X);if(te){const ie=te[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(b),Object.keys(te).length===0&&f.delete(X)}i.remove(b)}function R(b){const T=i.get(b);n.deleteTexture(T.__webglTexture);const X=b.source,te=f.get(X);delete te[T.__cacheKey],o.memory.textures--}function M(b){const T=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(T.__webglFramebuffer[te]))for(let ie=0;ie<T.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(T.__webglFramebuffer[te]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[te])}else{if(Array.isArray(T.__webglFramebuffer))for(let te=0;te<T.__webglFramebuffer.length;te++)n.deleteFramebuffer(T.__webglFramebuffer[te]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let te=0;te<T.__webglColorRenderbuffer.length;te++)T.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[te]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=b.textures;for(let te=0,ie=X.length;te<ie;te++){const Q=i.get(X[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(X[te])}i.remove(b)}let S=0;function L(){S=0}function U(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function z(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function j(b,T){const X=i.get(b);if(b.isVideoTexture&&V(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(X,b,T);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+T)}function $(b,T){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Xe(X,b,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+T)}function W(b,T){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Xe(X,b,T);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+T)}function G(b,T){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Y(X,b,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+T)}const N={[Lm]:n.REPEAT,[go]:n.CLAMP_TO_EDGE,[Dm]:n.MIRRORED_REPEAT},K={[Hi]:n.NEAREST,[ZC]:n.NEAREST_MIPMAP_NEAREST,[Ic]:n.NEAREST_MIPMAP_LINEAR,[tr]:n.LINEAR,[Uh]:n.LINEAR_MIPMAP_NEAREST,[vo]:n.LINEAR_MIPMAP_LINEAR},P={[nR]:n.NEVER,[lR]:n.ALWAYS,[iR]:n.LESS,[NE]:n.LEQUAL,[rR]:n.EQUAL,[aR]:n.GEQUAL,[sR]:n.GREATER,[oR]:n.NOTEQUAL};function re(b,T){if(T.type===zr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===tr||T.magFilter===Uh||T.magFilter===Ic||T.magFilter===vo||T.minFilter===tr||T.minFilter===Uh||T.minFilter===Ic||T.minFilter===vo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,N[T.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,N[T.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,N[T.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[T.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Hi||T.minFilter!==Ic&&T.minFilter!==vo||T.type===zr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function xe(b,T){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",C));const te=T.source;let ie=f.get(te);ie===void 0&&(ie={},f.set(te,ie));const Q=z(T);if(Q!==b.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[Q].usedTimes++;const be=ie[b.__cacheKey];be!==void 0&&(ie[b.__cacheKey].usedTimes--,be.usedTimes===0&&R(T)),b.__cacheKey=Q,b.__webglTexture=ie[Q].texture}return X}function Xe(b,T,X){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);const ie=xe(b,T),Q=T.source;t.bindTexture(te,b.__webglTexture,n.TEXTURE0+X);const be=i.get(Q);if(Q.version!==be.__version||ie===!0){t.activeTexture(n.TEXTURE0+X);const oe=mt.getPrimaries(mt.workingColorSpace),me=T.colorSpace===hs?null:mt.getPrimaries(T.colorSpace),Oe=T.colorSpace===hs||oe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ae=_(T.image,!1,r.maxTextureSize);ae=De(T,ae);const ve=s.convert(T.format,T.colorSpace),Ie=s.convert(T.type);let He=v(T.internalFormat,ve,Ie,T.colorSpace,T.isVideoTexture);re(te,T);let ge;const Ve=T.mipmaps,Ye=T.isVideoTexture!==!0,dt=be.__version===void 0||ie===!0,F=Q.dataReady,Z=y(T,ae);if(T.isDepthTexture)He=x(T.format===ul,T.type),dt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,He,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,He,ae.width,ae.height,0,ve,Ie,null));else if(T.isDataTexture)if(Ve.length>0){Ye&&dt&&t.texStorage2D(n.TEXTURE_2D,Z,He,Ve[0].width,Ve[0].height);for(let J=0,ee=Ve.length;J<ee;J++)ge=Ve[J],Ye?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,J,He,ge.width,ge.height,0,ve,Ie,ge.data);T.generateMipmaps=!1}else Ye?(dt&&t.texStorage2D(n.TEXTURE_2D,Z,He,ae.width,ae.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,Ie,ae.data)):t.texImage2D(n.TEXTURE_2D,0,He,ae.width,ae.height,0,ve,Ie,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ye&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,He,Ve[0].width,Ve[0].height,ae.depth);for(let J=0,ee=Ve.length;J<ee;J++)if(ge=Ve[J],T.format!==nr)if(ve!==null)if(Ye){if(F)if(T.layerUpdates.size>0){const ue=Px(ge.width,ge.height,T.format,T.type);for(const Le of T.layerUpdates){const $e=ge.data.subarray(Le*ue/ge.data.BYTES_PER_ELEMENT,(Le+1)*ue/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Le,ge.width,ge.height,1,ve,$e,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,ae.depth,ve,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,He,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,ae.depth,ve,Ie,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,He,ge.width,ge.height,ae.depth,0,ve,Ie,ge.data)}else{Ye&&dt&&t.texStorage2D(n.TEXTURE_2D,Z,He,Ve[0].width,Ve[0].height);for(let J=0,ee=Ve.length;J<ee;J++)ge=Ve[J],T.format!==nr?ve!==null?Ye?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,J,He,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,J,He,ge.width,ge.height,0,ve,Ie,ge.data)}else if(T.isDataArrayTexture)if(Ye){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Z,He,ae.width,ae.height,ae.depth),F)if(T.layerUpdates.size>0){const J=Px(ae.width,ae.height,T.format,T.type);for(const ee of T.layerUpdates){const ue=ae.data.subarray(ee*J/ae.data.BYTES_PER_ELEMENT,(ee+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,ve,Ie,ue)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(T.isData3DTexture)Ye?(dt&&t.texStorage3D(n.TEXTURE_3D,Z,He,ae.width,ae.height,ae.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ie,ae.data)):t.texImage3D(n.TEXTURE_3D,0,He,ae.width,ae.height,ae.depth,0,ve,Ie,ae.data);else if(T.isFramebufferTexture){if(dt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Z,He,ae.width,ae.height);else{let J=ae.width,ee=ae.height;for(let ue=0;ue<Z;ue++)t.texImage2D(n.TEXTURE_2D,ue,He,J,ee,0,ve,Ie,null),J>>=1,ee>>=1}}else if(Ve.length>0){if(Ye&&dt){const J=ke(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Z,He,J.width,J.height)}for(let J=0,ee=Ve.length;J<ee;J++)ge=Ve[J],Ye?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve,Ie,ge):t.texImage2D(n.TEXTURE_2D,J,He,ve,Ie,ge);T.generateMipmaps=!1}else if(Ye){if(dt){const J=ke(ae);t.texStorage2D(n.TEXTURE_2D,Z,He,J.width,J.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,ae)}else t.texImage2D(n.TEXTURE_2D,0,He,ve,Ie,ae);m(T)&&h(te),be.__version=Q.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Y(b,T,X){if(T.image.length!==6)return;const te=xe(b,T),ie=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+X);const Q=i.get(ie);if(ie.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+X);const be=mt.getPrimaries(mt.workingColorSpace),oe=T.colorSpace===hs?null:mt.getPrimaries(T.colorSpace),me=T.colorSpace===hs||be===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!Oe&&!ae?ve[ee]=_(T.image[ee],!0,r.maxCubemapSize):ve[ee]=ae?T.image[ee].image:T.image[ee],ve[ee]=De(T,ve[ee]);const Ie=ve[0],He=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),Ve=v(T.internalFormat,He,ge,T.colorSpace),Ye=T.isVideoTexture!==!0,dt=Q.__version===void 0||te===!0,F=ie.dataReady;let Z=y(T,Ie);re(n.TEXTURE_CUBE_MAP,T);let J;if(Oe){Ye&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,Ve,Ie.width,Ie.height);for(let ee=0;ee<6;ee++){J=ve[ee].mipmaps;for(let ue=0;ue<J.length;ue++){const Le=J[ue];T.format!==nr?He!==null?Ye?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Le.width,Le.height,He,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Le.width,Le.height,He,ge,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Ve,Le.width,Le.height,0,He,ge,Le.data)}}}else{if(J=T.mipmaps,Ye&&dt){J.length>0&&Z++;const ee=ke(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Z,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,He,ge,ve[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,ve[ee].width,ve[ee].height,0,He,ge,ve[ee].data);for(let ue=0;ue<J.length;ue++){const $e=J[ue].image[ee].image;Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,$e.width,$e.height,He,ge,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Ve,$e.width,$e.height,0,He,ge,$e.data)}}else{Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,He,ge,ve[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,He,ge,ve[ee]);for(let ue=0;ue<J.length;ue++){const Le=J[ue];Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,He,ge,Le.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Ve,He,ge,Le.image[ee])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),Q.__version=ie.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ne(b,T,X,te,ie,Q){const be=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),me=v(X.internalFormat,be,oe,X.colorSpace);if(!i.get(T).__hasExternalTextures){const ae=Math.max(1,T.width>>Q),ve=Math.max(1,T.height>>Q);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,me,ae,ve,T.depth,0,be,oe,null):t.texImage2D(ie,Q,me,ae,ve,0,be,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ye(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ie,i.get(X).__webglTexture,0,qe(T)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ie,i.get(X).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(b,T,X){if(n.bindRenderbuffer(n.RENDERBUFFER,b),T.depthBuffer){const te=T.depthTexture,ie=te&&te.isDepthTexture?te.type:null,Q=x(T.stencilBuffer,ie),be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=qe(T);ye(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Q,T.width,T.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Q,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,b)}else{const te=T.textures;for(let ie=0;ie<te.length;ie++){const Q=te[ie],be=s.convert(Q.format,Q.colorSpace),oe=s.convert(Q.type),me=v(Q.internalFormat,be,oe,Q.colorSpace),Oe=qe(T);X&&ye(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,me,T.width,T.height):ye(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,me,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,ie=qe(T);if(T.depthTexture.format===Wa)ye(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(T.depthTexture.format===ul)ye(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const T=i.get(b),X=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const te=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),te){const ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=te}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ce(T.__webglFramebuffer,b)}else if(X){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]===void 0)T.__webglDepthbuffer[te]=n.createRenderbuffer(),fe(T.__webglDepthbuffer[te],b,!1);else{const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),fe(T.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(b,T,X){const te=i.get(b);T!==void 0&&ne(te.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ae(b)}function je(b){const T=b.texture,X=i.get(b),te=i.get(T);b.addEventListener("dispose",A);const ie=b.textures,Q=b.isWebGLCubeRenderTarget===!0,be=ie.length>1;if(be||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[oe]=[];for(let me=0;me<T.mipmaps.length;me++)X.__webglFramebuffer[oe][me]=n.createFramebuffer()}else X.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)X.__webglFramebuffer[oe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(be)for(let oe=0,me=ie.length;oe<me;oe++){const Oe=i.get(ie[oe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&ye(b)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){const me=ie[oe];X.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[oe]);const Oe=s.convert(me.format,me.colorSpace),ae=s.convert(me.type),ve=v(me.internalFormat,Oe,ae,me.colorSpace,b.isXRRenderTarget===!0),Ie=qe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,X.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),re(n.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)ne(X.__webglFramebuffer[oe][me],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else ne(X.__webglFramebuffer[oe],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let oe=0,me=ie.length;oe<me;oe++){const Oe=ie[oe],ae=i.get(Oe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),re(n.TEXTURE_2D,Oe),ne(X.__webglFramebuffer,b,Oe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Oe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),re(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)ne(X.__webglFramebuffer[me],b,T,n.COLOR_ATTACHMENT0,oe,me);else ne(X.__webglFramebuffer,b,T,n.COLOR_ATTACHMENT0,oe,0);m(T)&&h(oe),t.unbindTexture()}b.depthBuffer&&Ae(b)}function Je(b){const T=b.textures;for(let X=0,te=T.length;X<te;X++){const ie=T[X];if(m(ie)){const Q=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(ie).__webglTexture;t.bindTexture(Q,be),h(Q),t.unbindTexture()}}}const D=[],Fe=[];function Be(b){if(b.samples>0){if(ye(b)===!1){const T=b.textures,X=b.width,te=b.height;let ie=n.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(b),oe=T.length>1;if(oe)for(let me=0;me<T.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let me=0;me<T.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[me]);const Oe=i.get(T[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ie,n.NEAREST),l===!0&&(D.length=0,Fe.length=0,D.push(n.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(Q),Fe.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<T.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,be.__webglColorRenderbuffer[me]);const Oe=i.get(T[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const T=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function qe(b){return Math.min(r.maxSamples,b.samples)}function ye(b){const T=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function V(b){const T=o.render.frame;c.get(b)!==T&&(c.set(b,T),b.update())}function De(b,T){const X=b.colorSpace,te=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||X!==Ys&&X!==hs&&(mt.getTransfer(X)===Lt?(te!==nr||ie!==Kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function ke(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ye}function fD(n,e){function t(i,r=hs){let s;const o=mt.getTransfer(r);if(i===Kr)return n.UNSIGNED_BYTE;if(i===Lg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===EE)return n.BYTE;if(i===TE)return n.SHORT;if(i===Wu)return n.UNSIGNED_SHORT;if(i===bg)return n.INT;if(i===ko)return n.UNSIGNED_INT;if(i===zr)return n.FLOAT;if(i===Zu)return n.HALF_FLOAT;if(i===AE)return n.ALPHA;if(i===CE)return n.RGB;if(i===nr)return n.RGBA;if(i===RE)return n.LUMINANCE;if(i===PE)return n.LUMINANCE_ALPHA;if(i===Wa)return n.DEPTH_COMPONENT;if(i===ul)return n.DEPTH_STENCIL;if(i===bE)return n.RED;if(i===Ng)return n.RED_INTEGER;if(i===LE)return n.RG;if(i===Ig)return n.RG_INTEGER;if(i===Ug)return n.RGBA_INTEGER;if(i===Cf||i===Rf||i===Pf||i===bf)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nm||i===Im||i===Um||i===Fm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Im)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Um)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Om||i===km||i===zm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Om||i===km)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bm||i===Hm||i===Vm||i===Gm||i===Wm||i===Xm||i===jm||i===Ym||i===qm||i===$m||i===Km||i===Zm||i===Qm||i===Jm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ym)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$m)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Km)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lf||i===e_||i===t_)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lf)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===e_)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===t_)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DE||i===n_||i===i_||i===r_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===n_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===i_)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===r_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ll?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class dD extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nf extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hD={type:"move"};class lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _D{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new oi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vs({vertexShader:pD,fragmentShader:mD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xr(new Gd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gD extends pl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,g=null;const _=new _D,m=t.getContextAttributes();let h=null,v=null;const x=[],y=[],C=new _t;let A=null;const E=new Oi;E.layers.enable(1),E.viewport=new hn;const R=new Oi;R.layers.enable(2),R.viewport=new hn;const M=[E,R],S=new dD;S.layers.enable(1),S.layers.enable(2);let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=x[Y];return ne===void 0&&(ne=new lp,x[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=x[Y];return ne===void 0&&(ne=new lp,x[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=x[Y];return ne===void 0&&(ne=new lp,x[Y]=ne),ne.getHandSpace()};function z(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const fe=x[ne];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,u||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<x.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,x[Y].disconnect(ne))}L=null,U=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new zo(p.framebufferWidth,p.framebufferHeight,{format:nr,type:Kr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,fe=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?ul:Wa,fe=m.stencil?ll:ko);const Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new zo(f.textureWidth,f.textureHeight,{format:nr,type:Kr,depthTexture:new YE(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let ne=0;ne<Y.removed.length;ne++){const fe=Y.removed[ne],ce=y.indexOf(fe);ce>=0&&(y[ce]=null,x[ce].disconnect(fe))}for(let ne=0;ne<Y.added.length;ne++){const fe=Y.added[ne];let ce=y.indexOf(fe);if(ce===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=y.length){y.push(fe),ce=Pe;break}else if(y[Pe]===null){y[Pe]=fe,ce=Pe;break}if(ce===-1)break}const Ae=x[ce];Ae&&Ae.connect(fe)}}const W=new q,G=new q;function N(Y,ne,fe){W.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);const ce=W.distanceTo(G),Ae=ne.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,je=Ae[14]/(Ae[10]-1),Je=Ae[14]/(Ae[10]+1),D=(Ae[9]+1)/Ae[5],Fe=(Ae[9]-1)/Ae[5],Be=(Ae[8]-1)/Ae[0],qe=(Pe[8]+1)/Pe[0],ye=je*Be,V=je*qe,De=ce/(-Be+qe),ke=De*-Be;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(De),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const b=je+De,T=Je+De,X=ye-ke,te=V+(ce-ke),ie=D*Je/T*b,Q=Fe*Je/T*b;Y.projectionMatrix.makePerspective(X,te,ie,Q,b,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,fe=Y.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),S.near=R.near=E.near=ne,S.far=R.far=E.far=fe,(L!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,U=S.far);const ce=Y.parent,Ae=S.cameras;K(S,ce);for(let Pe=0;Pe<Ae.length;Pe++)K(Ae[Pe],ce);Ae.length===2?N(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),P(Y,S,ce)};function P(Y,ne,fe){fe===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=s_*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let re=null;function xe(Y,ne){if(c=ne.getViewerPose(u||o),g=ne,c!==null){const fe=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ce=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Pe=0;Pe<fe.length;Pe++){const je=fe[Pe];let Je=null;if(p!==null)Je=p.getViewport(je);else{const Fe=d.getViewSubImage(f,je);Je=Fe.viewport,Pe===0&&(e.setRenderTargetTextures(v,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(v))}let D=M[Pe];D===void 0&&(D=new Oi,D.layers.enable(Pe),D.viewport=new hn,M[Pe]=D),D.matrix.fromArray(je.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(je.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Je.x,Je.y,Je.width,Je.height),Pe===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(D)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Pe=d.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let fe=0;fe<x.length;fe++){const ce=y[fe],Ae=x[fe];ce!==null&&Ae!==void 0&&Ae.update(ce,ne,u||o)}re&&re(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new jE;Xe.setAnimationLoop(xe),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const to=new Zr,vD=new Jt;function xD(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,VE(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===si&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===si&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,to.copy(y),to.x*=-1,to.y*=-1,to.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),m.envMapRotation.value.setFromMatrix4(vD.makeRotationFromEuler(to)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===si&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,E=y.length;A<E;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=R.length;M<S;M++){const L=R[M];if(p(L,A,M,C)===!0){const U=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let $=0;$<z.length;$++){const W=z[$],G=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,U+j,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,j),j+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const A=v.value,E=x+"_"+y;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{const R=C[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let E=0,R=x.length;E<R;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,L=M.length;S<L;S++){const U=M[S],z=Array.isArray(U.value)?U.value:[U.value];for(let j=0,$=z.length;j<$;j++){const W=z[j],G=_(W),N=y%C,K=N%G.boundary,P=N+K;y+=K,P!==0&&C-P<G.storage&&(y+=C-P),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=G.storage}}}const A=y%C;return A>0&&(y+=C-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class SD{constructor(e={}){const{canvas:t=cR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fr,this.toneMapping=Is,this.toneMappingExposure=1;const x=this;let y=!1,C=0,A=0,E=null,R=-1,M=null;const S=new hn,L=new hn;let U=null;const z=new vt(0);let j=0,$=t.width,W=t.height,G=1,N=null,K=null;const P=new hn(0,0,$,W),re=new hn(0,0,$,W);let xe=!1;const Xe=new XE;let Y=!1,ne=!1;const fe=new Jt,ce=new q,Ae=new hn,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Je(){return E===null?G:1}let D=i;function Fe(w,I){return t.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pg}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const I="webgl2";if(D=Fe(I,w),D===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,qe,ye,V,De,ke,b,T,X,te,ie,Q,be,oe,me,Oe,ae,ve,Ie,He,ge,Ve,Ye,dt;function F(){Be=new C2(D),Be.init(),Ve=new fD(D,Be),qe=new y2(D,Be,e,Ve),ye=new lD(D),V=new b2(D),De=new qL,ke=new cD(D,Be,ye,De,qe,Ve,V),b=new M2(x),T=new A2(x),X=new FR(D),Ye=new v2(D,X),te=new R2(D,X,V,Ye),ie=new D2(D,te,X,V),Ie=new L2(D,qe,ke),Oe=new S2(De),Q=new YL(x,b,T,Be,qe,Ye,Oe),be=new xD(x,De),oe=new KL,me=new nD(Be),ve=new g2(x,b,T,ye,ie,f,l),ae=new aD(x,ie,qe),dt=new yD(D,V,qe,ye),He=new x2(D,Be,V),ge=new P2(D,Be,V),V.programs=Q.programs,x.capabilities=qe,x.extensions=Be,x.properties=De,x.renderLists=oe,x.shadowMap=ae,x.state=ye,x.info=V}F();const Z=new gD(x,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize($,W,!1))},this.getSize=function(w){return w.set($,W)},this.setSize=function(w,I,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,W=I,t.width=Math.floor(w*G),t.height=Math.floor(I*G),H===!0&&(t.style.width=w+"px",t.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set($*G,W*G).floor()},this.setDrawingBufferSize=function(w,I,H){$=w,W=I,G=H,t.width=Math.floor(w*H),t.height=Math.floor(I*H),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,I,H,B){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,I,H,B),ye.viewport(S.copy(P).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,I,H,B){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,I,H,B),ye.scissor(L.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){ye.setScissorTest(xe=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(w=!0,I=!0,H=!0){let B=0;if(w){let O=!1;if(E!==null){const se=E.texture.format;O=se===Ug||se===Ig||se===Ng}if(O){const se=E.texture.type,pe=se===Kr||se===ko||se===Wu||se===ll||se===Lg||se===Dg,Me=ve.getClearColor(),he=ve.getClearAlpha(),Se=Me.r,Ne=Me.g,Re=Me.b;pe?(p[0]=Se,p[1]=Ne,p[2]=Re,p[3]=he,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Se,g[1]=Ne,g[2]=Re,g[3]=he,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),oe.dispose(),me.dispose(),De.dispose(),b.dispose(),T.dispose(),ie.dispose(),Ye.dispose(),dt.dispose(),Q.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ce),Z.removeEventListener("sessionend",lt),de.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=V.autoReset,I=ae.enabled,H=ae.autoUpdate,B=ae.needsUpdate,O=ae.type;F(),V.autoReset=w,ae.enabled=I,ae.autoUpdate=H,ae.needsUpdate=B,ae.type=O}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Le(w){const I=w.target;I.removeEventListener("dispose",Le),$e(I)}function $e(w){St(w),De.remove(w)}function St(w){const I=De.get(w).programs;I!==void 0&&(I.forEach(function(H){Q.releaseProgram(H)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,H,B,O,se){I===null&&(I=Pe);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Me=At(w,I,H,B,O);ye.setMaterial(B,pe);let he=H.index,Se=1;if(B.wireframe===!0){if(he=te.getWireframeAttribute(H),he===void 0)return;Se=2}const Ne=H.drawRange,Re=H.attributes.position;let ut=Ne.start*Se,yt=(Ne.start+Ne.count)*Se;se!==null&&(ut=Math.max(ut,se.start*Se),yt=Math.min(yt,(se.start+se.count)*Se)),he!==null?(ut=Math.max(ut,0),yt=Math.min(yt,he.count)):Re!=null&&(ut=Math.max(ut,0),yt=Math.min(yt,Re.count));const ct=yt-ut;if(ct<0||ct===1/0)return;Ye.setup(O,B,Me,H,he);let tn,ot=He;if(he!==null&&(tn=X.get(he),ot=ge,ot.setIndex(tn)),O.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*Je()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(O.isLine){let we=B.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*Je()),O.isLineSegments?ot.setMode(D.LINES):O.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else O.isPoints?ot.setMode(D.POINTS):O.isSprite&&ot.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const we=O._multiDrawStarts,_n=O._multiDrawCounts,ht=O._multiDrawCount,ji=he?X.get(he).bytesPerElement:1,Wo=De.get(B).currentProgram.getUniforms();for(let ci=0;ci<ht;ci++)Wo.setValue(D,"_gl_DrawID",ci),ot.render(we[ci]/ji,_n[ci])}else if(O.isInstancedMesh)ot.renderInstances(ut,ct,O.count);else if(H.isInstancedBufferGeometry){const we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_n=Math.min(H.instanceCount,we);ot.renderInstances(ut,ct,_n)}else ot.render(ut,ct)};function Mt(w,I,H){w.transparent===!0&&w.side===Ur&&w.forceSinglePass===!1?(w.side=si,w.needsUpdate=!0,wt(w,I,H),w.side=Hs,w.needsUpdate=!0,wt(w,I,H),w.side=Ur):wt(w,I,H)}this.compile=function(w,I,H=null){H===null&&(H=w),m=me.get(H),m.init(I),v.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const B=new Set;return w.traverse(function(O){const se=O.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Me=se[pe];Mt(Me,H,O),B.add(Me)}else Mt(se,H,O),B.add(se)}),v.pop(),m=null,B},this.compileAsync=function(w,I,H=null){const B=this.compile(w,I,H);return new Promise(O=>{function se(){if(B.forEach(function(pe){De.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){O(w);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let st=null;function ze(w){st&&st(w)}function Ce(){de.stop()}function lt(){de.start()}const de=new jE;de.setAnimationLoop(ze),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(w){st=w,Z.setAnimationLoop(w),w===null?de.stop():de.start()},Z.addEventListener("sessionstart",Ce),Z.addEventListener("sessionend",lt),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(I),I=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,I,E),m=me.get(w,v.length),m.init(I),v.push(m),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xe.setFromProjectionMatrix(fe),ne=this.localClippingEnabled,Y=Oe.init(this.clippingPlanes,ne),_=oe.get(w,h.length),_.init(),h.push(_),Z.enabled===!0&&Z.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&Ge(se,I,-1/0,x.sortObjects)}Ge(w,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,K),je=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,je&&ve.addToRenderList(_,w),this.info.render.frame++,Y===!0&&Oe.beginShadows();const H=m.state.shadowsArray;ae.render(H,w,I),Y===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,O=_.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(O.length>0)for(let pe=0,Me=se.length;pe<Me;pe++){const he=se[pe];We(B,O,w,he)}je&&ve.render(w);for(let pe=0,Me=se.length;pe<Me;pe++){const he=se[pe];Ue(_,w,he,he.viewport)}}else O.length>0&&We(B,O,w,I),je&&ve.render(w),Ue(_,w,I);E!==null&&(ke.updateMultisampleRenderTarget(E),ke.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(x,w,I),Ye.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&Oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Ge(w,I,H,B){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){B&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const pe=ie.update(w),Me=w.material;Me.visible&&_.push(w,pe,Me,H,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const pe=ie.update(w),Me=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ae.copy(pe.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Me)){const he=pe.groups;for(let Se=0,Ne=he.length;Se<Ne;Se++){const Re=he[Se],ut=Me[Re.materialIndex];ut&&ut.visible&&_.push(w,pe,ut,H,Ae.z,Re)}}else Me.visible&&_.push(w,pe,Me,H,Ae.z,null)}}const se=w.children;for(let pe=0,Me=se.length;pe<Me;pe++)Ge(se[pe],I,H,B)}function Ue(w,I,H,B){const O=w.opaque,se=w.transmissive,pe=w.transparent;m.setupLightsView(H),Y===!0&&Oe.setGlobalState(x.clippingPlanes,H),B&&ye.viewport(S.copy(B)),O.length>0&&Ut(O,I,H),se.length>0&&Ut(se,I,H),pe.length>0&&Ut(pe,I,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function We(w,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new zo(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Zu:Kr,minFilter:vo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const se=m.state.transmissionRenderTarget[B.id],pe=B.viewport||S;se.setSize(pe.z,pe.w);const Me=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(z),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),je&&ve.render(H);const he=x.toneMapping;x.toneMapping=Is;const Se=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),Y===!0&&Oe.setGlobalState(x.clippingPlanes,B),Ut(w,H,B),ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,ut=I.length;Re<ut;Re++){const yt=I[Re],ct=yt.object,tn=yt.geometry,ot=yt.material,we=yt.group;if(ot.side===Ur&&ct.layers.test(B.layers)){const _n=ot.side;ot.side=si,ot.needsUpdate=!0,et(ct,H,B,tn,ot,we),ot.side=_n,ot.needsUpdate=!0,Ne=!0}}Ne===!0&&(ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se))}x.setRenderTarget(Me),x.setClearColor(z,j),Se!==void 0&&(B.viewport=Se),x.toneMapping=he}function Ut(w,I,H){const B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,se=w.length;O<se;O++){const pe=w[O],Me=pe.object,he=pe.geometry,Se=B===null?pe.material:B,Ne=pe.group;Me.layers.test(H.layers)&&et(Me,I,H,he,Se,Ne)}}function et(w,I,H,B,O,se){w.onBeforeRender(x,I,H,B,O,se),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,I,H,B,w,se),O.transparent===!0&&O.side===Ur&&O.forceSinglePass===!1?(O.side=si,O.needsUpdate=!0,x.renderBufferDirect(H,I,B,O,w,se),O.side=Hs,O.needsUpdate=!0,x.renderBufferDirect(H,I,B,O,w,se),O.side=Ur):x.renderBufferDirect(H,I,B,O,w,se),w.onAfterRender(x,I,H,B,O,se)}function wt(w,I,H){I.isScene!==!0&&(I=Pe);const B=De.get(w),O=m.state.lights,se=m.state.shadowsArray,pe=O.state.version,Me=Q.getParameters(w,O.state,se,I,H),he=Q.getProgramCacheKey(Me);let Se=B.programs;B.environment=w.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(w.isMeshStandardMaterial?T:b).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Se===void 0&&(w.addEventListener("dispose",Le),Se=new Map,B.programs=Se);let Ne=Se.get(he);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===pe)return Pt(w,Me),Ne}else Me.uniforms=Q.getUniforms(w),w.onBeforeCompile(Me,x),Ne=Q.acquireProgram(Me,he),Se.set(he,Ne),B.uniforms=Me.uniforms;const Re=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=Oe.uniform),Pt(w,Me),B.needsLights=ui(w),B.lightsStateVersion=pe,B.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Ne,B.uniformsList=null,Ne}function en(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Df.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Pt(w,I){const H=De.get(w);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function At(w,I,H,B,O){I.isScene!==!0&&(I=Pe),ke.resetTextureUnits();const se=I.fog,pe=B.isMeshStandardMaterial?I.environment:null,Me=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ys,he=(B.isMeshStandardMaterial?T:b).get(B.envMap||pe),Se=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,yt=!!H.morphAttributes.color;let ct=Is;B.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ct=x.toneMapping);const tn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=tn!==void 0?tn.length:0,we=De.get(B),_n=m.state.lights;if(Y===!0&&(ne===!0||w!==M)){const bi=w===M&&B.id===R;Oe.setState(B,w,bi)}let ht=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==_n.state.version||we.outputColorSpace!==Me||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==he||B.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Oe.numPlanes||we.numIntersection!==Oe.numIntersection)||we.vertexAlphas!==Se||we.vertexTangents!==Ne||we.morphTargets!==Re||we.morphNormals!==ut||we.morphColors!==yt||we.toneMapping!==ct||we.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,we.__version=B.version);let ji=we.currentProgram;ht===!0&&(ji=wt(B,I,O));let Wo=!1,ci=!1,Xd=!1;const qt=ji.getUniforms(),es=we.uniforms;if(ye.useProgram(ji.program)&&(Wo=!0,ci=!0,Xd=!0),B.id!==R&&(R=B.id,ci=!0),Wo||M!==w){qt.setValue(D,"projectionMatrix",w.projectionMatrix),qt.setValue(D,"viewMatrix",w.matrixWorldInverse);const bi=qt.map.cameraPosition;bi!==void 0&&bi.setValue(D,ce.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&qt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&qt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ci=!0,Xd=!0)}if(O.isSkinnedMesh){qt.setOptional(D,O,"bindMatrix"),qt.setOptional(D,O,"bindMatrixInverse");const bi=O.skeleton;bi&&(bi.boneTexture===null&&bi.computeBoneTexture(),qt.setValue(D,"boneTexture",bi.boneTexture,ke))}O.isBatchedMesh&&(qt.setOptional(D,O,"batchingTexture"),qt.setValue(D,"batchingTexture",O._matricesTexture,ke),qt.setOptional(D,O,"batchingIdTexture"),qt.setValue(D,"batchingIdTexture",O._indirectTexture,ke),qt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&qt.setValue(D,"batchingColorTexture",O._colorsTexture,ke));const jd=H.morphAttributes;if((jd.position!==void 0||jd.normal!==void 0||jd.color!==void 0)&&Ie.update(O,H,ji),(ci||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,qt.setValue(D,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(es.envMap.value=he,es.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(es.envMapIntensity.value=I.environmentIntensity),ci&&(qt.setValue(D,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&gt(es,Xd),se&&B.fog===!0&&be.refreshFogUniforms(es,se),be.refreshMaterialUniforms(es,B,G,W,m.state.transmissionRenderTarget[w.id]),Df.upload(D,en(we),es,ke)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Df.upload(D,en(we),es,ke),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&qt.setValue(D,"center",O.center),qt.setValue(D,"modelViewMatrix",O.modelViewMatrix),qt.setValue(D,"normalMatrix",O.normalMatrix),qt.setValue(D,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const bi=B.uniformsGroups;for(let Yd=0,JE=bi.length;Yd<JE;Yd++){const kg=bi[Yd];dt.update(kg,ji),dt.bind(kg,ji)}}return ji}function gt(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function ui(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,I,H){De.get(w.texture).__webglTexture=I,De.get(w.depthTexture).__webglTexture=H;const B=De.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=H===void 0,B.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const H=De.get(w);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,H=0){E=w,C=I,A=H;let B=!0,O=null,se=!1,pe=!1;if(w){const he=De.get(w);if(he.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(he.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(he.__hasExternalTextures)ke.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(he.__boundDepthTexture!==Re){if(Re!==null&&De.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const Se=w.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const Ne=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?O=Ne[I][H]:O=Ne[I],se=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?O=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[H]:O=Ne,S.copy(w.viewport),L.copy(w.scissor),U=w.scissorTest}else S.copy(P).multiplyScalar(G).floor(),L.copy(re).multiplyScalar(G).floor(),U=xe;if(ye.bindFramebuffer(D.FRAMEBUFFER,O)&&B&&ye.drawBuffers(w,O),ye.viewport(S),ye.scissor(L),ye.setScissorTest(U),se){const he=De.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,H)}else if(pe){const he=De.get(w.texture),Se=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.__webglTexture,H||0,Se)}R=-1},this.readRenderTargetPixels=function(w,I,H,B,O,se,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){ye.bindFramebuffer(D.FRAMEBUFFER,Me);try{const he=w.texture,Se=he.format,Ne=he.type;if(!qe.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-B&&H>=0&&H<=w.height-O&&D.readPixels(I,H,B,O,Ve.convert(Se),Ve.convert(Ne),se)}finally{const he=E!==null?De.get(E).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(w,I,H,B,O,se,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){ye.bindFramebuffer(D.FRAMEBUFFER,Me);try{const he=w.texture,Se=he.format,Ne=he.type;if(!qe.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-B&&H>=0&&H<=w.height-O){const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(I,H,B,O,Ve.convert(Se),Ve.convert(Ne),0),D.flush();const ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await fR(D,ut,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se)}finally{D.deleteBuffer(Re),D.deleteSync(ut)}return se}}finally{const he=E!==null?De.get(E).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.copyFramebufferToTexture=function(w,I=null,H=0){w.isTexture!==!0&&(pu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const B=Math.pow(2,-H),O=Math.floor(w.image.width*B),se=Math.floor(w.image.height*B),pe=I!==null?I.x:0,Me=I!==null?I.y:0;ke.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,pe,Me,O,se),ye.unbindTexture()},this.copyTextureToTexture=function(w,I,H=null,B=null,O=0){w.isTexture!==!0&&(pu("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],I=arguments[2],O=arguments[3]||0,H=null);let se,pe,Me,he,Se,Ne;H!==null?(se=H.max.x-H.min.x,pe=H.max.y-H.min.y,Me=H.min.x,he=H.min.y):(se=w.image.width,pe=w.image.height,Me=0,he=0),B!==null?(Se=B.x,Ne=B.y):(Se=0,Ne=0);const Re=Ve.convert(I.format),ut=Ve.convert(I.type);ke.setTexture2D(I,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const yt=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),_n=w.isCompressedTexture?w.mipmaps[O]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,_n.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_n.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Se,Ne,se,pe,Re,ut,_n.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Se,Ne,_n.width,_n.height,Re,_n.data):D.texSubImage2D(D.TEXTURE_2D,O,Se,Ne,se,pe,Re,ut,_n),D.pixelStorei(D.UNPACK_ROW_LENGTH,yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),O===0&&I.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(w,I,H=null,B=null,O=0){w.isTexture!==!0&&(pu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,B=arguments[1]||null,w=arguments[2],I=arguments[3],O=arguments[4]||0);let se,pe,Me,he,Se,Ne,Re,ut,yt;const ct=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(se=H.max.x-H.min.x,pe=H.max.y-H.min.y,Me=H.max.z-H.min.z,he=H.min.x,Se=H.min.y,Ne=H.min.z):(se=ct.width,pe=ct.height,Me=ct.depth,he=0,Se=0,Ne=0),B!==null?(Re=B.x,ut=B.y,yt=B.z):(Re=0,ut=0,yt=0);const tn=Ve.convert(I.format),ot=Ve.convert(I.type);let we;if(I.isData3DTexture)ke.setTexture3D(I,0),we=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)ke.setTexture2DArray(I,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const _n=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ji=D.getParameter(D.UNPACK_SKIP_PIXELS),Wo=D.getParameter(D.UNPACK_SKIP_ROWS),ci=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ct.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(we,O,Re,ut,yt,se,pe,Me,tn,ot,ct.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(we,O,Re,ut,yt,se,pe,Me,tn,ct.data):D.texSubImage3D(we,O,Re,ut,yt,se,pe,Me,tn,ot,ct),D.pixelStorei(D.UNPACK_ROW_LENGTH,_n),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ci),O===0&&I.generateMipmaps&&D.generateMipmap(we),ye.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,E=null,ye.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fg?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Hd?"display-p3":"srgb"}}class MD extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class QE extends tc{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bx=new Jt,a_=new OE,rf=new Vd,sf=new q;class ED extends ai{constructor(e=new Jr,t=new QE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rf.copy(i.boundingSphere),rf.applyMatrix4(r),rf.radius+=s,e.ray.intersectsSphere(rf)===!1)return;bx.copy(r).invert(),a_.copy(e.ray).applyMatrix4(bx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);sf.fromBufferAttribute(d,m),Lx(sf,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)sf.fromBufferAttribute(d,g),Lx(sf,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lx(n,e,t,i,r,s,o){const a=a_.distanceSqToPoint(n);if(a<t){const l=new q;a_.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pg);function TD(){const n=Yt.useRef(null);return Yt.useEffect(()=>{const e=n.current;if(!e)return;const t=new MD,i=new Oi(75,e.clientWidth/e.clientHeight,.1,1e3),r=new SD({antialias:!0,alpha:!0});r.setSize(e.clientWidth,e.clientHeight),r.setClearColor(0,0),e.appendChild(r.domElement);const s=new ml(1,1,1),o=[new mu({color:16766720,wireframe:!0}),new mu({color:12632256,wireframe:!0}),new mu({color:16777215,wireframe:!0})],a=[];for(let m=0;m<15;m++){const h=new xr(s,o[m%o.length]);h.position.set((Math.random()-.5)*20,(Math.random()-.5)*15,(Math.random()-.5)*10),h.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),h.scale.setScalar(.3+Math.random()*.7),a.push(h),t.add(h)}const l=new Jr,u=100,c=new Float32Array(u*3);for(let m=0;m<u*3;m++)c[m]=(Math.random()-.5)*50;l.setAttribute("position",new sr(c,3));const d=new QE({color:16766720,size:.1,transparent:!0,opacity:.6}),f=new ED(l,d);t.add(f),i.position.z=15;let p;function g(){p=requestAnimationFrame(g),a.forEach((m,h)=>{m.rotation.x+=.01+h*.001,m.rotation.y+=.01+h*.001,m.position.y+=Math.sin(Date.now()*.001+h)*.01}),f.rotation.x+=.001,f.rotation.y+=.002,r.render(t,i)}g();const _=()=>{e.clientWidth&&e.clientHeight&&(i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight))};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),cancelAnimationFrame(p),e&&r.domElement&&e.removeChild(r.domElement),r.dispose()}},[]),k.jsxs("section",{className:"hero",id:"home",children:[k.jsxs("div",{className:"hero__container",children:[k.jsx("div",{className:"hero__content",children:k.jsxs("div",{className:"hero__text",children:[k.jsx("h1",{className:"hero__name",children:"Bibhu Krupa Pradhan"}),k.jsx("p",{className:"hero__title",children:"Full Stack Web Developer"}),k.jsx("p",{className:"hero__tagline",children:"Crafting Digital Experiences with Precision"}),k.jsx("a",{href:"#contact",className:"btn btn--primary hero__cta",children:"Let's Work Together"})]})}),k.jsx("div",{className:"hero__3d",id:"hero3d",ref:n})]}),k.jsxs("div",{className:"hero__scroll",children:[k.jsx("span",{children:"Scroll"}),k.jsx("div",{className:"hero__scroll-line"})]})]})}const Po={personalInfo:{description:"Passionate about creating innovative web solutions with modern technologies. I specialize in both frontend and backend development, bringing ideas to life through clean, efficient code and intuitive user experiences.",email:"bibhukrupa5@gmail.com",phone:"+91 1234567890",location:"Noida, Uttarpradesh"},skills:[{name:"HTML",level:90,category:"Frontend"},{name:"CSS",level:88,category:"Frontend"},{name:"JavaScript",level:80,category:"Frontend"},{name:"React.js",level:70,category:"Frontend"},{name:"Three.js",level:40,category:"3D Graphics"}],projects:[{id:1,title:"Amazon Clone",description:"A replica of Amazon built while learning basics of HTML, CSS and JS.",image:"amazon.png",technologies:["HTML","CSS","JavaScript"],category:"Web Page",link:"https://www.amazon.in/",featured:!1},{id:2,title:"Netflix Clone",description:"Replica of Netlfix using only HTML, CSS and JS.",image:"netflix.png",technologies:["HTML","CSS","JavaScript"],category:"Web Page",link:"https://www.netflix.com/in/",featured:!1},{id:3,title:"To-Do List",description:"To-Do list webpage where one can set his/her goals.",image:"toDoList.png",technologies:["HTML","CSS","JavaScript"],category:"Web Application",link:"https://to-do-list04.netlify.app/",featured:!1},{id:4,title:"University Portal",description:"University portal website for students where he/she can get everything including notes and attendace percentage.",image:"uniconnect.png",technologies:["HTML","CSS","JavaScript","Firebase"],category:"Blockchain",link:"https://uniconnect.tech",featured:!1}],services:[{title:"Web Development",description:"Full-stack web applications with modern frameworks and cutting-edge technologies",icon:"💻",price:"Starting at ₹5,000",features:["Responsive Design","Performance Optimization","SEO Ready","Modern Frameworks"]},{title:"Mobile Applications",description:"Interactive 3D experiences, product configurators, and immersive mobile applications",icon:"📱",price:"Starting at ₹8,000",features:["Flutter & React Native","Interactive Models","Real-time Rendering","Cross-platform"]},{title:"UI/UX Design",description:"User-centered design with focus on usability, accessibility, and visual excellence",icon:"✨",price:"Starting at ₹3,000",features:["User Research","Prototyping","Design Systems","Accessibility Focus"]}],experience:[{title:"Web Developer",company:"Dev-opify",period:"2025 - Present",description:"Lead developer for next-generation web applications using React, Three.js, and advanced animation libraries.",achievements:["Led team of 6 developers on major product redesign","Implemented performance optimizations reducing load time by 40%"]},{title:"Web Developer",company:"GDG IILM",period:"2025 - Present",description:"Specialized in creating immersive web experiences for GDG",achievements:["Developed GDG Website"]},{title:"App Developer",company:"Dev-opify",period:"2025 - Present",description:"Built scalable applications from concept to deployment using modern tech stack.",achievements:[]}],testimonials:[{name:"Sarah Johnson",role:"CEO, InnovateLab",company:"InnovateLab",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",quote:"Bibhu's work exceeded all expectations. The 3D visualization he created transformed our product presentation and significantly improved our conversion rates.",rating:5},{name:"Michael Chen",role:"Creative Director",company:"Design Studio",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",quote:"Working with Bibhu was a game-changer. His technical expertise combined with creative vision delivered results beyond our wildest dreams.",rating:5},{name:"Emily Rodriguez",role:"Product Manager",company:"TechFlow",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",quote:"The attention to detail and user experience focus Bibhu brings to projects is remarkable. Our users absolutely love the new interface.",rating:5},{name:"David Kim",role:"Founder",company:"NextGen Apps",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",quote:"Bibhu's ability to translate complex ideas into beautiful, functional interfaces is unparalleled. Highly recommend for any premium project.",rating:5}]};function wD(){const{personalInfo:n,skills:e}=Po;return k.jsx("section",{className:"about",id:"about",children:k.jsx("div",{className:"container",children:k.jsxs("div",{className:"about__grid",children:[k.jsxs("div",{className:"about__content",children:[k.jsx("h2",{className:"section__title",children:"About Me"}),k.jsx("p",{className:"about__description",children:n.description}),k.jsxs("div",{className:"about__info",children:[k.jsxs("div",{className:"about__item",children:[k.jsx("span",{className:"about__label",children:"Location"}),k.jsx("span",{className:"about__value",children:n.location})]}),k.jsxs("div",{className:"about__item",children:[k.jsx("span",{className:"about__label",children:"Email"}),k.jsx("span",{className:"about__value",children:n.email})]}),k.jsxs("div",{className:"about__item",children:[k.jsx("span",{className:"about__label",children:"Phone"}),k.jsx("span",{className:"about__value",children:n.phone})]})]})]}),k.jsxs("div",{className:"about__skills",children:[k.jsx("h3",{className:"about__skills-title",children:"Skills"}),k.jsx("div",{className:"skills",id:"skillsContainer",children:e.map((t,i)=>k.jsxs("div",{className:"skill",children:[k.jsxs("div",{className:"skill__info",children:[k.jsx("span",{className:"skill__name",children:t.name}),k.jsxs("span",{className:"skill__level",children:[t.level,"%"]})]}),k.jsx("div",{className:"skill__bar",children:k.jsx("div",{className:"skill__progress","data-width":t.level,style:{width:`${t.level}%`}})})]},i))})]})]})})})}function AD(){const[n,e]=Yt.useState("all"),t=Po.projects.filter(i=>n==="all"?!0:n==="featured"?i.featured:n==="web"?i.category.toLowerCase().includes("web")||i.category.toLowerCase().includes("ai"):n==="3d"?i.category.toLowerCase().includes("3d")||i.category.toLowerCase().includes("ar"):!0);return k.jsx("section",{className:"portfolio",id:"portfolio",children:k.jsxs("div",{className:"container",children:[k.jsx("h2",{className:"section__title",children:"Portfolio"}),k.jsxs("div",{className:"portfolio__filter",children:[k.jsx("button",{className:`portfolio__filter-btn ${n==="all"?"active":""}`,onClick:()=>e("all"),children:"All"}),k.jsx("button",{className:`portfolio__filter-btn ${n==="featured"?"active":""}`,onClick:()=>e("featured"),children:"Featured"}),k.jsx("button",{className:`portfolio__filter-btn ${n==="web"?"active":""}`,onClick:()=>e("web"),children:"Web Development"}),k.jsx("button",{className:`portfolio__filter-btn ${n==="3d"?"active":""}`,onClick:()=>e("3d"),children:"3D Experience"})]}),k.jsx("div",{className:"portfolio__grid",id:"portfolioGrid",children:t.map((i,r)=>k.jsxs("div",{className:`portfolio__item ${i.featured?"featured":""}`,"data-category":i.category.toLowerCase().replace(/[^a-z0-9]/g,""),children:[k.jsx("img",{src:i.image,alt:i.title,className:"portfolio__image",loading:"lazy"}),k.jsxs("div",{className:"portfolio__content",children:[k.jsx("h3",{className:"portfolio__title",children:i.title}),k.jsx("p",{className:"portfolio__description",children:i.description}),k.jsx("div",{className:"portfolio__technologies",children:i.technologies.map((s,o)=>k.jsx("span",{className:"portfolio__tech",children:s},o))}),k.jsx("a",{href:i.link,className:"portfolio__link",children:"View Project →"})]})]},r))})]})})}function CD(){return k.jsx("section",{className:"services",id:"services",children:k.jsxs("div",{className:"container",children:[k.jsx("h2",{className:"section__title",children:"Services"}),k.jsx("div",{className:"services__grid",id:"servicesGrid",children:Po.services.map((n,e)=>k.jsxs("div",{className:"service",children:[k.jsx("span",{className:"service__icon",children:n.icon}),k.jsx("h3",{className:"service__title",children:n.title}),k.jsx("p",{className:"service__description",children:n.description}),k.jsx("div",{className:"service__price",children:n.price}),k.jsx("ul",{className:"service__features",children:n.features.map((t,i)=>k.jsx("li",{className:"service__feature",children:t},i))})]},e))})]})})}function RD(){return k.jsx("section",{className:"experience",id:"experience",children:k.jsxs("div",{className:"container",children:[k.jsx("h2",{className:"section__title",children:"Experience"}),k.jsx("div",{className:"timeline",id:"timelineContainer",children:Po.experience.map((n,e)=>k.jsxs("div",{className:"timeline__item",children:[k.jsx("div",{className:"timeline__marker"}),k.jsxs("div",{className:"timeline__content",children:[k.jsx("div",{className:"timeline__period",children:n.period}),k.jsx("h3",{className:"timeline__title",children:n.title}),k.jsx("div",{className:"timeline__company",children:n.company}),k.jsx("p",{className:"timeline__description",children:n.description}),n.achievements&&n.achievements.length>0&&k.jsx("ul",{children:n.achievements.map((t,i)=>k.jsx("li",{children:t},i))})]})]},e))})]})})}function PD(){const[n,e]=Yt.useState(0),t=()=>{e(r=>(r+1)%Po.testimonials.length)},i=()=>{e(r=>r===0?Po.testimonials.length-1:r-1)};return Yt.useEffect(()=>{const r=setInterval(()=>{t()},5e3);return()=>clearInterval(r)},[]),k.jsx("section",{className:"testimonials",id:"testimonials",children:k.jsxs("div",{className:"container",children:[k.jsx("h2",{className:"section__title",children:"Testimonials"}),k.jsx("div",{className:"testimonials__slider",id:"testimonialsSlider",children:Po.testimonials.map((r,s)=>k.jsxs("div",{className:`testimonial ${s===n?"active":""}`,style:{display:s===n?"block":"none",opacity:s===n?1:0},children:[k.jsx("img",{src:r.avatar,alt:r.name,className:"testimonial__avatar",loading:"lazy"}),k.jsxs("blockquote",{className:"testimonial__quote",children:['"',r.quote,'"']}),k.jsx("div",{className:"testimonial__author",children:r.name}),k.jsx("div",{className:"testimonial__role",children:r.role}),k.jsx("div",{className:"testimonial__rating",children:"★".repeat(r.rating)})]},s))}),k.jsxs("div",{className:"testimonials__controls",children:[k.jsx("button",{className:"testimonials__btn testimonials__btn--prev",id:"testPrev",onClick:i,children:"‹"}),k.jsx("button",{className:"testimonials__btn testimonials__btn--next",id:"testNext",onClick:t,children:"›"})]})]})})}function bD(){const[n,e]=Yt.useState(""),t=i=>{i.preventDefault(),e("Sending..."),setTimeout(()=>{i.target.reset(),e(""),alert("Thank you for your message! I'll get back to you soon.")},2e3)};return k.jsx("section",{className:"contact",id:"contact",children:k.jsxs("div",{className:"container",children:[k.jsx("h2",{className:"section__title",children:"Get In Touch"}),k.jsxs("div",{className:"contact__grid",children:[k.jsxs("div",{className:"contact__info",children:[k.jsx("h3",{className:"contact__subtitle",children:"Let's create something amazing together"}),k.jsxs("div",{className:"contact__details",children:[k.jsxs("div",{className:"contact__item",children:[k.jsx("div",{className:"contact__icon",children:"📧"}),k.jsxs("div",{className:"contact__text",children:[k.jsx("span",{className:"contact__label",children:"Email"}),k.jsx("a",{href:"mailto:bibhukrupa5@gmail.com",children:"bibhukrupa5@gmail.com"})]})]}),k.jsxs("div",{className:"contact__item",children:[k.jsx("div",{className:"contact__icon",children:"📱"}),k.jsxs("div",{className:"contact__text",children:[k.jsx("span",{className:"contact__label",children:"Phone"}),k.jsx("a",{href:"tel:+91 1234567890",children:"+91 1234567890"})]})]}),k.jsxs("div",{className:"contact__item",children:[k.jsx("div",{className:"contact__icon",children:"📍"}),k.jsxs("div",{className:"contact__text",children:[k.jsx("span",{className:"contact__label",children:"Location"}),k.jsx("span",{children:"Noida, Uttarpradesh"})]})]})]}),k.jsxs("div",{className:"contact__social",children:[k.jsx("a",{href:"https://github.com/bibhukrupa01",target:"_blank",rel:"noreferrer",className:"contact__social-link",children:"GitHub"}),k.jsx("a",{href:"https://www.linkedin.com/in/bibhu-krupa-pradhan-45b021329/",target:"_blank",rel:"noreferrer",className:"contact__social-link",children:"LinkedIn"}),k.jsx("a",{href:"https://twitter.com/bibhukrupa5",target:"_blank",rel:"noreferrer",className:"contact__social-link",children:"Twitter"})]})]}),k.jsxs("form",{className:"contact__form",id:"contactForm",onSubmit:t,children:[k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"form-label",children:"Name"}),k.jsx("input",{type:"text",className:"form-control",name:"name",required:!0})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"form-label",children:"Email"}),k.jsx("input",{type:"email",className:"form-control",name:"email",required:!0})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"form-label",children:"Subject"}),k.jsx("input",{type:"text",className:"form-control",name:"subject",required:!0})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{className:"form-label",children:"Message"}),k.jsx("textarea",{className:"form-control",name:"message",rows:"5",required:!0})]}),k.jsx("button",{type:"submit",className:"btn btn--primary btn--full-width",disabled:n==="Sending...",children:n||"Send Message"})]})]})]})})}vn.registerPlugin(Go);function LD({isGSAPLoaded:n}){const e=()=>{n?vn.to(window,{duration:1.5,scrollTo:{y:0},ease:"power2.inOut"}):window.scrollTo({top:0,behavior:"smooth"})};return k.jsx("footer",{className:"footer",children:k.jsxs("div",{className:"container",children:[k.jsxs("div",{className:"footer__content",children:[k.jsx("p",{children:"© 2025 Bibhu Krupa Pradhan. All rights reserved."}),k.jsxs("div",{className:"footer__social",children:[k.jsx("a",{href:"https://github.com/bibhukrupa01",target:"_blank",rel:"noreferrer",children:"GitHub"}),k.jsx("a",{href:"https://linkedin.com/in/bibhukrupa01",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),k.jsx("a",{href:"https://twitter.com/bibhukrupa5",target:"_blank",rel:"noreferrer",children:"Twitter"})]})]}),k.jsx("button",{className:"back-to-top",id:"backToTop",onClick:e,children:"↑"})]})})}function DD({onComplete:n,isGSAPLoaded:e}){const[t,i]=Yt.useState(!0);return Yt.useEffect(()=>{e?(vn.to(".loader__spinner",{rotation:360,duration:1,ease:"none",repeat:-1}),setTimeout(()=>{vn.to("#loader",{opacity:0,duration:.5,onComplete:()=>{i(!1),n&&n()}})},2e3)):setTimeout(()=>{i(!1),n&&n()},2e3)},[e,n]),t?k.jsxs("div",{className:"loader",id:"loader",children:[k.jsx("div",{className:"loader__spinner"}),k.jsx("p",{className:"loader__text",children:"Almost Ready..."})]}):null}vn.registerPlugin(it);function ND(){const[n,e]=Yt.useState(!1),t=Yt.useRef(),i=()=>{e(!0)};return Rg(()=>{if(!n)return;vn.timeline().fromTo(".hero__name",{opacity:0,y:100},{opacity:1,y:0,duration:1,ease:"power3.out"}).fromTo(".hero__title",{opacity:0,y:50},{opacity:1,y:0,duration:.8,ease:"power2.out"},"-=0.5").fromTo(".hero__tagline",{opacity:0,y:30},{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.3").fromTo(".hero__cta",{opacity:0,scale:.8},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"},"-=0.2"),vn.utils.toArray(".section__title").forEach(s=>{vn.fromTo(s,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 85%",end:"bottom 15%"}})}),vn.utils.toArray(".skill").forEach((s,o)=>{vn.fromTo(s,{opacity:0,x:-50},{opacity:1,x:0,duration:.6,delay:o*.1,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 85%"}});const a=s.querySelector(".skill__progress");if(a){const l=a.getAttribute("data-width");vn.fromTo(a,{width:"0%"},{width:l+"%",duration:1.5,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 75%"}})}}),vn.utils.toArray(".portfolio__item").forEach((s,o)=>{vn.fromTo(s,{opacity:0,y:50,rotationX:-15},{opacity:1,y:0,rotationX:0,duration:.8,delay:o%3*.1,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 85%"}})})},{scope:t,dependencies:[n]}),k.jsxs("div",{ref:t,children:[!n&&k.jsx(DD,{onComplete:i,isGSAPLoaded:!0}),k.jsxs("div",{style:{visibility:n?"visible":"hidden",opacity:n?1:0,transition:"opacity 0.5s ease"},children:[k.jsx(hC,{isGSAPLoaded:!0}),k.jsx(TD,{}),k.jsx(wD,{}),k.jsx(AD,{}),k.jsx(CD,{}),k.jsx(RD,{}),k.jsx(PD,{}),k.jsx(bD,{}),k.jsx(LD,{isGSAPLoaded:!0})]})]})}up.createRoot(document.getElementById("root")).render(k.jsx(_1.StrictMode,{children:k.jsx(ND,{})}));
