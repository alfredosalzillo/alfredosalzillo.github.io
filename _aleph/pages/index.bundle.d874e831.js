(()=>{var W=Object.defineProperty;var U=Object.prototype.hasOwnProperty;var k=Object.getOwnPropertySymbols,T=Object.prototype.propertyIsEnumerable;var O=(e,r,t)=>r in e?W(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))U.call(r,t)&&O(e,t,r[t]);if(k)for(var t of k(r))T.call(r,t)&&O(e,t,r[t]);return e};var j=(e,r)=>{var t={};for(var o in e)U.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&k)for(var o of k(e))r.indexOf(o)<0&&T.call(e,o)&&(t[o]=e[o]);return t};var ae=(e,r)=>{for(var t in r)W(e,t,{get:r[t],enumerable:!0})};var H={};ae(H,{default:()=>V});var{useContext:le,useMemo:ie}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{default:se}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/shared/util.ts"],{default:ce}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/events.ts"],{RouterContext:ue}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/react/context.ts"],z=class extends Error{};function E(){return le(ue)}function L(e,r){let t=arguments[2],{pathname:o,query:i}=E();return ie(()=>{var p;let u=globalThis,h=i.toString(),s="pagedata://"+[o,h].filter(Boolean).join("?"),R=typeof r=="number"&&!isNaN(r)?Date.now()+r*1e3:0;if(se.inDeno){let g=u["rendering-"+s];if(g&&t in g)return g[t];let v=e();if(ce.emit("useDeno-"+s,{id:t,value:v,expires:R}),v instanceof Promise)throw new z;return g[t]=v,v}let C=u[s+"#"+t];return C&&(p=C.value)!=null?p:null},[t,o,i])}var{AnchorHTMLAttributes:Re,CSSProperties:je,createElement:pe,MouseEvent:ze,PropsWithChildren:De,useCallback:D,useEffect:de,useMemo:d}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{default:l}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/shared/util.ts"],{default:me}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/events.ts"],{redirect:fe}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/redirect.ts"],q=new Set;function w(e){let N=e,{rel:r,href:t,["aria-current"]:o,["data-active-className"]:i,["data-active-style"]:u,className:h,style:s,children:R}=N,C=j(N,["rel","href","aria-current","data-active-className","data-active-style","className","style","children"]),p=d(()=>r?r.split(" "):[],[r]),g=d(()=>p.includes("prefetch"),[p]),v=d(()=>p.includes("replace"),[p]),P=d(()=>p.includes("nav"),[p]),{pathname:x,params:Y,query:S}=E(),c=d(()=>{if(!l.isNEString(t))return"";if(l.isLikelyHttpURL(t))return t;let[a,_]=l.splitBy(t,"?");return a.startsWith("/")?a=l.cleanPath(a):a=l.cleanPath(x+"/"+a),[a,_].filter(Boolean).join("?")},[x,t]),f=d(()=>{if(!l.isNEString(t))return!1;let[a,_]=l.splitBy(t,"?");if(a!==x)return!1;if(_){let M=new URLSearchParams(_);if(M.sort(),M.toString()!==S.toString())return!1}return!0},[x,Y,S,t]),ee=d(()=>!P||!f?h:[h,i].filter(l.isNEString).map(a=>a.trim()).filter(Boolean).join(" "),[h,i,f,P]),te=d(()=>!P||!f?s:Object.assign({},s,u),[s,u,f,P]),re=d(()=>{if(l.isNEString(o))return o;if(c.startsWith("/"))return"page"},[c,o]),A=D(()=>{c&&!l.isLikelyHttpURL(c)&&!f&&!q.has(c)&&(me.emit("fetch-page-module",{href:c}),q.add(c))},[f]),ne=D(a=>{l.isFunction(e.onMouseEnter)&&e.onMouseEnter(a),!a.defaultPrevented&&A()},[A]),oe=D(a=>{l.isFunction(e.onMouseEnter)&&e.onMouseEnter(a),!(a.defaultPrevented||he(a))&&(a.preventDefault(),f||fe(c,v))},[f,c,v]);return de(()=>{g&&A()},[g,A]),pe("a",y(y({},C),{className:ee,style:te,href:c,onClick:oe,onMouseEnter:ne,"aria-current":re}),R)}function he(e){let{target:r}=e.currentTarget,t=e.nativeEvent;return r&&r!=="_self"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t&&t.which===2}var{createElement:Ne,ComponentType:Me,ComponentPropsWithRef:We,ReactChild:Ue,ReactElement:Te,ReactFragment:Oe,ReactPortal:qe,useEffect:Be,useState:$e}=__ALEPH.pack["https://esm.sh/react@17.0.2"];var B=()=>L(null,null,"useDeno-iqX4D1zWZrj4unE8WR1amSvRWU");var{applyCSS:ge}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/style.ts"],ve=`.RepositoryPreview--root{padding:16px;border:1px solid #dfe2e5;margin:4px 0}.RepositoryPreview--title{font-weight:400;font-size:1.3em;line-height:24px;margin:0 0 .5em;display:inline-flex;justify-items:center;width:100%}.RepositoryPreview--title>*{margin-left:4px}.RepositoryPreview--title a{text-decoration:none}.RepositoryPreview--title a:last-child{font-weight:600}.RepositoryPreview--title img{width:24px;height:24px;display:inline-block;left:0;margin:0;vertical-align:-.18em}
`;ge("/components/RepositoryPreview/RepositoryPreview.css",ve);var{default:b}=__ALEPH.pack["https://esm.sh/react@17.0.2"],be=e=>{let{icon:r,name:t,href:o,owner:i,description:u}=e;return b.createElement("section",{className:"RepositoryPreview--root"},b.createElement("h2",{className:"RepositoryPreview--title"},b.createElement("img",{alt:"logo",src:r}),b.createElement("a",{href:i.href,target:"_blank"},i.name),b.createElement("span",null,"/"),b.createElement("a",{href:o,target:"_blank"},t)),b.createElement("p",null,u))},$=be;var{applyCSS:we}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/style.ts"],Ee=`.ArticlePreview--root{width:100%;background-size:cover;background:#24292e no-repeat center center;border-radius:4px;border:1px solid #6a737d;padding:0;position:relative;margin:0}.ArticlePreview--content{width:100%;max-width:100%;height:100%;max-height:100%;overflow:hidden;background-color:#000032cc;border-radius:4px;padding:0}.ArticlePreview--title{border:0;color:#fff;font-weight:600;font-size:1.3em;line-height:1.4em;padding-left:16px}.ArticlePreview--description{border:0;color:#fff;font-weight:400;font-size:.9em;line-height:1.4em;padding:0 16px}.ArticlePreview--breadcrumbs{padding:0 16px;font-size:.9em;display:flex;justify-items:center;align-content:center;line-height:24px;max-width:100%;width:100%;overflow:hidden;color:#dfe2e5}.ArticlePreview--breadcrumbs>*{margin-left:4px}.ArticlePreview--breadcrumbs a{white-space:nowrap;text-decoration:none;text-overflow:ellipsis;color:#58a6ff}.ArticlePreview--breadcrumbs a:last-child{font-weight:600}.ArticlePreview--breadcrumbs img{width:24px;height:24px;display:inline-block;left:0;margin:0;vertical-align:-.18em}
`;we("/components/ArticlePreview/ArticlePreview.css",Ee);var{default:m}=__ALEPH.pack["https://esm.sh/react@17.0.2"],Ce=e=>{let{href:r,icon:t,title:o,slug:i,cover:u,description:h,user:s}=e;return m.createElement("section",{className:"ArticlePreview--root",style:{backgroundImage:`url(${u})`}},m.createElement("div",{className:"ArticlePreview--content"},m.createElement("h2",{className:"ArticlePreview--title"},o),m.createElement("p",{className:"ArticlePreview--description"},h),m.createElement("p",{className:"ArticlePreview--breadcrumbs"},m.createElement("img",{src:t,alt:"icon"}),m.createElement(w,{href:s.href},s.username),m.createElement("span",null,"/"),m.createElement(w,{href:r},i))))},F=Ce;var I=e=>String.fromCodePoint(...[...e.toUpperCase()].map(r=>127397+r.charCodeAt(0)));var{default:G}=__ALEPH.pack["https://esm.sh/react@17.0.2"],Pe=e=>G.createElement("svg",Object.assign({"aria-label":"Linkedin",viewBox:"0 0 24 24"},e),G.createElement("path",{fill:"#0077B5",fillRule:"evenodd",d:"M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"})),K=Pe;var{default:Z}=__ALEPH.pack["https://esm.sh/react@17.0.2"],xe=e=>Z.createElement("svg",Object.assign({"aria-label":"Twitter",viewBox:"0 0 24 24"},e),Z.createElement("path",{fill:"#1DA1F2",fillRule:"evenodd",d:"M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"})),X=xe;var{default:J}=__ALEPH.pack["https://esm.sh/react@17.0.2"],Ae=e=>J.createElement("svg",Object.assign({"aria-label":"Github",viewBox:"0 0 24 24"},e),J.createElement("path",{fill:"#333",fillRule:"evenodd",d:"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"})),Q=Ae;var{default:n}=__ALEPH.pack["https://esm.sh/react@17.0.2"];function V(){let{articles:e,repositories:r}=B();return n.createElement("div",{className:"page"},n.createElement("h1",null,"Alfredo Salzillo"),n.createElement("p",null,"\u{1F30E} Caserta"," ",I("IT"),n.createElement("br",null),"\u{1F382} 1993/12/27",n.createElement("br",null),"\u{1F4BB}"," ",n.createElement("strong",null,"Web Developer")," ","at"," ",n.createElement("a",{href:"https://www.togetherprice.com",target:"_blank"},n.createElement("strong",null,"Together Price")),n.createElement("br",null),"\u{1F44D}"," ",n.createElement(w,{href:"/assets/resume.pdf"},n.createElement("strong",null,"resume"))),n.createElement("section",null,n.createElement("h2",null,"Articles"),e.map(t=>n.createElement(F,Object.assign({key:t.url},t)))),n.createElement("section",null,n.createElement("h2",null,"Projects"),r.map(t=>n.createElement($,Object.assign({key:t.url},t)))),n.createElement("hr",null),n.createElement("footer",null,n.createElement("a",{href:"https://www.linkedin.com/in/alfredosalzillo/",target:"_blank"},n.createElement(K,null)),n.createElement("a",{href:"https://twitter.com/noctislupo93",target:"_blank"},n.createElement(X,null)),n.createElement("a",{href:"https://github.com/alfredosalzillo",target:"_blank"},n.createElement(Q,null))))}__ALEPH.pack["/pages/index.tsx"]=H;})();
