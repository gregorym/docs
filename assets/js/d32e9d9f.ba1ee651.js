"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6904],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[l,u]=(0,a.useState)(t),d=l||i;return a.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>u(!l)},a.createElement("h3",null,a.createElement(s,{opened:l}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},d&&o))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},l.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},s.propTypes={opened:i().bool}},9507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Set the price of the mint in SOL with a freeze period."},l="Freeze Sol Payment",s={unversionedId:"programs/candy-machine/available-guards/freeze-sol-payment",id:"programs/candy-machine/available-guards/freeze-sol-payment",title:"Freeze Sol Payment",description:"Set the price of the mint in SOL with a freeze period.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/05-freeze-sol-payment.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/freeze-sol-payment",permalink:"/programs/candy-machine/available-guards/freeze-sol-payment",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/05-freeze-sol-payment.md",tags:[],version:"current",lastUpdatedAt:1684748119,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:5,frontMatter:{description:"Set the price of the mint in SOL with a freeze period."},sidebar:"sidebar",previous:{title:"End Date",permalink:"/programs/candy-machine/available-guards/end-date"},next:{title:"Freeze Token Payment",permalink:"/programs/candy-machine/available-guards/freeze-token-payment"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2},{value:"Initialize the Freeze Escrow",id:"initialize-the-freeze-escrow",level:3},{value:"Thaw a Frozen NFT",id:"thaw-a-frozen-nft",level:3},{value:"Unlock Funds",id:"unlock-funds",level:3},{value:"Stop Freezing NFTs",id:"stop-freezing-nfts",level:2},{value:"Freeze Escrows and Guard Groups",id:"freeze-escrows-and-guard-groups",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"freeze-sol-payment"},"Freeze Sol Payment"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Freeze Sol Payment")," guard allows minting frozen NFTs by charging the payer an amount in SOL. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed."),(0,r.kt)("p",null,"Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine was deleted."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed.")),(0,r.kt)("p",null,'The funds are transferred to a "Freeze Escrow" account which must be initialized by the Candy Guard authority before minting can start. Once all Frozen NFTs have been thawed, the funds can be unlocked and transferred to the configured destination account by the Candy Guard authority.'),(0,r.kt)("p",null,"You may initialize the Freeze Escrow account, thaw NFTs and unlock funds ",(0,r.kt)("a",{parentName:"p",href:"#route-instruction"},"via the route instruction")," of this guard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeOverview.png",src:n(94710).Z+"#radius",width:"2520",height:"864"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Freeze Sol Payment guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lamports"),": The amount in SOL (or lamports) to charge the payer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that should eventually receive all payments related to this guard.")),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can create a Candy Machine using the Freeze Sol Payment guard. Note that, in this example, we\u2019re using Umi's identity as the destination wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"create(umi, {\n  // ...\n  guards: {\n    freezeSolPayment: some({\n      lamports: sol(1.5),\n      destination: umi.identity.publicKey,\n    }),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPayment.html"},"FreezeSolPayment")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can create a Candy Machine using the Freeze Sol Payment guard via the JS SDK. Note that, in this example, we\u2019re using the current identity as the destination wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    freezeSolPayment: {\n      amount: sol(1.5),\n      destination: metaplex.identity().publicKey,\n    },\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,"The Freeze Sol Payment guard contains the following Mint Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that should eventually receive all payments related to this guard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Rule Set")," (optional): The Rule Set of the minted NFT, if we are minting a Programmable NFT with a Rule Set.")),(0,r.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#freezesolpayment"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may pass the Mint Settings of the Freeze Sol Payment guard using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mintArgs")," argument like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mintV2(umi, {\n  // ...\n  mintArgs: {\n    freezeSolPayment: some({ destination: umi.identity.publicKey }),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentMintArgs.html"},"FreezeSolPaymentMintArgs")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The JS SDK does not require any Mint Settings for the Freeze Sol Payment guard since it can infer them from the provided Candy Machine model."))))),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,"The Freeze Sol Payment route instruction supports the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#initialize-the-freeze-escrow"},"Initialize the Freeze Escrow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thaw-a-frozen-nft"},"Thaw a Frozen NFT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unlock-funds"},"Unlock Funds"))),(0,r.kt)("h3",{id:"initialize-the-freeze-escrow"},"Initialize the Freeze Escrow"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"initialize"))),(0,r.kt)("p",null,"When using the Freeze Sol Payment guard, we must initialize the Freeze Escrow account before minting can start. This will create a PDA account derived from the Destination attribute of the guard's settings."),(0,r.kt)("p",null,"The Freeze Escrow PDA account will keep track of several parameters such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many Frozen NFTs were minted through this guard."),(0,r.kt)("li",{parentName:"ul"},"When was the first Frozen NFT minted via this guard as the Freeze Period starts counting after that.")),(0,r.kt)("p",null,"When initializing this Freeze Escrow account, we must provide the following arguments to the route instruction of the guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"initialize"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that should eventually receive all payments related to this guard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Period"),": The amount of time in seconds that the Freeze Period should last. This can be a maximum of 30 days (2,592,000 seconds) and it will start from the very first Frozen NFT minted via this guard. The Freeze Period provides a safety mechanism to ensure Frozen NFTs can eventually be thawed even if the Candy Machine never mints out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Guard Authority"),": The authority of the Candy Guard account as a Signer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeSolPayment1.png",src:n(98905).Z+"#radius",width:"2472",height:"888"})),(0,r.kt)("p",null,"Last but not least, the Freeze Escrow PDA account will receive the funds of all Frozen NFTs minted through this guard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeSolPayment2.png",src:n(88337).Z+"#radius",width:"2472",height:"888"})),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we initialize the Freeze Escrow account with a maximum Freeze Period of 15 days and we use the current identity as the Candy Guard authority."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'route(umi, {\n  // ...\n  guard: "freezeSolPayment",\n  routeArgs: {\n    path: "initialize",\n    destination: umi.identity.publicKey,\n    period: 15 * 24 * 60 * 60, // 15 days.\n    candyGuardAuthority: umi.identity,\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/route.html"},"route"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentRouteArgsInitialize.html"},"FreezeSolPaymentRouteArgsInitialize")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we initialize the Freeze Escrow account with a maximum Freeze Period of 15 days and we use the current identity as the Candy Guard authority."),(0,r.kt)("p",null,"Note that the JS SDK does not require the Destination to be passed in since it can get it from the provided Candy Machine model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'await metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: "freezeSolPayment",\n  settings: {\n    path: "initialize",\n    period: 15 * 24 * 60 * 60, // 15 days.\n    candyGuardAuthority: metaplex.identity(),\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardRouteSettings.html"},"Route Settings"),".")))),(0,r.kt)("h3",{id:"thaw-a-frozen-nft"},"Thaw a Frozen NFT"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"thaw"))),(0,r.kt)("p",null,"Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine was deleted."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed.")),(0,r.kt)("p",null,"Note that since the funds in the Freeze Escrow are not transferrable until all NFTs are thawed, this creates an incentive for the treasury to thaw all NFTs as soon as possible."),(0,r.kt)("p",null,"To thaw a Frozen NFT, we must provide the following arguments to the route instruction of the guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"thaw"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that should eventually receive all payments related to this guard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Mint"),": The mint address of the Frozen NFT to thaw."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Owner"),": The address of the owner of the Frozen NFT to thaw."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Token Standard"),": The token standard of the Frozen NFT to thaw."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Rule Set")," (optional): The Rule Set of the Frozen NFT to thaw, if we are thawing a Programmable NFT with a Rule Set.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeSolPayment3.png",src:n(14448).Z+"#radius",width:"2472",height:"888"})),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we thaw a Frozen NFT that belongs to the current identity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'route(umi, {\n  // ...\n  guard: "freezeSolPayment",\n  routeArgs: {\n    path: "thaw",\n    destination,\n    nftMint: nftMint.publicKey,\n    nftOwner: umi.identity.publicKey,\n    nftTokenStandard: candyMachine.tokenStandard,\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/route.html"},"route"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentRouteArgsThaw.html"},"FreezeSolPaymentRouteArgsThaw")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we thaw a Frozen NFT that belongs to the current identity."),(0,r.kt)("p",null,"Note that the JS SDK does not require the Destination to be passed in since it can get it from the provided Candy Machine model. It also does not require the NFT Token Standard or the NFT Rule Set as it does not support minting Programmable NFTs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { toPublicKey } from "@metaplex-foundation/js";\n\nawait metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: "freezeSolPayment",\n  settings: {\n    path: "thaw",\n    nftMint: toPublicKey("GhFM53E6NEW7Ud8Gqh34WLBztkpe74PRtbHEU4b6cwWo"),\n    nftOwner: metaplex.identity().publicKey,\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardRouteSettings.html"},"Route Settings"),".")))),(0,r.kt)("h3",{id:"unlock-funds"},"Unlock Funds"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"unlockFunds"))),(0,r.kt)("p",null,"Once all Frozen NFTs have been thawed, the treasury can unlock the funds from the Freeze Escrow account. This will transfer the funds to the configured Destination address."),(0,r.kt)("p",null,"To unlock the funds, we must provide the following arguments to the route instruction of the guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"unlockFunds"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that should eventually receive all payments related to this guard."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Guard Authority"),": The authority of the Candy Guard account as a Signer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeSolPayment4.png",src:n(85695).Z+"#radius",width:"2472",height:"888"})),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we unlock the funds from the Freeze Escrow account using the current identity as the Candy Guard authority."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'route(umi, {\n  // ...\n  guard: "freezeSolPayment",\n  routeArgs: {\n    path: "unlockFunds",\n    destination,\n    candyGuardAuthority: umi.identity,\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/route.html"},"route"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentRouteArgsUnlockFunds.html"},"FreezeSolPaymentRouteArgsUnlockFunds")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we unlock the funds from the Freeze Escrow account using the current identity as the Candy Guard authority."),(0,r.kt)("p",null,"Note that the JS SDK does not require the Destination to be passed in since it can get it from the provided Candy Machine model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'await metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: "freezeSolPayment",\n  settings: {\n    path: "unlockFunds",\n    candyGuardAuthority: metaplex.identity(),\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardRouteSettings.html"},"Route Settings"),".")))),(0,r.kt)("h2",{id:"stop-freezing-nfts"},"Stop Freezing NFTs"),(0,r.kt)("p",null,"It is possible to stop the freezing of NFTs within a Freeze Sol Payment guard. In other words, new-minted NFTs will no longer be frozen but ",(0,r.kt)("strong",{parentName:"p"},"existing Frozen NFTs will remain frozen"),"."),(0,r.kt)("p",null,"There are several ways of achieving this, which can be separated into two categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),": Existing Frozen NFTs can be thawed by anyone using the ",(0,r.kt)("inlineCode",{parentName:"li"},"thaw")," path of the route instruction."),(0,r.kt)("li",{parentName:"ul"},"\u2744\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Cannot Thaw"),': Existing Frozen NFTs cannot be thawed yet and we have to wait for one "Can Thaw" condition to be met.')),(0,r.kt)("p",null,"With that in mind, here is the exhaustive list of ways to stop freezing NFTs and whether or not each of them allows thawing existing Frozen NFTs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out \u2192 \u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed \u2192 \u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine account was deleted \u2192 \u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The Candy Guard account was deleted \u2192 \u2744\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Cannot Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The Freeze Sol Payment guard was removed from the settings \u2192 \u2744\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Cannot Thaw"),".")),(0,r.kt)("h2",{id:"freeze-escrows-and-guard-groups"},"Freeze Escrows and Guard Groups"),(0,r.kt)("p",null,"When using multiple Freeze Sol Payment guards within various ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/guard-groups"},"Guard Groups"),", it is important to understand the relationship between a Freeze Sol Payment guard and a Freeze Escrow account."),(0,r.kt)("p",null,"The Freeze Escrow account is a PDA derived from a Destination address. This means that if ",(0,r.kt)("strong",{parentName:"p"},"multiple Freeze Sol Payment guards")," are configured to use the ",(0,r.kt)("strong",{parentName:"p"},"same Destination address"),", they will all ",(0,r.kt)("strong",{parentName:"p"},"share the same Freeze Escrow account"),"."),(0,r.kt)("p",null,"Therefore, they will also share the same Freeze Period and all funds will be collected by the same escrow account. This also means, we only need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," route instruction once per configured Destination address."),(0,r.kt)("p",null,"It is also possible to use multiple Freeze Sol Payment guards with different Destination addresses. In this case, each Freeze Sol Payment guard will have its own Freeze Escrow account and its own Freeze Period."),(0,r.kt)("p",null,"The example below illustrates a Candy Machine with three Freeze Sol Payment guards in three groups such that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Groups 1 and 2 share the same Destination address and therefore the same Freeze Escrow account."),(0,r.kt)("li",{parentName:"ul"},"Group 3 has its own Destination address and therefore its own Freeze Escrow account.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeSolPayment5.png",src:n(74408).Z+"#radius",width:"2472",height:"1584"})))}c.isMDXComponent=!0},94710:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeOverview-536d8c604aaa037b663871a38f3f0244.png"},98905:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeSolPayment1-eb95408c8d87c60d48ebc9590a516422.png"},88337:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeSolPayment2-053ebe81a37d73e8b3059e26b88da7a8.png"},14448:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeSolPayment3-a2a5714dc8612c75ceda8f44b8d1d459.png"},85695:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeSolPayment4-55cb1a2137079fd956765d6e29f9929f.png"},74408:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeSolPayment5-ad0b743efe624ce9dc365d65f068794d.png"}}]);