"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2970],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={slug:3,title:"LV and LVReplica",authors:["Niulechuan","Michelle"],tags:["hello","Hwameistor"]},c=void 0,u={permalink:"/blog/3",editUrl:"https://github.com/hwameistor/hwameistor/blog/2022-05-24-lv-and-lvreplica.md",source:"@site/blog/2022-05-24-lv-and-lvreplica.md",title:"LV and LVReplica",description:"In Kubernetes, when a PVC is created and uses HwameiStor as its local storage, HwameiStor will create two kinds of CR: LocalVolume and LocalVolumeReplica. Why create these two resources for one PV? Continue to read and you will find the answer.",date:"2022-05-24T00:00:00.000Z",formattedDate:"May 24, 2022",tags:[{label:"hello",permalink:"/blog/tags/hello"},{label:"Hwameistor",permalink:"/blog/tags/hwameistor"}],readingTime:4.225,truncated:!1,authors:[{name:"Lechuan Niu",title:"Developer",url:"https://github.com/niulechuan",imageURL:"https://avatars.githubusercontent.com/u/81207605?v=4",key:"Niulechuan"},{name:"Michelle Wu",title:"Technical Writer",url:"https://github.com/Michelle951",imageURL:"https://avatars.githubusercontent.com/u/35519562?v=4",key:"Michelle"}],frontMatter:{slug:"3",title:"LV and LVReplica",authors:["Niulechuan","Michelle"],tags:["hello","Hwameistor"]},prevItem:{title:"HwameiStor Capability, Security, Operation, and Maintenance Test",permalink:"/blog/test"},nextItem:{title:"Reliable Helper System for HwameiStor Is Online",permalink:"/blog/2"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"LocalVolume",id:"localvolume",level:2},{value:"LocalVolumeReplica",id:"localvolumereplica",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In Kubernetes, when a PVC is created and uses HwameiStor as its local storage, HwameiStor will create two kinds of CR: ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica"),". Why create these two resources for one PV? Continue to read and you will find the answer."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LV Replicas",src:n(9918).Z,width:"1838",height:"1146"})),(0,l.kt)("h2",{id:"localvolume"},"LocalVolume"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," is a CRD defined by HwameiStor. It is the volume that HwameiStor provides for users. Each ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," corresponds to a ",(0,l.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," of Kubernetes. Both are volumes, but ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," stores HwameiStor-related information, while the other records information about Kubernetes itself and links it to ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume"),"."),(0,l.kt)("p",null,"You can check details of ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#  check status of local volume and volume replica\n$ kubectl get lv # or localvolume\nNAME                                       POOL                   KIND   REPLICAS   CAPACITY     ACCESSIBILITY   STATE      RESOURCE   PUBLISHED   AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2   LocalStorage_PoolHDD   LVM    1          1073741824   k8s-node1       Ready   -1                     22m\n")),(0,l.kt)("p",null,"Now that HwameiStor can use ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," to provide a volume, why do we still need ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica"),"?"),(0,l.kt)("h2",{id:"localvolumereplica"},"LocalVolumeReplica"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," is another CRD defined by HwameiStor. It represents a replica of a volume."),(0,l.kt)("p",null,"In HwameiStor, ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," can specify one of its ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," as the active replica. As a volume, ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," can have many ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," as its replicas. The replica in active state will be mounted by applications and others will stand by as high available replicas."),(0,l.kt)("p",null,"You can check details of ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl get lvr # or localvolumereplica\nNAME                                              KIND   CAPACITY     NODE        STATE   SYNCED   DEVICE                                                               AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2-v5scm9   LVM    1073741824   k8s-node1   Ready   true     /dev/LocalStorage_PoolHDD/pvc-996b05e8-80f2-4240-ace4-5f5f250310e2   80s\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," allows HwameiStor to support features like HA, migration, hot standby of volumes and fast recovery of Kubernetes applications, making it more competitive as a local storage tool."),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolume")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," are common concepts in many storage products, but each product can have its own competitive and unique features based on these two concepts. A technical difficulty can be solved with different solutions, so these concepts are also suitable for different production scenarios."),(0,l.kt)("p",null,"We will provide more capabilities for more scenarios in future releases. Both users and developers are welcome to join us!"))}d.isMDXComponent=!0},9918:function(e,t,n){t.Z=n.p+"assets/images/lv_replicas_en-b8df5dbb116d4022b977b52e573d7bc2.png"}}]);