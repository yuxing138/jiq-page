(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{332:function(s,e,a){"use strict";a.r(e);var r=a(14),t=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" /")]),s._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://redis.io/topics/persistence.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/topics/persistence.html"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://redis.io/docs/management/persistence/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/docs/management/persistence/"),e("OutboundLink")],1)])]),s._v(" "),e("h4",{attrs:{id:"redis持久性-persistence"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis持久性-persistence"}},[s._v("#")]),s._v(" Redis持久性（Persistence）")]),s._v(" "),e("p",[s._v("Redis 如何将数据写入磁盘"),e("br"),s._v("持久性是指将数据写入持久存储，例如固态磁盘 （SSD）。Redis 提供了一系列持久性选项。这些包括：")]),s._v(" "),e("ul",[e("li",[s._v("RDB（Redis Database）：RDB 持久性按指定的时间间隔执行数据集的时间点快照。")]),s._v(" "),e("li",[s._v("AOF（Append Only File）：AOF 持久性记录服务器接收的每个写入操作。然后，可以在服务器启动时再次重播这些操作，从而重建原始数据集。使用与 Redis 协议本身相同的格式记录命令。")]),s._v(" "),e("li",[s._v("No persistence：您可以完全禁用持久性。这有时在缓存时使用。")]),s._v(" "),e("li",[s._v("RDB + AOF：您还可以在同一实例中组合 AOF 和 RDB。")])]),s._v(" "),e("p",[s._v("如果您不想考虑这些不同持久性策略之间的权衡，您可能需要考虑 Redis Enterprise 的持久性选项，这些选项可以使用 UI 进行预配置。"),e("br"),s._v("要详细了解如何评估 Redis 持久性策略，请继续阅读。")]),s._v(" "),e("h4",{attrs:{id:"rdb-优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-优势"}},[s._v("#")]),s._v(" RDB 优势")]),s._v(" "),e("ul",[e("li",[s._v("RDB 是 Redis 数据的非常紧凑的单文件时间点表示形式。RDB 文件非常适合备份。例如，您可能希望在最近 24 小时内每小时存档一次 RDB 文件，并每天保存 RDB 快照 30 天。这使您可以在发生灾难时轻松恢复不同版本的数据集。")]),s._v(" "),e("li",[s._v("RDB 非常适合灾难恢复，它是一个可以传输到远距离数据中心或 Amazon S3（可能已加密）的紧凑文件。")]),s._v(" "),e("li",[s._v("RDB 最大限度地提高了 Redis 性能，因为 Redis 父进程为了持久化而需要做的唯一工作是分叉一个子进程，该子进程将完成所有其他工作。父进程永远不会执行磁盘 I/O 或类似操作。")]),s._v(" "),e("li",[s._v("与 AOF 相比，RDB 允许更快地重启大型数据集。")]),s._v(" "),e("li",[s._v("在副本上，RDB 支持在重新启动和故障转移后进行部分重新同步。")])]),s._v(" "),e("h4",{attrs:{id:"rdb-缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb-缺点"}},[s._v("#")]),s._v(" RDB 缺点")]),s._v(" "),e("ul",[e("li",[s._v("如果您需要在 Redis 停止工作（例如在断电后）将数据丢失的可能性降至最低，则 RDB 并不好。您可以配置不同的保存点来生成 RDB（例如，在对数据集进行至少 5 分钟和 100 次写入后，您可以有多个保存点）。但是，您通常会每五分钟或更长时间创建一个 RDB 快照，因此，如果 Redis 因任何原因在没有正确关闭的情况下停止工作，您应该准备好丢失最近几分钟的数据。")]),s._v(" "),e("li",[s._v("RDB 需要经常 fork（） 才能使用子进程在磁盘上持久化。如果数据集很大，fork（） 可能会很耗时，如果数据集非常大且 CPU 性能不是很好，可能会导致 Redis 停止为客户端提供服务几毫秒甚至一秒钟。AOF 也需要 fork（），但频率较低，您可以调整重写日志的频率，而无需在持久性上进行任何权衡。")])]),s._v(" "),e("h4",{attrs:{id:"aof优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof优势"}},[s._v("#")]),s._v(" AOF优势")]),s._v(" "),e("ul",[e("li",[s._v("使用 AOF Redis 更加持久：您可以有不同的 fsync 策略：完全没有 fsync、每秒 fsync、每次查询的 fsync。使用每秒 fsync 的默认策略，写入性能仍然很好。fsync 是使用后台线程执行的，当没有 fsync 正在进行时，主线程会努力执行写入，因此您只能丢失一秒钟的写入。")]),s._v(" "),e("li",[s._v("AOF 日志是仅追加日志，因此在断电时不会出现寻道或损坏问题。即使日志由于某种原因（磁盘已满或其他原因）以半写命令结尾，redis-check-aof 工具也能够轻松修复它。")]),s._v(" "),e("li",[s._v("Redis 能够在 AOF 变得太大时在后台自动重写它。重写是完全安全的，因为当 Redis 继续追加到旧文件时，会使用创建当前数据集所需的最少操作生成一个全新的文件，一旦第二个文件准备就绪，Redis 就会切换两者并开始追加到新文件。")]),s._v(" "),e("li",[s._v("AOF以易于理解和解析的格式包含所有操作的日志。您甚至可以轻松导出 AOF 文件。例如，即使您不小心使用 FLUSHALL 命令刷新了所有内容，只要在此期间没有重写日志，您仍然可以通过停止服务器、删除最新命令并重新启动 Redis 来保存数据集。")])]),s._v(" "),e("h4",{attrs:{id:"aof的缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof的缺点"}},[s._v("#")]),s._v(" AOF的缺点")]),s._v(" "),e("ul",[e("li",[s._v("AOF 文件通常大于同一数据集的等效 RDB 文件。")]),s._v(" "),e("li",[s._v("AOF 可能比 RDB 慢，具体取决于确切的 fsync 策略。一般来说，将 fsync 设置为每秒一次时，性能仍然非常高，并且在禁用 fsync 的情况下，即使在高负载下，它也应该与 RDB 一样快。尽管如此，RDB 仍然能够提供更多关于最大延迟的保证，即使在巨大的写入负载的情况下也是如此。")])]),s._v(" "),e("p",[s._v("Redis < 7.0")]),s._v(" "),e("ul",[e("li",[s._v("如果在重写期间对数据库进行写入，则 AOF 可能会使用大量内存（这些内存在内存中缓冲，并在最后写入新的 AOF）。")]),s._v(" "),e("li",[s._v("在重写期间到达的所有写入命令都会写入磁盘两次。")]),s._v(" "),e("li",[s._v("Redis 可能会在重写结束时冻结这些写入命令并将其同步到新的 AOF 文件。")])]),s._v(" "),e("h4",{attrs:{id:"好的-那我应该使用什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#好的-那我应该使用什么"}},[s._v("#")]),s._v(" 好的，那我应该使用什么？")]),s._v(" "),e("p",[s._v("一般而言，您应该使用这两种持久性方法，如果您想要与 PostgreSQL 可以为您提供的数据安全性相当。"),e("br"),s._v("如果您非常关心您的数据，但在发生灾难时仍然可以忍受几分钟的数据丢失，您可以简单地单独使用 RDB。"),e("br"),s._v("有许多用户单独使用 AOF，但我们不鼓励这样做，因为不时拥有 RDB 快照对于进行数据库备份、更快的重启以及 AOF 引擎出现错误时是一个好主意。"),e("br"),s._v("以下各节将说明有关这两种持久性模型的更多详细信息。")]),s._v(" "),e("h4",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")]),s._v(" ---")]),s._v(" "),e("h4",{attrs:{id:"快照-rdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快照-rdb"}},[s._v("#")]),s._v(" 快照（RDB）")]),s._v(" "),e("p",[s._v("默认情况下，Redis 将数据集的快照保存在磁盘上名为 dump.rdb 的二进制文件中。您可以将 Redis 配置为在数据集中至少有 M 个更改时每 N 秒保存一次数据集，也可以手动调用 SAVE 或 BGSAVE 命令。"),e("br"),s._v("例如，如果至少更改了 1000 个密钥，则此配置将使 Redis 每 60 秒自动将数据集转储到磁盘：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("save 60 1000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此策略称为快照。")]),s._v(" "),e("h4",{attrs:{id:"rdb运作方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rdb运作方式"}},[s._v("#")]),s._v(" RDB运作方式")]),s._v(" "),e("p",[s._v("每当 Redis 需要将数据集转储到磁盘时，都会发生以下情况：")]),s._v(" "),e("ul",[e("li",[s._v("Redis 分叉。我们现在有一个子进程和一个父进程。")]),s._v(" "),e("li",[s._v("孩子开始将数据集写入临时 RDB 文件。")]),s._v(" "),e("li",[s._v("当子项完成编写新的 RDB 文件时，它将替换旧的 RDB 文件。")])]),s._v(" "),e("p",[s._v("此方法允许 Redis 从写入时复制语义中受益。")]),s._v(" "),e("h4",{attrs:{id:"-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[s._v("#")]),s._v(" ---")]),s._v(" "),e("h4",{attrs:{id:"仅追加文件-aof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仅追加文件-aof"}},[s._v("#")]),s._v(" 仅追加文件（AOF）")]),s._v(" "),e("p",[s._v("快照不是很持久。如果运行 Redis 的计算机停止、电源线故障或实例意外 kill -9 ，则写入 Redis 的最新数据将丢失。虽然这对某些应用程序来说可能没什么大不了的，但有一些用例可以实现完全持久性，在这些情况下，仅使用 Redis 快照并不是一个可行的选择。"),e("br"),s._v("仅追加文件是 Redis 的另一种完全持久化策略。它在 1.1 版中可用。"),e("br"),s._v("您可以在配置文件中打开 AOF：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("appendonly yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("从现在开始，每当 Redis 收到更改数据集的命令时（例如 SET ） 会将其附加到 AOF。当您重新启动 Redis 时，它将重新播放 AOF 以重建状态。"),e("br"),s._v("从 Redis 7.0.0 开始，Redis 使用多部分 AOF 机制。也就是说，原始的单个 AOF 文件被拆分为基本文件（最多一个）和增量文件（可能有多个）。基本文件表示重写 AOF 时存在的数据的初始（RDB 或 AOF 格式）快照。增量文件包含自上次创建基本 AOF 文件以来的增量更改。所有这些文件都放在一个单独的目录中，并由清单文件跟踪。")]),s._v(" "),e("h4",{attrs:{id:"-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[s._v("#")]),s._v(" ---")]),s._v(" "),e("h4",{attrs:{id:"日志重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志重写"}},[s._v("#")]),s._v(" 日志重写")]),s._v(" "),e("p",[s._v("随着写入操作的执行，AOF 变得越来越大。例如，如果将计数器递增 100 次，则最终在数据集中会得到一个包含最终值的键，但在 AOF 中会有 100 个条目。重建当前状态不需要其中 99 个条目。")]),s._v(" "),e("blockquote",[e("p",[s._v("注意：日志重写可以压缩AOF文件。")])]),s._v(" "),e("p",[s._v("重写是完全安全的。当 Redis 继续追加到旧文件时，会使用创建当前数据集所需的最少操作集生成一个全新的文件，一旦第二个文件准备就绪，Redis 就会切换这两个文件并开始追加到新文件。"),e("br"),s._v("因此，Redis 支持一个有趣的功能：它能够在后台重建 AOF，而不会中断对客户端的服务。每当您发出 BGREWRITEAOF 时，Redis 都会编写在内存中重建当前数据集所需的最短命令序列。如果您将 AOF 与 Redis 2.2 一起使用，则需要不时运行 BGREWRITEAOF 。由于 Redis 2.4 能够自动触发日志重写（有关详细信息，请参阅示例配置文件）。"),e("br"),s._v("从 Redis 7.0.0 开始，当计划 AOF 重写时，Redis 父进程会打开一个新的增量 AOF 文件以继续写入。子进程执行重写逻辑并生成新的基本 AOF。Redis 将使用临时清单文件来跟踪新生成的基础文件和增量文件。准备就绪后，Redis 将执行原子替换操作，使此临时清单文件生效。为了避免 AOF 重写屡次失败重试时创建大量增量文件的问题，Redis 引入了 AOF 重写限制机制，以确保失败的 AOF 重写以越来越慢的速度重试。")]),s._v(" "),e("h4",{attrs:{id:"仅追加文件的持久性如何"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仅追加文件的持久性如何"}},[s._v("#")]),s._v(" 仅追加文件的持久性如何？")]),s._v(" "),e("p",[s._v("您可以配置 Redis 在磁盘上 fsync 数据的次数。有三个选项：")]),s._v(" "),e("ul",[e("li",[s._v("appendfsync always ： fsync 每次将新命令附加到 AOF 时。非常非常慢，非常安全。请注意，在执行来自多个客户端或管道的批量命令后，这些命令将附加到 AOF，因此这意味着单次写入和单个 fsync（在发送回复之前）。")]),s._v(" "),e("li",[s._v("appendfsync everysec ： 每秒 fsync 。足够快（因为 2.4 版可能与快照一样快），如果发生灾难，您可能会丢失 1 秒的数据。")]),s._v(" "),e("li",[s._v("appendfsync no ： 永远不要 fsync ，只需将您的数据交到操作系统手中即可。更快、更不安全的方法。通常，Linux 会使用此配置每 30 秒刷新一次数据，但这取决于内核的确切调整。")])]),s._v(" "),e("p",[s._v("建议的（默认）策略是每秒 fsync 。它既快速又相对安全。 always 策略在实践中非常慢，但它支持组提交，因此如果有多个并行写入，Redis 将尝试执行单个 fsync 操作。")]),s._v(" "),e("h4",{attrs:{id:"如果我的-aof-被截断-我该怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果我的-aof-被截断-我该怎么办"}},[s._v("#")]),s._v(" 如果我的 AOF 被截断，我该怎么办？")]),s._v(" "),e("blockquote",[e("p",[s._v("概括：新版本只会丢掉最后一个格式不正确的命令。")])]),s._v(" "),e("p",[s._v("服务器可能在写入 AOF 文件时崩溃，或者存储 AOF 文件的卷在写入时已满。发生这种情况时，AOF 仍包含表示数据集的给定时间点版本的一致数据（使用默认 AOF fsync 策略时，该版本可能已旧至一秒），但 AOF 中的最后一个命令可能会被截断。无论如何，最新的 Redis 主要版本将能够加载 AOF，只需丢弃文件中最后一个格式不正确的命令即可。在这种情况下，服务器将发出如下所示的日志：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* Reading RDB preamble from AOF file...\n* Reading the remaining AOF tail...\n# !!! Warning: short read while loading the AOF file !!!\n# !!! Truncating the AOF at offset 439 !!!\n# AOF loaded anyway because aof-load-truncated is enabled\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("如果需要，您可以更改默认配置以强制 Redis 在这种情况下停止，但默认配置是继续，无论文件中的最后一个命令格式不正确，以保证重新启动后的可用性。"),e("br"),s._v("旧版本的 Redis 可能无法恢复，可能需要执行以下步骤：")]),s._v(" "),e("ul",[e("li",[s._v("制作 AOF 文件的备份副本。")]),s._v(" "),e("li",[s._v("使用 Redis 附带的 redis-check-aof 工具修复原始文件：")])]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("$ redis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aof "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("fix "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("（可选）使用 diff -u 检查两个文件之间的区别。")]),s._v(" "),e("li",[s._v("使用固定文件重新启动服务器。")])]),s._v(" "),e("h4",{attrs:{id:"如果我的aof损坏了-我该怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果我的aof损坏了-我该怎么办"}},[s._v("#")]),s._v(" 如果我的AOF损坏了，我该怎么办？")]),s._v(" "),e("p",[s._v("如果 AOF 文件不仅被截断，而且在中间被无效的字节序列损坏，事情就会更加复杂。Redis 将在启动时抱怨并中止：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* Reading the remaining AOF tail...\n# Bad file format reading the append only file: make a backup of your AOF file, then use ./redis-check-aof --fix <filename>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("最最好的办法是运行 redis-check-aof 实用程序，最初没有 --fix 选项，然后了解问题，跳转到文件中给定的偏移量，看看是否可以手动修复文件： AOF 使用与 Redis 协议相同的格式，并且手动修复非常简单。否则，可以让实用程序为我们修复文件，但在这种情况下，从无效部分到文件末尾的所有AOF部分都可能被丢弃，如果损坏恰好在文件的初始部分，则会导致大量数据丢失。")]),s._v(" "),e("h4",{attrs:{id:"日志重写运作方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志重写运作方式"}},[s._v("#")]),s._v(" 日志重写运作方式")]),s._v(" "),e("p",[s._v("日志重写使用已用于快照的相同写入时复制技巧。这是它的工作原理："),e("br"),s._v("Redis >= 7.0")]),s._v(" "),e("ul",[e("li",[s._v("Redis 分叉，所以现在我们有一个子进程和一个父进程。")]),s._v(" "),e("li",[s._v("子项开始在临时文件中写入新的基本 AOF。")]),s._v(" "),e("li",[s._v("[不同]父级打开一个新的增量 AOF 文件以继续写入更新。如果重写失败，旧的 base 文件和增量文件（如果有的话）加上这个新打开的增量文件代表完整的更新数据集，因此我们是安全的。")]),s._v(" "),e("li",[s._v("当子级完成对基文件的重写后，父级将收到一个信号，并使用新打开的增量文件和子级生成的基本文件来生成临时清单，并保留它。")]),s._v(" "),e("li",[s._v("现在，Redis 对清单文件进行原子交换，以便此 AOF 重写的结果生效。Redis 还会清理旧的基本文件和任何未使用的增量文件。")])]),s._v(" "),e("p",[s._v("Redis < 7.0")]),s._v(" "),e("ul",[e("li",[s._v("Redis 分叉，所以现在我们有一个子进程和一个父进程。")]),s._v(" "),e("li",[s._v("孩子开始在临时文件"),e("code",[s._v("temporary file")]),s._v("中写入新的 AOF。")]),s._v(" "),e("li",[s._v("父级将所有新更改累积在内存缓冲区"),e("code",[s._v("in-memory buffer")]),s._v("中（但同时它将新更改写入旧的仅追加文件中，因此如果重写失败，我们是安全的）。")]),s._v(" "),e("li",[s._v("当子级完成重写文件后，父级将获得一个信号，并在子级生成的文件"),e("code",[s._v("temporary file")]),s._v("末尾附加内存中缓冲区。")]),s._v(" "),e("li",[s._v("现在，Redis 以原子方式将新文件重命名为旧文件，并开始将新数据附加到新文件中。")])]),s._v(" "),e("blockquote",[e("p",[s._v("注意：子进程把当前命令写入一个临时AOF文件，父进程将最新命令累积在内存缓冲区。在子进程完成写入后，父进程把最新命令也追加到这个临时AOF文件中，并将临时AOF文件作为新的AOF文件。（在子进程rewrite过程中，父进程不仅把最新命令累积到内存缓冲区，还会追加到当前AOF文件中，直到子进程rewrite完成。）")])]),s._v(" "),e("h4",{attrs:{id:"aof-和-rdb-持久性之间的交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof-和-rdb-持久性之间的交互"}},[s._v("#")]),s._v(" AOF 和 RDB 持久性之间的交互")]),s._v(" "),e("p",[s._v("Redis >= 2.4 确保避免在 RDB 快照操作已在进行时触发 AOF 重写，或在 AOF 重写过程中允许 BGSAVE 。这样可以防止两个 Redis 后台进程同时执行繁重的磁盘 I/O。"),e("br"),s._v("当快照正在进行中，并且用户使用 BGREWRITEAOF 显式请求日志重写操作时，服务器将回复 OK 状态代码，告知用户已安排操作，并且快照完成后将开始重写。"),e("br"),s._v("在同时启用 AOF 和 RDB 持久化并且 Redis 重新启动的情况下，AOF 文件将用于重建原始数据集，因为它保证是最完整的。")]),s._v(" "),e("blockquote",[e("p",[s._v("注意：AOF文件用于重建原始数据集。")])]),s._v(" "),e("h4",{attrs:{id:"-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[s._v("#")]),s._v(" ---")]),s._v(" "),e("h4",{attrs:{id:"备份-redis-数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份-redis-数据"}},[s._v("#")]),s._v(" 备份 Redis 数据")]),s._v(" "),e("p",[s._v("在开始本节之前，请务必阅读以下句子：确保备份数据库。磁盘损坏，云中的实例消失，等等：没有备份意味着数据消失在 /dev/null 中的巨大风险。"),e("br"),s._v("Redis 对数据备份非常友好，因为您可以在数据库运行时复制 RDB 文件：RDB 一旦生成就永远不会被修改，并且在生成时，它使用一个临时名称，并且只有在新快照完成时才使用 rename（2） 以原子方式重命名到其最终目标。"),e("br"),s._v("这意味着在服务器运行时复制 RDB 文件是完全安全的。这是我们的建议：")]),s._v(" "),e("ul",[e("li",[s._v("在服务器中创建一个 cron 作业，在一个目录中创建 RDB 文件的每小时快照，并在另一个目录中创建每日快照。")]),s._v(" "),e("li",[s._v("每次运行 cron 脚本时，请确保调用 find 命令以确保删除太旧的快照：例如，您可以为最近 48 小时拍摄每小时快照，为一两个月拍摄每日快照。请确保使用日期和时间信息命名快照。")]),s._v(" "),e("li",[s._v("每天至少一次确保将 RDB 快照传输到数据中心外部，或者至少传输到运行 Redis 实例的物理机外部。")])]),s._v(" "),e("h4",{attrs:{id:"备份-aof-持久性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份-aof-持久性"}},[s._v("#")]),s._v(" 备份 AOF 持久性")]),s._v(" "),e("p",[s._v("如果您运行的 Redis 实例仅启用了 AOF 持久性，您仍然可以执行备份。从 Redis 7.0.0 开始，AOF 文件被拆分为多个文件，这些文件位于由 appenddirname 配置确定的单个目录中。在正常操作期间，您需要做的就是复制/tar 此目录中的文件以实现备份。但是，如果在重写期间执行此操作，则最终可能会得到无效的备份。若要解决此问题，必须在备份期间禁用 AOF 重写：")]),s._v(" "),e("ol",[e("li",[s._v("关闭自动重写")])]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("CONFIG SET "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aof"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rewrite"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("percentage "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("请确保在此期间不要手动启动重写（使用 BGREWRITEAOF ）。")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("使用以下命令检查当前是否正在进行重写")])]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("INFO persistence\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("并验证 aof_rewrite_in_progress 为 0。如果为 1，则需要等待重写完成。")]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("现在，您可以安全地复制 appenddirname 目录中的文件。")]),s._v(" "),e("li",[s._v("完成后重新启用重写：")])]),s._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("CONFIG SET "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aof"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rewrite"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("percentage "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prev"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("注意：如果要最大程度地减少禁用 AOF 重写的时间，可以在 appenddirname 中创建指向文件的硬链接（在上面的步骤 3 中），然后在创建硬链接后重新启用重写（步骤 4）。现在，您可以复制/焦油硬链接并在完成后将其删除。之所以有效，是因为 Redis 保证它只附加到此目录中的文件，或者在必要时完全替换它们，因此内容在任何给定时间点都应该保持一致。")])]),s._v(" "),e("blockquote",[e("p",[s._v("注意：如果要处理备份期间重新启动服务器的情况，并确保重新启动后不会自动启动重写，则可以更改上述步骤1，以通过 CONFIG REWRITE 保留更新的配置。只需确保在完成后重新启用自动重写（步骤 4），并使用另一个 CONFIG REWRITE 将其保留。")])]),s._v(" "),e("p",[s._v("在版本 7.0.0 之前，只需复制 aof 文件即可备份 AOF 文件（如备份 RDB 快照）。该文件可能缺少最后一部分，但Redis仍然可以加载它（请参阅前面关于截断AOF文件的部分）。")]),s._v(" "),e("h4",{attrs:{id:"灾难恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#灾难恢复"}},[s._v("#")]),s._v(" 灾难恢复")]),s._v(" "),e("p",[s._v("Redis 上下文中的灾难恢复与备份基本相同，并且能够在许多不同的外部数据中心传输这些备份。这样，即使发生某些灾难性事件，影响 Redis 运行并生成其快照的主要数据中心，数据也能得到保护。"),e("br"),s._v("我们将回顾最有趣的灾难恢复技术，这些技术的成本不会太高。")]),s._v(" "),e("ul",[e("li",[s._v("Amazon S3 和其他类似服务是实施灾难恢复系统的好方法。只需将每日或每小时的 RDB 快照以加密形式传输到 S3 即可。您可以使用 gpg -c （在对称加密模式下）加密数据。确保将密码存储在许多不同的安全位置（例如，将副本提供给组织中最重要的人员）。建议使用多种存储服务，以提高数据安全性。")]),s._v(" "),e("li",[s._v("使用 SCP（SSH 的一部分）将快照传输到远端服务器。这是一条相当简单和安全的路线：在离你很远的地方得到一个小型VPS，在那里安装ssh，并生成一个没有密码的ssh客户端密钥，然后将其添加到你的小型VPS的 authorized_keys 文件中。您已准备好以自动方式传输备份。在两个不同的提供商中至少获得两个 VPS，以获得最佳效果。")])]),s._v(" "),e("p",[s._v("重要的是要明白，如果以正确的方式实施，这个系统很容易失败。至少，如果您使用的是 VPS，请绝对确保在传输完成后，您能够验证文件大小（应与您复制的文件之一匹配）以及可能的 SHA1 摘要。"),e("br"),s._v("如果由于某种原因无法传输新备份，您还需要某种独立的警报系统。")])])}),[],!1,null,null,null);e.default=t.exports}}]);