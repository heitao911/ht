import{bx as E,am as T}from"../index.7b49a549.js";var S=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(S||{});const A=S=>{const L=E(S)?S:[S],N=[];return L.forEach((S=>{var L;E(S)?N.push(...A(S)):T(S)&&E(S.children)?N.push(...A(S.children)):(N.push(S),T(S)&&(null==(L=S.component)?void 0:L.subTree)&&N.push(...A(S.component.subTree)))})),N};export{S as P,A as f};
