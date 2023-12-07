"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:5,sidebar_label:"\u51c6\u5165\u63a7\u5236\u5668"},a="\u51c6\u5165\u63a7\u5236\u5668",s={unversionedId:"modules/admission_controller",id:"modules/admission_controller",title:"\u51c6\u5165\u63a7\u5236\u5668",description:"\u51c6\u5165\u63a7\u5236\u5668\u662f\u4e00\u79cd Webhook\uff0c\u53ef\u4ee5\u81ea\u52a8\u9a8c\u8bc1 HwameiStor \u6570\u636e\u5377\uff0c\u534f\u52a9\u5c06 schedulerName \u4fee\u6539\u4e3a hwameistor-scheduler\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/modules/admission_controller.md",sourceDirName:"modules",slug:"/modules/admission_controller",permalink:"/cn/docs/modules/admission_controller",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/modules/admission_controller.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u51c6\u5165\u63a7\u5236\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u5ea6\u5668",permalink:"/cn/docs/modules/scheduler"},next:{title:"\u9a71\u9010\u5668",permalink:"/cn/docs/modules/evictor"}},l={},c=[{value:"\u8bc6\u522b HwameiStor \u6570\u636e\u5377",id:"\u8bc6\u522b-hwameistor-\u6570\u636e\u5377",level:2},{value:"\u9a8c\u8bc1\u8d44\u6e90",id:"\u9a8c\u8bc1\u8d44\u6e90",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u51c6\u5165\u63a7\u5236\u5668"},"\u51c6\u5165\u63a7\u5236\u5668"),(0,o.kt)("p",null,"\u51c6\u5165\u63a7\u5236\u5668\u662f\u4e00\u79cd Webhook\uff0c\u53ef\u4ee5\u81ea\u52a8\u9a8c\u8bc1 HwameiStor \u6570\u636e\u5377\uff0c\u534f\u52a9\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName")," \u4fee\u6539\u4e3a hwameistor-scheduler\u3002\n\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/extensible-admission-controllers/"},"K8s \u52a8\u6001\u51c6\u5165\u63a7\u5236"),"\u3002"),(0,o.kt)("h2",{id:"\u8bc6\u522b-hwameistor-\u6570\u636e\u5377"},"\u8bc6\u522b HwameiStor \u6570\u636e\u5377"),(0,o.kt)("p",null,"\u51c6\u5165\u63a7\u5236\u5668\u53ef\u4ee5\u83b7\u53d6 Pod \u4f7f\u7528\u7684\u6240\u6709 PVC\uff0c\u5e76\u68c0\u67e5\u6bcf\u4e2a PVC\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/storage/storage-classes/#provisioner"},"\u5b58\u50a8\u5236\u5907\u5668"),"\u3002\n\u5982\u679c\u5236\u5907\u5668\u7684\u540d\u79f0\u540e\u7f00\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"*.hwameistor.io"),"\uff0c\u8868\u793a Pod \u6b63\u5728\u4f7f\u7528 HwameiStor \u63d0\u4f9b\u7684\u6570\u636e\u5377\u3002"),(0,o.kt)("h2",{id:"\u9a8c\u8bc1\u8d44\u6e90"},"\u9a8c\u8bc1\u8d44\u6e90"),(0,o.kt)("p",null,"\u51c6\u5165\u63a7\u5236\u5668\u53ea\u9a8c\u8bc1 Pod \u8d44\u6e90\uff0c\u5e76\u5728\u521b\u5efa\u8d44\u6e90\u65f6\u5c31\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u786e\u4fdd HwameiStor \u7684 Pod \u53ef\u4ee5\u987a\u5229\u542f\u52a8\uff0c\u4e0d\u4f1a\u6821\u9a8c HwameiStor \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\u7684 Pod\u3002")))}p.isMDXComponent=!0}}]);