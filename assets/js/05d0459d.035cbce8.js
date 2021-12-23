"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4148],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60066:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],s={},c="Creating the Candy Machine",l={unversionedId:"candy-machine-v2/CreatingCandyMachine",id:"candy-machine-v2/CreatingCandyMachine",title:"Creating the Candy Machine",description:"Once you have your collection prepared, the next step is to upload your assets and create a Candy Machine. This step is completed by a single command via the Candy Machine CLI.",source:"@site/docs/candy-machine-v2/05-CreatingCandyMachine.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/CreatingCandyMachine",permalink:"/candy-machine-v2/CreatingCandyMachine",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/05-CreatingCandyMachine.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Preparing your Assets",permalink:"/candy-machine-v2/PreparingAssets"},next:{title:"Verify Upload",permalink:"/candy-machine-v2/VerifyUpload"}},p=[],d={toc:p};function m(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-the-candy-machine"},"Creating the Candy Machine"),(0,o.kt)("p",null,"Once you have your collection prepared, the next step is to upload your assets and create a Candy Machine. This step is completed by a single command via the Candy Machine CLI."),(0,o.kt)("p",null,"Before you can proceed, you need to check that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your images and metadata are located in the same directory - in most cases this will be a directory named ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")),(0,o.kt)("li",{parentName:"ul"},"You have funds in your wallet - the command ",(0,o.kt)("inlineCode",{parentName:"li"},"solana balance")," will tell your current balance"),(0,o.kt)("li",{parentName:"ul"},"You have created your Candy Machine configuration file (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),")")),(0,o.kt)("p",null,"To proceed, you will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json \\\n    -cp config.json \\\n    -c example \n    ./assets\n")),(0,o.kt)("p",null,"In this command we are specifying that we will run the upload in the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," environment (",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," option), we will use the wallet keypair ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/solana/devnet.json")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-k")," option), the Candy Machine configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-cp")," option), the cache file suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," (",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option) and upload our assets from the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"./assets"),"."),(0,o.kt)("p",null,"Depending of the size of the collection - number of items and/or size of the images - this command has the potential to fail multiple times but should not be a problem when executed again, it will resume from the point it stopped in the previous execution."),(0,o.kt)("p",null,"Below is a sample output of a successfull upload and Candy Machine creation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARNING: The \"arweave\" storage option will be going away soon. Please migrate to arweave-bundle or arweave-sol for mainnet.\n\nBeginning the upload for 10 (img+json) pairs\nstarted at: 1640191406699\nSize 10 { mediaExt: '.png', index: '0' }\nProcessing asset: 0\ninitializing candy machine\ninitialized config for a candy machine with publickey: ABceMmLMwmSfL5mL1cCrpPMKGupMXUezEY3JyZ1JSd6h\nProcessing asset: 0\nProcessing asset: 1\nProcessing asset: 2\nProcessing asset: 3\nProcessing asset: 4\nProcessing asset: 5\nProcessing asset: 6\nProcessing asset: 7\nProcessing asset: 8\nProcessing asset: 9\nWriting indices 0-9\nDone. Successful = true.\nended at: 2021-12-22T16:44:38.446Z. time taken: 00:01:11\n")),(0,o.kt)("p",null,"Any execution that does not complete an upload successfully will have an output ",(0,o.kt)("inlineCode",{parentName:"p"},"Successful = false"),". In this case, re-run the upload command until a successful execution is achieved."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is common to receive ",(0,o.kt)("inlineCode",{parentName:"p"},"signatureUnsubscribe error: Invalid subscription id.")," messages. This is not an error that affects the upload."))),(0,o.kt)("p",null,"The command also outputs the Candy Machine PublicKey, which you can verify on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.solana.com"},"Solana Explorer"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Solana Explorer",src:t(79452).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},'"arweave"')," storage option as we are running it on the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),". When running on ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-beta"),", check other storage options that better suit your project/needs."))))}m.isMDXComponent=!0},79452:function(e,n,t){n.Z=t.p+"assets/images/solana-explorer-6d992d47ec7f4a7661d40bbd779b9099.png"}}]);