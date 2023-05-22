"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3206],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_label:"3. Create Mint Website"},o="Create Mint Website",c={unversionedId:"deprecated/candy-machine-v1/create-mint-site",id:"deprecated/candy-machine-v1/create-mint-site",title:"Create Mint Website",description:"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use Sugar: Candy Machine CLI instead.",source:"@site/docs/06-deprecated/01-candy-machine-v1/02-create-mint-site.md",sourceDirName:"06-deprecated/01-candy-machine-v1",slug:"/deprecated/candy-machine-v1/create-mint-site",permalink:"/deprecated/candy-machine-v1/create-mint-site",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/01-candy-machine-v1/02-create-mint-site.md",tags:[],version:"current",lastUpdatedAt:1684748119,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"3. Create Mint Website"},sidebar:"sidebar",previous:{title:"2. Mint Tokens",permalink:"/deprecated/candy-machine-v1/mint-tokens"},next:{title:"4. Candy Machine Errors",permalink:"/deprecated/candy-machine-v1/cm-errors"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-mint-website"},"Create Mint Website"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use ",(0,a.kt)("a",{parentName:"p",href:"/developer-tools/sugar"},"Sugar: Candy Machine CLI")," instead.")),(0,a.kt)("p",null,"Once you have finished uploading your assets and creating the Candy Machine, you can start to create the mint website. You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/exiled-apes/candy-machine-mint"},"Exiled Apes Repository")," for this step. You will first clone the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/exiled-apes/candy-machine-mint.git\n")),(0,a.kt)("p",null,"Open the folder in your IDE of choice or use 'cd' to change directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd candy-machine-mint\n")),(0,a.kt)("p",null,"Install yarn."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install\n")),(0,a.kt)("p",null,"Open the .env.example folder. The contents should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REACT_APP_CANDY_MACHINE_CONFIG=__PLACEHOLDER__\nREACT_APP_CANDY_MACHINE_ID=__PLACEHOLDER__\nREACT_APP_TREASURY_ADDRESS=__PLACEHOLDER__\nREACT_APP_CANDY_START_DATE=__PLACEHOLDER__\n\nREACT_APP_SOLANA_NETWORK=\nREACT_APP_SOLANA_RPC_HOST=\n")),(0,a.kt)("p",null,"Change the folder's name to .env\nWe will replace the four \"",(0,a.kt)("strong",{parentName:"p"},"PLACEHOLDER"),'" values with the following in this order:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"candy machine with publickey number"),(0,a.kt)("li",{parentName:"ol"},"candy machine pubkey"),(0,a.kt)("li",{parentName:"ol"},"pubkey (this is the address of the wallet you made)"),(0,a.kt)("li",{parentName:"ol"},"timestamp number(time from setting a mint date)")),(0,a.kt)("p",null,'The network depends on whether you use mainnet-beta or devnet.\nYou can also add your custom rpc after the "REACT_APP_SOLANA_RPC_HOST" value.'),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"A Candy Machine mint can be network intensive, and may become rate limited on the default RPC if there is enough traffic. We ",(0,a.kt)("strong",{parentName:"p"},"highly")," recommend using a custom RPC. You can find a list of custom RPC services in our ",(0,a.kt)("a",{parentName:"p",href:"/resources/rpc-providers"},"community docs"),".")),(0,a.kt)("p",null,"To run the website locally run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn start\n")),(0,a.kt)("p",null,"A website should open here: localhost:3000/\nYou can now connect to your wallet and mint. If you succeeded it should show up in your collectibles.\nOnce you are ready to upload the app run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn build\n")),(0,a.kt)("p",null,"This will create a build folder which can be used when deploying your website."))}u.isMDXComponent=!0}}]);