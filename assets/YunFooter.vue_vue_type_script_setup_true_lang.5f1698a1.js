import{d as F,u as T,j as d,H as D,o as i,b as l,r as x,g as t,t as s,f as e,R as M,M as E,i as V,P as $,S as v,h as g,U as c,F as H,n as A,V as B,c as L,w as b,q as P}from"./app.f8a2eefc.js";const S={class:"vc-site-live-time"},I={"mx-1":""},N={"mx-1":""},Y={"mx-1":""},j={"mx-1":""},z=F({__name:"VCLiveTime",props:{startTime:null},setup(C){const u=C,{t:a}=T(),r=d(0),o=d(0),_=d(0),h=d(0),y=()=>{const n=new Date(u.startTime),m=new Date().getTime()-n.getTime(),p=60*1e3,f=60*p,w=24*f;r.value=Math.floor(m/w),o.value=Math.floor(m%w/60/60/1e3),_.value=Math.floor(m%f/60/1e3),h.value=Math.floor(m%p/1e3)};return D(()=>{setInterval(y,1e3)}),(n,k)=>(i(),l("div",S,[x(n.$slots,"live-time-before"),t("span",I,s(e(a)("time.day",r.value)),1),t("span",N,s(e(a)("time.hour",o.value)),1),t("span",Y,s(e(a)("time.minute",_.value)),1),t("span",j,s(e(a)("time.second",h.value)),1),x(n.$slots,"live-time-after")]))}}),q={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},R={key:0,class:"beian",m:"y-2"},U={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},G={class:"copyright flex justify-center items-center gap-2",p:"1"},J=["href","title"],K={key:1,class:"powered",m:"2"},O=["innerHTML"],Q=["href","title"],W=F({__name:"YunFooter",setup(C){const{t:u}=T(),a=M(),r=E(),o=V(),_=new Date().getFullYear(),h=$(()=>_===o.value.footer.since),y=$(()=>u("footer.powered",[`<a href="${v.repository}" target="_blank" rel="noopener">Valaxy</a> v${v.version}`])),n=$(()=>o.value.footer.icon||{url:v.repository,name:"i-ri-cloud-line",title:v.name});return(k,m)=>{var p,f;return i(),l("footer",q,[((p=e(o).footer.beian)==null?void 0:p.enable)&&e(o).footer.beian.icp?(i(),l("div",R,[t("a",U,s(e(o).footer.beian.icp),1)])):g("v-if",!0),t("div",G,[t("span",null,[c(" \xA9 "),e(h)?g("v-if",!0):(i(),l(H,{key:0},[c(s(e(o).footer.since)+" - ",1)],64)),c(" "+s(e(_)),1)]),(f=e(o).footer.icon)!=null&&f.enable?(i(),l("a",{key:0,class:"inline-flex animate-pulse",href:e(n).url,target:"_blank",title:e(n).title},[t("div",{class:A(e(n).name)},null,2)],8,J)):g("v-if",!0),t("span",null,s(e(r).author.name),1)]),e(o).footer.powered?(i(),l("div",K,[t("span",{innerHTML:e(y)},null,8,O),c(" | "),t("span",null,[c(s(e(u)("footer.theme"))+" - ",1),t("a",{href:e(o).pkg.repository.url,title:e(o).pkg.name,target:"_blank"},s(B(e(a).theme)),9,Q),c(" v"+s(e(o).pkg.version),1)])])):g("v-if",!0),x(k.$slots,"default")])}}}),X=t("span",null,"\u98CE\u96E8\u4EA4\u52A0\uFF0C\u5DF2\u7ECF\u5728\u7F51\u7EDC\u7684\u6D77\u6D0B\u4E0A\u822A\u884C\u4E86",-1),Z=t("span",null,"(\u25CF'\u25E1'\u25CF)",-1),ee=t("a",{href:"https://icp.gov.moe/?keyword=20230105",target:"_blank"},"\u840C ICP \u5907 20230105 \u53F7",-1),oe=F({__name:"YunFooter",setup(C){return(u,a)=>{const r=z;return i(),L(W,null,{default:b(()=>[P(r,{"start-time":"2021-09-20"},{"live-time-before":b(()=>[X]),"live-time-after":b(()=>[Z]),_:1}),ee]),_:1})}}});export{oe as _};
