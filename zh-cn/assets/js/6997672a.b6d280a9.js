"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[15268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),k=n,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},86914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u65b0\u4eba\u6587\u6863",keywords:["Seata"],description:"Seata\u5206TC\u3001TM\u548cRM\u4e09\u4e2a\u89d2\u8272\uff0cTC\uff08Server\u7aef\uff09\u4e3a\u5355\u72ec\u670d\u52a1\u7aef\u90e8\u7f72\uff0cTM\u548cRM\uff08Client\u7aef\uff09\u7531\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210\u3002"},o="\u90e8\u7f72\u6307\u5357",i={unversionedId:"ops/deploy-guide-beginner",id:"version-v1.3/ops/deploy-guide-beginner",title:"\u65b0\u4eba\u6587\u6863",description:"Seata\u5206TC\u3001TM\u548cRM\u4e09\u4e2a\u89d2\u8272\uff0cTC\uff08Server\u7aef\uff09\u4e3a\u5355\u72ec\u670d\u52a1\u7aef\u90e8\u7f72\uff0cTM\u548cRM\uff08Client\u7aef\uff09\u7531\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/ops/deploy-guide-beginner.md",sourceDirName:"ops",slug:"/ops/deploy-guide-beginner",permalink:"/zh-cn/docs/v1.3/ops/deploy-guide-beginner",draft:!1,tags:[],version:"v1.3",frontMatter:{title:"\u65b0\u4eba\u6587\u6863",keywords:["Seata"],description:"Seata\u5206TC\u3001TM\u548cRM\u4e09\u4e2a\u89d2\u8272\uff0cTC\uff08Server\u7aef\uff09\u4e3a\u5355\u72ec\u670d\u52a1\u7aef\u90e8\u7f72\uff0cTM\u548cRM\uff08Client\u7aef\uff09\u7531\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210\u3002"},sidebar:"docs",previous:{title:"\u591a\u914d\u7f6e\u9694\u79bb",permalink:"/zh-cn/docs/v1.3/ops/multi-configuration-isolation"},next:{title:"\u76f4\u63a5\u90e8\u7f72",permalink:"/zh-cn/docs/v1.3/ops/deploy-server"}},p={},s=[{value:"Seata\u65b0\u624b\u90e8\u7f72\u6307\u5357",id:"seata\u65b0\u624b\u90e8\u7f72\u6307\u5357",level:2},{value:"\u8d44\u6e90\u76ee\u5f55\u4ecb\u7ecd",id:"\u8d44\u6e90\u76ee\u5f55\u4ecb\u7ecd",level:3},{value:'<a href="https://github.com/seata/seata/tree/master/script" target="_blank">\u70b9\u51fb\u67e5\u770b(\u6216\u6839\u636e\u7248\u672c\u5206\u652f\u9009\u62e9\u5bf9\u5e94\u7684\u8d44\u6e90\u76ee\u5f55)</a>',id:"\u70b9\u51fb\u67e5\u770b\u6216\u6839\u636e\u7248\u672c\u5206\u652f\u9009\u62e9\u5bf9\u5e94\u7684\u8d44\u6e90\u76ee\u5f55",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u542f\u52a8Server",id:"\u542f\u52a8server",level:3},{value:"\u6b65\u9aa4\u4e00\uff1a\u542f\u52a8\u5305",id:"\u6b65\u9aa4\u4e00\u542f\u52a8\u5305",level:4},{value:"\u6b65\u9aa4\u4e8c\uff1a\u5efa\u8868(\u4ec5db)",id:"\u6b65\u9aa4\u4e8c\u5efa\u8868\u4ec5db",level:4},{value:"\u6b65\u9aa4\u4e09\uff1a\u4fee\u6539store.mode",id:"\u6b65\u9aa4\u4e09\u4fee\u6539storemode",level:4},{value:"\u6b65\u9aa4\u56db\uff1a\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5|redis\u5c5e\u6027\u914d\u7f6e",id:"\u6b65\u9aa4\u56db\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5redis\u5c5e\u6027\u914d\u7f6e",level:4},{value:"\u6b65\u9aa4\u4e94\uff1a\u542f\u52a8",id:"\u6b65\u9aa4\u4e94\u542f\u52a8",level:4},{value:"\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210Client",id:"\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210client",level:3},{value:"\u6b65\u9aa4\u4e00\uff1a\u6dfb\u52a0seata\u4f9d\u8d56\uff08\u5efa\u8bae\u5355\u9009\uff09",id:"\u6b65\u9aa4\u4e00\u6dfb\u52a0seata\u4f9d\u8d56\u5efa\u8bae\u5355\u9009",level:4},{value:"\u6b65\u9aa4\u4e8c\uff1aundo_log\u5efa\u8868\u3001\u914d\u7f6e\u53c2\u6570(\u4ec5AT\u6a21\u5f0f)",id:"\u6b65\u9aa4\u4e8cundo_log\u5efa\u8868\u914d\u7f6e\u53c2\u6570\u4ec5at\u6a21\u5f0f",level:4},{value:"\u6b65\u9aa4\u4e09\uff1a\u6570\u636e\u6e90\u4ee3\u7406\uff08\u4e0d\u652f\u6301\u81ea\u52a8\u548c\u624b\u52a8\u914d\u7f6e\u5e76\u5b58\uff09",id:"\u6b65\u9aa4\u4e09\u6570\u636e\u6e90\u4ee3\u7406\u4e0d\u652f\u6301\u81ea\u52a8\u548c\u624b\u52a8\u914d\u7f6e\u5e76\u5b58",level:4},{value:"\u6b65\u9aa4\u56db\uff1a\u521d\u59cb\u5316GlobalTransactionScanner",id:"\u6b65\u9aa4\u56db\u521d\u59cb\u5316globaltransactionscanner",level:4},{value:"\u6b65\u9aa4\u4e94\uff1a\u5b9e\u73b0xid\u8de8\u670d\u52a1\u4f20\u9012",id:"\u6b65\u9aa4\u4e94\u5b9e\u73b0xid\u8de8\u670d\u52a1\u4f20\u9012",level:4}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u90e8\u7f72\u6307\u5357"},"\u90e8\u7f72\u6307\u5357"),(0,n.kt)("h2",{id:"seata\u65b0\u624b\u90e8\u7f72\u6307\u5357"},"Seata\u65b0\u624b\u90e8\u7f72\u6307\u5357"),(0,n.kt)("p",null,"Seata\u5206TC\u3001TM\u548cRM\u4e09\u4e2a\u89d2\u8272\uff0cTC\uff08Server\u7aef\uff09\u4e3a\u5355\u72ec\u670d\u52a1\u7aef\u90e8\u7f72\uff0cTM\u548cRM\uff08Client\u7aef\uff09\u7531\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210\u3002"),(0,n.kt)("h3",{id:"\u8d44\u6e90\u76ee\u5f55\u4ecb\u7ecd"},"\u8d44\u6e90\u76ee\u5f55\u4ecb\u7ecd"),(0,n.kt)("h4",{id:"\u70b9\u51fb\u67e5\u770b\u6216\u6839\u636e\u7248\u672c\u5206\u652f\u9009\u62e9\u5bf9\u5e94\u7684\u8d44\u6e90\u76ee\u5f55"},(0,n.kt)("a",{href:"https://github.com/seata/seata/tree/master/script",target:"_blank"},"\u70b9\u51fb\u67e5\u770b(\u6216\u6839\u636e\u7248\u672c\u5206\u652f\u9009\u62e9\u5bf9\u5e94\u7684\u8d44\u6e90\u76ee\u5f55)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"client",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u5b58\u653eclient\u7aefsql\u811a\u672c (\u5305\u542b undo_log\u8868) \uff0c\u53c2\u6570\u914d\u7f6e"))),(0,n.kt)("li",{parentName:"ul"},"config-center",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u5404\u4e2a\u914d\u7f6e\u4e2d\u5fc3\u53c2\u6570\u5bfc\u5165\u811a\u672c\uff0cconfig.txt(\u5305\u542bserver\u548cclient\uff0c\u539f\u540dnacos-config.txt)\u4e3a\u901a\u7528\u53c2\u6570\u6587\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"server",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"server\u7aef\u6570\u636e\u5e93\u811a\u672c (\u5305\u542b lock_table\u3001branch_table \u4e0e global_table) \u53ca\u5404\u4e2a\u5bb9\u5668\u914d\u7f6e")))),(0,n.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"seata-spring-boot-starter")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u5185\u7f6eGlobalTransactionScanner\u81ea\u52a8\u521d\u59cb\u5316\u529f\u80fd\uff0c\u82e5\u5916\u90e8\u5b9e\u73b0\u521d\u59cb\u5316\uff0c\u8bf7\u53c2\u8003SeataAutoConfiguration\u4fdd\u8bc1\u4f9d\u8d56\u52a0\u8f7d\u987a\u5e8f\n\u9ed8\u8ba4\u5f00\u542f\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406\uff0c\u53ef\u914d\u7f6eseata.enable-auto-data-source-proxy: false\u5173\u95ed\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"spring-cloud-starter-alibaba-seata",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("a",{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank"},"\u67e5\u770b\u7248\u672c\u8bf4\u660e"),"2.1.0\u5185\u5d4cseata-all 0.7.1\uff0c2.1.1\u5185\u5d4cseata-all 0.9.0\uff0c2.2.0\u5185\u5d4cseata-spring-boot-starter 1.0.0, 2.2.1\u5185\u5d4cseata-spring-boot-starter 1.1.0"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    2.1.0\u548c2.1.1\u517c\u5bb9starter\u89e3\u51b3\u65b9\u6848:\n@SpringBootApplication\u6ce8\u89e3\u5185exclude\u6389spring-cloud-starter-alibaba-seata\u5185\u7684com.alibaba.cloud.seata.GlobalTransactionAutoConfiguration\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"spring-cloud-starter-alibaba-seata\u63a8\u8350\u4f9d\u8d56\u914d\u7f6e\u65b9\u5f0f")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"           <dependency>\n                <groupId>io.seata</groupId>\n                <artifactId>seata-spring-boot-starter</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>com.alibaba.cloud</groupId>\n                <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n                <exclusions>\n                    <exclusion>\n                        <groupId>io.seata</groupId>\n                        <artifactId>seata-spring-boot-starter</artifactId>\n                    </exclusion>\n                </exclusions>\n            </dependency>\n")),(0,n.kt)("h3",{id:"\u542f\u52a8server"},"\u542f\u52a8Server"),(0,n.kt)("p",null,"Server\u7aef\u5b58\u50a8\u6a21\u5f0f\uff08store.mode\uff09\u73b0\u6709file\u3001db\u3001redis\u4e09\u79cd\uff0cfile\u6a21\u5f0f\u65e0\u9700\u6539\u52a8\uff0c\u76f4\u63a5\u542f\u52a8\u5373\u53ef\uff0c\u4e0b\u9762\u4e13\u95e8\u8bb2\u4e0bdb\u548credis\u542f\u52a8\u6b65\u9aa4\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u6ce8\uff1a file\u6a21\u5f0f\u4e3a\u5355\u673a\u6a21\u5f0f\uff0c\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u5185\u5b58\u4e2d\u8bfb\u5199\u5e76\u6301\u4e45\u5316\u672c\u5730\u6587\u4ef6root.data\uff0c\u6027\u80fd\u8f83\u9ad8;  "),(0,n.kt)("p",null,"db\u6a21\u5f0f\u4e3a\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u901a\u8fc7db\u5171\u4eab\uff0c\u76f8\u5e94\u6027\u80fd\u5dee\u4e9b;"),(0,n.kt)("p",null,"redis\u6a21\u5f0fSeata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301,\u6027\u80fd\u8f83\u9ad8,\u5b58\u5728\u4e8b\u52a1\u4fe1\u606f\u4e22\u5931\u98ce\u9669,\u8bf7\u63d0\u524d\u914d\u7f6e\u5408\u9002\u5f53\u524d\u573a\u666f\u7684redis\u6301\u4e45\u5316\u914d\u7f6e."),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00\u542f\u52a8\u5305"},"\u6b65\u9aa4\u4e00\uff1a\u542f\u52a8\u5305"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://github.com/seata/seata/releases",target:"_blank"},"\u70b9\u51fb\u4e0b\u8f7d")),(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u9489\u9489\u7fa4\uff08\u7fa4\u53f7\uff1a23171167\uff0c1\u7fa45000\u4eba\u5df2\u6ee1\uff0c",(0,n.kt)("a",{href:"http://seata.io/zh-cn/community",target:"_blank"},"2\u7fa4"),", 3\u7fa4: 32033786\uff09\uff0cqq\u7fa4\uff08\u7fa4\u53f7: 254657148,2\u7fa4: 216012363\uff09\u7fa4\u6587\u4ef6\u5171\u4eab\u4e0b\u8f7d")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\u5efa\u8868\u4ec5db"},"\u6b65\u9aa4\u4e8c\uff1a\u5efa\u8868(\u4ec5db)"),(0,n.kt)("p",null,"\u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u75313\u5757\u5185\u5bb9\u6784\u6210\uff0c\u5168\u5c40\u4e8b\u52a1--\x3e\u5206\u652f\u4e8b\u52a1--\x3e\u5168\u5c40\u9501\uff0c\u5bf9\u5e94\u8868global_table\u3001branch_table\u3001lock_table"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09\u4fee\u6539storemode"},"\u6b65\u9aa4\u4e09\uff1a\u4fee\u6539store.mode"),(0,n.kt)("p",null,'\u542f\u52a8\u5305: seata--\x3econf--\x3efile.conf\uff0c\u4fee\u6539store.mode="db\u6216\u8005redis"',(0,n.kt)("br",{parentName:"p"}),"\n",'\u6e90\u7801:   \u6839\u76ee\u5f55--\x3eseata-server--\x3eresources--\x3efile.conf\uff0c\u4fee\u6539store.mode="db\u6216\u8005redis"'),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u56db\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5redis\u5c5e\u6027\u914d\u7f6e"},"\u6b65\u9aa4\u56db\uff1a\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5|redis\u5c5e\u6027\u914d\u7f6e"),(0,n.kt)("p",null,"\u542f\u52a8\u5305: seata--\x3econf--\x3efile.conf\uff0c\u4fee\u6539store.db\u6216store.redis\u76f8\u5173\u5c5e\u6027\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u6e90\u7801:   \u6839\u76ee\u5f55--\x3eseata-server--\x3eresources--\x3efile.conf\uff0c\u4fee\u6539store.db\u6216store.redis\u76f8\u5173\u5c5e\u6027\u3002"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e94\u542f\u52a8"},"\u6b65\u9aa4\u4e94\uff1a\u542f\u52a8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6e90\u7801\u542f\u52a8: \u6267\u884cServer.java\u7684main\u65b9\u6cd5  "),(0,n.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u542f\u52a8: seata-server.sh -h 127.0.0.1 -p 8091 -m db -n 1 -e test")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    -h: \u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3\u7684ip\n    -p: Server rpc \u76d1\u542c\u7aef\u53e3\n    -m: \u5168\u5c40\u4e8b\u52a1\u4f1a\u8bdd\u4fe1\u606f\u5b58\u50a8\u6a21\u5f0f\uff0cfile\u3001db\u3001redis\uff0c\u4f18\u5148\u8bfb\u53d6\u542f\u52a8\u53c2\u6570 (Seata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301redis)\n    -n: Server node\uff0c\u5f53\u6709\u591a\u4e2aServer\u65f6\uff0c\u9700\u533a\u5206\u5404\u81ea\u8282\u70b9\uff0c\u7528\u4e8e\u751f\u6210\u4e0d\u540c\u533a\u95f4\u7684transactionId\uff0c\u4ee5\u514d\u51b2\u7a81\n    -e: \u591a\u73af\u5883\u914d\u7f6e\u53c2\u8003 https://seata.io/zh-cn/docs/v1.3/ops/multi-configuration-isolation\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://seata.io/zh-cn/docs/ops/deploy-by-docker.html",target:"_blank"},"\u70b9\u51fb\u67e5\u770bdocker\u90e8\u7f72"))),(0,n.kt)("p",null,"\u6ce8: \u5806\u5185\u5b58\u5efa\u8bae\u5206\u914d2G\uff0c\u5806\u5916\u5185\u5b581G"),(0,n.kt)("h3",{id:"\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210client"},"\u4e1a\u52a1\u7cfb\u7edf\u96c6\u6210Client"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00\u6dfb\u52a0seata\u4f9d\u8d56\u5efa\u8bae\u5355\u9009"},"\u6b65\u9aa4\u4e00\uff1a\u6dfb\u52a0seata\u4f9d\u8d56\uff08\u5efa\u8bae\u5355\u9009\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56seata-all"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56seata-spring-boot-starter\uff0c\u652f\u6301yml\u3001properties\u914d\u7f6e(.conf\u53ef\u5220\u9664)\uff0c\u5185\u90e8\u5df2\u4f9d\u8d56seata-all"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56spring-cloud-alibaba-seata\uff0c\u5185\u90e8\u96c6\u6210\u4e86seata\uff0c\u5e76\u5b9e\u73b0\u4e86xid\u4f20\u9012")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8cundo_log\u5efa\u8868\u914d\u7f6e\u53c2\u6570\u4ec5at\u6a21\u5f0f"},"\u6b65\u9aa4\u4e8c\uff1aundo_log\u5efa\u8868\u3001\u914d\u7f6e\u53c2\u6570(\u4ec5AT\u6a21\u5f0f)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configurations.html",target:"_blank"},"\u67e5\u770b\u53c2\u6570\u914d\u7f6e\u4ecb\u7ecd"))),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09\u6570\u636e\u6e90\u4ee3\u7406\u4e0d\u652f\u6301\u81ea\u52a8\u548c\u624b\u52a8\u914d\u7f6e\u5e76\u5b58"},"\u6b65\u9aa4\u4e09\uff1a\u6570\u636e\u6e90\u4ee3\u7406\uff08\u4e0d\u652f\u6301\u81ea\u52a8\u548c\u624b\u52a8\u914d\u7f6e\u5e76\u5b58\uff09"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528seata-all"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"0.9.0\u7248\u672c\u5f00\u59cbseata\u652f\u6301\u81ea\u52a8\u4ee3\u7406\u6570\u636e\u6e90"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"1.1.0: seata-all\u53d6\u6d88\u5c5e\u6027\u914d\u7f6e\uff0c\u6539\u7531\u6ce8\u89e3@EnableAutoDataSourceProxy\u5f00\u542f\uff0c\u5e76\u53ef\u9009\u62e9jdk proxy\u6216\u8005cglib proxy\n1.0.0: client.support.spring.datasource.autoproxy=true\n0.9.0: support.spring.datasource.autoproxy=true\n")),(0,n.kt)("p",{parentName:"li"},"  \u5982\u679c\u91c7\u7528XA\u6a21\u5f0f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},'@EnableAutoDataSourceProxy(dataSourceProxyMode = "XA")'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u624b\u52a8\u914d\u7f6e\u53ef\u53c2\u8003\u4e0b\u65b9\u7684\u4f8b\u5b50"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'@Primary\n@Bean("dataSource")\npublic DataSource dataSource(DataSource druidDataSource) {\n    //AT \u4ee3\u7406 \u4e8c\u9009\u4e00\n    return new DataSourceProxy(druidDataSource);\n    //XA \u4ee3\u7406\n    return new DataSourceProxyXA(druidDataSource)\n}\n'))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528seata-starter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u52a8\u4ee3\u7406\u6570\u636e\u6e90\u65f6\uff0c\u5982\u679c\u4f7f\u7528XA\u6a21\u5f0f\u8fd8\u9700\u8981\u8c03\u6574\u914d\u7f6e\u6587\u4ef6",(0,n.kt)("br",{parentName:"p"}),"\n","application.properties"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"seata.data-source-proxy-mode=XA  \n")),(0,n.kt)("p",{parentName:"li"},"  application.yml"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"seata:\n  data-source-proxy-mode: XA\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u4f55\u5173\u95edseata-spring-boot-starter\u7684\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406\uff1f",(0,n.kt)("br",{parentName:"p"}),"\n","application.properties"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"seata.enable-auto-data-source-proxy=false  \n")),(0,n.kt)("p",{parentName:"li"},"  application.yml"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"seata:\n  enable-auto-data-source-proxy: false\n")))))),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u56db\u521d\u59cb\u5316globaltransactionscanner"},"\u6b65\u9aa4\u56db\uff1a\u521d\u59cb\u5316GlobalTransactionScanner"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-@Bean"},'       @Bean\n       public GlobalTransactionScanner globalTransactionScanner() {\n           String applicationName = this.applicationContext.getEnvironment().getProperty("spring.application.name");\n           String txServiceGroup = this.seataProperties.getTxServiceGroup();\n           if (StringUtils.isEmpty(txServiceGroup)) {\n               txServiceGroup = applicationName + "-fescar-service-group";\n               this.seataProperties.setTxServiceGroup(txServiceGroup);\n           }\n   \n           return new GlobalTransactionScanner(applicationName, txServiceGroup);\n       }\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\uff0c\u5f15\u5165seata-spring-boot-starter\u3001spring-cloud-starter-alibaba-seata\u7b49jar")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e94\u5b9e\u73b0xid\u8de8\u670d\u52a1\u4f20\u9012"},"\u6b65\u9aa4\u4e94\uff1a\u5b9e\u73b0xid\u8de8\u670d\u52a1\u4f20\u9012"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8\n\u53c2\u8003\u6e90\u7801integration\u6587\u4ef6\u5939\u4e0b\u7684\u5404\u79cdrpc\u5b9e\u73b0 module"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\nspringCloud\u7528\u6237\u53ef\u4ee5\u5f15\u5165spring-cloud-starter-alibaba-seata\uff0c\u5185\u90e8\u5df2\u7ecf\u5b9e\u73b0xid\u4f20\u9012")))}d.isMDXComponent=!0}}]);