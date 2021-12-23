(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[277],{7277:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var o=n(7294),r=n(6742),l=n(2122),s=n(6010),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).Z,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var m=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,l=p({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return l[n[0]];var s=o?{display:"inline-block"}:{},a=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(a))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,l=e.token,s=p({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?p({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),i(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,l=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],l=0,s=0,a=[],c=[a];s>-1;){for(;(l=o[s]++)<r[s];){var i=void 0,p=t[s],h=n[s][l];if("string"==typeof h?(p=s>0?p:["plain"],i=h):(p=d(p,h.type),h.alias&&(p=d(p,h.alias)),i=h.content),"string"==typeof i){var g=i.split(u),m=g.length;a.push({types:p,content:g[0]});for(var f=1;f<m;f++)y(a),c.push(a=[]),a.push({types:p,content:g[f]})}else s++,t.push(p),n.push(i),o.push(0),r.push(i.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return y(a),c}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(7594),v=n.n(f),b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=n(5350),j=n(9306),E=function(){var e=(0,j.LU)().prism,t=(0,k.Z)().isDarkTheme,n=e.theme||b,o=e.darkTheme||n;return t?o:n},T=n(4973),x="codeBlockContainer_K1bP",N="codeBlockContent_hGly",C="codeBlockTitle_eoMF",Z="codeBlock_23N8",B="codeBlockWithTitle_2JqI",L="copyButton_Ue-o",P="codeBlockLines_39YC",S=/{([\d,-]+)}/,O=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")};function _(e){var t=e.children,n=e.className,r=e.metastring,a=e.title,i=(0,j.LU)().prism,p=(0,o.useState)(!1),u=p[0],y=p[1],d=(0,o.useState)(!1),h=d[0],g=d[1];(0,o.useEffect)((function(){g(!0)}),[]);var f=(0,j.bc)(r)||a,b=(0,o.useRef)(null),k=[],_=E(),w=Array.isArray(t)?t.join(""):t;if(r&&S.test(r)){var D=r.match(S)[1];k=v()(D).filter((function(e){return e>0}))}var A=n&&n.replace(/language-/,"");!A&&i.defaultLanguage&&(A=i.defaultLanguage);var I=w.replace(/\n$/,"");if(0===k.length&&void 0!==A){for(var z,R="",$=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"]);case"jsx":case"tsx":return O(["js","jsBlock","jsx"]);case"html":return O(["js","jsBlock","html"]);case"python":case"py":return O(["python"]);default:return O()}}(A),F=w.replace(/\n$/,"").split("\n"),U=0;U<F.length;){var V=U+1,W=F[U].match($);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=V+",";break;case"highlight-start":z=V;break;case"highlight-end":R+=z+"-"+(V-1)+","}F.splice(U,1)}else U+=1}k=v()(R),I=F.join("\n")}var q=function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var s=document.getSelection(),a=!1;s.rangeCount>0&&(a=s.getRangeAt(0)),o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}r.remove(),a&&(s.removeAllRanges(),s.addRange(a)),l&&l.focus()}(I),y(!0),setTimeout((function(){return y(!1)}),2e3)};return o.createElement(m,(0,l.Z)({},c,{key:String(h),theme:_,code:I,language:A}),(function(e){var t,n=e.className,r=e.style,a=e.tokens,c=e.getLineProps,i=e.getTokenProps;return o.createElement("div",{className:x},f&&o.createElement("div",{style:r,className:C},f),o.createElement("div",{className:(0,s.Z)(N,A)},o.createElement("pre",{tabIndex:0,className:(0,s.Z)(n,Z,"thin-scrollbar",(t={},t[B]=f,t)),style:r},o.createElement("code",{className:P},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return k.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,l.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,l.Z)({key:t},i({token:e,key:t})))})))})))),o.createElement("button",{ref:b,type:"button","aria-label":(0,T.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(L,"clean-btn"),onClick:q},u?o.createElement(T.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(T.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var w=n(6159),D={code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(_,e):o.createElement("code",e)},a:function(e){return o.createElement(r.Z,e)},pre:function(e){var t,n=e.children;return(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:o.createElement(_,(0,o.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,w.Z)("h1"),h2:(0,w.Z)("h2"),h3:(0,w.Z)("h3"),h4:(0,w.Z)("h4"),h5:(0,w.Z)("h5"),h6:(0,w.Z)("h6")}},7594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,l]=t;if(o&&l){o=parseInt(o),l=parseInt(l);const e=o<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=o;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);