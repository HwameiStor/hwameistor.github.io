"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),a=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=a(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var a=2;a<i;a++)l[a]=r[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4,sidebar_label:"Scheduler"},l="Scheduler",c={unversionedId:"modules/scheduler",id:"modules/scheduler",title:"Scheduler",description:"The Scheduler is used to automatically schedule the Pod to the correct node which is associated with the HwameiStor volume.",source:"@site/docs/modules/scheduler.md",sourceDirName:"modules",slug:"/modules/scheduler",permalink:"/docs/modules/scheduler",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/modules/scheduler.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Scheduler"},sidebar:"tutorialSidebar",previous:{title:"Local Storage",permalink:"/docs/modules/ls"},next:{title:"Admission Controller",permalink:"/docs/modules/admission_controller"}},s={},a=[],u={toc:a};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scheduler"},"Scheduler"),(0,n.kt)("p",null,"The Scheduler is used to automatically schedule the Pod to the correct node which is associated with the HwameiStor volume.\nWith the scheduler, the Pod does not need the NodeAffinity or NodeSelector field to select the node. A scheduler will work for both LVM and Disk volumes."),(0,n.kt)("p",null,"The Scheduler should be deployed with the HA mode in the cluster, which is a best practice for production."))}d.isMDXComponent=!0}}]);