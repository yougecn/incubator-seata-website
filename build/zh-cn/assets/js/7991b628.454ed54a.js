"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[36459],{42586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=r(74848),s=r(28453);const t={title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",keywords:["Seata \u4e8b\u52a1\u5206\u7ec4"],description:"Seata \u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528\u7684\u6700\u4f73\u5b9e\u8df5"},c="\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",i={id:"user/txgroup/transaction-group-and-ha",title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",description:"Seata \u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528\u7684\u6700\u4f73\u5b9e\u8df5",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/txgroup/transaction-group-and-ha.md",sourceDirName:"user/txgroup",slug:"/user/txgroup/transaction-group-and-ha",permalink:"/zh-cn/docs/user/txgroup/transaction-group-and-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/txgroup/transaction-group-and-ha.md",tags:[],version:"v2.1",frontMatter:{title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",keywords:["Seata \u4e8b\u52a1\u5206\u7ec4"],description:"Seata \u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528\u7684\u6700\u4f73\u5b9e\u8df5"}},o={},l=[{value:"\u6700\u4f73\u5b9e\u8df51\uff1aTC\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e",id:"\u6700\u4f73\u5b9e\u8df51tc\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e",level:2},{value:"\u6700\u4f73\u5b9e\u8df52\uff1a\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",id:"\u6700\u4f73\u5b9e\u8df52\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",level:2},{value:"\u6700\u4f73\u5b9e\u8df53\uff1aclient\u7684\u7cbe\u7ec6\u5316\u63a7\u5236",id:"\u6700\u4f73\u5b9e\u8df53client\u7684\u7cbe\u7ec6\u5316\u63a7\u5236",level:2},{value:"\u6700\u4f73\u5b9e\u8df54\uff1aSeata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb",id:"\u6700\u4f73\u5b9e\u8df54seata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",children:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528"}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df51tc\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e",children:"\u6700\u4f73\u5b9e\u8df51\uff1aTC\u7684\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5047\u5b9aTC\u96c6\u7fa4\u90e8\u7f72\u5728\u4e24\u4e2a\u673a\u623f\uff1aguangzhou\u673a\u623f\uff08\u4e3b\uff09\u548cshanghai\u673a\u623f\uff08\u5907\uff09\u5404\u4e24\u4e2a\u5b9e\u4f8b"}),"\n",(0,a.jsx)(n.li,{children:"\u4e00\u6574\u5957\u5fae\u670d\u52a1\u67b6\u6784\u9879\u76ee\uff1aprojectA"}),"\n",(0,a.jsx)(n.li,{children:"projectA\u5185\u6709\u5fae\u670d\u52a1\uff1aserviceA\u3001serviceB\u3001serviceC \u548c serviceD"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u4e2d\uff0cprojectA\u6240\u6709\u5fae\u670d\u52a1\u7684\u4e8b\u52a1\u5206\u7ec4tx-service-group\u8bbe\u7f6e\u4e3a\uff1aprojectA\uff0cprojectA\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f7f\u7528guangzhou\u7684TC\u96c6\u7fa4\uff08\u4e3b\uff09"}),"\n",(0,a.jsx)(n.p,{children:"\u90a3\u4e48\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0cclient\u7aef\u7684\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata.tx-service-group=projectA\nseata.service.vgroup-mapping.projectA=Guangzhou\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e\u6b63\u5e38\u56fe",src:r(73414).A+"",width:"812",height:"453"})}),"\n",(0,a.jsx)(n.p,{children:"\u5047\u5982\u6b64\u65f6guangzhou\u96c6\u7fa4\u5206\u7ec4\u6574\u4e2adown\u6389\uff0c\u6216\u8005\u56e0\u4e3a\u7f51\u7edc\u539f\u56e0projectA\u6682\u65f6\u65e0\u6cd5\u4e0eGuangzhou\u673a\u623f\u901a\u8baf\uff0c\u90a3\u4e48\u6211\u4eec\u5c06\u914d\u7f6e\u4e2d\u5fc3\u4e2d\u7684Guangzhou\u96c6\u7fa4\u5206\u7ec4\u6539\u4e3aShanghai\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata.service.vgroup-mapping.projectA=Shanghai\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5e76\u63a8\u9001\u5230\u5404\u4e2a\u5fae\u670d\u52a1\uff0c\u4fbf\u5b8c\u6210\u4e86\u5bf9\u6574\u4e2aprojectA\u9879\u76ee\u7684TC\u96c6\u7fa4\u52a8\u6001\u5207\u6362\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"\u5f02\u5730\u591a\u673a\u623f\u5bb9\u707e\u5907\u7528\u96c6\u7fa4",src:r(11977).A+"",width:"812",height:"453"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df52\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",children:"\u6700\u4f73\u5b9e\u8df52\uff1a\u5355\u4e00\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5047\u8bbe\u73b0\u5728\u5f00\u53d1\u73af\u5883\uff08\u6216\u9884\u53d1/\u751f\u4ea7\uff09\u4e2d\u5b58\u5728\u4e00\u6574\u5957seata\u96c6\u7fa4"}),"\n",(0,a.jsx)(n.li,{children:"seata\u96c6\u7fa4\u8981\u670d\u52a1\u4e8e\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u67b6\u6784\u9879\u76eeprojectA\u3001projectB\u3001projectC"}),"\n",(0,a.jsx)(n.li,{children:"projectA\u3001projectB\u3001projectC\u4e4b\u95f4\u76f8\u5bf9\u72ec\u7acb"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u5c06seata\u96c6\u7fa4\u4e2d\u7684\u516d\u4e2a\u5b9e\u4f8b\u4e24\u4e24\u5206\u7ec4\uff0c\u4f7f\u5176\u5206\u522b\u670d\u52a1\u4e8eprojectA\u3001projectB\u4e0eprojectC\uff0c\u90a3\u4e48\u6b64\u65f6seata-server\u7aef\u7684\u914d\u7f6e\u5982\u4e0b\uff08\u4ee5nacos\u6ce8\u518c\u4e2d\u5fc3\u4e3a\u4f8b\uff09\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    #\u540c\u7406\u5728\u5176\u4ed6\u51e0\u4e2a\u5206\u7ec4seata-server\u5b9e\u4f8b\u914d\u7f6e project-b-group / project-c-group\n    cluster = "project-a-group"\n    username = "username"\n    password = "password"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"client\u7aef\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata.tx-service-group=projectA\n#\u540c\u7406\uff0cprojectB\u4e0eprojectC\u914d\u7f6e project-b-group / project-c-group\nseata.service.vgroup-mapping.projectA=project-a-group\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5b8c\u6210\u914d\u7f6e\u542f\u52a8\u540e\uff0c\u5bf9\u5e94\u4e8b\u52a1\u5206\u7ec4\u7684TC\u5355\u72ec\u4e3a\u5176\u5e94\u7528\u670d\u52a1\uff0c\u6574\u4f53\u90e8\u7f72\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"\u5355\u73af\u5883\u591a\u5e94\u7528\u63a5\u5165",src:r(28144).A+"",width:"1360",height:"455"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df53client\u7684\u7cbe\u7ec6\u5316\u63a7\u5236",children:"\u6700\u4f73\u5b9e\u8df53\uff1aclient\u7684\u7cbe\u7ec6\u5316\u63a7\u5236"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5047\u5b9a\u73b0\u5728\u5b58\u5728seata\u96c6\u7fa4\uff0cGuangzhou\u673a\u623f\u5b9e\u4f8b\u8fd0\u884c\u5728\u6027\u80fd\u8f83\u9ad8\u7684\u673a\u5668\u4e0a\uff0cShanghai\u96c6\u7fa4\u8fd0\u884c\u5728\u6027\u80fd\u8f83\u5dee\u7684\u673a\u5668\u4e0a"}),"\n",(0,a.jsx)(n.li,{children:"\u73b0\u5b58\u5fae\u670d\u52a1\u67b6\u6784\u9879\u76eeprojectA\u3001projectA\u4e2d\u6709\u5fae\u670d\u52a1ServiceA\u3001ServiceB\u3001ServiceC\u4e0eServiceD"}),"\n",(0,a.jsx)(n.li,{children:"\u5176\u4e2dServiceD\u7684\u6d41\u91cf\u8f83\u5c0f\uff0c\u5176\u4f59\u5fae\u670d\u52a1\u6d41\u91cf\u8f83\u5927"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u90a3\u4e48\u6b64\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06ServiceD\u5fae\u670d\u52a1\u5f15\u6d41\u5230Shanghai\u96c6\u7fa4\u4e2d\u53bb\uff0c\u5c06\u9ad8\u6027\u80fd\u7684\u670d\u52a1\u5668\u8ba9\u7ed9\u5176\u4f59\u6d41\u91cf\u8f83\u5927\u7684\u5fae\u670d\u52a1\uff08\u53cd\u4e4b\u4ea6\u7136\uff0c\u82e5\u5b58\u5728\u67d0\u4e00\u4e2a\u5fae\u670d\u52a1\u6d41\u91cf\u7279\u522b\u5927\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5355\u72ec\u4e3a\u6b64\u5fae\u670d\u52a1\u5f00\u8f9f\u4e00\u4e2a\u66f4\u9ad8\u6027\u80fd\u7684\u96c6\u7fa4\uff0c\u5e76\u5c06\u8be5client\u7684virtual group\u6307\u5411\u8be5\u96c6\u7fa4\uff0c\u5176\u6700\u7ec8\u76ee\u7684\u90fd\u662f\u4fdd\u8bc1\u5728\u6d41\u91cf\u6d2a\u5cf0\u65f6\u670d\u52a1\u7684\u53ef\u7528\uff09"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"client\u7cbe\u7ec6\u5316\u63a7\u5236",src:r(59680).A+"",width:"812",height:"453"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df54seata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb",children:"\u6700\u4f73\u5b9e\u8df54\uff1aSeata\u7684\u9884\u53d1\u4e0e\u751f\u4ea7\u9694\u79bb"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u9884\u53d1\u73af\u5883\u4e0e\u751f\u4ea7\u73af\u5883\u4f1a\u4f7f\u7528\u540c\u4e00\u5957\u6570\u636e\u5e93\u3002\u57fa\u4e8e\u8fd9\u4e2a\u6761\u4ef6\uff0c\u9884\u53d1TC\u96c6\u7fa4\u4e0e\u751f\u4ea7TC\u96c6\u7fa4\u5fc5\u987b\u4f7f\u7528\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4fdd\u8bc1\u5168\u5c40\u4e8b\u52a1\u7684\u751f\u6548\uff08\u5373\u751f\u4ea7TC\u96c6\u7fa4\u4e0e\u9884\u53d1TC\u96c6\u7fa4\u4f7f\u7528\u540c\u4e00\u4e2alock\u8868\uff0c\u5e76\u4f7f\u7528\u4e0d\u540c\u7684branch_table\u4e0eglobal_table\u7684\u60c5\u51b5\uff09"}),"\n",(0,a.jsx)(n.li,{children:"\u6211\u4eec\u8bb0\u751f\u4ea7\u4f7f\u7528\u7684branch\u8868\u4e0eglobal\u8868\u5206\u522b\u4e3a\uff1aglobal_table\u4e0ebranch_table\uff1b\u9884\u53d1\u4e3aglobal_table_pre\uff0cbranch_table_pre"}),"\n",(0,a.jsx)(n.li,{children:"\u9884\u53d1\u4e0e\u751f\u4ea7\u5171\u7528lock_table"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6b64\u65f6\uff0cseata-server\u7684 file.conf \u914d\u7f6e\u5982\u4e0b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'store {\n  mode = "db"\n\n  db {\n    datasource = "druid"\n    dbType = "mysql"\n    driverClassName = "com.mysql.jdbc.Driver"\n    url = "jdbc:mysql://127.0.0.1:3306/seata"\n    user = "username"\n    password = "password"\n    minConn = 5\n    maxConn = 100\n    globalTable = "global_table"  ----\x3e \u9884\u53d1\u4e3a "global_table_pre"\n    branchTable = "branch_table"  ----\x3e \u9884\u53d1\u4e3a "branch_table_pre"\n    lockTable = "lock_table"\n    queryLimit = 100\n    maxWait = 5000\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"seata-server\u7684 registry.conf \u914d\u7f6e\u5982\u4e0b\uff08\u4ee5nacos\u4e3a\u4f8b\uff09"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'registry {\n  type = "nacos"\n  loadBalance = "RandomLoadBalance"\n  loadBalanceVirtualNodes = 10\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "127.0.0.1:8848"\n    group = "DEFAULT_GROUP"\n    namespace = "8f11aeb1-5042-461b-b88b-d47a7f7e01c0"\n    cluster = "pre-product"  --\x3e\u540c\u7406\u751f\u4ea7\u4e3a "product"\n    username = "username"\n    password = "password"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u90e8\u7f72\u56fe\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"\u9884\u53d1\u751f\u4ea7\u9694\u79bb",src:r(69701).A+"",width:"907",height:"596"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0d\u4ec5\u5982\u6b64\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06\u4ee5\u4e0a\u56db\u4e2a\u6700\u4f73\u5b9e\u8df5\u4f9d\u636e\u4f60\u7684\u5b9e\u9645\u751f\u4ea7\u60c5\u51b5\u7ec4\u5408\u642d\u914d\u4f7f\u7528\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},59680:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/txgroup-client-controll-77862cb1429597eb3ec1d69608679ba4.png"},28144:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/txgroup-multiApplication-501b8688ae442af2ce6a4db7abb3520d.png"},73414:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/txgroup-normal-698f00d26b96414c46c7c27729e61134.png"},69701:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/txgroup-segregation-of-pre-and-product-892ff6085c837f3283b0e702deb96d7c.png"},11977:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/txgroup-switch-to-sh-fbe3bf2c89a16e158fef5d582655c3f9.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var a=r(96540);const s={},t=a.createContext(s);function c(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);