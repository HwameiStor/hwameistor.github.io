"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4,sidebar_label:"\u8c03\u5ea6\u5668"},i="\u8c03\u5ea6\u5668",c={unversionedId:"architecture_of_hwameistor/3.2.modules/3.2.4.scheduler",id:"architecture_of_hwameistor/3.2.modules/3.2.4.scheduler",title:"\u8c03\u5ea6\u5668",description:"\u8c03\u5ea6\u5668 (scheduler) \u662f HwameiStor \u7684\u91cd\u8981\u7ec4\u4ef6\u4e4b\u4e00\u3002\u5b83\u81ea\u52a8\u5c06 Pod \u8c03\u5ea6\u5230\u914d\u6709 HwameiStor \u5b58\u50a8\u5377\u7684\u6b63\u786e\u8282\u70b9\u3002\u4f7f\u7528\u8c03\u5ea6\u5668\u540e\uff0cPod \u4e0d\u5fc5\u518d\u4f7f\u7528 NodeAffinity \u6216 NodeSelector \u5b57\u6bb5\u6765\u9009\u62e9\u8282\u70b9\u3002\u8c03\u5ea6\u5668\u80fd\u5904\u7406 LVM \u548c Disk \u5b58\u50a8\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/3.architecture_of_hwameistor/3.2.modules/3.2.4.scheduler.md",sourceDirName:"3.architecture_of_hwameistor/3.2.modules",slug:"/architecture_of_hwameistor/3.2.modules/3.2.4.scheduler",permalink:"/cn/docs/architecture_of_hwameistor/3.2.modules/3.2.4.scheduler",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/3.architecture_of_hwameistor/3.2.modules/3.2.4.scheduler.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u8c03\u5ea6\u5668"},sidebar:"tutorialSidebar",previous:{title:"DRBD \u5b89\u88c5\u5668",permalink:"/cn/docs/architecture_of_hwameistor/3.2.modules/3.2.3.drbd_installer"},next:{title:"\u8d44\u6e90",permalink:"/cn/docs/architecture_of_hwameistor/3.3.resources"}},l={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u901a\u8fc7 Helm Chart \u90e8\u7f72",id:"\u901a\u8fc7-helm-chart-\u90e8\u7f72",level:2},{value:"\u901a\u8fc7 YAML \u90e8\u7f72\uff08\u9488\u5bf9\u5f00\u53d1\uff09",id:"\u901a\u8fc7-yaml-\u90e8\u7f72\u9488\u5bf9\u5f00\u53d1",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8c03\u5ea6\u5668"},"\u8c03\u5ea6\u5668"),(0,o.kt)("p",null,"\u8c03\u5ea6\u5668 (scheduler) \u662f HwameiStor \u7684\u91cd\u8981\u7ec4\u4ef6\u4e4b\u4e00\u3002\u5b83\u81ea\u52a8\u5c06 Pod \u8c03\u5ea6\u5230\u914d\u6709 HwameiStor \u5b58\u50a8\u5377\u7684\u6b63\u786e\u8282\u70b9\u3002\u4f7f\u7528\u8c03\u5ea6\u5668\u540e\uff0cPod \u4e0d\u5fc5\u518d\u4f7f\u7528 NodeAffinity \u6216 NodeSelector \u5b57\u6bb5\u6765\u9009\u62e9\u8282\u70b9\u3002\u8c03\u5ea6\u5668\u80fd\u5904\u7406 LVM \u548c Disk \u5b58\u50a8\u5377\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u8c03\u5ea6\u5668\u5e94\u5728\u96c6\u7fa4\u4e2d\u4ee5 HA \u6a21\u5f0f\u90e8\u7f72\uff0c\u8fd9\u662f\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,o.kt)("h2",{id:"\u901a\u8fc7-helm-chart-\u90e8\u7f72"},"\u901a\u8fc7 Helm Chart \u90e8\u7f72"),(0,o.kt)("p",null,"\u8c03\u5ea6\u5668\u5fc5\u987b\u4e0e\u672c\u5730\u78c1\u76d8\u548c\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668\u914d\u5408\u4f7f\u7528\u3002\u5efa\u8bae\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"/cn/docs/quick_start/2.1.installation/2.1.2.deploy_helm_charts"},"Helm Chart \u8fdb\u884c\u5b89\u88c5"),"\u3002"),(0,o.kt)("h2",{id:"\u901a\u8fc7-yaml-\u90e8\u7f72\u9488\u5bf9\u5f00\u53d1"},"\u901a\u8fc7 YAML \u90e8\u7f72\uff08\u9488\u5bf9\u5f00\u53d1\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f deploy/scheduler.yaml\n")))}d.isMDXComponent=!0}}]);