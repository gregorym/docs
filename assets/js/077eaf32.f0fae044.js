"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9009],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=(n(67294),n(3905));const a={},o="Configuration",l={unversionedId:"developer-tools/sugar/guides/configuration",id:"developer-tools/sugar/guides/configuration",title:"Configuration",description:"Most users should use the create-config command to create the config file as that will ensure the generation of a valid config file and is easier to use for non-technical users.",source:"@site/docs/03-developer-tools/00-sugar/03-guides/03-configuration.md",sourceDirName:"03-developer-tools/00-sugar/03-guides",slug:"/developer-tools/sugar/guides/configuration",permalink:"/developer-tools/sugar/guides/configuration",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/03-guides/03-configuration.md",tags:[],version:"current",lastUpdatedAt:1670576502,formattedLastUpdatedAt:"Dec 9, 2022",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Working with Sugar",permalink:"/developer-tools/sugar/guides/working-with-sugar"},next:{title:"Sugar for Candy Machine V3",permalink:"/developer-tools/sugar/guides/sugar-for-cmv3"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Most users should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"create-config")," command to create the config file as that will ensure the generation of a valid config file and is easier to use for non-technical users.")),(0,i.kt)("p",null,"Sugar uses a JSON configuration file to deploy and interact with a Candy Machine. The configuration file is largely similar to the ",(0,i.kt)("a",{parentName:"p",href:"/deprecated/candy-machine-js-cli/configuration"},"previous Candy Machine v2 configuration file"),", but there are important differences."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"../reference/configuration"},"configuration reference page")," for list of configuration options and their descriptions."),(0,i.kt)("p",null,"A minimum configuration file looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "price": 1.0,\n  "number": 10,\n  "symbol": "SR",\n  "sellerFeeBasisPoints": 500,\n  "creators": [\n    {\n      "address": "<CREATOR 1 WALLET ADDRESS>",\n      "share": 50\n    },\n    {\n      "address": "<CREATOR n WALLET ADDRESS>",\n      "share": 50\n    }\n  ],\n  "gatekeeper": null,\n  "solTreasuryAccount": "<TREASURY WALLET ADDRESS>",\n  "splTokenAccount": null,\n  "splToken": null,\n  "goLiveDate": "2022-04-22T00:00:00Z",\n  "endSettings": null,\n  "whitelistMintSettings": null,\n  "hiddenSettings": null,\n  "uploadMethod": "bundlr",\n  "awsS3Bucket": null,\n  "nftStorageAuthToken": null,\n  "shdwStorageAccount": null,\n  "retainAuthority": true,\n  "isMutable": true\n}\n')),(0,i.kt)("p",null,"The main differences with the previous configuration file are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"goLiveDate"),": this needs to be specified using ",(0,i.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc3339"},"RFC 3339 standard"),'. In most cases, the format used will be "yyyy-mm-dd',(0,i.kt)("inlineCode",{parentName:"li"},"T"),"hh:mm:ss",(0,i.kt)("inlineCode",{parentName:"li"},"Z"),'", where ',(0,i.kt)("inlineCode",{parentName:"li"},"T")," is the separator between the ",(0,i.kt)("em",{parentName:"li"},"full-date")," and ",(0,i.kt)("em",{parentName:"li"},"full-time")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Z")," is the timezone offset from UTC (use ",(0,i.kt)("inlineCode",{parentName:"li"},"Z")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"+00:00")," for UTC time);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"retainAuthority"),": this is similar to the previous ",(0,i.kt)("em",{parentName:"li"},"noRetainAuthority")," property, but provides a clearer meaning","\u2014","you should specify ",(0,i.kt)("strong",{parentName:"li"},"true")," to indicate that the candy machine retains the update authority for each mint (most common case) or ",(0,i.kt)("strong",{parentName:"li"},"false")," to transfer the authority to the minter;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"isMutable"),": this is similar to the previous ",(0,i.kt)("em",{parentName:"li"},"noMutable")," property, but provides a clearer meaning","\u2014","you should specify ",(0,i.kt)("strong",{parentName:"li"},"true")," to indicate that the metadata is mutable (most common case) or ",(0,i.kt)("strong",{parentName:"li"},"false")," to prevent updates to the metadata;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"creators"),": specifies the list of creators and their percentage share of the royalties","\u2014"," at least one creator must be specified (up to a maximum of four) and the sum of shares must add up to ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),". This information used to be located on each metadata file, but has been deprecated since Token Metadata Standard v1.1.0 and therefore needs to be specified in the configuration file. The list of creators will be the same as all NFTs minted from the Candy Machine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"whitelistMintSettings"),": the configuration for ",(0,i.kt)("inlineCode",{parentName:"li"},'"mode"')," has been simplified. There are now two valid values for ",(0,i.kt)("inlineCode",{parentName:"li"},'"mode"'),": ",(0,i.kt)("inlineCode",{parentName:"li"},'"burnEveryTime"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"neverBurn"')," ","\u2014"," no need to specify the option followed by a boolean value, e.g.:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n   "mode": "burnEveryTime",\n   "mint": "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n   "presale": true,\n   "discountPrice": null\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"endSettings"),": the configuration has been simplified. The ",(0,i.kt)("inlineCode",{parentName:"li"},'"endSettingsType"')," is now specified as either ",(0,i.kt)("inlineCode",{parentName:"li"},'"Date"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"Amount"'),"; the value is now specified with a property ",(0,i.kt)("inlineCode",{parentName:"li"},'"number"')," - e.g.:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"endSettings": {\n  "endSettingType": "Amount",\n  "number": 10\n}\n')))))}p.isMDXComponent=!0}}]);