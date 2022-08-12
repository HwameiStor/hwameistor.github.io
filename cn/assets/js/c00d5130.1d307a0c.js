"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:5,sidebar_label:"\u51c6\u5165\u63a7\u5236\u5668"},a="\u51c6\u5165\u63a7\u5236\u5668",s={unversionedId:"architecture/modules/admission_controller",id:"architecture/modules/admission_controller",title:"\u51c6\u5165\u63a7\u5236\u5668",description:"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume and, help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to K8S Dynamic Admission Control.",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/architecture/modules/admission_controller.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/admission_controller",permalink:"/cn/docs/architecture/modules/admission_controller",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/architecture/modules/admission_controller.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u51c6\u5165\u63a7\u5236\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u5ea6\u5668",permalink:"/cn/docs/architecture/modules/scheduler"},next:{title:"\u8d44\u6e90",permalink:"/cn/docs/architecture/resources"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u51c6\u5165\u63a7\u5236\u5668"},"\u51c6\u5165\u63a7\u5236\u5668"),(0,n.kt)("p",null,"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume and, help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"K8S Dynamic Admission Control"),"."),(0,n.kt)("h1",{id:"how-to-identify-a-hwameistor-volume"},"How to identify a HwameiStor volume?"),(0,n.kt)("p",null,"admission-controller gets all the PVCs used by a pod, and checks the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"provisioner")," of each PVC in turn. If the name suffix of the provisioner is ",(0,n.kt)("inlineCode",{parentName:"p"},"*.hwameistor.io"),", it is believed that the pod is using the volume provided by HwameiStor."),(0,n.kt)("h1",{id:"which-resources-will-be-verified"},"Which resources will be verified?"),(0,n.kt)("p",null,"Only ",(0,n.kt)("inlineCode",{parentName:"p"},"POD")," resources will be verified, and the verification process occurs at the time of creation."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In order to ensure that the pod of HwameiStor can be started smoothly and the pod of the namespace where HwameiStor is deployed will not be verified.")))}d.isMDXComponent=!0}}]);