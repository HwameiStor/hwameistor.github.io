"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[382],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||c;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5365:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],i={sidebar_position:7,sidebar_label:"PV \u548c PVC"},s="PV \u548c PVC",u={unversionedId:"04concepts/06pvc",id:"04concepts/06pvc",title:"PV \u548c PVC",description:"PV\uff08PersistentVolume\uff0c\u6301\u4e45\u5377\uff09\u662f\u5bf9\u5b58\u50a8\u8d44\u6e90\u7684\u62bd\u8c61\uff0c\u5c06\u5b58\u50a8\u5b9a\u4e49\u4e3a\u4e00\u79cd\u5bb9\u5668\u5e94\u7528\u53ef\u4ee5\u4f7f\u7528\u7684\u8d44\u6e90\u3002PV \u7531\u7ba1\u7406\u5458\u521b\u5efa\u548c\u914d\u7f6e\uff0c\u4e0e\u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u5177\u4f53\u5b9e\u73b0\u76f4\u63a5\u76f8\u5173\uff0c\u4f8b\u5982\u6587\u4ef6\u5b58\u50a8\u3001\u5757\u5b58\u50a8\u3001\u5bf9\u8c61\u5b58\u50a8\u6216 DRBD \u7b49\uff0c\u901a\u8fc7\u63d2\u4ef6\u5f0f\u7684\u673a\u5236\u8fdb\u884c\u7ba1\u7406\uff0c\u4f9b\u5e94\u7528\u8bbf\u95ee\u548c\u4f7f\u7528\u3002\u9664 EmptyDir \u7c7b\u578b\u7684\u5b58\u50a8\u5377\uff0cPV \u7684\u751f\u547d\u5468\u671f\u72ec\u7acb\u4e8e\u4f7f\u7528\u5b83\u7684 Pod\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/04concepts/06pvc.md",sourceDirName:"04concepts",slug:"/04concepts/06pvc",permalink:"/cn/docs/04concepts/06pvc",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04concepts/06pvc.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"PV \u548c PVC"},sidebar:"tutorialSidebar",previous:{title:"LVM",permalink:"/cn/docs/04concepts/05lvm"},next:{title:"\u793e\u533a",permalink:"/cn/docs/05community"}},p={},l=[],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"pv-\u548c-pvc"},"PV \u548c PVC"),(0,c.kt)("p",null,"PV\uff08PersistentVolume\uff0c\u6301\u4e45\u5377\uff09\u662f\u5bf9\u5b58\u50a8\u8d44\u6e90\u7684\u62bd\u8c61\uff0c\u5c06\u5b58\u50a8\u5b9a\u4e49\u4e3a\u4e00\u79cd\u5bb9\u5668\u5e94\u7528\u53ef\u4ee5\u4f7f\u7528\u7684\u8d44\u6e90\u3002PV \u7531\u7ba1\u7406\u5458\u521b\u5efa\u548c\u914d\u7f6e\uff0c\u4e0e\u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u5177\u4f53\u5b9e\u73b0\u76f4\u63a5\u76f8\u5173\uff0c\u4f8b\u5982\u6587\u4ef6\u5b58\u50a8\u3001\u5757\u5b58\u50a8\u3001\u5bf9\u8c61\u5b58\u50a8\u6216 DRBD \u7b49\uff0c\u901a\u8fc7\u63d2\u4ef6\u5f0f\u7684\u673a\u5236\u8fdb\u884c\u7ba1\u7406\uff0c\u4f9b\u5e94\u7528\u8bbf\u95ee\u548c\u4f7f\u7528\u3002\u9664 EmptyDir \u7c7b\u578b\u7684\u5b58\u50a8\u5377\uff0cPV \u7684\u751f\u547d\u5468\u671f\u72ec\u7acb\u4e8e\u4f7f\u7528\u5b83\u7684 Pod\u3002"),(0,c.kt)("p",null,"PVC\uff08PersistentVolumeClaim\uff0c\u6301\u4e45\u5377\u58f0\u660e\uff09\u662f\u7528\u6237\u5bf9\u5b58\u50a8\u8d44\u6e90\u7684\u4e00\u4e2a\u7533\u8bf7\u3002\u5c31\u50cf Pod \u6d88\u8017 Node \u7684\u8d44\u6e90\u4e00\u6837\uff0cPVC \u4f1a\u6d88\u8017 PV \u7684\u8d44\u6e90\u3002PVC \u53ef\u4ee5\u7533\u8bf7\u5b58\u50a8\u7a7a\u95f4\u7684\u5927\u5c0f (Size) \u548c\u8bbf\u95ee\u6a21\u5f0f\uff08\u4f8b\u5982 ReadWriteOnce\u3001ReadOnlyMany \u6216 ReadWriteMany)\u3002"),(0,c.kt)("p",null,"\u4f7f\u7528 PVC \u7533\u8bf7\u7684\u5b58\u50a8\u7a7a\u95f4\u4ecd\u7136\u4e0d\u6ee1\u8db3\u5e94\u7528\u5bf9\u5b58\u50a8\u8bbe\u5907\u7684\u5404\u79cd\u9700\u6c42\u3002\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u7a0b\u5e8f\u5bf9\u5b58\u50a8\u8bbe\u5907\u7684\u7279\u6027\u548c\u6027\u80fd\u90fd\u6709\u4e0d\u540c\u7684\u8981\u6c42\uff0c\u5305\u62ec\u8bfb\u5199\u901f\u5ea6\u3001\u5e76\u53d1\u6027\u80fd\u3001\u6570\u636e\u5197\u4f59\u7b49\u8981\u6c42\u3002\u8fd9\u5c31\u9700\u8981\u4f7f\u7528\u8d44\u6e90\u5bf9\u8c61 StorageClass\uff0c\u7528\u4e8e\u6807\u8bb0\u5b58\u50a8\u8d44\u6e90\u548c\u6027\u80fd\uff0c\u6839\u636e PVC \u7684\u9700\u6c42\u52a8\u6001\u4f9b\u7ed9\u5408\u9002\u7684 PV \u8d44\u6e90\u3002StorageClass \u548c\u5b58\u50a8\u8d44\u6e90\u52a8\u6001\u4f9b\u5e94\u7684\u673a\u5236\u7ecf\u5b8c\u5584\u540e\uff0c\u5b9e\u73b0\u4e86\u5b58\u50a8\u5377\u7684\u6309\u9700\u521b\u5efa\uff0c\u5728\u5171\u4eab\u5b58\u50a8\u7684\u81ea\u52a8\u5316\u7ba1\u7406\u8fdb\u7a0b\u4e2d\u5b9e\u73b0\u4e86\u91cd\u8981\u7684\u4e00\u6b65\u3002"),(0,c.kt)("p",null,"\u53e6\u8bf7\u53c2\u8003 Kubernetes \u5b98\u65b9\u6587\u6863\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/"},"\u6301\u4e45\u5377")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/storage-classes/"},"\u5b58\u50a8\u7c7b")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/storage/dynamic-provisioning/"},"\u52a8\u6001\u5377\u4f9b\u5e94"))))}m.isMDXComponent=!0}}]);