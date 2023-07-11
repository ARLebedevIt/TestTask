"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[275],{856:function(e,n,t){t.d(n,{$:function(){return r}});var r=t(1243).Z.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-type":"application/json; charset=UTF-8"}})},7289:function(e,n,t){t.d(n,{G:function(){return o}});var r=t(856),o={getPosts:function(e,n){return r.$.get("posts?_limit=".concat(e,"&_page=").concat(n)).then((function(e){return e.data})).catch((function(e){return e}))},getUserPosts:function(e,n,t){return r.$.get("posts?userId=".concat(e,"&_limit=").concat(n,"&_page=").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},getCurrPost:function(e){return r.$.get("posts/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}}},6692:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(856),o={getUsers:function(e){return r.$.get("users?_page=".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},getCurrUser:function(e){return r.$.get("users/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}}},9644:function(e,n,t){t.r(n),t.d(n,{default:function(){return De}});var r=t(4165),o=t(5861),i=t(9439),a=t(2791),s=t(7689),c=t(7289),l=t(3433),u=t(856),d=function(e){return u.$.get("posts/".concat(e,"/comments")).then((function(e){return e.data})).catch((function(e){return e}))},f=function(e,n,t,r,o){return u.$.post("comments",{body:e,postId:n,id:t,name:r,email:o}).then((function(e){return e.data})).catch((function(e){return e}))},p=t(3967),m=t(4554),v=t(6151),h=t(1614),x=t(7462),Z=t(3366),g=t(8182),b=t(4419),y=t(8252),k=t(6934),w=t(1402),j=t(292),C=t(4527),S=t(8029),E=t(4925),P=t(8096),R=t(4942),F=t(6147),D=t(2930),T=t(4036),I=t(5878),z=t(1217);function M(e){return(0,z.Z)("MuiFormHelperText",e)}var N,q=(0,I.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),H=t(184),L=["children","className","component","disabled","error","filled","focused","margin","required","variant"],W=(0,k.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.size&&n["size".concat((0,T.Z)(t.size))],t.contained&&n.contained,t.filled&&n.filled]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,x.Z)({color:(t.vars||t).palette.text.secondary},t.typography.caption,(n={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,R.Z)(n,"&.".concat(q.disabled),{color:(t.vars||t).palette.text.disabled}),(0,R.Z)(n,"&.".concat(q.error),{color:(t.vars||t).palette.error.main}),n),"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})})),B=a.forwardRef((function(e,n){var t=(0,w.Z)({props:e,name:"MuiFormHelperText"}),r=t.children,o=t.className,i=t.component,a=void 0===i?"p":i,s=(0,Z.Z)(t,L),c=(0,D.Z)(),l=(0,F.Z)({props:t,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),u=(0,x.Z)({},t,{component:a,contained:"filled"===l.variant||"outlined"===l.variant,variant:l.variant,size:l.size,disabled:l.disabled,error:l.error,filled:l.filled,focused:l.focused,required:l.required}),d=function(e){var n=e.classes,t=e.contained,r=e.size,o=e.disabled,i=e.error,a=e.filled,s=e.focused,c=e.required,l={root:["root",o&&"disabled",i&&"error",r&&"size".concat((0,T.Z)(r)),t&&"contained",s&&"focused",a&&"filled",c&&"required"]};return(0,b.Z)(l,M,n)}(u);return(0,H.jsx)(W,(0,x.Z)({as:a,ownerState:u,className:(0,g.Z)(d.root,o),ref:n},s,{children:" "===r?N||(N=(0,H.jsx)("span",{className:"notranslate",children:"\u200b"})):r}))})),$=t(7787);function U(e){return(0,z.Z)("MuiTextField",e)}(0,I.Z)("MuiTextField",["root"]);var _=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],V={standard:j.Z,filled:C.Z,outlined:S.Z},G=(0,k.ZP)(P.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,n){return n.root}})({}),O=a.forwardRef((function(e,n){var t=(0,w.Z)({props:e,name:"MuiTextField"}),r=t.autoComplete,o=t.autoFocus,i=void 0!==o&&o,a=t.children,s=t.className,c=t.color,l=void 0===c?"primary":c,u=t.defaultValue,d=t.disabled,f=void 0!==d&&d,p=t.error,m=void 0!==p&&p,v=t.FormHelperTextProps,h=t.fullWidth,k=void 0!==h&&h,j=t.helperText,C=t.id,S=t.InputLabelProps,P=t.inputProps,R=t.InputProps,F=t.inputRef,D=t.label,T=t.maxRows,I=t.minRows,z=t.multiline,M=void 0!==z&&z,N=t.name,q=t.onBlur,L=t.onChange,W=t.onClick,O=t.onFocus,A=t.placeholder,X=t.required,Y=void 0!==X&&X,K=t.rows,J=t.select,Q=void 0!==J&&J,ee=t.SelectProps,ne=t.type,te=t.value,re=t.variant,oe=void 0===re?"outlined":re,ie=(0,Z.Z)(t,_),ae=(0,x.Z)({},t,{autoFocus:i,color:l,disabled:f,error:m,fullWidth:k,multiline:M,required:Y,select:Q,variant:oe}),se=function(e){var n=e.classes;return(0,b.Z)({root:["root"]},U,n)}(ae);var ce={};"outlined"===oe&&(S&&"undefined"!==typeof S.shrink&&(ce.notched=S.shrink),ce.label=D),Q&&(ee&&ee.native||(ce.id=void 0),ce["aria-describedby"]=void 0);var le=(0,y.Z)(C),ue=j&&le?"".concat(le,"-helper-text"):void 0,de=D&&le?"".concat(le,"-label"):void 0,fe=V[oe],pe=(0,H.jsx)(fe,(0,x.Z)({"aria-describedby":ue,autoComplete:r,autoFocus:i,defaultValue:u,fullWidth:k,multiline:M,name:N,rows:K,maxRows:T,minRows:I,type:ne,value:te,id:le,inputRef:F,onBlur:q,onChange:L,onFocus:O,onClick:W,placeholder:A,inputProps:P},ce,R));return(0,H.jsxs)(G,(0,x.Z)({className:(0,g.Z)(se.root,s),disabled:f,error:m,fullWidth:k,ref:n,required:Y,color:l,variant:oe,ownerState:ae},ie,{children:[null!=D&&""!==D&&(0,H.jsx)(E.Z,(0,x.Z)({htmlFor:le,id:de},S,{children:D})),Q?(0,H.jsx)($.Z,(0,x.Z)({"aria-describedby":ue,id:le,labelId:de,value:te,input:pe},ee,{children:a})):pe,j&&(0,H.jsx)(B,(0,x.Z)({id:ue},v,{children:j}))]}))})),A=t(3543),X=t(9658),Y=t(6752),K=t(3199),J=t(2071),Q=t(4999),ee=t(7602),ne=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function te(e,n,t){var r,o=function(e,n,t){var r,o=n.getBoundingClientRect(),i=t&&t.getBoundingClientRect(),a=(0,ee.Z)(n);if(n.fakeTransform)r=n.fakeTransform;else{var s=a.getComputedStyle(n);r=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}var c=0,l=0;if(r&&"none"!==r&&"string"===typeof r){var u=r.split("(")[1].split(")")[0].split(",");c=parseInt(u[4],10),l=parseInt(u[5],10)}return"left"===e?"translateX(".concat(i?i.right+c-o.left:a.innerWidth+c-o.left,"px)"):"right"===e?"translateX(-".concat(i?o.right-i.left-c:o.left+o.width-c,"px)"):"up"===e?"translateY(".concat(i?i.bottom+l-o.top:a.innerHeight+l-o.top,"px)"):"translateY(-".concat(i?o.top-i.top+o.height-l:o.top+o.height-l,"px)")}(e,n,"function"===typeof(r=t)?r():r);o&&(n.style.webkitTransform=o,n.style.transform=o)}var re=a.forwardRef((function(e,n){var t=(0,p.Z)(),r={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},o={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},i=e.addEndListener,s=e.appear,c=void 0===s||s,l=e.children,u=e.container,d=e.direction,f=void 0===d?"down":d,m=e.easing,v=void 0===m?r:m,h=e.in,g=e.onEnter,b=e.onEntered,y=e.onEntering,k=e.onExit,w=e.onExited,j=e.onExiting,C=e.style,S=e.timeout,E=void 0===S?o:S,P=e.TransitionComponent,R=void 0===P?Y.ZP:P,F=(0,Z.Z)(e,ne),D=a.useRef(null),T=(0,J.Z)(l.ref,D,n),I=function(e){return function(n){e&&(void 0===n?e(D.current):e(D.current,n))}},z=I((function(e,n){te(f,e,u),(0,Q.n)(e),g&&g(e,n)})),M=I((function(e,n){var r=(0,Q.C)({timeout:E,style:C,easing:v},{mode:"enter"});e.style.webkitTransition=t.transitions.create("-webkit-transform",(0,x.Z)({},r)),e.style.transition=t.transitions.create("transform",(0,x.Z)({},r)),e.style.webkitTransform="none",e.style.transform="none",y&&y(e,n)})),N=I(b),q=I(j),L=I((function(e){var n=(0,Q.C)({timeout:E,style:C,easing:v},{mode:"exit"});e.style.webkitTransition=t.transitions.create("-webkit-transform",n),e.style.transition=t.transitions.create("transform",n),te(f,e,u),k&&k(e)})),W=I((function(e){e.style.webkitTransition="",e.style.transition="",w&&w(e)})),B=a.useCallback((function(){D.current&&te(f,D.current,u)}),[f,u]);return a.useEffect((function(){if(!h&&"down"!==f&&"right"!==f){var e=(0,K.Z)((function(){D.current&&te(f,D.current,u)})),n=(0,ee.Z)(D.current);return n.addEventListener("resize",e),function(){e.clear(),n.removeEventListener("resize",e)}}}),[f,h,u]),a.useEffect((function(){h||B()}),[h,B]),(0,H.jsx)(R,(0,x.Z)({nodeRef:D,onEnter:z,onEntered:N,onEntering:M,onExit:L,onExited:W,onExiting:q,addEndListener:function(e){i&&i(D.current,e)},appear:c,in:h,timeout:E},F,{children:function(e,n){return a.cloneElement(l,(0,x.Z)({ref:T,style:(0,x.Z)({visibility:"exited"!==e||h?void 0:"hidden"},C,l.props.style)},n))}}))})),oe=t(890),ie=function(e){var n=e.setNewComment,t=e.createComment,r=e.newComment,o=e.comments,s=(0,p.Z)().palette.mode,c=(0,a.useState)(!1),l=(0,i.Z)(c,2),u=l[0],d=l[1],f=function(){t({body:r,postId:o[0].postId,id:Number(new Date),name:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d",email:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"}),d(!0),n("")};return(0,H.jsxs)(h.Z,{sx:{display:"flex",gap:"20px",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"center",sm:"unset"}},disableGutters:!0,maxWidth:!1,children:[(0,H.jsx)(O,{sx:{width:{xs:"100%",sm:"300px"}},multiline:!0,onChange:function(e){return n(e.target.value)},value:r,id:"outlined-basic",label:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",variant:"outlined",onKeyDown:function(e){"Enter"==e.code&&""!==r&&(e.preventDefault(),f())}}),(0,H.jsx)(v.Z,{sx:{"&:hover":{backgroundColor:"".concat("dark"==s&&"#90CAF9"),color:"".concat("dark"==s&&"black")},bgcolor:"".concat("dark"==s&&"white")},variant:"contained",disabled:"".concat(r).length<1,onClick:function(){return f()},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),(0,H.jsx)(A.Z,{TransitionComponent:re,anchorOrigin:{vertical:"bottom",horizontal:"center"},open:u,onClose:function(){return d(!1)},autoHideDuration:5e3,children:(0,H.jsx)(X.Z,{onClose:function(){return d(!1)},severity:"success",sx:{width:"100%",backgroundColor:"#2E7D32",color:"#fff"},children:(0,H.jsx)(oe.Z,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d!"})})})]})},ae=(0,a.memo)((function(e){var n=e.id,t=e.postInfo,s=(0,p.Z)().palette.mode,c=(0,a.useState)([]),u=(0,i.Z)(c,2),v=u[0],h=u[1],x=(0,a.useState)(""),Z=(0,i.Z)(x,2),g=Z[0],b=Z[1];(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t){e.next=5;break}return e.next=3,d(n);case 3:o=e.sent,h(o);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o,i,a,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.body,o=n.postId,i=n.id,a=n.name,s=n.email,e.next=3,f(t,o,i,a,s);case 3:c=e.sent,h((function(e){return[].concat((0,l.Z)(e),[c])}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,H.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",gap:"20px",p:"10px"},children:[v.length>1&&(null===v||void 0===v?void 0:v.map((function(e,n){return(0,H.jsx)(a.Fragment,{children:(0,H.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",gap:"5px",pb:"5px",borderBottom:"2px solid ".concat("dark"==s?"grey":"#1976D2"),wordBreak:"break-word"},children:[(0,H.jsx)(m.Z,{children:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f: \u0418\u043c\u044f: ".concat(e.name,", \u041f\u043e\u0447\u0442\u0430: ").concat(e.email)}),(0,H.jsx)(m.Z,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: ".concat(e.body)})]})},n)}))),(0,H.jsx)(ie,{newComment:g,comments:v,setNewComment:b,createComment:y})]})})),se=ae,ce=t(168),le=t(2554);function ue(e){return(0,z.Z)("MuiCircularProgress",e)}(0,I.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var de,fe,pe,me,ve,he,xe,Ze,ge=["className","color","disableShrink","size","style","thickness","value","variant"],be=44,ye=(0,le.F4)(ve||(ve=de||(de=(0,ce.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),ke=(0,le.F4)(he||(he=fe||(fe=(0,ce.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),we=(0,k.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["color".concat((0,T.Z)(t.color))]]}})((function(e){var n=e.ownerState,t=e.theme;return(0,x.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:t.transitions.create("transform")},"inherit"!==n.color&&{color:(t.vars||t).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,le.iv)(xe||(xe=pe||(pe=(0,ce.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),ye)})),je=(0,k.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),Ce=(0,k.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var t=e.ownerState;return[n.circle,n["circle".concat((0,T.Z)(t.variant))],t.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,t=e.theme;return(0,x.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,le.iv)(Ze||(Ze=me||(me=(0,ce.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),ke)})),Se=a.forwardRef((function(e,n){var t=(0,w.Z)({props:e,name:"MuiCircularProgress"}),r=t.className,o=t.color,i=void 0===o?"primary":o,a=t.disableShrink,s=void 0!==a&&a,c=t.size,l=void 0===c?40:c,u=t.style,d=t.thickness,f=void 0===d?3.6:d,p=t.value,m=void 0===p?0:p,v=t.variant,h=void 0===v?"indeterminate":v,y=(0,Z.Z)(t,ge),k=(0,x.Z)({},t,{color:i,disableShrink:s,size:l,thickness:f,value:m,variant:h}),j=function(e){var n=e.classes,t=e.variant,r=e.color,o=e.disableShrink,i={root:["root",t,"color".concat((0,T.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,T.Z)(t)),o&&"circleDisableShrink"]};return(0,b.Z)(i,ue,n)}(k),C={},S={},E={};if("determinate"===h){var P=2*Math.PI*((be-f)/2);C.strokeDasharray=P.toFixed(3),E["aria-valuenow"]=Math.round(m),C.strokeDashoffset="".concat(((100-m)/100*P).toFixed(3),"px"),S.transform="rotate(-90deg)"}return(0,H.jsx)(we,(0,x.Z)({className:(0,g.Z)(j.root,r),style:(0,x.Z)({width:l,height:l},S,u),ownerState:k,ref:n,role:"progressbar"},E,y,{children:(0,H.jsx)(je,{className:j.svg,ownerState:k,viewBox:"".concat(22," ").concat(22," ").concat(be," ").concat(be),children:(0,H.jsx)(Ce,{className:j.circle,style:C,ownerState:k,cx:be,cy:be,r:(be-f)/2,fill:"none",strokeWidth:f})})}))})),Ee=t(2564),Pe=t(6692),Re=function(e){var n=e.postInfo,t=(0,p.Z)().palette.mode,s=(0,a.useState)(null),c=(0,i.Z)(s,2),l=c[0],u=c[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,Pe.h.getCurrUser("".concat(n.userId));case 6:t=e.sent,u(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,H.jsx)(h.Z,{disableGutters:!0,maxWidth:!1,children:(0,H.jsxs)(m.Z,{sx:{display:"flex",gap:"15px",flexDirection:"column",p:"10px",border:"2px solid ".concat("dark"==t?"grey":"#1976D2"),borderRadius:"5px"},children:[(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u0410\u0432\u0442\u043e\u0440 \u043f\u043e\u0441\u0442\u0430: ".concat(null===l||void 0===l?void 0:l.name)})}),(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440: ".concat(null===l||void 0===l?void 0:l.id)})}),(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: Mail: ".concat(null===l||void 0===l?void 0:l.email,", \u0422\u0435\u043b\u0435\u0444\u043e\u043d: ").concat(null===l||void 0===l?void 0:l.phone)})}),(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u0421\u0430\u0439\u0442: ".concat(null===l||void 0===l?void 0:l.website)})})]})})},Fe=(0,a.memo)((function(){var e=(0,Ee.u)().palette.mode,n=(0,a.useState)(null),t=(0,i.Z)(n,2),l=t[0],u=t[1],d=(0,a.useState)(!1),f=(0,i.Z)(d,2),p=f[0],v=f[1],x=(0,s.UO)().id;return(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===x){e.next=5;break}return e.next=3,c.G.getCurrPost(x);case 3:n=e.sent,u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),v(!0)}),[x]),(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(h.Z,{maxWidth:"xl",sx:{display:"flex",gap:"20px",flexDirection:"column",py:"20px",minHeight:"100%"},children:[l?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(m.Z,{children:(0,H.jsx)(Re,{postInfo:l})}),(0,H.jsxs)(m.Z,{sx:{display:"flex",gap:"15px",flexDirection:"column",p:"10px",border:"2px solid ".concat("dark"==e?"grey":"#1976D2"),borderRadius:"5px"},children:[(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u0441\u0442\u0430: ".concat(null===l||void 0===l?void 0:l.id)})}),(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430: ".concat(null===l||void 0===l?void 0:l.title)})}),(0,H.jsx)(m.Z,{children:(0,H.jsx)(oe.Z,{children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u043e\u0441\u0442\u0430: ".concat(null===l||void 0===l?void 0:l.body)})})]}),(0,H.jsx)(m.Z,{sx:{border:"2px solid ".concat("dark"==e?"grey":"#1976D2"),borderRadius:"5px"},children:(0,H.jsx)(se,{postInfo:l,id:x})})]}):(0,H.jsx)(m.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,H.jsx)(Se,{size:"70px"})}),(0,H.jsx)(A.Z,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:p,onClose:function(){return v(!1)},autoHideDuration:3e3,children:(0,H.jsx)(X.Z,{severity:"info",sx:{width:"100%",backgroundColor:"#0288D1",color:"#fff"},children:(0,H.jsx)(oe.Z,{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u0441\u0442\u0435"})})})]})})})),De=Fe}}]);
//# sourceMappingURL=PostInfo.f8ffb2f8.chunk.js.map