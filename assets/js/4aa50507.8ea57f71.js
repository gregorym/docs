"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7321],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return c}});var i=n(83117),o=(n(67294),n(3905));const a={description:"All about the on-chain Metaplex Certified Collections spec."},l="Certified Collections",r={unversionedId:"programs/token-metadata/certified-collections",id:"programs/token-metadata/certified-collections",title:"Certified Collections",description:"All about the on-chain Metaplex Certified Collections spec.",source:"@site/docs/01-programs/01-token-metadata/05-certified-collections.md",sourceDirName:"01-programs/01-token-metadata",slug:"/programs/token-metadata/certified-collections",permalink:"/programs/token-metadata/certified-collections",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/05-certified-collections.md",tags:[],version:"current",lastUpdatedAt:1684748119,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:5,frontMatter:{description:"All about the on-chain Metaplex Certified Collections spec."},sidebar:"sidebar",previous:{title:"Token Standard",permalink:"/programs/token-metadata/token-standard"},next:{title:"NFT Escrow",permalink:"/programs/token-metadata/nft-escrow"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Collection NFTs",id:"collection-nfts",level:2},{value:"Linking Regular NFTs to Collection NFTs.",id:"linking-regular-nfts-to-collection-nfts",level:3},{value:"Differentiating Regular NFTs from Collection NFTs.",id:"differentiating-regular-nfts-from-collection-nfts",level:3},{value:"Nested Collections",id:"nested-collections",level:3},{value:"Verifying NFTs in Collections",id:"verifying-nfts-in-collections",level:2},{value:"Delegating the Collection Authority",id:"delegating-the-collection-authority",level:2},{value:"Set and verify a collection using collections.metaplex.com",id:"set-and-verify-a-collection-using-collectionsmetaplexcom",level:2},{value:"Migrating to Sized Collections",id:"migrating-to-sized-collections",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"certified-collections"},"Certified Collections"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Certified Collections enables NFTs \u2013 and tokens in general \u2014 ",(0,o.kt)("strong",{parentName:"p"},"to be grouped together")," and for that information to be ",(0,o.kt)("strong",{parentName:"p"},"verified on-chain"),". Additionally, it makes it easier to manage these collections by allocating data for them on-chain."),(0,o.kt)("p",null,"This feature provides the following advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy to identify which collection any given NFT belongs to without making additional on-chain calls."),(0,o.kt)("li",{parentName:"ul"},"Possible to find all NFTs that belong to a given collection (",(0,o.kt)("a",{parentName:"li",href:"./faq#how-can-i-filter-metadata-accounts-by-collection-using-getprogramaccounts"},"Check the FAQ to see how"),")."),(0,o.kt)("li",{parentName:"ul"},"Easy to manage the collection metadata such as its name, description and image.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The on-chain Certified Collection feature has been added to the Token Metadata program in ",(0,o.kt)("a",{parentName:"p",href:"./changelog/v1.1"},"version 1.1"),". It replaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"collection")," field previously defined in external JSON metadata."),(0,o.kt)("p",{parentName:"admonition"},"The additional CollectionDetails field has been added in ",(0,o.kt)("a",{parentName:"p",href:"./changelog/v1.3"},"version 1.3"),".")),(0,o.kt)("h2",{id:"collection-nfts"},"Collection NFTs"),(0,o.kt)("p",null,"In order to group NFTs \u2014 or any token \u2014 together, we must first create a Collection NFT whose purpose is to store any metadata related to that collection. That's right, ",(0,o.kt)("strong",{parentName:"p"},"a collection of NFT is itself, an NFT"),". It has the same data layout on-chain as any other NFT."),(0,o.kt)("p",null,"The difference between a Collection NFT and a Regular NFT is that the information provided by the former will be used to define the group of NFTs it contains whereas the latter will be used to define the NFT itself."),(0,o.kt)("h3",{id:"linking-regular-nfts-to-collection-nfts"},"Linking Regular NFTs to Collection NFTs."),(0,o.kt)("p",null,"Collection NFTs and Regular NFTs are ",(0,o.kt)("strong",{parentName:"p"},'linked together using a "Belong To" relationship')," on the Metadata account. The optional ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," field on the Metadata account has been created for that purpose."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"Collection")," field is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),", it means the NFT is not part of a collection."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"Collection")," field is set, it means the NFT is part of the collection specified within that field.")),(0,o.kt)("p",null,"As such, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," field contains two nested fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Key"),": This field points to the Collection NFT the NFT belongs to. More precisely, it points to ",(0,o.kt)("strong",{parentName:"li"},"the public key of the Mint Account")," of the Collection NFT. This Mint Account must be owned by the SPL Token program."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Verified"),": This boolean is very important as it is used to verify that the NFT is truly part of the collection it points to. More on that below.")),(0,o.kt)("h3",{id:"differentiating-regular-nfts-from-collection-nfts"},"Differentiating Regular NFTs from Collection NFTs."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," field alone allows us to link NFTs and Collections together but it doesn't help us identify if a given NFT is a Regular NFT or a Collection NFT. That's why the ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionDetails")," field was created. It provides additional context on Collection NFTs and differentiate them from Regular NFTs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"CollectionDetails")," field is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),", it means the NFT is a ",(0,o.kt)("strong",{parentName:"li"},"Regular NFT"),"."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"CollectionDetails")," field is set, it means the NFT is a ",(0,o.kt)("strong",{parentName:"li"},"Collection NFT")," and additional attributes can be found inside this field.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionDetails")," is an optional enum which currently contains only one option ",(0,o.kt)("inlineCode",{parentName:"p"},"V1"),". This option is a struct that contains the following field:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Size"),": The size of the collection, i.e. the number of NFTs that are directly linked to this Collection NFT. This number is automatically computed by the Token Metadata program but can also be set manually to facilitate the migration process.")),(0,o.kt)("p",null,"Note that, because ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionDetails")," is a new field, not all existing collections will use it yet. This means, ",(0,o.kt)("strong",{parentName:"p"},"it is possible for a Collection NFT created before version 1.3, to have ",(0,o.kt)("inlineCode",{parentName:"strong"},"CollectionDetails")," set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"None")," but to still be a Collection NFT"),"."),(0,o.kt)("p",null,"That being said, we encourage new collections to use it both to allow sizing their collections and provide an on-chain way to determine a Collection NFT from a Regular one. We also encourage existing collections to ",(0,o.kt)("a",{parentName:"p",href:"#migrating-to-sized-collections"},"migrate their Collection NFT"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3330).Z+"#radius",width:"3000",height:"1752"})),(0,o.kt)("h3",{id:"nested-collections"},"Nested Collections"),(0,o.kt)("p",null,'Because Collections and NFTs are linked together via a "Belong To" relationship, it is possible by design to define nested collections. In this scenario, the ',(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionDetails")," fields can be used together to differentiate Root and Nested Collection NFTs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(73609).Z,width:"3000",height:"1800"})),(0,o.kt)("h2",{id:"verifying-nfts-in-collections"},"Verifying NFTs in Collections"),(0,o.kt)("p",null,"As mentioned above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," field contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified")," boolean which is used to ",(0,o.kt)("strong",{parentName:"p"},"determine if the NFT is truly part of the collection it points to"),". Without this field, anyone could pretend their NFT to be part of any collection."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(17122).Z+"#radius",width:"3000",height:"1800"})),(0,o.kt)("p",null,"In order to flip that ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified")," boolean to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", the Authority of the Collection NFT must sign the NFT to prove that it is allowed to be part of the collection."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"EXTREMELY IMPORTANT")," \ud83d\udea8"),(0,o.kt)("p",{parentName:"admonition"},"Explorers, Wallets and Marketplaces, ",(0,o.kt)("strong",{parentName:"p"},"MUST CHECK")," that ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified")," is true. ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified")," can only be set true if the Authority on the Collection NFT has run one of the Token Metadata ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyCollection")," instructions over the NFT."),(0,o.kt)("p",{parentName:"admonition"},"This is the same pattern as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Creators")," field where ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified")," must be true to validate the NFT."),(0,o.kt)("p",{parentName:"admonition"},"In Order to check if a collection is valid on an NFT, it ",(0,o.kt)("strong",{parentName:"p"},"MUST")," have a collection struct set with:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," field matching the mint address of the appropriate collection parent"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"verified")," field set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"))),(0,o.kt)("p",{parentName:"admonition"},"If those two steps are not followed you could be exposing fraudulent NFTs on real collections.")),(0,o.kt)("p",null,"The following instructions are available to set, verify or unverify an NFT as part of a sized collection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#verify-a-sized-collection-item"},"Verify a sized collection item")," (Introduced in version 1.3)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#unverify-a-sized-collection-item"},"Unverify a sized collection item")," (Introduced in version 1.3)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#set-and-verify-a-sized-collection-item"},"Set and verify a sized collection item")," (Introduced in version 1.3)")),(0,o.kt)("p",null,"If your Collection NFT does not yet have its ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionDetails")," field setup, you must use the following instructions instead:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#verify-a-collection-item"},"Verify a collection item")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#unverify-a-collection-item"},"Unverify a collection item")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#set-and-verify-a-collection-item"},"Set and verify a collection item")," (Introduced in version 1.2)")),(0,o.kt)("p",null,"You may consider ",(0,o.kt)("a",{parentName:"p",href:"#migrating-to-sized-collections"},"migrating your Collection NFT")," instead."),(0,o.kt)("h2",{id:"delegating-the-collection-authority"},"Delegating the Collection Authority"),(0,o.kt)("p",null,"By default, only ",(0,o.kt)("strong",{parentName:"p"},"the Update Authority of the Collection NFT can verify")," that an NFT is part of that collection."),(0,o.kt)("p",null,"However, the Update Authority can also ",(0,o.kt)("strong",{parentName:"p"},"delegate this responsibility")," to other authorities. This allows us to delegate the ability to add NFTs to our collection to one or several trusted parties. These delegated Collection Authorities can then set, verify and/or unverify NFTs from this collection using the instructions listed in the previous section."),(0,o.kt)("p",null,"The following instructions enable us to approve and reject a Collection Authority:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#approve-a-new-collection-authority"},"Approve a new Collection Authority")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#revoke-an-existing-collection-authority"},"Revoke an existing Collection Authority"))),(0,o.kt)("h2",{id:"set-and-verify-a-collection-using-collectionsmetaplexcom"},"Set and verify a collection using collections.metaplex.com"),(0,o.kt)("p",null,"Metaplex provides a helpful ",(0,o.kt)("a",{parentName:"p",href:"https://collections.metaplex.com/"},"web tool")," that allows us to create Collection NFTs and add verified NFTs to them."),(0,o.kt)("p",null,"You may use the following step to get started with that tool:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://collections.metaplex.com/"},"collections.metaplex.com")),(0,o.kt)("li",{parentName:"ol"},"Connect your wallet, but first, verify this wallet is the Update Authority."),(0,o.kt)("li",{parentName:"ol"},"Select the cluster you want to work on \u2014 e.g. devnet, mainnet, etc."),(0,o.kt)("li",{parentName:"ol"},'Click on "',(0,o.kt)("strong",{parentName:"li"},"Create a Collection"),'".'),(0,o.kt)("li",{parentName:"ol"},"Enter the name, symbol, logo, and description of your Collection NFT."),(0,o.kt)("li",{parentName:"ol"},"Choose between these three options:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Individual NFTs"),": Insert the mint address of your NFTs."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"First verified creator"),": Insert the public key of the first creator defined in your NFTs. This can help with Candy Machines as the first creator address is derived from their public key."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"CSV file"),": Upload a CSV file that contains the list of mint addresses. The CSV file should contain all the public keys, separated by commas with no spaces."))),(0,o.kt)("li",{parentName:"ol"},'Click "',(0,o.kt)("strong",{parentName:"li"},"Create Collection"),'" and two transaction approvals will be required.',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The first transaction approval will allow Metaplex to be the delegate to make the migration."),(0,o.kt)("li",{parentName:"ol"},"The second transaction will create the parent Collection NFT."))),(0,o.kt)("li",{parentName:"ol"},"After the parent Collection NFT is created, ",(0,o.kt)("strong",{parentName:"li"},"the migration will start")," in the background. You may close the tab and come back to it later with the same wallet to see the status.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"For a smoother experience, please consider the following points when using this tool:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Always check Solana's network before you start up a migration. You can check here ",(0,o.kt)("a",{parentName:"li",href:"https://solscan.io"},"https://solscan.io"),"."),(0,o.kt)("li",{parentName:"ul"},'If a "Retry" button appears it could be due to network congestion, so click retry and monitor the network.'),(0,o.kt)("li",{parentName:"ul"},'If a "Fail to Migrate Collection" appears, it is likely because a wrong Update Authority was provided.')),(0,o.kt)("p",{parentName:"admonition"},"For all other issues regarding this tool, please visit our discord for further support.")),(0,o.kt)("p",null,"Note that the Metaplex team has recorded a video tutorial on how Verified Collections work and how to use the web tool mentioned above. You can ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing"},"watch it here"),":"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing"},(0,o.kt)("img",{alt:"Verified Collections Tutorial",src:n(70523).Z+"#radius#shadow",width:"600",height:"338"})))),(0,o.kt)("h2",{id:"migrating-to-sized-collections"},"Migrating to Sized Collections"),(0,o.kt)("p",null,"If your Collection NFT was created before version 1.3, its ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionDetails")," field will not be set. That means, wallets and applications will not be able to differentiate it with Regular NFTs and we won't know how many items are attached to the Collection NFT."),(0,o.kt)("p",null,"In order to facilitate the migration of your Collection NFT to a Sized Collection NFT, there is a new instruction available: ",(0,o.kt)("a",{parentName:"p",href:"./instructions#set-collection-size"},"Set a collection size"),". This instruction allows you to set the number of items that are currently attached to the Collection NFT ",(0,o.kt)("strong",{parentName:"p"},"once"),". Afterwards, this information will only be tracked on-chain."))}p.isMDXComponent=!0},3330:function(e,t,n){t.Z=n.p+"assets/images/Token-Metadata-Collections-Collection-NFT-8fb61d80a0fdd5aa2bf94cb4ece77805.png"},73609:function(e,t,n){t.Z=n.p+"assets/images/Token-Metadata-Collections-Nested-Collection-6e746af26d7ada43d42ec59e74bc1bce.png"},17122:function(e,t,n){t.Z=n.p+"assets/images/Token-Metadata-Collections-Verified-Collection-cc4e94da485fb9620203d599d31bab64.png"},70523:function(e,t,n){t.Z=n.p+"assets/images/verified-collections-06e572f2f046615c89e5c5c52a3a7375.gif"}}]);