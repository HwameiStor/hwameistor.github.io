"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1122],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?l.createElement(f,r(r({ref:t},p),{},{components:n})):l.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var l=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],i={slug:3,title:"LV \u548c LVReplica",authors:"Niulechuan",tags:["hello","LVs"]},c=void 0,u={permalink:"/cn/blog/3",editUrl:"https://github.com/hwameistor/hwameistor/blog/2022-05-24-lv-and-lvreplica.md",source:"@site/i18n/cn/docusaurus-plugin-content-blog/2022-05-24-lv-and-lvreplica.md",title:"LV \u548c LVReplica",description:"\u5728 Kubernetes \u4e2d\uff0c\u5f53\u7528\u6237\u521b\u5efa\u4e00\u4e2a PVC\uff0c\u5e76\u6307\u5b9a\u4f7f\u7528 HwameiStor \u4f5c\u4e3a\u5e95\u5c42\u5b58\u50a8\u65f6\uff0cHwameiStor \u4f1a\u521b\u5efa\u4e24\u7c7b CR\uff0c\u5373\u672c\u6587\u7684\u4e3b\u89d2LocalVolume \u548c LocalVolumeReplica\u3002HwameiStor \u4e3a\u4ec0\u4e48\u4e3a\u4e00\u4e2a PV \u521b\u5efa\u8fd9\u4e24\u7c7b\u8d44\u6e90\u5462\uff1f\u672c\u6587\u5c06\u4e3a\u60a8\u63ed\u5f00\u8c1c\u56e2\u3002",date:"2022-05-24T00:00:00.000Z",formattedDate:"May 24, 2022",tags:[{label:"hello",permalink:"/cn/blog/tags/hello"},{label:"LVs",permalink:"/cn/blog/tags/l-vs"}],readingTime:2.805,truncated:!1,authors:[{name:"\u725b\u4e50\u5ddd",title:"\u5f00\u53d1\u8005",url:"https://github.com/niulechuan",imageURL:"https://avatars.githubusercontent.com/u/81207605?v=4",key:"Niulechuan"}],frontMatter:{slug:"3",title:"LV \u548c LVReplica",authors:"Niulechuan",tags:["hello","LVs"]},prevItem:{title:"HwameiStor \u80fd\u529b\u3001\u5b89\u5168\u53ca\u8fd0\u7ef4\u6d4b\u8bd5",permalink:"/cn/blog/test"},nextItem:{title:"HwameiStor Reliable Helper System \u5f00\u6e90\u4e0a\u7ebf",permalink:"/cn/blog/2"}},p={authorsImageUrls:[void 0]},m=[{value:"LocalVolume",id:"localvolume",level:2},{value:"LocalVolumeReplica",id:"localvolumereplica",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:m};function d(e){var t=e.components,i=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,l.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0c\u5f53\u7528\u6237\u521b\u5efa\u4e00\u4e2a PVC\uff0c\u5e76\u6307\u5b9a\u4f7f\u7528 HwameiStor \u4f5c\u4e3a\u5e95\u5c42\u5b58\u50a8\u65f6\uff0cHwameiStor \u4f1a\u521b\u5efa\u4e24\u7c7b CR\uff0c\u5373\u672c\u6587\u7684\u4e3b\u89d2",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica"),"\u3002HwameiStor \u4e3a\u4ec0\u4e48\u4e3a\u4e00\u4e2a PV \u521b\u5efa\u8fd9\u4e24\u7c7b\u8d44\u6e90\u5462\uff1f\u672c\u6587\u5c06\u4e3a\u60a8\u63ed\u5f00\u8c1c\u56e2\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LV \u526f\u672c",src:n(9908).Z,width:"1836",height:"1142"})),(0,o.kt)("h2",{id:"localvolume"},"LocalVolume"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u662f HwameiStor \u5b9a\u4e49\u7684 CRD\uff0c\u4ee3\u8868 HwameiStor \u4e3a\u7528\u6237\u63d0\u4f9b\u7684\u6570\u636e\u5377\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u548c Kubernetes \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," \u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c\u542b\u4e49\u4e5f\u662f\u7c7b\u4f3c\u7684\uff0c\u5747\u4ee3\u8868\u4e00\u4e2a\u6570\u636e\u5377\u3002\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u8bb0\u5f55 HwameiStor \u76f8\u5173\u7684\u4fe1\u606f\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," \u8bb0\u5f55 Kubernetes \u5e73\u53f0\u672c\u8eab\u7684\u4fe1\u606f\uff0c\u5e76\u5173\u8054\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume"),"\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7cfb\u7edf\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#  check status of local volume and volume replica\n$ kubectl get lv # or localvolume\nNAME                                       POOL                   KIND   REPLICAS   CAPACITY     ACCESSIBILITY   STATE      RESOURCE   PUBLISHED   AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2   LocalStorage_PoolHDD   LVM    1          1073741824   k8s-node1       Ready      -1                     22m\n")),(0,o.kt)("p",null,"\u65e2\u7136 HwameiStor \u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u8868\u793a\u4e00\u4e2a\u6570\u636e\u5377\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," \u5462\uff1f"),(0,o.kt)("h2",{id:"localvolumereplica"},"LocalVolumeReplica"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," \u4e5f\u662f HwameiStor \u5b9a\u4e49\u7684 CRD\u3002\u4f46\u662f\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u4e0d\u540c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," \u4ee3\u8868\u6570\u636e\u5377\u7684\u526f\u672c\u3002"),(0,o.kt)("p",null,"\u5728 HwameiStor \u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u4f1a\u6307\u5b9a\u67d0\u4e2a\u5c5e\u4e8e\u5b83\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," \u4f5c\u4e3a\u5f53\u524d\u6fc0\u6d3b\u7684\u526f\u672c\u3002\u53ef\u4ee5\u770b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u53ef\u4ee5\u62e5\u6709\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica"),"\uff0c\u5373\u4e00\u4e2a\u6570\u636e\u5377\u53ef\u4ee5\u6709\u591a\u4e2a\u526f\u672c\u3002\u76ee\u524d HwameiStor \u4f1a\u5728\u4f17\u591a\u526f\u672c\u4e2d\u6fc0\u6d3b\u5176\u4e2d\u4e00\u4e2a\uff0c\u88ab\u5e94\u7528\u7a0b\u5e8f\u6302\u8f7d\uff0c\u5176\u4ed6\u526f\u672c\u4f5c\u4e3a\u70ed\u5907\u526f\u672c\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u7cfb\u7edf\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," \u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get lvr # or localvolumereplica\nNAME                                              KIND   CAPACITY     NODE        STATE   SYNCED   DEVICE                                                               AGE\npvc-996b05e8-80f2-4240-ace4-5f5f250310e2-v5scm9   LVM    1073741824   k8s-node1   Ready   true     /dev/LocalStorage_PoolHDD/pvc-996b05e8-80f2-4240-ace4-5f5f250310e2   80s\n")),(0,o.kt)("p",null,"\u6709\u4e86\u5377\u526f\u672c\uff08LocalVolumeReplica\uff09\u7684\u6982\u5ff5\u540e\uff0cHwameiStor \u4f5c\u4e3a\u4e00\u6b3e\u672c\u5730\u5b58\u50a8\u7cfb\u7edf\uff0c\u5177\u5907\u4e86\u4e00\u4e9b\u5f88\u6709\u7ade\u4e89\u529b\u7684\u7279\u6027\uff0c\u4f8b\u5982\u6570\u636e\u5377\u7684HA\uff0c\u8fc1\u79fb\uff0c\u70ed\u5907\uff0cKubernetes \u5e94\u7528\u5feb\u901f\u6062\u590d\u7b49\u7b49\u3002"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u5176\u5b9e ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolume")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"LocalVolumeReplica")," \u5728\u5f88\u591a\u5b58\u50a8\u7cfb\u7edf\u4e2d\u90fd\u6709\u5f15\u5165\uff0c\u662f\u4e2a\u5f88\u901a\u7528\u7684\u6982\u5ff5\u3002\u53ea\u662f\u901a\u8fc7\u8fd9\u4e00\u6982\u5ff5\uff0c\u5b9e\u73b0\u4e86\u5404\u5177\u7279\u8272\u7684\u4ea7\u54c1\uff0c\u5728\u89e3\u51b3\u67d0\u4e2a\u6280\u672f\u96be\u70b9\u7684\u65f6\u5019\u4e5f\u53ef\u80fd\u91c7\u53d6\u4e0d\u540c\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u6b64\u800c\u9002\u5408\u4e8e\u4e0d\u540c\u7684\u751f\u4ea7\u573a\u666f\u3002"),(0,o.kt)("p",null,"\u968f\u7740 HwameiStor \u7684\u8fed\u4ee3\u548c\u6f14\u8fdb\uff0c\u6211\u4eec\u5c06\u4f1a\u63d0\u4f9b\u66f4\u591a\u7684\u80fd\u529b\uff0c\u4ece\u800c\u9002\u914d\u8d8a\u6765\u8d8a\u591a\u7684\u4f7f\u7528\u573a\u666f\u3002\u65e0\u8bba\u60a8\u662f\u7528\u6237\u8fd8\u662f\u5f00\u53d1\u8005\uff0c\u6b22\u8fce\u60a8\u52a0\u5165 HwameiStor \u7684\u5927\u5bb6\u5ead\uff01"))}d.isMDXComponent=!0},9908:function(e,t,n){t.Z=n.p+"assets/images/lv_replicas_cn-290ad3ffefacb8197dcb64dba8a20490.png"}}]);