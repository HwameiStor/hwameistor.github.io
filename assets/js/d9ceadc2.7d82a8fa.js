"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8564],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:4,sidebar_label:"CRD and CR"},c="CRD and CR",l={unversionedId:"04concepts/03crd",id:"04concepts/03crd",title:"CRD and CR",description:"CRD",source:"@site/docs/04concepts/03crd.md",sourceDirName:"04concepts",slug:"/04concepts/03crd",permalink:"/docs/04concepts/03crd",editUrl:"https://github.com/hwameistor/hwameistor/docs/04concepts/03crd.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"CRD and CR"},sidebar:"tutorialSidebar",previous:{title:"CSI",permalink:"/docs/04concepts/02csi"},next:{title:"Volume",permalink:"/docs/04concepts/04volume"}},u={},p=[{value:"CRD",id:"crd",level:2},{value:"CR",id:"cr",level:2},{value:"CRDs + Controllers",id:"crds--controllers",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crd-and-cr"},"CRD and CR"),(0,i.kt)("h2",{id:"crd"},"CRD"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CRD")," is the abbreviation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Resource Definition"),", and is a resource type natively provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes"),". It is the definition of Custom Resource (CR) to describe what a custom resource is."),(0,i.kt)("p",null,"A CRD can register a new resource with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes")," cluster to extend the capabilities of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes")," cluster. With ",(0,i.kt)("inlineCode",{parentName:"p"},"CRD"),", you can define the abstraction of the underlying infrastructure, customize resource types based on business needs, and use the existing resources and capabilities of ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes")," to define higher-level abstractions through a Lego-like building blocks."),(0,i.kt)("h2",{id:"cr"},"CR"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CR")," is the abbreviation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Resource"),". In practice, it is an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"CRD"),", a resource description that matches with the field format in ",(0,i.kt)("inlineCode",{parentName:"p"},"CRD"),"."),(0,i.kt)("h2",{id:"crds--controllers"},"CRDs + Controllers"),(0,i.kt)("p",null,"We all know that ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes")," has powerful scalability, but only ",(0,i.kt)("inlineCode",{parentName:"p"},"CRD")," is not useful. It also needs the support of controller (",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Controller"),") to reflect the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"CRD"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Controller")," can listen ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD")," events of ",(0,i.kt)("inlineCode",{parentName:"p"},"CR")," to implement custom business logic."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CRDs + Controllers = Everything"),"."),(0,i.kt)("p",null,"See also the official documentation provided by Kubernetes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"CustomResource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/zh/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"},"CustomResourceDefinition"))))}m.isMDXComponent=!0}}]);