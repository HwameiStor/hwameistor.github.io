"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=n,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:4,sidebar_label:"\u5378\u8f7d"},o="\u5378\u8f7d (\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883)",i={unversionedId:"quick_start/uninstall",id:"quick_start/uninstall",title:"\u5378\u8f7d (\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883)",description:"\u4e3a\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\uff0c\u5f3a\u70c8\u5efa\u8bae\u4e0d\u8981\u5378\u8f7d\u751f\u4ea7\u73af\u5883\u7684 HwameiStor \u7cfb\u7edf\u3002\u672c\u7ae0\u8282\u4ecb\u7ecd\u4e0b\u5217\u4e24\u79cd\u6d4b\u8bd5\u73af\u5883\u7684\u5378\u8f7d\u573a\u666f\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/quick_start/uninstall.md",sourceDirName:"quick_start",slug:"/quick_start/uninstall",permalink:"/cn/docs/quick_start/uninstall",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/quick_start/uninstall.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u5378\u8f7d"},sidebar:"tutorialSidebar",previous:{title:"PVC \u81ea\u52a8\u6269\u5bb9",permalink:"/cn/docs/quick_start/advanced_features/pvc_autoresizing"},next:{title:"Architecture of HwameiStor",permalink:"/cn/docs/category/architecture-of-hwameistor"}},p={},s=[{value:"\u5378\u8f7d\u4f46\u4fdd\u7559\u5df2\u6709\u6570\u636e\u5377",id:"\u5378\u8f7d\u4f46\u4fdd\u7559\u5df2\u6709\u6570\u636e\u5377",level:2},{value:"\u5378\u8f7d\u5e76\u5220\u9664\u5df2\u6709\u6570\u636e\u5377",id:"\u5378\u8f7d\u5e76\u5220\u9664\u5df2\u6709\u6570\u636e\u5377",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5378\u8f7d-\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883"},"\u5378\u8f7d (\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883)"),(0,n.kt)("p",null,"\u4e3a\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\uff0c\u5f3a\u70c8\u5efa\u8bae\u4e0d\u8981\u5378\u8f7d\u751f\u4ea7\u73af\u5883\u7684 HwameiStor \u7cfb\u7edf\u3002\u672c\u7ae0\u8282\u4ecb\u7ecd\u4e0b\u5217\u4e24\u79cd\u6d4b\u8bd5\u73af\u5883\u7684\u5378\u8f7d\u573a\u666f\u3002"),(0,n.kt)("h2",{id:"\u5378\u8f7d\u4f46\u4fdd\u7559\u5df2\u6709\u6570\u636e\u5377"},"\u5378\u8f7d\u4f46\u4fdd\u7559\u5df2\u6709\u6570\u636e\u5377"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5378\u8f7d HwameiStor \u7684\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u4f46\u662f\u4fdd\u7559\u5df2\u7ecf\u521b\u5efa\u7684\u6570\u636e\u5377\u5e76\u670d\u52a1\u4e8e\u6570\u636e\u5e94\u7528\uff0c\u91c7\u7528\u4e0b\u5217\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl get cluster.hwameistor.io\nNAME             AGE\ncluster-sample   21m\n\n$ kubectl delete clusters.hwameistor.io  hwameistor-cluster\n")),(0,n.kt)("p",null,"\u6700\u7ec8\uff0c\u6240\u6709\u7684 HwameiStor \u7cfb\u7edf\u7ec4\u4ef6\uff08Pods\uff09\u5c06\u88ab\u5220\u9664\u3002\u7528\u4e0b\u5217\u547d\u4ee4\u68c0\u67e5\uff0c\u7ed3\u679c\u4e3a\u7a7a\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl -n hwameistor get pod\n")),(0,n.kt)("h2",{id:"\u5378\u8f7d\u5e76\u5220\u9664\u5df2\u6709\u6570\u636e\u5377"},"\u5378\u8f7d\u5e76\u5220\u9664\u5df2\u6709\u6570\u636e\u5377"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"\u5728\u5378\u8f7d\u4e4b\u524d\uff0c\u8bf7\u786e\u8ba4\u6240\u6709\u6570\u636e\u90fd\u53ef\u4ee5\u88ab\u5220\u9664\u3002")),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5378\u8f7d HwameiStor \u6240\u6709\u7ec4\u4ef6\uff0c\u5e76\u5220\u9664\u6240\u6709\u6570\u636e\u5377\u53ca\u6570\u636e\uff0c\u91c7\u7528\u4e0b\u5217\u65b9\u5f0f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6e05\u7406\u6709\u72b6\u6001\u6570\u636e\u5e94\u7528\u3002"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664\u5e94\u7528\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664\u6570\u636e\u5377 PVC\u3002"),(0,n.kt)("p",{parentName:"li"},"\u76f8\u5173\u7684 PV\u3001LV\u3001LVR\u3001LVG \u90fd\u5c06\u88ab\u5220\u9664.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6e05\u7406 HwameiStor \u7cfb\u7edf\u7ec4\u4ef6\u3002"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 HwameiStor \u7ec4\u4ef6\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ kubectl delete clusters.hwameistor.io  hwameistor-cluster\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 HwameiStor \u7cfb\u7edf\u7a7a\u95f4\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-console"},"kubectl delete ns hwameistor\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 CRD\u3001Hook \u4ee5\u53ca RBAC\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get crd,mutatingwebhookconfiguration,clusterrolebinding,clusterrole -o name \\\n  | grep hwameistor \\\n  | xargs -t kubectl delete\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 StorageClass\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc -o name \\\n  | grep hwameistor-storage-lvm- \\\n  | xargs -t kubectl delete\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 hwameistor-operator\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall hwameistor-operator -n hwameistor\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u60a8\u4ecd\u7136\u9700\u8981\u6e05\u7406\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684 LVM \u914d\u7f6e\uff0c\u5e76\u91c7\u7528\u989d\u5916\u7684\u7cfb\u7edf\u5de5\u5177\uff08\u4f8b\u5982\uff1awipefs\uff09\u6e05\u9664\u78c1\u76d8\u4e0a\u7684\u6240\u6709\u6570\u636e\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wipefs -a /dev/sdx\nblkid /dev/sdx\n")))))}m.isMDXComponent=!0}}]);