(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__nPr7g",dialogsItems:"Dialogs_dialogsItems__1B6by",dialog:"Dialogs_dialog__hD3of",active:"Dialogs_active__26Q2E",messages:"Dialogs_messages__3J5UR",message:"Dialogs_message__1JDYg",newPost:"Dialogs_newPost__j4_QN",addPost:"Dialogs_addPost__2N1Ja"}},304:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),i=a(130),c=a(1),o=a(12),d=a(298),r=a.n(d),l=function(e){var s="/dialogs"+e.id;return Object(c.jsx)("div",{className:r.a.dialog+" "+r.a.active,children:Object(c.jsx)(o.b,{to:s,children:e.name})})},j=function(e){return Object(c.jsx)("div",{className:r.a.dialog,children:e.message})},g=a(92),u=a(132),b=a(34),m=a(89),O=Object(m.a)(50),h=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{component:b.b,validate:[m.c,O],name:"newMessageBody",placeholder:"Enter your message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send"})})]})})),_=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(c.jsx)(l,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(c.jsx)(j,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?Object(c.jsxs)("div",{className:r.a.dialogs,children:[Object(c.jsx)("div",{className:r.a.dialogsItems,children:a}),Object(c.jsx)("div",{className:r.a.messages,children:Object(c.jsx)("div",{children:t})}),Object(c.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(c.jsx)(n.a.Redirect,{to:"/login"})},f=a(17),x=a(5),v=a(36),p=a(37),D=a(39),P=a(38),w=a(99),y=function(e){return{isAuth:e.auth.isAuth}},N=a(9);s.default=Object(N.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){var s=function(s){Object(D.a)(t,s);var a=Object(P.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(x.a)({},this.props)):Object(c.jsx)(w.a,{to:"/login"})}}]),t}(n.a.Component);return Object(f.b)(y)(s)}))(_)}}]);
//# sourceMappingURL=4.d60e22d7.chunk.js.map