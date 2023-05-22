"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4764],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return i}});var a=n(67294),r=n(45697),o=n.n(r);function i(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:o=!0,children:i}=e;const[s,u]=(0,a.useState)(t),c=s||o;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>u(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},c&&i))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},s.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},l.propTypes={opened:o().bool}},93419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905)),o=n(38545);const i={description:"Lists the various libraries and SDKs you can use to manage Auction Houses."},s="Getting Started",l={unversionedId:"programs/auction-house/getting-started",id:"programs/auction-house/getting-started",title:"Getting Started",description:"Lists the various libraries and SDKs you can use to manage Auction Houses.",source:"@site/docs/01-programs/03-auction-house/01-getting-started.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/getting-started",permalink:"/programs/auction-house/getting-started",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/01-getting-started.md",tags:[],version:"current",lastUpdatedAt:1684748119,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:1,frontMatter:{description:"Lists the various libraries and SDKs you can use to manage Auction Houses."},sidebar:"sidebar",previous:{title:"Overview",permalink:"/programs/auction-house/overview"},next:{title:"Auction House Settings",permalink:"/programs/auction-house/auction-house-settings"}},u={},c=[{value:"SDKs",id:"sdks",level:2},{value:"JavaScript SDK",id:"javascript-sdk",level:3},{value:"Swift SDK",id:"swift-sdk",level:3},{value:"Kotlin SDK",id:"kotlin-sdk",level:3},{value:"Program Libraries",id:"program-libraries",level:2},{value:"JavaScript Program Libraries",id:"javascript-program-libraries",level:3},{value:"Swift Program Libraries",id:"swift-program-libraries",level:3},{value:"Kotlin Program Libraries",id:"kotlin-program-libraries",level:3},{value:"Rust Crates",id:"rust-crates",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The Auction House is a Solana program running on Mainnet Beta and Devnet. While you may interact with it like any other Solana program by sending transactions to a Solana node, Metaplex has built some tools to make working with it much easier. We have a ",(0,r.kt)("strong",{parentName:"p"},"CLI")," tool that will let you manage your auction house and a ",(0,r.kt)("strong",{parentName:"p"},"JS SDK")," to help you kick-start a user interface."),(0,r.kt)("h2",{id:"sdks"},"SDKs"),(0,r.kt)("h3",{id:"javascript-sdk"},"JavaScript SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"JS SDK")," provides an easy-to-use API to web developers to create and configure one's own Auction House. The SDK also allows developers to perform complicated procedures like bidding, listing, withdrawing funds from the Auction House treasury and fee accounts, and much more. "),(0,r.kt)("p",null,"The main module that interacts with the Auction House program is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js/tree/main/packages/js/src/plugins/auctionHouseModule"},"Auction House module"),". This module contains several methods that make the process of making marketplaces painless. You may access this client via the ",(0,r.kt)("inlineCode",{parentName:"p"},"auctionHouse()")," method of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const auctionHouseClient = metaplex.auctionHouse();\n")),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here are some of the useful methods provided by the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Creating and updating the Auction House\nmetaplex.auctionHouse().create();\nmetaplex.auctionHouse().update();\n\n// Trading on Auction House\nmetaplex.auctionHouse().bid();\nmetaplex.auctionHouse().list();\nmetaplex.auctionHouse().executeSale();\n\n// Cancelling a bid or listing\nmetaplex.auctionHouse().cancelBid();\nmetaplex.auctionHouse().cancelListing();\n\n// Finding bids, listings and purchases\nmetaplex.auctionHouse().findBidBy();\nmetaplex.auctionHouse().findBidByTradeState();\nmetaplex.auctionHouse().findListingsBy();\nmetaplex.auctionHouse().findListingByTradeState();\nmetaplex.auctionHouse().findPurchasesBy();\n"))))),(0,r.kt)("p",null,"There are also other methods that already exist in the Auction House module, and more methods will be added in the future. The ",(0,r.kt)("em",{parentName:"p"},"README")," of the Auction House module will be updated with a detailed documentation of all these methods very soon."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Helpful links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js/tree/main/packages/js/src/plugins/auctionHouseModule"},"Github repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/js-next"},"NPM package"))),(0,r.kt)("h3",{id:"swift-sdk"},"Swift SDK"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon.")),(0,r.kt)("h3",{id:"kotlin-sdk"},"Kotlin SDK"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon.")),(0,r.kt)("h2",{id:"program-libraries"},"Program Libraries"),(0,r.kt)("p",null,"Program Libraries are auto-generated from the Program\u2019s IDL using Solita. Whilst they require you to understand Solana programs and wire your own instructions, they have the advantage of immediately using the latest features when SDKs might take a bit longer to implement them."),(0,r.kt)("h3",{id:"javascript-program-libraries"},"JavaScript Program Libraries"),(0,r.kt)("p",null,"This is a lower level, auto-generated JavaScript library, which gets generated whenever the Auction House program (written in Rust) gets updated. "),(0,r.kt)("p",null,"Therefore, this library is intended for advanced developers who wish to interact with the program by preparing instructions and sending transactions directly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Helpful links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/auction-house/js"},"Github repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metaplex-foundation/mpl-auction-house"},"NPM package"))),(0,r.kt)("h3",{id:"swift-program-libraries"},"Swift Program Libraries"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon.")),(0,r.kt)("h3",{id:"kotlin-program-libraries"},"Kotlin Program Libraries"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon.")),(0,r.kt)("h2",{id:"rust-crates"},"Rust Crates"),(0,r.kt)("p",null,"If you are developing in Rust, you can also use the Rust crates to interact with Metaplex\u2019s programs. Since our programs are written in Rust, theses crates should contain everything you need to parse accounts and build instructions."),(0,r.kt)("p",null,"This can be helpful when developing Rust clients but also when making CPI calls to Metaplex programs within your own program."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Helpful links:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/auction-house/program"},"Github repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-auction-house"},"Crate page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-auction-house/latest/mpl_auction_house/"},"API references"))))}m.isMDXComponent=!0}}]);