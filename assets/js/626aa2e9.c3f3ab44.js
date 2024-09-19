"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[11471],{70351:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(74848),i=t(28453);const o={title:"Api Guide",keywords:["Seata"],description:"Api Guide."},r="1. Overview",s={id:"user/api",title:"Api Guide",description:"Api Guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/api.md",sourceDirName:"user",slug:"/user/api",permalink:"/docs/user/api",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/user/api.md",tags:[],version:"v2.1",frontMatter:{title:"Api Guide",keywords:["Seata"],description:"Api Guide."}},c={},l=[{value:"2.1 GlobalTransaction",id:"21-globaltransaction",level:2},{value:"2.2 GlobalTransactionContext",id:"22-globaltransactioncontext",level:2},{value:"2.3 TransactionalTemplate",id:"23-transactionaltemplate",level:2},{value:"3.1 RootContext",id:"31-rootcontext",level:2},{value:"1. The propagation of transaction context by remote invoke",id:"1-the-propagation-of-transaction-context-by-remote-invoke",level:3},{value:"2. Pause and recover of transaction",id:"2-pause-and-recover-of-transaction",level:3},{value:"4.1 TCC Annotation Description",id:"41-tcc-annotation-description",level:2},{value:"4.1.1 @TwoPhaseBusinessAction",id:"411-twophasebusinessaction",level:3},{value:"4.1.2 @LocalTCC",id:"412-localtcc",level:3},{value:"4.2 Important parameter description",id:"42-important-parameter-description",level:2},{value:"4.2.1 BusinessActionContext",id:"421-businessactioncontext",level:2},{value:"4.2.2 @BusinessActionContextParameter",id:"422-businessactioncontextparameter",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"1-overview",children:"1. Overview"}),"\n",(0,a.jsx)(e.p,{children:"Seata API is devided into 2 categories: High-Level API and Low-Level API"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"High-Level API"})," : Used for defining and controlling transaction boundary, and querying transaction status."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Low-Level API"})," : Used for controlling the propagation of transaction context."]}),"\n"]}),"\n",(0,a.jsx)(e.h1,{id:"2-high-level-api",children:"2. High-Level API"}),"\n",(0,a.jsx)(e.h2,{id:"21-globaltransaction",children:"2.1 GlobalTransaction"}),"\n",(0,a.jsx)(e.p,{children:"GlobalTransaction class contains methods about begin transaction, commit transaction, rollback transaction and get status of transaction and so on."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public interface GlobalTransaction {\n\n    /**\n     * Begin a global transaction(Use default transaction name and timeout)\n     */\n    void begin() throws TransactionException;\n\n    /**\n     * Begin a global transaction, and point out the timeout(use default transaction name)\n     */\n    void begin(int timeout) throws TransactionException;\n\n    /**\n     * Begin a global transaction, and point out the transaction name and timeout.\n     */\n    void begin(int timeout, String name) throws TransactionException;\n\n    /**\n     * Commit globally\n     */\n    void commit() throws TransactionException;\n\n    /**\n     * Rollback globally\n     */\n    void rollback() throws TransactionException;\n\n    /**\n     * Get the status of transaction\n     */\n    GlobalStatus getStatus() throws TransactionException;\n\n    /**\n     * Get the XID of transaction\n     */\n    String getXid();\n\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"22-globaltransactioncontext",children:"2.2 GlobalTransactionContext"}),"\n",(0,a.jsx)(e.p,{children:"GlobalTransaction instance can be retrieved from GlobalTransactionContext:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"\n    /**\n     * Retrieve current global transaction instance, if it doesn't exist, create a new one.\n     */\n    public static GlobalTransaction getCurrentOrCreate() {\n        GlobalTransaction tx = getCurrent();\n        if (tx == null) {\n            return createNew();\n        }\n        return tx;\n    }\n\n    /**\n     * Reload the global transaction identified by XID, the instance aren't allowed to begin transaction.\n     * This API is usually used for centralized handling of failed transaction later.\n     * For example, if it's time out to commit globally, the subsequent centralized processing steps are like this: reload the instance, from which retrieve the status, then recommit the transaction globally or not depends on the status value.\n     */\n    public static GlobalTransaction reload(String xid) throws TransactionException {\n        GlobalTransaction tx = new DefaultGlobalTransaction(xid, GlobalStatus.UnKnown, GlobalTransactionRole.Launcher) {\n            @Override\n            public void begin(int timeout, String name) throws TransactionException {\n                throw new IllegalStateException(\"Never BEGIN on a RELOADED GlobalTransaction. \");\n            }\n        };\n        return tx;\n    }\n"})}),"\n",(0,a.jsx)(e.h2,{id:"23-transactionaltemplate",children:"2.3 TransactionalTemplate"}),"\n",(0,a.jsx)(e.p,{children:"TransactionalTemplate: Wrap a business service invoke into  a distributed transaction supported  service with preceding GlobalTransaction and GlobalTransactionContext API."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public class TransactionalTemplate {\n\n    public Object execute(TransactionalExecutor business) throws TransactionalExecutor.ExecutionException {\n\n        // 1. Get current global transaction instance or create a new one\n        GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n\n        // 2. Begin the global transaction\n        try {\n            tx.begin(business.timeout(), business.name());\n\n        } catch (TransactionException txe) {\n            // 2.1 Fail to begin\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.BeginFailure);\n\n        }\n\n        Object rs = null;\n        try {\n            // 3. invoke service\n            rs = business.execute();\n\n        } catch (Throwable ex) {\n\n            // Exception from business service invoke\n            try {\n                // Rollback globally\n                tx.rollback();\n\n                // 3.1 Global rollback success, throw original business exception\n                throw new TransactionalExecutor.ExecutionException(tx, TransactionalExecutor.Code.RollbackDone, ex);\n\n            } catch (TransactionException txe) {\n                // 3.2 Global rollback failed\n                throw new TransactionalExecutor.ExecutionException(tx, txe,\n                    TransactionalExecutor.Code.RollbackFailure, ex);\n\n            }\n\n        }\n\n        // 4. Commit globally\n        try {\n            tx.commit();\n\n        } catch (TransactionException txe) {\n            // 4.1 Global commit failed\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.CommitFailure);\n\n        }\n        return rs;\n    }\n\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"The exception of template method: ExecutionException"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"    class ExecutionException extends Exception {\n\n        // Transaction instance threw exception\n        private GlobalTransaction transaction;\n\n        // Exception code:\n        // BeginFailure(Fail to begin transaction)\n        // CommitFailure(Fail to commit globally)\n        // RollbackFailure(Fail to rollback globally)\n        // RollbackDone(Global rollback success)\n        private Code code;\n\n        // Original exception triggered by rollback\n        private Throwable originalException;\n"})}),"\n",(0,a.jsx)(e.p,{children:"Outer calling logic try-catch the exception, and do something based on the exception code:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"BeginFailure"})," (Fail to begin transaction): getCause() gets the framework exception of begin transaction, getOriginalException() is null."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"CommitFailure"}),"(Fail to commit globally):  getCause() gets the framework exception of commit transaction, getOriginalException() is null."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"RollbackFailure"})," (Fail to rollback globally)\uff1agetCause() gets the framework exception of rollback transaction\uff0cgetOriginalException() gets the original exception of business invoke."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"RollbackDone"}),"(Global rollback success): getCause()  is null, getOriginalException() gets the original exception of business invoke."]}),"\n"]}),"\n",(0,a.jsx)(e.h1,{id:"3-low-level-api",children:"3. Low-Level API"}),"\n",(0,a.jsx)(e.h2,{id:"31-rootcontext",children:"3.1 RootContext"}),"\n",(0,a.jsx)(e.p,{children:"RootContext: It's responsible for maintaining XID during runtime of application."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'    /**\n     * Get the global XID of the current running application\n     */\n    public static String getXID() {\n        return CONTEXT_HOLDER.get(KEY_XID);\n    }\n\n    /**\n     * Bind the global XID to the current application runtime\n     */\n    public static void bind(String xid) {\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("bind " + xid);\n        }\n        CONTEXT_HOLDER.put(KEY_XID, xid);\n    }\n\n    /**\n     * Unbind the global XID from the current application runtime, and return XID\n     */\n    public static String unbind() {\n        String xid = CONTEXT_HOLDER.remove(KEY_XID);\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("unbind " + xid);\n        }\n        return xid;\n    }\n\n    /**\n     * Check if the current application runtime is in the global transaction context\n     */\n    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n'})}),"\n",(0,a.jsx)(e.p,{children:"The implementation of High-Level API is based on maintaining XID in the RootContext."}),"\n",(0,a.jsx)(e.p,{children:"Whether or not the operation of the current running application is in a global transaction context, just check if there is an XID in the RootContext."}),"\n",(0,a.jsx)(e.p,{children:"The default implementation of RootContext is based on ThreadLocal, which is the XID is in the context of current thread."}),"\n",(0,a.jsx)(e.p,{children:"Two classic scenes of Low-Level API :"}),"\n",(0,a.jsx)(e.h3,{id:"1-the-propagation-of-transaction-context-by-remote-invoke",children:"1. The propagation of transaction context by remote invoke"}),"\n",(0,a.jsx)(e.p,{children:"Retrieve current XID by remote invoke:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"String xid = RootContext.getXID();\n"})}),"\n",(0,a.jsx)(e.p,{children:"Propagating the XID to the provider of service by RPC, bind the XID to current RootContext before executing the business logic of provider."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"RootContext.bind(rpcXid);\n"})}),"\n",(0,a.jsx)(e.h3,{id:"2-pause-and-recover-of-transaction",children:"2. Pause and recover of transaction"}),"\n",(0,a.jsx)(e.p,{children:"In a global transaction, if some business logic shouldn't be in the scope of the global transaction, unbind XID before invoke it."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"String unbindXid = RootContext.unbind();\n"})}),"\n",(0,a.jsx)(e.p,{children:"Rebind the XID back after the execution of related business logic to achieve recovering the global transaction."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"RootContext.bind(unbindXid);\n"})}),"\n",(0,a.jsx)(e.h1,{id:"4-tcc-api",children:"4. TCC API"}),"\n",(0,a.jsx)(e.p,{children:"TCC interface definition"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public interface NormalTccAction {\n\n    /**\n     * Prepare boolean.\n     *\n     * @param a             the a\n     * @param b             the b\n     * @param tccParam      the tcc param\n     * @return the boolean\n     */\n    String prepare(int a, List b, TccParam tccParam);\n\n    /**\n     * Commit boolean.\n     *\n     * @param actionContext the action context\n     * @return the boolean\n     */\n    boolean commit(BusinessActionContext actionContext, TccParam param);\n\n    /**\n     * Rollback boolean.\n     *\n     * @param actionContext the action context\n     * @return the boolean\n     */\n    boolean rollback(BusinessActionContext actionContext, TccParam param);\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"TCC interface definition implementation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@LocalTCC\npublic class NormalTccActionImpl implements NormalTccAction {\n\n    @TwoPhaseBusinessAction(name = "tccActionForTest", commitMethod = "commit", rollbackMethod = "rollback", commitArgsClasses = {BusinessActionContext.class, TccParam.class}, rollbackArgsClasses = {BusinessActionContext.class, TccParam.class})\n    @Override\n    public String prepare(@BusinessActionContextParameter("a") int a,\n                          @BusinessActionContextParameter(paramName = "b", index = 0) List b,\n                          @BusinessActionContextParameter(isParamInProperty = true) TccParam tccParam) {\n        return "a";\n    }\n\n    @Override\n    public boolean commit(BusinessActionContext actionContext,\n                          @BusinessActionContextParameter("tccParam") TccParam param) {\n        return false;\n    }\n\n    @Override\n    public boolean rollback(BusinessActionContext actionContext, @BusinessActionContextParameter("tccParam") TccParam param) {\n        return false;\n    }\n\n    public boolean otherMethod(){\n        return true;\n    }\n\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"TCC API usage"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'    @Test\n    public void testTcc() {\n\n        // Instantiate an un-proxied TCC interface implementation class\n        NormalTccAction tccAction = new NormalTccActionImpl();\n\n        // Create a proxy TCC interface class using the proxy tool ProxyUtil\n        NormalTccAction tccActionProxy = ProxyUtil.createProxy(tccAction);\n\n        // Obtain TCC interface parameters\n        TccParam tccParam = new TccParam(1, "abc@163.com");\n        List<String> listB = Arrays.asList("b");\n\n        // TCC Phase 1 submission\n        String result = tccActionProxy.prepare(0, listB, tccParam);\n\n        // verification\n        Assertions.assertEquals("a", result);\n        Assertions.assertNotNull(result);\n        Assertions.assertEquals("tccActionForTest", branchReference.get());\n\n    }\n'})}),"\n",(0,a.jsx)(e.p,{children:"Brief description"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"1\uff0cFirst, define the TCC interface: prepare, confirm, and rollback."}),"\n",(0,a.jsx)(e.li,{children:"2\uff0cImplementation interface. Note: The annotation @LocalTCC should be modified on the implementation class, and the annotation @TwoPhaseBusinessAction should be modified on the implementation class method prepare. You can pass parameters through BusinessActionContext."}),"\n",(0,a.jsx)(e.li,{children:"3\uff0cCreate a TCC proxy object using ProxyUtil.createProxy (T target)."}),"\n",(0,a.jsx)(e.li,{children:"4\uff0cCommit in phase 1 with the proxy class."}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"41-tcc-annotation-description",children:"4.1 TCC Annotation Description"}),"\n",(0,a.jsx)(e.p,{children:"TCC has two core annotations, TwoPhaseBusinessAction and LocalTCC."}),"\n",(0,a.jsx)(e.h3,{id:"411-twophasebusinessaction",children:"4.1.1 @TwoPhaseBusinessAction"}),"\n",(0,a.jsx)(e.p,{children:"@TwoPhaseBusinessAction indicates that the current method uses the TCC mode to manage transaction submission."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"The name attribute registers a globally unique TCC bean name for the current transaction."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'As in the code example, name = "TccActionOne"'}),"\n",(0,a.jsx)(e.p,{children:"The three execution phases of the TCC mode are:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Try phase, reserve operation resources (Prepare)"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"The methods executed in this phase are the methods modified by @TwoPhaseBusinessAction. For example, the prepare method in the sample code."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Confirm phase, execute the main business logic (Commit)"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"This phase uses the method pointed to by the commitMethod attribute to perform the Confirm work."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Cancel phase, transaction rollback (Rollback)"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"This phase uses the method pointed to by the rollbackMethod attribute to perform the Rollback work."}),"\n",(0,a.jsx)(e.h3,{id:"412-localtcc",children:"4.1.2 @LocalTCC"}),"\n",(0,a.jsx)(e.p,{children:"The @LocalTCC annotation is used to indicate the local TCC interface that implements the two-phase commit. If Dubbo is used as the RPC communication component, this annotation is not required."}),"\n",(0,a.jsx)(e.h2,{id:"42-important-parameter-description",children:"4.2 Important parameter description"}),"\n",(0,a.jsx)(e.h2,{id:"421-businessactioncontext",children:"4.2.1 BusinessActionContext"}),"\n",(0,a.jsx)(e.p,{children:"You can use this input parameter to pass query parameters in the transaction context in TCC mode. The following attributes:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"xid global transaction id"}),"\n",(0,a.jsx)(e.li,{children:"branchId branch transaction id"}),"\n",(0,a.jsx)(e.li,{children:"actionName branch resource id, (resource id)"}),"\n",(0,a.jsx)(e.li,{children:"actionContext business transfer parameter Map, you can use @BusinessActionContextParameter to annotate the parameters that need to be passed."}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"422-businessactioncontextparameter",children:"4.2.2 @BusinessActionContextParameter"}),"\n",(0,a.jsx)(e.p,{children:"Use this annotation to annotate the parameters that need to be passed in the transaction context. The parameters modified by this annotation will be set in BusinessActionContext.\nYou can use the getActionContext method of BusinessActionContext to obtain the passed business parameter values \u200b\u200bin the commit and rollback phases.\nAs follows:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'context.getActionContext("id").toString();\n'})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>s});var a=t(96540);const i={},o=a.createContext(i);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);