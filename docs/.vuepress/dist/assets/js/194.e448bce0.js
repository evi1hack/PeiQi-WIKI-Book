(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{2110:function(t,a,s){t.exports=s.p+"assets/img/image-20220308101141481.5b658a46.png"},2111:function(t,a,s){t.exports=s.p+"assets/img/792b1dd1-a89f-497a-b43b-bae73a7ceff0.c2d87424.png"},2112:function(t,a,s){t.exports=s.p+"assets/img/8ff51702-0cc0-4d56-bcef-80d838e102cf.a36d9d08.png"},2619:function(t,a,s){"use strict";s.r(a);var e=s(75),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"apache-mod-jk-访问控制权限绕过-cve-2018-11759"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-mod-jk-访问控制权限绕过-cve-2018-11759"}},[t._v("#")]),t._v(" Apache Mod_jk 访问控制权限绕过 CVE-2018-11759")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("Apache Tomcat JK（mod_jk）Connector是美国阿帕奇（Apache）软件基金会的一款为Apache或IIS提供连接后台Tomcat的模块，用以为Apache或IIS服务器提供处理JSP/Servlet的能力。")]),t._v(" "),e("p",[t._v("由于httpd和Tomcat在路径处理规范上存在差异，因此可以绕过Apache mod_jk Connector 1.2.0版本到1.2.44版本上由JkMount httpd指令所定义端点的访问控制限制。\n如果一个只有只读权限的jkstatus的接口可以访问的话，那么就有可能能够公开由mod_jk模块给AJP提供服务的内部路由。\n如果一个具有读写权限的jkstatus接口可供访问，我们就能通过修改AJP的配置文件中相关配置来劫持或者截断所有经过mod_jk的流量，又或者进行内部的端口扫描。")]),t._v(" "),e("h2",{attrs:{id:"影响版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[t._v("#")]),t._v(" 影响版本")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("Apache Mod_jk Connector 1.2.0 ~ 1.2.44")]),e("br"),t._v(" "),e("h2",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/immunIT/CVE-2018-11759.git\ndocker-conpose up -d\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:s(2110),alt:"image-20220308101141481"}})]),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("访问 "),e("code",[t._v("http://xxx.xxx.xxx.xxx/jkstatus")]),t._v(" 显示无权限访问")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("You don't have permission to access /jkstatus on this server.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:s(2111),alt:"792b1dd1-a89f-497a-b43b-bae73a7ceff0"}})]),t._v(" "),e("p",[t._v("访问  "),e("code",[t._v("http://xxx.xxx.xxx.xxx/jkstatus;")]),t._v(" 即可绕过")]),t._v(" "),e("p",[e("img",{attrs:{src:s(2112),alt:"8ff51702-0cc0-4d56-bcef-80d838e102cf"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);