import{s as e,am as t,M as a,aH as l,R as o,bk as n,k as r,p as s,e as i,o as u,a6 as v,a as c,V as d,x as p,a0 as h,n as m,u as f,q as g,y,aa as I,t as C,v as k,X as w,A as b,B as S,D as x,E as M,bi as E,Y as H,T,G as _,a2 as N,C as L,z as A,Z as B,au as V,ac as $,_ as P,S as j,U as O,bv as R,ap as z,H as D,ad as W}from"../index.7b49a549.js";import{f as X}from"../vnode/vnode.49cb6333.js";import{t as Y}from"../el-image-viewer/el-image-viewer.b40882b2.js";const q=(a,l)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,a,l)=>X(e.subTree).filter((e=>{var l;return t(e)&&(null==(l=e.type)?void 0:l.name)===a&&!!e.component})).map((e=>e.component.uid)).map((e=>l[e])).filter((e=>!!e)))(a,l,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((t=>t.uid!==e))}}},G=a({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),K={change:(e,t)=>[e,t].every(l)},U=Symbol("carouselContextKey"),Z=(a,l,m)=>{const{children:f,addChild:g,removeChild:y}=q(o(),"ElCarouselItem"),I=n(),C=r(-1),k=r(null),w=r(!1),b=r(),S=r(0),x=r(!0),M=s((()=>"never"!==a.arrow&&!p(T))),E=s((()=>f.value.some((e=>e.props.label.toString().length>0)))),H=s((()=>"card"===a.type)),T=s((()=>"vertical"===a.direction)),_=s((()=>"auto"!==a.height?{height:a.height}:{height:`${S.value}px`,overflow:"hidden"})),N=Y((e=>{$(e)}),300,{trailing:!0}),L=Y((e=>{!function(e){"hover"===a.trigger&&e!==C.value&&(C.value=e)}(e)}),300);function A(){k.value&&(clearInterval(k.value),k.value=null)}function B(){a.interval<=0||!a.autoplay||k.value||(k.value=setInterval((()=>V()),a.interval))}const V=()=>{C.value<f.value.length-1?C.value=C.value+1:a.loop&&(C.value=0)};function $(e){if(h(e)){const t=f.value.filter((t=>t.props.name===e));t.length>0&&(e=f.value.indexOf(t[0]))}if(e=Number(e),Number.isNaN(e)||e!==Math.floor(e))return;const t=f.value.length,l=C.value;C.value=e<0?a.loop?t-1:0:e>=t?a.loop?0:t-1:e,l===C.value&&P(l),j()}function P(e){f.value.forEach(((t,a)=>{t.translateItem(a,C.value,e)}))}function j(){A(),a.pauseOnHover||B()}i((()=>C.value),((e,t)=>{P(t),x.value&&(e%=2,t%=2),t>-1&&l("change",e,t)})),i((()=>a.autoplay),(e=>{e?B():A()})),i((()=>a.loop),(()=>{$(C.value)})),i((()=>a.interval),(()=>{j()}));const O=e();return u((()=>{i((()=>f.value),(()=>{f.value.length>0&&$(a.initialIndex)}),{immediate:!0}),O.value=v(b.value,(()=>{P()})),B()})),c((()=>{A(),b.value&&O.value&&O.value.stop()})),d(U,{root:b,isCardType:H,isVertical:T,items:f,loop:a.loop,addItem:g,removeItem:y,setActiveItem:$,setContainerHeight:function(e){"auto"===a.height&&(S.value=e)}}),{root:b,activeIndex:C,arrowDisplay:M,hasLabel:E,hover:w,isCardType:H,items:f,isVertical:T,containerStyle:_,isItemsTwoLength:x,handleButtonEnter:function(e){p(T)||f.value.forEach(((t,a)=>{e===function(e,t){var a,l,o,n;const r=p(f),s=r.length;if(0===s||!e.states.inStage)return!1;const i=t+1,u=t-1,v=s-1,c=r[v].states.active,d=r[0].states.active,h=null==(l=null==(a=r[i])?void 0:a.states)?void 0:l.active,m=null==(n=null==(o=r[u])?void 0:o.states)?void 0:n.active;return t===v&&d||h?"left":!!(0===t&&c||m)&&"right"}(t,a)&&(t.states.hover=!0)}))},handleButtonLeave:function(){p(T)||f.value.forEach((e=>{e.states.hover=!1}))},handleIndicatorClick:function(e){C.value=e},handleMouseEnter:function(){w.value=!0,a.pauseOnHover&&A()},handleMouseLeave:function(){w.value=!1,B()},setActiveItem:$,prev:function(){$(C.value-1)},next:function(){$(C.value+1)},PlaceholderItem:function(){var e;const l=null==(e=I.default)?void 0:e.call(I);if(!l)return null;const o=X(l).filter((e=>t(e)&&"ElCarouselItem"===e.type.name));return 2===(null==o?void 0:o.length)&&a.loop&&!H.value?(x.value=!0,o):(x.value=!1,null)},isTwoLengthShow:e=>!x.value||(C.value<=1?e<=1:e>1),throttledArrowClick:N,throttledIndicatorHover:L}},F=["onMouseenter","onClick"],J={key:0},Q=m({name:"ElCarousel"});var ee=P(m({...Q,props:G,emits:K,setup(e,{expose:t,emit:a}){const l=e,{root:o,activeIndex:n,arrowDisplay:r,hasLabel:i,hover:u,isCardType:v,items:c,isVertical:d,containerStyle:h,handleButtonEnter:m,handleButtonLeave:P,handleIndicatorClick:j,handleMouseEnter:O,handleMouseLeave:R,setActiveItem:z,prev:D,next:W,PlaceholderItem:X,isTwoLengthShow:Y,throttledArrowClick:q,throttledIndicatorHover:G}=Z(l,a),K=f("carousel"),U=s((()=>{const e=[K.b(),K.m(l.direction)];return p(v)&&e.push(K.m("card")),e})),Q=s((()=>{const e=[K.e("indicators"),K.em("indicators",l.direction)];return p(i)&&e.push(K.em("indicators","labels")),"outside"===l.indicatorPosition&&e.push(K.em("indicators","outside")),p(d)&&e.push(K.em("indicators","right")),e}));return t({setActiveItem:z,prev:D,next:W}),(e,t)=>(g(),y("div",{ref_key:"root",ref:o,class:b(p(U)),onMouseenter:t[6]||(t[6]=S(((...e)=>p(O)&&p(O)(...e)),["stop"])),onMouseleave:t[7]||(t[7]=S(((...e)=>p(R)&&p(R)(...e)),["stop"]))},[I("div",{class:b(p(K).e("container")),style:A(p(h))},[p(r)?(g(),C(T,{key:0,name:"carousel-arrow-left",persisted:""},{default:k((()=>[w(I("button",{type:"button",class:b([p(K).e("arrow"),p(K).em("arrow","left")]),onMouseenter:t[0]||(t[0]=e=>p(m)("left")),onMouseleave:t[1]||(t[1]=(...e)=>p(P)&&p(P)(...e)),onClick:t[2]||(t[2]=S((e=>p(q)(p(n)-1)),["stop"]))},[x(p(M),null,{default:k((()=>[x(p(E))])),_:1})],34),[[H,("always"===e.arrow||p(u))&&(l.loop||p(n)>0)]])])),_:1})):_("v-if",!0),p(r)?(g(),C(T,{key:1,name:"carousel-arrow-right",persisted:""},{default:k((()=>[w(I("button",{type:"button",class:b([p(K).e("arrow"),p(K).em("arrow","right")]),onMouseenter:t[3]||(t[3]=e=>p(m)("right")),onMouseleave:t[4]||(t[4]=(...e)=>p(P)&&p(P)(...e)),onClick:t[5]||(t[5]=S((e=>p(q)(p(n)+1)),["stop"]))},[x(p(M),null,{default:k((()=>[x(p(N))])),_:1})],34),[[H,("always"===e.arrow||p(u))&&(l.loop||p(n)<p(c).length-1)]])])),_:1})):_("v-if",!0),x(p(X)),L(e.$slots,"default")],6),"none"!==e.indicatorPosition?(g(),y("ul",{key:0,class:b(p(Q))},[(g(!0),y(B,null,V(p(c),((t,a)=>w((g(),y("li",{key:a,class:b([p(K).e("indicator"),p(K).em("indicator",e.direction),p(K).is("active",a===p(n))]),onMouseenter:e=>p(G)(a),onClick:S((e=>p(j)(a)),["stop"])},[I("button",{class:b(p(K).e("button"))},[p(i)?(g(),y("span",J,$(t.props.label),1)):_("v-if",!0)],2)],42,F)),[[H,p(Y)(a)]]))),128))],2)):_("v-if",!0)],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const te=a({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ae=(e,t)=>{const a=j(U),l=o(),n=.83,s=r(),i=r(!1),v=r(0),c=r(1),d=r(!1),h=r(!1),m=r(!1),f=r(!1),{isCardType:g,isVertical:y}=a;const I=(e,t,l)=>{var o;const r=p(g),i=null!=(o=a.items.value.length)?o:Number.NaN,u=e===t;r||z(l)||(f.value=u||e===l),!u&&i>2&&a.loop&&(e=function(e,t,a){const l=a-1,o=a/2;return 0===t&&e===l?-1:t===l&&0===e?a:e<t-1&&t-e>=o?a+1:e>t+1&&e-t>=o?-2:e}(e,t,i));const I=p(y);d.value=u,r?(m.value=Math.round(Math.abs(e-t))<=1,v.value=function(e,t){var l,o;const n=p(y)?(null==(l=a.root.value)?void 0:l.offsetHeight)||0:(null==(o=a.root.value)?void 0:o.offsetWidth)||0;return m.value?n*(1.17*(e-t)+1)/4:e<t?-1.83*n/4:3.83*n/4}(e,t),c.value=p(d)?1:n):v.value=function(e,t,l){const o=a.root.value;return o?((l?o.offsetHeight:o.offsetWidth)||0)*(e-t):0}(e,t,I),h.value=!0,u&&s.value&&a.setContainerHeight(s.value.offsetHeight)};return u((()=>{a.addItem({props:e,states:O({hover:i,translate:v,scale:c,active:d,ready:h,inStage:m,animating:f}),uid:l.uid,translateItem:I})})),R((()=>{a.removeItem(l.uid)})),{carouselItemRef:s,active:d,animating:f,hover:i,inStage:m,isVertical:y,translate:v,isCardType:g,scale:c,ready:h,handleItemClick:function(){if(a&&p(g)){const e=a.items.value.findIndex((({uid:e})=>e===l.uid));a.setActiveItem(e)}}}},le=m({name:"ElCarouselItem"});var oe=P(m({...le,props:te,setup(e){const t=e,a=f("carousel"),{carouselItemRef:l,active:o,animating:n,hover:r,inStage:i,isVertical:u,translate:v,isCardType:c,scale:d,ready:h,handleItemClick:m}=ae(t),I=s((()=>({transform:[`${"translate"+(p(u)?"Y":"X")}(${p(v)}px)`,`scale(${p(d)})`].join(" ")})));return(e,t)=>w((g(),y("div",{ref_key:"carouselItemRef",ref:l,class:b([p(a).e("item"),p(a).is("active",p(o)),p(a).is("in-stage",p(i)),p(a).is("hover",p(r)),p(a).is("animating",p(n)),{[p(a).em("item","card")]:p(c),[p(a).em("item","card-vertical")]:p(c)&&p(u)}]),style:A(p(I)),onClick:t[0]||(t[0]=(...e)=>p(m)&&p(m)(...e))},[p(c)?w((g(),y("div",{key:0,class:b(p(a).e("mask"))},null,2)),[[H,!p(o)]]):_("v-if",!0),L(e.$slots,"default")],6)),[[H,p(h)]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const ne=D(ee,{CarouselItem:oe}),re=W(oe);export{ne as E,re as a};
