(()=>{var e={};e.id=606,e.ids=[606],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7282:e=>{"use strict";e.exports=require("process")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},788:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>u}),r(8440),r(4654),r(5866);var s=r(3191),a=r(8716),o=r(7922),n=r.n(o),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["blogs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8440)),"/Users/deepduggal/Code/community/src/app/blogs/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4654)),"/Users/deepduggal/Code/community/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/deepduggal/Code/community/src/app/blogs/page.tsx"],c="/blogs/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/blogs/page",pathname:"/blogs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},5983:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},4592:(e,t,r)=>{Promise.resolve().then(r.bind(r,9294)),Promise.resolve().then(r.bind(r,8015))},3524:(e,t,r)=>{Promise.resolve().then(r.bind(r,8049))},9294:(e,t,r)=>{"use strict";r.d(t,{AuthUserProvider:()=>l,a:()=>u});var s=r(326),a=r(7577),o=r(1063),n=r(8600);let i=(0,a.createContext)({authUser:null,isLoading:!0,signOut:async()=>{}});function l({children:e}){let t=function(){let[e,t]=(0,a.useState)(null),[r,s]=(0,a.useState)(!0),i=()=>{t(null),s(!1)};return{authUser:e,isLoading:r,signOut:()=>(0,o.w7)(n.I).then(i)}}();return s.jsx(i.Provider,{value:t,children:e})}let u=()=>(0,a.useContext)(i)},8049:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(326),a=r(434),o=r(7577),n=r(9294),i=r(5047);function l({}){let[e,t]=function(){!function(){let{authUser:e,isLoading:t}=(0,n.a)();(0,i.useRouter)()}();let[e,t]=(0,o.useState)([]);return[e,t]}();return(0,s.jsxs)(s.Fragment,{children:[s.jsx("h1",{className:"text-5xl my-4 px-4",children:"All Blogs"}),e?.map(e=>s.jsx("div",{className:"p-4 m-2 rounded-sm hover:bg-neutral-100",children:s.jsx(a.default,{href:`/blogs/${e.id}`,className:"text-2xl hover:underline",children:e.title})},e.id))]})}r(4821),r(5888),r(8600)},8600:(e,t,r)=>{"use strict";r.d(t,{A:()=>l,I:()=>i,db:()=>u});var s=r(2585),a=r(1063),o=r(4821);let n=(0,s.ZF)({apiKey:"AIzaSyBn9JakJN-izD7uDrsFHxQEV7H5DxS-s9Q",authDomain:"collab-text-editor-b3328.firebaseapp.com",projectId:"collab-text-editor-b3328",storageBucket:"collab-text-editor-b3328.appspot.com",messagingSenderId:"443381731232",appId:"1:443381731232:web:77268257b25ef694111ec5",measurementId:"G-N6M4N3NLEE"}),i=(0,a.v0)(n),l=new a.hJ,u=(0,o.ad)()},8015:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),a=r(9294),o=r(5047),n=r(6226),i=r(434);let l=()=>{let{authUser:e,isLoading:t,signOut:r}=(0,a.a)(),l=(0,o.useRouter)(),u=async()=>{r(),l.push("/")};return(0,s.jsxs)("nav",{className:"flex p-4 justify-between border-b-zinc-500 border-b-4",children:[(0,s.jsxs)("div",{className:"flex",children:[s.jsx(i.default,{href:"/",children:s.jsx(n.default,{src:"/DLogo.svg",alt:"Logo",width:36,height:36,className:"mr-4"})}),s.jsx("span",{className:"text-4xl font-light text-slate-700",children:"Deep's Blog"})]}),e&&s.jsx("button",{className:"font-bold transition",onClick:u,children:"Logout"})]})}},5888:(e,t,r)=>{"use strict";r.d(t,{Ir:()=>o});var s=r(8600),a=r(4821);let o=async(e,t,r)=>{try{let o=(0,a.JU)(s.db,"texts",e);await (0,a.r7)(o,{comments:[...t,{date:new Date,content:r}]})}catch(e){console.error("Failed to add a comment to a Blog document",e)}}},8440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var s=r(8570);let a=(0,s.createProxy)(String.raw`/Users/deepduggal/Code/community/src/app/blogs/page.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,s.createProxy)(String.raw`/Users/deepduggal/Code/community/src/app/blogs/page.tsx#default`)},4654:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>h});var s=r(9510),a=r(5317),o=r.n(a);r(5023);var n=r(8570);let i=(0,n.createProxy)(String.raw`/Users/deepduggal/Code/community/src/app/auth.js`),{__esModule:l,$$typeof:u}=i;i.default,(0,n.createProxy)(String.raw`/Users/deepduggal/Code/community/src/app/auth.js#default`);let d=(0,n.createProxy)(String.raw`/Users/deepduggal/Code/community/src/app/auth.js#AuthUserProvider`);(0,n.createProxy)(String.raw`/Users/deepduggal/Code/community/src/app/auth.js#useAuth`);let c=(0,n.createProxy)(String.raw`/Users/deepduggal/Code/community/src/components/Navbar.tsx`),{__esModule:p,$$typeof:x}=c;c.default;let m=(0,n.createProxy)(String.raw`/Users/deepduggal/Code/community/src/components/Navbar.tsx#default`);function g(){return s.jsx("footer",{className:"p-4 text-center",children:"\xa9 Deep Duggal"})}r(1159),r(5202);let h={title:"Deep's Blog",description:"Generated by Deep's coding skills"};function b({children:e}){return s.jsx("html",{lang:"en",children:s.jsx(d,{children:(0,s.jsxs)("body",{className:`${o().className} min-h-screen`,children:[s.jsx(m,{}),e,s.jsx(g,{})]})})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,553,621],()=>r(788));module.exports=s})();