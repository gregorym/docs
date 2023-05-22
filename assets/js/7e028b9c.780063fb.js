"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5322],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=o,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(f,i(i({ref:t},h),{},{components:a})):n.createElement(f,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},93395:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var n=a(83117),o=(a(67294),a(3905));const r={},i="FAQ",s={unversionedId:"programs/token-metadata/faq",id:"programs/token-metadata/faq",title:"FAQ",description:"How can I filter Metadata accounts by fields located after the creators array using getProgramAccounts?",source:"@site/docs/01-programs/01-token-metadata/08-faq.md",sourceDirName:"01-programs/01-token-metadata",slug:"/programs/token-metadata/faq",permalink:"/programs/token-metadata/faq",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/08-faq.md",tags:[],version:"current",lastUpdatedAt:1684748119,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:8,frontMatter:{},sidebar:"sidebar",previous:{title:"v1.0",permalink:"/programs/token-metadata/changelog/v1.0"},next:{title:"Candy Machine",permalink:"/programs/candy-machine/"}},c={},l=[{value:"How can I filter Metadata accounts by fields located after the <code>creators</code> array using <code>getProgramAccounts</code>?",id:"how-can-i-filter-metadata-accounts-by-fields-located-after-the-creators-array-using-getprogramaccounts",level:3},{value:"How can I filter Metadata accounts by collection using <code>getProgramAccounts</code>?",id:"how-can-i-filter-metadata-accounts-by-collection-using-getprogramaccounts",level:3},{value:"Why are the mint and freeze authorities transferred to the Edition PDA?",id:"why-are-the-mint-and-freeze-authorities-transferred-to-the-edition-pda",level:3},{value:"Mint Authority",id:"mint-authority",level:4},{value:"Freeze Authority",id:"freeze-authority",level:4},{value:"Why does the Metadata account have both on-chain and off-chain data?",id:"why-does-the-metadata-account-have-both-on-chain-and-off-chain-data",level:3}],h={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-can-i-filter-metadata-accounts-by-fields-located-after-the-creators-array-using-getprogramaccounts"},"How can I filter Metadata accounts by fields located after the ",(0,o.kt)("inlineCode",{parentName:"h3"},"creators")," array using ",(0,o.kt)("inlineCode",{parentName:"h3"},"getProgramAccounts"),"?"),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getprogramaccounts"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"getProgramAccounts")," method from the RPC API"),", it is common to want to filter accounts by fields using ",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp")," filters."),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"memcmp")," filter compares arrays of bytes, this approach requires knowledge of the data structure of the account. Additionally, it requires the length of that data structure to be fixed, so we can find the position of the field we're looking for, for every single account."),(0,o.kt)("p",null,"Unfortunately, the ",(0,o.kt)("inlineCode",{parentName:"p"},"creators")," field of the ",(0,o.kt)("a",{parentName:"p",href:"./accounts#metadata"},"Metadata Account")," is a vector that can contain one to five creators. This means the position of every field after it depends on how many creators the account has."),(0,o.kt)("p",null,"Note that adding new fields to an account without adding breaking change requires appending optional fields to the accounts. This unfortunately means that any new features we may add to the Metadata Account will be after the ",(0,o.kt)("inlineCode",{parentName:"p"},"creators")," field and therefore will be challenging to filter via ",(0,o.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"."),(0,o.kt)("p",null,"There are several ways to solve this problem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If every single account we are trying to filter has ",(0,o.kt)("strong",{parentName:"li"},"the same number of creators"),", then we can figure out the offset of the next field. We can do this by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"4 + 34 * n")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"creators")," offset, where ",(0,o.kt)("inlineCode",{parentName:"li"},"n")," is the fixed number of creators and ",(0,o.kt)("inlineCode",{parentName:"li"},"4")," is because 4 bytes are used to store the length of the vector. This unblocks us for every field of fixed length present after the ",(0,o.kt)("inlineCode",{parentName:"li"},"creators")," field. Unfortunately, the problem reoccurs as soon as we reach another field of variable size such as another vector or an optional field. Therefore, this solution is only valid if we know the exact length of all variable fields before the field we are trying to filter with."),(0,o.kt)("li",{parentName:"ul"},"Another solution is to ",(0,o.kt)("strong",{parentName:"li"},"crawl transactions to find the accounts we're looking for"),". This approach is a bit more complex and requires us to implement a custom procedure that fits our needs. For instance, we can use ",(0,o.kt)("inlineCode",{parentName:"li"},"getSignaturesForAddress")," to get all transactions associated with an account and then use ",(0,o.kt)("inlineCode",{parentName:"li"},"getTransaction")," on each of them to access their transaction data before filtering the ones that matter for our use case. It is also worth considering that this approach might not be the most future-proof solution since we might end up relying on instructions that could be deprecated in favor of new ones."),(0,o.kt)("li",{parentName:"ul"},"Finally, ",(0,o.kt)("strong",{parentName:"li"},"the most robust solution is to index the data we're looking for using a ",(0,o.kt)("a",{parentName:"strong",href:"https://docs.solana.com/developing/plugins/geyser-plugins"},"Geyser Plugin")),". This currently requires a significant setup, but we end up with a reliable data store that mirrors the data in the Solana blockchain. Not only does it fix our filtering issue, but it also provides a much more convenient and efficient way to access our data.")),(0,o.kt)("h3",{id:"how-can-i-filter-metadata-accounts-by-collection-using-getprogramaccounts"},"How can I filter Metadata accounts by collection using ",(0,o.kt)("inlineCode",{parentName:"h3"},"getProgramAccounts"),"?"),(0,o.kt)("p",null,"As mentioned in the question above, filtering by fields present after the ",(0,o.kt)("inlineCode",{parentName:"p"},"creators")," array is a challenging task because it is not a field of fixed size."),(0,o.kt)("p",null,"Since ",(0,o.kt)("strong",{parentName:"p"},"the ",(0,o.kt)("inlineCode",{parentName:"strong"},"collection")," field is located after the ",(0,o.kt)("inlineCode",{parentName:"strong"},"creators")," field"),", this makes filtering ",(0,o.kt)("a",{parentName:"p",href:"./accounts#metadata"},"Metadata accounts")," by collection somewhat difficult."),(0,o.kt)("p",null,"The solutions listed above apply here too but, because this is a common problem, we have written a more detailed guide on how to use transaction crawling to access Metadata accounts of a given collection: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://metaplex.notion.site/Get-Collection-Methods-1ff0b118e4ce4605971df60e753a8559"},"Get Collection Methods")),"."),(0,o.kt)("h3",{id:"why-are-the-mint-and-freeze-authorities-transferred-to-the-edition-pda"},"Why are the mint and freeze authorities transferred to the Edition PDA?"),(0,o.kt)("p",null,"One question we often receive is: Why does the Token Metadata program transfer the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint Authority")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Freeze Authority")," of the Mint Account to the Edition PDA when creating NFTs? Why not just void them by setting them to ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"?"),(0,o.kt)("p",null,"Let's take a look at why this is the case for both of these authorities separately."),(0,o.kt)("h4",{id:"mint-authority"},"Mint Authority"),(0,o.kt)("p",null,"Controlling the Mint Authority is a crucial step for ensuring the non-fungibility of a token. Without this protection, someone could mint more tokens for a given NFT and therefore make the NFT fungible."),(0,o.kt)("p",null,"One way to prevent this from happening is to set the Mint Authority to ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," to ensure no one will ever be able to mint any more tokens for that NFT. However, the Token Metadata program sets that authority to the Edition PDA \u2014 which links to a Master Edition account or an Edition account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"But Why?")," The short answer is: ",(0,o.kt)("strong",{parentName:"p"},"it enables us to deploy upgrades to the Token Metadata program at a much lower cost"),"."),(0,o.kt)("p",null,"Losing the Mint Authority is an irreversible action which means we could never leverage it to migrate NFTs to newer versions. For instance, say we want to change the way Original and Printed NFTs are structured and, instead of using Edition accounts, we want to leverage tokens. Without the Mint Authority, migrating NFTs to the new version would simply be impossible."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Losing this authority would limit the scope of features and changes we may want to implement in the future")," and that's why we're not setting it to ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("p",null,"However, that doesn't mean someone can use that Mint Authority to mint more tokens on your NFT. The Mint Authority isn't transferred to someone's public key, it is transferred to a PDA that belongs to the Token Metadata program. Therefore, only an instruction provided by the program could make use of it and such instruction does not exist on the program. It is important to note that the Token Metadata program is completely open-source so anyone can inspect it to ensure the Mint Authority is not used to mint more tokens."),(0,o.kt)("h4",{id:"freeze-authority"},"Freeze Authority"),(0,o.kt)("p",null,"Controlling the Freeze Authority allows someone to freeze a Token account, making that account immutable until it is thawed."),(0,o.kt)("p",null,"One reason this authority is transferred to the Edition PDA of the Token Metadata program is, similarly to the Mint Authority, it increases the scope of potential new features and upgrades."),(0,o.kt)("p",null,"However, contrary to the Mint Authority, we actually make use of that authority in the program."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./instructions#freeze-the-token-account-as-a-delegate"},(0,o.kt)("inlineCode",{parentName:"a"},"FreezeDelegatedAccount"))," and ",(0,o.kt)("a",{parentName:"p",href:"./instructions#thaw-the-token-account-as-a-delegate"},(0,o.kt)("inlineCode",{parentName:"a"},"ThawDelegatedAccount")),' instructions are the only instructions that make use of the Freeze Authority. They allow the Delegate of a Token account to freeze (and thaw) that Token account to make them what we call "',(0,o.kt)("strong",{parentName:"p"},"Non-Transferable NFTs"),'". This enables a variety of use-cases such as preventing someone from selling an NFT while it is listed in an escrowless marketplace.'),(0,o.kt)("h3",{id:"why-does-the-metadata-account-have-both-on-chain-and-off-chain-data"},"Why does the Metadata account have both on-chain and off-chain data?"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./accounts#metadata"},"Metadata account")," contains on-chain data, yet it also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"URI")," attribute which points to an off-chain JSON file which provides additional data. So why is that? Can't we just store everything on-chain? Well, there are several issues with that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have to pay rent to store data on-chain. If we had to store everything within the Metadata account, which may include long texts such as the description of an NFT, it would require a lot more bytes and minting an NFT would suddenly be a lot more expensive."),(0,o.kt)("li",{parentName:"ul"},"On-chain data is much less flexible. Once an account is created using a certain structure, it cannot easily be changed. Therefore, if we had to store everything on-chain, the NFT standard would be a lot harder to evolve with the demands of the ecosystem.")),(0,o.kt)("p",null,"Therefore, splitting the data into on-chain and off-chain data allows us to get the best of both worlds where on-chain data can be used by the program ",(0,o.kt)("strong",{parentName:"p"},"to create guarantees and expectations for its users")," whereas off-chain data can be used ",(0,o.kt)("strong",{parentName:"p"},"to provide standardized yet flexible information"),"."))}u.isMDXComponent=!0}}]);