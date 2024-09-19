"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[86444],{39012:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v2.1","label":"v2.1","banner":null,"badge":true,"noIndex":false,"className":"docs-version-v2.1","isLast":true,"docsSidebars":{},"docs":{"dev/domain/overviewDomainModel":{"id":"dev/domain/overviewDomainModel","title":"Overview of Domain Model","description":"Seata domain model."},"dev/domain/rm":{"id":"dev/domain/rm","title":"Resource Manager(RM)","description":"Seata Resource Manager\u3002"},"dev/domain/tc":{"id":"dev/domain/tc","title":"Transaction Coordinator(TC)","description":"Seata Transaction Coordinator\u3002"},"dev/domain/tm":{"id":"dev/domain/tm","title":"Transaction Manager(TM)","description":"Seata Transaction Manager\u3002"},"dev/mode/at-mode":{"id":"dev/mode/at-mode","title":"Seata AT Mode","description":"Seata AT mode."},"dev/mode/saga-mode":{"id":"dev/mode/saga-mode","title":"Seata Saga Mode","description":"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."},"dev/mode/tcc-mode":{"id":"dev/mode/tcc-mode","title":"Seata TCC Mode","description":"Seata TCC mode."},"dev/mode/xa-mode":{"id":"dev/mode/xa-mode","title":"Seata XA Mode","description":"Seata XA Mode"},"dev/seata-mertics":{"id":"dev/seata-mertics","title":"Metrics Design","description":"Seata Metrics"},"developers/committer-guide/label-an-issue-guide_dev":{"id":"developers/committer-guide/label-an-issue-guide_dev","title":"Label an Issue","description":"Label an Issue."},"developers/committer-guide/website-guide_dev":{"id":"developers/committer-guide/website-guide_dev","title":"Website Guide","description":"Website Guide."},"developers/contributor-activity/top-contributer_dev":{"id":"developers/contributor-activity/top-contributer_dev","title":"top-contributer_dev","description":"Placeholder. DO NOT DELETE."},"developers/contributor-guide/new-contributor-guide_dev":{"id":"developers/contributor-guide/new-contributor-guide_dev","title":"New contributor guide","description":"This is a guide for new comers who wants to contribute to Seata."},"developers/contributor-guide/reporting-security-issues_dev":{"id":"developers/contributor-guide/reporting-security-issues_dev","title":"Reporting Security Issues","description":"This is a guide for new contributors who wants to report security issues."},"developers/contributor-guide/test-coverage-guide_dev":{"id":"developers/contributor-guide/test-coverage-guide_dev","title":"Test coverage guide","description":"Test coverage guide."},"developers/guide_dev":{"id":"developers/guide_dev","title":"Contributing to Seata","description":"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."},"ops/config-center":{"id":"ops/config-center","title":"config-center","description":"Placeholder. DO NOT DELETE."},"ops/deploy-by-docker":{"id":"ops/deploy-by-docker","title":"Deploy Seata Server By Docker","description":"Deploy Seata Server By Docker"},"ops/deploy-by-docker-142":{"id":"ops/deploy-by-docker-142","title":"Deploy Seata Server By Docker","description":"Deploy Seata Server by Docker"},"ops/deploy-by-docker-compose":{"id":"ops/deploy-by-docker-compose","title":"Deploy Seata Server By Docker Compose","description":"Deploy Seata Server By Docker Compose"},"ops/deploy-by-docker-compose-142":{"id":"ops/deploy-by-docker-compose-142","title":"Deploy Seata Server By Docker Compose","description":"Deploy Seata Server By Docker Compose"},"ops/deploy-by-helm":{"id":"ops/deploy-by-helm","title":"Deploy Seata Server By Helm","description":"Deploy Seata Server By Helm"},"ops/deploy-by-kubernetes":{"id":"ops/deploy-by-kubernetes","title":"Deploy Seata Server By Kubernetes","description":"Deploy Seata Server By Kubernetes"},"ops/deploy-guide-beginner":{"id":"ops/deploy-guide-beginner","title":"Beginner Deployment Guide","description":"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."},"ops/deploy-ha":{"id":"ops/deploy-ha","title":"High Available Usage Deployment","description":"High Available Usage Deployment"},"ops/deploy-server":{"id":"ops/deploy-server","title":"Deploy Server","description":"The server can deploy by multiple metho - Directly, Docker, Docker-Compose, Kubernetes, Helm."},"ops/deploy-server-raft":{"id":"ops/deploy-server-raft","title":"Deploying Raft Cluster","description":"Server-Raft mode deploy"},"ops/multi-configuration-isolation":{"id":"ops/multi-configuration-isolation","title":"Multi-configuration Isolation","description":"Seata supports Multi-configuration Isolation since 0.6.1,You can configure it in the following steps."},"ops/upgrade":{"id":"ops/upgrade","title":"Version Upgrade Guide","description":"Seata upgrade."},"ops/version-maintain-plan":{"id":"ops/version-maintain-plan","title":"version-maintain-plan","description":"Placeholder. DO NOT DELETE."},"overview/faq":{"id":"overview/faq","title":"FAQ","description":"Seata FAQ."},"overview/history":{"id":"overview/history","title":"History","description":"Seata History."},"overview/terminology":{"id":"overview/terminology","title":"Terminology","description":"Seata Terminology."},"overview/what-is-seata":{"id":"overview/what-is-seata","title":"What Is Seata?","description":"Seata is an open source distributed transaction solution dedicated to providing high performance and easy to use distributed transaction services. Seata will provide users with AT, TCC, SAGA, and XA transaction models to create a one-stop distributed solution for users."},"release-notes":{"id":"release-notes","title":"Release Notes","description":"Release Notes"},"user/api":{"id":"user/api","title":"Api Guide","description":"Api Guide."},"user/apm/prometheus":{"id":"user/apm/prometheus","title":"Prometheus","description":"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system."},"user/apm/skywalking":{"id":"user/apm/skywalking","title":"SkyWalking","description":"Seata SkyWalking"},"user/appendix/global-transaction-status":{"id":"user/appendix/global-transaction-status","title":"Global Transaction Status","description":"Global Transaction Status, Branch Transaction Status"},"user/appendix/isolation":{"id":"user/appendix/isolation","title":"Transaction Isolation","description":"Seata Transaction Isolation"},"user/configuration/apollo":{"id":"user/configuration/apollo","title":"Apollo Configuration Center","description":"Apollo Configuration Center."},"user/configuration/consul":{"id":"user/configuration/consul","title":"Consul Configuration Center","description":"Consul Configuration Center."},"user/configuration/etcd3":{"id":"user/configuration/etcd3","title":"Etcd3 Configuration Center","description":"Etcd3 Configuration Center."},"user/configuration/index":{"id":"user/configuration/index","title":"Introduction","description":"Configuration Center Introduction."},"user/configuration/nacos":{"id":"user/configuration/nacos","title":"Nacos Configuration Center","description":"Nacos Configuration Center."},"user/configuration/zookeeper":{"id":"user/configuration/zookeeper","title":"Zookeeper Configuration Center","description":"Zookeeper Configuration Center."},"user/configurations":{"id":"user/configurations","title":"Seata Parameter Configuration","description":"Seata parameter configuration."},"user/configurations090":{"id":"user/configurations090","title":"configurations090","description":"Public sector"},"user/configurations100":{"id":"user/configurations100","title":"The seata parameter configuration version 1.0.0","description":"View versions before 0.9.0.1"},"user/datasource":{"id":"user/datasource","title":"Data Source support","description":"Seata data source support"},"user/microservice":{"id":"user/microservice","title":"Microservice Framework Guide","description":"Microservice Framework Guide."},"user/mode/at":{"id":"user/mode/at","title":"Seata AT Mode","description":"User guide for Seata AT mode"},"user/mode/saga":{"id":"user/mode/saga","title":"Seata Saga Mode","description":"The Saga pattern is a long transaction solution provided by SEATA. In the Saga pattern, each participant in the business process submits a local transaction. If any participant fails, it compensates the previously successful participants. Both the forward service in phase one and the compensation service in phase two are implemented by business development."},"user/mode/tcc":{"id":"user/mode/tcc","title":"Seata TCC Mode","description":"User guide for Seata TCC mode"},"user/mode/xa":{"id":"user/mode/xa","title":"Seata XA Mode","description":"User guide for Seata XA mode"},"user/ormframework":{"id":"user/ormframework","title":"ORM Framework Support","description":"Seata ORM framework support"},"user/performance":{"id":"user/performance","title":"Performance Testing Report","description":"Seata Performance Testing Report."},"user/quickstart":{"id":"user/quickstart","title":"Quick Start","description":"Let\'s begin with a Microservices example."},"user/registry/consul":{"id":"user/registry/consul","title":"Consul Registry Center","description":"Consul Registry Center."},"user/registry/etcd3":{"id":"user/registry/etcd3","title":"Etcd3 Registry Center","description":"Etcd3 Registry Center."},"user/registry/eureka":{"id":"user/registry/eureka","title":"Eureka Registry Center","description":"Eureka Registry Center."},"user/registry/index":{"id":"user/registry/index","title":"Introduction","description":"Registry Center Introduction."},"user/registry/nacos":{"id":"user/registry/nacos","title":"Nacos Registry Center","description":"Nacos Registry Center."},"user/registry/zookeeper":{"id":"user/registry/zookeeper","title":"Zookeeper Registry Center","description":"Zookeeper Registry Center."},"user/spring":{"id":"user/spring","title":"spring","description":"Placeholder. DO NOT DELETE."},"user/sqlreference/dml":{"id":"user/sqlreference/dml","title":"DML","description":"Seata DML"},"user/sqlreference/function":{"id":"user/sqlreference/function","title":"Functions","description":"Seata Functions"},"user/sqlreference/sql-decoration":{"id":"user/sqlreference/sql-decoration","title":"SQL Decoration","description":"Seata SQL Decoration"},"user/sqlreference/sql-restrictions":{"id":"user/sqlreference/sql-restrictions","title":"SQL Restrictions","description":"Seata SQL restrictions"},"user/txgroup/transaction-group":{"id":"user/txgroup/transaction-group","title":"Transaction Group Introduction","description":"Seata transaction grouping."},"user/txgroup/transaction-group-and-ha":{"id":"user/txgroup/transaction-group-and-ha","title":"Transaction Group and High Availability","description":"Seata transaction group and high availability best practice"}}}')}}]);