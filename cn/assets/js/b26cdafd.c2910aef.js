"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3060],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||c;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,u=new Array(c);u[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var i=2;i<c;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9253:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),u=["components"],a={sidebar_position:5,sidebar_label:"Volume"},l="Volume",i={unversionedId:"04concepts/04volume",id:"04concepts/04volume",title:"Volume",description:"\u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u5728\u78c1\u76d8\u4e0a\u662f\u4e34\u65f6\u5b58\u653e\u7684\uff0c\u8fd9\u7ed9\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u8f83\u91cd\u8981\u7684\u5e94\u7528\u7a0b\u5e8f\u5e26\u6765\u4e00\u4e9b\u95ee\u9898\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/04concepts/04volume.md",sourceDirName:"04concepts",slug:"/04concepts/04volume",permalink:"/cn/docs/04concepts/04volume",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04concepts/04volume.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Volume"},sidebar:"tutorialSidebar",previous:{title:"CRD \u548c CR",permalink:"/cn/docs/04concepts/03crd"},next:{title:"LVM",permalink:"/cn/docs/04concepts/05lvm"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"volume"},"Volume"),(0,c.kt)("p",null,"\u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u5728\u78c1\u76d8\u4e0a\u662f\u4e34\u65f6\u5b58\u653e\u7684\uff0c\u8fd9\u7ed9\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u8f83\u91cd\u8981\u7684\u5e94\u7528\u7a0b\u5e8f\u5e26\u6765\u4e00\u4e9b\u95ee\u9898\u3002"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u95ee\u9898\u4e00\uff1a\u5f53\u5bb9\u5668\u5d29\u6e83\u65f6\u6587\u4ef6\u4f1a\u4e22\u5931\u3002kubelet \u4f1a\u91cd\u65b0\u542f\u52a8\u5bb9\u5668\uff0c\u4f46\u5bb9\u5668\u4f1a\u4ee5\u5e72\u51c0\u7684\u72b6\u6001\u91cd\u542f\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u95ee\u9898\u4e8c\uff1a\u5728\u540c\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"li"},"Pod")," \u4e2d\u8fd0\u884c\u591a\u4e2a\u5bb9\u5668\u5e76\u5171\u4eab\u6587\u4ef6\u65f6\u51fa\u73b0\u6b64\u95ee\u9898\u3002")),(0,c.kt)("p",null,"Kubernetes \u5377 (Volume) \u8fd9\u4e00\u62bd\u8c61\u6982\u5ff5\u80fd\u591f\u89e3\u51b3\u8fd9\u4e24\u4e2a\u95ee\u9898\u3002"),(0,c.kt)("p",null,"Kubernetes \u652f\u6301\u5f88\u591a\u7c7b\u578b\u7684\u5377\u3002Pod \u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u4efb\u610f\u6570\u76ee\u7684\u5377\u7c7b\u578b\u3002\u4e34\u65f6\u5377\u7c7b\u578b\u7684\u751f\u547d\u5468\u671f\u4e0e Pod \u76f8\u540c\uff0c\u4f46\u6301\u4e45\u5377\u53ef\u4ee5\u6bd4 Pod \u7684\u5b58\u6d3b\u671f\u957f\u3002\u5f53 Pod \u4e0d\u518d\u5b58\u5728\u65f6\uff0cKubernetes \u4e5f\u4f1a\u9500\u6bc1\u4e34\u65f6\u5377\uff1b\u4e0d\u8fc7 Kubernetes \u4e0d\u4f1a\u9500\u6bc1\u6301\u4e45\u5377\u3002\u5bf9\u4e8e\u7ed9\u5b9a Pod \u4e2d\u4efb\u4f55\u7c7b\u578b\u7684\u5377\uff0c\u5728\u5bb9\u5668\u91cd\u542f\u671f\u95f4\u6570\u636e\u90fd\u4e0d\u4f1a\u4e22\u5931\u3002"),(0,c.kt)("p",null,"\u5377\u7684\u6838\u5fc3\u662f\u4e00\u4e2a\u76ee\u5f55\uff0c\u5176\u4e2d\u53ef\u80fd\u4fdd\u5b58\u4e86\u6570\u636e\uff0cPod \u4e2d\u7684\u5bb9\u5668\u53ef\u4ee5\u8bbf\u95ee\u8be5\u76ee\u5f55\u4e2d\u7684\u6570\u636e\u3002\u6240\u91c7\u7528\u7684\u7279\u5b9a\u5377\u7c7b\u578b\u5c06\u51b3\u5b9a\u8be5\u76ee\u5f55\u5982\u4f55\u5f62\u6210\u3001\u4f7f\u7528\u4f55\u79cd\u4ecb\u8d28\u4fdd\u5b58\u6570\u636e\u4ee5\u53ca\u76ee\u5f55\u4e2d\u5b58\u653e\u7684\u5185\u5bb9\u3002"),(0,c.kt)("p",null,"\u4f7f\u7528\u5377\u65f6\uff0c\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},".spec.volumes")," \u5b57\u6bb5\u4e2d\u8bbe\u7f6e\u4e3a Pod \u63d0\u4f9b\u7684\u5377\uff0c\u5e76\u5728 ",(0,c.kt)("inlineCode",{parentName:"p"},".spec.containers[*].volumeMounts")," \u5b57\u6bb5\u4e2d\u58f0\u660e\u5377\u5728\u5bb9\u5668\u4e2d\u7684\u6302\u8f7d\u4f4d\u7f6e\u3002"),(0,c.kt)("p",null,"\u53c2\u8003 Kubernetes \u5b98\u65b9\u6587\u6863\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/volumes/"},"\u5377")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/"},"\u6301\u4e45\u5377")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/ephemeral-volumes/"},"\u4e34\u65f6\u5377"))))}d.isMDXComponent=!0}}]);