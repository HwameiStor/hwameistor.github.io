"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||l;return r?o.createElement(m,c(c({ref:t},u),{},{components:r})):o.createElement(m,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<l;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:4,sidebar_label:"Scheduler"},c="Scheduler",a={unversionedId:"architecture/modules/scheduler",id:"architecture/modules/scheduler",title:"Scheduler",description:"The Scheduler is used to automatically schedule the Pod to a correct node which is associated with HwameiStor volume. With the scheduler, the Pod does not need the NodeAffinity or NodeSelector field to select the node. A scheduler will work for both LVM and Disk volumes.",source:"@site/docs/architecture/modules/scheduler.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/scheduler",permalink:"/docs/architecture/modules/scheduler",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/architecture/modules/scheduler.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Scheduler"},sidebar:"tutorialSidebar",previous:{title:"DRBD Installer",permalink:"/docs/architecture/modules/drbd"},next:{title:"Admission Controller",permalink:"/docs/architecture/modules/admission_controller"}},i={},s=[],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scheduler"},"Scheduler"),(0,n.kt)("p",null,"The Scheduler is used to automatically schedule the Pod to a correct node which is associated with HwameiStor volume. With the scheduler, the Pod does not need the NodeAffinity or NodeSelector field to select the node. A scheduler will work for both LVM and Disk volumes."),(0,n.kt)("p",null,"The Scheduler should be deployed with the HA mode in the cluster, which is a best practice for production."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Install by Helm Chart")),(0,n.kt)("p",null,"Scheduler must work with Local Storage and Local Disk Manager. It's suggested to install by ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick_start/install/deploy"},"Helm Chart"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Install by YAML (for developing)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f deploy/scheduler.yaml\n")))}d.isMDXComponent=!0}}]);