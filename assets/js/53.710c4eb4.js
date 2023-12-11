(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{331:function(e,s,r){"use strict";r.r(s);var t=r(14),_=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" /")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://redis.io/topics/cluster-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/topics/cluster-tutorial.html"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://redis.io/docs/management/scaling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/docs/management/scaling/"),s("OutboundLink")],1)])]),e._v(" "),s("h4",{attrs:{id:"redis集群适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集群适用场景"}},[e._v("#")]),e._v(" Redis集群适用场景")]),e._v(" "),s("p",[e._v("如果想要在实现高并发的同时，容纳大量的数据，那么就需要"),s("code",[e._v("Redis集群")]),e._v("。"),s("br"),e._v("使用"),s("code",[e._v("Redis集群")]),e._v("之后，可以提供每秒几十万的读写并发。")]),e._v(" "),s("h4",{attrs:{id:"redis集群数据分片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集群数据分片"}},[e._v("#")]),e._v(" Redis集群数据分片")]),e._v(" "),s("p",[e._v("Redis Cluster不使用一致的哈希，而是一种不同形式的分片，其中每个密钥在概念上都是我们所称的哈希槽的一部分。")]),e._v(" "),s("blockquote",[s("p",[e._v("注意：Redis集群不使用一致性哈希算法。而是使用哈希槽算法，槽（虚拟节点）与真实节点的映射关系是固定的。发生扩缩容时，这个算法可以完全避免缓存丢失，即没有哈希算法的雪崩问题，也没有一致性哈希的击穿问题。")])]),e._v(" "),s("p",[e._v("Redis集群中有16384个哈希槽，为了计算给定密钥的哈希槽，我们只需取密钥的CRC16模16384。"),s("br"),e._v("Redis集群中的每个节点都负责哈希槽的一个子集，因此例如，您可能有一个具有3个节点的集群，其中：")]),e._v(" "),s("ul",[s("li",[e._v("节点A包含从0到5500的哈希槽。")]),e._v(" "),s("li",[e._v("节点B包含从5501到11000的散列槽。")]),e._v(" "),s("li",[e._v("节点C包含从11001到16383的散列槽。")])]),e._v(" "),s("p",[e._v("这允许轻松添加和删除集群中的节点。例如，如果我想添加一个新的节点D，我需要将一些哈希槽从节点a、B、C移动到D。类似地，如果我想要从集群中删除节点a，我可以将a提供的哈希槽移动到B和C。当节点a为空时，我可以从集群中完全删除它。"),s("br"),e._v("因为将哈希槽从一个节点移动到另一个节点不需要停止操作，所以添加和删除节点或更改节点所占哈希槽的百分比不需要任何停机时间。"),s("br"),e._v("Redis Cluster支持多个密钥操作，只要单个命令执行（或整个事务，或Lua脚本执行）所涉及的所有密钥都属于同一个哈希槽。用户可以通过使用一个称为散列标签"),s("code",[e._v("hash tags")]),e._v("的概念，强制多个密钥成为同一散列槽的一部分。"),s("br"),e._v("Redis Cluster规范中记录了哈希标记"),s("code",[e._v("hash tags")]),e._v("，但要点是，如果键中的{}方括号之间有一个子字符串，则只有字符串内部的内容会被哈希，因此例如{foo}key和另一个{foo}key保证在同一个散列槽中，并且可以在具有多个键作为参数的命令中一起使用。")]),e._v(" "),s("h4",{attrs:{id:"redis集群主备模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集群主备模型"}},[e._v("#")]),e._v(" Redis集群主备模型")]),e._v(" "),s("p",[e._v("为了在一个子集主节点出现故障或无法与大多数节点通信时保持可用，Redis Cluster使用主副本模型，其中每个哈希槽都有1个（主节点本身）到N个副本（N-1个额外的副本节点）。"),s("br"),e._v("在我们的具有节点A、B、C的示例集群中，如果节点B出现故障，集群将无法继续，因为我们不再有办法提供5501-11000范围内的哈希槽。"),s("br"),e._v("然而，当创建集群时（或稍后），我们向每个主节点添加一个副本节点，以便最终集群由作为主节点的A、B、C和作为副本节点的A1、B1、C1组成。这样，如果节点B发生故障，则系统能够继续。"),s("br"),e._v("节点B1复制了B，而B失败了，集群将提升节点B1为新的主节点，并将继续正常运行。"),s("br"),e._v("但是，请注意，如果节点B和B1同时发生故障，Redis Cluster将无法继续运行。")]),e._v(" "),s("h4",{attrs:{id:"redis集群一致性保证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis集群一致性保证"}},[e._v("#")]),e._v(" Redis集群一致性保证")]),e._v(" "),s("p",[e._v("Redis 集群不保证强一致性。实际上，这意味着在某些情况下，Redis 集群可能会丢失系统向客户端确认的写入。"),s("br"),e._v("Redis 集群丢失写入的第一个原因是它使用异步复制。这意味着在写入过程中会发生以下情况：")]),e._v(" "),s("ul",[s("li",[e._v("您的客户端写入主 B。")]),e._v(" "),s("li",[e._v("主 B 回复您的客户端是 OK。")]),e._v(" "),s("li",[e._v("主 B 将写入传播到其副本 B1、B2 和 B3。")])]),e._v(" "),s("p",[e._v("正如你所看到的，B 在回复客户端之前不会等待 B1、B2、B3 的确认，因为这对 Redis 来说是一个令人望而却步的延迟惩罚，所以如果你的客户端写了一些东西，B 确认了写入，但在能够将写入发送到其副本之前崩溃了，其中一个副本（没有收到写入）可以提升为 master， 永远失去写入。"),s("br"),e._v("这与大多数配置为每秒刷新一次数据到磁盘的数据库所发生的情况非常相似，因此，由于过去使用不涉及分布式系统的传统数据库系统的经验，您已经能够推理这种情况。同样，可以通过强制数据库在回复客户端之前将数据刷新到磁盘来提高一致性，但这通常会导致性能过低。这相当于 Redis 集群中的同步复制。"),s("br"),e._v("基本上，需要在性能和一致性之间进行权衡。"),s("br"),e._v("Redis 集群支持在绝对需要时通过 WAIT 命令实现同步写入。这使得丢失写入的可能性大大降低。但是，请注意，即使使用同步复制，Redis 集群也不会实现强一致性：在更复杂的故障情况下，始终有可能将无法接收写入的副本选为主副本。"),s("br"),e._v("还有另一种值得注意的情况，即 Redis 集群将丢失写入，这种情况发生在网络分区期间，其中客户端与少数实例（包括至少一个主实例）隔离。"),s("br"),e._v("以我们的 6 节点集群为例，该集群由 A、B、C、A1、B1、C1 组成，具有 3 个主节点和 3 个副本。还有一个客户端，我们称之为 Z1。"),s("br"),e._v("发生分区后，有可能在分区的一侧我们有 A、C、A1、B1、C1，而在另一侧我们有 B 和 Z1。"),s("br"),e._v("Z1 仍然能够写入 B，B 将接受其写入。如果分区在很短的时间内恢复，则群集将正常继续。但是，如果分区持续的时间足够长，以便 B1 在分区的大多数端提升为主服务器，则 Z1 在此期间发送给 B 的写入将丢失。")]),e._v(" "),s("blockquote",[s("p",[e._v("注意：Z1 能够发送到 B 的写入量有一个最大窗口：如果分区的大多数端已经过了足够的时间来选择副本作为主节点，则少数端的每个主节点都将停止接受写入。")])]),e._v(" "),s("p",[e._v("这个时间量是 Redis 集群非常重要的配置指令，称为节点超时。"),s("br"),e._v("节点超时过后，主节点将被视为发生故障，并可由其副本之一替换。同样，在节点超时后，主节点无法感知大多数其他主节点，它将进入错误状态并停止接受写入。")])])}),[],!1,null,null,null);s.default=_.exports}}]);