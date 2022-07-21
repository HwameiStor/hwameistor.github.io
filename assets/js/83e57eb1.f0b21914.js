"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:4,sidebar_label:"DRBD Installer"},a="DRBD Installer",l={unversionedId:"features/DRBD",id:"features/DRBD",title:"DRBD Installer",description:"DRBD (Distributed Replicated Block Device) is composed of Linux kernel modules and related scripts to build high available clusters. It is implemented by mirroring the entire device over the network, which can be thought of as a kind of network RAID.",source:"@site/docs/01.features/03.DRBD.md",sourceDirName:"01.features",slug:"/features/DRBD",permalink:"/docs/features/DRBD",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/01.features/03.DRBD.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"DRBD Installer"},sidebar:"tutorialSidebar",previous:{title:"Scheduler",permalink:"/docs/features/scheduler"},next:{title:"Prerequisites",permalink:"/docs/installation/prepare"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drbd-installer"},"DRBD Installer"),(0,o.kt)("p",null,"DRBD (Distributed Replicated Block Device) is composed of Linux kernel modules and related scripts to build high available clusters. It is implemented by mirroring the entire device over the network, which can be thought of as a kind of network RAID."),(0,o.kt)("p",null,"This installer can directly install DRBD to a container cluster. Currently this module is only for testing purposes."),(0,o.kt)("p",null,"For the commercial product of DRBD, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://linbit.com/contact-us/"},"Linbit"),"."))}p.isMDXComponent=!0}}]);