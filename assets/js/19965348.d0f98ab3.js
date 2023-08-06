"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6440],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},38545:function(e,t,a){a.d(t,{Q:function(){return r},U:function(){return s}});var n=a(67294),i=a(45697),o=a.n(i);function s(e){let{children:t}=e;return n.createElement("div",{className:"accordion"},t)}function r(e){let{open:t,title:a,actions:i,keepAlive:o=!0,children:s}=e;const[r,u]=(0,n.useState)(t),c=r||o;return n.createElement("div",{className:["accordion-item",r?"accordion-item-opened":"accordion-item-closed"].join(" ")},n.createElement("div",{className:"accordion-item-header",onClick:()=>u(!r)},n.createElement("h3",null,n.createElement(l,{opened:r}),n.createElement("span",null,a)),i),n.createElement("div",{className:"accordion-item-content"},c&&s))}function l(e){let{opened:t}=e;return t?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}s.propTypes={children:o().any},r.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},l.propTypes={opened:o().bool}},13755:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return u}});var n=a(83117),i=(a(67294),a(3905));a(38545);const o={description:"gives an overview of the Auction House program"},s="Overview",r={unversionedId:"programs/auction-house/overview",id:"programs/auction-house/overview",title:"Overview",description:"gives an overview of the Auction House program",source:"@site/docs/01-programs/03-auction-house/00-overview.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/overview",permalink:"/programs/auction-house/overview",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/00-overview.md",tags:[],version:"current",lastUpdatedAt:1691343575,formattedLastUpdatedAt:"Aug 6, 2023",sidebarPosition:0,frontMatter:{description:"gives an overview of the Auction House program"},sidebar:"sidebar",previous:{title:"Auction House",permalink:"/programs/auction-house/"},next:{title:"Getting Started",permalink:"/programs/auction-house/getting-started"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Creating an Auction House",id:"creating-an-auction-house",level:2},{value:"Listing and Bidding",id:"listing-and-bidding",level:2},{value:"Listing",id:"listing",level:3},{value:"Bidding",id:"bidding",level:3},{value:"Executing a Sale",id:"executing-a-sale",level:2},{value:"Auctioning Fungible Assets",id:"auctioning-fungible-assets",level:2},{value:"Buying asset using a custom SPL Token",id:"buying-asset-using-a-custom-spl-token",level:2},{value:"Custom Order Matching",id:"custom-order-matching",level:2},{value:"Auctioneer",id:"auctioneer",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Additional Reading Material",id:"additional-reading-material",level:2}],c={toc:u};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Auction House is a program that allows users to exchange assets within the Solana blockchain. "),(0,i.kt)("p",null,"There are plenty of ways to exchange assets on Solana, so why another program focused on solving this problem? Let's dive deep into that."),(0,i.kt)("p",null,"The ethos of this program is to allow anyone to create and configure their own marketplace and even provide their own custom logic on how assets should be exchanged. The motivation behind the Auction House protocol is to create a healthy ecosystem of marketplaces that focus on different use-cases, and more importantly, each bringing their own flavor into the way they allow users to trade assets."),(0,i.kt)("p",null,"The most important aspect of the Auction House program is that it provides ownership of assets to the user."),(0,i.kt)("p",null,"Traditionally, as soon as the user lists an asset on a marketplace, the asset is moved from the user's wallet into a wallet known as the ",(0,i.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/e/escrow.asp"},"Escrow")," wallet owned by the marketplace and is kept or ",(0,i.kt)("strong",{parentName:"p"},"escrowed")," there until the asset is delisted or sold. This poses some concerns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user can not list the same asset on multiple marketplaces"),(0,i.kt)("li",{parentName:"ul"},"The user has to rely on the marketplaces\u2019 escrow contracts to safely hold their asset.")),(0,i.kt)("p",null,"This is where Auction House shows its power. Its a transaction protocol that allows marketplaces to implement an ",(0,i.kt)("strong",{parentName:"p"},"escrow-less")," sales contract, thus providing ownership of assets to the users."),(0,i.kt)("h2",{id:"creating-an-auction-house"},"Creating an Auction House"),(0,i.kt)("p",null,"The Auction House program can be used to create a new marketplace by instantiating a new ",(0,i.kt)("strong",{parentName:"p"},"Auction House")," account. The Auction House account is a ",(0,i.kt)("a",{parentName:"p",href:"/programs/understanding-programs#program-derived-addresses-pda"},"Program Derived Address (PDA)")," which is derived from a given public key and, optionally, an SPL Token to use a currency (more on that below)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://i.imgur.com/2HPpM9g.png#radius",style:{maxWidth:"400px"}})),(0,i.kt)("p",null,"The account can be configured in whichever way the user wants. We'll talk ",(0,i.kt)("a",{parentName:"p",href:"/programs/auction-house/auction-house-settings"},"more about these configurations in a dedicated page")," but here are some interesting configurable parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requireSignOff"),": this allows marketplaces to gate which assets can be listed and which bids can be placed. On every relevant instruction, the Auction House ",(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/staking/stake-accounts#understanding-account-authorities"},"authority")," needs to sign the transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canChangeSalePrice"),": this parameter is only intended to be used on Auction Houses with ",(0,i.kt)("inlineCode",{parentName:"li"},"requireSignOff")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". This allows the Auction House to perform custom order matching to find the best price for the seller."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sellerFeeBasisPoints"),": this represents the share the marketplace takes on all trades. For instance, if this is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"200"),", i.e. 2%, then the marketplace takes 2% of every single trade that happens on their platform.\n")),(0,i.kt)("h2",{id:"listing-and-bidding"},"Listing and Bidding"),(0,i.kt)("p",null,"Once we have an active Auction House, users can start listing assets and bidding on assets on the marketplace."),(0,i.kt)("h3",{id:"listing"},"Listing"),(0,i.kt)("p",null,"When a user lists an asset, the Auction House does two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Auction House creates a ",(0,i.kt)("strong",{parentName:"li"},"Sell Order"),": in other words, creates a PDA known as the ",(0,i.kt)("inlineCode",{parentName:"li"},"SellerTradeState")," which represents the listing of the asset. Trade States are special PDAs that are very cheap in comparison to other PDAs / Accounts. This is because these PDAs only store 1 byte of data, which is the ",(0,i.kt)("a",{parentName:"li",href:"https://solanacookbook.com/core-concepts/pdas.html#generating-pdas"},"bump"),' of the PDA. All other information related to listings such as list price, amount of tokens, mint account etc, are hashed into the seeds of the PDA, instead of storing them inside the PDA itself, and therefore the PDA acts as a "proof of existence" for that listing, while being extremely cost efficient.')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ki27Ds8.png#radius",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Auction House also assigns another PDA: ",(0,i.kt)("inlineCode",{parentName:"li"},"programAsSigner")," PDA as the ",(0,i.kt)("strong",{parentName:"li"},"Delegate"),". Delegates are a feature of the Solana SPL-token program and are discussed in detail ",(0,i.kt)("a",{parentName:"li",href:"https://spl.solana.com/token#authority-delegation"},"here"),". Delegation allows the Auction House to pull assets out of a token account when a sale goes through at a later point. This way, the asset need not be escrowed and can stay in the user's wallet up until the sale goes through.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/aIRl7Hb.png#radius",alt:null})),(0,i.kt)("h3",{id:"bidding"},"Bidding"),(0,i.kt)("p",null,"Similar to the case of listing, when a user places a bid, the Auction House creates a ",(0,i.kt)("strong",{parentName:"p"},"Buy Order"),". In other words, it creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"BuyerTradeState")," PDA representing the bid. The bid amount (native or SPL tokens) needs to be transferred manually by the marketplace to the ",(0,i.kt)("inlineCode",{parentName:"p"},"BuyerEscrowAccount")," PDA, which holds this amount till the sale goes through."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Alice lists an asset A for 5 SOL. In doing so, the Auction House creates the ",(0,i.kt)("inlineCode",{parentName:"li"},"SellerTradeState")," PDA representing the bid. The Auction House also assigns the ",(0,i.kt)("inlineCode",{parentName:"li"},"programAsSigner")," PDA as the ",(0,i.kt)("strong",{parentName:"li"},"Delegate"),", hence giving it the ",(0,i.kt)("strong",{parentName:"li"},"Authority")," to pull the asset from Alice's wallet when the sale goes through."),(0,i.kt)("li",{parentName:"ul"},"Bob places a bid of 5 SOL on asset A. In doing so, the marketplace pulls 5 SOL from Bob's wallet to the ",(0,i.kt)("inlineCode",{parentName:"li"},"BuyerEscrowAccount")," PDA. This amount will stay here up until the sale goes through."))),(0,i.kt)("h2",{id:"executing-a-sale"},"Executing a Sale"),(0,i.kt)("p",null,"Once we have a listing and at least one bid placed for a given asset, a trade can be completed by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeSale")," instruction. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"executeSale")," instruction is a permission-less crank: in other words, can be executed by anyone without any fee or reward. On the execution of the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeSale")," instruction, two things happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Auction House pulls the bid amount stored in the ",(0,i.kt)("inlineCode",{parentName:"li"},"BuyerEscrowAccount")," and transfers this amount to the lister (minus Auction House fees). "),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"programAsSigner")," PDA, which the Auction House assigned as the ",(0,i.kt)("strong",{parentName:"li"},"Delegate"),", pulls the asset from the lister's wallet (more specifically, from the Token Account in the lister's wallet), and transfers the asset into the bidder's wallet, thus completing the trade.\n",(0,i.kt)("img",{parentName:"li",src:"https://i.imgur.com/gpAX63m.png#radius",alt:null}))),(0,i.kt)("p",null,"Now that we know how the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeSale")," instruction works, let's discuss the three trade scenarios in which the ",(0,i.kt)("inlineCode",{parentName:"p"},"executeSale")," instruction is executed in different ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},'"Buying" at list price'),": This is the case when a user places a bid for a listed asset, at the listed amount itself. In such cases, the ",(0,i.kt)("inlineCode",{parentName:"li"},"bid")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"executeSale"),' instructions are executed in the same transaction, and thus the bidder effectively "buys" the asset.')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Alice lists an asset A for 5 SOL. This creates a ",(0,i.kt)("strong",{parentName:"li"},"Sell Order")," for asset A."),(0,i.kt)("li",{parentName:"ul"},"Bob notices the listing and places a bid of 5 SOL for the asset A. This creates a ",(0,i.kt)("strong",{parentName:"li"},"Buy Order")," for asset A."),(0,i.kt)("li",{parentName:"ul"},'This enables the marketplace to place a bid on the asset and execute the sale in the same transaction, in practice allowing Bob to "buy" asset A.'))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},'"Selling" at bid price'),": This is the case when a user, interested in an unlisted asset, places a bid on it. If the asset owner now lists the asset for the bid amount, the ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"executeSale"),' instructions are executed in the same instruction, and thus the lister effectively "sells" the asset at the requested price.')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Bob places a bid of 5 SOL for an unlisted asset A. This creates a ",(0,i.kt)("strong",{parentName:"li"},"Buy Order")," for asset A."),(0,i.kt)("li",{parentName:"ul"},"Alice notices the bid and lists the asset A for 5 SOL. This creates a ",(0,i.kt)("strong",{parentName:"li"},"Sell Order")," for asset A. "),(0,i.kt)("li",{parentName:"ul"},'This enables the marketplace to list the asset and execute the sale in the same transaction, in practice allowing Alice to "sell" asset A.'))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Lister agreeing to a bid"),": This is the case when the ",(0,i.kt)("inlineCode",{parentName:"li"},"executeSale")," instruction is executed independently, after a ",(0,i.kt)("strong",{parentName:"li"},"Buy Order")," and a ",(0,i.kt)("strong",{parentName:"li"},"Sell Order")," exist for a given asset.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Alice lists an asset A for 5 SOL. This creates a ",(0,i.kt)("strong",{parentName:"li"},"Sell Order")," for asset A."),(0,i.kt)("li",{parentName:"ul"},"Bob places a bid of 5 SOL for asset A, unaware of Alice's listing. This creates a ",(0,i.kt)("strong",{parentName:"li"},"Buy Order")," for asset A."),(0,i.kt)("li",{parentName:"ul"},"Alice notices the matching bid and executes the sale."))),(0,i.kt)("h2",{id:"auctioning-fungible-assets"},"Auctioning Fungible Assets"),(0,i.kt)("p",null,"So far, we've talked about exchanging assets using an Auction House account, but we've not dug into what type of assets can be exchanged that way. The most popular assets that can be listed in an Auction House are ",(0,i.kt)("a",{parentName:"p",href:"/resources/definitions#non-fungible-tokens"},"Non-Fungible Tokens (NFTs)"),"."),(0,i.kt)("p",null,"However, these are not the only assets that can benefit from the Auction House program. In fact, an asset can be any SPL Token so long as it has a Metadata account attached to its Mint account. If you'd like to know more about SPL Token and Metadata accounts, you can ",(0,i.kt)("a",{parentName:"p",href:"/programs/token-metadata/overview"},"read more about this in the overview of our Token Metadata program"),"."),(0,i.kt)("h2",{id:"buying-asset-using-a-custom-spl-token"},"Buying asset using a custom SPL Token"),(0,i.kt)("p",null,"In the examples showcased above, we've used SOL as the exchange currency to discuss how the Auction House program works. But SOL is not the only currency that can be configured for exchanging assets. The Auction House program allows marketplaces to configure any SPL-token to act as their currency."),(0,i.kt)("p",null,"This can be achieved by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"treasuryMint")," parameter in the Auction House account to the mint account of the SPL-token of your liking."),(0,i.kt)("h2",{id:"custom-order-matching"},"Custom Order Matching"),(0,i.kt)("p",null,"When we were discussing Trade States, there was a third Trade State which was shown in the Trade State diagram: the ",(0,i.kt)("inlineCode",{parentName:"p"},"FreeSellerTradeState"),". What's the utility of this Trade State?"),(0,i.kt)("p",null,"During the introduction to the Auction House program, we briefly discussed how Auction House can be used by marketplaces to provide their own custom logic on how assets should be exchanged. This is where the ",(0,i.kt)("inlineCode",{parentName:"p"},"FreeSellerTradeState")," comes in."),(0,i.kt)("p",null,"When a buyer intentionally lists their asset for a price of 0 SOL / SPL-tokens, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FreeSellerTradeState")," is generated. The Auction House can then change the sale price to match a matching bid that is greater than 0. This allows the Auction House to do complicated order matching to find the best price for the seller and the marketplaces can write their own custom logic to do this order matching."),(0,i.kt)("h2",{id:"auctioneer"},"Auctioneer"),(0,i.kt)("p",null,"All of the auctions we've seen so far have one thing in common. They are, what we call, ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.cornell.edu/info2040/2021/11/29/four-common-types-of-auctions/#:~:text=sealed%2Dbid%20auction.-,DOUBLE%20AUCTION,-Both%20buyers%20and"},(0,i.kt)("strong",{parentName:"a"},"Double Auctions")),". That is, they are un-timed auctions where buyers and sellers, bid and list until they find a common ground.\nHowever, there are several other forms of auctions such as English auctions and Dutch auctions which have become popular in the Solana ecosystem.\nThe Auction House implementation is purposefully designed with instant sales in mind and does not offer other auction types out-of-the-box."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Auctioneer")," is a customized contract type, written by the user, that uses the composability pattern of Auction House to control an individual Auction House account."),(0,i.kt)("p",null,"To enable an Auctioneer instance on an Auction House, it must first be explicitly delegated. This Auctioneer instance will then be able to intercept most of the Auction House instructions in order to inject its own custom logic. Metaplex also provides some Auctioneer implementations like Timed Auctions. We will talk about this in greater detail in later pages of this documentation."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/RyZUfR9.png#radius",alt:null})),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"On this page, we have gone through the very basics of the Auction House protocol and the power it possesses. There is a lot more that the Auction House is capable of."),(0,i.kt)("p",null,"We'll start by listing various libraries that can be used to get started with this program:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/getting-started"},"Getting Started"))),(0,i.kt)("p",null,"We will proceed to dive deeper into the Auction House settings and how to manage Auction House instances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/auction-house-settings"},"Auction House Settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/managing-auction-house"},"Managing Auction Houses"))),(0,i.kt)("p",null,"Once we understand the basics of Auction House, we can begin to learn how to trade assets on Auction House powered marketplaces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/trading-assets-on-auction-house"},"Trading assets on Auction House")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/managing-buyer-account"},"Managing Buyer Account"))),(0,i.kt)("p",null,"We will also explore how to track listings, bids and sales on Auction Houses and how to fetch them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/auction-house-receipts"},"Printing Receipts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/auction-house/finding-bids-listings-and-sales"},"Finding bids, listings and purchases"))),(0,i.kt)("h2",{id:"additional-reading-material"},"Additional Reading Material"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prof Lupin's Auction House guide: ",(0,i.kt)("a",{parentName:"li",href:"https://proflupin.xyz/metaplex-auction-house"},"https://proflupin.xyz/metaplex-auction-house")),(0,i.kt)("li",{parentName:"ul"},"Jordan's twitter thread: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/redacted_j/status/1453926144248623104"},"https://twitter.com/redacted_j/status/1453926144248623104")),(0,i.kt)("li",{parentName:"ul"},"Armani's twitter thread: ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/armaniferrante/status/1460760940454965248"},"https://twitter.com/armaniferrante/status/1460760940454965248"))))}h.isMDXComponent=!0}}]);