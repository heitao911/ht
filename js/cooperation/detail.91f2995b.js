import{as as s,at as a,k as e,U as l,aF as t,q as i,y as n,aa as r,x as c,D as o,G as d,ac as u,ab as m,Z as p,au as g,v,t as f,X as y,n as h,aE as b,av as k,aw as _,aA as j,aB as E}from"../index.b45df41a.js";import{v as w,E as x}from"../el-image-viewer/el-image-viewer.91f87c60.js";import{E as D}from"../el-empty/el-empty.3531f7f5.js";import{E as L}from"../el-button/el-button.122d7b25.js";import{_ as T,a as q,E as I,b as S}from"../company-cn/company-cn.09cb45da.js";import{u as V}from"../channel/channel.15227128.js";import"../debounce/debounce.da26e9a9.js";import"../index/index.be133d9f.js";import"../scroll/scroll.d6874ff6.js";import"../use-form-item/use-form-item.ae1383d8.js";const z=s=>(k("data-v-4382ef87"),s=s(),_(),s),A={class:"cooperationDetail-article"},C={class:"flex header-main"},O={key:0,class:"avatar-wrap"},U={class:"title-wrap"},B={class:"title"},F={class:"flex jsb header-wrap"},G={class:"table-sort"},P=z((()=>r("img",{class:"offer-img",src:S,alt:""},null,-1))),R=z((()=>r("div",{class:"vertical-divider"},null,-1))),X=z((()=>r("div",{class:"vertical-divider"},null,-1))),Z={class:"flex aic"},H={key:0,class:"danbao"},J={key:0,src:T,alt:"担保交易"},K={key:1,src:q,alt:"企业担保"},M={class:"gray"},N={class:"content"},Q={class:"left"},W=z((()=>r("h2",null,"业务明细",-1))),Y={class:"content-des"},$=z((()=>r("h2",null,"业务简介",-1))),ss={class:"content-intro"},as={class:"text"},es=z((()=>r("section",{class:"tips"},[r("h3",null,"防骗提醒"),r("ol",null,[r("li",null,"1、联系对接资源服务前请认真核查对方身份及经营资质，切勿轻信贪图便宜和承诺。"),r("li",null,"2、任何冒充官方工作人员要求预付定金或者付款的行为，均可能存在诈骗风险，请提高警惕。"),r("li",null,"3、黑桃平台不介入任何交易过程，交易时请您提高警惕，以免蒙受损失。"),r("li",null,"4、如遇冒充黑桃工作人员进行行骗的，请及时联系官方核实举报，如若查实永久封禁。")])],-1))),ls={class:"right"},ts=["href"],is={class:"img-cover"},ns=["src"],rs=z((()=>r("div",{class:"span"},"广告",-1))),cs=h({name:"CooperationDetail"}),os=s(Object.assign(cs,{setup(s){const h=j((()=>E((()=>import("./TipsToDeal.c4fc9a59.js")),["./TipsToDeal.c4fc9a59.js","../index.b45df41a.js","../../assets/index.f9691883.css","../../assets/TipsToDeal.9eb88754.css"],import.meta.url))),k=a(),_=V(),T=e({}),q=l({loading:!0,allDataList:_.dataList,adList:_.adList});t((()=>{const s=k.query.id||"";let a=[];q.allDataList.forEach((s=>{a=a.concat(s.records)})),a.forEach((a=>{a.id+""===s&&(T.value=a)})),console.log(T.value),setTimeout((()=>{q.loading=!1}),1e3)}));const S=s=>{const a=s.industry.split("|").filter((s=>""!==s));let e="";return a.length?(a.forEach((a=>{s.industrys[a]&&(e+=s.industrys[a])})),e||"行业不限"):s.industrys?s.industrys[0]:""},z=s=>{const a=s.region.split("|").filter((s=>""!==s));let e="";return a.length?(a.forEach((a=>{s.regions[a]&&(e+=s.regions[a])})),e||"区域不限"):s.regions?s.regions[0]:""},cs=()=>{window.open("https://t.me/heitaoch004","_blank")};return(s,a)=>{const e=I,l=L,t=x,k=D,_=w;return i(),n("article",A,[r("header",null,[r("div",C,[c(T).logo?(i(),n("div",O,[o(e,{class:"avatar",shape:"square",size:100,src:c(T).logo,fit:"contain"},null,8,["src"])])):d("",!0),r("div",U,[r("h1",B,u(c(T).title),1),r("div",F,[r("div",G,[P,m(" "+u(c(T).typeStr)+"-"+u(c(T).businessSubdivides[c(T).businessSubdivide])+" ",1),R,(i(!0),n(p,null,g(S(c(T)),((s,a)=>(i(),n("span",{key:a},u(s),1)))),128)),X,(i(!0),n(p,null,g(z(c(T)),((s,a)=>(i(),n("span",{key:a},u(s),1)))),128))]),r("div",null,[o(l,{class:"deal-btn",type:"success",plain:""},{default:v((()=>[m("获取联系")])),_:1}),c(T).gurantee?(i(),f(l,{key:0,class:"deal-btn",type:"success",onClick:cs},{default:v((()=>[m("担保交易")])),_:1})):d("",!0)])]),r("div",Z,[c(T).gurantee||c(T).firmVerify?(i(),n("div",H,[c(T).gurantee?(i(),n("img",J)):d("",!0),c(T).firmVerify?(i(),n("img",K)):d("",!0)])):d("",!0),r("div",M,u(c(b)(c(T).updateTime+"000"))+"  更新",1)])])]),o(c(h),{gurantee:!!c(T).gurantee},null,8,["gurantee"])]),r("article",N,[y((i(),n("section",Q,[c(T).details?(i(),n(p,{key:0},[W,r("div",Y,u(c(T).details),1)],64)):d("",!0),c(T).introduce?(i(),n(p,{key:1},[$,r("div",ss,[r("div",as,u(c(T).introduce.content),1),(i(!0),n(p,null,g(c(T).introduce.imgs,(s=>(i(),f(t,{key:s,src:s,"preview-src-list":[s],lazy:""},null,8,["src","preview-src-list"])))),128))])],64)):d("",!0),c(T).details||c(T).introduce?d("",!0):(i(),f(k,{key:2,class:"empty",description:"暂无简介"})),es])),[[_,c(q).loading]]),r("aside",ls,[(i(!0),n(p,null,g(c(q).adList,((a,e)=>(i(),n("a",{href:a.link,target:"_blank",class:"link",key:e},[r("div",is,[r("img",{src:s.getImageUrl("channel",a.img),class:"el-image__inner",alt:"广告",title:"广告"},null,8,ns)]),rs],8,ts)))),128))])])])}}}),[["__scopeId","data-v-4382ef87"]]);export{os as default};