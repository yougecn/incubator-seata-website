"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[34673],{56639:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(74848),s=n(28453);const r={title:"Contributing to Seata",keywords:["Seata"],description:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."},o="Contributing to Seata",a={id:"developers/guide_dev",title:"Contributing to Seata",description:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/developers/guide_dev.md",sourceDirName:"developers",slug:"/developers/guide_dev",permalink:"/docs/developers/guide_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/developers/guide_dev.md",tags:[],version:"v2.1",frontMatter:{title:"Contributing to Seata",keywords:["Seata"],description:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."}},l={},c=[{value:"Topics",id:"topics",level:2},{value:"Reporting security issues",id:"reporting-security-issues",level:2},{value:"Reporting general issues",id:"reporting-general-issues",level:2},{value:"Code and doc contribution",id:"code-and-doc-contribution",level:2},{value:"Workspace Preparation",id:"workspace-preparation",level:3},{value:"Branch Definition",id:"branch-definition",level:3},{value:"Commit Rules",id:"commit-rules",level:3},{value:"Commit Message",id:"commit-message",level:4},{value:"Commit Content",id:"commit-content",level:4},{value:"PR Description",id:"pr-description",level:3},{value:"Test case contribution",id:"test-case-contribution",level:2},{value:"Engage to help anything",id:"engage-to-help-anything",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Guidelines",id:"guidelines",level:3},{value:"IDE Plugin Install\uff08not necessary\uff09",id:"ide-plugin-installnot-necessary",level:3},{value:"idea IDE",id:"idea-ide",level:4},{value:"eclipse IDE",id:"eclipse-ide",level:4}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"contributing-to-seata",children:"Contributing to Seata"}),"\n",(0,t.jsx)(i.p,{children:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."}),"\n",(0,t.jsx)(i.h2,{id:"topics",children:"Topics"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#reporting-security-issues",children:"Reporting security issues"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#reporting-general-issues",children:"Reporting general issues"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#code-and-doc-contribution",children:"Code and doc contribution"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#test-case-contribution",children:"Test case contribution"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#engage-to-help-anything",children:"Engage to help anything"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#code-style",children:"Code Style"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"reporting-security-issues",children:"Reporting security issues"}),"\n",(0,t.jsxs)(i.p,{children:["Security issues are always treated seriously. As our usual principle, we discourage anyone to spread security issues. If you find a security issue of Seata, please do not discuss it in public and even do not open a public issue. Instead we encourage you to send us a private email to  ",(0,t.jsx)(i.a,{href:"mailto:private@seata.apache.org",children:"private@seata.apache.org"})," to report this."]}),"\n",(0,t.jsx)(i.h2,{id:"reporting-general-issues",children:"Reporting general issues"}),"\n",(0,t.jsxs)(i.p,{children:["To be honest, we regard every user of Seata as a very kind contributor. After experiencing Seata, you may have some feedback for the project. Then feel free to open an issue via ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/issues/new/choose",children:"NEW ISSUE"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Since we collaborate project Seata in a distributed way, we appreciate ",(0,t.jsx)(i.strong,{children:"WELL-WRITTEN"}),", ",(0,t.jsx)(i.strong,{children:"DETAILED"}),", ",(0,t.jsx)(i.strong,{children:"EXPLICIT"})," issue reports. To make the communication more efficient, we wish everyone could search if your issue is an existing one in the searching list. If you find it existing, please add your details in comments under the existing issue instead of opening a brand new one."]}),"\n",(0,t.jsxs)(i.p,{children:["To make the issue details as standard as possible, we setup an ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/blob/develop/.github/ISSUE_TEMPLATE",children:"ISSUE TEMPLATE"})," for issue reporters. Please ",(0,t.jsx)(i.strong,{children:"BE SURE"})," to follow the instructions to fill fields in template."]}),"\n",(0,t.jsx)(i.p,{children:"There are a lot of cases when you could open an issue:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"bug report"}),"\n",(0,t.jsx)(i.li,{children:"feature request"}),"\n",(0,t.jsx)(i.li,{children:"performance issues"}),"\n",(0,t.jsx)(i.li,{children:"feature proposal"}),"\n",(0,t.jsx)(i.li,{children:"feature design"}),"\n",(0,t.jsx)(i.li,{children:"help wanted"}),"\n",(0,t.jsx)(i.li,{children:"doc incomplete"}),"\n",(0,t.jsx)(i.li,{children:"test improvement"}),"\n",(0,t.jsx)(i.li,{children:"any questions on project"}),"\n",(0,t.jsx)(i.li,{children:"and so on"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Also we must remind that when filling a new issue, please remember to remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on."}),"\n",(0,t.jsx)(i.h2,{id:"code-and-doc-contribution",children:"Code and doc contribution"}),"\n",(0,t.jsx)(i.p,{children:"Every action to make project Seata better is encouraged. On GitHub, every improvement for Seata could be via a PR (short for pull request)."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If you find a typo, try to fix it!"}),"\n",(0,t.jsx)(i.li,{children:"If you find a bug, try to fix it!"}),"\n",(0,t.jsx)(i.li,{children:"If you find some redundant codes, try to remove them!"}),"\n",(0,t.jsx)(i.li,{children:"If you find some test cases missing, try to add them!"}),"\n",(0,t.jsxs)(i.li,{children:["If you could enhance a feature, please ",(0,t.jsx)(i.strong,{children:"DO NOT"})," hesitate!"]}),"\n",(0,t.jsx)(i.li,{children:"If you find code implicit, try to add comments to make it clear!"}),"\n",(0,t.jsx)(i.li,{children:"If you find code ugly, try to refactor that!"}),"\n",(0,t.jsx)(i.li,{children:"If you can help to improve documents, it could not be better!"}),"\n",(0,t.jsx)(i.li,{children:"If you find document incorrect, just do it and fix that!"}),"\n",(0,t.jsx)(i.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Actually it is impossible to list them completely. Just remember one principle:"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"WE ARE LOOKING FORWARD TO ANY PR FROM YOU."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Since you are ready to improve Seata with a PR, we suggest you could take a look at the PR rules here."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#workspace-preparation",children:"Workspace Preparation"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#branch-definition",children:"Branch Definition"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#commit-rules",children:"Commit Rules"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#pr-description",children:"PR Description"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"workspace-preparation",children:"Workspace Preparation"}),"\n",(0,t.jsx)(i.p,{children:"To put forward a PR, we assume you have registered a GitHub ID. Then you could finish the preparation in the following steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"FORK"})," Seata to your repository. To make this work, you just need to click the button Fork in right-left of ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-seata",children:"apache/incubator-seata"})," main page. Then you will end up with your repository in ",(0,t.jsx)(i.code,{children:"https://github.com/<your-username>/incubator-seata"}),", in which ",(0,t.jsx)(i.code,{children:"your-username"})," is your GitHub username."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"CLONE"})," your own repository to develop locally. Use ",(0,t.jsx)(i.code,{children:"git clone git@github.com:<your-username>/seata.git"})," to clone repository to your local machine. Then you can create new branches to finish the change you wish to make."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Set Remote"})," upstream to be ",(0,t.jsx)(i.code,{children:"git@github.com:apache/incubator-seata.git"})," using the following two commands:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"git remote add upstream git@github.com:apache/incubator-seata.git\ngit remote set-url --push upstream no-pushing\n"})}),"\n",(0,t.jsx)(i.p,{children:"With this remote setting, you can check your git remote configuration like this:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"$ git remote -v\norigin     git@github.com:<your-username>/seata.git (fetch)\norigin     git@github.com:<your-username>/seata.git (push)\nupstream   git@github.com:apache/incubator-seata.git (fetch)\nupstream   no-pushing (push)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Adding this, we can easily synchronize local branches with upstream branches."}),"\n",(0,t.jsx)(i.h3,{id:"branch-definition",children:"Branch Definition"}),"\n",(0,t.jsxs)(i.p,{children:["Right now we assume every contribution via pull request is for ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/tree/develop",children:"branch develop"})," in Seata. Before contributing, be aware of branch definition would help a lot."]}),"\n",(0,t.jsx)(i.p,{children:"As a contributor, keep in mind again that every contribution via pull request is for branch develop. While in project Seata, there are several other branches, we generally call them release branches(such as 0.6.0,0.6.1), feature branches, hotfix branches and master branch."}),"\n",(0,t.jsx)(i.p,{children:"When officially releasing a version, there will be a release branch and named with the version number."}),"\n",(0,t.jsx)(i.p,{children:"After the release, we will merge the commit of the release branch into the master branch."}),"\n",(0,t.jsx)(i.p,{children:"When we find that there is a bug in a certain version, we will decide to fix it in a later version or fix it in a specific hotfix version. When we decide to fix the hotfix version, we will checkout the hotfix branch based on the corresponding release branch, perform code repair and verification, and merge it into the develop branch and the master branch."}),"\n",(0,t.jsx)(i.p,{children:"For larger features, we will pull out the feature branch for development and verification."}),"\n",(0,t.jsx)(i.h3,{id:"commit-rules",children:"Commit Rules"}),"\n",(0,t.jsx)(i.p,{children:"Actually in Seata, we take two rules serious when committing:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#commit-message",children:"Commit Message"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#commit-content",children:"Commit Content"})}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"commit-message",children:"Commit Message"}),"\n",(0,t.jsxs)(i.p,{children:["Commit message could help reviewers better understand what is the purpose of submitted PR. It could help accelerate the code review procedure as well. We encourage contributors to use ",(0,t.jsx)(i.strong,{children:"EXPLICIT"})," commit message rather than ambiguous message. In general, we advocate the following commit message type:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'docs: xxxx. For example, "docs: add docs about Seata cluster installation".'}),"\n",(0,t.jsx)(i.li,{children:'feature: xxxx.For example, "feature: support oracle in AT mode".'}),"\n",(0,t.jsx)(i.li,{children:'bugfix: xxxx. For example, "bugfix: fix panic when input nil parameter".'}),"\n",(0,t.jsx)(i.li,{children:'refactor: xxxx. For example, "refactor: simplify to make codes more readable".'}),"\n",(0,t.jsx)(i.li,{children:'test: xxx. For example, "test: add unit test case for func InsertIntoArray".'}),"\n",(0,t.jsx)(i.li,{children:"other readable and explicit expression ways."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"On the other side, we discourage contributors from committing message like the following ways:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.del,{children:"fix bug"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.del,{children:"update"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.del,{children:"add doc"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["If you get lost, please see ",(0,t.jsx)(i.a,{href:"http://chris.beams.io/posts/git-commit/",children:"How to Write a Git Commit Message"})," for a start."]}),"\n",(0,t.jsx)(i.h4,{id:"commit-content",children:"Commit Content"}),"\n",(0,t.jsx)(i.p,{children:"Commit content represents all content changes included in one commit. We had better include things in one single commit which could support reviewer's complete review without any other commits' help. In another word, contents in one single commit can pass the CI to avoid code mess. In brief, there are three minor rules for us to keep in mind:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"avoid very large change in a commit;"}),"\n",(0,t.jsx)(i.li,{children:"complete and reviewable for each commit."}),"\n",(0,t.jsxs)(i.li,{children:["check git config(",(0,t.jsx)(i.code,{children:"user.name"}),", ",(0,t.jsx)(i.code,{children:"user.email"}),") when committing to ensure that it is associated with your github ID."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["In addition, in the code change part, we suggest that all contributors should read the ",(0,t.jsx)(i.a,{href:"#code-style",children:"code style of Seata"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"No matter commit message, or commit content, we do take more emphasis on code review."}),"\n",(0,t.jsx)(i.h3,{id:"pr-description",children:"PR Description"}),"\n",(0,t.jsxs)(i.p,{children:["PR is the only way to make change to Seata project files. To help reviewers better get your purpose, PR description could not be too detailed. We encourage contributors to follow the ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md",children:"PR template"})," to finish the pull request."]}),"\n",(0,t.jsx)(i.h2,{id:"test-case-contribution",children:"Test case contribution"}),"\n",(0,t.jsx)(i.p,{children:"Any test case would be welcomed. Currently, Seata function test cases are high priority."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["For unit test, you need to create a test file named ",(0,t.jsx)(i.code,{children:"xxxTest.java"})," in the test directory of the same module. Recommend you to use the junit5 UT framework"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"For integration test, you can put the integration test in the test directory or the seata-test module. It is recommended to use the mockito test framework."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"engage-to-help-anything",children:"Engage to help anything"}),"\n",(0,t.jsx)(i.p,{children:"We choose GitHub as the primary place for Seata to collaborate. So the latest updates of Seata are always here. Although contributions via PR is an explicit way to help, we still call for any other ways."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"reply to other's issues if you could;"}),"\n",(0,t.jsx)(i.li,{children:"help solve other user's problems;"}),"\n",(0,t.jsx)(i.li,{children:"help review other's PR design;"}),"\n",(0,t.jsx)(i.li,{children:"help review other's codes in PR;"}),"\n",(0,t.jsx)(i.li,{children:"discuss about Seata to make things clearer;"}),"\n",(0,t.jsx)(i.li,{children:"advocate Seata technology beyond GitHub;"}),"\n",(0,t.jsx)(i.li,{children:"write blogs on Seata and so on."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"code-style",children:"Code Style"}),"\n",(0,t.jsx)(i.p,{children:"Seata code style Comply with Alibaba Java Coding Guidelines."}),"\n",(0,t.jsx)(i.h3,{id:"guidelines",children:"Guidelines"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/",children:"Alibaba-Java-Coding-Guidelines"})}),"\n",(0,t.jsx)(i.h3,{id:"ide-plugin-installnot-necessary",children:"IDE Plugin Install\uff08not necessary\uff09"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"It is not necessary to install, if you want to find a problem when you are coding."})}),"\n",(0,t.jsx)(i.h4,{id:"idea-ide",children:"idea IDE"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/alibaba/p3c/blob/master/idea-plugin/README.md",children:"p3c-idea-plugin-install"})}),"\n",(0,t.jsx)(i.h4,{id:"eclipse-ide",children:"eclipse IDE"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/alibaba/p3c/blob/master/eclipse-plugin/README.md",children:"p3c-eclipse-plugin-install"})}),"\n",(0,t.jsxs)(i.p,{children:["In a word, ",(0,t.jsx)(i.strong,{children:"ANY HELP IS CONTRIBUTION."})]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);