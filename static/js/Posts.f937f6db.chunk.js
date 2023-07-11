"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[847],{856:function(e,t,n){n.d(t,{$:function(){return r}});var r=n(1243).Z.create({baseURL:"https://jsonplaceholder.typicode.com/",headers:{"Content-type":"application/json; charset=UTF-8"}})},7289:function(e,t,n){n.d(t,{G:function(){return s}});var r=n(856),s={getPosts:function(e,t){return r.$.get("posts?_limit=".concat(e,"&_page=").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},getUserPosts:function(e,t,n){return r.$.get("posts?userId=".concat(e,"&_limit=").concat(t,"&_page=").concat(n)).then((function(e){return e.data})).catch((function(e){return e}))},getCurrPost:function(e){return r.$.get("posts/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}}},6692:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(856),s={getUsers:function(e){return r.$.get("users?_page=".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))},getCurrUser:function(e){return r.$.get("users/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}}},8385:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(9439),s=n(2791),c=n(3433),i=n(4165),a=n(1413),u=n(5861),o=n(7689),l=n(1614),d=n(4554),x=n(890),f=n(184),p=function(e){var t=e.post,n=(0,o.s0)();return(0,f.jsx)(l.Z,{disableGutters:!0,maxWidth:!1,onClick:function(){return n("/posts/".concat(t.id),{replace:!1})},children:(0,f.jsxs)(d.Z,{sx:{display:"flex",gap:"10px",flexDirection:"column"},children:[(0,f.jsx)(d.Z,{children:(0,f.jsx)(x.Z,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ".concat(t.title)})}),(0,f.jsx)(d.Z,{children:(0,f.jsx)(x.Z,{children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435: ".concat(t.body)})})]})})},h=n(7289),m=n(493),Z=n(5021),g=n(6278),j=n(3967),v=n(3543),b=n(9658),U=n(8433),y=n(1087),k=(0,s.memo)((function(e){var t=e.posts,n=e.setPosts,k=e.currUser,w=e.setUser,C=e.currLimit,L=(0,j.Z)().palette.mode,P=(0,y.lr)(),D=(0,r.Z)(P,2),S=D[0],I=D[1],G=(0,s.useState)(1),_=(0,r.Z)(G,2),$=_[0],E=_[1],R=(0,s.useState)(!1),H=(0,r.Z)(R,2),W=H[0],O=H[1],z=(0,o.TH)(),F={page:$,limit:C},T=(0,s.useState)(!1),V=(0,r.Z)(T,2),Y=V[0],q=V[1],A=(0,U.YD)({threshold:0}),B=A.ref,J=A.inView;return(0,s.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){var t,r,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(1),t=1,r=F,null!=k){e.next=10;break}return r=(0,a.Z)((0,a.Z)({},r),{},{page:t}),e.next=7,h.G.getPosts(C,"".concat(t));case 7:s=e.sent,n(s),I(new URLSearchParams(r));case 10:if(null==k){e.next=17;break}return r=(0,a.Z)((0,a.Z)({},r),{},{page:t,userId:k}),e.next=14,h.G.getUserPosts(k,C,"".concat(t));case 14:c=e.sent,n(c),I(new URLSearchParams(r));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[k,C]),(0,s.useEffect)((function(){I(z.search);var e=Object.fromEntries((0,c.Z)(S));+e.userId<=10?w(e.userId):+e.userId>10&&(O(!0),w(null))}),[S]),(0,s.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){var t,r,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=17;break}if(E(++$),t=F,r=$,t=(0,a.Z)((0,a.Z)({},F),{},{page:r}),!k){e.next=12;break}return e.next=8,h.G.getUserPosts(k,C,"".concat(r));case 8:s=e.sent,t=(0,a.Z)((0,a.Z)({},F),{},{userId:k}),e.next=15;break;case 12:return e.next=14,h.G.getPosts(C,"".concat(r));case 14:s=e.sent;case 15:n((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(s))})),s.length<1?q(!0):I(new URLSearchParams(t));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[J]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l.Z,{maxWidth:!1,children:[(0,f.jsx)(m.Z,{sx:{display:"flex",gap:"20px",flexDirection:"column"},children:null===t||void 0===t?void 0:t.map((function(e){return(0,f.jsx)(Z.ZP,{disablePadding:!0,sx:{border:"2px solid ".concat("dark"==L?"grey":"#1976D2"),borderRadius:"5px"},children:(0,f.jsx)(g.Z,{sx:{display:"inline"},children:(0,f.jsx)(p,{post:e})})},e.id)}))}),t&&(0,f.jsx)(d.Z,{ref:B,sx:{height:"1px"}}),(0,f.jsx)(v.Z,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:Y,autoHideDuration:6e3,onClose:function(){return q(!1)},children:(0,f.jsx)(b.Z,{onClose:function(){return q(!1)},severity:"info",sx:{width:"100%",backgroundColor:"#0288D1",color:"#fff"},children:(0,f.jsx)(x.Z,{children:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b!"})})}),(0,f.jsx)(v.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:W,onClose:function(){return O(!1)},autoHideDuration:5e3,children:(0,f.jsx)(b.Z,{onClose:function(){return O(!1)},severity:"error",children:(0,f.jsx)(x.Z,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})})})]})})})),w=k,C=n(4925),L=n(9891),P=n(8096),D=n(7787),S=n(6151),I=n(6692),G=(0,s.memo)((function(e){var t=e.setUser,n=e.currUser,c=(0,j.Z)().palette.mode,a=(0,s.useState)(null),o=(0,r.Z)(a,2),l=o[0],d=o[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.h.getUsers("".concat(1));case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)(P.Z,{sx:{display:"flex",gap:"20px"},children:[(0,f.jsx)(C.Z,{id:"demo-simple-select-label",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),(0,f.jsx)(D.Z,{sx:{width:"250px"},labelId:"demo-simple-select-label",id:"demo-simple-select",label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",value:n,onChange:function(e){return t(e.target.value)},children:null===l||void 0===l?void 0:l.map((function(e){return(0,f.jsx)(L.Z,{value:e.id,children:e.name},e.id)}))}),(0,f.jsx)(S.Z,{sx:{border:".1px solid ".concat("dark"==c?"grey":"#1976D2")},variant:"text",onClick:function(){return t(null)},children:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})]})})),_=G,$=(0,s.memo)((function(e){var t=e.currLimit,n=e.setLimit;return(0,f.jsxs)(P.Z,{children:[(0,f.jsx)(C.Z,{id:"demo-simple-select-label",children:"\u041b\u0438\u043c\u0438\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"}),(0,f.jsx)(D.Z,{sx:{width:"250px"},labelId:"demo-simple-select-labels",id:"demo-simple-select",label:"\u041b\u0438\u043c\u0438\u0442 \u043f\u043e\u0441\u0442\u043e\u0432",value:t,onChange:function(e){return n(e.target.value)},children:["10","15","20","25","30"].map((function(e){return(0,f.jsx)(L.Z,{value:e,children:e},e)}))})]})})),E=function(e){var t=e.setUser,n=e.currUser,r=e.currLimit,s=e.setLimit;return(0,f.jsx)(l.Z,{maxWidth:!1,disableGutters:!0,children:(0,f.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"20px"},children:[(0,f.jsx)($,{currLimit:r,setLimit:s}),(0,f.jsx)(_,{currUser:n,setUser:t})]})})},R=(0,s.memo)((function(){var e=(0,s.useState)(null),t=(0,r.Z)(e,2),n=t[0],c=t[1],i=(0,s.useState)(null),a=(0,r.Z)(i,2),u=a[0],o=a[1],x=(0,s.useState)("20"),p=(0,r.Z)(x,2),h=p[0],m=p[1];return(0,f.jsx)(l.Z,{disableGutters:!0,maxWidth:"xl",sx:{mt:"20px",minHeight:"100vh"},children:(0,f.jsxs)(d.Z,{sx:{px:"20px",gap:"30px",display:"flex",flexDirection:{xs:"column",md:"row"}},children:[(0,f.jsx)(d.Z,{children:(0,f.jsx)(E,{setLimit:m,currLimit:h,currUser:u,setUser:o})}),(0,f.jsx)(d.Z,{children:(0,f.jsx)(w,{currLimit:h,currUser:u,setUser:o,setPosts:c,posts:n})})]})})}))}}]);
//# sourceMappingURL=Posts.f937f6db.chunk.js.map