"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3,sidebar_label:"PVC Autoresizing"},o="PVC Autoresizing",l={unversionedId:"volumes/pvc_autoresizing",id:"volumes/pvc_autoresizing",title:"PVC Autoresizing",description:'The component "hwameistor-pvc-autoresizer" provides the ability to automatically resize Persistent Volume Claims (PVCs).',source:"@site/docs/volumes/pvc_autoresizing.md",sourceDirName:"volumes",slug:"/volumes/pvc_autoresizing",permalink:"/cn/docs/volumes/pvc_autoresizing",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/volumes/pvc_autoresizing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"PVC Autoresizing"},sidebar:"tutorialSidebar",previous:{title:"Expand Volumes",permalink:"/cn/docs/volumes/expand"},next:{title:"Volume Provisioned IO",permalink:"/cn/docs/volumes/volume_provisioned_io"}},s={},c=[{value:"ResizePolicy",id:"resizepolicy",level:2},{value:"Match Rules",id:"match-rules",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pvc-autoresizing"},"PVC Autoresizing"),(0,r.kt)("p",null,'The component "hwameistor-pvc-autoresizer" provides the ability to automatically resize Persistent Volume Claims (PVCs).\nThe resizing behavior is controlled by the ',(0,r.kt)("inlineCode",{parentName:"p"},"ResizePolicy")," custom resource definition (CRD)."),(0,r.kt)("h2",{id:"resizepolicy"},"ResizePolicy"),(0,r.kt)("p",null,"An example of CR is as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: ResizePolicy\nmetadata:\n  name: resizepolicy1\nspec:\n  warningThreshold: 60\n  resizeThreshold: 80\n  nodePoolUsageLimit: 90\n")),(0,r.kt)("p",null,"The three fields ",(0,r.kt)("inlineCode",{parentName:"p"},"warningThreshold"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resizeThreshold"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodePoolUsageLimit")," are all of type integer and represent percentages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warningThreshold")," currently does not have any associated alert actions. It serves as a\ntarget ratio, indicating that the usage rate of the volume will be below this percentage\nafter resizing is completed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resizeThreshold")," indicates a usage rate at which the resizing action will be triggered\nwhen the volume's usage rate reaches this percentage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodePoolUsageLimit")," represents the upper limit of storage pool usage on a node. If the\nusage rate of a pool reaches this percentage, volumes assigned to that pool will not automatically resize.")),(0,r.kt)("h2",{id:"match-rules"},"Match Rules"),(0,r.kt)("p",null,"This is an examle of CR with label selectors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: ResizePolicy\nmetadata:\n  name: example-policy\nspec:\n  warningThreshold: 60\n  resizeThreshold: 80\n  nodePoolUsageLimit: 90\n  storageClassSelector:\n    matchLabels:\n      pvc-resize: auto\n  namespaceSelector:\n    matchLabels:\n      pvc-resize: auto\n  pvcSelector:\n    matchLabels:\n      pvc-resize: auto\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ResizePolicy")," has three label selectors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pvcSelector")," indicates that PVCs selected by this selector will automatically resize according\nto the policy that selected them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespaceSelector")," indicates that PVCs under namespaces selected by this selector will\nautomatically resize according to this policy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageClassSelector")," indicates that PVCs created from storage classes selected by this\nselector will automatically resize according to this policy.")),(0,r.kt)("p",null,'These three selectors have an "AND" relationship. If you specify multiple selectors in a ',(0,r.kt)("inlineCode",{parentName:"p"},"ResizePolicy"),",\nthe PVCs must match all of the selectors in order to be associated with that policy. If no selectors are\nspecified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResizePolicy"),", it becomes a cluster-wide ",(0,r.kt)("inlineCode",{parentName:"p"},"ResizePolicy"),", acting as the default policy\nfor all PVCs in the entire cluster."))}u.isMDXComponent=!0}}]);