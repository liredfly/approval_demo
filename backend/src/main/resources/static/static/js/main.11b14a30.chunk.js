(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{282:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),c=a(32),s=a.n(c),l=(a(37),a(8)),o=a(9),r=a(11),d=a(10),p=a(5),u=a.n(p),m=(a(56),a(12)),h=function(e){m.device.notification.alert({message:e,title:"\u63d0\u793a",buttonName:"\u786e\u5b9a",onSuccess:function(){},onFail:function(e){}})},v=a(1),j=["\u652f\u4ed8\u5b9d\u5546\u5bb6","\u4e8c\u7ef4\u706b","\u997f\u4e86\u4e48\u5916\u5356","\u7f8e\u56e2\u5916\u5356"],f=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).saveAproval=function(e){u.a.post(n.props.domain+"/biz/create/model",e).then((function(e){console.log(JSON.stringify(e)),e.data.success?(h("\u6a21\u7248\u3010".concat(e.data.data,"\u3011\u521b\u5efa\u6210\u529f\uff01\u8bf7\u524d\u5f80 \u300c\u5de5\u4f5c\u53f0\u300d-\u300cOA\u5ba1\u6279\u300d\u53d1\u8d77\u5ba1\u6279")),n.setState({approvalName:e.data.data})):h("".concat(e.data.errorMsg))})).catch((function(e){console.log("corpId err, "+JSON.stringify(e))}))},n.state={approvalName:"\u6536\u5165\u65e5\u62a5",moneyFieldList:[],selectFieldName:"\u95e8\u5e97",dateFieldName:"\u6536\u6b3e\u65e5\u671f",textFieldName:"\u5907\u6ce8",textFieldOpen:!0,selectFieldOpen:!0,dateFieldOpen:!0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.approvalName,n=t.moneyFieldList,i=t.selectFieldName,c=t.dateFieldName,s=t.textFieldName,l=t.textFieldOpen,o=t.selectFieldOpen,r=t.dateFieldOpen;return Object(v.jsxs)("div",{className:"approval-body",children:[Object(v.jsxs)("div",{className:"approval-contain-wrap",children:[Object(v.jsxs)("div",{className:"approval-line",children:[Object(v.jsx)("span",{className:"approval-line-label",children:"\u5ba1\u6279\u540d\u79f0\uff1a"}),Object(v.jsx)("span",{className:"approval-line-input",children:a})]}),Object(v.jsx)("div",{className:"approval-tip",children:"\u8868\u5355\u8bbe\u7f6e"}),Object(v.jsxs)("div",{className:"approval-miti-line",children:[Object(v.jsx)("span",{className:"approval-miti-label",children:"\u6536\u6b3e\u8d26\u6237"}),Object(v.jsx)("div",{className:"approval-miti-checkbox-wrap",children:j.map((function(t){return Object(v.jsxs)("div",{className:"approval-miti-checkbox",children:[Object(v.jsx)("input",{type:"checkbox",name:t,checked:n.indexOf(t)>-1?"checked":"",onChange:function(a){var i=n.concat(),c=function(e,t,a){return e.target.checked?a.push(t):a=a.filter((function(e){return e!==t})),a}(a,t,i);e.setState({moneyFieldList:c})}}),Object(v.jsx)("span",{children:t})]},t)}))})]}),Object(v.jsxs)("div",{className:"approval-line",children:[Object(v.jsx)("input",{disabled:!o,className:"approval-line-switch-input",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:i,onChange:function(t){e.setState({selectFieldName:t.target.value})}}),Object(v.jsx)("span",{className:"approval-line-switch-label",children:"\u5355\u9009\u6846"}),Object(v.jsx)("input",{type:"checkbox",checked:o,onChange:function(t){e.setState({selectFieldOpen:t.target.checked})}})]}),Object(v.jsxs)("div",{className:"approval-line",children:[Object(v.jsx)("input",{disabled:!r,className:"approval-line-switch-input",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:c,onChange:function(t){e.setState({dateFieldName:t.target.value})}}),Object(v.jsx)("span",{className:"approval-line-switch-label",children:"\u65e5\u671f"}),Object(v.jsx)("input",{type:"checkbox",checked:r,onChange:function(t){e.setState({dateFieldOpen:t.target.checked})}})]}),Object(v.jsxs)("div",{className:"approval-line",children:[Object(v.jsx)("input",{disabled:!l,className:"approval-line-switch-input",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:s,onChange:function(t){e.setState({textFieldName:t.target.value})}}),Object(v.jsx)("span",{className:"approval-line-switch-label",children:"\u5355\u884c\u8f93\u5165\u6846"}),Object(v.jsx)("input",{type:"checkbox",checked:l,onChange:function(t){e.setState({textFieldOpen:t.target.checked})}})]})]}),Object(v.jsx)("div",{className:"approval-footer",onClick:function(){if(!n.length)return h("\u6536\u6b3e\u8d26\u6237\u81f3\u5c11\u52fe\u9009\u4e00\u4e2a");if(o&&!i)return h("\u5355\u9009\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(i.length>16)return h("\u5355\u9009\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(r&&!c)return h("\u65e5\u671f\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(c.length>16)return h("\u65e5\u671f\u7ec4\u4ef6\u7684\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc716\u4e2a\u5b57\u7b26");if(l&&!s)return h("\u5355\u884c\u8f93\u5165\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u5fc5\u586b");if(s.length>16)return h("\u5355\u884c\u8f93\u5165\u6846\u7ec4\u4ef6\u7684\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc716\u4e2a\u5b57\u7b26");var t={moneyFieldList:n,selectFieldOpen:o,selectFieldName:i,dateFieldOpen:r,dateFieldName:c,textFieldOpen:l,textFieldName:s};e.saveAproval(t)},children:"\u65b0\u589e\u6a21\u7248"})]})}}]),a}(i.a.Component),b={start:"\u8fdb\u884c\u4e2d",agree:"\u5b8c\u6210",refuse:"\u62d2\u7edd",terminate:"\u64a4\u9500",delete:"\u5220\u9664",cancel:"\u53d6\u6d88"},O=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getInstanceList=function(){u.a.get(n.props.domain+"/biz/list/instance").then((function(e){console.log(JSON.stringify(e)),e.data.success?n.setState({instanceList:e.data.data}):h("".concat(e.data.errorMsg))})).catch((function(e){console.log("corpId err, "+JSON.stringify(e))}))},n.state={instanceList:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getInstanceList()}},{key:"previewApproval",value:function(e){!function(e){m.biz.util.openLink({url:e,onSuccess:function(){},onFail:function(){}})}("https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?dd_share=false&showmenu=true&dd_progress=false&back=native&corpid=".concat(this.props.corpId,"&swfrom=","XFN","#/approval?procInstId=").concat(e))}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"approval-body",children:[Object(v.jsxs)("div",{className:"approval-contain-wrap",children:[this.state.instanceList.map((function(t){return Object(v.jsxs)("div",{className:"approval-list-item",children:[Object(v.jsxs)("div",{className:"approval-list-item-line approval-list-item-margin",children:[Object(v.jsx)("span",{className:"approval-list-item-name",children:t.processTitle}),Object(v.jsx)("span",{className:"approval-list-item-date",children:t.createTime})]}),Object(v.jsxs)("div",{className:"approval-list-item-line",children:[Object(v.jsxs)("span",{className:"approval-list-item-state",children:["\u5f53\u524d\u5ba1\u6279\u72b6\u6001\uff1a",b[t.processStatus]]}),Object(v.jsx)("span",{className:"approval-list-item-link",onClick:e.previewApproval.bind(e,t.processInstanceId),children:"\u67e5\u770b\u8be6\u60c5\u300b"})]})]},t.processInstanceId)})),Object(v.jsx)("div",{className:"approval-list-tip",children:"*\u4ec5\u663e\u793a\u5f53\u6b21\u8fd0\u884cdemo\u65f6\u53d1\u8d77\u7684\u5ba1\u6279\u5b9e\u4f8b"})]}),Object(v.jsx)("div",{className:"approval-footer",onClick:function(){e.getInstanceList()},children:"\u5237\u65b0\u5217\u8868"})]})}}]),a}(i.a.Component),g=[{name:"\u914d\u7f6e\u6a21\u7248",key:"temp"},{name:"\u5ba1\u6279\u6570\u636e",key:"list"}],N=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={domain:"",corpId:"",authCode:"",userId:"",userName:"",page:"temp"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){navigator.userAgent.toLowerCase().indexOf("dingtalk")>-1&&m.biz.navigation.setTitle({title:"\u6536\u5165\u65e5\u62a5demo"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.domain,n=t.corpId,i=t.page;return""===this.state.userId&&this.login(),Object(v.jsxs)("div",{className:"app-wrap",children:[Object(v.jsx)("div",{className:"app-tit-wrap",children:g.map((function(t,a){return Object(v.jsx)("div",{className:i===t.key?"app-tit-item app-tit-item-cur":"app-tit-item",onClick:function(){e.setState({page:t.key})},children:t.name},t.key)}))}),"temp"===i?Object(v.jsx)(f,{domain:a,corpId:n}):Object(v.jsx)(O,{domain:a,corpId:n})]})}},{key:"login",value:function(){var e=this;u.a.get(this.state.domain+"/getCorpId").then((function(t){console.log(JSON.stringify(t)),t.data&&e.loginAction(t.data.data)})).catch((function(e){console.log("corpId err, "+JSON.stringify(e))}))}},{key:"loginAction",value:function(e){console.log("corpId: "+e);var t=this;m.runtime.permission.requestAuthCode({corpId:e,onSuccess:function(a){t.state.authCode=a.code,u.a.get(t.state.domain+"/login?authCode="+t.state.authCode).then((function(a){if(a&&a.data.success){var n=a.data.data.userId,i=a.data.data.userName;alert("\u767b\u5f55\u6210\u529f\uff0c\u4f60\u597d"+i),setTimeout((function(){t.setState({userId:n,userName:i,corpId:e})}),0)}else console.log("login failed ---\x3e"+JSON.stringify(a))})).catch((function(e){console.log("httpRequest failed ---\x3e"+JSON.stringify(e))}))},onFail:function(e){console.log("requestAuthCode failed ---\x3e"+JSON.stringify(e))}})}}]),a}(i.a.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,283)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),x()},37:function(e,t,a){},56:function(e,t,a){}},[[282,1,2]]]);
//# sourceMappingURL=main.11b14a30.chunk.js.map