(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{9237:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(2988),o=r(2265),i=r(1818),a=r(3209),l=r(1169),c=r(7437);function s(e){let{options:t,CacheProvider:r=a.C,children:s}=e,[u]=o.useState(()=>{var e;let r=(0,i.Z)((0,n.Z)({},t,{key:null!=(e=null==t?void 0:t.key)?e:"mui"}));r.compat=!0;let o=r.insert,a=[];return r.insert=function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];null!=t&&t.enableCssLayer&&(n[1].styles="@layer mui {".concat(n[1].styles,"}"));let[l,c]=n;return void 0===r.inserted[c.name]&&a.push({name:c.name,isGlobal:!l}),o(...n)},{cache:r,flush:()=>{let e=a;return a=[],e}}});return(0,l.useServerInsertedHTML)(()=>{let e=u.flush();if(0===e.length)return null;let r="",n=u.cache.key,i=[];return e.forEach(e=>{let{name:t,isGlobal:o}=e,a=u.cache.inserted[t];"boolean"!=typeof a&&(o?i.push({name:t,style:a}):(r+=a,n+=" ".concat(t)))}),(0,c.jsxs)(o.Fragment,{children:[i.map(e=>{let{name:r,style:n}=e;return(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":"".concat(u.cache.key,"-global ").concat(r),dangerouslySetInnerHTML:{__html:n}},r)}),r&&(0,c.jsx)("style",{nonce:null==t?void 0:t.nonce,"data-emotion":n,dangerouslySetInnerHTML:{__html:r}})]})}),(0,c.jsx)(r,{value:u.cache,children:s})}},4646:function(e,t,r){"use strict";r.r(t),r.d(t,{appBarClasses:function(){return m},default:function(){return S},getAppBarUtilityClass:function(){return h}});var n=r(3950),o=r(2988),i=r(2265),a=r(4839),l=r(6990),c=r(3536),s=r(5885),u=r(2272),d=r(4990),p=r(2296),f=r(587);function h(e){return(0,f.ZP)("MuiAppBar",e)}var m=(0,p.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]),v=r(7437);let g=["className","color","enableColorOnDark","position"],b=e=>{let{color:t,position:r,classes:n}=e,o={root:["root","color".concat((0,u.Z)(t)),"position".concat((0,u.Z)(r))]};return(0,l.Z)(o,h,n)},y=(e,t)=>e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t,x=(0,c.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["position".concat((0,u.Z)(r.position))],t["color".concat((0,u.Z)(r.color))]]}})(e=>{let{theme:t,ownerState:r}=e,n="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!t.vars&&(0,o.Z)({},"default"===r.color&&{backgroundColor:n,color:t.palette.getContrastText(n)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:t.palette[r.color].main,color:t.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===t.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,o.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,o.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?t.vars.palette.AppBar.defaultBg:y(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?t.vars.palette.text.primary:y(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?t.vars.palette[r.color].main:y(t.vars.palette.AppBar.darkBg,t.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?t.vars.palette[r.color].contrastText:y(t.vars.palette.AppBar.darkColor,t.vars.palette[r.color].contrastText)},!["inherit","transparent"].includes(r.color)&&{backgroundColor:"var(--AppBar-background)"},{color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))});var S=i.forwardRef(function(e,t){let r=(0,s.i)({props:e,name:"MuiAppBar"}),{className:i,color:l="primary",enableColorOnDark:c=!1,position:u="fixed"}=r,d=(0,n.Z)(r,g),p=(0,o.Z)({},r,{color:l,position:u,enableColorOnDark:c}),f=b(p);return(0,v.jsx)(x,(0,o.Z)({square:!0,component:"header",ownerState:p,elevation:4,className:(0,a.Z)(f.root,i,"fixed"===u&&"mui-fixed"),ref:t},d))})},5218:function(e,t,r){"use strict";r.r(t),r.d(t,{boxClasses:function(){return o.Z},default:function(){return n.Z}});var n=r(7999),o=r(7126)},7795:function(e,t,r){"use strict";r.d(t,{default:function(){return v}});var n=r(2988),o=r(2265),i=r(5885),a=r(6003),l=r(4874),c=r(7437),s=function(e){let{styles:t,themeId:r,defaultTheme:n={}}=e,o=(0,l.Z)(n),i="function"==typeof t?t(r&&o[r]||o):t;return(0,c.jsx)(a.Z,{styles:i})},u=r(7547),d=r(2737),p=function(e){return(0,c.jsx)(s,(0,n.Z)({},e,{defaultTheme:u.Z,themeId:d.Z}))};let f=(e,t)=>(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),h=e=>(0,n.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),m=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var r;let[n,i]=t;o[e.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:null==(r=i.palette)?void 0:r.mode}});let i=(0,n.Z)({html:f(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,n.Z)({margin:0},h(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),a=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return a&&(i=[i,a]),i};var v=function(e){let{children:t,enableColorScheme:r=!1}=(0,i.i)({props:e,name:"MuiCssBaseline"});return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(p,{styles:e=>m(e,r)}),t]})}},6968:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S},dividerClasses:function(){return h},getDividerUtilityClass:function(){return f}});var n=r(3950),o=r(2988),i=r(2265),a=r(4839),l=r(6990),c=r(317),s=r(3536),u=r(5885),d=r(2296),p=r(587);function f(e){return(0,p.ZP)("MuiDivider",e)}var h=(0,d.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),m=r(7437);let v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=e=>{let{absolute:t,children:r,classes:n,flexItem:o,light:i,orientation:a,textAlign:c,variant:s}=e;return(0,l.Z)({root:["root",t&&"absolute",s,i&&"light","vertical"===a&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]},f,n)},b=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})},e=>{let{ownerState:t}=e;return(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})},e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),borderTopStyle:"inherit"}})},e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider),borderLeftStyle:"inherit"}})},e=>{let{ownerState:t}=e;return(0,o.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})}),y=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})}),x=i.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:l,className:c,component:s=l?"div":"hr",flexItem:d=!1,light:p=!1,orientation:f="horizontal",role:h="hr"!==s?"separator":void 0,textAlign:x="center",variant:S="fullWidth"}=r,Z=(0,n.Z)(r,v),_=(0,o.Z)({},r,{absolute:i,component:s,flexItem:d,light:p,orientation:f,role:h,textAlign:x,variant:S}),k=g(_);return(0,m.jsx)(b,(0,o.Z)({as:s,className:(0,a.Z)(k.root,c),role:h,ref:t,ownerState:_},Z,{children:l?(0,m.jsx)(y,{className:k.wrapper,ownerState:_,children:l}):null}))});x.muiSkipListHighlight=!0;var S=x},2664:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x},getIconUtilityClass:function(){return f},iconClasses:function(){return h}});var n=r(2988),o=r(3950),i=r(2265),a=r(4839),l=r(6990),c=r(3536),s=r(5885),u=r(2272),d=r(2296),p=r(587);function f(e){return(0,p.ZP)("MuiIcon",e)}var h=(0,d.Z)("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]),m=r(7437);let v=["baseClassName","className","color","component","fontSize"],g=e=>{let{color:t,fontSize:r,classes:n}=e,o={root:["root","inherit"!==t&&"color".concat((0,u.Z)(t)),"fontSize".concat((0,u.Z)(r))]};return(0,l.Z)(o,f,n)},b=(0,c.ZP)("span",{name:"MuiIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t["color".concat((0,u.Z)(r.color))],t["fontSize".concat((0,u.Z)(r.fontSize))]]}})(e=>{let{theme:t,ownerState:r}=e;return{userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:({inherit:"inherit",small:t.typography.pxToRem(20),medium:t.typography.pxToRem(24),large:t.typography.pxToRem(36)})[r.fontSize],color:({primary:(t.vars||t).palette.primary.main,secondary:(t.vars||t).palette.secondary.main,info:(t.vars||t).palette.info.main,success:(t.vars||t).palette.success.main,warning:(t.vars||t).palette.warning.main,action:(t.vars||t).palette.action.active,error:(t.vars||t).palette.error.main,disabled:(t.vars||t).palette.action.disabled,inherit:void 0})[r.color]}}),y=i.forwardRef(function(e,t){let r=(0,s.i)({props:e,name:"MuiIcon"}),{baseClassName:i="material-icons",className:l,color:c="inherit",component:u="span",fontSize:d="medium"}=r,p=(0,o.Z)(r,v),f=(0,n.Z)({},r,{baseClassName:i,color:c,component:u,fontSize:d}),h=g(f);return(0,m.jsx)(b,(0,n.Z)({as:u,className:(0,a.Z)(i,"notranslate",h.root,l),ownerState:f,"aria-hidden":!0,ref:t},p))});y.muiName="Icon";var x=y},9806:function(e,t,r){"use strict";r.d(t,{default:function(){return g}});var n=r(3950),o=r(2988),i=r(2265),a=r(4839),l=r(6990),c=r(5885),s=r(3536),u=r(2296),d=r(587);function p(e){return(0,d.ZP)("MuiToolbar",e)}(0,u.Z)("MuiToolbar",["root","gutters","regular","dense"]);var f=r(7437);let h=["className","component","disableGutters","variant"],m=e=>{let{classes:t,disableGutters:r,variant:n}=e;return(0,l.Z)({root:["root",!r&&"gutters",n]},p,t)},v=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===r.variant&&{minHeight:48})},e=>{let{theme:t,ownerState:r}=e;return"regular"===r.variant&&t.mixins.toolbar});var g=i.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiToolbar"}),{className:i,component:l="div",disableGutters:s=!1,variant:u="regular"}=r,d=(0,n.Z)(r,h),p=(0,o.Z)({},r,{component:l,disableGutters:s,variant:u}),g=m(p);return(0,f.jsx)(v,(0,o.Z)({as:l,className:(0,a.Z)(g.root,i),ref:t,ownerState:p},d))})},2129:function(e,t,r){"use strict";r.d(t,{default:function(){return Z}});var n=r(2988),o=r(3950),i=r(2265);let a=i.createContext(null);function l(){return i.useContext(a)}var c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",s=r(7437),u=function(e){let{children:t,theme:r}=e,o=l(),u=i.useMemo(()=>{let e=null===o?r:"function"==typeof r?r(o):(0,n.Z)({},o,r);return null!=e&&(e[c]=null!==o),e},[r,o]);return(0,s.jsx)(a.Provider,{value:u,children:t})},d=r(3209),p=r(4828);let f=["value"],h=i.createContext();var m=function(e){let{value:t}=e,r=(0,o.Z)(e,f);return(0,s.jsx)(h.Provider,(0,n.Z)({value:null==t||t},r))},v=r(4866);let g={};function b(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.useMemo(()=>{let i=e&&t[e]||t;if("function"==typeof r){let a=r(i),l=e?(0,n.Z)({},t,{[e]:a}):a;return o?()=>l:l}return e?(0,n.Z)({},t,{[e]:r}):(0,n.Z)({},t,r)},[e,t,r,o])}var y=function(e){let{children:t,theme:r,themeId:n}=e,o=(0,p.Z)(g),i=l()||g,a=b(n,o,r),c=b(n,i,r,!0),f="rtl"===a.direction;return(0,s.jsx)(u,{theme:c,children:(0,s.jsx)(d.T.Provider,{value:a,children:(0,s.jsx)(m,{value:f,children:(0,s.jsx)(v.Z,{value:null==a?void 0:a.components,children:t})})})})},x=r(2737);let S=["theme"];function Z(e){let{theme:t}=e,r=(0,o.Z)(e,S),i=t[x.Z];return(0,s.jsx)(y,(0,n.Z)({},r,{themeId:i?x.Z:void 0,theme:i||t}))}},9380:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2988),o=r(8901);function i(e){return String(parseFloat(e)).length===String(e).length}function a(e){return parseFloat(e)}function l(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{breakpoints:l=["sm","md","lg"],disableAlign:c=!1,factor:s=2,variants:u=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=r,d=(0,n.Z)({},e);d.typography=(0,n.Z)({},d.typography);let p=d.typography,f=(t=p.htmlFontSize,(e,r)=>{let n=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===r)return e;let o=a(e);"px"!==n&&("em"===n?o=a(e)*a(t):"rem"===n&&(o=a(e)*a(t)));let i=o;if("px"!==r){if("em"===r)i=o/a(t);else{if("rem"!==r)return e;i=o/a(t)}}return parseFloat(i.toFixed(5))+r}),h=l.map(e=>d.breakpoints.values[e]);return u.forEach(e=>{let t=p[e];if(!t)return;let r=parseFloat(f(t.fontSize,"rem"));if(r<=1)return;let{lineHeight:a}=t;if(!i(a)&&!c)throw Error((0,o.Z)(6));i(a)||(a=parseFloat(f(a,"rem"))/parseFloat(r));let l=null;c||(l=e=>(function(e){let{size:t,grid:r}=e,n=t-t%r,o=n+r;return t-n<o-t?n:o})({size:e,grid:function(e){let{lineHeight:t,pixels:r,htmlFontSize:n}=e;return r/(t*n)}({pixels:4,lineHeight:a,htmlFontSize:p.htmlFontSize})})),p[e]=(0,n.Z)({},t,function(e){let{cssProperty:t,min:r,max:n,unit:o="rem",breakpoints:i=[600,900,1200],transform:a=null}=e,l={[t]:"".concat(r).concat(o)},c=(n-r)/i[i.length-1];return i.forEach(e=>{let n=r+c*e;null!==a&&(n=a(n)),l["@media (min-width:".concat(e,"px)")]={[t]:"".concat(Math.round(1e4*n)/1e4).concat(o)}}),l}({cssProperty:"fontSize",min:1+(r-1)/s,max:r,unit:"rem",breakpoints:h,transform:l}))}),d}},905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return a},isEqualNode:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let i=n[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!r[e]:o.setAttribute(i,r[e])}let{children:i,dangerouslySetInnerHTML:a}=r;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),a=Number(n.content),l=[];for(let t=0,r=n.previousElementSibling;t<a;t++,r=(null==r?void 0:r.previousElementSibling)||null){var c;(null==r?void 0:null==(c=r.tagName)?void 0:c.toLowerCase())===e&&l.push(r)}let s=t.map(o).filter(e=>{for(let t=0,r=l.length;t<r;t++)if(i(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>r.insertBefore(e,n)),n.content=(a-l.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return g}});let n=r(9920),o=r(1452),i=r(7437),a=n._(r(4887)),l=o._(r(2265)),c=r(6590),s=r(905),u=r(9189),d=new Map,p=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:c,stylesheets:u}=e,m=r||t;if(m&&p.has(m))return;if(d.has(t)){p.add(m),d.get(t).then(n,c);return}let v=()=>{o&&o(),p.add(m)},g=document.createElement("script"),b=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),n&&n.call(this,t),v()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[r,n]of(i?(g.innerHTML=i.__html||"",v()):a?(g.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",v()):t&&(g.src=t,d.set(t,b)),Object.entries(e))){if(void 0===n||f.includes(r))continue;let e=s.DOMAttributeNames[r]||r.toLowerCase();g.setAttribute(e,n)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),u&&h(u),document.body.appendChild(g)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:d,stylesheets:f,...h}=e,{updateScripts:v,scripts:g,getIsSsr:b,appDir:y,nonce:x}=(0,l.useContext)(c.HeadManagerContext),S=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||r;S.current||(o&&e&&p.has(e)&&o(),S.current=!0)},[o,t,r]);let Z=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!Z.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))})),Z.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(v?(g[s]=(g[s]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:d,...h}]),v(g)):b&&b()?p.add(t||r):b&&!b()&&m(e)),y){if(f&&f.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return r?(a.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:x}:{as:"script",nonce:x}),(0,i.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===s&&r&&a.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:x}:{as:"script",nonce:x})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2555:function(e){e.exports={style:{fontFamily:"'__Roboto_d779e4', '__Roboto_Fallback_d779e4'",fontStyle:"normal"},className:"__className_d779e4"}}}]);