(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var i=n(20),r=n.n(i),c=n(0),l=n(21),o=n(8),a=n(2),s=n(81),d=n(98),u=n(1);function f(){return Object(u.jsxs)(a.default,{style:j.body,children:[Object(u.jsx)(s.default,{size:"large"}),Object(u.jsx)(d.StatusBar,{style:"auto"})]})}var j=o.default.create({body:{display:"flex",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f2f2f6",paddingHorizontal:15}}),b=n(269),x=n(12),h=n(47),g=n(97),O=function(e){var t=e.data,n=e.introduced;return Object(u.jsx)(b.default,{style:m.container,children:Object(u.jsxs)(a.default,{style:m.box,children:[Object(u.jsx)(x.default,{selectable:!1,style:m.text,children:t.title}),Object(u.jsx)(g.default,{children:void 0!==t?t.content:""}),Object(u.jsx)(h.default,{style:m.button,onPress:function(){n(!0)},children:Object(u.jsx)(x.default,{children:t.buttonText})})]})})},m=o.default.create({container:{position:"absolute",left:0,bottom:0,right:0,height:"100%",width:"100%",overflow:"hidden"},text:{fontWeight:"bold",padding:10,fontSize:17},box:{width:"50%",position:"absolute",left:"25vw",top:"50vh",display:"flex",backgroundColor:"#fff",border:"1px solid #000",borderRadius:33,alignItems:"center",justifyContent:"flex-start",marginVertical:10},button:{backgroundColor:"#5bc8af",borderRadius:33,padding:10,margin:10}}),y=n(36),p=n.n(y),v=function(e){var t=e.title,n=e.name;return Object(u.jsxs)(a.default,{style:w.box,children:[Object(u.jsx)(x.default,{style:w.title,children:t}),Object(u.jsxs)(x.default,{style:w.name,children:["by ",n]})]})},w=o.default.create({title:{marginTop:75,fontSize:34,fontWeight:"bold",color:"black",textAlignc:"center"},box:{width:"50hw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},name:{fontSize:20,fontStyle:"italic",color:"gray"}}),S=n(46),C=function(e){var t=e.results,n=e.res,i="";return n.forEach((function(e){e.breakpoint<=t&&(i=e.message)})),Object(u.jsxs)(a.default,{style:R.container,children:[Object(u.jsx)(x.default,{style:R.text,children:i}),Object(u.jsx)(a.default,{style:R.sphere,children:Object(u.jsxs)(x.default,{style:R.result,children:[t,"%"]})})]})},R=o.default.create({container:{width:275,height:75,display:"flex",backgroundColor:"#F2AE00",borderRadius:33,alignItems:"center",justifyContent:"center",marginBottom:30},text:{fontWeight:"bold",padding:10,fontSize:14,marginRight:90,textAlign:"center"},sphere:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",color:"#00a368",width:105,height:105,borderRadius:105,backgroundColor:"#00a368",transform:[{translateX:100}]},result:{fontSize:40,fontWeight:"bold"}}),k=Object(l.atom)({key:"selected",default:[]}),I=Object(l.atom)({key:"results",default:-1}),z=Object(l.atom)({key:"pairing",default:[]}),W=Object(l.atom)({key:"settings",default:{}}),A=function(e){var t=e.expl,n=Object(l.useRecoilState)(W),i=r()(n,2),c=i[0];i[1];return Object(u.jsxs)(a.default,{style:F.container,children:[Object(u.jsx)(x.default,{style:F.text,children:c.explanation}),Object(u.jsx)(x.default,{children:t})]})},F=o.default.create({container:{display:"flex",backgroundColor:"#F2AE00",borderRadius:10,alignItems:"center",justifyContent:"center",marginBottom:30,padding:10},text:{fontWeight:"bold",padding:5,fontSize:17},expl:{fontSize:14,color:"black",textAlign:"center"},row:{width:275},column:{width:"90%"}}),D=function(e){var t=e.devices,n=e.res,i=Object(l.useRecoilState)(I),c=r()(i,2),o=c[0],s=(c[1],Object(l.useRecoilState)(k)),d=r()(s,2),f=d[0],j=(d[1],Object(S.useMediaQuery)({maxDeviceWidth:1224}));return Object(u.jsxs)(a.default,{style:[B.container,j?B.column:B.row],children:[-1!==o?Object(u.jsx)(C,{results:o,res:n}):Object(u.jsx)(u.Fragment,{}),-1!==o&&f.includes(!0)?Object(u.jsx)(A,{expl:t[f.indexOf(!0)].explanation}):Object(u.jsx)(u.Fragment,{})]})},B=o.default.create({container:{display:"flex",backgroundColor:"#fff",alignItems:"center",justifyContent:"flex-start",marginHorizontal:20},row:{width:"20%"},column:{width:"90%"}}),P=n(50),V=function(e){var t=e.id,n=e.count,i=e.device,c=e.paraghraph,o=e.size,a=Object(l.useRecoilState)(k),s=r()(a,2),d=s[0],f=s[1],j=Object(l.useRecoilState)(z),b=r()(j,2),h=b[0],g=(b[1],Object(l.useRecoilState)(I)),O=r()(g,2),m=O[0];O[1];return Object(u.jsxs)(x.default,{children:[c.substring(0,i.range[0]-n),Object(u.jsx)(x.default,{onPress:function(){var e=Array(o).fill(!1,0,o);e[t]=!d[t],f(e)},children:Object(u.jsx)(x.default,{style:[E.device,0!=h.length&&-1!=h[t].deviceId?E.deviceSelectedAssigned:{},d[t]?E.deviceSelected:{},-1!=m?h[t].deviceId===i.name?E.correcr:E.incorrect:{}],children:c.substring(i.range[0]-n,i.range[1]-n)})}),c.substring(i.range[1]-n,n+c.length)]})},E=o.default.create({device:{color:"#5bc8af"},deviceSelected:{backgroundColor:"#d9d9d9dd",alignSelf:"flex-start"},deviceSelectedAssigned:{borderWidth:1,borderColor:"black",borderRadius:2,color:"#577FFF"},correcr:{color:"#5bc8af"},incorrect:{color:"#ff0000"}}),M=function(e){var t=e.text,n=e.devices,i=0,r=Object(S.useMediaQuery)({maxDeviceWidth:1224});return Object(u.jsx)(a.default,{style:[T.container,r?T.column:T.row],children:Object(u.jsx)(P.default,{nestedScrollEnabled:!0,children:Object(u.jsx)(a.default,{style:T.paper,children:t.split("\n").map((function(e,t){var r=e.length,c=!1,l=Object(u.jsxs)(x.default,{style:T.text,children:[n.map((function(t,l){if(r+i>t.range[0]&&i<=t.range[0]&&r+i>=t.range[1]&&i<t.range[1])return c=!0,Object(u.jsx)(V,{id:l,count:i,device:t,paraghraph:e,size:n.length},l)})),c?"":e]},t);return i+=r,l}))})})})},T=o.default.create({container:{backgroundColor:"#fff",alignItems:"center",justifyContent:"center",border:"1px solid black"},paper:{flex:1,marginVertical:45,marginHorizontal:75,display:"flex",flexDirection:"column",flexWrap:"wrap"},text:{textAlign:"left",fontSize:22,fontFamily:"Times New Roman",paddingVertical:10},row:{width:"50%"},column:{width:"90%",marginBottom:50}}),H=function(e){var t=e.text,n=e.onPress;return Object(u.jsx)(h.default,{onPress:n,children:Object(u.jsx)(a.default,{style:Q.container,children:Object(u.jsx)(x.default,{selectable:!1,style:Q.text,children:t})})})},Q=o.default.create({container:{width:275,display:"flex",backgroundColor:"#d9d9d9",borderRadius:33,alignItems:"center",justifyContent:"flex-start",marginVertical:10},text:{fontWeight:"bold",padding:10,fontSize:17}}),q=n(87),J=n(267),N=n(266),X=function(e){var t=e.id,n=e.name,i=e.type,o=e.description,s=Object(c.useState)(!1),d=r()(s,2),f=d[0],j=d[1],b=Object(l.useRecoilState)(z),O=r()(b,2),m=O[0],y=O[1],p=Object(l.useRecoilState)(k),v=p[0].indexOf(!0);return Object(u.jsxs)(a.default,{style:G.container,children:[Object(u.jsxs)(a.default,{style:G.tool,children:[Object(u.jsx)(h.default,{onPress:function(){if(p[0].includes(!0)){var e=m.findIndex((function(e){return e.textId===v})),n=structuredClone(m);n[e].id=m[e].id===t?-1:t,n[e].deviceId=-1===n[e].id?-1:i,y(n),console.log(n)}},children:Object(u.jsx)(a.default,{style:G.buttonSelect,children:p[0].includes(!0)&&m[m.findIndex((function(e){return e.textId===v}))].id===t?Object(u.jsx)(N.default,{name:"square",size:13,color:"black"}):Object(u.jsx)(u.Fragment,{})})}),Object(u.jsx)(x.default,{selectable:!1,style:G.device,children:n})]}),Object(u.jsxs)(a.default,{children:[Object(u.jsx)(q.default,{animationType:"slide",transparent:!0,visible:f,onRequestClose:function(){j(!f)},children:Object(u.jsx)(a.default,{style:G.centeredView,children:Object(u.jsxs)(a.default,{style:G.modalView,children:[Object(u.jsx)(g.default,{children:o}),Object(u.jsx)(h.default,{style:G.buttonClose,onPress:function(){return j(!f)},children:Object(u.jsx)(x.default,{style:G.textStyle,children:"Close"})})]})})}),Object(u.jsx)(h.default,{onPress:function(){return j(!0)},children:Object(u.jsx)(J.default,{name:"chat-question-outline",size:24,color:"black"})})]})]})},G=o.default.create({container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:20,height:30,width:200},device:{},tool:{display:"flex",flexDirection:"row",alignItems:"center"},buttonSelect:{width:15,height:15,borderRadius:2,backgroundColor:"#d9d9d9",marginRight:10,display:"flex",alignItems:"center",justifyContent:"center"},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},buttonClose:{backgroundColor:"#2196F3",padding:10,borderRadius:20},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"justify"}}),K=function(e){var t=e.tools,n=e.guides,i=Object(S.useMediaQuery)({maxDeviceWidth:1224}),c=Object(l.useRecoilState)(W),o=r()(c,2),s=o[0],d=(o[1],Object(l.useRecoilState)(z)),f=r()(d,2),j=f[0],b=(f[1],0);return j.forEach((function(e){-1!==e.deviceId&&b++})),Object(u.jsxs)(a.default,{style:[L.container,i?L.column:L.row],children:[Object(u.jsxs)(x.default,{style:L.text,children:[s.rhetoricHeadline," (",b,"/6)"]}),t.map((function(e,t){return Object(u.jsx)(X,{id:t,name:n[e.name].name,type:e.name,description:n[e.name].description},t)}))]})},L=o.default.create({container:{display:"flex",backgroundColor:"#5bc8af",borderRadius:33,alignItems:"center",justifyContent:"flex-start",paddingBottom:20},text:{fontWeight:"bold",padding:10,fontSize:17},row:{width:275},column:{width:"90%"}}),U=function(e){var t=e.tools,n=e.size,i=e.id,c=e.info,o=e.guides,s=e.textSetter,d=Object(l.useRecoilState)(I),f=r()(d,2),j=f[0],b=f[1],x=Object(l.useRecoilState)(z),h=r()(x,2),g=h[0],O=(h[1],Object(l.useRecoilState)(W)),m=r()(O,2),y=m[0],p=(m[1],Object(S.useMediaQuery)({maxDeviceWidth:1224}));return Object(u.jsxs)(a.default,{style:[Y.container,p?Y.column:Y.row],children:[Object(u.jsx)(K,{guides:o,tools:t}),-1===j?Object(u.jsx)(H,{text:y.checkAnswersButton,onPress:function(){for(var e=0,t=function(t){var n=g.findIndex((function(e){return e.textId===t}));g[n].deviceId===c.devices[t].name&&e++},n=0;n<g.length;n++)t(n);console.log(g),console.log(c.devices),b(Math.trunc(e/g.length*100))}}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)(H,{text:y.nextButton,onPress:function(){s((i+1)%n)}})]})},Y=o.default.create({container:{flexWrap:"wrap",display:"flex",backgroundColor:"#fff",alignItems:"center",justifyContent:"flex-start",marginHorizontal:20},row:{width:"20%"},column:{width:"90%"}}),Z=(n(257),function(e){var t=e.data,n=e.textState,i=Object(l.useRecoilState)(k),o=r()(i,2),s=(o[0],o[1]),f=Object(l.useRecoilState)(z),j=r()(f,2),b=(j[0],j[1]),x=Object(l.useRecoilState)(I),h=r()(x,2),g=(h[0],h[1]),O=Object(l.useRecoilState)(W),m=r()(O,2),y=(m[0],m[1]),w=r()(n,2),C=w[0],R=w[1],A=Object(c.useState)([]),F=r()(A,2),B=F[0],P=F[1];Object(c.useEffect)((function(){y(null==t?void 0:t.settings)}),[]),Object(c.useEffect)((function(){void 0!==t&&(g(-1),P(p()(null==t?void 0:t.texts[C].devices).sort((function(){return Math.random()-.5}))),s(Array(6).fill(!1,0,null==t?void 0:t.texts[C].devices.length)),b(Array.from(Array(6),(function(e,t){return{textId:t,deviceId:-1,id:-1}}))))}),[C]);var V=Object(S.useMediaQuery)({maxDeviceWidth:1224});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{title:null==t?void 0:t.texts[C].name,name:null==t?void 0:t.texts[C].author}),Object(u.jsxs)(a.default,{style:[$.container,V?$.column:$.row],children:[Object(u.jsx)(D,{devices:null==t?void 0:t.texts[C].devices,res:null==t?void 0:t.results}),Object(u.jsx)(M,{text:null==t?void 0:t.texts[C].text,devices:null==t?void 0:t.texts[C].devices}),Object(u.jsx)(U,{tools:B,id:C,size:null==t?void 0:t.texts.length,info:null==t?void 0:t.texts[C],guides:null==t?void 0:t.guides,textSetter:R})]}),Object(u.jsx)(d.StatusBar,{style:"auto"})]})}),$=o.default.create({container:{flex:1,width:"100%",display:"flex",backgroundColor:"#fff",justifyContent:"space-around",marginVertical:50,marginTop:45},row:{alignItems:"flex-start",flexDirection:"row"},column:{alignItems:"center",flexDirection:"column-reverse"}});function _(){var e=Object(c.useState)(0),t=Object(c.useState)(!1),n=r()(t,2),i=n[0],o=n[1],a=Object(c.useState)(!0),s=r()(a,2),d=s[0],j=s[1],b=Object(c.useState)(void 0),x=r()(b,2),h=x[0],g=x[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/lampask/grasp-eng/dev/texts.json").then((function(e){return e.json()})).then((function(e){e.texts=e.texts.sort((function(){return Math.random()-.5})),g(e)})).catch((function(e){return console.error(e)})).finally((function(){return j(!1)}))}),[]),Object(u.jsx)(l.RecoilRoot,{children:d?Object(u.jsx)(f,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Z,{data:h,textState:e}),i?Object(u.jsx)(u.Fragment,{}):Object(u.jsx)(O,{data:null==h?void 0:h.intro,introduced:o})]})})}},160:function(e,t,n){e.exports=n(261)}},[[160,1,2]]]);
//# sourceMappingURL=app.b58d6da5.chunk.js.map