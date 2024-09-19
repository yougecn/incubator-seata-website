"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[34989],{94451:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(74848),t=s(28453);const c={title:"Consul \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Consul"],description:"Consul \u6ce8\u518c\u4e2d\u5fc3\u3002"},o="Consul \u6ce8\u518c\u4e2d\u5fc3",i={id:"user/registry/consul",title:"Consul \u6ce8\u518c\u4e2d\u5fc3",description:"Consul \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.0/user/registry/consul.md",sourceDirName:"user/registry",slug:"/user/registry/consul",permalink:"/zh-cn/docs/v2.0/user/registry/consul",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.0/user/registry/consul.md",tags:[],version:"v2.0",frontMatter:{title:"Consul \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Consul"],description:"Consul \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v2.0/user/registry/etcd3"},next:{title:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v2.0/user/registry/zookeeper"}},l={},a=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Client \u7aef\u589e\u52a0 Maven \u4f9d\u8d56",id:"client-\u7aef\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e",id:"client\u7aef\u914d\u7f6e",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"consul-\u6ce8\u518c\u4e2d\u5fc3",children:"Consul \u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,r.jsx)(n.p,{children:"Consul \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u57fa\u4e8e Seata 1.4.2\uff0c\u628a Seata \u6ce8\u518c\u5230 Consul \u4e0a\uff0c\u4ee5 file \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,r.jsx)(n.p,{children:"Consul \u7248\u672c\u5efa\u8bae 1.8+\uff0c\u4e0b\u6587\u4ee5 Consul 1.11.2 \u4e3a\u4f8b"}),"\n",(0,r.jsx)(n.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u60a8\u51c6\u5907\u5c06 ",(0,r.jsx)(n.strong,{children:"Seata"})," \u6ce8\u518c\u5230 Consul \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u542f\u52a8 Consul \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Consul \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\n\u53ef\u5148\u884c\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://www.consul.io/docs",children:"Consul \u5b98\u65b9\u6587\u6863"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u53ea\u60f3\u5feb\u901f\u4f53\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b docker \u547d\u4ee4\u542f\u52a8\u4e00\u4e2a Consul \u5bb9\u5668\uff0c\u8f93\u5165 ",(0,r.jsx)(n.a,{href:"http://localhost:8500",children:"http://localhost:8500"})," \u8bbf\u95ee Consul \u63a7\u5236\u53f0"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -d --name=consul -p 8500:8500 -p 8600:8600/udp consul:1.11.2 agent -dev -client=0.0.0.0 -ui\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,r.jsx)(n.p,{children:"Seata \u878d\u5408 Consul \u6ce8\u518c\u4e2d\u5fc3\u7684\u975e\u5e38\u7b80\u5355\uff0c\u5206 Server \u7aef\u548c Client \u7aef"}),"\n",(0,r.jsx)(n.p,{children:"Server \u7aef\u53ea\u9700\u8981\u914d\u7f6e\u201c\u6ce8\u518c\u4e2d\u5fc3\u201d"}),"\n",(0,r.jsx)(n.p,{children:"Client \u7aef\u5219\u9700\u8981\u589e\u52a0 Maven \u4f9d\u8d56\u4ee5\u53ca\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h3,{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u8f7d ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/releases/tag/v1.4.2",children:"Seata 1.4.2 release"})," \u5e76\u89e3\u538b"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 /conf/registry.conf \u4e2d\u4fee\u6539\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5176\u4f59",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/conf/registry.conf",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "consul"\n\n  consul {\n    # \u6ce8\u518c\u5230 Consul \u4e0a\u7684\u96c6\u7fa4\u540d\u79f0\uff0c\u9ed8\u8ba4\u662f default\n    cluster = "default"\n    serverAddr = "127.0.0.1:8500"\n    aclToken = ""\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c /bin/seata-server.bat (Windows) \u6216 /bin/seata-server.sh (Unix) \u542f\u52a8 Seata\uff0c\u670d\u52a1\u5c06\u8fd0\u884c\u5728\u672c\u5730 8091 \u7aef\u53e3\u4e0a"}),"\n",(0,r.jsx)(n.p,{children:"\u8fdb\u5165 Consul \u63a7\u5236\u53f0\uff0c\u67e5\u770b Seata \u662f\u5426\u6ce8\u518c\u6210\u529f"}),"\n",(0,r.jsx)(n.h3,{id:"client-\u7aef\u589e\u52a0-maven-\u4f9d\u8d56",children:"Client \u7aef\u589e\u52a0 Maven \u4f9d\u8d56"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ee5 SpringBoot \u9879\u76ee\u4e3a\u4f8b\uff0c\u5728\u9879\u76ee pom.xml \u4e2d\u52a0\u5165"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248\uff08Seata\u7248\u672c\uff09</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"client\u7aef\u914d\u7f6e",children:"Client\u7aef\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 application.yml \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5176\u4f59",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"seata:\n  registry:\n    consul:\n      server-addr: 127.0.0.1:8500\n  # \u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\uff0c1.4.2 \u9ed8\u8ba4\u540d\u79f0\u4e3a my_test_tx_group \uff0c1.5\u7248\u672c\u5c06\u6539\u4e3a default_tx_group\n  # \u6709\u5173\u4e8b\u52a1\u5206\u7ec4\uff0c\u8bf7\u53c2\u8003 https://seata.apache.org/zh-cn/docs/user/txgroup/transaction-group/\n  tx-service-group: my_test_tx_group\n  service:\n    # \u4e8b\u52a1\u5206\u7ec4\u4e0e\u96c6\u7fa4\u6620\u5c04\u5173\u7cfb\n    vgroup-mapping:\n      my_test_tx_group: default\n"})}),"\n",(0,r.jsx)(n.p,{children:"Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5e76\u7a0d\u5f85\u7247\u523b\uff0c\u51fa\u73b0\u4ee5\u4e0b\u540e\u65e5\u5fd7\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"register TM success. client version:1.4.2, server version:1.4.2,channel:[id: 0xa4675e28, L:/127.0.0.1:8238 - R:/127.0.0.1:8091]\nregister RM success. client version:1.4.2, server version:1.4.2,channel:[id: 0x408192d3, L:/127.0.0.1:8237 - R:/127.0.0.1:8091]\nregister success, cost 94 ms, version:1.4.2,role:RMROLE,channel:[id: 0x408192d3, L:/127.0.0.1:8237 - R:/127.0.0.1:8091]\nregister success, cost 94 ms, version:1.4.2,role:TMROLE,channel:[id: 0xa4675e28, L:/127.0.0.1:8238 - R:/127.0.0.1:8091]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(96540);const t={},c=r.createContext(t);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);