"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2,sidebar_label:"\u672c\u5730\u5b58\u50a8"},o="\u672c\u5730\u5b58\u50a8",i={unversionedId:"architecture/modules/ls",id:"architecture/modules/ls",title:"\u672c\u5730\u5b58\u50a8",description:"\u672c\u5730\u5b58\u50a8 (local Storage, LS) \u662f HwameiStor \u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u65e8\u5728\u4e3a\u5e94\u7528\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u672c\u5730\u6301\u4e45\u5316 LVM \u5b58\u50a8\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/architecture/modules/ls.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/ls",permalink:"/cn/docs/architecture/modules/ls",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/architecture/modules/ls.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u672c\u5730\u5b58\u50a8"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668",permalink:"/cn/docs/architecture/modules/ldm"},next:{title:"\u8c03\u5ea6\u5668",permalink:"/cn/docs/architecture/modules/scheduler"}},c={},s=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u529f\u80fd\u4e0e\u8def\u7ebf\u56fe",id:"\u529f\u80fd\u4e0e\u8def\u7ebf\u56fe",level:2},{value:"\u53cd\u9988",id:"\u53cd\u9988",level:2}],u={toc:s};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u672c\u5730\u5b58\u50a8"},"\u672c\u5730\u5b58\u50a8"),(0,a.kt)("p",null,"\u672c\u5730\u5b58\u50a8 (local Storage, LS) \u662f HwameiStor \u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u65e8\u5728\u4e3a\u5e94\u7528\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u672c\u5730\u6301\u4e45\u5316 LVM \u5b58\u50a8\u5377\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u672c\u5730\u5b58\u50a8\u67b6\u6784\u56fe.png",src:r(4509).Z,width:"1208",height:"478"})),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u672c\u5730\u6301\u4e45\u5316\u6570\u636e\u5377\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"LVM"),"\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u672c\u5730\u78c1\u76d8\u7c7b\u578b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"HDD"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"SSD"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"NVMe"),"\u3002"),(0,a.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,a.kt)("p",null,"HwameiStor \u63d0\u4f9b\u4e24\u79cd\u672c\u5730\u6570\u636e\u5377\uff1aLVM\u3001Disk\u3002\u672c\u5730\u5b58\u50a8\u4f5c\u4e3a HwameiStor \u7684\u4e00\u90e8\u5206\uff0c\u8d1f\u8d23\u63d0\u4f9b LVM \u672c\u5730\u6570\u636e\u5377\uff0c\u5305\u62ec\u9ad8\u53ef\u7528 LVM \u6570\u636e\u5377\u3001\u975e\u9ad8\u53ef\u7528 LVM \u6570\u636e\u5377\u3002"),(0,a.kt)("p",null,"\u975e\u9ad8\u53ef\u7528\u7684 LVM \u672c\u5730\u6570\u636e\u5377\uff0c\u9002\u7528\u4e0b\u5217\u573a\u666f\u548c\u5e94\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5177\u5907\u9ad8\u53ef\u7528\u7279\u6027\u7684",(0,a.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e93"),"\uff0c\u4f8b\u5982 MongoDB \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u5177\u5907\u9ad8\u53ef\u7528\u7279\u6027\u7684",(0,a.kt)("strong",{parentName:"li"},"\u6d88\u606f\u4e2d\u95f4\u4ef6"),"\uff0c\u4f8b\u5982 Kafka\u3001RabbitMQ \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u5177\u5907\u9ad8\u53ef\u7528\u7279\u6027\u7684",(0,a.kt)("strong",{parentName:"li"},"\u952e\u503c\u5b58\u50a8\u7cfb\u7edf"),"\uff0c\u4f8b\u5982 Redis \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5177\u5907\u9ad8\u53ef\u7528\u529f\u80fd\u7684\u5e94\u7528")),(0,a.kt)("p",null,"\u9ad8\u53ef\u7528\u7684 LVM \u672c\u5730\u6570\u636e\u5377\uff0c\u9002\u7528\u4e0b\u5217\u573a\u666f\u548c\u5e94\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e93"),"\uff0c\u4f8b\u5982 MySQL\u3001PostgreSQL \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u9700\u8981\u6570\u636e\u9ad8\u53ef\u7528\u7279\u6027\u7684\u5e94\u7528")),(0,a.kt)("h2",{id:"\u529f\u80fd\u4e0e\u8def\u7ebf\u56fe"},"\u529f\u80fd\u4e0e\u8def\u7ebf\u56fe"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwameistor/local-storage/blob/main/doc/roadmap_zh.md"},"\u529f\u80fd\u8def\u7ebf\u56fe"),"\u63d0\u4f9b\u4e86\u672c\u5730\u5b58\u50a8\u7248\u672c\u53d1\u5e03\u53ca\u7279\u6027\u8ffd\u8e2a\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u53cd\u9988"},"\u53cd\u9988"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u4efb\u4f55\u95ee\u9898\u3001\u610f\u89c1\u3001\u5efa\u8bae\uff0c\u8bf7\u53cd\u9988\u81f3\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwameistor/local-storage/issues"},"Issues")))}p.isMDXComponent=!0},4509:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/localstor-5e4b5f9c496b911def1c139955d68b8f.png"}}]);