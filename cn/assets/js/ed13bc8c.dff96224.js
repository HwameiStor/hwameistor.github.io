"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),k=o,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||n;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6712:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2,sidebar_label:"HwameiStor-Operator \u5b89\u88c5"},i="\u901a\u8fc7 HwameiStor-Operator \u5b89\u88c5",l={unversionedId:"quick_start/install/operator",id:"quick_start/install/operator",title:"\u901a\u8fc7 HwameiStor-Operator \u5b89\u88c5",description:"Hwameistor-Operator \u8d1f\u8d23\u81ea\u52a8\u5316\u5b89\u88c5\u5e76\u7ba1\u7406 HwameiStor \u7cfb\u7edf\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/install/operator.md",sourceDirName:"quick_start/install",slug:"/quick_start/install/operator",permalink:"/cn/docs/quick_start/install/operator",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/install/operator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"HwameiStor-Operator \u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/cn/docs/quick_start/install/prereq"},next:{title:"\u67e5\u770b\u7cfb\u7edf\u72b6\u6001",permalink:"/cn/docs/quick_start/install/post_check"}},p={},s=[{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u901a\u8fc7-hwameistor-operator-\u5b89\u88c5"},"\u901a\u8fc7 HwameiStor-Operator \u5b89\u88c5"),(0,o.kt)("p",null,"Hwameistor-Operator \u8d1f\u8d23\u81ea\u52a8\u5316\u5b89\u88c5\u5e76\u7ba1\u7406 HwameiStor \u7cfb\u7edf\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HwameiStor \u7ec4\u4ef6\u7684\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406 (LCM)\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LocalDiskManager"),(0,o.kt)("li",{parentName:"ul"},"LocalStorage"),(0,o.kt)("li",{parentName:"ul"},"Scheduler"),(0,o.kt)("li",{parentName:"ul"},"AdmissionController"),(0,o.kt)("li",{parentName:"ul"},"VolumeEvictor"),(0,o.kt)("li",{parentName:"ul"},"Exporter"),(0,o.kt)("li",{parentName:"ul"},"Apiserver"),(0,o.kt)("li",{parentName:"ul"},"Graph UI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6839\u636e\u4e0d\u540c\u76ee\u7684\u548c\u7528\u9014\u914d\u7f6e\u8282\u70b9\u78c1\u76d8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u81ea\u52a8\u53d1\u73b0\u8282\u70b9\u78c1\u76d8\u7684\u7c7b\u578b\uff0c\u5e76\u4ee5\u6b64\u81ea\u52a8\u521b\u5efa HwameiStor \u5b58\u50a8\u6c60")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6839\u636e HwameiStor \u7cfb\u7edf\u7684\u914d\u7f6e\u548c\u529f\u80fd\u81ea\u52a8\u521b\u5efa\u76f8\u5e94\u7684 StorageClass"))),(0,o.kt)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0 hwameistor-operator Helm Repo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add hwameistor-operator https://hwameistor.io/hwameistor-operator\nhelm repo update hwameistor-operator\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u90e8\u7f72hwameistor-operator"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator\n")))),(0,o.kt)("p",null,"\u53ef\u9009\u53c2\u6570:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u542f\u9a8c\u8bc1:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator \\\n--set apiserver.authentication.enable=true \\\n--set apiserver.authentication.accessId={\u7528\u6237\u540d} \\\n--set apiserver.authentication.secretKey={\u5bc6\u7801}\n")),"\u60a8\u4e5f\u53ef\u4ee5\u5728\u5b89\u88c5\u540e\u901a\u8fc7\u4fee\u6539deployment/apiserver\u6765\u5f00\u542f\u9a8c\u8bc1\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u56fd\u5185\u6e90:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install hwameistor-operator hwameistor-operator/hwameistor-operator \\\n--set global.hwameistorImageRegistry=ghcr.m.daocloud.io \\\n--set global.k8sImageRegistry=m.daocloud.io/registry.k8s.io\n")))))}m.isMDXComponent=!0}}]);