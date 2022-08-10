"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),c=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,k=d["".concat(r,".").concat(g)]||d[g]||m[g]||l;return a?i.createElement(k,s(s({ref:t},o),{},{components:a})):i.createElement(k,s({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<l;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const l={slug:"minio",title:"HwameiStor \u5bf9 Minio \u7684\u652f\u6301",authors:["Simon"],tags:["Test"]},s="HwameiStor \u5bf9 Minio \u7684\u652f\u6301",p={permalink:"/cn/blog/minio",editUrl:"https://github.com/hwameistor/hwameistor/blog/2022-07-16_minio-test/2022-07-16_minio-test.md",source:"@site/i18n/cn/docusaurus-plugin-content-blog/2022-07-16_minio-test/2022-07-16_minio-test.md",title:"HwameiStor \u5bf9 Minio \u7684\u652f\u6301",description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4ee5 HwameiStor \u4e3a\u5e95\u5ea7\uff0c\u642d\u5efa MinIO \u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u5b9e\u8df5\u9a8c\u8bc1\u4e86 MinIO \u7684\u5404\u9879\u57fa\u672c\u529f\u80fd\u548c\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5\u3002",date:"2022-07-16T00:00:00.000Z",formattedDate:"July 16, 2022",tags:[{label:"Test",permalink:"/cn/blog/tags/test"}],readingTime:7.5,hasTruncateMarker:!1,authors:[{name:"\u8d75\u71d5\u5b81",title:"\u5f00\u53d1\u8005",url:"https://github.com/zhaosimon",imageURL:"https://avatars.githubusercontent.com/u/36882380?v=4",key:"Simon"}],frontMatter:{slug:"minio",title:"HwameiStor \u5bf9 Minio \u7684\u652f\u6301",authors:["Simon"],tags:["Test"]},nextItem:{title:"\u76f4\u64ad\u56de\u987e\u8bba\u9053\u539f\u751f\uff1a\u4e91\u539f\u751f\u5b58\u50a8",permalink:"/cn/blog/live"}},r={authorsImageUrls:[void 0]},c=[{value:"MinIO \u7b80\u4ecb",id:"minio-\u7b80\u4ecb",level:2},{value:"MinIO \u67b6\u6784\u8bbe\u8ba1",id:"minio-\u67b6\u6784\u8bbe\u8ba1",level:3},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"\u90e8\u7f72 Kubernetes \u96c6\u7fa4",id:"\u90e8\u7f72-kubernetes-\u96c6\u7fa4",level:3},{value:"\u90e8\u7f72 HwameiStor \u672c\u5730\u5b58\u50a8",id:"\u90e8\u7f72-hwameistor-\u672c\u5730\u5b58\u50a8",level:3},{value:"\u5206\u5e03\u5f0f\u591a\u79df\u6237\u6e90\u7801\u90e8\u7f72\u5b89\u88c5\uff08minio operator\uff09",id:"\u5206\u5e03\u5f0f\u591a\u79df\u6237\u6e90\u7801\u90e8\u7f72\u5b89\u88c5minio-operator",level:2},{value:"\u90e8\u7f72 minio operator",id:"\u90e8\u7f72-minio-operator",level:3},{value:"\u521b\u5efa\u79df\u6237",id:"\u521b\u5efa\u79df\u6237",level:3},{value:"\u914d\u7f6e HwameiStor \u672c\u5730\u5377",id:"\u914d\u7f6e-hwameistor-\u672c\u5730\u5377",level:3},{value:"HwameiStor \u4e0e MinIo \u6d4b\u8bd5\u9a8c\u8bc1",id:"hwameistor-\u4e0e-minio-\u6d4b\u8bd5\u9a8c\u8bc1",level:2},{value:"\u57fa\u672c\u529f\u80fd\u6d4b\u8bd5",id:"\u57fa\u672c\u529f\u80fd\u6d4b\u8bd5",level:3},{value:"\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5",id:"\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],o={toc:c};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4ee5 HwameiStor \u4e3a\u5e95\u5ea7\uff0c\u642d\u5efa MinIO \u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u5b9e\u8df5\u9a8c\u8bc1\u4e86 MinIO \u7684\u5404\u9879\u57fa\u672c\u529f\u80fd\u548c\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5\u3002"),(0,n.kt)("h2",{id:"minio-\u7b80\u4ecb"},"MinIO \u7b80\u4ecb"),(0,n.kt)("p",null,"MinIO \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u3001\u5206\u5e03\u5f0f\u3001\u517c\u5bb9 S3 \u7684\u591a\u4e91\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u5957\u4ef6\u3002MinIO \u539f\u751f\u652f\u6301 Kubernetes\uff0c\u80fd\u591f\u652f\u6301\u6240\u6709\u516c\u6709\u4e91\u3001\u79c1\u6709\u4e91\u53ca\u8fb9\u7f18\u8ba1\u7b97\u73af\u5883\u3002\nMinIO \u662f GNU AGPL v3 \u5f00\u6e90\u7684\u8f6f\u4ef6\u5b9a\u4e49\u4ea7\u54c1\uff0c\u80fd\u591f\u5f88\u597d\u5730\u8fd0\u884c\u5728\u6807\u51c6\u786c\u4ef6\u5982 X86 \u7b49\u8bbe\u5907\u4e0a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MinIO \u67b6\u6784",src:a(8683).Z,width:"245",height:"219"})),(0,n.kt)("p",null,"MinIO \u7684\u67b6\u6784\u8bbe\u8ba1\u4ece\u4e00\u5f00\u59cb\u5c31\u662f\u9488\u5bf9\u6027\u80fd\u8981\u6c42\u5f88\u9ad8\u7684\u79c1\u6709\u4e91\u6807\u51c6\uff0c\u5728\u5b9e\u73b0\u5bf9\u8c61\u5b58\u50a8\u6240\u9700\u8981\u7684\u5168\u90e8\u529f\u80fd\u7684\u57fa\u7840\u4e0a\u8ffd\u6c42\u6781\u81f4\u7684\u6027\u80fd\u3002\nMinIO \u5177\u5907\u6613\u7528\u6027\u3001\u9ad8\u6548\u6027\u53ca\u9ad8\u6027\u80fd\uff0c\u80fd\u591f\u4ee5\u66f4\u7b80\u5355\u7684\u65b9\u5f0f\u63d0\u4f9b\u5177\u6709\u5f39\u6027\u4f38\u7f29\u80fd\u529b\u7684\u4e91\u539f\u751f\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u3002"),(0,n.kt)("p",null,"MinIO \u5728\u4f20\u7edf\u5bf9\u8c61\u5b58\u50a8\u573a\u666f\uff08\u5982\u8f85\u52a9\u5b58\u50a8\u3001\u707e\u96be\u6062\u590d\u548c\u5f52\u6863\uff09\u65b9\u9762\u8868\u73b0\u51fa\u8272\uff0c\u540c\u65f6\u5728\u673a\u5668\u5b66\u4e60\u3001\u5927\u6570\u636e\u3001\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u7b49\u65b9\u9762\u7684\u5b58\u50a8\u6280\u672f\u4e0a\u4e5f\u72ec\u6811\u4e00\u5e1c\uff0c\u5305\u62ec\u6570\u636e\u5206\u6790\u3001\u9ad8\u6027\u80fd\u5e94\u7528\u8d1f\u8f7d\u3001\u539f\u751f\u4e91\u5e94\u7528\u7b49\u3002"),(0,n.kt)("h3",{id:"minio-\u67b6\u6784\u8bbe\u8ba1"},"MinIO \u67b6\u6784\u8bbe\u8ba1"),(0,n.kt)("p",null,"MinIO \u4e3a\u4e91\u539f\u751f\u67b6\u6784\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u8f7b\u91cf\u7ea7\u5bb9\u5668\u8fd0\u884c\uff0c\u5e76\u7531\u5916\u90e8\u7f16\u6392\u670d\u52a1\uff08\u5982 Kubernetes\uff09\u8fdb\u884c\u7ba1\u7406\u3002\nMinIO \u6574\u4e2a\u670d\u52a1\u5305\u7ea6\u4e3a\u4e0d\u5230 100 MB \u7684\u9759\u6001\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5373\u4f7f\u5728\u5f88\u9ad8\u8d1f\u8f7d\u4e0b\u4e5f\u53ef\u4ee5\u9ad8\u6548\u5229\u7528 CPU \u548c\u5185\u5b58\u8d44\u6e90\u5e76\u53ef\u4ee5\u5728\u5171\u4eab\u786c\u4ef6\u4e0a\u5171\u540c\u6258\u7ba1\u5927\u91cf\u79df\u6237\u3002\n\u5bf9\u5e94\u7684\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67b6\u6784\u56fe",src:a(4255).Z,width:"1092",height:"684"})),(0,n.kt)("p",null,"MinIO \u53ef\u4ee5\u5728\u5e26\u6709\u672c\u5730\u9a71\u52a8\u5668\uff08JBOD/JBOF\uff09\u7684\u6807\u51c6\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002\n\u96c6\u7fa4\u4e3a\u5b8c\u5168\u5bf9\u79f0\u7684\u4f53\u7cfb\u67b6\u6784\uff0c\u5373\u6240\u6709\u670d\u52a1\u5668\u7684\u529f\u80fd\u5747\u76f8\u540c\uff0c\u6ca1\u6709\u540d\u79f0\u8282\u70b9\u6216\u5143\u6570\u636e\u670d\u52a1\u5668\u3002"),(0,n.kt)("p",null,"MinIO \u5c06\u6570\u636e\u548c\u5143\u6570\u636e\u4f5c\u4e3a\u5bf9\u8c61\u4e00\u8d77\u5199\u5165\u4ece\u800c\u65e0\u9700\u4f7f\u7528\u5143\u6570\u636e\u6570\u636e\u5e93\u3002\nMinIO \u4ee5\u5185\u8054\u3001\u4e25\u683c\u4e00\u81f4\u7684\u64cd\u4f5c\u6267\u884c\u6240\u6709\u529f\u80fd\uff0c\u5305\u62ec\u64e6\u9664\u4ee3\u7801\u3001\u4f4d rotrot \u68c0\u67e5\u3001\u52a0\u5bc6\u7b49\u3002"),(0,n.kt)("p",null,"\u6bcf\u4e2a MinIO \u96c6\u7fa4\u90fd\u662f\u5206\u5e03\u5f0f MinIO \u670d\u52a1\u5668\u7684\u96c6\u5408\uff0c\u6bcf\u4e2a\u8282\u70b9\u4e00\u4e2a\u8fdb\u7a0b\u3002\nMinIO \u4f5c\u4e3a\u5355\u4e2a\u8fdb\u7a0b\u5728\u7528\u6237\u7a7a\u95f4\u4e2d\u8fd0\u884c\uff0c\u5e76\u4f7f\u7528\u8f7b\u91cf\u7ea7\u7684\u534f\u540c\u4f8b\u7a0b\u6765\u5b9e\u73b0\u9ad8\u5e76\u53d1\u3002\n\u5c06\u9a71\u52a8\u5668\u5206\u7ec4\u5230\u64e6\u9664\u96c6\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u7ec4 16 \u4e2a\u9a71\u52a8\u5668\uff09\uff0c\u7136\u540e\u4f7f\u7528\u786e\u5b9a\u6027\u54c8\u5e0c\u7b97\u6cd5\u5c06\u5bf9\u8c61\u653e\u7f6e\u5728\u8fd9\u4e9b\u64e6\u9664\u96c6\u4e0a\u3002"),(0,n.kt)("p",null,"MinIO \u4e13\u4e3a\u5927\u89c4\u6a21\u3001\u591a\u6570\u636e\u4e2d\u5fc3\u4e91\u5b58\u50a8\u670d\u52a1\u800c\u8bbe\u8ba1\u3002\n\u6bcf\u4e2a\u79df\u6237\u90fd\u8fd0\u884c\u81ea\u5df1\u7684 MinIO \u96c6\u7fa4\uff0c\u8be5\u96c6\u7fa4\u4e0e\u5176\u4ed6\u79df\u6237\u5b8c\u5168\u9694\u79bb\uff0c\u4ece\u800c\u4f7f\u79df\u6237\u80fd\u591f\u514d\u53d7\u5347\u7ea7\u3001\u66f4\u65b0\u548c\u5b89\u5168\u4e8b\u4ef6\u7684\u4efb\u4f55\u5e72\u6270\u3002\n\u6bcf\u4e2a\u79df\u6237\u901a\u8fc7\u8054\u5408\u8de8\u5730\u7406\u533a\u57df\u7684\u96c6\u7fa4\u6765\u72ec\u7acb\u6269\u5c55\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"node-distribution-setup",src:a(9251).Z,width:"1271",height:"1057"})),(0,n.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,n.kt)("h3",{id:"\u90e8\u7f72-kubernetes-\u96c6\u7fa4"},"\u90e8\u7f72 Kubernetes \u96c6\u7fa4"),(0,n.kt)("p",null,"\u672c\u6b21\u6d4b\u8bd5\u4f7f\u7528\u4e86\u4e09\u53f0\u865a\u62df\u673a\u8282\u70b9\u90e8\u7f72\u4e86 Kubernetes \u96c6\u7fa4\uff1a1 Master + 2 Worker \u8282\u70b9\uff0ckubelet \u7248\u672c\u4e3a 1.22.0\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"k8s-cluster",src:a(6836).Z,width:"553",height:"117"})),(0,n.kt)("h3",{id:"\u90e8\u7f72-hwameistor-\u672c\u5730\u5b58\u50a8"},"\u90e8\u7f72 HwameiStor \u672c\u5730\u5b58\u50a8"),(0,n.kt)("p",null,"\u5728 Kubernetes \u4e0a\u90e8\u7f72 HwameiStor \u672c\u5730\u5b58\u50a8\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u67e5\u770b HwameiStor \u672c\u5730\u5b58\u50a8",src:a(6928).Z,width:"553",height:"87"})),(0,n.kt)("p",null,"\u4e24\u53f0 Worker \u8282\u70b9\u5404\u914d\u7f6e\u4e86\u4e94\u5757\u78c1\u76d8\uff08SDB\u3001SDC\u3001SDD\u3001SDE\u3001SDF\uff09\u7528\u4e8e HwameiStor \u672c\u5730\u78c1\u76d8\u7ba1\u7406\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lsblk",src:a(3240).Z,width:"553",height:"192"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lsblk",src:a(6346).Z,width:"553",height:"147"})),(0,n.kt)("p",null,"\u67e5\u770b local storage node \u72b6\u6001\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"get-lsn",src:a(1368).Z,width:"553",height:"67"})),(0,n.kt)("p",null,"\u521b\u5efa\u4e86 storagClass\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"get-sc",src:a(567).Z,width:"553",height:"48"})),(0,n.kt)("h2",{id:"\u5206\u5e03\u5f0f\u591a\u79df\u6237\u6e90\u7801\u90e8\u7f72\u5b89\u88c5minio-operator"},"\u5206\u5e03\u5f0f\u591a\u79df\u6237\u6e90\u7801\u90e8\u7f72\u5b89\u88c5\uff08minio operator\uff09"),(0,n.kt)("p",null,"\u672c\u8282\u8bf4\u660e\u5982\u4f55\u90e8\u7f72 minio operator\uff0c\u5982\u4f55\u521b\u5efa\u79df\u6237\uff0c\u5982\u4f55\u914d\u7f6e HwameiStor \u672c\u5730\u5377\u3002"),(0,n.kt)("h3",{id:"\u90e8\u7f72-minio-operator"},"\u90e8\u7f72 minio operator"),(0,n.kt)("p",null,"\u53c2\u7167\u4ee5\u4e0b\u6b65\u9aa4\u90e8\u7f72 minio operator\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u590d\u5236 minio operator \u4ed3\u5e93\u5230\u672c\u5730\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git clone <https://github.com/minio/operator.git>\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"helm-repo-list",src:a(1694).Z,width:"538",height:"50"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ls-operator",src:a(3473).Z,width:"554",height:"47"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165 helm operator \u76ee\u5f55\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/helm/operator"),"\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ls-pwd",src:a(8418).Z,width:"448",height:"119"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u90e8\u7f72 minio-operator \u5b9e\u4f8b\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm install minio-operator \\\n--namespace minio-operator \\\n--create-namespace \\\n--generate-name .\n--set persistence.storageClass=local-storage-hdd-lvm .\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u68c0\u67e5 minio-operator \u8d44\u6e90\u8fd0\u884c\u60c5\u51b5\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"get-all",src:a(6360).Z,width:"553",height:"252"})))),(0,n.kt)("h3",{id:"\u521b\u5efa\u79df\u6237"},"\u521b\u5efa\u79df\u6237"),(0,n.kt)("p",null,"\u53c2\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/examples/kustomization/base")," \u76ee\u5f55\u3002\u5982\u4e0b\u4fee\u6539 tenant.yaml\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-yaml",src:a(125).Z,width:"553",height:"489"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/helm/tenant/")," \u76ee\u5f55\u3002\u5982\u4e0b\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-values.yaml",src:a(8108).Z,width:"553",height:"576"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/examples/kustomization/tenant-lite")," \u76ee\u5f55\u3002\u5982\u4e0b\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," \u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-kustomization-yaml",src:a(8686).Z,width:"553",height:"249"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u4e0b\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant.yaml")," \u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-tenant-yaml02",src:a(2758).Z,width:"553",height:"266"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u4e0b\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"tenantNamePatch.yaml")," \u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"git-diff-tenant-name-patch-yaml",src:a(2076).Z,width:"553",height:"125"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u79df\u6237\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl apply \u2013k . \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u68c0\u67e5\u79df\u6237 minio-t1 \u8d44\u6e90\u72b6\u6001\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"kubectl-get-all-nminio-tenant",src:a(4839).Z,width:"553",height:"322"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u79df\u6237\u53ef\u4ee5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/operator/examples/kustomization")," \u76ee\u5f55\u4e0b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant")," \u76ee\u5f55\uff08\u672c\u6848\u4f8b\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"tenant-lite-2"),"\uff09\u5e76\u5bf9\u76f8\u5e94\u6587\u4ef6\u505a\u5bf9\u5e94\u4fee\u6539\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"pwd-ls-ls",src:a(8806).Z,width:"1078",height:"209"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl apply \u2013k .")," \u521b\u5efa\u65b0\u7684\u79df\u6237 ",(0,n.kt)("inlineCode",{parentName:"p"},"minio-t2"),"\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"kubectl-get-all-nminio",src:a(5490).Z,width:"1022",height:"659"})))),(0,n.kt)("h3",{id:"\u914d\u7f6e-hwameistor-\u672c\u5730\u5377"},"\u914d\u7f6e HwameiStor \u672c\u5730\u5377"),(0,n.kt)("p",null,"\u4f9d\u6b21\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u914d\u7f6e\u672c\u5730\u5377\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get statefulset.apps/minio-t1-pool-0 -nminio-tenant -oyaml\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"local-storage-hdd-lvm",src:a(641).Z,width:"437",height:"382"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pvc \u2013A\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pvc",src:a(496).Z,width:"553",height:"105"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pvc export-minio6-0 -nminio-6 -oyaml\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pvc-export-oyaml",src:a(8676).Z,width:"553",height:"371"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pv\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pv",src:a(8685).Z,width:"553",height:"85"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pvc data0-minio-t1-pool-0-0 -nminio-tenant -oyaml\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-pvc-oyaml",src:a(8206).Z,width:"553",height:"448"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get lv\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-lv",src:a(3579).Z,width:"553",height:"95"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubect get lvr\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubectl-get-lvr",src:a(5207).Z,width:"553",height:"86"})),(0,n.kt)("h2",{id:"hwameistor-\u4e0e-minio-\u6d4b\u8bd5\u9a8c\u8bc1"},"HwameiStor \u4e0e MinIo \u6d4b\u8bd5\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u4e4b\u540e\uff0c\u6267\u884c\u4e86\u57fa\u672c\u529f\u80fd\u6d4b\u8bd5\u548c\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5\u3002"),(0,n.kt)("h3",{id:"\u57fa\u672c\u529f\u80fd\u6d4b\u8bd5"},"\u57fa\u672c\u529f\u80fd\u6d4b\u8bd5"),(0,n.kt)("p",null,"\u57fa\u672c\u529f\u80fd\u6d4b\u8bd5\u7684\u6b65\u9aa4\u5982\u4e0b\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4ece\u6d4f\u89c8\u5668\u767b\u5f55 ",(0,n.kt)("inlineCode",{parentName:"p"},"minio console\uff1a10.6.163.52:30401/login"),"\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"minio-opeartor-console-login",src:a(5850).Z,width:"681",height:"369"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl minio proxy -n minio-operator "),"\u83b7\u53d6 JWT\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"minio-opeartor-console-login",src:a(4563).Z,width:"1144",height:"328"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u53ca\u7ba1\u7406\u521b\u5efa\u7684\u79df\u6237\u4fe1\u606f\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant01",src:a(9064).Z,width:"1265",height:"562"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant02",src:a(9433).Z,width:"1265",height:"715"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant03",src:a(605).Z,width:"1265",height:"583"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant04",src:a(5320).Z,width:"1265",height:"748"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant05",src:a(134).Z,width:"1271",height:"733"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"tenant06",src:a(6338).Z,width:"1271",height:"855"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u767b\u5f55 minio-t1 \u79df\u6237\uff08\u7528\u6237\u540d minio\uff0c\u5bc6\u7801 minio123\uff09\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-minio",src:a(2101).Z,width:"1265",height:"760"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-minio",src:a(9959).Z,width:"1265",height:"754"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d4f\u89c8 bucket bk-1\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"view-bucket-1",src:a(1251).Z,width:"1271",height:"409"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"view-bucket-1",src:a(4074).Z,width:"1271",height:"378"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"view-bucket-1",src:a(6392).Z,width:"1271",height:"467"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u65b0\u7684 bucket bk-1-1\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket-1-1",src:a(9488).Z,width:"1271",height:"415"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket-1-1",src:a(9053).Z,width:"1271",height:"669"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket-1-1",src:a(4569).Z,width:"1271",height:"354"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa path path-1-2\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path-1-2",src:a(1334).Z,width:"1265",height:"644"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path-1-2",src:a(9694).Z,width:"1271",height:"336"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0a\u4f20\u6587\u4ef6\u6210\u529f\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(4710).Z,width:"1271",height:"375"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(13).Z,width:"1265",height:"534"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(4178).Z,width:"1271",height:"495"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0a\u4f20\u6587\u4ef6\u5939\u6210\u529f\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(3597).Z,width:"1271",height:"406"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(7961).Z,width:"1271",height:"375"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(6276).Z,width:"1265",height:"495"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-folder",src:a(6647).Z,width:"1265",height:"501"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u53ea\u8bfb\u7528\u6237\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(9423).Z,width:"1271",height:"745"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(3673).Z,width:"1271",height:"287"})))),(0,n.kt)("h3",{id:"\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5"},"\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5"),(0,n.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u591a\u79df\u6237\u9694\u79bb\u6d4b\u8bd5\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u767b\u5f55 minio-t2 \u79df\u6237\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-t2",src:a(6615).Z,width:"1271",height:"715"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"login-t2",src:a(7152).Z,width:"1265",height:"531"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6b64\u65f6\u53ea\u80fd\u770b\u5230 minio-t2 \u5185\u5bb9\uff0cminio-t1 \u7684\u5185\u5bb9\u88ab\u5c4f\u853d\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"only-t2",src:a(7510).Z,width:"1271",height:"748"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa bucket\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket",src:a(43).Z,width:"1271",height:"641"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-bucket",src:a(324).Z,width:"1271",height:"357"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa path\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path",src:a(4147).Z,width:"1271",height:"589"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-path",src:a(419).Z,width:"1265",height:"281"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0a\u4f20\u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(2963).Z,width:"1271",height:"253"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"upload-file",src:a(3694).Z,width:"1271",height:"440"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u7528\u6237\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(4450).Z,width:"1173",height:"565"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(995).Z,width:"956",height:"562"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(8631).Z,width:"1063",height:"330"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(5537).Z,width:"1087",height:"418"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"create-user",src:a(527).Z,width:"1265",height:"436"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e\u7528\u6237 policy\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"user-policy",src:a(1179).Z,width:"1271",height:"559"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"user-policy",src:a(5314).Z,width:"1271",height:"482"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 bucket\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(7056).Z,width:"1265",height:"620"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(2380).Z,width:"1265",height:"666"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(1127).Z,width:"1265",height:"519"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(9021).Z,width:"1265",height:"495"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(9361).Z,width:"1271",height:"605"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"delete-bucket",src:a(3446).Z,width:"1277",height:"369"})))),(0,n.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,n.kt)("p",null,"\u672c\u6b21\u6d4b\u8bd5\u662f\u5728 Kubernetes 1.22 \u5e73\u53f0\u4e0a\u90e8\u7f72\u4e86 MinIO \u5206\u5e03\u5f0f\u5bf9\u8c61\u5b58\u50a8\u5e76\u5bf9\u63a5 HwameiStor \u672c\u5730\u5b58\u50a8\u3002\u5728\u6b64\u73af\u5883\u4e2d\u5b8c\u6210\u4e86\u57fa\u672c\u80fd\u529b\u6d4b\u8bd5\u3001\u7cfb\u7edf\u5b89\u5168\u6d4b\u8bd5\u53ca\u8fd0\u7ef4\u7ba1\u7406\u6d4b\u8bd5\u3002"),(0,n.kt)("p",null,"\u5168\u90e8\u6d4b\u8bd5\u6210\u529f\u901a\u8fc7\uff0c\u8bc1\u5b9e\u4e86 HwameiStor \u80fd\u591f\u5b8c\u7f8e\u9002\u914d MinIO \u5b58\u50a8\u65b9\u6848\u3002"))}m.isMDXComponent=!0},4255:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/architect-ce129da6d73d13ffdbb0e813bb33fe58.png"},9488:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket-1-1-6dd53d944ee882f572e7f1d4599ca021.png"},9053:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket-1-2-16fe74cc6ae2eac86d13da593666f786.png"},4569:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket-1-3-8388f7f0c3ae95ef6086aebd48e9bc8a.png"},43:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-bucket01-5ff6c1c329b6894a95327fd058418214.png"},1334:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path-1-2-01-a92a560272a856ed5844706f34e201a2.png"},9694:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path-1-2-02-dbc0eb8def9147bbbab83a8ded628579.png"},4147:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path01-6301c1074307216c3715f745ad37862b.png"},419:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-path02-b3875fbfee991a8c69f8627fbf8988b4.png"},9423:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-readonly-user-01-c0dfec1a26c75309bd158812dfa38440.png"},3673:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-readonly-user-02-2cf0cf8de540ded84b5d7adca914409e.png"},4450:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user01-fdaa9d62a2b77f01b9c25e90947d01b7.png"},995:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user02-02688ec4dcdbfd13c23bde27cbe97adb.png"},8631:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user03-c8e0e15d94570c56b210a807bea71dbc.png"},5537:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user04-a25e1de99cff7c39c5c6074bf99b171e.png"},527:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-user05-3094cf2cce3288d4b268b168376d9787.png"},324:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/createbucket02-c74362e3b73378315452553cca4a910d.png"},7056:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk01-ac535d4a12f5d328317e526567bb08a2.png"},2380:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk02-59b03c470e6adf4d1cd9780c949a3e60.png"},1127:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk03-7b7bcdc79caf87744c8b91bcd9e6888f.png"},9021:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk04-3bf4c2f3cf510b65ecf9da53c8f5a5c6.png"},9361:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk05-68ca55612e200403f48078d611d8897f.png"},3446:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/delete-bk06-eb4f8695cdc29d00bc1c4d59566a0525.png"},8686:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-kustomization-yaml-0ad007bd15ea443b07d8366fb2eb65bd.png"},2076:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-tenant-name-patch-yaml-4b8be598ff292c9492f86640650d8a0c.png"},125:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-tenant-yaml-7ae47ae03222e56b47635aea676dc294.png"},2758:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-tenant-yaml02-24937bd8e84cfb6f82a3d4c61f3cb5ff.png"},8108:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/git-diff-values-yaml-4a948a45aba4b18a76b4938e24b0dfe7.png"},1694:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/helm-repo-list-f96e598528d3d564bcbb129221360620.png"},6836:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/k8s-cluster-2e9998ffef1d3a00bad3b7e3a164e4ff.png"},5490:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-all-minio-8c0df6d0f7c86bf1ac6260795a55ab3c.png"},4839:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-all-nminio-tenant-497b2e2eab8bb4d29b3de1c0b1a6dd7b.png"},6360:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-all-026455ec24122121ef5763df0c6f1d71.png"},6928:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-hwamei-pod-0cd9b8d67e92c776b7bcd8b348f70496.png"},1368:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-lsn-9655d5b584e42874a92047354ff54c15.png"},3579:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-lv-b1a03ec396f97f755f15ad387225c38a.png"},5207:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-lvr-aa5334390dd09d70b369178e2a40df54.png"},8685:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pv-d6a7f8f8d6abe20eb23588513908066d.png"},8676:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pvc-export-oyaml-bd9d6c3aea26b5e4217bb163f26b68f9.png"},8206:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pvc-oyaml-71f7f2ebc33ee977d2c399425bab30bd.png"},496:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-pvc-b00f37660c7a43e7a79d9fdb12116a6b.png"},567:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-get-sc-860a03c344d7d8b2e26157ca5f6730a9.png"},4563:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kubectl-minio-proxy-jwt-9e10468de2cb3110cccb7949ba403e65.png"},641:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/local-storage-hdd-lvm-214813a44eb9b94a4a7c12b592bdca77.png"},2101:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t1-01-68939a43710d29e15a94152ff248f7a6.png"},9959:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t1-02-b65ab20229aa0efd8e586c7467514ab6.png"},6615:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t2-01-05164403493b1533fd4e66907fcc4e17.png"},7152:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/login-minio-t2-02-cb97b40d183a2c04c20d5a1583ba2448.png"},3473:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ls-opeartor-2d0c847e0ae10e022f408516d0b15c46.png"},8418:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ls-pwd-177620b3543a6e3211f2ada8d9af1893.png"},3240:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/lsblk01-1b81d8560261b1885437ed9fb82481cc.png"},6346:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/lsblk02-9d75cd284b90f360762e7b6b4003f1fe.png"},8683:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/minio-design-50c5ded4364db203250dc5f007b8f613.png"},5850:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/minio-opeartor-console-login-d2690ef3832515f90e4bb546c515cc0f.png"},9251:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/node-setup-83bd490fd5bac9fadf3650ed4d61314e.png"},7510:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/only-t2-cdc2c92d78952f8ef3dac0f0a08c5f4f.png"},8806:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/pwd-ls-ls-3c18ba9e4e0eabed279cac4788adc00e.png"},9064:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant01-823ef226f559957037ea57ed833ef2c2.png"},9433:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant02-847ee3e98f7fb5cad5151f28d1624676.png"},605:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant03-39a6e5a9ece83b93a6fc68bdf709db12.png"},5320:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant04-517db946c00cc899af5dc790a055f793.png"},134:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant05-3a12444cc96c9cd2dbf73fa722b9b2c0.png"},6338:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tenant06-15e19517c953f7c9820da7c818837250.png"},13:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file-success-02-f26a3be0810b08e933b1a53e894840e7.png"},4178:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file-success-03-94d9c32d8be5cb1fcf7e791f6e0564e6.png"},4710:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file-success-71d39754b906216229e242c7a9691b88.png"},2963:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file01-a81dcfaf0cb69e2f3d2b4452fcc8d587.png"},3694:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-file02-688141fc03bc83b4884b1e309dc8fec3.png"},3597:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-01-ce4cca3d1572ed78c4d1445ef8ec5092.png"},7961:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-02-8f527aa3a8d07d88c957615746852652.png"},6276:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-03-d4251b86ee85bd5792e199680e9bb763.png"},6647:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/upload-folder-success-04-ba90cf6c9b40c242cdb6e7bbd4e77ff1.png"},1179:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-policy01-d7ff1a7f6daa3180766f2e3f5aadb33a.png"},5314:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-policy02-52963322402c0fc498c958fc115bf05d.png"},1251:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/view-bucket-01-50f2dac3e66f455de29df8ea6679f7fc.png"},4074:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/view-bucket-02-fb93474795cf22f2edea0fde91a5ad19.png"},6392:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/view-bucket-03-313ac3d13919cc855ac4e5e17d9cf61f.png"}}]);