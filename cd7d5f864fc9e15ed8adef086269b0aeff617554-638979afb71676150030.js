"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,i=!1,r=0;r<e.length;r++){var n=e[r];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,i=a,a=!0,r++):a&&i&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,r-1)+"-"+e.slice(r-1),i=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,i=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return E},P:function(){return y},S:function(){return M},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var i=a(7294),r=(a(72),a(5697)),n=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,i,r){return void 0===r&&(r={}),o({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function d(e,t,a,i,r,n,s,l){var c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=i,c.height=r,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var g,u=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:a,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,u);return i.createElement(i.Fragment,null,i.createElement(p,o({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],h=function(e){var t=e.src,a=e.srcSet,r=e.loading,n=e.alt,l=void 0===n?"":n,c=e.shouldLoad,d=s(e,b);return i.createElement("img",o({},d,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,n=e.shouldLoad,l=void 0===n||n,c=s(e,m),d=c.sizes||(null==t?void 0:t.sizes),g=i.createElement(h,o({},c,t,{sizes:d,shouldLoad:l}));return r.length?i.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return i.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),g):g};h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var v=["fallback"],y=function(e){var t=e.fallback,a=s(e,v);return t?i.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",o({},a))};y.displayName="Placeholder",y.propTypes={fallback:r.string,sources:null==(g=w.propTypes)?void 0:g.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return i.createElement(i.Fragment,null,i.createElement(w,o({},e)),i.createElement("noscript",null,i.createElement(w,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=w.propTypes;var _,x,S=function(e,t,a){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:n().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],N=new Set,T=function(e){var t=e.as,r=void 0===t?"div":t,n=e.image,c=e.style,d=e.backgroundColor,g=e.className,u=e.class,p=e.onStartLoad,f=e.onLoad,b=e.onError,m=s(e,L),h=n.width,w=n.height,v=n.layout,y=function(e,t,a){var i={},r="gatsby-image-wrapper";return"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i}}(h,w,v),E=y.style,S=y.className,C=s(y,k),T=(0,i.useRef)(),z=(0,i.useMemo)((function(){return JSON.stringify(n.images)}),[n.images]);u&&(g=u);var O=function(e,t,a){var i="";return"fullWidth"===e&&(i='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(i='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(v,h,w);return(0,i.useEffect)((function(){_||(_=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,i=T.current.querySelector("[data-gatsby-image-ssr]");return i&&l()?(i.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){i.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),i.addEventListener("load",(function e(){i.removeEventListener("load",e),null==f||f({wasCached:!0}),setTimeout((function(){i.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(z)):x&&N.has(z)?void 0:(_.then((function(a){var i=a.renderImageToString,r=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=i(o({isLoading:!0,isLoaded:N.has(z),image:n},m)),N.has(z)||(e=requestAnimationFrame((function(){T.current&&(t=r(T.current,z,N,c,p,f,b))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[n]),(0,i.useLayoutEffect)((function(){N.has(z)&&x&&(T.current.innerHTML=x(o({isLoading:N.has(z),isLoaded:N.has(z),image:n},m)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[n]),(0,i.createElement)(r,o({},C,{style:o({},E,c,{backgroundColor:d}),className:S+(g?" "+g:""),ref:T,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},z=(0,i.memo)((function(e){return e.image?(0,i.createElement)(T,e):null}));z.propTypes=C,z.displayName="GatsbyImage";var O,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],I=function(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),r=2;r<a;r++)i[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(i)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),A={src:n().string.isRequired,alt:S,width:I,height:I,sizes:n().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(O=z,function(e){var t=e.src,a=e.__imageData,r=e.__error,n=s(e,q);return r&&console.warn(r),a?i.createElement(O,o({image:a},n)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=A},8771:function(e,t,a){var i=a(7294),r=a(1597),n=a(3723);t.Z=function(){var e,t,o=(0,r.useStaticQuery)("2355076697"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,l=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return i.createElement("div",{className:"bio"},i.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/eggngineer.png",width:90,height:90,quality:100,alt:"Profile picture",__imageData:a(0)}),(null==s?void 0:s.name)&&i.createElement("p",null,i.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",i.createElement("br",null),i.createElement("div",{class:"wrap"},i.createElement("div",null,i.createElement("a",{href:"https://twitter.com/"+((null==l?void 0:l.twitter)||"")},i.createElement(n.S,{className:"bio-avatar",layout:"constrained",formats:["auto","webp","avif"],src:"../images/twitter_logo.png",width:50,height:50,quality:100,alt:"Profile picture",__imageData:a(3078)}))),i.createElement("div",null,i.createElement("a",{href:"https://github.com/"+((null==l?void 0:l.github)||"")},i.createElement(n.S,{className:"bio-avatar",layout:"constrained",formats:["auto","webp","avif"],src:"../images/github_logo.png",width:50,height:50,quality:100,alt:"Profile picture",__imageData:a(4454)}))))))}},8678:function(e,t,a){var i=a(7294),r=a(1597);t.Z=function(e){var t,a=e.location,n=e.title,o=e.children,s="/blog/"===a.pathname;return t=s?i.createElement("h1",{className:"main-heading"},i.createElement(r.Link,{to:"/"},n)):i.createElement(r.Link,{className:"header-link-home",to:"/"},n),i.createElement("div",{className:"global-wrapper","data-is-root-path":s},i.createElement("header",{className:"global-header"},t),i.createElement("main",null,o),i.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,a){var i=a(7294),r=a(1597),n=function(e){var t,a,n,o=e.description,s=(e.lang,e.title),l=e.children,c=(0,r.useStaticQuery)("2841359383").site,d=o||c.siteMetadata.description,g=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return i.createElement(i.Fragment,null,i.createElement("title",null,g?s+" | "+g:s),i.createElement("meta",{name:"description",content:d}),i.createElement("meta",{property:"og:title",content:s}),i.createElement("meta",{property:"og:description",content:d}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""}),i.createElement("meta",{name:"twitter:title",content:s}),i.createElement("meta",{name:"twitter:description",content:d}),l)};n.defaultProps={description:""},t.Z=n},0:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/d4842/eggngineer.png","srcSet":"/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/d4842/eggngineer.png 90w,\\n/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/3f975/eggngineer.png 180w","sizes":"90px"},"sources":[{"srcSet":"/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/8af8f/eggngineer.avif 90w,\\n/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/1ef63/eggngineer.avif 180w","type":"image/avif","sizes":"90px"},{"srcSet":"/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/be9e0/eggngineer.webp 90w,\\n/blog/static/7f8e4d61e82aa4f42797d17e8de883c4/e8c26/eggngineer.webp 180w","type":"image/webp","sizes":"90px"}]},"width":90,"height":90}')},3078:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/blog/static/7ee222cef322baa5e04d00db11eb0305/5861f/twitter_logo.png","srcSet":"/blog/static/7ee222cef322baa5e04d00db11eb0305/bb6d3/twitter_logo.png 13w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/d06fd/twitter_logo.png 25w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/5861f/twitter_logo.png 50w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/90cd3/twitter_logo.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/blog/static/7ee222cef322baa5e04d00db11eb0305/573a2/twitter_logo.avif 13w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/fc9c0/twitter_logo.avif 25w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/a713c/twitter_logo.avif 50w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/322dd/twitter_logo.avif 100w","type":"image/avif","sizes":"(min-width: 50px) 50px, 100vw"},{"srcSet":"/blog/static/7ee222cef322baa5e04d00db11eb0305/f6bf2/twitter_logo.webp 13w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/78997/twitter_logo.webp 25w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/9afd2/twitter_logo.webp 50w,\\n/blog/static/7ee222cef322baa5e04d00db11eb0305/e64f1/twitter_logo.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')},4454:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/blog/static/1fbf1eeb622038a1ea2e62036d33788a/5861f/github_logo.png","srcSet":"/blog/static/1fbf1eeb622038a1ea2e62036d33788a/bb6d3/github_logo.png 13w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/d06fd/github_logo.png 25w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/5861f/github_logo.png 50w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/90cd3/github_logo.png 100w","sizes":"(min-width: 50px) 50px, 100vw"},"sources":[{"srcSet":"/blog/static/1fbf1eeb622038a1ea2e62036d33788a/573a2/github_logo.avif 13w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/fc9c0/github_logo.avif 25w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/a713c/github_logo.avif 50w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/322dd/github_logo.avif 100w","type":"image/avif","sizes":"(min-width: 50px) 50px, 100vw"},{"srcSet":"/blog/static/1fbf1eeb622038a1ea2e62036d33788a/f6bf2/github_logo.webp 13w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/78997/github_logo.webp 25w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/9afd2/github_logo.webp 50w,\\n/blog/static/1fbf1eeb622038a1ea2e62036d33788a/e64f1/github_logo.webp 100w","type":"image/webp","sizes":"(min-width: 50px) 50px, 100vw"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-638979afb71676150030.js.map