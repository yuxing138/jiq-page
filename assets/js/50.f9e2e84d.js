(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{333:function(e,s,a){"use strict";a.r(s);var v=a(14),i=Object(v.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" /")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://redis.io/topics/persistence.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/topics/persistence.html"),s("OutboundLink")],1)])]),e._v(" "),s("h4",{attrs:{id:"持久化-persistence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化-persistence"}},[e._v("#")]),e._v(" 持久化（Persistence）")]),e._v(" "),s("p",[e._v("Redis提供了一系列不同的持久性选项：")]),e._v(" "),s("ul",[s("li",[e._v("RDB (Redis Database)：RDB持久性以指定的时间间隔执行数据集的时间点快照。")]),e._v(" "),s("li",[e._v("AOF (Append Only File)：AOF持久性记录服务器接收到的每个写入操作，这些操作将在服务器启动时再次播放，重建原始数据集。命令使用与Redis协议本身相同的格式记录，仅以追加方式记录。Redis能够在日志过大时在后台重写日志。")]),e._v(" "),s("li",[e._v("No persistence：如果您愿意，您可以完全禁用持久性，如果您希望您的数据在服务器运行期间一直存在。")]),e._v(" "),s("li",[e._v("RDB + AOF：可以将AOF和RDB组合在同一个实例中。请注意，在这种情况下，当Redis重新启动时，AOF文件将用于重建原始数据集，因为它保证是最完整的。")])]),e._v(" "),s("p",[e._v("最重要的是要理解RDB和AOF持久性之间的不同权衡。让我们从RDB开始：")]),e._v(" "),s("h4",{attrs:{id:"rdb的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb的优势"}},[e._v("#")]),e._v(" RDB的优势")]),e._v(" "),s("ul",[s("li",[e._v("RDB是Redis数据的一个非常紧凑的单文件时间点表示。RDB文件非常适合备份。例如，您可能希望在最近的24小时内每小时归档一次RDB文件，并在30天内每天保存一个RDB快照。这使您能够在发生灾难时轻松恢复不同版本的数据集。")]),e._v(" "),s("li",[e._v("RDB非常适合灾难恢复，它是一个可以传输到远程数据中心或AmazonS3（可能是加密的）的单个紧凑文件。")]),e._v(" "),s("li",[e._v("RDB最大限度地提高了Redis的性能，因为Redis父进程要想持久化，唯一需要做的工作就是派生一个子进程来完成其余的工作。父实例永远不会执行磁盘I/O或类似操作。")]),e._v(" "),s("li",[e._v("与AOF相比，RDB允许使用大数据集更快地重新启动。")]),e._v(" "),s("li",[e._v("在副本上，RDB支持重新启动和故障切换后的部分重新同步。")])]),e._v(" "),s("h4",{attrs:{id:"rdb的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb的缺点"}},[e._v("#")]),e._v(" RDB的缺点")]),e._v(" "),s("ul",[s("li",[e._v("如果您需要在Redis停止工作（例如停电后）的情况下最大限度地减少数据丢失的机会，那么RDB是不好的。您可以在生成RDB的位置配置不同的存储点（例如，在至少五分钟后，对数据集进行100次写入，但您可以有多个存储点）。然而，您通常每五分钟或更长时间创建一个RDB快照，因此，如果Redis因任何原因在没有正确关闭的情况下停止工作，您应该做好丢失最新几分钟数据的准备。")]),e._v(" "),s("li",[e._v("RDB经常需要分叉（），以便使用子进程在磁盘上持久化。如果数据集很大，Fork（）可能会很耗时，并且可能导致Redis在数据集很大且CPU性能不好的情况下停止为客户端提供服务几毫秒甚至一秒钟。AOF也需要fork（），但您可以调整重写日志的频率，而不需要在耐用性上进行任何权衡。")])]),e._v(" "),s("h4",{attrs:{id:"aof优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof优势"}},[e._v("#")]),e._v(" AOF优势")]),e._v(" "),s("ul",[s("li",[e._v("使用AOF Redis要持久得多：您可以有不同的fsync策略：完全不进行fsync、每秒进行fsync和每次查询进行fsync。在fsync的默认策略下，每秒写入性能仍然很好（fsync是使用后台线程执行的，当没有fsync时，主线程会努力执行写入。）但您只能损失一秒钟的写入。")]),e._v(" "),s("li",[e._v("AOF日志是一个仅追加的日志，因此在停电时不会出现查找或损坏问题。即使由于某种原因（磁盘已满或其他原因），日志以半写命令结束，redis check aof工具也能很容易地修复它。")]),e._v(" "),s("li",[e._v("Redis能够在AOF过大时自动在后台重写AOF。重写是完全安全的，因为当Redis继续追加到旧文件时，会用创建当前数据集所需的最小操作集生成一个全新的文件，一旦第二个文件准备好，Redis就会切换这两个文件并开始追加到新文件。")]),e._v(" "),s("li",[e._v("AOF以易于理解和解析的格式包含一个接一个的所有操作的日志。您甚至可以轻松导出AOF文件。例如，即使您意外地使用FLUSHALL命令刷新了所有内容，只要在此期间没有执行日志重写，您仍然可以通过停止服务器、删除最新命令并重新启动Redis来保存数据集。")])]),e._v(" "),s("h4",{attrs:{id:"aof的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof的缺点"}},[e._v("#")]),e._v(" AOF的缺点")]),e._v(" "),s("ul",[s("li",[e._v("对于同一数据集，AOF文件通常比等效的RDB文件大。")]),e._v(" "),s("li",[e._v("根据具体的fsync策略，AOF可能比RDB慢。一般来说，将fsync设置为每秒一次，性能仍然很高，禁用fsync后，即使在高负载下，它也应该与RDB一样快。尽管如此，即使在巨大的写负载的情况下，RDB也能够提供更多关于最大延迟的保证。")]),e._v(" "),s("li",[e._v("在过去，我们在特定命令中遇到了罕见的错误（例如，有一个涉及阻塞命令，如BRPOPLPUSH），导致生成的AOF在重新加载时无法完全再现相同的数据集。这些错误很少见，我们在测试套件中进行了测试，自动创建随机的复杂数据集，并重新加载它们以检查一切正常。然而，使用RDB持久性几乎不可能出现这种错误。为了更清楚地说明这一点：Redis AOF通过增量更新现有状态来工作，就像My SQL或Mongo DB一样，而RDB快照一次又一次地从头开始创建一切，这在概念上更健壮。然而，1）需要注意的是，每次Redis重写AOF时，都会从数据集中包含的实际数据开始从头开始重新创建，与总是附加的AOF文件（或者重写后读取旧的AOF而不是读取内存中的数据）相比，这使对错误的抵抗力更强。2） 我们从未收到过用户关于在现实世界中检测到的AOF损坏的任何报告。")])]),e._v(" "),s("h4",{attrs:{id:"好的-那我该用什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好的-那我该用什么"}},[e._v("#")]),e._v(" 好的，那我该用什么？")]),e._v(" "),s("p",[e._v("一般的指示是，如果您想要与PostgreSQL所能提供的数据安全程度相当的数据安全性，则应该同时使用这两种持久性方法。"),s("br"),e._v("如果您非常关心您的数据，但在发生灾难时仍能承受几分钟的数据丢失，那么您可以简单地单独使用RDB。"),s("br"),e._v("有很多用户单独使用AOF，但我们不鼓励这样做，因为不时地使用RDB快照是进行数据库备份、更快地重新启动以及在AOF引擎出现错误的情况下的好主意。")]),e._v(" "),s("blockquote",[s("p",[e._v("注意：由于所有这些原因，我们很可能在未来将AOF和RDB统一为一个单一的持久性模型（长期计划）。")])]),e._v(" "),s("p",[e._v("以下部分将详细说明这两个持久性模型。")]),e._v(" "),s("h5",{attrs:{id:"rdb快照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb快照"}},[e._v("#")]),e._v(" RDB快照")]),e._v(" "),s("p",[e._v("默认情况下，Redis将数据集的快照保存在磁盘上一个名为dump.rdb的二进制文件中。如果数据集中至少有M个更改，您可以将Redis配置为每N秒保存一次数据集，也可以手动调用save或BGSAVE命令。"),s("br"),e._v("例如，如果至少更改了1000个密钥，此配置将使Redis每60秒自动将数据集转储到磁盘：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("save 60 1000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这种策略被称为快照snapshotting。"),s("br"),e._v("它是如何工作的"),s("br"),e._v("每当Redis需要将数据集转储到磁盘时，就会发生以下情况：")]),e._v(" "),s("ul",[s("li",[e._v("Redis分叉forks。我们现在有一个子进程和一个父进程。")]),e._v(" "),s("li",[e._v("孩子开始将数据集写入临时RDB文件。")]),e._v(" "),s("li",[e._v("当子级完成了新RDB文件的编写后，它将替换旧的RDB文件。")])]),e._v(" "),s("p",[e._v("这种方法允许Redis从写时复制语义中受益。")]),e._v(" "),s("h5",{attrs:{id:"aof仅追加文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof仅追加文件"}},[e._v("#")]),e._v(" AOF仅追加文件")]),e._v(" "),s("p",[e._v("快照不是很耐用。如果你运行Redis的计算机停止运行，电源线故障，或者你不小心杀死了-9你的实例，那么写在Redis上的最新数据就会丢失。虽然这对某些应用程序来说可能不是什么大不了的事情，但也有完全持久性的用例，在这些情况下Redis不是一个可行的选择。"),s("br"),e._v("仅追加文件是Redis的一种替代、完全持久的策略。它在1.1版中提供。"),s("br"),e._v("您可以在配置文件中打开AOF：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("appendonly yes\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("从现在起，每次Redis收到更改数据集的命令（例如SET）时，都会将其附加到AOF中。当您重新启动Redis时，它将重新播放AOF以重建状态。")]),e._v(" "),s("h4",{attrs:{id:"日志重写-重建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志重写-重建"}},[e._v("#")]),e._v(" 日志重写（重建）")]),e._v(" "),s("p",[e._v("正如您所猜测的，随着写操作的执行，AOF变得越来越大。例如，如果您将计数器递增100次，那么数据集中的单个键将包含最终值，但AOF中有100个条目。重建当前状态不需要其中的99个条目。"),s("br"),e._v("因此Redis支持一个有趣的功能：它能够在后台重建AOF，而不会中断对客户端的服务。每当您发出BGREWRITEOF时，Redis都会写入在内存中重建当前数据集所需的最短命令序列。如果您将AOF与Redis 2.2一起使用，则需要不时运行BGREWRITEAOF。Redis 2.4能够自动触发日志重写（更多信息请参见2.4示例配置文件）。")]),e._v(" "),s("h5",{attrs:{id:"仅aof追加文件的持久性如何"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅aof追加文件的持久性如何"}},[e._v("#")]),e._v(" 仅AOF追加文件的持久性如何？")]),e._v(" "),s("p",[e._v("您可以配置Redis在磁盘上fsync数据的次数。有三种选择：")]),e._v(" "),s("ul",[s("li",[e._v("appendfsync-always：每次将新命令附加到AOF时进行fsync。非常非常慢，非常安全。请注意，在执行来自多个客户端或管道的一批命令后，这些命令将被附加到AOF，因此这意味着一次写入和一次fsync（在发送回复之前）。")]),e._v(" "),s("li",[e._v("appendfsync everysec：fsync每秒钟一次。足够快（在2.4中可能与快照一样快），如果发生灾难，您可能会丢失1秒的数据。")]),e._v(" "),s("li",[e._v("appendfsync no：永远不要进行fsync，只需将数据交给操作系统即可。更快、更不安全的方法。在这种配置下，Linux通常每30秒就会刷新一次数据，但这取决于内核的精确调整。")])]),e._v(" "),s("p",[e._v("建议的（也是默认的）策略是每秒进行一次fsync。它既很快又很安全。在实践中，always策略非常慢，但它支持组提交，因此如果有多个并行写入，Redis将尝试执行单个fsync操作。")]),e._v(" "),s("h5",{attrs:{id:"如果aof被截断-我该怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果aof被截断-我该怎么办"}},[e._v("#")]),e._v(" 如果AOF被截断，我该怎么办？")]),e._v(" "),s("blockquote",[s("p",[e._v("概括：新版本只会丢掉最后一个格式不正确的命令。")])]),e._v(" "),s("p",[e._v("可能是服务器在写入AOF文件时崩溃，或者存储AOF文件的卷在写入时已满。当这种情况发生时，AOF仍然包含表示数据集的给定时间点版本的一致数据（使用默认的AOF fsync策略，该数据集可能会旧到1秒），但AOF中的最后一个命令可能会被截断。Redis的最新主要版本无论如何都可以加载AOF，只需丢弃文件中最后一个格式不正确的命令。在这种情况下，服务器将发出如下日志：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("* Reading RDB preamble from AOF file...\n* Reading the remaining AOF tail...\n# !!! Warning: short read while loading the AOF file !!!\n# !!! Truncating the AOF at offset 439 !!!\n# AOF loaded anyway because aof-load-truncated is enabled\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("如果您愿意，可以更改默认配置以强制Redis在这种情况下停止，但默认配置是继续，无论文件中的最后一个命令格式是否正确，以确保重新启动后的可用性。"),s("br"),e._v("较旧版本的Redis可能无法恢复，可能需要以下步骤：")]),e._v(" "),s("ul",[s("li",[e._v("制作AOF文件的备份副本。")]),e._v(" "),s("li",[e._v("使用redis附带的"),s("code",[e._v("redis-check-aof")]),e._v("工具修复原始文件：$ redis-check-aof --fix")]),e._v(" "),s("li",[e._v("可以选择使用"),s("code",[e._v("diff -u")]),e._v("来检查两个文件之间的区别。")]),e._v(" "),s("li",[e._v("使用固定fixed的文件重新启动服务器。")])]),e._v(" "),s("h5",{attrs:{id:"如果aof被破坏了-我该怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果aof被破坏了-我该怎么办"}},[e._v("#")]),e._v(" 如果AOF被破坏了，我该怎么办？")]),e._v(" "),s("p",[e._v("如果AOF文件不仅被截断，而且被中间的无效字节序列破坏，情况就会更复杂。Redis将在启动时抱怨complain并中止：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("* Reading the remaining AOF tail...\n# Bad file format reading the append only file: make a backup of your AOF file, then use ./redis-check-aof --fix <filename>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("最好的方法是运行"),s("code",[e._v("redis-check-aof")]),e._v("实用程序，最初不使用--fix选项，然后了解问题，在文件中的给定偏移处跳转，看看是否可以手动修复文件：aof使用与redis协议相同的格式，手动修复非常简单。否则，可以让实用程序为我们修复文件，但在这种情况下，从无效部分到文件末尾的所有AOF部分都可能被丢弃，如果损坏发生在文件的初始部分，则会导致大量数据丢失。")]),e._v(" "),s("h5",{attrs:{id:"它是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的"}},[e._v("#")]),e._v(" 它是如何工作的")]),e._v(" "),s("p",[e._v("日志重写使用了与快照已使用的写时复制"),s("code",[e._v("copy-on-write")]),e._v("相同的技巧。它是这样工作的：")]),e._v(" "),s("ul",[s("li",[e._v("Redis分叉forks，所以现在我们有一个子进程和一个父进程。")]),e._v(" "),s("li",[e._v("子级开始在临时文件"),s("code",[e._v("temporary file")]),e._v("中写入新的AOF。")]),e._v(" "),s("li",[e._v("父级将所有新更改累积在内存缓冲区"),s("code",[e._v("in-memory buffer")]),e._v("中（但同时将新更改写入旧的"),s("code",[e._v("append-only file")]),e._v("中，因此如果重写失败，我们是安全的）。")]),e._v(" "),s("li",[e._v("当子级完成对文件的重写时，父级会得到一个信号，并将内存中的缓冲区"),s("code",[e._v("in-memory buffer")]),e._v("附加到子级生成的文件的末尾。")]),e._v(" "),s("li",[e._v("现在Redis将旧文件自动重命名为新文件，并开始将新数据附加到新文件中。")])]),e._v(" "),s("blockquote",[s("p",[e._v("注意：子进程把当前命令写入一个临时AOF文件，父进程将最新命令累积在内存缓冲区。在子进程完成写入后，父进程把最新命令也追加到这个临时AOF文件中，并将临时AOF文件作为新的AOF文件。（在子进程rewrite过程中，父进程不仅把最新命令累积到内存缓冲区，还会追加到当前AOF文件中，直到子进程rewrite完成。）")])]),e._v(" "),s("h4",{attrs:{id:"aof和rdb持久性之间的交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof和rdb持久性之间的交互"}},[e._v("#")]),e._v(" AOF和RDB持久性之间的交互")]),e._v(" "),s("p",[e._v("Redis>=2.4确保避免在RDB快照操作已经在进行时触发AOF重写，或在AOF重写进行时允许BGSAVE。这样可以防止两个Redis后台进程同时进行繁重的磁盘I/O。"),s("br"),e._v("当快照处理正在进行，并且用户使用BGREWRITEAOF明确请求日志重写操作时，服务器将回复一个OK状态代码，告诉用户该操作已排定，并且在快照处理完成后将开始重写。"),s("br"),e._v("在启用AOF和RDB持久性并且Redis重新启动的情况下，AOF文件将用于重建原始数据集，因为它保证是最完整的。")]),e._v(" "),s("h4",{attrs:{id:"备份redis数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份redis数据"}},[e._v("#")]),e._v(" 备份Redis数据")]),e._v(" "),s("p",[e._v("在开始本节之前，请确保阅读以下句子：确保备份数据库。磁盘坏了，云中的实例消失了，等等：没有备份意味着数据消失在/dev/null中的巨大风险。"),s("br"),e._v("Redis对数据备份非常友好，因为您可以在数据库运行时复制RDB文件：一旦生成RDB，它就永远不会被修改，而在生成时，它使用一个临时名称，并仅在新快照完成时使用rename(2) 原子化地重命名到其最终目的地。"),s("br"),e._v("这意味着在服务器运行时复制RDB文件是完全安全的。这就是我们的建议：")]),e._v(" "),s("ul",[s("li",[e._v("在服务器中创建一个cron作业，在一个目录中创建RDB文件的每小时快照，并在不同的目录中创建每日快照。")]),e._v(" "),s("li",[e._v("每次运行cron脚本时，请确保调用find命令以确保删除太旧的快照：例如，您可以拍摄最近48小时的每小时快照，以及一到两个月的每日快照。请确保使用数据和时间信息命名快照。")]),e._v(" "),s("li",[e._v("每天至少一次，确保将RDB快照传输到数据中心之外，或者至少传输到运行Redis实例的物理机器之外。")])]),e._v(" "),s("p",[e._v("如果您运行的Redis实例只启用了AOF持久性，您仍然可以复制AOF以创建备份。该文件可能缺少最后一部分，但Redis仍然可以加载它（请参阅前面关于截断AOF文件的部分）。")]),e._v(" "),s("h4",{attrs:{id:"灾难恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#灾难恢复"}},[e._v("#")]),e._v(" 灾难恢复")]),e._v(" "),s("p",[e._v("Redis环境下的灾难恢复与备份基本相同，而且能够在许多不同的外部数据中心传输这些备份。这样，即使在某些灾难性事件影响Redis运行和生成快照的主数据中心的情况下，数据也能得到保护。"),s("br"),e._v("由于许多Redis用户都处于启动阶段，因此没有足够的钱花，我们将回顾最有趣的灾难恢复技术，这些技术的成本不会太高。")]),e._v(" "),s("ul",[s("li",[e._v("AmazonS3和其他类似的服务是实现灾难恢复系统的好方法。只需将您的每日或每小时RDB快照以加密的形式传输到S3。您可以使用"),s("code",[e._v("gpg -c")]),e._v("（对称加密模式）加密数据。确保将您的密码存储在许多不同的安全位置（例如，将一份副本交给组织中最重要的人员）。建议使用多个存储服务以提高数据安全性。")]),e._v(" "),s("li",[e._v("使用SCP（SSH的一部分）将快照传输到远程服务器。这是一个相当简单和安全的途径：在离你很远的地方获得一个小型VPS，在那里安装ssh，并生成一个不带密码的ssh客户端密钥，然后将其添加到小型VPS的authorized_keys文件中。您已准备好以自动方式传输备份。在两个不同的提供商中获得至少两个VPS以获得最佳结果。")])]),e._v(" "),s("p",[e._v("重要的是要明白，如果不以正确的方式实施，这个系统很容易失败。至少要绝对确保在传输完成后，您能够验证文件大小（应该与您复制的文件相匹配），如果您使用的是VPS，还可能验证SHA1摘要。"),s("br"),e._v("如果由于某种原因新备份的传输不起作用，您还需要某种独立的警报系统。")])])}),[],!1,null,null,null);s.default=i.exports}}]);