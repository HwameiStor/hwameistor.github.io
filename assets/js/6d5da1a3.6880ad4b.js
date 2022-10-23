"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:6,sidebar_label:"Evictor"},a="Evictor",c={unversionedId:"architecture/modules/evictor",id:"architecture/modules/evictor",title:"Evictor",description:"The Evictor is used to automatically migrate HwameiStor volumes in case of node or pod eviction. When a node or pod is evicted as either planed or unplaned, the associated HwameiStor volumes, which have a replica on the node, will be detected and migrated out this node automatically. A scheduler will work for both LVM and Disk volumes.",source:"@site/docs/architecture/modules/evictor.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/evictor",permalink:"/docs/architecture/modules/evictor",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/architecture/modules/evictor.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Evictor"},sidebar:"tutorialSidebar",previous:{title:"Admission Controller",permalink:"/docs/architecture/modules/admission_controller"},next:{title:"Resources",permalink:"/docs/architecture/resources"}},l={},s=[{value:"Install by Helm Chart",id:"install-by-helm-chart",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"evictor"},"Evictor"),(0,n.kt)("p",null,"The Evictor is used to automatically migrate HwameiStor volumes in case of node or pod eviction. When a node or pod is evicted as either planed or unplaned, the associated HwameiStor volumes, which have a replica on the node, will be detected and migrated out this node automatically. A scheduler will work for both LVM and Disk volumes."),(0,n.kt)("p",null,"The Evictor should be deployed with the HA mode in the cluster, which is a best practice for production."),(0,n.kt)("h2",{id:"install-by-helm-chart"},"Install by Helm Chart"),(0,n.kt)("p",null,"Evictor must work with Local Storage and Local Disk Manager. It's suggested to install by ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick_start/install/deploy"},"Helm Chart"),"."))}d.isMDXComponent=!0}}]);