"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[37238],{30021:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=s(74848),r=s(28453);const i={title:"\u53d1\u7248\u624b\u518c",keywords:["Seata"],description:"Release Guide."},t="\u53d1\u5e03\u624b\u518c",c={id:"developers/ppmc-guide/release-guide_dev",title:"\u53d1\u7248\u624b\u518c",description:"Release Guide.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/ppmc-guide/release-guide_dev.md",sourceDirName:"developers/ppmc-guide",slug:"/developers/ppmc-guide/release-guide_dev",permalink:"/zh-cn/docs/next/developers/ppmc-guide/release-guide_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/ppmc-guide/release-guide_dev.md",tags:[],version:"current",frontMatter:{title:"\u53d1\u7248\u624b\u518c",keywords:["Seata"],description:"Release Guide."},sidebar:"developers",previous:{title:"\u7f51\u7ad9\u5411\u5bfc",permalink:"/zh-cn/docs/next/developers/committer-guide/website-guide_dev"}},o={},h=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"1.1 Apache \u7248\u672c\u53d1\u5e03\u6587\u6863",id:"11-apache-\u7248\u672c\u53d1\u5e03\u6587\u6863",level:4},{value:"1.2 PGP \u7b7e\u540d",id:"12-pgp-\u7b7e\u540d",level:4},{value:"1.3 POM \u914d\u7f6e",id:"13-pom-\u914d\u7f6e",level:4},{value:"1.5 \u53d1\u5e03 Release Notes",id:"15-\u53d1\u5e03-release-notes",level:4},{value:"2.\u53d1\u5e03\u6d41\u7a0b",id:"2\u53d1\u5e03\u6d41\u7a0b",level:2},{value:"1. \u51c6\u5907\u5206\u652f",id:"1-\u51c6\u5907\u5206\u652f",level:3},{value:"2.\u9884\u53d1\u5e03\u4e8c\u8fdb\u5236\u5305",id:"2\u9884\u53d1\u5e03\u4e8c\u8fdb\u5236\u5305",level:3},{value:"2.1 SDK\u6839\u636e publishing maven artifacts [4] \u7684\u8bf4\u660e\u51c6\u5907\u53d1\u5e03\u3002",id:"21-sdk\u6839\u636e-publishing-maven-artifacts-4-\u7684\u8bf4\u660e\u51c6\u5907\u53d1\u5e03",level:4},{value:"2.2 Source&amp;Binary\u63d0\u4ea4\u81f3svn\u4ed3\u5e93",id:"22-sourcebinary\u63d0\u4ea4\u81f3svn\u4ed3\u5e93",level:4},{value:"2.2.1 \u5b89\u88c5svn",id:"221-\u5b89\u88c5svn",level:5},{value:"2.2.2 \u7f16\u8bd1seata-server\u53caseata-namingserver",id:"222-\u7f16\u8bd1seata-server\u53caseata-namingserver",level:5},{value:"2.2.3 \u5c06Source\u53caBinary\u8fdb\u884c\u7b7e\u540d",id:"223-\u5c06source\u53cabinary\u8fdb\u884c\u7b7e\u540d",level:5},{value:"2.2.4 \u62c9\u53d6svn\u81f3\u672c\u5730\uff0c\u5e76\u6784\u5efa\u53d1\u5e03\u7248\u672c\u8def\u5f84\uff0c\u5e76\u5c06\u7b7e\u540d\u6587\u4ef6\u53caSource\u548cBinary\u79fb\u5165\u5176\u4e2d",id:"224-\u62c9\u53d6svn\u81f3\u672c\u5730\u5e76\u6784\u5efa\u53d1\u5e03\u7248\u672c\u8def\u5f84\u5e76\u5c06\u7b7e\u540d\u6587\u4ef6\u53casource\u548cbinary\u79fb\u5165\u5176\u4e2d",level:5},{value:"2.3 \u521b\u5efatag\u53careleasenote",id:"23-\u521b\u5efatag\u53careleasenote",level:4},{value:"2.3.1 \u521b\u5efatag",id:"231-\u521b\u5efatag",level:5},{value:"2.3.2 \u521b\u5efarelease note",id:"232-\u521b\u5efarelease-note",level:5},{value:"3.\u6295\u7968\u9636\u6bb5",id:"3\u6295\u7968\u9636\u6bb5",level:3},{value:"3.1 \u793e\u533a\u5185\u90e8\u6295\u7968",id:"31-\u793e\u533a\u5185\u90e8\u6295\u7968",level:4},{value:"3.1.2 \u5b8c\u6210\u6295\u7968",id:"312-\u5b8c\u6210\u6295\u7968",level:4},{value:"3.2 \u5b75\u5316\u5668\u4e2d\u6295\u7968",id:"32-\u5b75\u5316\u5668\u4e2d\u6295\u7968",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u53d1\u5e03\u624b\u518c",children:"\u53d1\u5e03\u624b\u518c"}),"\n",(0,a.jsx)(n.h2,{id:"1-\u524d\u8a00",children:"1. \u524d\u8a00"}),"\n",(0,a.jsx)(n.h4,{id:"11-apache-\u7248\u672c\u53d1\u5e03\u6587\u6863",children:"1.1 Apache \u7248\u672c\u53d1\u5e03\u6587\u6863"}),"\n",(0,a.jsx)(n.p,{children:"\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\uff0c\u4e86\u89e3 ASF \u7248\u672c\u53d1\u5e03\u6d41\u7a0b\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://www.apache.org/dev/release-publishing",children:"Apache Release Guide"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://www.apache.org/dev/release.html",children:"Apache Release Policy"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://www.apache.org/dev/publishing-maven-artifacts.html",children:"Maven Release Info"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"12-pgp-\u7b7e\u540d",children:"1.2 PGP \u7b7e\u540d"}),"\n",(0,a.jsx)(n.p,{children:"\u9075\u5faa Apache \u7248\u672c\u53d1\u5e03\u6307\u5357\uff0c\u5bf9\u53d1\u5e03\u7248\u672c\u7b7e\u540d\uff0c\u7528\u6237\u4e5f\u53ef\u636e\u6b64\u5224\u65ad\u4e0b\u8f7d\u7684\u7248\u672c\u662f\u5426\u88ab\u7be1\u6539\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u521b\u5efa ",(0,a.jsx)(n.code,{children:"pgp"})," \u5bc6\u94a5\u7528\u4e8e\u7248\u672c\u7b7e\u540d\uff0c\u4f7f\u7528 ",(0,a.jsx)(n.strong,{children:"<your Apache ID>@apache.org"})," \u4f5c\u4e3a\u5bc6\u94a5 USER-ID"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/release-signing",children:"Apache Releases Signing documentation"}),"\uff0c",(0,a.jsx)(n.a,{href:"http://www.apache.org/dev/openpgp.html",children:"Cryptography with OpenPGP"})]}),"\n",(0,a.jsx)(n.p,{children:"\u751f\u6210\u5bc6\u94a5\u7684\u7b80\u8981\u6d41\u7a0b\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7",(0,a.jsx)(n.code,{children:" gpg --full-gen-key"})," \u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,a.jsx)(n.code,{children:"gpg"})," \u5bc6\u94a5, \u8bbe\u7f6e\u5bc6\u94a5\u957f\u5ea6\u4e3a 4096"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\uff1a\u53ef\u8bbe\u7f6e\u6c38\u4e0d\u8fc7\u671f\uff0c\u4e5f\u53ef\u6839\u636e\u81ea\u5df1\u9700\u6c42\u8bbe\u7f6e\u4e00\u5b9a\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u4f46\u9700\u8981\u5728\u8fc7\u671f\u540e\u66f4\u65b0\u7684\u516c\u94a5\u5230",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/seata/KEYS",children:"DEV KEYS file"})," \u548c ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/KEYS",children:"RELEASE KEYS file"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"gpg --keyserver keys.openpgp.org --send-key <your key id>"})," \u4e0a\u4f20\u5bc6\u94a5\u5230\u516c\u94a5\u670d\u52a1\u5668"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\uff1a\u5982\u82e5\u8bbf\u95ee\u4e0d\u901a\uff0c\u53ef\u901a\u8fc7",(0,a.jsx)(n.a,{href:"https://keyserver.ubuntu.com/",children:"OpenPGP Keyserver (ubuntu.com)"})," \u5728\u7ebf\u4e0a\u4f20\u516c\u94a5"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\u4f7f\u7528\u8be5\u547d\u4ee4\u53ef\u67e5\u5230keyid\u5982\uff1agpg --list-signatures --keyid-format LONG\npub   rsa4096/561507DBDD81E3D5 2024-09-19 [SC] [\u6709\u6548\u81f3\uff1a2027-09-19]\n      F2D3A28A392129B927C7FB42561507DBDD81E3D5\nuid                   [ \u7edd\u5bf9 ] jianbin.chen <jianbin@apache.org>\nsig 3        561507DBDD81E3D5 2024-09-19  [\u81ea\u7b7e\u540d]\nsub   rsa4096/07B6250EB8C9B2A0 2024-09-19 [E] [\u6709\u6548\u81f3\uff1a2027-09-19]\nsig          561507DBDD81E3D5 2024-09-19  [\u81ea\u7b7e\u540d]\n\u90a3\u4e48keyid\u4e3a561507DBDD81E3D5\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"gpg --armor --output ./public-key.txt --export 561507DBDD81E3D5"})," \u5bfc\u51fa\u516c\u94a5\u5230\u6587\u672c\u6587\u4ef6"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5c06\u751f\u6210\u7684\u5bc6\u94a5\u8ffd\u52a0\u5230",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/dev/incubator/seata/KEYS",children:"DEV KEYS file"})," \u548c ",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/KEYS",children:"RELEASE KEYS file"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,a.jsx)(n.p,{children:"DEV SVN \u4ed3\u5e93\u53ef\u4ee5\u7531 Release Manager \u81ea\u884c\u6dfb\u52a0\uff0cRelease SVN \u4ed3\u5e93\u9700\u8981 PMC \u6743\u9650\uff0c\u53ef\u4ee5\u7531 PMC \u534f\u52a9\u5c06 KEY \u8fdb\u884c\u4e0a\u4f20\u3002"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tips:"})," \u9700\u8981\u8bbe\u7f6e\u9ed8\u8ba4\u516c\u94a5, \u82e5\u6709\u591a\u4e2a\u516c\u94a5\uff0c\u8bf7\u4fee\u6539 ",(0,a.jsx)(n.code,{children:"~/.gnupg/gpg.conf"})]}),"\n",(0,a.jsx)(n.p,{children:"\u53c2\u8003\u793a\u4f8b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n  (1) RSA and RSA (default)\n  (2) DSA and Elgamal\n  (3) DSA (sign only)\n  (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n        0 = key does not expire\n     <n>  = key expires in n days\n     <n>w = key expires in n weeks\n     <n>m = key expires in n months\n     <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: \uff08\u8bbe\u7f6e\u7528\u6237\u540d\uff09(\u4f7f\u7528apache id)\nEmail address: \uff08\u8bbe\u7f6e\u90ae\u4ef6\u5730\u5740\uff09(\u4f7f\u7528apache\u90ae\u7bb1)\nComment: \uff08\u586b\u5199\u6ce8\u91ca\uff09\nYou selected this USER-ID:\n   "\u7528\u6237\u540d (\u6ce8\u91ca) <\u90ae\u4ef6\u5730\u5740>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. \uff08\u8bbe\u7f6e\u5bc6\u7801\uff09\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5c06\u751f\u6210\u7684\u516c\u94a5\u548c\u79c1\u94a5\u8f6c\u5316\u4e3a ASCII \u5f62\u5f0f\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"gpg --armor --output ./public-key.txt --export 561507DBDD81E3D5\ngpg --armor --output ./private-key.txt --export-secret-keys 561507DBDD81E3D5\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u67e5\u770b\u5bc6\u94a5\u5217\u8868\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[root@localhost ~]# gpg --list-signatures --keyid-format LONG\n[keyboxd]\n---------\npub   rsa4096/561507DBDD81E3D5 2024-09-19 [SC] [\u6709\u6548\u81f3\uff1a2027-09-19]\n      F2D3A28A392129B927C7FB42561507DBDD81E3D5\nuid                   [ \u7edd\u5bf9 ] jianbin.chen <jianbin@apache.org>\nsig 3        561507DBDD81E3D5 2024-09-19  [\u81ea\u7b7e\u540d]\nsub   rsa4096/07B6250EB8C9B2A0 2024-09-19 [E] [\u6709\u6548\u81f3\uff1a2027-09-19]\nsig          561507DBDD81E3D5 2024-09-19  [\u81ea\u7b7e\u540d]\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u4f20\u516c\u94a5\u5230\u516c\u94a5\u670d\u52a1\u5668"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[root@localhost gpgtest]# gpg --keyserver keys.openpgp.org --send-key 561507DBDD81E3D5\ngpg: sending key 561507DBDD81E3D5 to hkp server keys.openpgp.org\n\n"})}),"\n",(0,a.jsx)(n.h4,{id:"13-pom-\u914d\u7f6e",children:"1.3 POM \u914d\u7f6e"}),"\n",(0,a.jsx)(n.p,{children:"\u914d\u7f6e POM \u6587\u4ef6\uff0c\u4ee5\u4fbf\u5c06\u7248\u672c\u90e8\u7f72\u5230 ASF Nexus \u4ed3\u5e93\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u2460 \u6dfb\u52a0 Apache POM \u7ee7\u627f\u9ed8\u8ba4\u8bbe\u7f6e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"<parent>\n    <groupId>org.apache</groupId>\n    <artifactId>apache</artifactId>\n    <version>XX</version>\n</parent>\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u2461 Maven \u914d\u7f6e\u6587\u4ef6 ",(0,a.jsx)(n.code,{children:"settings.xml"})," \u4e2d\u6dfb\u52a0\u5bc6\u94a5\u4fe1\u606f"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"<settings>\n    <profiles>\n        <profile>\n            <id>signed_release</id>\n            <properties>\n                <mavenExecutorId>forked-path</mavenExecutorId>\n                <gpg.keyname>yourKeyName</gpg.keyname>\n          <deploy.url>https://dist.apache.org/repos/dist/dev/incubator/seata/</deploy.url>\n            </properties>\n        </profile>\n    </profiles>\n    <servers>\n        \x3c!-- To publish a snapshot of some part of Maven --\x3e\n        <server>\n            <id>apache.snapshots.https</id>\n            <username>yourApacheID</username>\n            \x3c!-- Use the password encryption by maven --\x3e\n            <password>yourApachePassword</password>\n        </server>\n        \x3c!-- To stage a release of some part of Maven --\x3e\n        <server>\n            <id>apache.releases.https</id>\n            <username>yourApacheID</username>\n            <password>yourApachePassword</password>\n        </server>\n        <server>\n            <id>gpg.passphrase</id>\n            <passphrase>yourKeyPassword</passphrase>\n        </server>\n    </servers>\n</settings>\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tips:"})," \u63a8\u8350\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"http://maven.apache.org/guides/mini/guide-encryption.html",children:"Maven's password encryption capabilities"})," \u52a0\u5bc6 ",(0,a.jsx)(n.code,{children:"gpg.passphrase"})]}),"\n",(0,a.jsx)(n.h4,{id:"15-\u53d1\u5e03-release-notes",children:"1.5 \u53d1\u5e03 Release Notes"}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7",(0,a.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/2.x/changes/zh-cn/2.x.md",children:"changelog"}),"\u6784\u5efa\u51fa\u5bf9\u5e94\u7248\u672c\u7684Release Notes"]}),"\n",(0,a.jsx)(n.h2,{id:"2\u53d1\u5e03\u6d41\u7a0b",children:"2.\u53d1\u5e03\u6d41\u7a0b"}),"\n",(0,a.jsx)(n.h3,{id:"1-\u51c6\u5907\u5206\u652f",children:"1. \u51c6\u5907\u5206\u652f"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ece\u4e3b\u5e72\u5206\u652f\u62c9\u53d6\u65b0\u5206\u652f\u4f5c\u4e3a\u53d1\u5e03\u5206\u652f\uff0c\u5982\u73b0\u5728\u8981\u53d1\u5e03 ",(0,a.jsx)(n.code,{children:"${release_version}"})," \u7248\u672c\uff0c\u5219\u4ece\u5f00\u53d1\u5206\u652f\u62c9\u51fa\u65b0\u5206\u652f ",(0,a.jsx)(n.code,{children:"${release_version}"}),"\uff0c\u6b64\u540e",(0,a.jsx)(n.code,{children:"${release_version}"})," Release Candidates \u6d89\u53ca\u7684\u4fee\u6539\u53ca\u6253\u6807\u7b7e\u7b49\u90fd\u5728",(0,a.jsx)(n.code,{children:"${release_version}"}),"\u5206\u652f\u8fdb\u884c\uff0c\u5e76\u4fdd\u8bc1\u8be5\u5206\u652f\u7684github actions ci\u5168\u90e8\u901a\u8fc7\uff0c\u6700\u7ec8\u53d1\u5e03\u5b8c\u6210\u540e\u5408\u5165\u4e3b\u5e72\u5206\u652f\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4f8b\uff1a\u5982 Java SDK \u9700\u8981\u53d1\u5e03 ",(0,a.jsx)(n.code,{children:"2.2.0"})," \u7248\u672c\uff0c\u4ece ",(0,a.jsx)(n.code,{children:"2.x"})," \u5206\u652f\u62c9\u51fa\u65b0\u5206\u652f ",(0,a.jsx)(n.code,{children:"2.2.0"}),"\uff0c\u5e76\u5728\u6b64\u5206\u652f\u63d0\u4ea4\u4ece Snapshot\u7248\u672c\u53f7 \u66ff\u6362\u4e3a ",(0,a.jsx)(n.code,{children:"2.2.0"})," \u7248\u672c\u53f7\u7684 commit\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"2\u9884\u53d1\u5e03\u4e8c\u8fdb\u5236\u5305",children:"2.\u9884\u53d1\u5e03\u4e8c\u8fdb\u5236\u5305"}),"\n",(0,a.jsxs)(n.h4,{id:"21-sdk\u6839\u636e-publishing-maven-artifacts-4-\u7684\u8bf4\u660e\u51c6\u5907\u53d1\u5e03",children:["2.1 SDK\u6839\u636e ",(0,a.jsx)(n.a,{href:"https://infra.apache.org/publishing-maven-artifacts.html",children:"publishing maven artifacts"})," [4] \u7684\u8bf4\u660e\u51c6\u5907\u53d1\u5e03\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mvn clean deploy -Prelease -DskipTests -e -B -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=warn\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64\u65f6\uff0cseata sdk\u88ab\u53d1\u5e03\u5230 ",(0,a.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"\u9884\u53d1\u4ed3\u5e93"})," \uff08\u9700\u8981apache\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\uff09\uff0c\u627e\u5230\u53d1\u5e03\u7684\u7248\u672c\uff0c\u5373 ",(0,a.jsx)(n.code,{children:"${STAGING.RELEASE}"}),"\uff0c \u5e76\u70b9\u51fb Close\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\uff1a\u5982\u679cclose\u5931\u8d25\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a\u7b7e\u540d\u7684\u79d8\u94a5\u5bf9\u5e94\u7684\u516c\u94a5\u5728keys.openpgp.org\u4e2d\u65e0\u6cd5\u83b7\u53d6\u5230\uff0c\u8bf7\u81ea\u884c\u901a\u8fc7",(0,a.jsx)(n.a,{href:"https://keyserver.ubuntu.com/",children:"OpenPGP Keyserver (ubuntu.com)"})," \u68c0\u67e5"]}),"\n",(0,a.jsx)(n.h4,{id:"22-sourcebinary\u63d0\u4ea4\u81f3svn\u4ed3\u5e93",children:"2.2 Source&Binary\u63d0\u4ea4\u81f3svn\u4ed3\u5e93"}),"\n",(0,a.jsx)(n.h5,{id:"221-\u5b89\u88c5svn",children:"2.2.1 \u5b89\u88c5svn"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5e76\u5b89\u88c5",(0,a.jsx)(n.a,{href:"https://subversion.apache.org/download.cgi#recommended-release",children:"Download Apache Subversion Sources"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u6216\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"brew install subversion"})," \u4e00\u952e\u5b89\u88c5"]}),"\n",(0,a.jsx)(n.h5,{id:"222-\u7f16\u8bd1seata-server\u53caseata-namingserver",children:"2.2.2 \u7f16\u8bd1seata-server\u53caseata-namingserver"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"mvn -Prelease-seata -Dmaven.test.skip=true -Dskip.npm=true -T4C -Dpmd.skip=true clean install -U"})}),"\n",(0,a.jsx)(n.h5,{id:"223-\u5c06source\u53cabinary\u8fdb\u884c\u7b7e\u540d",children:"2.2.3 \u5c06Source\u53caBinary\u8fdb\u884c\u7b7e\u540d"}),"\n",(0,a.jsx)(n.p,{children:"Source \u5efa\u8bae\u76f4\u63a5\u901a\u8fc7github \u5bf9\u5e94\u7248\u672c\u5206\u652f\u59822.2.0 \u8fdb\u884c\u4e0b\u8f7dzip\u5305\uff0c\u907f\u514d\u672c\u5730\u73af\u5883\u6c61\u67d3Source\u5305\u5185\u5bb9\uff0c\u7136\u540e\u91cd\u547d\u540d\u4e3aapache-seata-x.x.x-incubating-src.zip"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"shasum -b -a 512 apache-seata-x.x.x-incubating-src.zip >> apache-seata-x.x.x-incubating-src.zip.sha512 "})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"gpg --armor --output apache-seata-x.x.x-incubating-bin.zip.asc apache-seata-x.x.x-incubating-bin.zip"})}),"\n",(0,a.jsx)(n.p,{children:"Binary\u8fdb\u884c\u7b7e\u540d"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"shasum -b -a 512 apache-seata-x.x.x-incubating-bin.tar.gz >> apache-seata-x.x.x-incubating-bin.tar.gz.sha512"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"gpg --armor --output apache-seata-x.x.x-incubating-bin.tar.gz.asc apache-seata-x.x.x-incubating-bin.tar.gz"})}),"\n",(0,a.jsx)(n.p,{children:"sha512\u9a8c\u8bc1"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"shasum -c apache-seata-x.x.x-incubating-bin.tar.gz.sha512"})}),"\n",(0,a.jsx)(n.p,{children:"asc\u9a8c\u8bc1"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"gpg --verify  apache-seata-x.x.x-incubating-src.zip.asc apache-seata-x.x.x-incubating-src.zip"})}),"\n",(0,a.jsx)(n.h5,{id:"224-\u62c9\u53d6svn\u81f3\u672c\u5730\u5e76\u6784\u5efa\u53d1\u5e03\u7248\u672c\u8def\u5f84\u5e76\u5c06\u7b7e\u540d\u6587\u4ef6\u53casource\u548cbinary\u79fb\u5165\u5176\u4e2d",children:"2.2.4 \u62c9\u53d6svn\u81f3\u672c\u5730\uff0c\u5e76\u6784\u5efa\u53d1\u5e03\u7248\u672c\u8def\u5f84\uff0c\u5e76\u5c06\u7b7e\u540d\u6587\u4ef6\u53caSource\u548cBinary\u79fb\u5165\u5176\u4e2d"}),"\n",(0,a.jsx)(n.p,{children:"\u62c9\u53d6svn\u76ee\u5f55"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"svn co --depth=empty https://dist.apache.org/repos/dist/dev/incubator/seata/"})}),"\n",(0,a.jsx)(n.p,{children:"\u521b\u5efa\u53d1\u5e03\u7248\u672c\u8def\u5f84\uff0c\u5e76\u5c06\u6587\u4ef6\u79fb\u5165\u5176\u4e2d"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"cd seata"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"mkdir x.x.x"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"mv \u2026.. x.x.x"})}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u547d\u4ee4\uff0c\u79fb\u5165\u5176\u4e2d\u540e\u5927\u6982\u5982\u4e0b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-rw-r--r--@ 1 fe-work  staff   180M  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz\n-rw-r--r--@ 1 fe-work  staff   180M  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz.asc\n-rw-r--r--@ 1 fe-work  staff   187B  9 20 10:16 apache-seata-2.2.0-incubating-bin.tar.gz.sha512\n-rw-r--r--@ 1 fe-work  staff   6.7M  9 20 10:16 apache-seata-2.2.0-incubating-src.zip\n-rw-r--r--@ 1 fe-work  staff   6.7M  9 20 10:16 apache-seata-2.2.0-incubating-src.zip.asc\n-rw-r--r--  1 fe-work  staff   300B  9 20 10:16 apache-seata-2.2.0-incubating-src.zip.sha512\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u800c\u5176\u4e0a\u7ea7seata\u76ee\u5f55\u4e2d\u7684KEYS\u9700\u8981\u4fdd\u8bc1\u8ffd\u52a0\u4e86\u7b2c\u4e00\u6b65\u6240\u8bf4\u7684\uff0c\u5c06\u6784\u5efa\u7684\u516c\u94a5\u653e\u5165\u5176\u4e2d"}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"svn add x.x.x"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'svn commit -m "submit x.x.x version" '})}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u66f4\u65b0\u4e86KEYS \u9700\u8981\u5728commit\u4e4b\u524d\u6267\u884c ",(0,a.jsx)(n.code,{children:"svn update KEYS"})]}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884ccommit\u540e\u4f1a\u63d0\u793a\u8f93\u5165apache ldap\u8d26\u53f7\u5bc6\u7801\uff0c\u8f93\u5165\u540e\u5373\u53ef\u63d0\u4ea4\u6210\u529f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\u279c  seata svn commit -m 'submit 2.2.0 version'\n\u6b63\u5728\u589e\u52a0       2.2.0\n\u6b63\u5728\u589e\u52a0 (\u4e8c\u8fdb\u5236) 2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz\n\u6b63\u5728\u589e\u52a0 (\u4e8c\u8fdb\u5236) 2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz.asc\n\u6b63\u5728\u589e\u52a0       2.2.0/apache-seata-2.2.0-incubating-bin.tar.gz.sha512\n\u6b63\u5728\u589e\u52a0 (\u4e8c\u8fdb\u5236) 2.2.0/apache-seata-2.2.0-incubating-src.zip\n\u6b63\u5728\u589e\u52a0 (\u4e8c\u8fdb\u5236) 2.2.0/apache-seata-2.2.0-incubating-src.zip.asc\n\u6b63\u5728\u589e\u52a0       2.2.0/apache-seata-2.2.0-incubating-src.zip.sha512\n\u4f20\u8f93\u6587\u4ef6\u6570\u636e......done\n\u6b63\u5728\u8bfb\u53d6\u4e8b\u52a1\n\u63d0\u4ea4\u540e\u7684\u7248\u672c\u4e3a 71769\u3002\n"})}),"\n",(0,a.jsx)(n.h4,{id:"23-\u521b\u5efatag\u53careleasenote",children:"2.3 \u521b\u5efatag\u53careleasenote"}),"\n",(0,a.jsx)(n.h5,{id:"231-\u521b\u5efatag",children:"2.3.1 \u521b\u5efatag"}),"\n",(0,a.jsx)(n.p,{children:"\u5728x.x.x\u5206\u652f\u4e0b\u6267\u884c"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"git tag vx.x.x -m 'release: release for x.x.x'"})}),"\n",(0,a.jsx)(n.p,{children:"git push upstream(seata\u4ed3\u5e93repo) vx.x.x"}),"\n",(0,a.jsx)(n.h5,{id:"232-\u521b\u5efarelease-note",children:"2.3.2 \u521b\u5efarelease note"}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7\u8be5\u94fe\u63a5\u521b\u5efarelease note ",(0,a.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/releases/new",children:"New release \xb7 apache/incubator-seata (github.com)"})," \u5e76\u5c06Choose a tag\u8bbe\u7f6e\u4e3a\u5bf9\u5e94\u7684tag"]}),"\n",(0,a.jsx)(n.p,{children:"\u5e76\u8bbe\u7f6e\u4e3aSet as a pre-release \u6574\u4f53\u6295\u7968\u901a\u8fc7\u540e\u518d\u8bbe\u7f6e\u4e3aSet as the latest release"}),"\n",(0,a.jsx)(n.h3,{id:"3\u6295\u7968\u9636\u6bb5",children:"3.\u6295\u7968\u9636\u6bb5"}),"\n",(0,a.jsx)(n.h4,{id:"31-\u793e\u533a\u5185\u90e8\u6295\u7968",children:"3.1 \u793e\u533a\u5185\u90e8\u6295\u7968"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u6295\u7968\u6301\u7eed\u81f3\u5c11 72 \u5c0f\u65f6\u5e76\u83b7\u5f97 3 \u4e2a+1 binding\u7968"})}),"\n",(0,a.jsx)(n.p,{children:"\u53d1\u9001\u81f3\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"dev@seata.apache.org\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6807\u9898\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"[VOTE]Release Apache Seata (Incubating) x.x.x-RCN (RoundN) "})}),"\n",(0,a.jsx)(n.p,{children:"RC N\u548cRound N\u7684N\u4ee3\u8868\u6b21\u6570\uff0c\u8be5\u7248\u672c\u7684\u7b2c\u51e0\u6b21\u6295\u7968"}),"\n",(0,a.jsx)(n.p,{children:"\u6b63\u6587\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi Seata Community,\n\nThis is a call for vote to release Apache Seata(incubating) vx.x.x.\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/seata/x.x.x/\n\nThe staging repo:\nhttps://repository.apache.org/content/repositories/${STAGING.RELEASE}/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nHash for the release tag:\ntag\u5206\u652f\u6700\u540e\u4e00\u6761commit\u7684id\n\nRelease Notes:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nThe artifacts have been signed with Key [ key-id ], corresponding\nto\n[ \u90ae\u7bb1\u5982jianbin@apache.org ]\nwhich can be found in the keys file:\nhttps://downloads.apache.org/incubator/seata/KEYS\n\nBuild Environment: JDK 8+, Apache Maven 3.6.0+.\n/mvnw clean package -DskipTests=true\n\nCI Test Workflow:\n\u6d89\u53ca\u8be5\u7248\u672c\u6700\u540e\u4e00\u6b21commit\u7684\u591a\u4e2aCI\u6d41\u6c34\u7ebf\u94fe\u63a5\uff0c\u5982\nhttps://github.com/apache/incubator-seata/actions/runs/10938949607/job/30411922716\nhttps://github.com/apache/incubator-seata/actions/runs/10938949623/job/30410204492\nhttps://github.com/apache/incubator-seata/actions/runs/10938949605/job/30411747821\n\nThe vote will be open for at least 72 hours.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nTo learn more about Apache Seata , please see https://seata.apache.org/\n\n"})}),"\n",(0,a.jsx)(n.h4,{id:"312-\u5b8c\u6210\u6295\u7968",children:"3.1.2 \u5b8c\u6210\u6295\u7968"}),"\n",(0,a.jsx)(n.p,{children:"\u53d1\u5e03\u6295\u7968\u901a\u8fc7\u90ae\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hi Community,\n\n\nThe vote to release Apache Seata (Incubating) vx.x.x-RCN has passed\nwith 3 +1 binding votes, and no +0 or -1 votes.\n\n3 (+1 binding)\n\n- Jianbin Chen\n\n- Jiangke Wu\n\n- Jiawei Zhang\n\nno further 0 or -1 votes.\n\n\nThe vote thread:\n\u6240\u5bf9\u5e94\u6295\u7968\u90ae\u4ef6\u7684thread\u94fe\u63a5\uff0c\u5982:\nhttps://lists.apache.org/thread/rwco6lms9qo10whjj8gg1dr8j7drl2gf\n\nThank you for reviewing and voting for our release candidate.\n\nWe will soon launch the second stage of voting.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"32-\u5b75\u5316\u5668\u4e2d\u6295\u7968",children:"3.2 \u5b75\u5316\u5668\u4e2d\u6295\u7968"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0e\u793e\u533a\u6295\u7968\u7c7b\u4f3c\uff0c\u4f46\u662f\u9700\u8981\u589e\u52a0\u793e\u533a\u6295\u7968\u76f8\u5173\u7684thread\u94fe\u63a5\uff0c\u4ee5\u8bc1\u660e\u5df2\u5728\u793e\u533a\u5185\u8fbe\u6210\u4e00\u81f4"}),"\n",(0,a.jsxs)(n.p,{children:["\u53d1\u9001\u90ae\u4ef6\u81f3 ",(0,a.jsx)(n.code,{children:"general@incubator.apache.org"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello everyone,\n\nThis is a call for vote to release Apache Seata(incubating) vx.x.x\n\nThe Apache Fury community has voted and approved the release of Apache\nSeata(incubating) vx.x.x. We now kindly request the IPMC members\nreview and vote for this release.\n\n\nThe vote thread:\n\u793e\u533a\u4e2d\u6295\u7968\u7684thread\u94fe\u63a5, \u5982\uff1a\nhttps://lists.apache.org/thread/rwco6lms9qo10whjj8gg1dr8j7drl2gf\n\nVote Result:\n\u793e\u533a\u4e2d\u6295\u7968\u901a\u8fc7\u7684result thread\u94fe\u63a5\uff0c\u5982\uff1a\nhttps://lists.apache.org/thread/ybo9c5hrx2h2glg2bdgs3t22xg734y7r\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/seata/x.x.x/\n\nThe staging repo:\nhttps://repository.apache.org/content/repositories/${STAGING.RELEASE}/\n\nGit tag for the release:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nHash for the release tag:\ntag\u5206\u652f\u6700\u540e\u4e00\u6761commit\u7684id\n\nRelease Notes:\nhttps://github.com/apache/incubator-seata/releases/tag/vx.x.x\n\nThe artifacts have been signed with Key [ key-id ], corresponding\nto\n[ \u90ae\u7bb1\u5982jianbin@apache.org ]\nwhich can be found in the keys file:\nhttps://downloads.apache.org/incubator/seata/KEYS\n\nBuild Environment: JDK 8+, Apache Maven 3.6.0+.\n/mvnw clean package -DskipTests=true\n\nCI Test Workflow:\n\u6d89\u53ca\u8be5\u7248\u672c\u6700\u540e\u4e00\u6b21commit\u7684\u591a\u4e2aCI\u6d41\u6c34\u7ebf\u94fe\u63a5\uff0c\u5982\nhttps://github.com/apache/incubator-seata/actions/runs/10938949607/job/30411922716\nhttps://github.com/apache/incubator-seata/actions/runs/10938949623/job/30410204492\nhttps://github.com/apache/incubator-seata/actions/runs/10938949605/job/30411747821\n\nThe vote will be open for at least 72 hours.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nTo learn more about Apache Seata , please see https://seata.apache.org/\n"})}),"\n",(0,a.jsx)(n.h1,{id:"4\u5b8c\u6210\u53d1\u5e03",children:"4.\u5b8c\u6210\u53d1\u5e03"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4eceApache Nexus \u4ed3\u5e93, \u9009\u62e9\u4e4b\u524d\u8fdb\u884cclose\u8fc7\u7684\u7684 ",(0,a.jsx)(n.strong,{children:"orgapacheseata-XXX"})," \u70b9\u51fb ",(0,a.jsx)(n.code,{children:"Release"})," \u56fe\u6807\u53d1\u5e03"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5c06\u4e4b\u524d\u4e0a\u4f20\u5230SVN dev\u4e2d\u7684binary\u548csource\u91c7\u7528\u76f8\u540c\u7684\u65b9\u5f0f\uff0c\u62c9\u53d6",(0,a.jsx)(n.a,{href:"https://dist.apache.org/repos/dist/release/incubator/seata/",children:"https://dist.apache.org/repos/dist/release/incubator/seata/"}),"  \u7136\u540e\u5c06dev\u4e2d\u7684x.x.x\u79fb\u52a8\u5230release ,\u5e76\u5728dev\u4e2d\u6267\u884csvn delete x.x.x \u518dsvn commit \u63d0\u4ea4\u540e\u5220\u9664dev\u4e0b\u7684x.x.x\u3002\u518dcd \u81f3release\u4e2d\u7684seata\u901a\u8fc7svn add \u5c06x.x.x\u7248\u672c\u63d0\u4ea4\u81f3release\u8def\u5f84\u4e0b"]}),"\n",(0,a.jsx)(n.li,{children:"\u5c06\u4e4b\u524drelease note\u8bbe\u7f6e\u4e3aSet as the latest release\u5e76\u63d0\u4ea4"}),"\n",(0,a.jsx)(n.li,{children:"\u5c06x.x.x\u7684\u6587\u6863\u66f4\u65b0\u81f3seata\u5b98\u7f51\u4e2d\uff0c\u5e76\u8865\u5145\u5bf9\u5e94binary\u548csource\u7684\u4e0b\u8f7d\u94fe\u63a5"}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var a=s(96540);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);