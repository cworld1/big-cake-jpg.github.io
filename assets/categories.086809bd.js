import{d as $,j as Y,u as B,a as P,o as a,b as n,g as f,t as p,f as o,h as v,F as C,a4 as j,e as N,c as h,w as d,q as g,Y as I,y as O,a5 as R,a6 as T,P as w,a7 as D,$ as H,O as A,a1 as G}from"./app.f8a2eefc.js";import{_ as J}from"./YunCard.vue_vue_type_style_index_0_lang.6f0b88dc.js";import{_ as K}from"./YunPostCollapse.vue_vue_type_style_index_0_lang.eefa6855.js";import{_ as M}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.2e3a9eb5.js";const Q={key:0,class:"category-list-item inline-flex items-center cursor-pointer"},W={key:0,"i-ri-folder-add-line":""},X={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},Z={key:0},ee=f("div",{"i-ri-file-text-line":""},null,-1),te={m:"l-1",font:"serif black"},oe=$({__name:"YunCategory",props:{name:null,category:null,level:null,displayCategory:null,collapsable:{type:Boolean,default:!0}},setup(e){const s=Y(e.collapsable),{t:i,locale:u}=B(),m=t=>{const l=u.value==="zh-CN"?"zh":u.value;return t[`title_${l}`]?t[`title_${l}`]:t.title};return(t,l)=>{const _=P("router-link"),k=S;return a(),n(C,null,[e.category.total?(a(),n("li",Q,[f("span",{class:"folder-action inline-flex",onClick:l[0]||(l[0]=r=>s.value=!s.value)},[s.value?(a(),n("div",W)):(a(),n("div",X))]),f("span",{class:"category-name",m:"l-1",onClick:l[1]||(l[1]=r=>e.displayCategory?e.displayCategory(e.name):null)},p(e.name==="Uncategorized"?o(i)("category.uncategorized"):e.name)+" ["+p(e.category.total)+"] ",1)])):v("v-if",!0),s.value?v("v-if",!0):(a(),n(C,{key:1},[o(j)(e.category)?(a(),h(k,{key:1,categories:e.category.children,"display-category":e.displayCategory,collapsable:s.value},null,8,["categories","display-category","collapsable"])):(a(),n("ul",Z,[(a(!0),n(C,null,N(e.category.posts,(r,b)=>(a(),n("li",{key:b,class:"post-list-item",m:"l-4"},[r.title?(a(),h(_,{key:0,to:r.path||"",class:"inline-flex items-center"},{default:d(()=>[ee,f("span",te,p(m(r)),1)]),_:2},1032,["to"])):v("v-if",!0)]))),128))]))],64))],64)}}}),S=$({__name:"YunCategories",props:{categories:null,level:{default:0},displayCategory:null,collapsable:{type:Boolean,default:!0}},setup(e){const s=Y(e.collapsable);return(i,u)=>{const m=oe;return a(!0),n(C,null,N(Object.fromEntries(e.categories),(t,l)=>(a(),n("ul",{key:l,class:"category-list",m:"l-4"},[g(m,{name:l.toString(),category:t,level:e.level+1,"display-category":e.displayCategory,collapsable:s.value},null,8,["name","category","level","display-category","collapsable"])]))),128)}}});const ae={text:"center",class:"yun-text-light",p:"2"},ce=$({__name:"categories",setup(e){const{t:y}=B(),s=I(),i=O(),u=R(),m=T(),t=w(()=>m.query.category||""),l=w(()=>s.postList.filter(c=>c.categories&&t.value!=="Uncategorized"?typeof c.categories=="string"?c.categories===t.value:c.categories.includes(t.value):!c.categories&&t.value==="Uncategorized"?c.categories===void 0:!1)),_=Y(),{show:k}=D(_),r=H(),b=x=>{r.push({query:{category:x}}),k()},U=A(i);return(x,c)=>{const z=M,q=S,E=P("router-view"),F=K,L=J,V=G;return a(),h(V,null,{"main-header":d(()=>[g(z,{title:o(U)||o(y)("menu.categories"),icon:o(i).icon||"i-ri-folder-2-line",color:o(i).color},null,8,["title","icon","color"])]),"main-content":d(()=>[f("div",ae,p(o(y)("counter.categories",o(u).children.size)),1),g(q,{categories:o(u).children,"display-category":b},null,8,["categories"]),g(E)]),"main-nav-before":d(()=>[o(t)?(a(),h(L,{key:0,ref_key:"collapse",ref:_,m:"t-4",w:"full"},{default:d(()=>[g(z,{title:o(t)==="Uncategorized"?o(y)("category.uncategorized"):o(t),icon:"i-ri-folder-open-line"},null,8,["title"]),g(F,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:o(l)},null,8,["posts"])]),_:1},512)):v("v-if",!0)]),_:1})}}});export{ce as default};