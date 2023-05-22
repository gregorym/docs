"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9599],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,A=m["".concat(l,".").concat(c)]||m[c]||g[c]||r;return n?a.createElement(A,s(s({ref:t},d),{},{components:n})):a.createElement(A,s({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905));const r={sidebar_label:"3. Preparing your Assets"},s="Preparing your Assets",o={unversionedId:"deprecated/candy-machine-js-cli/preparing-assets",id:"deprecated/candy-machine-js-cli/preparing-assets",title:"Preparing your Assets",description:"The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your",source:"@site/docs/06-deprecated/00-candy-machine-js-cli/02-preparing-assets.md",sourceDirName:"06-deprecated/00-candy-machine-js-cli",slug:"/deprecated/candy-machine-js-cli/preparing-assets",permalink:"/deprecated/candy-machine-js-cli/preparing-assets",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/00-candy-machine-js-cli/02-preparing-assets.md",tags:[],version:"current",lastUpdatedAt:1684748119,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"3. Preparing your Assets"},sidebar:"sidebar",previous:{title:"2. Configuration",permalink:"/deprecated/candy-machine-js-cli/configuration"},next:{title:"4. Creating the Candy Machine",permalink:"/deprecated/candy-machine-js-cli/creating-candy-machine"}},l={},p=[{value:"Example NFT Collection",id:"example-nft-collection",level:2},{value:"Sample Items of the Collection",id:"sample-items-of-the-collection",level:2},{value:"\u2022 Image: <code>0.png</code>",id:"-image-0png",level:4},{value:"\u2022 Metadata: <code>0.json</code>",id:"-metadata-0json",level:4},{value:"\u2022 Image: <code>9.png</code>",id:"-image-9png",level:4},{value:"\u2022 Metadata: <code>9.json</code>",id:"-metadata-9json",level:4},{value:"Verifying Assets",id:"verifying-assets",level:2}],d={toc:p};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preparing-your-assets"},"Preparing your Assets"),(0,i.kt)("p",null,"The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your\nproject's artwork and metadata."),(0,i.kt)("p",null,"Your assets consist of a collection of images (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".png"),") and metadata (",(0,i.kt)("inlineCode",{parentName:"p"},".json"),") files organized in a 1:1 mapping -\ni.e., each image has a corresponding metadata file."),(0,i.kt)("p",null,"There are a multitude of unique ways to generate images and metadata, and in most scenarios, you will automate this\nprocess. In this guide we will cover the creation of a simple collection to illustrate the metadata requirements and\nCandy Machine distribution. You should familiarize yourself with\nthe ",(0,i.kt)("a",{parentName:"p",href:"/programs/token-metadata/token-standard"},"Token Metadata Standard"),"."),(0,i.kt)("h2",{id:"example-nft-collection"},"Example NFT Collection"),(0,i.kt)("p",null,"A 10-item collection will have 20 files in total:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Images"),(0,i.kt)("th",{parentName:"tr",align:null},"Metadata"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"6.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"6.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9.png")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"9.json"))))),(0,i.kt)("p",null,"Each pair ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.json")," are combined to represent the first NFT in this example collection; ",(0,i.kt)("inlineCode",{parentName:"p"},"1.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.json"),"\ndescribe the second NFT and so forth. These files are typically grouped into a single folder, usually named ",(0,i.kt)("inlineCode",{parentName:"p"},"assets"),",\nbut that is not a hard requirement. Grouping them into a single folder simplifies next steps and is highly encouraged."),(0,i.kt)("p",null,"The content of the image files reflect the artwork you would like to display for each NFT and the content of the\nmetadata files describe each of these pieces of artwork using the schema defined in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/programs/token-metadata/token-standard"},"Token Metadata Standard"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The first item in your collection must have the index ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", the second ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and so forth. In a ",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," NFT drop, will\nstart with the pair ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.json"),", and end with the pair ",(0,i.kt)("inlineCode",{parentName:"p"},"9999.png")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"9999.json"),". The numbering must also be\nconsecutive - i.e., should not have gaps in the numbering.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"It is important to double-check that you do not skip any indices, e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"0.png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.png"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"3.png")," (missing ",(0,i.kt)("inlineCode",{parentName:"p"},"1.png"),").\nOtherwise you will experience problems when minting your collection.")),(0,i.kt)("h2",{id:"sample-items-of-the-collection"},"Sample Items of the Collection"),(0,i.kt)("p",null,"Below are two simple examples of items in this collection:"),(0,i.kt)("h4",{id:"-image-0png"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"0.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"0.png",src:n(21560).Z+"#radius#shadow",width:"300",height:"300"})),(0,i.kt)("h4",{id:"-metadata-0json"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"0.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Number #0001",\n  "symbol": "NB",\n  "description": "Collection of 10 numbers on the blockchain. This is the number 1/10.",\n  "seller_fee_basis_points": 500,\n  "image": "0.png",\n  "attributes": [\n    {\n      "trait_type": "Layer-1",\n      "value": "0"\n    },\n    {\n      "trait_type": "Layer-2",\n      "value": "0"\n    },\n    {\n      "trait_type": "Layer-3",\n      "value": "0"\n    },\n    {\n      "trait_type": "Layer-4",\n      "value": "1"\n    }\n  ],\n  "properties": {\n    "creators": [\n      {\n        "address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw",\n        "share": 100\n      }\n    ],\n    "files": [\n      {\n        "uri": "0.png",\n        "type": "image/png"\n      }\n    ]\n  },\n  "collection": {\n    "name": "numbers",\n    "family": "numbers"\n  }\n}\n')),(0,i.kt)("h4",{id:"-image-9png"},"\u2022 Image: ",(0,i.kt)("inlineCode",{parentName:"h4"},"9.png")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"9.png",src:n(19846).Z+"#radius#shadow",width:"300",height:"300"})),(0,i.kt)("h4",{id:"-metadata-9json"},"\u2022 Metadata: ",(0,i.kt)("inlineCode",{parentName:"h4"},"9.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Number #0010",\n  "symbol": "NB",\n  "description": "Collection of 10 numbers on the blockchain. This is the number 10/10.",\n  "seller_fee_basis_points": 500,\n  "image": "9.png",\n  "attributes": [\n    {\n      "trait_type": "Layer-1",\n      "value": "0"\n    },\n    {\n      "trait_type": "Layer-2",\n      "value": "0"\n    },\n    {\n      "trait_type": "Layer-3",\n      "value": "1"\n    },\n    {\n      "trait_type": "Layer-4",\n      "value": "0"\n    }\n  ],\n  "properties": {\n    "creators": [\n      {\n        "address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw",\n        "share": 100\n      }\n    ],\n    "files": [\n      {\n        "uri": "9.png",\n        "type": "image/png"\n      }\n    ]\n  },\n  "collection": {\n    "name": "numbers",\n    "family": "numbers"\n  }\n}\n')),(0,i.kt)("p",null,"Notice that the difference in the metadata between each image is on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"name"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Number #0001"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Number #0010"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"description"')," property: it shows ",(0,i.kt)("inlineCode",{parentName:"li"},'"number 1/10"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"number 10/10"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"image"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.png"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"9.png"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"properties.files.uri"')," property: ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.png"')," in the first image and ",(0,i.kt)("inlineCode",{parentName:"li"},'"9.png"')," in the last image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"attributes"')," property: the values for ",(0,i.kt)("inlineCode",{parentName:"li"},'"Layer-3"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Layer-4"')," trait-types are different, since they describe\nattributes of the images")),(0,i.kt)("p",null,"It is also important to make sure that you set royalties percentage awarded to creators (",(0,i.kt)("inlineCode",{parentName:"p"},'"seller_fee_basis_points"'),"\nproperty) is set and each creators' wallet is listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"properties.creators"')," property."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can download the complete ",(0,i.kt)("a",{target:"_blank",href:n(714).Z},"sample collection")," for testing and experimentation. Subsequent steps in this\nwalk through will assume it's the collection in use.")),(0,i.kt)("h2",{id:"verifying-assets"},"Verifying Assets"),(0,i.kt)("p",null,"Once you completed your project's artwork and metadata preparation, it is important to verify that the files are ready\nto be uploaded. The Candy Machine CLI provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"verify_assets")," command to check that the files in the assets folder\nare in the correct format. This involves verifying that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Files types are supported (e.g., png, jpg, mp4). Note that the command does not verify the content of the files; it\ndoes a lightweight verification that the extension of the files are from a supported type."),(0,i.kt)("li",{parentName:"ol"},"For each image/audio/video file, there is a correspondent ",(0,i.kt)("inlineCode",{parentName:"li"},"json")," metadata file using the correct index naming in\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"animation_url")," properties."),(0,i.kt)("li",{parentName:"ol"},"Creators have been consistently added to all metadata files. The command expects that all assets have the same\ncreators.")),(0,i.kt)("p",null,"To proceed with the verification process, you will execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"verify_assets")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/deprecated-clis/src/candy-machine-v2-cli.ts verify_assets ./assets\n")),(0,i.kt)("p",null,"The only required parameter is the directory of the assets","\u2014","in this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"./assets")," is the name of the\ndirectory. Executing the command using the sample collection will produce the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"started at: 1646926416415\nVerifying token metadata for 10 (img+json) pairs\nChecking manifest file: ~/deprecated-clis/test/assets/0.json\nChecking manifest file: ~/deprecated-clis/test/assets/1.json\nChecking manifest file: ~/deprecated-clis/test/assets/2.json\nChecking manifest file: ~/deprecated-clis/test/assets/3.json\nChecking manifest file: ~/deprecated-clis/test/assets/4.json\nChecking manifest file: ~/deprecated-clis/test/assets/5.json\nChecking manifest file: ~/deprecated-clis/test/assets/6.json\nChecking manifest file: ~/deprecated-clis/test/assets/7.json\nChecking manifest file: ~/deprecated-clis/test/assets/8.json\nChecking manifest file: ~/deprecated-clis/test/assets/9.json\nended at: Thu Mar 10 2022 15:33:36 GMT+0000 (Greenwich Mean Time). time taken: 00:00:00\n")),(0,i.kt)("p",null,"The above represents an example of a successful verification. When the command finds any inconsistency, it will report\nan error under the filename (",(0,i.kt)("inlineCode",{parentName:"p"},"0.json")," in this case) where the error occurred, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'started at: 1646926416415\nVerifying token metadata for 10 (img+json) pairs\nChecking manifest file: ~/deprecated-clis/test/assets/0.json\nWe expected the `image` property in ~/deprecated-clis/test/assets/0.json to be 0.jpg.\nThis will still work properly (assuming the URL is valid!), however, this image will not get uploaded to Arweave through the `metaplex upload` command.\nIf you want us to take care of getting this into Arweave, make sure to set `image`: "0.jpg"\nThe `metaplex upload` command will automatically substitute this URL with the Arweave URL location.\n\nChecking manifest file: ~/deprecated-clis/test/assets/1.json\nChecking manifest file: ~/deprecated-clis/test/assets/2.json\nChecking manifest file: ~/deprecated-clis/test/assets/3.json\nChecking manifest file: ~/deprecated-clis/test/assets/4.json\nChecking manifest file: ~/deprecated-clis/test/assets/5.json\nChecking manifest file: ~/deprecated-clis/test/assets/6.json\nChecking manifest file: ~/deprecated-clis/test/assets/7.json\nChecking manifest file: ~/deprecated-clis/test/assets/8.json\nChecking manifest file: ~/deprecated-clis/test/assets/9.json\nended at: Thu Mar 10 2022 15:33:36 GMT+0000 (Greenwich Mean Time). time taken: 00:00:00\n')),(0,i.kt)("p",null,"As soon as your assets are verified, you are ready to create your Candy Machine."))}g.isMDXComponent=!0},714:function(e,t,n){t.Z=n.p+"assets/files/assets-ff6bd873ecd07b49c86faf3c7aab82d2.zip"},21560:function(e,t){t.Z="data:image/png;base64,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"},19846:function(e,t){t.Z="data:image/png;base64,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"}}]);