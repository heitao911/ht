import{as as t,at as a,k as e,U as s,aF as i,q as n,y as l,X as o,x as c,aa as r,ac as d,G as h,Z as w,au as u,n as m,aI as p,aE as v,D as g,av as f,aw as y}from"../index.442e9d7b.js";import{v as b,E as x}from"../el-image-viewer/el-image-viewer.9ada8f06.js";import{e as k,c as j}from"../index/index.27596de6.js";import{c as _}from"../config/config.02f49405.js";import"../debounce/debounce.9ff3260d.js";import"../index/index.bf141d65.js";import"../scroll/scroll.07de79ba.js";const D=t=>(f("data-v-5720fe17"),t=t(),y(),t),C={class:"newsDetail-article"},L={class:"newsDetail-main","element-loading-text":"Loading..."},T={class:"left"},U={key:0},q={class:"news-title"},E={class:"flex"},H={class:"type"},I={class:"createTime"},M={style:{"min-height":"500px"}},N={class:"news-intro"},O=["innerHTML"],F=D((()=>r("footer",null,[r("div",null,[r("a",{href:"https://t.me/heitaoch",target:"_blank"},"欢迎加入 黑桃-海外资源交流群 @heitaoch")]),r("div",null,[r("a",{href:"https://t.me/heitaoch002",target:"_blank"},"商务合作: @heitaoch002")]),r("div",null,[r("a",{href:"https://t.me/heitaoch003",target:"_blank"},"购买会员: @heitaoch003")]),r("div",null,[r("a",{href:"https://t.me/heitaoch004",target:"_blank"},"黑桃♠担保: @heitaoch004")])],-1))),G={class:"right"},X=D((()=>r("h1",null,"热门精选",-1))),Z=["onClick"],z={key:0,class:"news-box1"},A=D((()=>r("div",{class:"cover"},null,-1))),B={class:"img-wrap"},J={key:1,class:"news-box2"},K={class:"flex-c jsb title"},P=m({name:"NewsDetail"}),Q=t(Object.assign(P,{setup(t){const m=a(),f=e({}),y=s({loading:!0,adList:[]});i((async()=>{window.scroll({left:0,top:0,behavior:"smooth"});const t=m.params.id||"";await D(t),P()}));const D=async t=>{try{y.loading=!0;const{status:a,data:e}=await k({id:t});if("1"===a){e.content=e.content.replace(/https:\/\/www\.huidu\.io\/news\/\d*/g,"/#/news");const t=e.content.split("游戏需求资源高效对接");e.content=t[0],f.value=e}}catch(a){}finally{y.loading=!1}},P=async()=>{try{const t=await j({type:1});"1"===t.status&&(y.hotspotContent=t.data)}catch(t){}};return(t,a)=>{const e=x,s=b;return n(),l("article",C,[o((n(),l("article",L,[r("section",T,[c(f).title?(n(),l("header",U,[r("h1",q,d(c(f).title),1),r("div",E,[r("div",H,d(c(p)(c(f).name)),1),r("div",I,d(c(v)(c(f).createTime+"000")),1)])])):h("",!0),r("section",M,[r("div",N,d(c(f).intro),1),r("div",{class:"content",innerHTML:c(f).content},null,8,O)]),F]),r("aside",G,[X,(n(!0),l(w,null,u(c(y).hotspotContent,((t,a)=>(n(),l("div",{class:"right-news",key:a,onClick:a=>(t=>{window.location.href.includes("github.io")?_.onlineOrigin:window.location.origin,window.open("/#/news/newsDetail/"+t.id,"_blank")})(t)},[a<=1?(n(),l("div",z,[A,r("div",B,[g(e,{src:t.coverUrl,fit:"cover"},null,8,["src"])]),r("h2",null,d(t.title),1)])):(n(),l("div",J,[g(e,{src:t.coverUrl,fit:"cover"},null,8,["src"]),r("div",K,[r("h2",null,d(t.title),1),r("span",null,d(c(p)(t.categoryName)),1)])]))],8,Z)))),128))])])),[[s,c(y).loading]])])}}}),[["__scopeId","data-v-5720fe17"]]);export{Q as default};