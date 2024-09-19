"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[7303],{69298:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=t(74848),a=t(28453);const c={title:"API \u652f\u6301",keywords:["Seata"],description:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API\u3002"},o="1. \u6982\u8ff0",r={id:"user/api",title:"API \u652f\u6301",description:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/api.md",sourceDirName:"user",slug:"/user/api",permalink:"/zh-cn/docs/user/api",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.1/user/api.md",tags:[],version:"v2.1",frontMatter:{title:"API \u652f\u6301",keywords:["Seata"],description:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API\u3002"}},s={},l=[{value:"2.1 GlobalTransaction",id:"21-globaltransaction",level:2},{value:"2.2 GlobalTransactionContext",id:"22-globaltransactioncontext",level:2},{value:"2.3 TransactionalTemplate",id:"23-transactionaltemplate",level:2},{value:"3.1 RootContext",id:"31-rootcontext",level:2},{value:"1. \u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad",id:"1-\u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad",level:3},{value:"2. \u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d",id:"2-\u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d",level:3},{value:"4.1 TCC\u6ce8\u89e3\u63cf\u8ff0",id:"41-tcc\u6ce8\u89e3\u63cf\u8ff0",level:2},{value:"4.1.1 @TwoPhaseBusinessAction",id:"411-twophasebusinessaction",level:3},{value:"4.1.2 @LocalTCC",id:"412-localtcc",level:3},{value:"4.2 \u91cd\u8981\u53c2\u6570\u63cf\u8ff0",id:"42-\u91cd\u8981\u53c2\u6570\u63cf\u8ff0",level:2},{value:"4.2.1 BusinessActionContext",id:"421-businessactioncontext",level:2},{value:"4.2.2 @BusinessActionContextParameter",id:"422-businessactioncontextparameter",level:2}];function x(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1-\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API \uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"High-Level API"})," \uff1a\u7528\u4e8e\u4e8b\u52a1\u8fb9\u754c\u5b9a\u4e49\u3001\u63a7\u5236\u53ca\u4e8b\u52a1\u72b6\u6001\u67e5\u8be2\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Low-Level API"})," \uff1a\u7528\u4e8e\u63a7\u5236\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"2-high-level-api",children:"2. High-Level API"}),"\n",(0,i.jsx)(e.h2,{id:"21-globaltransaction",children:"2.1 GlobalTransaction"}),"\n",(0,i.jsx)(e.p,{children:"\u5168\u5c40\u4e8b\u52a1\uff1a\u5305\u62ec\u5f00\u542f\u4e8b\u52a1\u3001\u63d0\u4ea4\u3001\u56de\u6eda\u3001\u83b7\u53d6\u5f53\u524d\u72b6\u6001\u7b49\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public interface GlobalTransaction {\n\n    /**\n     * \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff08\u4f7f\u7528\u9ed8\u8ba4\u7684\u4e8b\u52a1\u540d\u548c\u8d85\u65f6\u65f6\u95f4\uff09\n     */\n    void begin() throws TransactionException;\n\n    /**\n     * \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff0c\u5e76\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\uff08\u4f7f\u7528\u9ed8\u8ba4\u7684\u4e8b\u52a1\u540d\uff09\n     */\n    void begin(int timeout) throws TransactionException;\n\n    /**\n     * \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff0c\u5e76\u6307\u5b9a\u4e8b\u52a1\u540d\u548c\u8d85\u65f6\u65f6\u95f4\n     */\n    void begin(int timeout, String name) throws TransactionException;\n\n    /**\n     * \u5168\u5c40\u63d0\u4ea4\n     */\n    void commit() throws TransactionException;\n\n    /**\n     * \u5168\u5c40\u56de\u6eda\n     */\n    void rollback() throws TransactionException;\n\n    /**\n     * \u83b7\u53d6\u4e8b\u52a1\u7684\u5f53\u524d\u72b6\u6001\n     */\n    GlobalStatus getStatus() throws TransactionException;\n\n    /**\n     * \u83b7\u53d6\u4e8b\u52a1\u7684 XID\n     */\n    String getXid();\n\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"22-globaltransactioncontext",children:"2.2 GlobalTransactionContext"}),"\n",(0,i.jsx)(e.p,{children:"GlobalTransaction \u5b9e\u4f8b\u7684\u83b7\u53d6\u9700\u8981\u901a\u8fc7 GlobalTransactionContext\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'\n    /**\n     * \u83b7\u53d6\u5f53\u524d\u7684\u5168\u5c40\u4e8b\u52a1\u5b9e\u4f8b\uff0c\u5982\u679c\u6ca1\u6709\u5219\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b9e\u4f8b\u3002\n     */\n    public static GlobalTransaction getCurrentOrCreate() {\n        GlobalTransaction tx = getCurrent();\n        if (tx == null) {\n            return createNew();\n        }\n        return tx;\n    }\n\n    /**\n     * \u91cd\u65b0\u8f7d\u5165\u7ed9\u5b9a XID \u7684\u5168\u5c40\u4e8b\u52a1\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u6267\u884c\u5f00\u542f\u4e8b\u52a1\u7684\u64cd\u4f5c\u3002\n     * \u8fd9\u4e2a API \u901a\u5e38\u7528\u4e8e\u5931\u8d25\u7684\u4e8b\u52a1\u7684\u540e\u7eed\u96c6\u4e2d\u5904\u7406\u3002\n     * \u6bd4\u5982\uff1a\u5168\u5c40\u63d0\u4ea4\u8d85\u65f6\uff0c\u540e\u7eed\u96c6\u4e2d\u5904\u7406\u901a\u8fc7\u91cd\u65b0\u8f7d\u5165\u8be5\u5b9e\u4f8b\uff0c\u901a\u8fc7\u5b9e\u4f8b\u65b9\u6cd5\u83b7\u53d6\u4e8b\u52a1\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u6839\u636e\u72b6\u6001\u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u8bd5\u5168\u5c40\u63d0\u4ea4\u64cd\u4f5c\u3002\n     */\n    public static GlobalTransaction reload(String xid) throws TransactionException {\n        GlobalTransaction tx = new DefaultGlobalTransaction(xid, GlobalStatus.UnKnown, GlobalTransactionRole.Launcher) {\n            @Override\n            public void begin(int timeout, String name) throws TransactionException {\n                throw new IllegalStateException("Never BEGIN on a RELOADED GlobalTransaction. ");\n            }\n        };\n        return tx;\n    }\n'})}),"\n",(0,i.jsx)(e.h2,{id:"23-transactionaltemplate",children:"2.3 TransactionalTemplate"}),"\n",(0,i.jsx)(e.p,{children:"\u4e8b\u52a1\u5316\u6a21\u677f\uff1a\u901a\u8fc7\u4e0a\u8ff0 GlobalTransaction \u548c GlobalTransactionContext API \u628a\u4e00\u4e2a\u4e1a\u52a1\u670d\u52a1\u7684\u8c03\u7528\u5305\u88c5\u6210\u5e26\u6709\u5206\u5e03\u5f0f\u4e8b\u52a1\u652f\u6301\u7684\u670d\u52a1\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class TransactionalTemplate {\n\n    public Object execute(TransactionalExecutor business) throws TransactionalExecutor.ExecutionException {\n\n        // 1. \u83b7\u53d6\u5f53\u524d\u5168\u5c40\u4e8b\u52a1\u5b9e\u4f8b\u6216\u521b\u5efa\u65b0\u7684\u5b9e\u4f8b\n        GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n\n        // 2. \u5f00\u542f\u5168\u5c40\u4e8b\u52a1\n        try {\n            tx.begin(business.timeout(), business.name());\n\n        } catch (TransactionException txe) {\n            // 2.1 \u5f00\u542f\u5931\u8d25\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.BeginFailure);\n\n        }\n\n        Object rs = null;\n        try {\n            // 3. \u8c03\u7528\u4e1a\u52a1\u670d\u52a1\n            rs = business.execute();\n\n        } catch (Throwable ex) {\n\n            // \u4e1a\u52a1\u8c03\u7528\u672c\u8eab\u7684\u5f02\u5e38\n            try {\n                // \u5168\u5c40\u56de\u6eda\n                tx.rollback();\n\n                // 3.1 \u5168\u5c40\u56de\u6eda\u6210\u529f\uff1a\u629b\u51fa\u539f\u59cb\u4e1a\u52a1\u5f02\u5e38\n                throw new TransactionalExecutor.ExecutionException(tx, TransactionalExecutor.Code.RollbackDone, ex);\n\n            } catch (TransactionException txe) {\n                // 3.2 \u5168\u5c40\u56de\u6eda\u5931\u8d25\uff1a\n                throw new TransactionalExecutor.ExecutionException(tx, txe,\n                    TransactionalExecutor.Code.RollbackFailure, ex);\n\n            }\n\n        }\n\n        // 4. \u5168\u5c40\u63d0\u4ea4\n        try {\n            tx.commit();\n\n        } catch (TransactionException txe) {\n            // 4.1 \u5168\u5c40\u63d0\u4ea4\u5931\u8d25\uff1a\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.CommitFailure);\n\n        }\n        return rs;\n    }\n\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6a21\u677f\u65b9\u6cd5\u6267\u884c\u7684\u5f02\u5e38\uff1aExecutionException"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    class ExecutionException extends Exception {\n\n        // \u53d1\u751f\u5f02\u5e38\u7684\u4e8b\u52a1\u5b9e\u4f8b\n        private GlobalTransaction transaction;\n\n        // \u5f02\u5e38\u7f16\u7801\uff1a\n        // BeginFailure\uff08\u5f00\u542f\u4e8b\u52a1\u5931\u8d25\uff09\n        // CommitFailure\uff08\u5168\u5c40\u63d0\u4ea4\u5931\u8d25\uff09\n        // RollbackFailure\uff08\u5168\u5c40\u56de\u6eda\u5931\u8d25\uff09\n        // RollbackDone\uff08\u5168\u5c40\u56de\u6eda\u6210\u529f\uff09\n        private Code code;\n\n        // \u89e6\u53d1\u56de\u6eda\u7684\u4e1a\u52a1\u539f\u59cb\u5f02\u5e38\n        private Throwable originalException;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5916\u5c42\u8c03\u7528\u903b\u8f91 try-catch \u8fd9\u4e2a\u5f02\u5e38\uff0c\u6839\u636e\u5f02\u5e38\u7f16\u7801\u8fdb\u884c\u5904\u7406\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"BeginFailure"})," \uff08\u5f00\u542f\u4e8b\u52a1\u5931\u8d25\uff09\uff1agetCause() \u5f97\u5230\u5f00\u542f\u4e8b\u52a1\u5931\u8d25\u7684\u6846\u67b6\u5f02\u5e38\uff0cgetOriginalException() \u4e3a\u7a7a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"CommitFailure"})," \uff08\u5168\u5c40\u63d0\u4ea4\u5931\u8d25\uff09\uff1agetCause() \u5f97\u5230\u5168\u5c40\u63d0\u4ea4\u5931\u8d25\u7684\u6846\u67b6\u5f02\u5e38\uff0cgetOriginalException() \u4e3a\u7a7a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"RollbackFailure"})," \uff08\u5168\u5c40\u56de\u6eda\u5931\u8d25\uff09\uff1agetCause() \u5f97\u5230\u5168\u5c40\u56de\u6eda\u5931\u8d25\u7684\u6846\u67b6\u5f02\u5e38\uff0cgetOriginalException() \u4e1a\u52a1\u5e94\u7528\u7684\u539f\u59cb\u5f02\u5e38\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"RollbackDone"})," \uff08\u5168\u5c40\u56de\u6eda\u6210\u529f\uff09\uff1agetCause() \u4e3a\u7a7a\uff0cgetOriginalException() \u4e1a\u52a1\u5e94\u7528\u7684\u539f\u59cb\u5f02\u5e38\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"3-low-level-api",children:"3. Low-Level API"}),"\n",(0,i.jsx)(e.h2,{id:"31-rootcontext",children:"3.1 RootContext"}),"\n",(0,i.jsx)(e.p,{children:"\u4e8b\u52a1\u7684\u6839\u4e0a\u4e0b\u6587\uff1a\u8d1f\u8d23\u5728\u5e94\u7528\u7684\u8fd0\u884c\u65f6\uff0c\u7ef4\u62a4 XID \u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    /**\n     * \u5f97\u5230\u5f53\u524d\u5e94\u7528\u8fd0\u884c\u65f6\u7684\u5168\u5c40\u4e8b\u52a1 XID\n     */\n    public static String getXID() {\n        return CONTEXT_HOLDER.get(KEY_XID);\n    }\n\n    /**\n     * \u5c06\u5168\u5c40\u4e8b\u52a1 XID \u7ed1\u5b9a\u5230\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u4e2d\n     */\n    public static void bind(String xid) {\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("bind " + xid);\n        }\n        CONTEXT_HOLDER.put(KEY_XID, xid);\n    }\n\n    /**\n     * \u5c06\u5168\u5c40\u4e8b\u52a1 XID \u4ece\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u4e2d\u89e3\u9664\u7ed1\u5b9a\uff0c\u540c\u65f6\u5c06 XID \u8fd4\u56de\n     */\n    public static String unbind() {\n        String xid = CONTEXT_HOLDER.remove(KEY_XID);\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("unbind " + xid);\n        }\n        return xid;\n    }\n\n    /**\n     * \u5224\u65ad\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u662f\u5426\u5904\u4e8e\u5168\u5c40\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u4e2d\n     */\n    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n'})}),"\n",(0,i.jsx)(e.p,{children:"High-Level API \u7684\u5b9e\u73b0\u90fd\u662f\u57fa\u4e8e RootContext \u4e2d\u7ef4\u62a4\u7684 XID \u6765\u505a\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5e94\u7528\u7684\u5f53\u524d\u8fd0\u884c\u7684\u64cd\u4f5c\u662f\u5426\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u5c31\u662f\u770b RootContext \u4e2d\u662f\u5426\u6709 XID\u3002"}),"\n",(0,i.jsx)(e.p,{children:"RootContext \u7684\u9ed8\u8ba4\u5b9e\u73b0\u662f\u57fa\u4e8e ThreadLocal \u7684\uff0c\u5373 XID \u4fdd\u5b58\u5728\u5f53\u524d\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"Low-Level API \u7684\u4e24\u4e2a\u5178\u578b\u7684\u5e94\u7528\u573a\u666f\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad",children:"1. \u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad"}),"\n",(0,i.jsx)(e.p,{children:"\u8fdc\u7a0b\u8c03\u7528\u524d\u83b7\u53d6\u5f53\u524d XID\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"String xid = RootContext.getXID();\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fdc\u7a0b\u8c03\u7528\u8fc7\u7a0b\u628a XID \u4e5f\u4f20\u9012\u5230\u670d\u52a1\u63d0\u4f9b\u65b9\uff0c\u5728\u6267\u884c\u670d\u52a1\u63d0\u4f9b\u65b9\u7684\u4e1a\u52a1\u903b\u8f91\u524d\uff0c\u628a XID \u7ed1\u5b9a\u5230\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"RootContext.bind(rpcXid);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-\u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d",children:"2. \u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u4e2d\uff0c\u5982\u679c\u9700\u8981\u67d0\u4e9b\u4e1a\u52a1\u903b\u8f91\u4e0d\u5728\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u8f96\u8303\u56f4\u5185\uff0c\u5219\u5728\u8c03\u7528\u524d\uff0c\u628a XID \u89e3\u7ed1\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"String unbindXid = RootContext.unbind();\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5f85\u76f8\u5173\u4e1a\u52a1\u903b\u8f91\u6267\u884c\u5b8c\u6210\uff0c\u518d\u628a XID \u7ed1\u5b9a\u56de\u53bb\uff0c\u5373\u53ef\u5b9e\u73b0\u5168\u5c40\u4e8b\u52a1\u7684\u6062\u590d\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"RootContext.bind(unbindXid);\n"})}),"\n",(0,i.jsx)(e.h1,{id:"4-tcc-api",children:"4. TCC API"}),"\n",(0,i.jsx)(e.p,{children:"TCC\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public interface NormalTccAction {\n\n    /**\n     * Prepare boolean.\n     *\n     * @param a             the a\n     * @param b             the b\n     * @param tccParam      the tcc param\n     * @return the boolean\n     */\n    String prepare(int a, List b, TccParam tccParam);\n\n    /**\n     * Commit boolean.\n     *\n     * @param actionContext the action context\n     * @return the boolean\n     */\n    boolean commit(BusinessActionContext actionContext, TccParam param);\n\n    /**\n     * Rollback boolean.\n     *\n     * @param actionContext the action context\n     * @return the boolean\n     */\n    boolean rollback(BusinessActionContext actionContext, TccParam param);\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"TCC\u63a5\u53e3\u5b9a\u4e49\u5b9e\u73b0"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@LocalTCC\npublic class NormalTccActionImpl implements NormalTccAction {\n\n    @TwoPhaseBusinessAction(name = "tccActionForTest", commitMethod = "commit", rollbackMethod = "rollback", commitArgsClasses = {BusinessActionContext.class, TccParam.class}, rollbackArgsClasses = {BusinessActionContext.class, TccParam.class})\n    @Override\n    public String prepare(@BusinessActionContextParameter("a") int a,\n                          @BusinessActionContextParameter(paramName = "b", index = 0) List b,\n                          @BusinessActionContextParameter(isParamInProperty = true) TccParam tccParam) {\n        return "a";\n    }\n\n    @Override\n    public boolean commit(BusinessActionContext actionContext,\n                          @BusinessActionContextParameter("tccParam") TccParam param) {\n        return false;\n    }\n\n    @Override\n    public boolean rollback(BusinessActionContext actionContext, @BusinessActionContextParameter("tccParam") TccParam param) {\n        return false;\n    }\n\n    public boolean otherMethod(){\n        return true;\n    }\n\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"TCC API \u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    @Test\n    public void testTcc() {\n\n        // \u5b9e\u4f8b\u5316\u4e00\u4e2a\u672a\u4ee3\u7406\u7684\u666e\u901aTCC\u63a5\u53e3\u5b9e\u73b0\u7c7b\n        NormalTccAction tccAction = new NormalTccActionImpl();\n\n        // \u901a\u8fc7\u4ee3\u7406\u5de5\u5177ProxyUtil\uff0c\u521b\u5efa\u4e00\u4e2a\u4ee3\u7406\u7684TCC\u63a5\u53e3\u7c7b\n        NormalTccAction tccActionProxy = ProxyUtil.createProxy(tccAction);\n\n        // \u51c6\u5907\u4e00\u4e9bTCC\u63a5\u53e3\u7684\u53c2\u6570\n        TccParam tccParam = new TccParam(1, "abc@163.com");\n        List<String> listB = Arrays.asList("b");\n\n        // TCC\u4e00\u9636\u6bb5\u63d0\u4ea4\n        String result = tccActionProxy.prepare(0, listB, tccParam);\n\n        // \u9a8c\u8bc1\n        Assertions.assertEquals("a", result);\n        Assertions.assertNotNull(result);\n        Assertions.assertEquals("tccActionForTest", branchReference.get());\n\n    }\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u7b80\u8ff0\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"1\uff0c\u9996\u5148\u5b9a\u4e49TCC\u63a5\u53e3\uff0cprepare\uff0cconfirm\uff0crollback\u3002"}),"\n",(0,i.jsx)(e.li,{children:"2\uff0c\u5b9e\u73b0\u63a5\u53e3\uff0c\u6ce8\u610f\uff1a\u6ce8\u89e3@LocalTCC\u8981\u4fee\u9970\u5728\u5b9e\u73b0\u7c7b\u4e0a\uff0c\u6ce8\u89e3@TwoPhaseBusinessAction\u8981\u4fee\u9970\u5728\u5b9e\u73b0\u7c7b\u65b9\u6cd5prepare\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7BusinessActionContext\u6765\u4f20\u9012\u53c2\u6570\u3002"}),"\n",(0,i.jsx)(e.li,{children:"3\uff0c\u7528ProxyUtil.createProxy(T target)\u521b\u5efaTCC\u4ee3\u7406\u5bf9\u8c61\u3002(io.seata.integration.tx.api.util.ProxyUtil)"}),"\n",(0,i.jsx)(e.li,{children:"4\uff0c\u7528\u4ee3\u7406\u7c7b\u4e00\u9636\u6bb5\u63d0\u4ea4\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"41-tcc\u6ce8\u89e3\u63cf\u8ff0",children:"4.1 TCC\u6ce8\u89e3\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"TCC\u6709\u4e24\u4e2a\u6838\u5fc3\u6ce8\u89e3\uff0c\u5206\u522b\u662fTwoPhaseBusinessAction\u548cLocalTCC\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"411-twophasebusinessaction",children:"4.1.1 @TwoPhaseBusinessAction"}),"\n",(0,i.jsx)(e.p,{children:"@TwoPhaseBusinessAction\u8868\u793a\u4e86\u5f53\u524d\u65b9\u6cd5\u4f7f\u7528TCC\u6a21\u5f0f\u7ba1\u7406\u4e8b\u52a1\u63d0\u4ea4\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'name\u5c5e\u6027\uff0c\u7ed9\u5f53\u524d\u4e8b\u52a1\u6ce8\u518c\u4e86\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\u7684TCC bean name\u3002\n\u5982\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0cname = "TccActionOne"'}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"TCC\u6a21\u5f0f\u7684\u4e09\u4e2a\u6267\u884c\u9636\u6bb5\u5206\u522b\u662f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Try \u9636\u6bb5\uff0c\u9884\u5b9a\u64cd\u4f5c\u8d44\u6e90\uff08Prepare\uff09\n\u8fd9\u4e00\u9636\u6bb5\u6240\u4ee5\u6267\u884c\u7684\u65b9\u6cd5\u4fbf\u662f\u88ab@TwoPhaseBusinessAction\u6240\u4fee\u9970\u7684\u65b9\u6cd5\u3002\u5982\u793a\u4f8b\u4ee3\u7801\u4e2d\u7684prepare\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Confirm \u9636\u6bb5\uff0c\u6267\u884c\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91\uff08Commit\uff09\n\u8fd9\u4e00\u9636\u6bb5\u4f7f\u7528commitMethod\u5c5e\u6027\u6240\u6307\u5411\u7684\u65b9\u6cd5\uff0c\u6765\u6267\u884cConfirm\u7684\u5de5\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Cancel \u9636\u6bb5\uff0c\u4e8b\u52a1\u56de\u6eda\uff08Rollback\uff09\n\u8fd9\u4e00\u9636\u6bb5\u4f7f\u7528rollbackMethod\u5c5e\u6027\u6240\u6307\u5411\u7684\u65b9\u6cd5\uff0c\u6765\u6267\u884cRollback\u7684\u5de5\u4f5c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"412-localtcc",children:"4.1.2 @LocalTCC"}),"\n",(0,i.jsx)(e.p,{children:"@LocalTCC\u6ce8\u89e3\u7528\u6765\u8868\u793a\u5b9e\u73b0\u4e86\u4e8c\u9636\u6bb5\u63d0\u4ea4\u7684\u672c\u5730\u7684TCC\u63a5\u53e3\u3002\u5982\u679c\u4f7f\u7528Dubbo\u4f5c\u4e3aRPC\u901a\u4fe1\u7ec4\u4ef6\u5219\u65e0\u987b\u7528\u6b64\u6ce8\u89e3\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"42-\u91cd\u8981\u53c2\u6570\u63cf\u8ff0",children:"4.2 \u91cd\u8981\u53c2\u6570\u63cf\u8ff0"}),"\n",(0,i.jsx)(e.h2,{id:"421-businessactioncontext",children:"4.2.1 BusinessActionContext"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u6b64\u5165\u53c2\u5728TCC\u6a21\u5f0f\u4e0b\uff0c\u5728\u4e8b\u52a1\u4e0a\u4e0b\u6587\u4e2d\uff0c\u4f20\u9012\u67e5\u8be2\u53c2\u6570\u3002\u5982\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"xid \u5168\u5c40\u4e8b\u52a1id"}),"\n",(0,i.jsx)(e.li,{children:"branchId \u5206\u652f\u4e8b\u52a1id"}),"\n",(0,i.jsx)(e.li,{children:"actionName \u5206\u652f\u8d44\u6e90id\uff0c\uff08resource id\uff09"}),"\n",(0,i.jsx)(e.li,{children:"actionContext \u4e1a\u52a1\u4f20\u9012\u53c2\u6570Map\uff0c\u53ef\u4ee5\u901a\u8fc7@BusinessActionContextParameter\u6765\u6807\u6ce8\u9700\u8981\u4f20\u9012\u7684\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"422-businessactioncontextparameter",children:"4.2.2 @BusinessActionContextParameter"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u6b64\u6ce8\u89e3\u6807\u6ce8\u9700\u8981\u5728\u4e8b\u52a1\u4e0a\u4e0b\u6587\u4e2d\u4f20\u9012\u7684\u53c2\u6570\u3002\u88ab\u6b64\u6ce8\u89e3\u4fee\u9970\u7684\u53c2\u6570\uff0c\u4f1a\u88ab\u8bbe\u7f6e\u5728BusinessActionContext\u4e2d\uff0c\n\u53ef\u4ee5\u5728commit\u548crollback\u9636\u6bb5\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7BusinessActionContext\u7684getActionContext\u65b9\u6cd5\u83b7\u53d6\u4f20\u9012\u7684\u4e1a\u52a1\u53c2\u6570\u503c\u3002\n\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'context.getActionContext("id").toString();\n'})})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var i=t(96540);const a={},c=i.createContext(a);function o(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);