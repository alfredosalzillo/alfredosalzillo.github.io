(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(5996).Z,r=n(8644).Z,o=n(9536).Z,a=n(872).Z,l=o(n(6006)),s=r(n(4553)),d=n(9321),c=n(375),u=n(3927);n(7989);var f=r(n(6778));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function _(e){let[t,n]=l.version.split("."),i=parseInt(t,10),r=parseInt(n,10);return i>18||18===i&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:o,qualityInt:s,className:d,imgStyle:c,blurStyle:u,isLazy:f,fetchPriority:p,fill:g,placeholder:m,loading:v,srcString:y,config:w,unoptimized:b,loader:P,onLoadRef:C,onLoadingCompleteRef:S,setBlurComplete:x,setShowAltText:E,onLoad:j,onError:O}=e,A=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=f?"lazy":v,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},A,_(p),{loading:v,width:o,height:r,decoding:"async","data-nimg":g?"fill":"1",className:d,style:i({},c,u)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&h(e,y,m,C,S,x,b))},[y,m,C,S,x,O,b,t]),onLoad:e=>{let t=e.currentTarget;h(t,y,m,C,S,x,b)},onError:e=>{E(!0),"blur"===m&&x(!0),O&&O(e)}})))}),y=l.forwardRef((e,t)=>{let n,r;var o,{src:h,sizes:y,unoptimized:w=!1,priority:b=!1,loading:P,className:C,quality:S,width:x,height:E,fill:j,style:O,onLoad:A,onLoadingComplete:k,placeholder:M="empty",blurDataURL:z,fetchPriority:R,layout:I,objectFit:L,objectPosition:D,lazyBoundary:T,lazyRoot:N}=e,U=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let Z=l.useContext(u.ImageConfigContext),F=l.useMemo(()=>{let e=p||Z||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[Z]),W=U,B=W.loader||f.default;delete W.loader;let H="__next_img_default"in B;if(H){if("custom"===F.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:n}=t,i=a(t,["config"]);return e(i)}}if(I){"fill"===I&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(O=i({},O,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!y&&(y=t)}let V="",G=m(x),q=m(E);if("object"==typeof(o=h)&&(g(o)||void 0!==o.src)){let e=g(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,z=z||e.blurDataURL,V=e.src,!j){if(G||q){if(G&&!q){let t=G/e.width;q=Math.round(e.height*t)}else if(!G&&q){let t=q/e.height;G=Math.round(e.width*t)}}else G=e.width,q=e.height}}let X=!b&&("lazy"===P||void 0===P);(!(h="string"==typeof h?h:V)||h.startsWith("data:")||h.startsWith("blob:"))&&(w=!0,X=!1),F.unoptimized&&(w=!0),H&&h.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0),b&&(R="high");let[Y,J]=l.useState(!1),[$,K]=l.useState(!1),Q=m(S),ee=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:D}:{},$?{}:{color:"transparent"},O),et="blur"===M&&z&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:G,heightInt:q,blurWidth:n,blurHeight:r,blurDataURL:z,objectFit:ee.objectFit}),'")')}:{},en=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:o,sizes:a,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,a),c=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:n,quality:o,width:e})," ").concat("w"===d?e:i+1).concat(d)).join(", "),src:l({config:t,src:n,quality:o,width:s[c]})}}({config:F,src:h,unoptimized:w,width:G,quality:Q,sizes:y,loader:B}),ei=h,er=l.useRef(A);l.useEffect(()=>{er.current=A},[A]);let eo=l.useRef(k);l.useEffect(()=>{eo.current=k},[k]);let ea=i({isLazy:X,imgAttributes:en,heightInt:q,widthInt:G,qualityInt:Q,className:C,imgStyle:ee,blurStyle:et,loading:P,config:F,fetchPriority:R,fill:j,unoptimized:w,placeholder:M,loader:B,srcString:ei,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:J,setShowAltText:K},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ea,{ref:t})),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src,imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:W.crossOrigin},_(R)))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(8644).Z)(n(6006));let r=i.default.createContext({});t.AmpStateContext=r},2601:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},4553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var i=n(5996).Z,r=n(8644).Z,o=(0,n(9536).Z)(n(6006)),a=r(n(7627)),l=n(4898),s=n(1240),d=n(2601);function c(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7989);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(u,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return r=>{let o=!0,a=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){a=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=r.props[t],n=i[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),i[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=i({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}t.default=function(e){let{children:t}=e,n=o.useContext(l.AmpStateContext),i=o.useContext(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:i,inAmpMode:d.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9321:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:o,objectFit:a}=e,l=i||t,s=r||n,d=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(d,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},3927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var i=(0,n(8644).Z)(n(6006)),r=n(375);let o=i.default.createContext(r.imageConfigDefault);t.ImageConfigContext=o},375:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6778:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},7627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}if(r){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var i=(0,n(9536).Z)(n(6006));let r=!1,o=r?()=>{}:i.useLayoutEffect,a=r?()=>{}:i.useEffect},7989:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n},5566:function(e,t,n){Promise.resolve().then(n.t.bind(n,6642,23)),Promise.resolve().then(n.t.bind(n,9126,23)),Promise.resolve().then(n.t.bind(n,5632,23)),Promise.resolve().then(n.t.bind(n,8963,23)),Promise.resolve().then(n.t.bind(n,1440,23)),Promise.resolve().then(n.t.bind(n,4561,23))},6642:function(e){e.exports={infos:"page_infos__wQelr",main:"page_main__WunS6",content:"page_content__9kT_h"}},1440:function(e){e.exports={root:"ArticlePreview_root__XOXi4",content:"ArticlePreview_content__XyOmo",title:"ArticlePreview_title__TTYzz",description:"ArticlePreview_description__WMehM",actions:"ArticlePreview_actions__eKxT2",link:"ArticlePreview_link__J7zPo"}},9126:function(e){e.exports={root:"Header_root__m76bt",logo:"Header_logo__vPR6R",title:"Header_title__GiEXe"}},8963:function(e){e.exports={root:"ProfileCard_root__YfcRW",title:"ProfileCard_title__L7y6m",info:"ProfileCard_info__No6gR",links:"ProfileCard_links__eptAk",icon:"ProfileCard_icon__iH5MN"}},4561:function(e){e.exports={root:"RepositoryPreview_root__L2F68",title:"RepositoryPreview_title__6Zvx0",tags:"RepositoryPreview_tags__sVssk",tag:"RepositoryPreview_tag__jgalU","tag-dot":"RepositoryPreview_tag-dot__rdcAE"}}},function(e){e.O(0,[667,961,744],function(){return e(e.s=5566)}),_N_E=e.O()}]);