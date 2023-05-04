"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,sidebar_label:"CAS \u5b58\u50a8"},i="CAS \u5b58\u50a8",l={unversionedId:"terms/cas",id:"terms/cas",title:"CAS \u5b58\u50a8",description:"\u5bb9\u5668\u9644\u52a0\u5b58\u50a8 (Container Attached Storage, CAS) \u662f\u4e00\u79cd\u7531 Kubernetes \u7f16\u6392\u7684\u57fa\u4e8e\u5fae\u670d\u52a1\u5b58\u50a8\u63a7\u5236\u5668\u7684\u8f6f\u4ef6\u5b58\u50a8\u4f53\u7cfb\u3002\u5176\u5b58\u50a8\u63a7\u5236\u5668\u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u4e00\u90e8\u5206\u5728\u5bb9\u5668\u4e2d\u8fdb\u884c\u7ba1\u7406\u548c\u8fd0\u884c\u3002\u8fd9\u5c31\u8ba9 CAS \u5177\u6709\u53ef\u79fb\u690d\u6027\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55 Kubernetes \u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u5305\u62ec\u4efb\u4f55\u4e91\u5e73\u53f0\u3001\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u6216\u4f20\u7edf\u5171\u4eab\u5b58\u50a8\u7cfb\u7edf\u3002\u5173\u952e\u7684\u662f\u6570\u636e\u672c\u8eab\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u8bbf\u95ee\uff0c\u800c\u4e0d\u662f\u5b58\u50a8\u5728\u975e\u5e73\u53f0\u5171\u4eab\u7684\u6a2a\u5411\u6269\u5c55\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u7531\u4e8e CAS \u5229\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u5c06\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u4e0e\u7ed1\u5b9a\u5230\u7269\u7406\u5b58\u50a8\u8bbe\u5907\u7684\u5e94\u7528\u7a0b\u5e8f\u4fdd\u6301\u5bc6\u5207\u5173\u8054\uff0c\u4ece\u800c\u51cf\u5c11\u4e86 I/O \u8bbf\u95ee\u65f6\u95f4\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/terms/cas.md",sourceDirName:"terms",slug:"/terms/cas",permalink:"/cn/docs/terms/cas",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/terms/cas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"CAS \u5b58\u50a8"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u5b58\u50a8",permalink:"/cn/docs/terms/k8s_storage"},next:{title:"CSI \u63a5\u53e3",permalink:"/cn/docs/terms/csi"}},s={},c=[{value:"CAS \u7684\u4f18\u52bf",id:"cas-\u7684\u4f18\u52bf",level:2},{value:"\u654f\u6377\u6027",id:"\u654f\u6377\u6027",level:3},{value:"\u5b58\u50a8\u7b56\u7565\u7684\u7c92\u5ea6",id:"\u5b58\u50a8\u7b56\u7565\u7684\u7c92\u5ea6",level:3},{value:"\u907f\u514d\u7ed1\u5b9a",id:"\u907f\u514d\u7ed1\u5b9a",level:3},{value:"\u539f\u751f\u4e91",id:"\u539f\u751f\u4e91",level:3},{value:"\u66f4\u5c0f\u7684\u5f71\u54cd\u8303\u56f4",id:"\u66f4\u5c0f\u7684\u5f71\u54cd\u8303\u56f4",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cas-\u5b58\u50a8"},"CAS \u5b58\u50a8"),(0,o.kt)("p",null,"\u5bb9\u5668\u9644\u52a0\u5b58\u50a8 (Container Attached Storage, CAS) \u662f\u4e00\u79cd\u7531 Kubernetes \u7f16\u6392\u7684\u57fa\u4e8e\u5fae\u670d\u52a1\u5b58\u50a8\u63a7\u5236\u5668\u7684\u8f6f\u4ef6\u5b58\u50a8\u4f53\u7cfb\u3002\u5176\u5b58\u50a8\u63a7\u5236\u5668\u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u4e00\u90e8\u5206\u5728\u5bb9\u5668\u4e2d\u8fdb\u884c\u7ba1\u7406\u548c\u8fd0\u884c\u3002\u8fd9\u5c31\u8ba9 CAS \u5177\u6709\u53ef\u79fb\u690d\u6027\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55 Kubernetes \u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u5305\u62ec\u4efb\u4f55\u4e91\u5e73\u53f0\u3001\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u6216\u4f20\u7edf\u5171\u4eab\u5b58\u50a8\u7cfb\u7edf\u3002\u5173\u952e\u7684\u662f\u6570\u636e\u672c\u8eab\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u8bbf\u95ee\uff0c\u800c\u4e0d\u662f\u5b58\u50a8\u5728\u975e\u5e73\u53f0\u5171\u4eab\u7684\u6a2a\u5411\u6269\u5c55\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u7531\u4e8e CAS \u5229\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u5c06\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u4e0e\u7ed1\u5b9a\u5230\u7269\u7406\u5b58\u50a8\u8bbe\u5907\u7684\u5e94\u7528\u7a0b\u5e8f\u4fdd\u6301\u5bc6\u5207\u5173\u8054\uff0c\u4ece\u800c\u51cf\u5c11\u4e86 I/O \u8bbf\u95ee\u65f6\u95f4\u3002"),(0,o.kt)("p",null,"CAS \u8fd9\u79cd\u6a21\u5f0f\u975e\u5e38\u7b26\u5408\u5206\u5e03\u5f0f\u6570\u636e\u7684\u8d8b\u52bf\uff0c\u4e5f\u9002\u5408\u91c7\u7528\u5fae\u578b\u677e\u6563\u8026\u5408\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5c0f\u578b\u81ea\u6cbb\u56e2\u961f\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u56e2\u961f\u53ef\u80fd\u9700\u8981 Postgres \u6765\u63d0\u4f9b\u5fae\u670d\u52a1\uff0c\u800c\u53e6\u4e00\u4e2a\u56e2\u961f\u7684\u7814\u53d1\u6570\u636e\u53ef\u80fd\u4f9d\u8d56\u4e8e Redis \u548c MongoDB\u3002\u4e00\u4e9b\u7528\u4f8b\u53ef\u80fd\u5bf9\u6027\u80fd\u8981\u6c42\u8f83\u9ad8\uff0c\u4e00\u4e9b\u53ef\u80fd\u5728 20 \u5206\u949f\u5185\u6d88\u5931\uff0c\u4e00\u4e9b\u662f\u5199\u5165/\u8bfb\u53d6\u5bc6\u96c6\u578b\u7b49\u7b49\u3002\u5728\u4e00\u4e2a\u5927\u578b\u4f01\u4e1a\u4e2d\uff0c\u968f\u7740\u89c4\u6a21\u7684\u589e\u957f\uff0c\u4f01\u4e1a\u8d8a\u6765\u8d8a\u4fe1\u4efb\u5404\u56e2\u961f\u81ea\u884c\u9009\u62e9\u6240\u7528\u7684\u5de5\u5177\uff0c\u5404\u56e2\u961f\u6240\u4f9d\u8d56\u6280\u672f\u7684\u5dee\u5f02\u6027\u5c06\u8d8a\u6765\u8d8a\u5927\u3002"),(0,o.kt)("p",null,"CAS \u610f\u5473\u7740\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u5de5\u4f5c\u65f6\u4e0d\u5fc5\u62c5\u5fc3\u4f01\u4e1a\u5b58\u50a8\u4f53\u7cfb\u7ed3\u6784\u7684\u5e95\u5c42\u9700\u6c42\u3002\u5bf9\u4e8e CAS \u6765\u8bf4\uff0c\u4e91\u76d8\u4e0e SAN\u3001\u88f8\u673a\u6216\u865a\u62df\u673a\u5e76\u6ca1\u6709\u4ec0\u4e48\u4e0d\u540c\u3002\u5f00\u53d1\u4eba\u5458\u548c\u5e73\u53f0 SRE \u5de5\u7a0b\u5e08\u6ca1\u5fc5\u8981\u5f00\u4f1a\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u5b58\u50a8\u4f9b\u5e94\u5546\uff0c\u4e5f\u6ca1\u5fc5\u8981\u53cd\u590d\u8ba8\u8bba\u5982\u4f55\u8bbe\u7f6e\u624d\u80fd\u652f\u6301\u7528\u4f8b\u3002\u5f00\u53d1\u4eba\u5458\u4fdd\u6301\u81ea\u6cbb\uff0c\u53ef\u4ee5\u4f7f\u7528 Kubernetes \u96c6\u7fa4\u53ef\u7528\u7684\u4efb\u4f55\u5b58\u50a8\u6765\u542f\u52a8\u672c\u8eab\u7684 CAS \u5bb9\u5668\u3002"),(0,o.kt)("p",null,"CAS \u53cd\u6620\u4e86\u4e00\u4e2a\u66f4\u5e7f\u6cdb\u7684\u89e3\u51b3\u65b9\u6848\u8d8b\u52bf\uff0c\u5176\u4e2d\u8bb8\u591a\u65b9\u6848\u5747\u662f CNCF \u7684\u9879\u76ee\uff0c\u4ee5 Kubernetes \u548c\u5fae\u670d\u52a1\u4e3a\u57fa\u7840\u8fdb\u884c\u6784\u5efa\uff0c\u5f62\u6210\u7e41\u8363\u7684\u4e91\u539f\u751f\u751f\u6001\u4f53\u7cfb\u3002\u5982\u4eca CNCF \u7684\u4e91\u539f\u751f\u751f\u6001\u4f53\u7cfb\u5305\u542b\u4e86\u5b89\u5168\u3001DNS\u3001\u7f51\u7edc\u3001\u7f51\u7edc\u7b56\u7565\u7ba1\u7406\u3001\u6d88\u606f\u4f20\u8f93\u3001\u8ddf\u8e2a\u3001\u65e5\u5fd7\u7b49\u4f17\u591a\u9879\u76ee\u3002"),(0,o.kt)("h2",{id:"cas-\u7684\u4f18\u52bf"},"CAS \u7684\u4f18\u52bf"),(0,o.kt)("h3",{id:"\u654f\u6377\u6027"},"\u654f\u6377\u6027"),(0,o.kt)("p",null,"CAS \u4e2d\u7684\u6bcf\u4e2a\u5b58\u50a8\u5377\u90fd\u6709\u4e00\u4e2a\u5bb9\u5668\u5316\u5b58\u50a8\u63a7\u5236\u5668\u548c\u76f8\u5e94\u7684\u5bb9\u5668\u5316\u526f\u672c\u3002\u56e0\u6b64\uff0c\u56f4\u7ed5\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u8d44\u6e90\u7ef4\u62a4\u548c\u8c03\u6574\u662f\u771f\u6b63\u654f\u6377\u5316\u7684\u3002Kubernetes \u7684\u6eda\u52a8\u5347\u7ea7\u529f\u80fd\u5b9e\u73b0\u4e86\u5b58\u50a8\u63a7\u5236\u5668\u548c\u5b58\u50a8\u526f\u672c\u7684\u65e0\u7f1d\u5347\u7ea7\u3002CPU \u548c\u5185\u5b58\u7b49\u8d44\u6e90\u53ef\u4ee5\u4f7f\u7528\u5bb9\u5668 cgroup \u8fdb\u884c\u4f18\u5316\u3002"),(0,o.kt)("h3",{id:"\u5b58\u50a8\u7b56\u7565\u7684\u7c92\u5ea6"},"\u5b58\u50a8\u7b56\u7565\u7684\u7c92\u5ea6"),(0,o.kt)("p",null,"\u5bf9\u5b58\u50a8\u8f6f\u4ef6\u8fdb\u884c\u5bb9\u5668\u5316\uff0c\u5e76\u5c06\u5b58\u50a8\u63a7\u5236\u5668\u4e13\u7528\u4e8e\u6bcf\u4e2a\u5377\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5b58\u50a8\u7b56\u7565\u7684\u6700\u5927\u7c92\u5ea6\u3002\u4f7f\u7528 CAS \u4f53\u7cfb\u7ed3\u6784\uff0c\u60a8\u53ef\u4ee5\u6309\u5377\u914d\u7f6e\u6240\u6709\u5b58\u50a8\u7b56\u7565\u3002\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u76d1\u89c6\u6bcf\u4e2a\u5377\u7684\u5b58\u50a8\u53c2\u6570\uff0c\u5e76\u52a8\u6001\u66f4\u65b0\u5b58\u50a8\u7b56\u7565\uff0c\u4ee5\u5b9e\u73b0\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u9884\u671f\u7ed3\u679c\u3002\u968f\u7740\u5377\u5b58\u50a8\u7b56\u7565\u4e2d\u7c92\u5ea6\u7684\u589e\u52a0\uff0c\u5bf9\u5b58\u50a8\u541e\u5410\u91cf\u3001IOPS \u548c\u5ef6\u8fdf\u7684\u63a7\u5236\u4e5f\u4f1a\u589e\u52a0\u3002"),(0,o.kt)("h3",{id:"\u907f\u514d\u7ed1\u5b9a"},"\u907f\u514d\u7ed1\u5b9a"),(0,o.kt)("p",null,"\u907f\u514d\u88ab\u4e91\u670d\u52a1\u5546\u7ed1\u5b9a\u662f\u8bb8\u591a Kubernetes \u7528\u6237\u7684\u5171\u540c\u76ee\u6807\u3002\u7136\u800c\uff0c\u6709\u72b6\u6001\u5e94\u7528\u7684\u6570\u636e\u901a\u5e38\u4ecd\u7136\u4f9d\u8d56\u4e8e\u4e91\u670d\u52a1\u5546\u53ca\u5176\u6280\u672f\uff0c\u6216\u8005\u4f9d\u8d56\u4e8e\u5e95\u5c42\u7684\u4f20\u7edf\u5171\u4eab\u5b58\u50a8\u7cfb\u7edf NAS \u6216 SAN\u3002\u800c\u4f7f\u7528 CAS \u65b9\u6cd5\u540e\uff0c\u5b58\u50a8\u63a7\u5236\u5668\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u540e\u53f0\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\uff0c\u4f7f\u5f97\u5b9e\u65f6\u8fc1\u79fb\u53d8\u5f97\u66f4\u7b80\u5355\u3002\u6362\u53e5\u8bdd\u8bf4\uff0cCAS \u7684\u63a7\u5236\u7c92\u5ea6\u4ee5\u65e0\u4e2d\u65ad\u7684\u65b9\u5f0f\u7b80\u5316\u4e86\u6709\u72b6\u6001\u5de5\u4f5c\u8d1f\u8f7d\u4ece\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\u7684\u8fc1\u79fb\u3002"),(0,o.kt)("h3",{id:"\u539f\u751f\u4e91"},"\u539f\u751f\u4e91"),(0,o.kt)("p",null,"CAS \u5c06\u5b58\u50a8\u8f6f\u4ef6\u5bb9\u5668\u5316\uff0c\u5e76\u4f7f\u7528 Kubernetes CRD \u6765\u8868\u793a\u5e95\u5c42\u5b58\u50a8\u8d44\u6e90\uff0c\u5982\u78c1\u76d8\u548c\u5b58\u50a8\u6c60\u3002\u8fd9\u79cd\u6a21\u5f0f\u4f7f\u5b58\u50a8\u80fd\u591f\u65e0\u7f1d\u5730\u96c6\u6210\u5230\u5176\u4ed6\u4e91\u4e3b\u673a\u7684\u5de5\u5177\u4e2d\u3002\u53ef\u4ee5\u4f7f\u7528 Prometheus\u3001Grafana\u3001Fluentd\u3001Weavescope\u3001Jaeger \u7b49\u4e91\u4e3b\u673a\u5de5\u5177\u6765\u8c03\u914d\u3001\u76d1\u63a7\u548c\u7ba1\u7406\u5b58\u50a8\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0cCAS \u4e2d\u5377\u7684\u5b58\u50a8\u548c\u6027\u80fd\u662f\u53ef\u4f38\u7f29\u7684\u3002\u7531\u4e8e\u6bcf\u4e2a\u5377\u90fd\u6709\u81ea\u5df1\u7684\u5b58\u50a8\u63a7\u5236\u5668\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u8282\u70b9\u5b58\u50a8\u5bb9\u91cf\u7684\u5141\u8bb8\u8303\u56f4\u5185\u5f39\u6027\u4f38\u7f29\u3002\u968f\u7740\u7ed9\u5b9a Kubernetes \u96c6\u7fa4\u4e2d\u5bb9\u5668\u5e94\u7528\u6570\u91cf\u7684\u589e\u52a0\uff0c\u4f1a\u6dfb\u52a0\u66f4\u591a\u8282\u70b9\uff0c\u4ece\u800c\u63d0\u9ad8\u5b58\u50a8\u5bb9\u91cf\u548c\u6027\u80fd\u7684\u603b\u4f53\u53ef\u7528\u6027\uff0c\u4f7f\u5b58\u50a8\u53ef\u7528\u4e8e\u65b0\u7684\u5e94\u7528\u5bb9\u5668\u3002"),(0,o.kt)("h3",{id:"\u66f4\u5c0f\u7684\u5f71\u54cd\u8303\u56f4"},"\u66f4\u5c0f\u7684\u5f71\u54cd\u8303\u56f4"),(0,o.kt)("p",null,"\u7531\u4e8e CAS \u4f53\u7cfb\u7ed3\u6784\u662f\u6309\u5de5\u4f5c\u8d1f\u8f7d\u5212\u5206\u7684\uff0c\u5e76\u4e14\u7ec4\u4ef6\u662f\u677e\u6563\u8026\u5408\u7684\uff0c\u6240\u4ee5 CAS \u7684\u5f71\u54cd\u8303\u56f4\u6bd4\u5178\u578b\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u4f53\u7cfb\u7ed3\u6784\u5c0f\u5f97\u591a\u3002"),(0,o.kt)("p",null,"CAS \u53ef\u4ee5\u901a\u8fc7\u4ece\u5b58\u50a8\u63a7\u5236\u5668\u5230\u5b58\u50a8\u526f\u672c\u7684\u540c\u6b65\u590d\u5236\u6765\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\u3002\u7ef4\u62a4\u526f\u672c\u6240\u9700\u7684\u5143\u6570\u636e\u7b80\u5316\u4e3a\u526f\u672c\u8282\u70b9\u7684\u4fe1\u606f\u4ee5\u53ca\u6709\u5173\u526f\u672c\u72b6\u6001\u7684\u4fe1\u606f\u3002\u5982\u679c\u67d0\u4e2a\u8282\u70b9\u51fa\u73b0\u6545\u969c\uff0c\u5b58\u50a8\u63a7\u5236\u5668\u5c06\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u6216\u7b2c\u4e09\u4e2a\u526f\u672c\u5728\u6b63\u8fd0\u884c\u4e14\u6570\u636e\u53ef\u7528\u7684\u8282\u70b9\u4e0a\u8f6e\u8f6c\u3002\u56e0\u6b64\uff0c\u4f7f\u7528 CAS \u65f6\uff0c\u5f71\u54cd\u8303\u56f4\u8981\u5c0f\u5f97\u591a\uff0c\u5f71\u54cd\u4ec5\u5c40\u9650\u5728\u8be5\u8282\u70b9\u4e0a\u6709\u526f\u672c\u7684\u5377\u3002"))}p.isMDXComponent=!0}}]);