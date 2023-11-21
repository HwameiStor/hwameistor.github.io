"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),p=i,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||n;return r?o.createElement(h,s(s({ref:t},d),{},{components:r})):o.createElement(h,s({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:5,sidebar_label:"Admission Controller"},s="admission-controller",a={unversionedId:"modules/admission_controller",id:"modules/admission_controller",title:"admission-controller",description:"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume and help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to K8S Dynamic Admission Control.",source:"@site/docs/modules/admission_controller.md",sourceDirName:"modules",slug:"/modules/admission_controller",permalink:"/docs/modules/admission_controller",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/modules/admission_controller.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Admission Controller"},sidebar:"tutorialSidebar",previous:{title:"Scheduler",permalink:"/docs/modules/scheduler"},next:{title:"Evictor",permalink:"/docs/modules/evictor"}},l={},c=[{value:"How to identify a HwameiStor volume?",id:"how-to-identify-a-hwameistor-volume",level:2},{value:"Which resources will be verified?",id:"which-resources-will-be-verified",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admission-controller"},"admission-controller"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"admission-controller")," is a webhook that can automatically verify which pod uses the HwameiStor volume and help to modify the schedulerName to hwameistor-scheduler. For the specific principle, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"K8S Dynamic Admission Control"),"."),(0,i.kt)("h2",{id:"how-to-identify-a-hwameistor-volume"},"How to identify a HwameiStor volume?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"admission-controller")," gets all the PVCs used by a pod, and checks the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"provisioner")," of each PVC in turn. If the suffix of the provisioner name is ",(0,i.kt)("inlineCode",{parentName:"p"},"*.hwameistor.io"),", it is believed that the pod is using the volume provided by HwameiStor."),(0,i.kt)("h2",{id:"which-resources-will-be-verified"},"Which resources will be verified?"),(0,i.kt)("p",null,"Only Pod resources will be verified, and the verification process occurs at the time of creation."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In order to ensure that the pods of HwameiStor can be started smoothly, the pods in the namespace where HwameiStor is deployed will not be verified.")))}m.isMDXComponent=!0}}]);