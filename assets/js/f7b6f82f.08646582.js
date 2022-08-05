"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1,sidebar_label:"Prerequisites"},a="Prerequisites",l={unversionedId:"installation/prepare",id:"installation/prepare",title:"Prerequisites",description:"HwameiStor must be deployed on a Kubernetes platform. The hosts must meet the below requirements:",source:"@site/docs/01.installation/00.prepare.md",sourceDirName:"01.installation",slug:"/installation/prepare",permalink:"/docs/installation/prepare",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/01.installation/00.prepare.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"What is HwameiStor",permalink:"/docs/intro"},next:{title:"Deploy by Helm Charts",permalink:"/docs/installation/deploy"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"HwameiStor must be deployed on a Kubernetes platform. The hosts must meet the below requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes version: ",(0,i.kt)("inlineCode",{parentName:"li"},"1.18+")),(0,i.kt)("li",{parentName:"ul"},"LVM is installed"),(0,i.kt)("li",{parentName:"ul"},"Have at least one unused drive")))}c.isMDXComponent=!0}}]);