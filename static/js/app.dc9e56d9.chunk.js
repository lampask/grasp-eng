(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));var r=n(20),i=n.n(r),l=n(0),c=n(24),a=n(8),o=n(2),s=n(81),d=n(98),u=n(1);function f(){return Object(u.jsxs)(o.default,{style:j.body,children:[Object(u.jsx)(s.default,{size:"large"}),Object(u.jsx)(d.StatusBar,{style:"auto"})]})}var j=a.default.create({body:{display:"flex",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f2f2f6",paddingHorizontal:15}}),b=n(269),x=n(15),h=n(46),g=n(97),O=function(e){var t=e.data,n=e.introduced;return Object(u.jsx)(b.default,{style:m.container,children:Object(u.jsxs)(o.default,{style:m.box,children:[Object(u.jsx)(x.default,{selectable:!1,style:m.text,children:t.title}),Object(u.jsx)(g.default,{children:void 0!==t?t.content:""}),Object(u.jsx)(h.default,{onPress:function(){n(!0)},children:Object(u.jsx)(x.default,{children:t.buttonText})})]})})},m=a.default.create({container:{position:"absolute",left:0,bottom:0,right:0,height:"100%"},text:{fontWeight:"bold",padding:10,fontSize:17},box:{width:"50%",position:"absolute",left:"25vw",top:"50vh",display:"flex",backgroundColor:"#fff",border:"1px solid #000",borderRadius:33,alignItems:"center",justifyContent:"flex-start",marginVertical:10}}),y=n(36),p=n.n(y),v=function(e){var t=e.title,n=e.name;return Object(u.jsxs)(o.default,{style:S.box,children:[Object(u.jsx)(x.default,{style:S.title,children:t}),Object(u.jsxs)(x.default,{style:S.name,children:["by ",n]})]})},S=a.default.create({title:{marginTop:75,fontSize:34,fontWeight:"bold",color:"black",textAlignc:"center"},box:{width:"50hw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},name:{fontSize:20,fontStyle:"italic",color:"gray"}}),w=function(e){var t=e.results,n=e.res,r="";return n.forEach((function(e){e.breakpoint<=t&&(r=e.message)})),Object(u.jsxs)(o.default,{style:C.container,children:[Object(u.jsx)(x.default,{style:C.text,children:r}),Object(u.jsx)(o.default,{style:C.sphere,children:Object(u.jsxs)(x.default,{style:C.result,children:[t,"%"]})})]})},C=a.default.create({container:{width:275,height:75,display:"flex",backgroundColor:"#5bc8af",borderRadius:33,alignItems:"center",justifyContent:"center",marginBottom:30},text:{fontWeight:"bold",padding:10,fontSize:14,marginRight:90,textAlign:"center"},sphere:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",color:"#00a368",width:105,height:105,borderRadius:105,backgroundColor:"#00a368",transform:[{translateX:100}]},result:{fontSize:40,fontWeight:"bold"}}),k=Object(c.atom)({key:"selected",default:[]}),R=Object(c.atom)({key:"results",default:-1}),I=Object(c.atom)({key:"pairing",default:[]}),z=Object(c.atom)({key:"settings",default:{}}),W=function(e){var t=e.res,n=Object(c.useRecoilState)(R),r=i()(n,2),l=r[0];r[1];return Object(u.jsx)(o.default,{style:A.container,children:-1!==l?Object(u.jsx)(w,{results:l,res:t}):Object(u.jsx)(u.Fragment,{})})},A=a.default.create({container:{minWidth:230,display:"flex",backgroundColor:"#fff",alignItems:"center",justifyContent:"flex-start",marginHorizontal:20}}),F=n(49),D=n(65),P=function(e){var t=e.id,n=e.count,r=e.device,a=e.paraghraph,o=e.size,s=Object(l.useState)(!1),d=i()(s,2),f=d[0],j=(d[1],Object(c.useRecoilState)(k)),b=i()(j,2),h=b[0],g=b[1];return Object(u.jsxs)(x.default,{children:[a.substring(0,r.range[0]-n),Object(u.jsx)(x.default,{onPress:function(){var e=Array(o).fill(!1,0,o);e[t]=!h[t],g(e)},children:Object(u.jsx)(x.default,{style:h[t]?V.deviceSelected:f?V.deviceHovered:V.device,children:a.substring(r.range[0]-n,r.range[1]-n)})}),a.substring(r.range[1]-n,n+a.length)]})},V=a.default.create({device:{color:"#5bc8af"},deviceHovered:{color:"#5bc8af",backgroundColor:"#d9d9d9aa",alignSelf:"flex-start"},deviceSelected:{color:"#5bc8af",backgroundColor:"#d9d9d9dd",alignSelf:"flex-start"},deviceSelectedAssigned:{borderWidth:1,borderColor:"black",borderRadius:12,padding:1,color:"#577FFF"}}),B=function(e){var t=e.text,n=e.devices,r=0,i=Object(D.useMediaQuery)({maxDeviceWidth:1224});return Object(u.jsx)(o.default,{style:[H.container,i?H.column:H.row],children:Object(u.jsx)(F.default,{nestedScrollEnabled:!0,children:Object(u.jsx)(o.default,{style:H.paper,children:t.split("\n").map((function(e,t){var i=e.length,l=!1,c=Object(u.jsxs)(x.default,{style:H.text,children:[n.map((function(t,c){if(i+r>t.range[0]&&r<=t.range[0]&&i+r>=t.range[1]&&r<t.range[1])return l=!0,Object(u.jsx)(P,{id:c,count:r,device:t,paraghraph:e,size:n.length},c)})),l?"":e]},t);return r+=i,c}))})})})},H=a.default.create({container:{backgroundColor:"#fff",alignItems:"center",justifyContent:"center",border:"1px solid black"},paper:{flex:1,marginVertical:45,marginHorizontal:75,display:"flex",flexDirection:"column",flexWrap:"wrap"},text:{textAlign:"left",fontSize:22,fontFamily:"Times New Roman",paddingVertical:10},row:{width:"50%"},column:{width:"90%",marginBottom:50}}),T=function(e){var t=e.text,n=e.onPress;return Object(u.jsx)(h.default,{onPress:n,children:Object(u.jsx)(o.default,{style:M.container,children:Object(u.jsx)(x.default,{selectable:!1,style:M.text,children:t})})})},M=a.default.create({container:{width:275,display:"flex",backgroundColor:"#d9d9d9",borderRadius:33,alignItems:"center",justifyContent:"flex-start",marginVertical:10},text:{fontWeight:"bold",padding:10,fontSize:17}}),E=n(87),q=n(267),Q=n(266),J=function(e){var t=e.id,n=e.name,r=e.description,a=(e.size,Object(l.useState)(!1)),s=i()(a,2),d=s[0],f=s[1],j=Object(c.useRecoilState)(I),b=i()(j,2),O=b[0],m=b[1],y=Object(c.useRecoilState)(k),p=y[0].indexOf(!0);return Object(u.jsxs)(o.default,{style:N.container,children:[Object(u.jsxs)(o.default,{style:N.tool,children:[Object(u.jsx)(h.default,{onPress:function(){if(y[0].includes(!0)){var e=O.findIndex((function(e){return e.textId===p})),n=structuredClone(O);n[e].deviceId=O[e].deviceId===t?-1:t,m(n)}},children:Object(u.jsx)(o.default,{style:N.buttonSelect,children:y[0].includes(!0)&&O[O.findIndex((function(e){return e.textId===p}))].deviceId===t?Object(u.jsx)(Q.default,{name:"square",size:13,color:"black"}):Object(u.jsx)(u.Fragment,{})})}),Object(u.jsx)(x.default,{selectable:!1,style:N.device,children:n})]}),Object(u.jsxs)(o.default,{children:[Object(u.jsx)(E.default,{animationType:"slide",transparent:!0,visible:d,onRequestClose:function(){f(!d)},children:Object(u.jsx)(o.default,{style:N.centeredView,children:Object(u.jsxs)(o.default,{style:N.modalView,children:[Object(u.jsx)(g.default,{children:r}),Object(u.jsx)(h.default,{style:N.buttonClose,onPress:function(){return f(!d)},children:Object(u.jsx)(x.default,{style:N.textStyle,children:"Close"})})]})})}),Object(u.jsx)(h.default,{onPress:function(){return f(!0)},children:Object(u.jsx)(q.default,{name:"chat-question-outline",size:24,color:"black"})})]})]})},N=a.default.create({container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:20,height:30,width:200},device:{},tool:{display:"flex",flexDirection:"row",alignItems:"center"},buttonSelect:{width:15,height:15,borderRadius:2,backgroundColor:"#d9d9d9",marginRight:10,display:"flex",alignItems:"center",justifyContent:"center"},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},buttonClose:{backgroundColor:"#2196F3",padding:10,borderRadius:20},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"justify"}}),X=function(e){var t=e.tools,n=Object(D.useMediaQuery)({maxDeviceWidth:1224}),r=Object(c.useRecoilState)(z),l=i()(r,2),a=l[0];l[1];return Object(u.jsxs)(o.default,{style:[G.container,n?G.column:G.row],children:[Object(u.jsx)(x.default,{style:G.text,children:a.rhetoricHeadline}),t.map((function(e,n){return Object(u.jsx)(J,{id:n,name:e.name,description:e.description,size:t.length},n)}))]})},G=a.default.create({container:{display:"flex",backgroundColor:"#5bc8af",borderRadius:33,alignItems:"center",justifyContent:"flex-start",paddingBottom:20,alignSelf:"stretch"},text:{fontWeight:"bold",padding:10,fontSize:17},row:{width:275},column:{width:"90%"}}),K=function(e){var t=e.tools,n=e.size,r=e.id,l=e.info,a=e.textSetter,s=Object(c.useRecoilState)(R),d=i()(s,2),f=d[0],j=d[1],b=Object(c.useRecoilState)(I),x=i()(b,2),h=x[0],g=(x[1],Object(c.useRecoilState)(z)),O=i()(g,2),m=O[0];O[1];return Object(u.jsxs)(o.default,{style:L.container,children:[Object(u.jsx)(X,{tools:t}),-1===f?Object(u.jsx)(T,{text:m.checkAnswersButton,onPress:function(){for(var e=0,t=0;t<h.length;t++)h[t].deviceId===l.devices[t].name&&e++;j(Math.trunc(e/h.length*100))}}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)(T,{text:m.nextButton,onPress:function(){a((r+1)%n)}})]})},L=a.default.create({container:{minWidth:230,flexWrap:"wrap",display:"flex",backgroundColor:"#fff",alignItems:"center",justifyContent:"flex-start",marginHorizontal:20}}),U=(n(257),function(e){var t=e.data,n=e.textState,r=Object(c.useRecoilState)(k),a=i()(r,2),s=(a[0],a[1]),f=Object(c.useRecoilState)(I),j=i()(f,2),b=(j[0],j[1]),x=Object(c.useRecoilState)(R),h=i()(x,2),g=(h[0],h[1]),O=Object(c.useRecoilState)(z),m=i()(O,2),y=(m[0],m[1]),S=i()(n,2),w=S[0],C=S[1],A=Object(l.useState)([]),F=i()(A,2),P=F[0],V=F[1];Object(l.useEffect)((function(){y(null==t?void 0:t.settings)}),[]),Object(l.useEffect)((function(){void 0!==t&&(g(-1),V(p()(null==t?void 0:t.texts[w].devices.map((function(e){return null==t?void 0:t.guides[e.name]}))).sort((function(){return Math.random()-.5}))),s(Array(6).fill(!1,0,null==t?void 0:t.texts[w].devices.length)),b(Array.from(Array(6),(function(e,t){return{textId:t,deviceId:-1}}))))}),[w]);var H=Object(D.useMediaQuery)({maxDeviceWidth:1224});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{title:null==t?void 0:t.texts[w].name,name:null==t?void 0:t.texts[w].author}),Object(u.jsxs)(o.default,{style:[Y.container,H?Y.column:Y.row],children:[Object(u.jsx)(W,{res:null==t?void 0:t.results}),Object(u.jsx)(B,{text:null==t?void 0:t.texts[w].text,devices:null==t?void 0:t.texts[w].devices}),Object(u.jsx)(K,{tools:P,id:w,size:null==t?void 0:t.texts.length,info:null==t?void 0:t.texts[w],textSetter:C})]}),Object(u.jsx)(d.StatusBar,{style:"auto"})]})}),Y=a.default.create({container:{flex:1,width:"100%",display:"flex",backgroundColor:"#fff",justifyContent:"space-around",marginVertical:50,marginTop:45},row:{alignItems:"flex-start",flexDirection:"row"},column:{alignItems:"center",flexDirection:"column-reverse"}});function Z(){var e=Object(l.useState)(0),t=Object(l.useState)(!1),n=i()(t,2),r=n[0],a=n[1],o=Object(l.useState)(!0),s=i()(o,2),d=s[0],j=s[1],b=Object(l.useState)(void 0),x=i()(b,2),h=x[0],g=x[1];return Object(l.useEffect)((function(){fetch("https://raw.githubusercontent.com/lampask/grasp-eng/dev/texts.json").then((function(e){return e.json()})).then((function(e){e.texts=e.texts.sort((function(){return Math.random()-.5})),g(e)})).catch((function(e){return console.error(e)})).finally((function(){return j(!1)}))}),[]),Object(u.jsx)(c.RecoilRoot,{children:d?Object(u.jsx)(f,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(U,{data:h,textState:e}),r?Object(u.jsx)(u.Fragment,{}):Object(u.jsx)(O,{data:null==h?void 0:h.intro,introduced:a})]})})}},160:function(e,t,n){e.exports=n(261)}},[[160,1,2]]]);
//# sourceMappingURL=app.dc9e56d9.chunk.js.map