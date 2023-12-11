(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{329:function(s,n,t){"use strict";t.r(n);var a=t(14),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" /")]),s._v(" "),n("h4",{attrs:{id:"embstr源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#embstr源码"}},[s._v("#")]),s._v(" embstr源码")]),s._v(" "),n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("LRU_BITS")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")])])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("redisObject")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" type"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" encoding"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" lru"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("LRU_BITS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* LRU time (relative to global lru_clock) or\n                            * LFU data (least significant 8 bits frequency\n                            * and most significant 16 bits access time). */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" refcount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" robj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("struct RedisObject {\n  int4 type; // 4bits\n  int4 encoding; // 4bits\n  int24 lru; // 24bits\n  int32 refcount; // 4bytes\n  void *ptr; // 8bytes，64-bit system\n} robj;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://jiq-picture.yuxing138.top/1e8dc75106b62ba829d34ee8285b50ad/1702183147664-102fe632-29ca-4c2a-b993-401289bcc103.png#averageHue=%23f0f0f0&clientId=u969261a6-306b-4&from=paste&height=262&id=u7612d0c4&originHeight=654&originWidth=973&originalType=binary&ratio=2.5&rotation=0&showTitle=false&size=73397&status=done&style=none&taskId=uc440accb-b0fa-4f95-8e55-6c712f44690&title=&width=389.2",alt:"image.png"}}),n("br"),s._v("RedisObject占用16字节，sdshdr8占用4字节，如果保存的值小于44字节，总共只需要20+44=64字节。"),n("br"),s._v("这样"),n("code",[s._v("embstr")]),s._v("编码的"),n("code",[s._v("RedisObject")]),s._v("与"),n("code",[s._v("所有数据")]),s._v("可保存在一块连续的64字节的内存中。"),n("br"),s._v("1、节省内存空间。"),n("br"),s._v("2、内存分配更快，只需分配一次64字节。"),n("br"),s._v("3、查询速度更快。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/* Note: sdshdr5 is never used, we just access the flags byte directly.\n * However is here to document the layout of type 5 SDS strings. */\nstruct __attribute__ ((__packed__)) sdshdr5 {\n    unsigned char flags; /* 3 lsb of type, and 5 msb of string length */\n    char buf[];\n};\nstruct __attribute__ ((__packed__)) sdshdr8 {\n    uint8_t len; /* used */\n    uint8_t alloc; /* excluding the header and null terminator */\n    unsigned char flags; /* 3 lsb of type, 5 unused bits */\n    char buf[];\n};\nstruct __attribute__ ((__packed__)) sdshdr16 {\n    uint16_t len; /* used */\n    uint16_t alloc; /* excluding the header and null terminator */\n    unsigned char flags; /* 3 lsb of type, 5 unused bits */\n    char buf[];\n};\nstruct __attribute__ ((__packed__)) sdshdr32 {\n    uint32_t len; /* used */\n    uint32_t alloc; /* excluding the header and null terminator */\n    unsigned char flags; /* 3 lsb of type, 5 unused bits */\n    char buf[];\n};\nstruct __attribute__ ((__packed__)) sdshdr64 {\n    uint64_t len; /* used */\n    uint64_t alloc; /* excluding the header and null terminator */\n    unsigned char flags; /* 3 lsb of type, 5 unused bits */\n    char buf[];\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h4",{attrs:{id:"embstr编码转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#embstr编码转换"}},[s._v("#")]),s._v(" embstr编码转换")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('> set key hello\nOK\n> object encoding key\n"embstr"\n> append key world //append修改embstr，被转换为raw\n(integer) 10\n> object encoding key\n"raw"\n> set key helloworld //set覆盖embstr\nOK\n> object encoding key\n"embstr"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);