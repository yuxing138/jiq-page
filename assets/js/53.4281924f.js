(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{334:function(e,t,a){"use strict";a.r(t);var r=a(14),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" /")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://redis.io/topics/replication.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/topics/replication.html"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://redis.io/docs/management/replication/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/docs/management/replication/"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://jiq-picture.yuxing138.top/6da097b363445bb17e56da8a97885627/1702303200271-3c30d137-fe18-4f45-842c-57e29b5c0374.png#averageHue=%23efeeec&clientId=u2d0d9c47-053d-4&from=paste&height=154&id=u3ed7460e&originHeight=385&originWidth=1134&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=45687&status=done&style=none&taskId=u480715aa-9eb6-4e99-a13f-3749d93fab3&title=&width=453.6",alt:"image.png"}})]),e._v(" "),t("h4",{attrs:{id:"redis复制的工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis复制的工作原理"}},[e._v("#")]),e._v(" Redis复制的工作原理")]),e._v(" "),t("p",[e._v("每个 Redis 主节点都有一个复制 ID：它是一个大的伪随机字符串，用于标记数据集的给定故事。每个主节点还采用一个偏移量，该偏移量会随着要发送到副本的复制流的每个字节而递增，以使用修改数据集的新更改来更新副本的状态。即使实际上没有连接副本，复制偏移量也会递增，因此基本上每个给定的对：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Replication ID, offset\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("标识主数据集的确切版本。"),t("br"),e._v("当副本连接到主副本时，它们使用 PSYNC 命令发送其旧的主副本复制 ID 和它们到目前为止处理的偏移量。这样，主节点可以只发送所需的增量部分。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：复制ID相同时，数据同步只是master内存缓冲区增量同步。")])]),e._v(" "),t("p",[e._v("但是，如果主缓冲区中没有足够的积压工作，或者副本引用的历史记录（复制 ID）不再已知，则会发生完全重新同步：在这种情况下，副本将从头开始获取数据集的完整副本。"),t("br"),e._v("以下是完全同步的更多细节工作方式："),t("br"),e._v("主服务器master 启动后台保存过程以生成 RDB 文件。同时，它开始缓冲从客户端接收的所有新写入命令。后台保存完成后，主服务器master 将数据库文件传输到副本，副本将其保存在磁盘上，然后将其加载到内存中。然后，主节点master 会将所有缓冲的命令发送到副本。这是作为命令流完成的，其格式与 Redis 协议本身相同。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：复制ID不同时，数据同步是RDB传输+master内存缓冲区增量同步。（即使master只使用AOF作为持久化方式。）")])]),e._v(" "),t("p",[e._v("您可以通过telnet自己尝试。在服务器执行某些工作时连接到 Redis 端口，并发出 SYNC 命令。您将看到一个批量传输，然后主服务器收到的每个命令都将在 telnet 会话中重新发出。实际上， SYNC 是一种旧协议，新的 Redis 实例不再使用，但仍然存在以实现向后兼容性：它不允许部分重新同步，因此现在改用 PSYNC 。"),t("br"),e._v("如前所述，当主副本链路由于某种原因关闭时，副本能够自动重新连接。如果主节点收到多个并发副本同步请求，它将执行单个后台保存以处理所有请求。")]),e._v(" "),t("h4",{attrs:{id:"复制-id-说明-replication-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制-id-说明-replication-id"}},[e._v("#")]),e._v(" 复制 ID 说明（Replication ID）")]),e._v(" "),t("p",[e._v("在上一节中，我们说过，如果两个实例具有相同的复制 ID 和复制偏移量，则它们具有完全相同的数据。但是，了解复制 ID 到底是什么，以及为什么实例实际上有两个复制 ID：主 ID 和辅助 ID 非常有用。"),t("br"),e._v("复复制 ID 基本上标记了数据集的给定历史记录。每次实例作为主实例从头开始重新启动，或者将副本提升为主实例时，都会为此实例生成一个新的复制 ID。连接到主节点的副本将在握手后继承其复制 ID。因此，具有相同 ID 的两个实例之所以相关，是因为它们保存相同的数据，但可能在不同的时间。对于给定的历史记录（复制 ID），偏移量可作为了解谁拥有最新数据集的逻辑时间。"),t("br"),e._v("例如，如果两个实例 A 和 B 具有相同的复制 ID，但一个实例的偏移量为 1000，另一个实例的偏移量为 1023，则表示第一个实例缺少应用于数据集的某些命令。这也意味着 A 只需应用几个命令，就可以达到与 B 完全相同的状态。"),t("br"),e._v("Redis 实例之所以有两个复制 ID，是因为副本被提升为主副本。故障转移后，提升的副本仍需要记住其过去的复制 ID，因为此类复制 ID 是以前的主复制 ID 之一。这样，当其他副本将与新主副本同步时，它们将尝试使用旧的主副本复制 ID 执行部分重新同步。这将按预期工作，因为当副本提升为主 ID 时，它会将其辅助 ID 设置为其主 ID，并记住发生此 ID 切换时的偏移量。稍后它将选择一个新的随机复制 ID，因为新的历史记录开始了。在处理连接的新副本时，主副本会将其 ID 和偏移量与当前 ID 和辅助 ID 进行匹配（为安全起见，最多为给定的偏移量）。简而言之，这意味着在故障转移后，连接到新提升的主服务器的副本不必执行完全同步。"),t("br"),e._v("如果您想知道为什么升级为主实例的副本在故障转移后需要更改其复制 ID：由于某些网络分区，旧主节点可能仍作为主节点工作：保留相同的复制 ID 将违反以下事实：任何两个随机实例的相同 ID 和相同偏移量意味着它们具有相同的数据集。")]),e._v(" "),t("h4",{attrs:{id:"redis复制如何处理密钥过期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis复制如何处理密钥过期"}},[e._v("#")]),e._v(" Redis复制如何处理密钥过期")]),e._v(" "),t("p",[e._v("Redis 过期允许密钥具有有限的生存时间 （TTL）。此类功能取决于实例计算时间的能力，但 Redis 副本会正确复制具有过期时间的密钥，即使使用 Lua 脚本更改此类密钥也是如此。"),t("br"),e._v("为了实现这样的功能，Redis 不能依赖主副本具有同步时钟的能力，因为这是一个无法解决的问题，并且会导致竞争条件和数据集发散，因此 Redis 使用三种主要技术来使过期密钥的复制能够正常工作：")]),e._v(" "),t("ul",[t("li",[e._v("副本不会使密钥过期，而是等待主节点使密钥过期。当主节点使密钥过期（或由于 LRU 而将其逐出）时，它会合成一个 DEL 命令，该命令将传输到所有副本。")]),e._v(" "),t("li",[e._v("但是，由于主节点驱动的过期，有时副本可能仍具有逻辑上已过期的内存密钥，因为主节点无法及时提供 DEL 命令。为了解决这个问题，副本使用其逻辑时钟来报告密钥不存在，仅适用于不违反数据集一致性的读取操作（因为来自主服务器的新命令将到达）。这样，副本可以避免报告逻辑上过期的密钥，这些密钥仍然存在。实际上，使用副本进行缩放的 HTML 片段缓存将避免返回已早于所需生存时间的项目。")]),e._v(" "),t("li",[e._v("在 Lua 脚本执行期间，不会执行任何密钥过期。当 Lua 脚本运行时，从概念上讲，主脚本中的时间是冻结的，因此给定的键在脚本运行的所有时间都存在或不存在。这样可以防止密钥在脚本中途过期，并且需要以保证在数据集中具有相同效果的方式将相同的脚本发送到副本。")])]),e._v(" "),t("p",[e._v("一旦副本被提升为主节点，它将开始独立地使密钥过期，并且不需要其旧主节点的任何帮助。")]),e._v(" "),t("h4",{attrs:{id:"重新启动和故障转移后的部分同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新启动和故障转移后的部分同步"}},[e._v("#")]),e._v(" 重新启动和故障转移后的部分同步")]),e._v(" "),t("p",[e._v("从 Redis 4.0 开始，当实例在故障转移后提升为主实例时，它仍然能够与旧主实例的副本执行部分重新同步。为此，副本会记住其前主副本的旧复制 ID 和偏移量，因此可以向连接副本提供部分积压工作，即使它们要求提供旧的复制 ID。"),t("br"),e._v("但是，升级副本的新复制 ID 将有所不同，因为它构成了不同的数据集历史记录。例如，主服务器可以返回可用，并且可以在一段时间内继续接受写入，因此在提升的副本中使用相同的复制 ID 将违反复制 ID 和偏移量对仅标识单个数据集的规则。"),t("br"),e._v("此外，副本 - 当轻轻关闭电源并重新启动时 - 能够在 RDB 文件中存储与其主节点重新同步所需的信息。这在升级时很有用。如果需要，最好使用 SHUTDOWN 命令对副本执行 save & quit 操作。"),t("br"),e._v("无法部分同步通过 AOF 文件重新启动的复制副本。但是，在关闭实例之前，实例可能会转换为 RDB 持久性，然后可以重新启动，最后可以再次启用 AOF。")])])}),[],!1,null,null,null);t.default=s.exports}}]);