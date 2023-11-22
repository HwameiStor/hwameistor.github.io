"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,sidebar_label:"\u4f7f\u7528 LVM \u6570\u636e\u5377"},i="\u4f7f\u7528 LVM \u6570\u636e\u5377",l={unversionedId:"apps/lvm",id:"apps/lvm",title:"\u4f7f\u7528 LVM \u6570\u636e\u5377",description:"HwameiStor \u63d0\u4f9b\u4e86\u57fa\u4e8e LVM \u7684\u6570\u636e\u5377\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/apps/lvm.md",sourceDirName:"apps",slug:"/apps/lvm",permalink:"/cn/docs/apps/lvm",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/apps/lvm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u4f7f\u7528 LVM \u6570\u636e\u5377"},sidebar:"tutorialSidebar",previous:{title:"Volume Usage",permalink:"/cn/docs/category/volume-usage"},next:{title:"\u4f7f\u7528\u88f8\u78c1\u76d8\u6570\u636e\u5377",permalink:"/cn/docs/apps/disk"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-lvm-\u6570\u636e\u5377"},"\u4f7f\u7528 LVM \u6570\u636e\u5377"),(0,a.kt)("p",null,"HwameiStor \u63d0\u4f9b\u4e86\u57fa\u4e8e LVM \u7684\u6570\u636e\u5377\u3002\n\u8fd9\u79cd\u7c7b\u578b\u7684\u6570\u636e\u5377\u63d0\u4f9b\u4e86\u63a5\u8fd1\u539f\u751f\u78c1\u76d8\u7684\u8bfb\u5199\u6027\u80fd\uff0c\u5e76\u4e14\u5728\u6b64\u4e4b\u4e0a\u63d0\u4f9b\u4e86\u6570\u636e\u5377\u6269\u5bb9\u3001\u8fc1\u79fb\u3001HA \u7b49\u7b49\u9ad8\u7ea7\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," \u5e94\u7528\u5e76\u4f7f\u7528\u6570\u636e\u5377 ",(0,a.kt)("inlineCode",{parentName:"p"},"hwameistor-lvm-volume"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: default\nspec:\n  containers:\n  - name: nginx\n    image: docker.io/library/nginx:latest\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: data\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: data\n    persistentVolumeClaim:\n      claimName: hwameistor-lvm-volume\nEOF\n")))}u.isMDXComponent=!0}}]);