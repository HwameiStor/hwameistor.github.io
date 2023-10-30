"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:7,sidebar_label:"System Audit"},i="System Audit",s={unversionedId:"quick_start/advanced_features/system_audit",id:"quick_start/advanced_features/system_audit",title:"System Audit",description:"It's important to record the information about the system operation history. HwameiStor provides a feature of audit to record the operations on all the system resources, including Cluster, Node, StoragePool, Volume, etc...",source:"@site/docs/quick_start/advanced_features/system_audit.md",sourceDirName:"quick_start/advanced_features",slug:"/quick_start/advanced_features/system_audit",permalink:"/docs/quick_start/advanced_features/system_audit",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/advanced_features/system_audit.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"System Audit"},sidebar:"tutorialSidebar",previous:{title:"Volume Clone",permalink:"/docs/quick_start/advanced_features/volume_clone"},next:{title:"PVC Autoresizing",permalink:"/docs/quick_start/advanced_features/pvc_autoresizing"}},c={},u=[{value:"How to use",id:"how-to-use",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-audit"},"System Audit"),(0,n.kt)("p",null,"It's important to record the information about the system operation history. HwameiStor provides a feature of audit to record the operations on all the system resources, including Cluster, Node, StoragePool, Volume, etc..."),(0,n.kt)("p",null,"The audit information is easier for user to understant and parse for various purposes."),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"HwameiStor designs a new CRD for every resource as below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: hwameistor.io/v1alpha1\nkind: Event\n  name: \nspec:\n  resourceType: <Cluster | Node | StoragePool | Volume>\n  resourceName:\n  records:\n  - action:\n    actionContent: # in JSON format\n    time:\n    state:\n    stateContent: # in JSON format\n")),(0,n.kt)("p",null,"For instance, let's look at audit information of a volume:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: hwameistor.io/v1alpha1\nkind: Event\nmetadata:\n  creationTimestamp: "2023-08-08T15:52:55Z"\n  generation: 5\n  name: volume-pvc-34e3b086-2d95-4980-beb6-e175fd79a847\n  resourceVersion: "10221888"\n  uid: d3ebaffb-eddb-4c84-93be-efff350688af\nspec:\n  resourceType: Volume\n  resourceName: pvc-34e3b086-2d95-4980-beb6-e175fd79a847\n  records:\n  - action: Create\n    actionContent: \'{"requiredCapacityBytes":5368709120,"volumeQoS":{},"poolName":"LocalStorage_PoolHDD","replicaNumber":2,"convertible":true,"accessibility":{"nodes":["k8s-node1","k8s-master"],"zones":["default"],"regions":["default"]},"pvcNamespace":"default","pvcName":"mysql-data-volume","volumegroup":"db890e34-a092-49ac-872b-f2a422439c81"}\'\n    time: "2023-08-08T15:52:55Z"\n  - action: Mount\n    actionContent: \'{"allocatedCapacityBytes":5368709120,"replicas":["pvc-34e3b086-2d95-4980-beb6-e175fd79a847-krp927","pvc-34e3b086-2d95-4980-beb6-e175fd79a847-wm7p56"],"state":"Ready","publishedNode":"k8s-node1","fsType":"xfs","rawblock":false}\'\n    time: "2023-08-08T15:53:07Z"\n  - action: Unmount\n    actionContent: \'{"allocatedCapacityBytes":5368709120,"usedCapacityBytes":33783808,"totalInode":2621120,"usedInode":3,"replicas":["pvc-34e3b086-2d95-4980-beb6-e175fd79a847-krp927","pvc-34e3b086-2d95-4980-beb6-e175fd79a847-wm7p56"],"state":"Ready","publishedNode":"k8s-node1","fsType":"xfs","rawblock":false}\'\n    time: "2023-08-08T16:03:03Z"\n  - action: Delete\n    actionContent: \'{"requiredCapacityBytes":5368709120,"volumeQoS":{},"poolName":"LocalStorage_PoolHDD","replicaNumber":2,"convertible":true,"accessibility":{"nodes":["k8s-node1","k8s-master"],"zones":["default"],"regions":["default"]},"pvcNamespace":"default","pvcName":"mysql-data-volume","volumegroup":"db890e34-a092-49ac-872b-f2a422439c81","config":{"version":1,"volumeName":"pvc-34e3b086-2d95-4980-beb6-e175fd79a847","requiredCapacityBytes":5368709120,"convertible":true,"resourceID":2,"readyToInitialize":true,"initialized":true,"replicas":[{"id":1,"hostname":"k8s-node1","ip":"10.6.113.101","primary":true},{"id":2,"hostname":"k8s-master","ip":"10.6.113.100","primary":false}]},"delete":true}\'\n    time: "2023-08-08T16:03:38Z"\n')))}d.isMDXComponent=!0}}]);