(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{308:function(s,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" /")]),s._v(" "),t("h4",{attrs:{id:"索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[s._v("#")]),s._v(" 索引")]),s._v(" "),t("p",[s._v("索引的负载均衡"),t("br"),s._v("索引的原子性"),t("br"),s._v("索引的一致性"),t("br"),s._v("索引的实时性"),t("br"),s._v("索引的持久性")]),s._v(" "),t("h4",{attrs:{id:"路由-routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由-routing"}},[s._v("#")]),s._v(" 路由（Routing）")]),s._v(" "),t("h5",{attrs:{id:"老版本的路由算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老版本的路由算法"}},[s._v("#")]),s._v(" 老版本的路由算法")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("shard_num = hash(_routing) % num_primary_shards\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"新版本的路由算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版本的路由算法"}},[s._v("#")]),s._v(" 新版本的路由算法")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("routing_factor = num_routing_shards / num_primary_shards\nshard_num = (hash(_routing) % num_routing_shards) / routing_factor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：新版本路由算法类似一致性哈希算法，"),t("code",[s._v("哈希取模数")]),s._v("从"),t("code",[s._v("真实分片数量")]),s._v("调整为"),t("code",[s._v("虚拟分片数量")]),s._v("，再通过"),t("code",[s._v("映射关系routing_factor")]),s._v("分配到真实分片。")])]),s._v(" "),t("h4",{attrs:{id:"乐观并发控制-optimistic-concurrency-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乐观并发控制-optimistic-concurrency-control"}},[s._v("#")]),s._v(" 乐观并发控制（Optimistic concurrency control）")]),s._v(" "),t("p",[s._v("Elasticsearch是分布式的。创建、更新或删除文档时，必须将文档的新版本复制到群集中的其他节点。Elasticsearch也是异步和并发的，这意味着这些复制请求是并行发送的，可能会按顺序到达目的地。Elasticsearch需要一种方法来确保文档的旧版本永远不会覆盖新版本。"),t("br"),s._v("为了确保文档的旧版本不会覆盖新版本，对文档执行的每个操作都由协调更改的主碎片分配一个序列号。序列号随着每次操作而增加，因此保证较新的操作具有比较旧的操作更高的序列号。然后，Elasticsearch可以使用操作的序列号来确保较新的文档版本永远不会被分配了较小序列号的更改所覆盖。"),t("br"),s._v("_seq_no：全局序列号"),t("br"),s._v("_primary_term：主任期。每当Primary Shard发生重新分配时，比如重启、Primary选举等，_primary_term会递增1。")]),s._v(" "),t("h5",{attrs:{id:"put一个文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#put一个文档"}},[s._v("#")]),s._v(" PUT一个文档")]),s._v(" "),t("p",[s._v("例如，以下索引命令将创建一个文档，并为其分配一个初始序列号和主要术语：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("PUT products/_doc/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1567")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r2d2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A resourceful astromech droid"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n#您可以在响应的字段中看到分配的序列号_seq_no和主要术语_primary_term：\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_shards"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"failed"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"successful"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_index"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"products"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_doc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1567"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_seq_no"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("362")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_primary_term"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h5",{attrs:{id:"get一个文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get一个文档"}},[s._v("#")]),s._v(" GET一个文档")]),s._v(" "),t("p",[s._v("Elasticsearch跟踪上次操作的序列号和主项，以更改它存储的每个文档。在GET API响应的字段中返回序列号_seq_no和主要术语_primary_term：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("GET products/_doc/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1567")]),s._v("\n\n#返回\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_index"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"products"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_doc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1567"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_seq_no"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("362")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_primary_term"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"found"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_source"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r2d2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A resourceful astromech droid"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h5",{attrs:{id:"搜索一个索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索一个索引"}},[s._v("#")]),s._v(" 搜索一个索引")]),s._v(" "),t("p",[s._v("在Search API响应的字段中返回序列号_seq_no和主要术语_primary_term：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("GET products/_search\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"query"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"match"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nGET products/_search\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"seq_no_primary_term"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在Search API响应的字段中返回序列号_seq_no和主要术语_primary_term")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"query"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"match"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n#返回\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"took"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timed_out"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_shards"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"successful"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"skipped"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"failed"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hits"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"relation"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eq"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_score"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2876821")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hits"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_index"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"products"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_doc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1567"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_seq_no"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_primary_term"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_score"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2876821")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_source"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r2d2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A resourceful astromech droid"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])]),t("h5",{attrs:{id:"乐观锁put"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁put"}},[s._v("#")]),s._v(" 乐观锁PUT")]),s._v(" "),t("p",[s._v("通过记下返回的序列号和主要术语，您可以确保只有在检索后没有对文档进行其他更改的情况下才更改文档。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("PUT products/_doc/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1567")]),s._v("?if_seq_no="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("362")]),s._v("&if_primary_term="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"product"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r2d2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"details"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A resourceful astromech droid"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tags"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"droid"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"写入一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写入一致性"}},[s._v("#")]),s._v(" 写入一致性")]),s._v(" "),t("h5",{attrs:{id:"活动分片-active-shards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#活动分片-active-shards"}},[s._v("#")]),s._v(" 活动分片（Active shards）")]),s._v(" "),t("p",[s._v("为了提高写入系统的弹性，可以将索引操作配置为在继续操作之前等待一定数量的活动碎片副本。如果所需数量的活动碎片副本不可用，则写入操作必须等待并重试，直到所需的碎片副本启动或发生超时。默认情况下，写入操作只等待"),t("code",[s._v("wait for")]),s._v("主碎片处于活动状态后再继续（即wait_for_active_shards=1）。可以通过设置index.write.wait_for_active_shards在索引设置中动态覆盖此默认值。若要更改每次操作的此行为，可以使用wait_for_active_shards请求参数。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：默认只要主分片写入完成，不需要全部分片都写入完成，则表示索引写入完成。")])]),s._v(" "),t("h4",{attrs:{id:"刷新-refresh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷新-refresh"}},[s._v("#")]),s._v(" 刷新（Refresh）")]),s._v(" "),t("h5",{attrs:{id:"近实时搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#近实时搜索"}},[s._v("#")]),s._v(" 近实时搜索")]),s._v(" "),t("p",[s._v("Lucene引入了逐段搜索的概念。段类似于反向索引，但Lucene中的index一词的意思是“段的集合加上一个提交点”。提交后，将一个新的段添加到提交点，并清除缓冲区。"),t("br"),s._v("位于Elasticsearch和磁盘之间的是文件系统缓存。内存中索引缓冲区 in-memory indexing buffer （图4）中的文档被写入一个新的段 segment （图5）。新段首先写入文件系统缓存written to the filesystem cache（这很便宜），然后才刷新到磁盘flushed to disk（这很昂贵）。然而，文件在缓存中之后，可以像其他任何文件一样打开和读取该文件。"),t("br"),s._v("图4。内存缓冲区中有新文档的Lucene索引"),t("br"),s._v("图5。缓冲区内容被写入一个段，该段是可搜索的，但尚未提交"),t("br"),t("img",{attrs:{src:"https://jiq-picture.yuxing138.top/5163e38f8771e972595e882c9dfedcb6/1701621176135-c17b2288-de72-4472-a8c0-8542b3c1e7aa.png#averageHue=%23eff4ea&clientId=u25977505-2cb3-4&from=paste&height=474&id=ufa63291c&originHeight=1184&originWidth=2573&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=300346&status=done&style=none&taskId=u4a520e92-af73-4720-87e3-2d1f6bbcf58&title=&width=1029.2",alt:"image.png"}}),t("br"),s._v("Lucene允许编写和打开新的分段，使它们所包含的文档对搜索可见而不执行完全提交。这是一个比提交到磁盘轻得多的过程，而且可以频繁执行而不会降低性能。"),t("br"),s._v("在Elasticsearch中，这个编写和打开新片段的过程被称为刷新refresh。刷新使自上次刷新以来对索引执行的所有操作都可用于搜索。"),t("br"),s._v("默认情况下，Elasticsearch每秒定期刷新索引，但仅对在过去30秒内in the last 30 seconds收到一个或多个搜索请求的索引进行刷新。这就是为什么我们说Elasticsearch具有近乎实时的搜索功能：文档更改不会立即显示在搜索中。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：\n1、刷新"),t("code",[s._v("refresh")]),s._v("是指把内存缓存区"),t("code",[s._v("memory-buffer")]),s._v("中的索引写入到文件系统缓存"),t("code",[s._v("filesystem-cache")]),s._v("的过程。（同时打开新的分页）\n2、默认刷新间隔是1秒，且只刷新最后30秒的请求。")])]),s._v(" "),t("h5",{attrs:{id:"refresh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refresh"}},[s._v("#")]),s._v(" ?refresh")]),s._v(" "),t("p",[s._v("Empty string or true：操作发生后立即刷新相关的主碎片和副本碎片（而不是整个索引），以便更新后的文档立即出现在搜索结果中。"),t("br"),s._v("wait_for：这并不强制立即刷新，而是等待刷新发生。Elasticsearch会自动刷新每个index.refresh_interval（默认为一秒）。"),t("br"),s._v("false：默认值。")]),s._v(" "),t("h4",{attrs:{id:"事务日志-translog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务日志-translog"}},[s._v("#")]),s._v(" 事务日志（Translog）")]),s._v(" "),t("p",[s._v("对Lucene的更改仅在Lucene提交期间持久化到磁盘，这是一个相对昂贵的操作，因此不能在每次索引或删除操作之后执行。在进程退出或硬件故障的情况下，Lucene将从索引中删除在一次提交之后和另一次提交之前发生的更改。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：在一次Lucene提交之后和另一次Lucene提交之前。")])]),s._v(" "),t("p",[s._v("Lucene提交的成本太高，无法对每个单独的更改执行，因此每个碎片副本也会将操作写入其事务日志（translog）中。所有索引和删除操作都在内部Lucene索引处理后但在确认acknowledged之前写入translog。在崩溃的情况下，当碎片恢复时，会从translog中恢复最近已确认acknowledged但尚未包含在上次Lucene提交中的操作。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：在确认acknowledged之前写入translog。")])]),s._v(" "),t("p",[s._v("Elasticsearch刷新"),t("code",[s._v("flush")]),s._v("是执行Lucene提交并开始新的translog生成的过程。刷新"),t("code",[s._v("Flushes")]),s._v("是在后台自动执行的，以确保translog不会增长得太大，这将使重放其操作在恢复过程中花费相当长的时间。手动执行冲洗"),t("code",[s._v("flush")]),s._v("的能力也通过API公开，尽管这很少需要。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：刷新"),t("code",[s._v("Flushes")]),s._v("是在后台（操作系统）自动执行的。")])]),s._v(" "),t("h5",{attrs:{id:"持久性-durability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久性-durability"}},[s._v("#")]),s._v(" 持久性（durability）")]),s._v(" "),t("p",[s._v("只有当translog被fsynced并提交时，translog中的数据才会持久化到磁盘。如果发生硬件故障、操作系统崩溃、JVM崩溃或碎片故障，自上次translog提交以来写入的任何数据都将丢失。"),t("br"),s._v("默认情况下，index.translog.durability设置为request，这意味着Elasticsearch只有在主副本primary和每个分配的副本allocated上成功同步fsync并提交translog后，才会向客户端报告索引、删除、更新或批量请求的成功。"),t("br"),s._v("如果将index.translog.durability设置为async，则Elasticsearch fsyncs仅在每个index.translog.sync_interval提交translog，这意味着在节点恢复时，崩溃前执行的任何操作都可能丢失。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：默认只有在主副本primary和每个分配的副本allocated上成功同步fsync并提交translog后，才会向客户端报告写请求成功。")])]),s._v(" "),t("h5",{attrs:{id:"时间间隔-sync-interval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间间隔-sync-interval"}},[s._v("#")]),s._v(" 时间间隔（sync_interval）")]),s._v(" "),t("p",[s._v("不管写操作如何，将事务日志translog同步fsync到磁盘并提交的频率。默认为5s。不允许小于100ms。")]),s._v(" "),t("h5",{attrs:{id:"刷新阈值-flush-threshold-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷新阈值-flush-threshold-size"}},[s._v("#")]),s._v(" 刷新阈值（flush_threshold_size）")]),s._v(" "),t("p",[s._v("translog存储所有尚未在Lucene中安全持久化的操作。此设置控制这些操作的最大总大小，以防止恢复花费太长时间。一旦达到最大大小，就会进行刷新flush，生成一个新的Lucene提交点。默认值为512mb。")])])}),[],!1,null,null,null);t.default=n.exports}}]);