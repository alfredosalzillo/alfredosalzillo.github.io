(()=>{var v=Object.defineProperty;var A=Object.prototype.hasOwnProperty;var k=Object.getOwnPropertySymbols,C=Object.prototype.propertyIsEnumerable;var f=(e,n)=>{var s={};for(var i in e)A.call(e,i)&&n.indexOf(i)<0&&(s[i]=e[i]);if(e!=null&&k)for(var i of k(e))n.indexOf(i)<0&&C.call(e,i)&&(s[i]=e[i]);return s};var L=(e,n)=>{for(var s in n)v(e,s,{get:n[s],enumerable:!0})};var b={};L(b,{default:()=>w});var{PropsWithChildren:Y,ScriptHTMLAttributes:Z,useContext:H}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{default:P}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/shared/util.ts"],{SSRContext:j}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/react/context.ts"];function u(e){let{scripts:n}=H(j);if(P.inDeno){let s="script-"+(n.size+1);n.set(s,{props:e})}return null}var{StyleHTMLAttributes:te,useContext:z,useEffect:N}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{default:O}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/shared/util.ts"],{applyCSS:$,removeCSS:I}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/style.ts"],{SSRContext:M}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/react/context.ts"];function x(s){var i=s,{children:e}=i,n=f(i,["children"]);let{inlineStyles:o}=z(M),{__styleId:r}=n,t=e==null?void 0:e.toLocaleString();return r&&t&&(O.inDeno?o.set("#"+r,t):$("#"+r,t)),N(()=>()=>r&&I("#"+r),[]),null}var{useEffect:R}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{recoverCSS:T,removeCSS:q}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/style.ts"];function g({href:e}){return R(()=>(T(e),()=>q(e,!0)),[]),null}var{Children:F,createElement:E,Fragment:y,isValidElement:J,PropsWithChildren:re,ReactNode:le,useContext:B,useEffect:D,useMemo:U}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{default:S}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/shared/util.ts"],{SSRContext:W}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/react/context.ts"];function _(e){let{headElements:n}=B(W),[s,i]=U(()=>K(e.children),[e.children]);return S.inDeno&&s.forEach(({type:o,props:r},t)=>n.set(t,{type:o,props:r})),D(()=>{let{document:o}=window,r=[];if(s.size>0){let t=o.querySelector("meta[charset]");t||(t=o.createElement("meta"),t.setAttribute("charset","utf-8"),o.head.prepend(t));let a=o.createElement("meta");t.nextElementSibling?o.head.insertBefore(a,t.nextElementSibling):o.head.appendChild(a),s.forEach(({type:h,props:p})=>{if(h==="script")return;let c=o.createElement(h);Object.keys(p).forEach(l=>{let m=p[l];l==="children"?S.isNEString(m)?c.innerText=m:S.isNEArray(m)&&(c.innerText=m.join("")):c.setAttribute(l,String(m||""))}),o.head.insertBefore(c,a),r.push(c)}),o.head.removeChild(a)}return()=>{r.forEach(t=>o.head.removeChild(t))}},[s]),E(y,null,...i)}function K(e){let n=new Map,s=[],i=o=>{F.forEach(o,r=>{if(!J(r))return;let{type:t,props:a}=r;switch(t){case y:i(a.children);break;case g:s.push(E(g,a));break;case x:s.push(E(x,a));break;case u:s.push(E(u,a));break;case"base":case"title":case"meta":case"link":case"style":case"script":case"no-script":let p=t;if(t==="meta"){let c=Object.keys(a).map(l=>l.toLowerCase());if(c.includes("charset"))return;c.includes("name")?p+=`[name=${JSON.stringify(a.name)}]`:c.includes("property")?p+=`[property=${JSON.stringify(a.property)}]`:c.includes("http-equiv")?p+=`[http-equiv=${JSON.stringify(a["http-equiv"])}]`:p+=Object.keys(a).filter(l=>!/^content|children$/i.test(l)).map(l=>`[${l.toLowerCase()}=${JSON.stringify(a[l])}]`).join("")}else t!=="title"&&(p+="-"+(n.size+1));if(["base","meta","link"].includes(t)&&"children"in a){let h=a,{children:c}=h,l=f(h,["children"]);n.set(p,{type:t,props:l})}else n.set(p,{type:t,props:a});break}})};return i(e),[n,s]}var{applyCSS:V}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/style.ts"],G=`html{padding:0;margin:0;width:100%}body{font-size:16px;width:100%;padding:0;margin:0}main{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;font-size:16px;line-height:1.5;word-wrap:break-word;max-width:1024px;margin:auto}.page{padding:0 16px}h1{font-size:2em;margin:.67em 0}h1,h2{padding-bottom:.3em;border-bottom:1px solid #eaecef}h2{font-size:1.5em}h3{font-size:1.25em}h4{font-size:1em}h5{font-size:.875em}h6{font-size:.85em;color:#6a737d}hr{height:0;margin:15px 0;background:transparent;border:0;border-bottom:1px solid #dfe2e5;box-sizing:initial;overflow:visible}p{margin-top:0;margin-bottom:10px}a{text-decoration:none}footer{display:flex;align-items:center;justify-content:center;padding-bottom:8px}footer a{margin:0 8px}footer a svg{width:24px;height:24px}
`;V("/style/index.css",G);var{default:d,ComponentType:he}=__ALEPH.pack["https://esm.sh/react@17.0.2"];function w({Page:e,pageProps:n}){return d.createElement(d.Fragment,null,d.createElement(_,null,d.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),d.createElement("main",null,d.createElement(e,Object.assign({},n))))}__ALEPH.pack["/app.tsx"]=b;})();
