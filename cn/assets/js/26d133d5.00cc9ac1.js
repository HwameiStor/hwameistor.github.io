"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,C=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(C,a(a({ref:t},p),{},{components:n})):r.createElement(C,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4,sidebar_label:"CRD \u548c CR"},a="CRD \u548c CR",l={unversionedId:"terminologies/6.4.crd_and_cr",id:"terminologies/6.4.crd_and_cr",title:"CRD \u548c CR",description:"CRD",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/6.terminologies/6.4.crd_and_cr.md",sourceDirName:"6.terminologies",slug:"/terminologies/6.4.crd_and_cr",permalink:"/cn/docs/terminologies/6.4.crd_and_cr",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/docs/6.terminologies/6.4.crd_and_cr.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"CRD \u548c CR"},sidebar:"tutorialSidebar",previous:{title:"CSI \u63a5\u53e3",permalink:"/cn/docs/terminologies/6.3.csi"},next:{title:"Volume",permalink:"/cn/docs/terminologies/6.5.volume"}},s={},c=[{value:"CRD",id:"crd",level:2},{value:"CR",id:"cr",level:2},{value:"CRDs + Controllers",id:"crds--controllers",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crd-\u548c-cr"},"CRD \u548c CR"),(0,o.kt)("h2",{id:"crd"},"CRD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Resource Definition")," \u7684\u7f29\u5199\uff0c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u5185\u7f6e\u539f\u751f\u7684\u4e00\u4e2a\u8d44\u6e90\u7c7b\u578b\u3002\u5b83\u662f\u81ea\u5b9a\u4e49\u8d44\u6e90 (CR) \u7684\u5b9a\u4e49\uff0c\u7528\u6765\u63cf\u8ff0\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"CRD \u53ef\u4ee5\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u96c6\u7fa4\u6ce8\u518c\u4e00\u79cd\u65b0\u8d44\u6e90\uff0c\u7528\u4e8e\u62d3\u5c55 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u96c6\u7fa4\u7684\u80fd\u529b\u3002\u6709\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD"),"\uff0c\u5c31\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u7684\u62bd\u8c61\uff0c\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u6765\u5b9a\u5236\u8d44\u6e90\u7c7b\u578b\uff0c\u5229\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u5df2\u6709\u7684\u8d44\u6e90\u548c\u80fd\u529b\uff0c\u901a\u8fc7\u4e50\u9ad8\u79ef\u6728\u7684\u6a21\u5f0f\u5b9a\u4e49\u51fa\u66f4\u9ad8\u5c42\u6b21\u7684\u62bd\u8c61\u3002"),(0,o.kt)("h2",{id:"cr"},"CR"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CR")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Resource")," \u7684\u7f29\u5199\uff0c\u5b83\u5b9e\u9645\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," \u7684\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u662f\u7b26\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," \u4e2d\u5b57\u6bb5\u683c\u5f0f\u5b9a\u4e49\u7684\u4e00\u4e2a\u8d44\u6e90\u63cf\u8ff0\u3002"),(0,o.kt)("h2",{id:"crds--controllers"},"CRDs + Controllers"),(0,o.kt)("p",null,"\u6211\u4eec\u90fd\u77e5\u9053 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u7684\u6269\u5c55\u80fd\u529b\u5f88\u5f3a\u5927\uff0c\u4f46\u4ec5\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," \u5e76\u6ca1\u6709\u4ec0\u4e48\u7528\uff0c\u8fd8\u9700\u8981\u6709\u63a7\u5236\u5668 (",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Controller"),") \u7684\u652f\u6491\uff0c\u624d\u80fd\u4f53\u73b0\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"CRD")," \u7684\u4ef7\u503c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Controller")," \u53ef\u4ee5\u76d1\u542c ",(0,o.kt)("inlineCode",{parentName:"p"},"CR")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"CRUD")," \u4e8b\u4ef6\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e1a\u52a1\u903b\u8f91\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u4e2d\uff0c\u53ef\u4ee5\u8bf4\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"CRDs + Controllers = Everything"),"\u3002"),(0,o.kt)("p",null,"\u53e6\u8bf7\u53c2\u8003 Kubernetes \u5b98\u65b9\u6587\u6863\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResource")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"},"CustomResourceDefinition"))))}u.isMDXComponent=!0}}]);