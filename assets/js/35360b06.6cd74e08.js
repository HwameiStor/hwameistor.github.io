"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4049],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||s;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const s={sidebar_position:2,sidebar_label:"TiDB"},r="TiDB",l={unversionedId:"use_cases/tidb",id:"use_cases/tidb",title:"TiDB",description:"Introduction to TiDB",source:"@site/docs/use_cases/tidb.md",sourceDirName:"use_cases",slug:"/use_cases/tidb",permalink:"/docs/use_cases/tidb",draft:!1,editUrl:"https://github.com/hwameistor/hwameistor/edit/main/docs/docs/use_cases/tidb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"TiDB"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/use_cases/overview"},next:{title:"MinIO",permalink:"/docs/use_cases/minio/"}},o={},d=[{value:"Introduction to TiDB",id:"introduction-to-tidb",level:2},{value:"TiDB architecture",id:"tidb-architecture",level:3},{value:"TiDB database storage",id:"tidb-database-storage",level:3},{value:"Build the test environment",id:"build-the-test-environment",level:2},{value:"Kubernetes cluster",id:"kubernetes-cluster",level:3},{value:"HwameiStor local storage",id:"hwameistor-local-storage",level:3},{value:"Deploy TiDB on Kubernetes",id:"deploy-tidb-on-kubernetes",level:3},{value:"Deploy TiDB Operator",id:"deploy-tidb-operator",level:4},{value:"Deploy the TiDB cluster",id:"deploy-the-tidb-cluster",level:4},{value:"Connect the TiDB cluster",id:"connect-the-tidb-cluster",level:4},{value:"Check and verify the TiDB cluster status",id:"check-and-verify-the-tidb-cluster-status",level:4},{value:"Configure the HwameiStor storage",id:"configure-the-hwameistor-storage",level:4},{value:"Test procedure",id:"test-procedure",level:2},{value:"Basic SQL capability test",id:"basic-sql-capability-test",level:3},{value:"Distributed transaction",id:"distributed-transaction",level:4},{value:"Object isolation",id:"object-isolation",level:4},{value:"Table operation support",id:"table-operation-support",level:4},{value:"Index support",id:"index-support",level:4},{value:"Statements",id:"statements",level:4},{value:"Parsing execution plan",id:"parsing-execution-plan",level:4},{value:"Binding execution plan",id:"binding-execution-plan",level:4},{value:"Common functions",id:"common-functions",level:4},{value:"Explicit/implicit transactions",id:"explicitimplicit-transactions",level:4},{value:"Character set",id:"character-set",level:4},{value:"Lock support",id:"lock-support",level:4},{value:"Isolation levels",id:"isolation-levels",level:4},{value:"Distributed complex query",id:"distributed-complex-query",level:4},{value:"System security test",id:"system-security-test",level:3},{value:"Account management and permission test",id:"account-management-and-permission-test",level:4},{value:"Access control",id:"access-control",level:4},{value:"Whitelist",id:"whitelist",level:4},{value:"Operation log",id:"operation-log",level:4},{value:"Operation and maintenance test",id:"operation-and-maintenance-test",level:3},{value:"Import and export data",id:"import-and-export-data",level:4},{value:"Slow log query",id:"slow-log-query",level:4}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tidb"},"TiDB"),(0,i.kt)("h2",{id:"introduction-to-tidb"},"Introduction to TiDB"),(0,i.kt)("p",null,"TiDB is a distributed database product that supports OLTP (Online Transactional Processing), OLAP (Online Analytical Processing), and HTAP (Hybrid Transactional and Analytical Processing) services, compatible with key features such as MySQL 5.7 protocol and MySQL ecosystem. The goal of TiDB is to provide users with one-stop OLTP, OLAP, and HTAP solutions, which are suitable for various application scenarios such as high availability, strict requirements for strong consistency, and large data scale."),(0,i.kt)("h3",{id:"tidb-architecture"},"TiDB architecture"),(0,i.kt)("p",null,"The TiDB distributed database splits the overall architecture into multiple modules that can communicate with each other. The architecture diagram is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TiDB architecture",src:a(5618).Z,width:"1046",height:"500"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TiDB Server")),(0,i.kt)("p",{parentName:"li"},"The SQL layer exposes the connection endpoints of the MySQL protocol to the outside world, and is responsible for accepting connections from clients, performing SQL parsing and optimization and finally generating a distributed execution plan. The TiDB layer itself is stateless. In practice, you can start several TiDB instances. A unified access address is provided externally through load-balance components (such as LVS, HAProxy, or F5), and client connections can be evenly distributed on to these TiDB instances. The TiDB server itself does not store data, but only parses SQL and forwards the actual data read request to the underlying storage node, TiKV (or TiFlash).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PD (Placement Driver) Server")),(0,i.kt)("p",{parentName:"li"},'The metadata management module across a TiDB cluster is responsible for storing the real-time data distribution of each TiKV node and the overall topology of the cluster, providing the TiDB Dashboard management and control interface, and assigning transaction IDs to distributed transactions. Placement Driver (PD) not only stores metadata, but also issues data scheduling commands to specific TiKV nodes based on the real-time data distribution status reported by TiKV nodes, which can be said to be the "brain" of the entire cluster. In addition, the PD itself is also composed of at least 3 nodes and has high availability capabilities. It is recommended to deploy an odd number of PD nodes.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Storage nodes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TiKV Server: In charge of storing data. From the outside, TiKV is a distributed Key-Value storage engine that provides transactions. The basic unit for storing data is Region. Each Region is responsible for storing the data of a Key Range (the block between left-closed and right-open from StartKey to EndKey). Each TiKV node is responsible for multiple Regions. TiKV API provides native support for distributed transactions at the KV key-value pair level, and provides the levels of Snapshot Isolation (SI) by default, which is also the core of TiDB's support for distributed transactions at the SQL level. After the SQL layer of TiDB completes the SQL parsing, it will convert the SQL execution plan into the actual call to the TiKV API. Therefore, the data is stored in TiKV. In addition, the TiKV data will be automatically maintained in multiple replicas (the default is three replicas), which naturally supports high availability and automatic failover.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TiFlash is a special storage node. Unlike ordinary TiKV nodes, data is stored in columns in TiFlash, and the main function is to accelerate analysis-based scenarios."))))),(0,i.kt)("h3",{id:"tidb-database-storage"},"TiDB database storage"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TiDB database storage",src:a(4796).Z,width:"1923",height:"1779"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key-Value Pair")),(0,i.kt)("p",{parentName:"li"},"The choice of TiKV is the Key-Value model that provides an ordered traversal method. Two key points of TiKV data storage are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A huge Map (comparable to std::map in C++) that stores Key-Value Pairs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Key-Value pairs in this Map are sorted by the binary order of the Key, that is, you can seek to the position of a certain Key, and then continuously call the Next method to obtain the Key-Value larger than this Key in an ascending order.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Local storage (Rocks DB)")),(0,i.kt)("p",{parentName:"li"},"In any persistent storage engine, data must be saved on disk after all, and TiKV is not different. However, TiKV does not choose to write data directly to the disk, but stores the data in RocksDB, and RocksDB is responsible for the specific data storage. The reason is that developing a stand-alone storage engine requires a lot of work, especially to make a high-performance stand-alone engine, which may require various meticulous optimizations. RocksDB is a very good stand-alone KV storage engine open sourced by Facebook. It can meet various requirements of TiKV for single engine. Here we can simply consider that RocksDB is a persistent Key-Value Map on a host.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Raft protocol")),(0,i.kt)("p",{parentName:"li"},"TiKV uses the Raft algorithm to ensure that data is not lost and error-free when a single host fails. In short, it is to replicate data to multiple hosts, so that if one host cannot provide services, replicas on other hosts can still provide services. This data replication scheme is reliable and efficient, and can deal with replica failures.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Region")),(0,i.kt)("p",{parentName:"li"},"TiKV divides the Range by Key. A certain segment of consecutive Keys are stored on a storage node. Divide the entire Key-Value space into many segments, each segment is a series of consecutive Keys, called a Region. Try to keep the data saved in each Region within a reasonable size. Currently, the default in TiKV is no more than 96 MB. Each Region can be described by a left-closed and right-open block such as ","[StartKey, EndKey]",".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MVCC")),(0,i.kt)("p",{parentName:"li"},"TiKV implements Multi-Version Concurrency Control (MVCC).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Distributed ACID transactions")),(0,i.kt)("p",{parentName:"li"},"TiKV uses the transaction model used by Google in BigTable: Percolator."))),(0,i.kt)("h2",{id:"build-the-test-environment"},"Build the test environment"),(0,i.kt)("h3",{id:"kubernetes-cluster"},"Kubernetes cluster"),(0,i.kt)("p",null,"In this test, we use three VM nodes to deploy the Kubernetes cluster, including one master node and two worker nodes. kubelet version is 1.22.0."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"k8s cluster",src:a(6236).Z,width:"1923",height:"410"})),(0,i.kt)("h3",{id:"hwameistor-local-storage"},"HwameiStor local storage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy the HwameiStor local storage in the Kubernetes cluster"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"HwameiStor local storage",src:a(1726).Z,width:"900",height:"383"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure a 100G local disk, sdb, for HwameiStor on two worker nodes respectively"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"sdb1",src:a(1425).Z,width:"1156",height:"266"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"sdb2",src:a(2656).Z,width:"2006",height:"790"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create StorageClass"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"create StorageClass",src:a(1960).Z,width:"2175",height:"182"})))),(0,i.kt)("h3",{id:"deploy-tidb-on-kubernetes"},"Deploy TiDB on Kubernetes"),(0,i.kt)("p",null,"TiDB can be deployed on Kubernetes using TiDB Operator. TiDB Operator is an automatic operation and maintenance system for TiDB clusters on Kubernetes. It provides full lifecycle management of TiDB including deployment, upgrade, scaling, backup and recovery, and configuration changes. With TiDB Operator, TiDB can run seamlessly on public cloud or privately deployed Kubernetes clusters."),(0,i.kt)("p",null,"The compatibility between TiDB and TiDB Operator versions is as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"TiDB  version"),(0,i.kt)("th",{parentName:"tr",align:null},"Applicable versions of TiDB Operator"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dev"),(0,i.kt)("td",{parentName:"tr",align:null},"dev")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TiDB  >= 5.4"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5.1  <= TiDB < 5.4"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3 (recommended), 1.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3.0  <= TiDB < 5.1"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3 (recommended), 1.2, 1.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.1  <= TiDB < 3.0"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0 (maintenance stopped)")))),(0,i.kt)("h4",{id:"deploy-tidb-operator"},"Deploy TiDB Operator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install TiDB CRDs"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/manifests/crd.yaml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install TiDB Operator"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add pingcap https://charts.pingcap.org/ \nkubectl create namespace tidb-admin \nhelm install --namespace tidb-admin tidb-operator pingcap/tidb-operator --version v1.3.2 \\\n--set operatorImage=registry.cn-beijing.aliyuncs.com/tidb/tidb-operator:v1.3.2 \\\n--set tidbBackupManagerImage=registry.cn-beijing.aliyuncs.com/tidb/tidb-backup-manager:v1.3.2 \\\n--set scheduler.kubeSchedulerImageName=registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check TiDB Operator components"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"check TiDB Operator components",src:a(6335).Z,width:"2505",height:"207"})))),(0,i.kt)("h4",{id:"deploy-the-tidb-cluster"},"Deploy the TiDB cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace tidb-cluster && \\\nkubectl -n tidb-cluster apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/basic/tidb-cluster.yaml \nkubectl -n tidb-cluster apply -f https://raw.githubusercontent.com /pingcap/tidb-operator/master/examples/basic/tidb-monitor.yaml\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"deploy TiDB cluster",src:a(3787).Z,width:"2498",height:"354"})),(0,i.kt)("h4",{id:"connect-the-tidb-cluster"},"Connect the TiDB cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum -y install mysql-client\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connect tidb",src:a(1110).Z,width:"2430",height:"719"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n tidb-cluster svc/basic-tidb 4000 > pf4000.out & \n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connect TiDB cluster",src:a(387).Z,width:"1420",height:"68"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connect tidb cluster",src:a(5711).Z,width:"604",height:"152"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"connect TiDB cluster",src:a(1977).Z,width:"2499",height:"749"})),(0,i.kt)("h4",{id:"check-and-verify-the-tidb-cluster-status"},"Check and verify the TiDB cluster status"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the Hello_world table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table hello_world (id int unsigned not null auto_increment primary key, v varchar(32)); \n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"create Hello_world table",src:a(9076).Z,width:"1266",height:"807"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the TiDB version"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select tidb_version()\\G;\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"check version",src:a(7493).Z,width:"1042",height:"434"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the Tikv storage status"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.tikv_store_status\\G;\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"check storage",src:a(8446).Z,width:"1190",height:"884"})))),(0,i.kt)("h4",{id:"configure-the-hwameistor-storage"},"Configure the HwameiStor storage"),(0,i.kt)("p",null,"Create a PVC for tidb-tikv and tidb-pd from ",(0,i.kt)("inlineCode",{parentName:"p"},"storageClass local-storage-hdd-lvm"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HwameiStor storage config",src:a(3941).Z,width:"2498",height:"248"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pvc1",src:a(607).Z,width:"1261",height:"1438"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pvc2",src:a(452).Z,width:"787",height:"954"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po basic-tikv-0 -oyaml\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mountpvc",src:a(3798).Z,width:"1021",height:"1430"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po basic-pd-0 -oyaml\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mountpvc1",src:a(2369).Z,width:"1154",height:"1454"})),(0,i.kt)("h2",{id:"test-procedure"},"Test procedure"),(0,i.kt)("h3",{id:"basic-sql-capability-test"},"Basic SQL capability test"),(0,i.kt)("p",null,"After the database cluster is deployed, we performed the following tests about basic capabilities. All are successfully passed."),(0,i.kt)("h4",{id:"distributed-transaction"},"Distributed transaction"),(0,i.kt)("p",null,"Test purpose: In the case of multiple isolation levels, check if the completeness constraints of distributed data operations are supported, such as atomicity, consistency, isolation, and durability (ACID)"),(0,i.kt)("p",null,"Test steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the database: testdb")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the table ",(0,i.kt)("inlineCode",{parentName:"p"},"t_test ( id int AUTO_INCREMENT, name varchar(32), PRIMARY KEY (id) )"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run a test script"))),(0,i.kt)("p",null,"Test result: The completeness constraints of distributed data operations are supported, such as atomicity, consistency, isolation, and durability (ACID), in the case of multiple isolation levels"),(0,i.kt)("h4",{id:"object-isolation"},"Object isolation"),(0,i.kt)("p",null,"Test purpose: Check if the object isolation can be implemented by using different schemas"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create database if not exists testdb;\nuse testdb\ncreate table if not exists t_test\n( id                   bigint,\n  name                 varchar(200),\n  sale_time            datetime default current_timestamp,\n  constraint pk_t_test primary key (id)\n);\ninsert into t_test(id,name) values (1,'a'),(2,'b'),(3,'c');\ncreate user 'readonly'@'%' identified by \"readonly\";\ngrant select on testdb.* to readonly@'%';\nselect * from testdb.t_test;\nupdate testdb.t_test set name='aaa';\ncreate user 'otheruser'@'%' identified by \"otheruser\";\n")),(0,i.kt)("p",null,"Test result: Supported to create different schemas to implement the object isolation"),(0,i.kt)("h4",{id:"table-operation-support"},"Table operation support"),(0,i.kt)("p",null,"Test purpose: Check if you can create, delete, and modifiy table data, DML, columns, partition table"),(0,i.kt)("p",null,"Test steps: Run the test scripts step by step after connecting the database"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"# Create and delete table\ndrop table if exists t_test;\ncreate table if not exists t_test\n( id                   bigint default '0',\n  name                 varchar(200) default '' ,\n  sale_time            datetime default current_timestamp,\n  constraint pk_t_test primary key (id)\n);\n# Delete and modify\ninsert into t_test(id,name) values (1,'a'),(2,'b'),(3,'c'),(4,'d'),(5,'e');\nupdate t_test set name='aaa' where id=1;\nupdate t_test set name='bbb' where id=2;\ndelete from t_dml where id=5;\n# Modify, add, delete columns\nalter table t_test modify column name varchar(250);\nalter table t_test add column col varchar(255);\ninsert into t_test(id,name,col) values(10,'test','new_col');     \nalter table t_test add column colwithdefault varchar(255) default 'aaaa';\ninsert into t_test(id,name) values(20,'testdefault');\ninsert into t_test(id,name,colwithdefault ) values(10,'test','non-default ');     \nalter table t_test drop column colwithdefault;\n# Type of partition table (only listed part of scripts)\nCREATE TABLE employees (\n    id INT NOT NULL,\nfname VARCHAR(30),\nlname VARCHAR(30),\n    hired DATE NOT NULL DEFAULT '1970-01-01',\n    separated DATE NOT NULL DEFAULT '9999-12-31',\njob_code INT NOT NULL,\nstore_id INT NOT NULL\n)\n")),(0,i.kt)("p",null,"Test result: Supported to create, delete, and modifiy table data, DML, columns, partition table"),(0,i.kt)("h4",{id:"index-support"},"Index support"),(0,i.kt)("p",null,"Test purpose: Verify different indexes (unique, clustered, partitioned, Bidirectional indexes, Expression-based indexes, hash indexes, etc.) and index rebuild operations."),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alter table t_test add unique index udx_t_test (name);\n# The default is clustered index of primary key\nADMIN CHECK TABLE t_test;\ncreate index time_idx on t_test(sale_time);\nalter table t_test drop index time_idx;\nadmin show ddl jobs;\nadmin show ddl job queries 156;\ncreate index time_idx on t_test(sale_time);\n")),(0,i.kt)("p",null,"Test result: Supported to create, delete, combine, and list indexes and supported for unique index"),(0,i.kt)("h4",{id:"statements"},"Statements"),(0,i.kt)("p",null,"Test purpose: Check if the statements in distributed databases are supported such as ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"case when"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"for loop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"while loop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"loop exit when")," (up to 5 kinds)"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CASE id WHEN 1 THEN 'first' WHEN 2 THEN 'second' ELSE 'OTHERS' END AS id_new  FROM t_test;\nSELECT IF(id>2,'int2+','int2-') from t_test;\n\n")),(0,i.kt)("p",null,"Test result: supported for statements such as ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"case when"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"for loop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"while loop"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"loop exit when")," (up to 5 kinds)"),(0,i.kt)("h4",{id:"parsing-execution-plan"},"Parsing execution plan"),(0,i.kt)("p",null,"Test purpose: Check if execution plan parsing is supported for distributed databases"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"explain analyze select * from t_test where id NOT IN (1,2,4);\nexplain analyze select * from t_test a where EXISTS (select * from t_test b where a.id=b.id and b.id<3);\nexplain analyze SELECT IF(id>2,'int2+','int2-') from t_test;\n")),(0,i.kt)("p",null,"Test result: the execution plan is supported to parse"),(0,i.kt)("h4",{id:"binding-execution-plan"},"Binding execution plan"),(0,i.kt)("p",null,"Test purpose: Verify the feature of binding execution plan for distributed databases"),(0,i.kt)("p",null,"Test steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"View the current execution plan of sql statements")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the binding feature")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"View the execution plan after the sql statement is binded")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the binding"))),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"explain select * from employees3 a join employees4 b on a.id = b.id where a.lname='Johnson';\nexplain select /*+ hash_join(a,b) */ * from employees3 a join employees4 b on a.id = b.id where a.lname='Johnson';\n")),(0,i.kt)("p",null,"Test result: It may not be hash_join when hint is not used, and it must be hash_join after hint is used."),(0,i.kt)("h4",{id:"common-functions"},"Common functions"),(0,i.kt)("p",null,"Test purpose: Verify standard functions of distributed databases"),(0,i.kt)("p",null,"Test result: Standard database functions are supported"),(0,i.kt)("h4",{id:"explicitimplicit-transactions"},"Explicit/implicit transactions"),(0,i.kt)("p",null,"Test purpose: Verify the transaction support of distributed databases"),(0,i.kt)("p",null,"Test result: Explict and implicit transactions are supported"),(0,i.kt)("h4",{id:"character-set"},"Character set"),(0,i.kt)("p",null,"Test purpose: Verify the data types supported by distributed database"),(0,i.kt)("p",null,"Test result: Only the UTF-8 mb4 character set is supported now"),(0,i.kt)("h4",{id:"lock-support"},"Lock support"),(0,i.kt)("p",null,"Test purpose: Verify the lock implementation of distributed databases"),(0,i.kt)("p",null,"Test result: Described how the lock is implemented, what are blockage conditions in the case of R-R/R-W/W-W, and how the deadlock is handled"),(0,i.kt)("h4",{id:"isolation-levels"},"Isolation levels"),(0,i.kt)("p",null,"Test purpose: Verify the transactional isolation levels of distributed databases"),(0,i.kt)("p",null,"Test result: Supported for si and rc isolation levels (4.0 GA version)"),(0,i.kt)("h4",{id:"distributed-complex-query"},"Distributed complex query"),(0,i.kt)("p",null,"Test purpose: Verify the complex query capabilities of distributed databases"),(0,i.kt)("p",null,"Test result: Supported for the distributed complex queries and operations such as inter-node joins, and supported for window functions and hierarchical queries"),(0,i.kt)("h3",{id:"system-security-test"},"System security test"),(0,i.kt)("p",null,"This section describes system security tests. After the database cluster is deployed, all the following tests are passed."),(0,i.kt)("h4",{id:"account-management-and-permission-test"},"Account management and permission test"),(0,i.kt)("p",null,"Test purpose: Verify the accout permisson management of distributed databases"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select host,user,authentication_string from mysql.user;\ncreate user tidb IDENTIFIED by 'tidb'; \nselect host,user,authentication_string from mysql.user;\nset password for tidb =password('tidbnew');\nselect host,user,authentication_string,Select_priv from mysql.user;\ngrant select on *.* to tidb;\nflush privileges ;\nselect host,user,authentication_string,Select_priv from mysql.user;\ngrant all privileges on *.* to tidb;\nflush privileges ;\nselect * from  mysql.user where user='tidb';\nrevoke select on *.* from tidb; \nflush privileges ;\nrevoke all privileges on *.* from tidb;\nflush privileges ;\ngrant select(id) on test.TEST_HOTSPOT to tidb;\ndrop user tidb;\n")),(0,i.kt)("p",null,"Test results:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supported for creating, modifying, and deleting accounts, and configuring passwords, and supported for the separation of security, audit, and data management")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Based on different accounts, various permission control for database includes: instance, library, table, and column"))),(0,i.kt)("h4",{id:"access-control"},"Access control"),(0,i.kt)("p",null,"Test purpose: Verify the permission access control of distributed databases, and control the database data by granting basic CRUD (create, read, update, and delete) permissions"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -h 172.17.49.222 -P 4000\ndrop user tidb;\ndrop user tidb1;\ncreate user tidb IDENTIFIED by 'tidb'; \ngrant select on tidb.* to tidb;\ngrant insert on tidb.* to tidb;\ngrant update on tidb.* to tidb;\ngrant delete on tidb.* to tidb;\nflush privileges;\nshow grants for tidb;\nexit;\nmysql -u tidb -h 172.17.49.222 -ptidb -P 4000 -D tidb -e 'select * from aa;'\nmysql -u tidb -h 172.17.49.222 -ptidb -P 4000 -D tidb -e 'insert into aa values(2);'\nmysql -u tidb -h 172.17.49.222 -ptidb -P 4000 -D tidb -e 'update aa set id=3;'\nmysql -u tidb -h 172.17.49.222 -ptidb -P 4000 -D tidb -e 'delete from aa where id=3;'\n")),(0,i.kt)("p",null,"Test result: Database data is controlled by granting the basic CRUD permissions"),(0,i.kt)("h4",{id:"whitelist"},"Whitelist"),(0,i.kt)("p",null,"Test purpose: Verify the whitelist feature of distributed databases"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql -u root -h 172.17.49.102 -P 4000\ndrop user tidb;\ncreate user tidb@'127.0.0.1' IDENTIFIED by 'tidb'; \nflush privileges;\nselect * from mysql.user where user='tidb';\nmysql -u tidb -h 127.0.0.1 -P 4000 -ptidb\nmysql -u tidb -h 172.17.49.102 -P 4000 -ptidb\n")),(0,i.kt)("p",null,"Test result: Supported for the IP whitelist feature and supportred for matching actions with IP segments"),(0,i.kt)("h4",{id:"operation-log"},"Operation log"),(0,i.kt)("p",null,"Test purpose: Verify the monitor capability to distributed databases"),(0,i.kt)("p",null,"Test script: ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl -ntidb-cluster logs tidb-test-pd-2 --tail 22")),(0,i.kt)("p",null,"Test result: Record key actions or misoperations performed by users through the operation and maintenance management console or API"),(0,i.kt)("h3",{id:"operation-and-maintenance-test"},"Operation and maintenance test"),(0,i.kt)("p",null,"This section describes the operation and maintenance test. After the database cluster is deployed, the following operation and maintenance tests are all passed."),(0,i.kt)("h4",{id:"import-and-export-data"},"Import and export data"),(0,i.kt)("p",null,"Test purpose: Verify the tools support for importing and exporting data of distributed databases"),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from sbtest1 into outfile '/sbtest1.csv';\nload data local infile '/sbtest1.csv' into table test100;\n")),(0,i.kt)("p",null,"Test result: Supported for importing and exporting table, schema, and database"),(0,i.kt)("h4",{id:"slow-log-query"},"Slow log query"),(0,i.kt)("p",null,"Test purpose: Get the SQL info by slow query"),(0,i.kt)("p",null,"Prerequisite: The SQL execution time shall be longer than the configured threshold for slow query, and the SQL execution is completed"),(0,i.kt)("p",null,"Test steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjust the slow query threshold to 100 ms")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run SQL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"View the slow query info from log, system table, or dashboard"))),(0,i.kt)("p",null,"Test script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like 'tidb_slow_log_threshold';\nset tidb_slow_log_threshold=100;\nselect query_time, query from information_schema.slow_query where is_internal = false order by query_time desc limit 3;\n")),(0,i.kt)("p",null,"Test result: Can get the slow query info."),(0,i.kt)("p",null,"For details about test data, see ",(0,i.kt)("a",{target:"_blank",href:a(7261).Z},"TiDB on HwameiStor Deployment and Test Logs"),"."))}c.isMDXComponent=!0},7261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/TiDBonHwameiStor-906bfd680bcfe09f47e9c9e5ed8bc3ec.docx"},5618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture-2a3f12e542dfbb4545e4e20e4da92010.png"},6335:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-ab733dc3ff2b22eb313f91d9095bb2cb.png"},8446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/checkstorage-be130e7558ea12ef380164e5bd33f2e8.png"},7493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/checkversion-e0586d069d8cdb100ba172e2836fb92d.png"},387:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connect1-be6b13647b17742c3a967b3e8829749e.png"},5711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connect2-7c52ba62c2f250f12ed495cfa5fd1cb8.png"},1977:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connect3-abfb57d8b142dfffe9a51c08bd1b2b49.png"},1110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connecttidb-a7581718045137e665d6661f70cfa7ec.png"},3787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deploytidb-a91346d128e05f23ae69c262e62c9227.png"},9076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/helloworld-d916ce6e1f0e069e5d4acb776b444962.png"},1726:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hwameistor-b1534b2445747773ba035b59d9a2e4d9.png"},6236:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/k8scluster-109d22938707ca1088d83020079a39da.png"},3798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mountpvc-8fd83543e55e5781e6ca1cf5a5b549c6.png"},2369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mountpvc1-d2d7077971a2980378654c8e06afee2c.png"},3941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pvc-72ff9e3fbbb8ab8087d52ab36dd732f7.png"},607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pvc1-bc1017044ab502ea1ff3c21be110a088.png"},452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pvc2-307ff6e797cde3b258136d935454b343.png"},1425:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sdb1-4d636d1f52a5d9c0c62e6850b5144a43.png"},2656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sdb2-3ced8000888d850b499d6265ae87f496.png"},4796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storage-a293b3e63ad176d606e42501e0048276.png"},1960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storageclass-63ede689f512ecd9ee5424ca6f7da52a.png"}}]);