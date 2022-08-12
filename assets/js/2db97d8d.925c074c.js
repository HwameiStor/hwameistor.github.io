"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=n,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return r?o.createElement(h,a(a({ref:t},d),{},{components:r})):o.createElement(h,a({ref:t},d))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:5,sidebar_label:"Admission Controller"},a="admission-controller",s={unversionedId:"architecture/modules/admission_controller",id:"architecture/modules/admission_controller",title:"admission-controller",description:"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume and, help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to K8S Dynamic Admission Control.",source:"@site/docs/architecture/modules/admission_controller.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/admission_controller",permalink:"/docs/architecture/modules/admission_controller",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/architecture/modules/admission_controller.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Admission Controller"},sidebar:"tutorialSidebar",previous:{title:"Scheduler",permalink:"/docs/architecture/modules/scheduler"},next:{title:"Resources",permalink:"/docs/architecture/resources"}},c={},l=[],d={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"admission-controller"},"admission-controller"),(0,n.kt)("p",null,"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume and, help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"K8S Dynamic Admission Control"),"."),(0,n.kt)("h1",{id:"how-to-identify-a-hwameistor-volume"},"How to identify a HwameiStor volume?"),(0,n.kt)("p",null,"admission-controller gets all the PVCs used by a pod, and checks the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"provisioner")," of each PVC in turn. If the name suffix of the provisioner is ",(0,n.kt)("inlineCode",{parentName:"p"},"*.hwameistor.io"),", it is believed that the pod is using the volume provided by HwameiStor."),(0,n.kt)("h1",{id:"which-resources-will-be-verified"},"Which resources will be verified?"),(0,n.kt)("p",null,"Only ",(0,n.kt)("inlineCode",{parentName:"p"},"POD")," resources will be verified, and the verification process occurs at the time of creation."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In order to ensure that the pod of HwameiStor can be started smoothly and the pod of the namespace where HwameiStor is deployed will not be verified.")))}u.isMDXComponent=!0}}]);