(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{307:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" /")]),s._v(" "),n("h4",{attrs:{id:"index-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index-apis"}},[s._v("#")]),s._v(" Index APIs")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cat indices API\n返回有关群集中索引的高级信息，包括数据流的备份索引。\n\nRequest\nGET /_cat/indices/<target>\nGET /_cat/indices\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Index APIs\n索引API用于管理各个索引、索引设置、别名、映射和索引模板。\n\nIndex management:\nCreate index //增 PUT /<index>\nDelete index //删 DELETE /<index>\nGet index    //查 GET /<target>\nIndex exists\nClose index\nOpen index\nShrink index\nSplit index\nClone index\nRollover index\nFreeze index\nUnfreeze index\nResolve index\n\nMapping management:\nPut mapping\nGet mapping\nGet field mapping\nType exists\n\nAlias management:\nAdd index alias\nDelete index alias\nGet index alias\nIndex alias exists\nUpdate index alias\n\nIndex settings:\nUpdate index settings\nGet index settings\nAnalyze\n\nIndex templates:\n索引模板会自动将设置、映射和别名应用于新索引。它们最常用于为时间序列数据配置滚动索引，以确保每个新索引与前一个索引具有相同的配置。与数据流相关联的索引模板配置其备份索引。有关详细信息，请参见索引模板。\n\nPut index template\nGet index template\nDelete index template\nPut component template\nGet component template\nDelete component template\nSimulate index\nSimulate template\n\nMonitoring:\nIndex stats\nIndex segments\nIndex recovery\nIndex shard stores\n\nStatus management:\nClear cache\nRefresh\nFlush\nSynced flush\nForce merge\n\nDangling indices:\nList dangling indices\nImport dangling index\nDelete dangling index\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br")])]),n("h4",{attrs:{id:"document-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document-apis"}},[s._v("#")]),s._v(" Document APIs")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("Document APIs\n本节首先简要介绍Elasticsearch的data replication model数据复制模型，然后详细描述以下CRUD API：\n\nSingle document APIs\nIndex "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增 PUT /<target>/_doc/<_id>")]),s._v("\nIndex "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增 POST /<target>/_doc/")]),s._v("\nIndex "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增 PUT /<target>/_create/<_id>")]),s._v("\nIndex "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增 POST /<target>/_create/<_id>")]),s._v("\nGet   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查 GET <index>/_doc/<_id>")]),s._v("\nGet   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查 HEAD <index>/_doc/<_id>")]),s._v("\nGet   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查 GET <index>/_source/<_id>")]),s._v("\nGet   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查 HEAD <index>/_source/<_id>")]),s._v("\nDelete"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删 DELETE /<index>/_doc/<_id>")]),s._v("\nUpdate"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//改 POST /<index>/_update/<_id>")]),s._v("\n\nMulti-document APIs\nMulti get\nBulk\nDelete by query\nUpdate by query\nReindex\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h4",{attrs:{id:"field-data-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#field-data-types"}},[s._v("#")]),s._v(" Field data types")]),s._v(" "),n("h5",{attrs:{id:"keyword-field-type-不使用分词器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword-field-type-不使用分词器"}},[s._v("#")]),s._v(" Keyword field type（不使用分词器）")]),s._v(" "),n("p",[s._v("如果出现以下情况，请考虑将数字标识符映射为关键字："),n("br"),s._v("您不打算使用范围查询来搜索标识符数据。"),n("br"),s._v("快速检索很重要。对关键字字段的术语查询搜索通常比对数字字段的术语搜索快。")]),s._v(" "),n("h5",{attrs:{id:"text-field-type-使用分词器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#text-field-type-使用分词器"}},[s._v("#")]),s._v(" Text field type（使用分词器）")]),s._v(" "),n("p",[s._v("用于索引全文值的字段，例如电子邮件正文或产品描述。对这些字段进行分析，也就是说，在索引之前，它们通过分析器将字符串转换为单个术语的列表。分析过程允许Elasticsearch在每个全文字段中搜索单个单词。文本字段不用于排序，也很少用于聚合（尽管重要的文本聚合是一个显著的例外）。"),n("br"),s._v("如果您需要对电子邮件地址、主机名、状态代码或标记等结构化内容进行索引，则可能应该使用关键字字段。")]),s._v(" "),n("h5",{attrs:{id:"field-data-types-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#field-data-types-2"}},[s._v("#")]),s._v(" Field data types")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("Field data types 字段数据类型\n每个字段都有一个字段数据类型或字段类型。此类型指示字段包含的数据类型，如字符串或布尔值，以及其预期用途。例如，可以将字符串索引到文本字段和关键字字段。但是，将分析文本字段值以进行全文搜索，而保留关键字字符串以进行筛选和排序。\n\nCommon types 常见类型\nbinary\nboolean\nKeywords  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关键字")]),s._v("\nNumbers\nDates\nalias\n\nObjects and relational types 对象和关系类型\nobject\nflattened\nnested\njoin\n\nStructured data types 结构化数据类型\nRange\nip\nversion\nmurmur3\n\nAggregate data types 聚合数据类型\naggregate_metric_double\nhistogram\n\nText search types 文本搜索类型\ntext           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//文本")]),s._v("\nannotated-text\ncompletion\nsearch_as_you_type\ntoken_count\n\nDocument ranking types 文档排名类型\ndense_vector\nsparse_vector\nrank_feature\nrank_features\n\nSpatial data types 空间数据类型\ngeo_point\ngeo_shape\npoint\nshape\n\nOther types 其他类型\npercolator\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("h4",{attrs:{id:"mapping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[s._v("#")]),s._v(" Mapping")]),s._v(" "),n("h5",{attrs:{id:"mapping-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mapping-parameters"}},[s._v("#")]),s._v(" Mapping parameters")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Mapping parameters\n以下页面提供了字段映射所使用的各种映射参数的详细说明：\n以下映射参数对于某些或所有字段数据类型是通用的：\n\nanalyzer //分析器\nboost    //相关度评分权重\ncoerce\ncopy_to\ndoc_values\ndynamic\neager_global_ordinals\nenabled\nfielddata\nfields\nformat\nignore_above\nignore_malformed\nindex_options\nindex_phrases\nindex_prefixes\nindex\nmeta\nnormalizer\nnorms\nnull_value\nposition_increment_gap\nproperties\nsearch_analyzer\nsimilarity\nstore\nterm_vector\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h5",{attrs:{id:"手动生成mapping-create-index-mappings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动生成mapping-create-index-mappings"}},[s._v("#")]),s._v(" 手动生成mapping（create index.mappings）")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("Explicit mapping 显示映射\n您对数据的了解比Elasticsearch所能猜测的要多，因此，虽然动态映射对入门很有用，但在某个时候，您可能需要指定自己的显式映射。\n在创建索引并将字段添加到现有索引时，可以创建字段映射。\n使用显式映射创建索引\n您可以使用创建索引API来创建具有显式映射的新索引。\n\nPUT /my-index"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("-000001")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mappings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"integer"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("     \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h5",{attrs:{id:"自动生成mapping-create-document"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动生成mapping-create-document"}},[s._v("#")]),s._v(" 自动生成mapping（create document）")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("Dynamic mapping 动态映射\nElasticsearch最重要的功能之一是，它试图避开你的方式，让你尽快开始探索你的数据。要为文档编制索引，不必首先创建索引、定义映射类型和定义字段 — 您只需为文档编制索引，索引、类型和字段就会自动活跃起来\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Dynamic field mapping\n默认情况下，当在文档中找到一个以前看不到的字段时，Elasticsearch会将新字段添加到类型映射中。通过将动态参数设置为false（忽略新字段）或strict（在遇到未知字段时抛出异常），可以在文档和对象级别禁用此行为。\n这些是动态检测的唯一字段数据类型。所有其他数据类型必须显式映射。\n除了下面列出的选项之外，动态字段映射规则还可以使用dynamic_templates进一步自定义。\n\nPUT my-index-000001/_doc/1\n{\n  "create_date": "2015/09/02"\n}\n\nGET my-index-000001/_mapping\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h5",{attrs:{id:"半自动生成mapping-create-index-mappings-dynamic-templates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#半自动生成mapping-create-index-mappings-dynamic-templates"}},[s._v("#")]),s._v(" 半自动生成mapping（create index.mappings.dynamic_templates）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Dynamic templates\n动态模板允许您定义可应用于动态添加的字段的自定义映射，这些映射基于：\nElasticsearch检测到的数据类型，match_mapping_type。\n字段的名称，带有match和unmatch或match_pattern。\n字段的完整虚线路径，包括path_match和path_unmatch。\n原始字段名称{name}和检测到的数据类型{dynamic_type}模板变量可以在映射规范中用作占位符。\n动态字段映射仅在字段包含具体值（非null或空数组）时添加。这意味着，如果在dynamic_template中使用null_value选项，则只有在索引了第一个具有该字段具体值的文档之后才应用该选项。\n\nPUT my-index-000001\n{\n  "mappings": {\n    "dynamic_templates": [\n      {\n        "longs_as_strings": {\n          "match_mapping_type": "string",\n          "match":   "long_*",\n          "unmatch": "*_text",\n          "mapping": {\n            "type": "long"\n          }\n        }\n      }\n    ]\n  }\n}\n\nPUT my-index-000001/_doc/1\n{\n  "long_num": "5", \n  "long_text": "foo" \n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);