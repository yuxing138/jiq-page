(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{317:function(t,a,r){"use strict";r.r(a);var s=r(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" /")]),t._v(" "),a("h4",{attrs:{id:"倒排索引与正排索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引与正排索引"}},[t._v("#")]),t._v(" 倒排索引与正排索引")]),t._v(" "),a("p",[t._v("1、正排索引又称正向索引，要查找word在哪个doc中，通过doc索引，遍历docs，获得包含word的docs。"),a("br"),t._v("2、倒排索引又称反向索引，要查找word在哪个doc中，通过word索引，直接获得包含word的docs。")]),t._v(" "),a("h4",{attrs:{id:"查询、搜索、聚合查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询、搜索、聚合查询"}},[t._v("#")]),t._v(" 查询、搜索、聚合查询")]),t._v(" "),a("p",[t._v("1、查询侧重查找。"),a("br"),t._v("2、聚合侧重统计。"),a("br"),t._v("3、查询与聚合查询都属于搜索。（您可以使用搜索API来搜索和聚合存储在Elasticsearch数据流或索引中的数据。）")]),t._v(" "),a("h4",{attrs:{id:"查询、检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询、检索"}},[t._v("#")]),t._v(" 查询、检索")]),t._v(" "),a("p",[t._v("1、查询是精准匹配。"),a("br"),t._v("2、检索是近似匹配。")]),t._v(" "),a("h4",{attrs:{id:"三角原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三角原则"}},[t._v("#")]),t._v(" 三角原则")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://jiq-picture.yuxing138.top/c7129251fef421af59378c21bf9ca038/1701388108232-18100d98-ae30-4e73-91a7-342ce5d19ebc.png#averageHue=%23f9f9f9&clientId=uc07e1bed-8439-4&from=paste&height=287&id=HGdIc&originHeight=1148&originWidth=1178&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=130538&status=done&style=none&taskId=ub5599573-e1f3-4488-9d1a-5a97c5eb097&title=&width=295",alt:"image.png"}}),a("br"),t._v("大数据、准确性、实时性，难以同时兼顾。")]),t._v(" "),a("ul",[a("li",[t._v("Elasticsearch追求实时性与大数据，则牺牲准确性。")]),t._v(" "),a("li",[t._v("Hadoop追求大数据与准确性，则牺牲实时性。")]),t._v(" "),a("li",[t._v("Mysql追求实时性与准确性，则牺牲大数据。")])]),t._v(" "),a("p",[t._v("为什么做不到又快又准又大？")]),t._v(" "),a("ul",[a("li",[t._v("“大数据+准确性”依赖网络扩展，快不了。")]),t._v(" "),a("li",[t._v("“实时性”依赖单机内存，还要兼顾“大数据”，准不了。（单机内存无法容纳海量数据，采用估算，即准不了。）")]),t._v(" "),a("li",[t._v("“实时性”依赖单机内存，还要兼顾“准确性”，大不了。（单机内存无法容纳海量数据，即大不了。）")])]),t._v(" "),a("p",[t._v("注意：并非所有场景都做不到快准大。")]),t._v(" "),a("h4",{attrs:{id:"词汇表-glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词汇表-glossary"}},[t._v("#")]),t._v(" 词汇表（Glossary）")]),t._v(" "),a("h5",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" "),a("strong",[t._v("index")])]),t._v(" "),a("p",[t._v("1、表示JSON文档的集合。"),a("br"),t._v("2、将一个或多个JSON文档添加到Elasticsearch。这个过程称为索引。")]),t._v(" "),a("h5",{attrs:{id:"retrieve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve"}},[t._v("#")]),t._v(" retrieve")]),t._v(" "),a("p",[t._v("检索、取回、召回。")]),t._v(" "),a("h5",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" query")]),t._v(" "),a("p",[t._v("请求有关您的数据的信息。您可以将查询视为一个问题，以Elasticsearch理解的方式编写。")])])}),[],!1,null,null,null);a.default=e.exports}}]);