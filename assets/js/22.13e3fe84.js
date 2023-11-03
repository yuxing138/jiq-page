(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{303:function(t,e,a){"use strict";a.r(e);var r=a(14),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" /")]),t._v(" "),e("h5",{attrs:{id:"项目介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[t._v("#")]),t._v(" 项目介绍")]),t._v(" "),e("p",[t._v("1、开源地址：https://github.com/yuxing138/clouder.git"),e("br"),t._v("2、开源目的：方便自己将本地文档云化。")]),t._v(" "),e("h5",{attrs:{id:"使用步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),e("h6",{attrs:{id:"_1、新建配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、新建配置文件"}},[t._v("#")]),t._v(" 1、新建配置文件")]),t._v(" "),e("p",[t._v("windows：windows.properties"),e("br"),t._v("macos：macos.properties"),e("br"),e("img",{attrs:{src:"https://jiq-picture.yuxing138.top/dfd56ab7fad87dc5c890e09e5fe29795/1689855712933-0ce12c6b-0f94-4ab9-800e-ea3bd1a66f93.png#averageHue=%23f3f4f4&clientId=u95dd213f-355c-4&from=paste&height=304&id=u9dbd8456&originHeight=608&originWidth=1506&originalType=binary&ratio=2&rotation=0&showTitle=false&size=97137&status=done&style=none&taskId=u51e8af15-1c39-43d2-83d4-888221935f9&title=&width=753",alt:"image.png"}})]),t._v(" "),e("h6",{attrs:{id:"_2、配置参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置参数"}},[t._v("#")]),t._v(" 2、配置参数")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#根目录\npageRootDirectory=/Users/mac/Desktop/temp\n#图片库\npictureRepository=https://github.com/yuxing138/picture.git\npictureBranch=cloud\npictureDomain=https://picture.yuxing138.top\n#文档库\ndocumentRepository=https://github.com/yuxing138/document.git\ndocumentBranch=cloud\n#令牌密钥、日志级别\nprivateTokenPassword2=加密密码2\nprintLevel=info\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("h6",{attrs:{id:"_3、生成密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、生成密钥"}},[t._v("#")]),t._v(" 3、生成密钥")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("java -jar DocumentClouder.jar -t")]),t._v("生成密钥"),e("br"),t._v("privateToken为：github仓库的token"),e("br"),t._v("privateTokenPassword1为：token加密密码1"),e("br"),t._v("privateTokenPassword2为：token加密密码2"),e("br"),e("img",{attrs:{src:"https://jiq-picture.yuxing138.top/dfd56ab7fad87dc5c890e09e5fe29795/1689855396120-07459156-8e54-4073-83e2-c273dc757e00.png#averageHue=%23fdfcfa&clientId=u95dd213f-355c-4&from=paste&height=371&id=ue69ff75b&originHeight=742&originWidth=1140&originalType=binary&ratio=2&rotation=0&showTitle=false&size=90450&status=done&style=none&taskId=ucf0ae9ed-8c1e-4e14-9151-26d873374e9&title=&width=570",alt:"image.png"}})]),t._v(" "),e("h6",{attrs:{id:"_4、上传或更新文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、上传或更新文档"}},[t._v("#")]),t._v(" 4、上传或更新文档")]),t._v(" "),e("p",[t._v("上传文档：拷贝文档到"),e("code",[t._v("pageRootDirectory/upload/topic/xx.md")]),t._v("，执行命令"),e("code",[t._v("java -jar DocumentClouder.jar")]),t._v("即可。"),e("br"),t._v("更新文档：拷贝"),e("code",[t._v("文档库")]),t._v("中的文档到"),e("code",[t._v("pageRootDirectory/upload/topic/xx#xxxx.md")]),t._v("，执行命令"),e("code",[t._v("java -jar DocumentClouder.jar")]),t._v("即可。"),e("br"),t._v("镜像文档：拷贝文档到"),e("code",[t._v("pageRootDirectory/upload/topic/")]),t._v("中，执行"),e("code",[t._v("java -jar DocumentClouder.jar -s")]),t._v("即可。（注意：“原始库没有，文档库有”的文档将被删除，即"),e("code",[t._v("文档库")]),t._v("是"),e("code",[t._v("原始库")]),t._v("的镜像。)"),e("br"),e("img",{attrs:{src:"https://jiq-picture.yuxing138.top/dfd56ab7fad87dc5c890e09e5fe29795/1689855864556-5f3ce103-d7d2-4e91-9f4c-2cefbd640942.png#averageHue=%23fbfbf9&clientId=u95dd213f-355c-4&from=paste&height=371&id=u0653034b&originHeight=742&originWidth=1140&originalType=binary&ratio=2&rotation=0&showTitle=false&size=112877&status=done&style=none&taskId=u4aafafb2-9911-41ae-a2d5-0e0d436cf28&title=&width=570",alt:"image.png"}})]),t._v(" "),e("h5",{attrs:{id:"-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])])])}),[],!1,null,null,null);e.default=s.exports}}]);