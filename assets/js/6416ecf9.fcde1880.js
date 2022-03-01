"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[898],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1880:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:2},l="System Metadata",p={unversionedId:"reference/API/system-metadata",id:"reference/API/system-metadata",title:"System Metadata",description:"System Metadata APIs are designed to give you more information about the Nakji Ecosystem. Through the System Metadata APIs, you can get the full list of data streams that are available on Nakji Network and details of specific data streams.",source:"@site/docs/reference/API/system-metadata.md",sourceDirName:"reference/API",slug:"/reference/API/system-metadata",permalink:"/docs/reference/API/system-metadata",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/reference/API/overview"},next:{title:"Historical Data",permalink:"/docs/reference/API/historical"}},c=[{value:"Endpoints",id:"endpoints",children:[{value:"<code>/tv/reference/symbols</code>",id:"tvreferencesymbols",children:[{value:"Request vars",id:"request-vars",children:[],level:4},{value:"Response vars",id:"response-vars",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"<code>/tv/reference/symbols/&lt;streamName&gt;</code>",id:"tvreferencesymbolsstreamname",children:[{value:"Request vars",id:"request-vars-1",children:[],level:4},{value:"Response vars",id:"response-vars-1",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-metadata"},"System Metadata"),(0,i.kt)("p",null,"System Metadata APIs are designed to give you more information about the Nakji Ecosystem. Through the System Metadata APIs, you can get the full list of data streams that are available on Nakji Network and details of specific data streams."),(0,i.kt)("p",null,"All System Metadata endpoints require ",(0,i.kt)("a",{parentName:"p",href:"../auth"},"authentication")," during the private beta."),(0,i.kt)("p",null,"The endpoints starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"/tv")," are designed to be compatible with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/charting_library/"},"Tradingview charting library"),". To get access to the Tradingview Charting Library, please refer to the tradingview.com website."),(0,i.kt)("p",null,"Base URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.nakji.network/v1")),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)("h3",{id:"tvreferencesymbols"},(0,i.kt)("inlineCode",{parentName:"h3"},"/tv/reference/symbols")),(0,i.kt)("p",null,"Returns a list of all available data streams available on Nakji. "),(0,i.kt)("p",null,"This endpoint corresponds with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/charting_library/wiki/JS-Api#searchsymbolsuserinput-exchange-symboltype-onresultreadycallback"},(0,i.kt)("inlineCode",{parentName:"a"},"searchsymbol()"))," in the Tradingview Charting Library."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This response may take some time to finish loading due to the large amount of streams."))),(0,i.kt)("h4",{id:"request-vars"},"Request vars"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search"),": search for contract address, token name, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace"),": retrieve the most recently active pairs in a protocol")),(0,i.kt)("h4",{id:"response-vars"},"Response vars"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ticker"),": unique identifier for the stream. ",(0,i.kt)("strong",{parentName:"li"},"This is the only variable you need if not using the Tradingview charting library.")," We refer to this as ",(0,i.kt)("inlineCode",{parentName:"li"},"streamName"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"symbol"),": Human readable name of this data stream"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"full_name"),": Human readable name of this data stream, including its namespace. Format: ",(0,i.kt)("inlineCode",{parentName:"li"},"Dapp"),":",(0,i.kt)("inlineCode",{parentName:"li"},"symbol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": Description for Tradingview API. If applicable, also includes the contract address to disambiguate overlapping symbol names"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exchange"),": the name of the DApp or exchange the stream is coming from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": type of the stream. This could be either ",(0,i.kt)("inlineCode",{parentName:"li"},"indicator")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"aggregate")," (Nakji aggregates individual trades into candlesticks)")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'    # list all\n    curl -i -X GET \\\n      -H \'Origin: https://yourdomain\' \\\n      -H \'Authorization:Bearer <apikey>\' \\\n      "https://api.nakji.network/v1/tv/reference/symbols"\n\n    # Response format is `ldjson`, newline delimited json\n    {"symbol":"eth","full_name":"eth:eth","description":"eth.eth.averagedifficulty.1m","exchange":"eth","ticker":"eth.eth.averagedifficulty.1m","type":"indicator"}\n    {"symbol":"eth","full_name":"eth:eth","description":"eth.eth.averagegasused.1m","exchange":"eth","ticker":"eth.eth.averagegasused.1m","type":"indicator"}\n    {"symbol":"eth","full_name":"eth:eth","description":"eth.eth.averagegasprice.1m","exchange":"eth","ticker":"eth.eth.averagegasprice.1m","type":"indicator"}\n    {"symbol":"SLC-USDT","full_name":"uniswapv2:SLC-USDT","description":"uniswapv2.SLC-USDT.liquiditypool-1m0s (0x00004EE988665Cdda9A1080d5792cecD16Dc1220)","exchange":"uniswapv2","ticker":"uniswapv2.0x00004EE988665Cdda9A1080d5792cecD16Dc1220.liquiditypool-1m0s","type":"aggregate"}\n    {"symbol":"SLC-USDT","full_name":"uniswapv2:SLC-USDT","description":"uniswapv2.SLC-USDT.trade-1m0s (0x00004EE988665Cdda9A1080d5792cecD16Dc1220)","exchange":"uniswapv2","ticker":"uniswapv2.0x00004EE988665Cdda9A1080d5792cecD16Dc1220.trade-1m0s","type":"aggregate"}\n    {"symbol":"OWL-WETH","full_name":"uniswapv2:OWL-WETH","description":"uniswapv2.OWL-WETH.liquiditypool-1m0s (0x0005eE2Ef3F313aE168451ef8174b4fCC508819F)","exchange":"uniswapv2","ticker":"uniswapv2.0x0005eE2Ef3F313aE168451ef8174b4fCC508819F.liquiditypool-1m0s","type":"aggregate"}\n    {"symbol":"OWL-WETH","full_name":"uniswapv2:OWL-WETH","description":"uniswapv2.OWL-WETH.trade-1m0s (0x0005eE2Ef3F313aE168451ef8174b4fCC508819F)","exchange":"uniswapv2","ticker":"uniswapv2.0x0005eE2Ef3F313aE168451ef8174b4fCC508819F.trade-1m0s","type":"aggregate"}\n\n\n    # search\n    curl -i -X GET \\\n      -H \'Origin: https://yourdomain\' \\\n      -H \'Authorization:Bearer <apikey>\' \\\n    https://api.nakji.network/v1/tv/reference/symbols\\?search\\=0x58f876857a02d6762e0101bb5c46a8c1ed44dc16\n\n    {"symbol":"Cake-LP-BUSD","full_name":"pancakeswapv2:Cake-LP-BUSD","description":"pancakeswapv2.Cake-LP-BUSD.trade-1m0s (0x1016CFdA658D6Df132e15D2DFdd90F195c22886f)","exchange":"pancakeswapv2","ticker":"pancakeswapv2.0x1016CFdA658D6Df132e15D2DFdd90F195c22886f.trade-1m0s","type":"aggregate"}\n    {"symbol":"Cake-LP-BUSD","full_name":"pancakeswapv2:Cake-LP-BUSD","description":"pancakeswapv2.Cake-LP-BUSD.liquiditypool-1m0s (0x1016CFdA658D6Df132e15D2DFdd90F195c22886f)","exchange":"pancakeswapv2","ticker":"pancakeswapv2.0x1016CFdA658D6Df132e15D2DFdd90F195c22886f.liquiditypool-1m0s","type":"aggregate"}\n    {"symbol":"WBNB-BUSD","full_name":"pancakeswapv2:WBNB-BUSD","description":"pancakeswapv2.WBNB-BUSD.liquiditypool-1m0s (0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16)","exchange":"pancakeswapv2","ticker":"pancakeswapv2.0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16.liquiditypool-1m0s","type":"aggregate"}\n    {"symbol":"WBNB-BUSD","full_name":"pancakeswapv2:WBNB-BUSD","description":"pancakeswapv2.WBNB-BUSD.trade-1m0s (0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16)","exchange":"pancakeswapv2","ticker":"pancakeswapv2.0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16.trade-1m0s","type":"aggregate"}\n')),(0,i.kt)("h3",{id:"tvreferencesymbolsstreamname"},(0,i.kt)("inlineCode",{parentName:"h3"},"/tv/reference/symbols/<streamName>")),(0,i.kt)("p",null,"Given a stream name, returns the full details about a stream. "),(0,i.kt)("p",null,"This endpoint corresponds with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/charting_library/wiki/JS-Api#resolvesymbolsymbolname-onsymbolresolvedcallback-onresolveerrorcallback-extension"},(0,i.kt)("inlineCode",{parentName:"a"},"resolveSymbol()"))," in the Tradingview Charting Library and is usually not necessary for other applications."),(0,i.kt)("h4",{id:"request-vars-1"},"Request vars"),(0,i.kt)("p",null,"0 GET variables. ",(0,i.kt)("inlineCode",{parentName:"p"},"streamName")," is the name of the stream, and is returned as ",(0,i.kt)("inlineCode",{parentName:"p"},"ticker")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/tv/reference/symbols")," endpoint (eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"pancakeswapv2.0x1016CFdA658D6Df132e15D2DFdd90F195c22886f.trade-1m0s"),")."),(0,i.kt)("h4",{id:"response-vars-1"},"Response vars"),(0,i.kt)("p",null,"All response vars correspond with Tradingview charting library's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/charting_library/wiki/Symbology#symbolinfo-structure"},"symbology")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/charting_library/wiki/Symbology#symbolinfo-structure"},(0,i.kt)("inlineCode",{parentName:"a"},"SymbolInfo struct")),"."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -X GET \\\n  -H \'Origin: https://yourdomain\' \\\n  -H \'Authorization:Bearer <apikey>\' \n  https://api.nakji.network/v1/tv/reference/symbols/nakji.common.0_0_0.market_trade-1m0s?n=uniswapv2&s=0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f\n\n{\n "name":"AAVE-WETH",\n "timezone":"Etc/UTC",\n "pricescale":100000000,\n "has_intraday":true,\n "has_daily":true,\n "has_weekly_and_monthly":true,\n "has_no_volume":false,\n "ticker":"uniswapv2.0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f.trade-1m0s",\n "description":"AAVE-WETH (0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f)",\n "type":"aggregate",\n "data_status":"streaming",\n "supported_resolutions":["1S","1","3","5","15","30","45","60","120","180","240","1D","1W","1M","12M"],\n "intraday_multipliers":["1","5","15","30","60","D","W"],\n "session":"24x7",\n "exchange":"uniswapv2",\n "has_seconds":false,\n "seconds_multipliers":null,\n "has_empty_bars":true\n }\n')))}m.isMDXComponent=!0}}]);