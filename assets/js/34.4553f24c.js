(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{317:function(a,s,i){"use strict";i.r(s);var t=i(14),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" /")]),a._v(" "),s("h4",{attrs:{id:"高可用性-high-availability"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高可用性-high-availability"}},[a._v("#")]),a._v(" 高可用性（high availability）")]),a._v(" "),s("p",[a._v("你的数据对你来说很重要。保持它的安全和可用性对Elasticsearch很重要。有时，您的集群可能会出现硬件故障或断电。为了帮助您制定计划，Elasticsearch提供了许多功能，即使出现故障，也能实现高可用性。")]),a._v(" "),s("ul",[s("li",[a._v("通过适当的规划，集群可以专为弹性设计"),s("code",[a._v("Designing for resilience")]),a._v("以应对许多常见错误，从失去单个节点或网络连接到停电等区域性停电。")]),a._v(" "),s("li",[a._v("您可以使用跨集群复制"),s("code",[a._v("Cross-cluster replication")]),a._v("将数据复制到远程跟随者集群，该集群可能位于不同的数据中心，甚至位于与领导者集群不同的大陆。跟随者集群充当热备用，在发生严重灾难导致引导者集群发生故障时随时可以进行故障转移。追随者集群还可以充当地理复制品，为附近客户端的搜索提供服务。")]),a._v(" "),s("li",[a._v("防止数据丢失的最后一道防线是定期拍摄集群的快照"),s("code",[a._v("take regular snapshots")]),a._v("，以便在需要时在其他地方恢复其全新副本。")])]),a._v(" "),s("h5",{attrs:{id:"弹性设计-designing-for-resilience"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹性设计-designing-for-resilience"}},[a._v("#")]),a._v(" 弹性设计（Designing for resilience）")]),a._v(" "),s("p",[a._v("像Elasticsearch这样的分布式系统被设计为即使某些组件出现故障也能继续工作。只要有足够的连接良好的节点来接管它们的职责，Elasticsearch集群就可以在某些节点不可用或断开连接的情况下继续正常运行。"),s("br"),a._v("弹性集群的大小是有限制的。所有Elasticsearch集群都需要：")]),a._v(" "),s("ul",[s("li",[a._v("一个选定的主节点节点。（基于法定人数的决策Quorum-based decision making）")]),a._v(" "),s("li",[a._v("每个角色至少有一个节点。")]),a._v(" "),s("li",[a._v("每个碎片至少有一个副本。")])]),a._v(" "),s("h5",{attrs:{id:"跨群集复制-cross-cluster-replication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨群集复制-cross-cluster-replication"}},[a._v("#")]),a._v(" 跨群集复制（Cross-cluster replication）")]),a._v(" "),s("p",[a._v("使用跨集群复制，您可以跨集群复制索引以：")]),a._v(" "),s("ul",[s("li",[a._v("在数据中心中断的情况下继续处理搜索请求")]),a._v(" "),s("li",[a._v("防止搜索量影响索引吞吐量")]),a._v(" "),s("li",[a._v("通过在用户附近的地理位置处理搜索请求来减少搜索延迟")])]),a._v(" "),s("p",[a._v("跨群集复制使用主动-被动模式。索引到前导索引，数据将复制到一个或多个只读跟随索引。在将跟随索引添加到集群之前，必须配置包含前导索引的远程集群。"),s("br"),a._v("当引导索引接收到写入时，跟随索引从远程集群上的引导索引中提取更改。您可以手动创建跟随者索引，也可以配置自动跟随模式为新的时间序列索引自动创建跟随者指数。"),s("br"),a._v("您可以在单向或双向设置中配置跨群集复制群集：")]),a._v(" "),s("ul",[s("li",[a._v("在单向配置中，一个集群只包含前导索引，而另一个集群仅包含跟随索引。")]),a._v(" "),s("li",[a._v("在双向配置中，每个集群都包含前导索引和跟随索引。")])]),a._v(" "),s("p",[a._v("在单向配置中，包含跟随索引的集群必须运行与远程集群相同或更新版本的Elasticsearch。如果更新，则版本也必须兼容，如下表所示。")]),a._v(" "),s("h5",{attrs:{id:"备份群集-back-up-a-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份群集-back-up-a-cluster"}},[a._v("#")]),a._v(" 备份群集（Back up a cluster）")]),a._v(" "),s("p",[a._v("备份集群的唯一可靠且受支持的方法是拍摄快照"),s("code",[a._v("taking a snapshot")]),a._v("。您无法通过复制Elasticsearch集群节点的数据目录来备份该集群。不支持从文件系统级备份中恢复任何数据的方法。如果您尝试从这样的备份中恢复群集，它可能会失败，并报告损坏、文件丢失或其他数据不一致，或者它可能已经成功地静默地丢失了一些数据。")])])}),[],!1,null,null,null);s.default=r.exports}}]);