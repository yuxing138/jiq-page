(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{306:function(e,t,a){"use strict";a.r(t);var i=a(14),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h5",{attrs:{id:"项目介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[e._v("#")]),e._v(" 项目介绍")]),e._v(" "),t("blockquote",[t("p",[e._v("1、开源地址：https://github.com/yuxing138/clouder.git")]),e._v(" "),t("p",[e._v("2、开源目的：方便自己将本地文档云化。")])]),e._v(" "),t("h5",{attrs:{id:"使用步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[e._v("#")]),e._v(" 使用步骤")]),e._v(" "),t("p",[e._v("1、新建配置文件")]),e._v(" "),t("blockquote",[t("p",[e._v("windows：windows.properties")]),e._v(" "),t("p",[e._v("macos：macos.properties")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://jiq-picture.yuxing138.top/9007c1ac8e703e2b196fd1f07839b8f9/1689855712933-0ce12c6b-0f94-4ab9-800e-ea3bd1a66f93.png#averageHue=%23f3f4f4&clientId=u95dd213f-355c-4&from=paste&height=304&id=u9dbd8456&originHeight=608&originWidth=1506&originalType=binary&ratio=2&rotation=0&showTitle=false&size=97137&status=done&style=none&taskId=u51e8af15-1c39-43d2-83d4-888221935f9&title=&width=753",alt:"image.png"}})])]),e._v(" "),t("p",[e._v("2、配置参数")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#根目录\npageRootDirectory=/Users/mac/Desktop/temp\n#图片库\npictureRepository=https://github.com/yuxing138/picture.git\npictureBranch=cloud\npictureDomain=https://picture.yuxing138.top\n#文档库\ndocumentRepository=https://github.com/yuxing138/document.git\ndocumentBranch=cloud\n#令牌密钥、日志级别\nprivateTokenPassword2=加密密码2\nprintLevel=info\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("p",[e._v("3、生成密钥")]),e._v(" "),t("blockquote",[t("p",[e._v("通过"),t("code",[e._v("java -jar DocumentClouder.jar -t")]),e._v("生成密钥")]),e._v(" "),t("p",[e._v("privateToken为：github仓库的token")]),e._v(" "),t("p",[e._v("privateTokenPassword1为：token加密密码1")]),e._v(" "),t("p",[e._v("privateTokenPassword2为：token加密密码2")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://jiq-picture.yuxing138.top/9007c1ac8e703e2b196fd1f07839b8f9/1689855396120-07459156-8e54-4073-83e2-c273dc757e00.png#averageHue=%23fdfcfa&clientId=u95dd213f-355c-4&from=paste&height=371&id=ue69ff75b&originHeight=742&originWidth=1140&originalType=binary&ratio=2&rotation=0&showTitle=false&size=90450&status=done&style=none&taskId=ucf0ae9ed-8c1e-4e14-9151-26d873374e9&title=&width=570",alt:"image.png"}})])]),e._v(" "),t("p",[e._v("4、上传或更新文档")]),e._v(" "),t("blockquote",[t("p",[e._v("上传文档：拷贝文档到"),t("code",[e._v("pageRootDirectory/upload/topic/xx.md")]),e._v("，执行命令"),t("code",[e._v("java -jar DocumentClouder.jar")]),e._v("即可。")]),e._v(" "),t("p",[e._v("更新文档：拷贝"),t("code",[e._v("文档库")]),e._v("中的文档到"),t("code",[e._v("pageRootDirectory/upload/topic/xx#xxxx.md")]),e._v("，执行命令"),t("code",[e._v("java -jar DocumentClouder.jar")]),e._v("即可。")]),e._v(" "),t("p",[e._v("镜像文档：拷贝文档到"),t("code",[e._v("pageRootDirectory/upload/topic/")]),e._v("中，执行"),t("code",[e._v("java -jar DocumentClouder.jar -s")]),e._v("即可。（注意：“原始库没有，文档库有”的文档将被删除，即"),t("code",[e._v("文档库")]),e._v("是"),t("code",[e._v("原始库")]),e._v("的镜像。)\n"),t("img",{attrs:{src:"https://jiq-picture.yuxing138.top/9007c1ac8e703e2b196fd1f07839b8f9/1689855864556-5f3ce103-d7d2-4e91-9f4c-2cefbd640942.png#averageHue=%23fbfbf9&clientId=u95dd213f-355c-4&from=paste&height=371&id=u0653034b&originHeight=742&originWidth=1140&originalType=binary&ratio=2&rotation=0&showTitle=false&size=112877&status=done&style=none&taskId=u4aafafb2-9911-41ae-a2d5-0e0d436cf28&title=&width=570",alt:"image.png"}})])])])}),[],!1,null,null,null);t.default=s.exports}}]);