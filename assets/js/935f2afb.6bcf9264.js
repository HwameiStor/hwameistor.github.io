"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is HwameiStor","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Local Disk Manager","href":"/docs/modules/ldm","docId":"modules/ldm"},{"type":"link","label":"DataLoad Manager","href":"/docs/modules/dlm","docId":"modules/dlm"},{"type":"link","label":"DataSet Manager","href":"/docs/modules/dsm","docId":"modules/dsm"},{"type":"link","label":"Local Storage","href":"/docs/modules/ls","docId":"modules/ls"},{"type":"link","label":"Scheduler","href":"/docs/modules/scheduler","docId":"modules/scheduler"},{"type":"link","label":"Admission Controller","href":"/docs/modules/admission_controller","docId":"modules/admission_controller"},{"type":"link","label":"Evictor","href":"/docs/modules/evictor","docId":"modules/evictor"},{"type":"link","label":"Exporter","href":"/docs/modules/exporter","docId":"modules/exporter"},{"type":"link","label":"GUI","href":"/docs/modules/gui","docId":"modules/gui"},{"type":"link","label":"LDA Controller","href":"/docs/modules/lda_controller","docId":"modules/lda_controller"}],"href":"/docs/category/modules"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/docs/install/prereq","docId":"install/prereq"},{"type":"link","label":"Deploy with hwameistor-operator","href":"/docs/install/operator","docId":"install/operator"},{"type":"link","label":"Post-Check after Deployment","href":"/docs/install/post_check","docId":"install/post_check"},{"type":"link","label":"Uninstall","href":"/docs/install/uninstall","docId":"install/uninstall"}],"href":"/docs/category/installation"},{"type":"category","label":"Nodes and Disks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"LVM Storage Node","href":"/docs/nodes_and_disks/lvm_nodes","docId":"nodes_and_disks/lvm_nodes"},{"type":"link","label":"Disk Storage Node","href":"/docs/nodes_and_disks/disk_nodes","docId":"nodes_and_disks/disk_nodes"},{"type":"link","label":"Disk Expansion","href":"/docs/nodes_and_disks/disk_expansion","docId":"nodes_and_disks/disk_expansion"}],"href":"/docs/category/nodes-and-disks"},{"type":"category","label":"Volume","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Use LVM Volume","href":"/docs/apps/lvm","docId":"apps/lvm"},{"type":"link","label":"Use Disk Volume","href":"/docs/apps/disk","docId":"apps/disk"},{"type":"link","label":"Use HA Volumes","href":"/docs/apps/ha","docId":"apps/ha"}],"href":"/docs/category/volume"},{"type":"category","label":"Volumes Feature","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Volume Snapshot","href":"/docs/volumes/volume_snapshot","docId":"volumes/volume_snapshot"},{"type":"link","label":"Expand Volumes","href":"/docs/volumes/expand","docId":"volumes/expand"},{"type":"link","label":"PVC Autoresizing","href":"/docs/volumes/pvc_autoresizing","docId":"volumes/pvc_autoresizing"},{"type":"link","label":"Volume Provisioned IO","href":"/docs/volumes/volume_provisioned_io","docId":"volumes/volume_provisioned_io"},{"type":"link","label":"Volume Clone","href":"/docs/volumes/volume_clone","docId":"volumes/volume_clone"},{"type":"link","label":"Migrate Volumes","href":"/docs/volumes/migrate","docId":"volumes/migrate"},{"type":"link","label":"Eviction","href":"/docs/volumes/volume_eviction","docId":"volumes/volume_eviction"},{"type":"link","label":"Local Cache Volumes","href":"/docs/volumes/cache","docId":"volumes/cache"},{"type":"link","label":"Local Volumes","href":"/docs/volumes/local","docId":"volumes/local"}],"href":"/docs/category/volumes-feature"},{"type":"link","label":"Fast Failover","href":"/docs/fast_failover","docId":"fast_failover"},{"type":"link","label":"System Audit","href":"/docs/system_audit","docId":"system_audit"},{"type":"link","label":"APIs","href":"/docs/apis","docId":"apis"},{"type":"link","label":"FAQs","href":"/docs/faqs","docId":"faqs"},{"type":"category","label":"Use Cases","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/use_cases/overview","docId":"use_cases/overview"},{"type":"link","label":"TiDB","href":"/docs/use_cases/tidb","docId":"use_cases/tidb"},{"type":"link","label":"MinIO","href":"/docs/use_cases/minio/","docId":"use_cases/minio/minio"}],"href":"/docs/category/use-cases"},{"type":"category","label":"Terminologies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"K8s Storage","href":"/docs/terms/k8s_storage","docId":"terms/k8s_storage"},{"type":"link","label":"CAS","href":"/docs/terms/cas","docId":"terms/cas"},{"type":"link","label":"CSI","href":"/docs/terms/csi","docId":"terms/csi"},{"type":"link","label":"CRD and CR","href":"/docs/terms/crd_and_cr","docId":"terms/crd_and_cr"},{"type":"link","label":"Volume","href":"/docs/terms/volume","docId":"terms/volume"},{"type":"link","label":"LVM","href":"/docs/terms/lvm","docId":"terms/lvm"},{"type":"link","label":"PV and PVC","href":"/docs/terms/pv_pvc","docId":"terms/pv_pvc"}],"href":"/docs/category/terminologies"},{"type":"link","label":"Community","href":"/docs/community","docId":"community"},{"type":"category","label":"Contribution","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Contributing","href":"/docs/contribute/CONTRIBUTING","docId":"contribute/CONTRIBUTING"},{"type":"link","label":"HwameiStor Membership Roles","href":"/docs/contribute/membership","docId":"contribute/membership"}],"href":"/docs/category/contribution"}]},"docs":{"apis":{"id":"apis","title":"APIs","description":"CRD Object Classes","sidebar":"tutorialSidebar"},"apps/disk":{"id":"apps/disk","title":"Use Disk Volume","description":"HwameiStor provides another type of data volume known as raw disk data volume.","sidebar":"tutorialSidebar"},"apps/ha":{"id":"apps/ha","title":"Use HA Volumes","description":"When the HA module is enabled, HwameiStor Operator will generate a StorageClass of HA automatically.","sidebar":"tutorialSidebar"},"apps/lvm":{"id":"apps/lvm","title":"Use LVM Volume","description":"HwameiStor provides LVM-based data volumes,","sidebar":"tutorialSidebar"},"community":{"id":"community","title":"Community","description":"If you have any questions about the HwameiStor cloud-native local storage system, welcome to join the community to explore this metaverse world dedicated to developers and grow together!","sidebar":"tutorialSidebar"},"contribute/CONTRIBUTING":{"id":"contribute/CONTRIBUTING","title":"Contributing","description":"Welcome to HwameiStor!","sidebar":"tutorialSidebar"},"contribute/membership":{"id":"contribute/membership","title":"HwameiStor Membership Roles","description":"This document describes the set of roles individuals may have within the HwameiStor community, the requirements of each role, and the privileges that each role grants.","sidebar":"tutorialSidebar"},"faqs":{"id":"faqs","title":"FAQs","description":"Q1: How does hwameistor-scheduler work in a Kubernetes platform?","sidebar":"tutorialSidebar"},"fast_failover":{"id":"fast_failover","title":"Fast Failover","description":"When the stateful application (i.e. Pod with HwameiStor volume) runs into a problem, especially caused by the node issue,","sidebar":"tutorialSidebar"},"install/operator":{"id":"install/operator","title":"Deploy with hwameistor-operator","description":"You can use hwameistor-operator to deploy and manage HwameiStor system.","sidebar":"tutorialSidebar"},"install/post_check":{"id":"install/post_check","title":"Post-Check after Deployment","description":"This page takes 3-node kubernetes cluster as an example to perform post-check after installing HwameiStor.","sidebar":"tutorialSidebar"},"install/prereq":{"id":"install/prereq","title":"Prerequisites","description":"Kubernetes","sidebar":"tutorialSidebar"},"install/uninstall":{"id":"install/uninstall","title":"Uninstall (For test purposes only, not for production use)","description":"To ensure data security, it is strongly recommended not to uninstall the HwameiStor system in a production environment.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"What is HwameiStor","description":"HwameiStor is an HA local storage system for cloud-native stateful workloads.","sidebar":"tutorialSidebar"},"modules/admission_controller":{"id":"modules/admission_controller","title":"admission-controller","description":"admission-controller is a webhook that can automatically verify which pod uses the HwameiStor volume","sidebar":"tutorialSidebar"},"modules/dlm":{"id":"modules/dlm","title":"DataLoad Manager","description":"DataLoad Manager is a module of DataStor, which is a cloud-native local storage system acceleration solution in AI scenarios. It combines p2p technology to provide the ability to quickly load remote data.","sidebar":"tutorialSidebar"},"modules/dsm":{"id":"modules/dsm","title":"DataSet Manager","description":"DataSet Manager is one of the modules of DataStor which is a cloud-native local storage system acceleration solution in AI scenarios. It provides high-performance local cache volumes for data sets required by AI applications","sidebar":"tutorialSidebar"},"modules/evictor":{"id":"modules/evictor","title":"Evictor","description":"The Evictor is used to automatically migrate HwameiStor volumes in case of node or pod eviction. When a node or pod is evicted as either Planned or Unplanned, the associated HwameiStor volumes, which have a replica on the node, will be detected and migrated out of this node automatically. A scheduler will work for both LVM and Disk volumes.","sidebar":"tutorialSidebar"},"modules/exporter":{"id":"modules/exporter","title":"Exporter","description":"Exporter is HwameiStor\'s metrics server which will collect the metrics for the system resources, such as Disk, Volumes, Operations, etc.., and supply for the Prometheus module.","sidebar":"tutorialSidebar"},"modules/gui":{"id":"modules/gui","title":"GUI","description":"HwameiStor has a module for Graph User Interface. It will provide users with an easy way to manage the HwameiStor system. The GUI can be deployed by the Operator.","sidebar":"tutorialSidebar"},"modules/lda_controller":{"id":"modules/lda_controller","title":"LDA Controller","description":"The LDA controller provides a separate CRD - LocalDiskAction, which is used to match","sidebar":"tutorialSidebar"},"modules/ldm":{"id":"modules/ldm","title":"Local Disk Manager","description":"Local Disk Manager (LDM) is one of the modules of HwameiStor. LDM is used to simplify the management of disks on nodes. It can abstract the disk on a node into a resource for monitoring and management purposes. It\'s a daemon that will be deployed on each node, then detect the disk on the node, abstract it into local disk (LD) resources and save it to kubernetes.","sidebar":"tutorialSidebar"},"modules/ls":{"id":"modules/ls","title":"Local Storage","description":"Local Storage is one of the modules of HwameiStor which is a cloud-native local storage system. It provisions high performance and persistent LVM volume with local access to applications.","sidebar":"tutorialSidebar"},"modules/scheduler":{"id":"modules/scheduler","title":"Scheduler","description":"The Scheduler is used to automatically schedule the Pod to the correct node which is associated with the HwameiStor volume.","sidebar":"tutorialSidebar"},"nodes_and_disks/disk_expansion":{"id":"nodes_and_disks/disk_expansion","title":"Disk Expansion","description":"A storage system is usually expected to expand its capacity by adding a new disk","sidebar":"tutorialSidebar"},"nodes_and_disks/disk_nodes":{"id":"nodes_and_disks/disk_nodes","title":"Disk Storage Node","description":"Raw disk storage nodes provide applications with raw disk data volumes and","sidebar":"tutorialSidebar"},"nodes_and_disks/lvm_nodes":{"id":"nodes_and_disks/lvm_nodes","title":"LVM Storage Node","description":"LVM storage nodes pool the disks on the node and provide LVM-type data volumes for applications.","sidebar":"tutorialSidebar"},"system_audit":{"id":"system_audit","title":"System Audit","description":"It\'s important to record the information about the system operation history. HwameiStor provides a feature of audit to record the operations on all the system resources, including Cluster, Node, StoragePool, Volume, etc...","sidebar":"tutorialSidebar"},"terms/cas":{"id":"terms/cas","title":"CAS","description":"Container Attached Storage (CAS) is software that includes microservice based storage","sidebar":"tutorialSidebar"},"terms/crd_and_cr":{"id":"terms/crd_and_cr","title":"CRD and CR","description":"CRD","sidebar":"tutorialSidebar"},"terms/csi":{"id":"terms/csi","title":"CSI","description":"CSI is the abbreviation of Container Storage Interface. To have a better understanding","sidebar":"tutorialSidebar"},"terms/k8s_storage":{"id":"terms/k8s_storage","title":"K8s Storage","description":"Kubernetes has made several enhancements to support running Stateful Workloads","sidebar":"tutorialSidebar"},"terms/lvm":{"id":"terms/lvm","title":"LVM","description":"The full name of LVM is Logical Volume Manager. It adds a logical layer between","sidebar":"tutorialSidebar"},"terms/pv_pvc":{"id":"terms/pv_pvc","title":"PV and PVC","description":"The PersistentVolume subsystem provides an API for users and administrators that","sidebar":"tutorialSidebar"},"terms/volume":{"id":"terms/volume","title":"Volume","description":"On-disk files in a container are ephemeral, which presents some problems for non-trivial","sidebar":"tutorialSidebar"},"use_cases/minio/minio":{"id":"use_cases/minio/minio","title":"MinIO","description":"Introduction to MinIO","sidebar":"tutorialSidebar"},"use_cases/overview":{"id":"use_cases/overview","title":"Overview","description":"HwameiStor provisions two kind of local volumes: LVM and Disk.","sidebar":"tutorialSidebar"},"use_cases/tidb":{"id":"use_cases/tidb","title":"TiDB","description":"Introduction to TiDB","sidebar":"tutorialSidebar"},"volumes/cache":{"id":"volumes/cache","title":"Local Cache Volumes","description":"Running AI training applications with HwameiStor is simple.","sidebar":"tutorialSidebar"},"volumes/expand":{"id":"volumes/expand","title":"Expand Volumes","description":"HwameiStor supports CSI Volume Expansion, by which altering the size of PVC","sidebar":"tutorialSidebar"},"volumes/local":{"id":"volumes/local","title":"Local Volumes","description":"Running a stateful application with HwameiStor is super easy.","sidebar":"tutorialSidebar"},"volumes/migrate":{"id":"volumes/migrate","title":"Migrate Volumes","description":"Volume Migration is an important operation and maintenance management function of HwameiStor.","sidebar":"tutorialSidebar"},"volumes/pvc_autoresizing":{"id":"volumes/pvc_autoresizing","title":"PVC Autoresizing","description":"The component \\"hwameistor-pvc-autoresizer\\" provides the ability to automatically resize Persistent Volume Claims (PVCs).","sidebar":"tutorialSidebar"},"volumes/volume_clone":{"id":"volumes/volume_clone","title":"Volume Clone","description":"In HwameiStor, users can create clone volume for data volumes that have the same data as the source volume at the moment the clone occurs.","sidebar":"tutorialSidebar"},"volumes/volume_eviction":{"id":"volumes/volume_eviction","title":"Eviction","description":"Data volume migration along with node eviction is very important to keep the data","sidebar":"tutorialSidebar"},"volumes/volume_provisioned_io":{"id":"volumes/volume_provisioned_io","title":"Volume Provisioned IO","description":"In HwameiStor, it allows users to specify the maximum IOPS and throughput of a volume on a Kuberentes cluster.","sidebar":"tutorialSidebar"},"volumes/volume_snapshot":{"id":"volumes/volume_snapshot","title":"Volume Snapshot","description":"In HwameiStor, it allows users to create snapshots of data volumes and perform restore and rollback operations based on data volume snapshots.","sidebar":"tutorialSidebar"}}}')}}]);