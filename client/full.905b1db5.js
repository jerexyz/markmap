import{S as n,i as o,s,e as a,c as t,a as e,g as l,h as r,f as m,b as u,d as c,k as i,l as f,m as p,n as $,o as h,p as g,r as d,u as Z,D as v,v as I,w,x as O}from"./client.aac9f63c.js";import{M as R}from"./markmap.df403c25.js";import{T as b,s as j}from"./gist.39a7eaa3.js";function k(n){let o,s,Z,v,j,k,x,M,y;function A(o){n[5].call(null,o)}function B(o){n[6].call(null,o)}function D(o){n[7].call(null,o)}function E(o){n[8].call(null,o)}let F={content:n[1]};return void 0!==n[0]&&(F.el=n[0]),void 0!==n[2]&&(F.onReset=n[2]),void 0!==n[3]&&(F.onZoomIn=n[3]),void 0!==n[4]&&(F.onZoomOut=n[4]),s=new R({props:F}),I.push((()=>w(s,"el",A))),I.push((()=>w(s,"onReset",B))),I.push((()=>w(s,"onZoomIn",D))),I.push((()=>w(s,"onZoomOut",E))),M=new b({props:{class:"absolute right-0 bottom-0 mr-2 mb-2",isFull:!0,showBrand:!0,onReset:n[2],onZoomIn:n[3],onZoomOut:n[4]}}),{c(){o=a("main"),t(s.$$.fragment),x=e(),t(M.$$.fragment),this.h()},l(n){o=l(n,"MAIN",{class:!0});var a=r(o);m(s.$$.fragment,a),x=u(a),m(M.$$.fragment,a),a.forEach(c),this.h()},h(){i(o,"class","markmap-wrapper h-screen")},m(n,a){f(n,o,a),p(s,o,null),$(o,x),p(M,o,null),y=!0},p(n,[o]){const a={};2&o&&(a.content=n[1]),!Z&&1&o&&(Z=!0,a.el=n[0],O((()=>Z=!1))),!v&&4&o&&(v=!0,a.onReset=n[2],O((()=>v=!1))),!j&&8&o&&(j=!0,a.onZoomIn=n[3],O((()=>j=!1))),!k&&16&o&&(k=!0,a.onZoomOut=n[4],O((()=>k=!1))),s.$set(a);const t={};4&o&&(t.onReset=n[2]),8&o&&(t.onZoomIn=n[3]),16&o&&(t.onZoomOut=n[4]),M.$set(t)},i(n){y||(h(s.$$.fragment,n),h(M.$$.fragment,n),y=!0)},o(n){g(s.$$.fragment,n),g(M.$$.fragment,n),y=!1},d(n){n&&c(o),d(s),d(M)}}}function x(n,o,s){let a,t,e,l,r,m="";return Z((async()=>{r=j((n=>{s(1,m=n)}))})),v((()=>{r&&(r(),r=null)})),[a,m,t,e,l,function(n){a=n,s(0,a)},function(n){t=n,s(2,t)},function(n){e=n,s(3,e)},function(n){l=n,s(4,l)}]}export default class extends n{constructor(n){super(),o(this,n,x,k,s,{})}}
