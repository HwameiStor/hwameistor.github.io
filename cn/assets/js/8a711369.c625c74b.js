"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:9,sidebar_label:"LDA \u63a7\u5236\u5668"},i="LDA \u63a7\u5236\u5668",l={unversionedId:"modules/lda_controller",id:"modules/lda_controller",title:"LDA \u63a7\u5236\u5668",description:"LDA \u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5355\u72ec\u7684 CRD - localdiskactions\uff0c\u7528\u4e8e\u5339\u914d localdisk\uff0c\u5e76\u6267\u884c\u6307\u5b9a\u7684 action\u3002\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/modules/lda_controller.md",sourceDirName:"modules",slug:"/modules/lda_controller",permalink:"/cn/docs/modules/lda_controller",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/modules/lda_controller.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"LDA \u63a7\u5236\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u5f62\u754c\u9762",permalink:"/cn/docs/modules/gui"},next:{title:"Installation",permalink:"/cn/docs/category/installation"}},c={},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lda-\u63a7\u5236\u5668"},"LDA \u63a7\u5236\u5668"),(0,o.kt)("p",null,"LDA \u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5355\u72ec\u7684 CRD - ",(0,o.kt)("inlineCode",{parentName:"p"},"localdiskactions"),"\uff0c\u7528\u4e8e\u5339\u914d localdisk\uff0c\u5e76\u6267\u884c\u6307\u5b9a\u7684 action\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskAction\nmetadata:\n  name: forbidden-1\nspec:\n  action: reserve\n  rule:\n    minCapacity: 1024\n    devicePath: /dev/rbd*\n\n---\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskAction\nmetadata:\n  name: forbidden-2\nspec:\n  action: reserve\n  rule:\n    maxCapacity: 1048576\n    devicePath: /dev/sd*\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u7684 yaml \u8868\u793a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6bd4 1024 \u5b57\u8282\u66f4\u5c0f\u4e14 devicePath \u6ee1\u8db3 ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/rbd*")," \u5339\u914d\u6761\u4ef6\u7684 Localdisk \u5c06\u88ab\u9884\u7559"),(0,o.kt)("li",{parentName:"ol"},"\u6bd4 1048576 \u5b57\u8282\u66f4\u5927\u4e14 devicePath \u6ee1\u8db3 ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/sd*")," \u5339\u914d\u6761\u4ef6\u7684 Localdisk \u5c06\u88ab\u9884\u7559")),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5f53\u524d",(0,o.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684 action \u4ec5 reserve")))}p.isMDXComponent=!0}}]);