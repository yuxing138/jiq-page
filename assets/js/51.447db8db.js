(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{332:function(e,t,a){"use strict";a.r(t);var s=a(14),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" /")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://jiq-picture.yuxing138.top/6da097b363445bb17e56da8a97885627/1702303200271-3c30d137-fe18-4f45-842c-57e29b5c0374.png#averageHue=%23efeeec&clientId=u2d0d9c47-053d-4&from=paste&height=154&id=u3ed7460e&originHeight=385&originWidth=1134&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=45687&status=done&style=none&taskId=u480715aa-9eb6-4e99-a13f-3749d93fab3&title=&width=453.6",alt:"image.png"}})]),e._v(" "),t("h4",{attrs:{id:"redis复制的工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis复制的工作原理"}},[e._v("#")]),e._v(" Redis复制的工作原理")]),e._v(" "),t("p",[e._v("每个Redis主机都有一个复制ID：它是一个大的伪随机字符串，标记数据集的给定故事story。每个主控器还具有一个偏移量，该偏移量随着复制流的每个字节而增加，该复制流是为发送到副本而产生的，以便使用修改数据集的新更改来更新副本的状态。即使没有实际连接复制副本，复制偏移量也会增加，因此基本上每对给定的：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Replication ID, offset\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("标识主数据集的确切版本。"),t("br"),e._v("当复制副本连接到主副本时，它们使用PSYNC命令发送其旧的主副本ID和迄今为止处理的偏移量。通过这种方式，主机可以只发送所需的增量部分。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：复制ID相同时，数据同步只是master内存缓冲区增量同步。")])]),e._v(" "),t("p",[e._v("但是，如果主缓冲区中没有足够的囤积，或者如果复制副本引用的历史记录（复制ID）不再为人所知，则会发生完全重新同步：在这种情况下，复制副本将从头开始获得数据集的完整副本。以下是完整同步的工作方式，更详细："),t("br"),e._v("主机master启动后台保存过程，以便生成RDB文件。同时，它开始缓冲从客户端接收的所有新写入命令。后台保存完成后，主机master将数据库文件传输到复制副本，复制副本将其保存在磁盘上，然后将其加载到内存中。然后，主机将所有缓冲的命令发送到复制副本。这是作为一个命令流来完成的，并且采用与Redis协议本身相同的格式。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：复制ID不同时，数据同步是RDB传输+master内存缓冲区增量同步。（即使master只使用AOF作为持久化方式。）")])]),e._v(" "),t("p",[e._v("您可以通过telnet自己尝试。在服务器执行某些工作时连接到Redis端口，然后发出SYNC命令。您将看到批量传输，然后主机接收到的每个命令都将在telnet会话中重新发出。事实上，SYNC是一种旧协议，新的Redis实例不再使用它，但为了向后兼容，它仍然存在：它不允许部分重新同步，所以现在使用PSYNC。"),t("br"),e._v("如前所述，当主副本链路因某种原因断开时，副本能够自动重新连接。如果主服务器接收到多个并发的副本同步请求，它会执行一次后台保存，以便为所有副本提供服务。")]),e._v(" "),t("h4",{attrs:{id:"复制id-replication-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制id-replication-id"}},[e._v("#")]),e._v(" 复制ID（Replication ID）")]),e._v(" "),t("p",[e._v("在上一节中，我们说过，如果两个实例具有相同的复制ID和复制偏移量，则它们具有完全相同的数据。但是，了解复制ID的确切含义，以及为什么实例实际上有两个复制ID（主ID和辅助ID）是很有用的。"),t("br"),e._v("复制ID基本上标记数据集的给定历史。每次实例作为主实例从头开始重新启动，或者复制副本升级为主实例时，都会为此实例生成一个新的复制ID。连接到主机的复制副本将在握手后继承其复制ID。因此，具有相同ID的两个实例之所以相关，是因为它们持有相同的数据，但可能在不同的时间。对于持有最新数据集的给定历史记录（复制ID）来说，偏移量是一个需要理解的逻辑时间。"),t("br"),e._v("例如，如果两个实例A和B具有相同的复制ID，但一个具有偏移量1000，另一个偏移量1023，则意味着第一个实例缺少应用于数据集的某些命令。这也意味着，A只需应用几个命令，就可以达到与B完全相同的状态。"),t("br"),e._v("Redis实例之所以有两个复制ID，是因为复制副本被提升为主副本。故障切换后，升级的复制副本需要仍然记住其过去的复制ID，因为这样的复制ID是以前的主复制ID。这样，当其他复制副本将与新的主复制副本同步时，它们将尝试使用旧的主复制ID执行部分重新同步。这将按预期工作，因为当复制副本升级为主复制副本时，它会将其辅助ID设置为主ID，记住发生此ID切换时的偏移量。稍后它将选择一个新的随机复制ID，因为新的历史记录将开始。在处理连接的新复制副本时，主复制副本的ID和偏移量将与当前ID和辅助ID相匹配（为了安全起见，最多为给定的偏移量）。简而言之，这意味着在故障切换后，连接到新升级的主机的副本不必执行完全同步。"),t("br"),e._v("如果您想知道为什么升级为主机的复制副本在故障切换后需要更改其复制ID：可能是由于某些网络分区的原因，旧主机仍作为主机工作：保留相同的复制ID将违反以下事实：任意两个随机实例的相同ID和相同偏移量意味着它们具有相同的数据集。")]),e._v(" "),t("h4",{attrs:{id:"redis复制如何处理密钥过期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis复制如何处理密钥过期"}},[e._v("#")]),e._v(" Redis复制如何处理密钥过期")]),e._v(" "),t("p",[e._v("Redis过期允许密钥具有有限的生存时间（TTL）。这样的功能取决于实例计数时间的能力，然而Redis复制副本可以正确地复制过期的密钥，即使这些密钥是使用Lua脚本更改的。"),t("br"),e._v("为了实现这样的功能，Redis不能依赖主密钥和副本具有同步时钟的能力，因为这是一个无法解决的问题，会导致竞争条件和数据集的分歧，因此Redis使用三种主要技术来使过期密钥的复制能够工作：")]),e._v(" "),t("ul",[t("li",[e._v("副本不会使密钥过期，而是等待主密钥过期。当主控器使密钥过期（或由于LRU而将其逐出）时，它会合成一个DEL命令，该命令被发送到所有副本。")]),e._v(" "),t("li",[e._v("然而，由于主机驱动的过期，有时副本的内存密钥可能在逻辑上已经过期，因为主机无法及时提供DEL命令。为了解决此问题，复制副本使用其逻辑时钟来报告密钥不存在，仅用于不违反数据集一致性的读取操作（因为来自主机的新命令将到达）。通过这种方式，复制副本可以避免报告逻辑上过期的密钥仍然存在。实际上，使用副本进行扩展的HTML片段缓存将避免返回已经超过所需生存时间的项目。")]),e._v(" "),t("li",[e._v("在执行Lua脚本期间，不会执行密钥过期。当Lua脚本运行时，从概念上讲，master中的时间被冻结，因此给定的密钥在脚本运行的所有时间内要么存在，要么不存在。这可以防止密钥在脚本中间过期，并且是以保证在数据集中具有相同效果的方式将同一脚本发送到副本所必需的。")])]),e._v(" "),t("p",[e._v("复制副本升级为主副本后，它将开始独立地使密钥过期，并且不需要旧主副本的任何帮助。")]),e._v(" "),t("h4",{attrs:{id:"重新启动和故障切换后的部分重新同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新启动和故障切换后的部分重新同步"}},[e._v("#")]),e._v(" 重新启动和故障切换后的部分重新同步")]),e._v(" "),t("p",[e._v("从Redis 4.0开始，当一个实例在故障转移后被提升为主实例时，它仍然能够与旧主实例的副本执行部分重新同步。为此，副本会记住其前主副本的旧复制ID和偏移量，因此可以向连接副本提供部分积压，即使它们请求旧复制ID。"),t("br"),e._v("但是，升级副本的新复制ID将会不同，因为它构成了数据集的不同历史。例如，主服务器可以返回available，并且可以在一段时间内继续接受写入，因此在提升的副本中使用相同的复制ID将违反复制ID和偏移量对仅标识单个数据集的规则。"),t("br"),e._v("此外，副本服务器在温和关机并重启后，能够在RDB文件中存储与主服务器重新同步所需的信息。这在升级时很有用。需要时，最好使用SHUTDOWN命令在复制副本上执行保存并退出操作。"),t("br"),e._v("无法部分重新同步通过AOF文件重启的复制副本。但是，在关闭实例之前，可以将其转换为RDB持久性，然后可以重新启动，最后可以再次启用AOF。")])])}),[],!1,null,null,null);t.default=i.exports}}]);