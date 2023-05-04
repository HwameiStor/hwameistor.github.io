"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6417],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(b,i(i({ref:e},u),{},{components:r})):n.createElement(b,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5927:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:4,sidebar_label:"API"},i="API",o={unversionedId:"architecture/apis",id:"architecture/apis",title:"API",description:"CRD \u5bf9\u8c61\u7c7b",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/architecture/apis.md",sourceDirName:"architecture",slug:"/architecture/apis",permalink:"/cn/docs/architecture/apis",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/architecture/apis.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"API"},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u5f62\u754c\u9762",permalink:"/cn/docs/architecture/modules/gui"},next:{title:"Applications",permalink:"/cn/docs/category/applications"}},c={},p=[{value:"CRD \u5bf9\u8c61\u7c7b",id:"crd-\u5bf9\u8c61\u7c7b",level:2}],u={toc:p};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api"},"API"),(0,a.kt)("h2",{id:"crd-\u5bf9\u8c61\u7c7b"},"CRD \u5bf9\u8c61\u7c7b"),(0,a.kt)("p",null,"Hwameistor \u5728 Kubernetes \u5df2\u6709\u7684 PV \u548c PVC \u5bf9\u8c61\u7c7b\u57fa\u7840\u4e0a\uff0cHwameistor \u5b9a\u4e49\u4e86\u66f4\u4e30\u5bcc\u7684\u5bf9\u8c61\u7c7b\uff0c\u628a PV/PVC \u548c\u672c\u5730\u6570\u636e\u76d8\u5173\u8054\u8d77\u6765\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Kind"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7f29\u5199"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LocalDiskNode"),(0,a.kt)("td",{parentName:"tr",align:null},"ldn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LocalDisk"),(0,a.kt)("td",{parentName:"tr",align:null},"ld"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u8282\u70b9\u4e0a\u6570\u636e\u76d8\uff0c\u81ea\u52a8\u8bc6\u522b\u7a7a\u95f2\u53ef\u7528\u7684\u6570\u636e\u76d8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LocalDiskClaim"),(0,a.kt)("td",{parentName:"tr",align:null},"ldc"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b5b\u9009\u5e76\u6ce8\u518c\u672c\u5730\u6570\u636e\u76d8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LocalStorageNode"),(0,a.kt)("td",{parentName:"tr",align:null},"lsn"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u521b\u5efa\u5b58\u50a8\u6c60\uff0c\u4e5f\u5c31\u662f LVM \u903b\u8f91\u5377\u7ec4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LocalVolume"),(0,a.kt)("td",{parentName:"tr",align:null},"lv"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa LVM \u903b\u8f91\u5377\uff0c\u5206\u914d\u7ed9 PersistentVolume")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LocalDiskExpand"),(0,a.kt)("td",{parentName:"tr",align:null},"lvexpand"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u6c60\u6269\u5bb9")))))}s.isMDXComponent=!0}}]);