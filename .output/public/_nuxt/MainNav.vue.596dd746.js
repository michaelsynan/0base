import{o as s,c as l,b as n,d as x,j as _,a as t,y as a,k as i,i as m,n as v,z as f}from"./entry.0ef76d62.js";import{a as g}from"./github.ba007cb3.js";const y={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},w=n("path",{fill:"currentColor",d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"},null,-1),b=[w];function C(c,e){return s(),l("svg",y,b)}const L={name:"mdi-menu",render:C},k={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$=n("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),B=[$];function N(c,e){return s(),l("svg",k,B)}const M={name:"mdi-close",render:N},V={class:"w-full flex flex-col items-center bg-stone-900 text-white mb-4 shadow-sm"},j={class:"container my-2 px-2 flex flex-col md:flex-row justify-between text-lg"},z={class:"flex justify-between items-center w-full md:mb-0"},H={class:"hidden md:flex md:space-x-6"},E=x({__name:"MainNav",setup(c){const e=_(!1),u=_("/"),d=()=>{e.value=!e.value};return(S,A)=>{const o=f,h=M,p=L,r=g;return s(),l("div",V,[n("div",j,[n("div",z,[t(o,{to:u.value,class:"font-medium",onClick:F=>"() => void"},{default:a(()=>[i("Nuxt Tailwind Starter")]),_:1},8,["to"]),n("button",{onClick:d,class:"md:hidden"},[e.value?(s(),m(h,{key:0,class:"w-6 h-6"})):(s(),m(p,{key:1,class:"w-6 h-6"}))])]),n("div",H,[t(o,{to:"/about",activeClass:"text-primary-light",class:"hover:text-primary-light transition-all duration-100"},{default:a(()=>[i("About")]),_:1}),t(o,{to:"/contact",activeClass:"text-primary-light",class:"hover:text-primary-light transition-all duration-100"},{default:a(()=>[i("Contact")]),_:1}),t(o,{to:"https://github.com/Formwork-Studios/nuxt-tailwind-starter",activeClass:"text-primary-light",class:"hover:text-primary-light transition-all duration-100 text-xl mt-0.5"},{default:a(()=>[t(r)]),_:1})]),n("div",{class:v([{"opacity-0 pointer-events-none":!e.value,"opacity-100 pointer-events-auto":e.value},"fixed top-0 left-0 w-full h-full bg-stone-900 flex-col space-y-4 z-50 transition-opacity duration-300 ease-in-out mt-10 pt-10 px-2 flex flex-col"])},[t(o,{to:"/about",activeClass:"text-primary-light",class:"hover:text-primary-light transition-all duration-100"},{default:a(()=>[i("About")]),_:1}),t(o,{to:"/contact",activeClass:"text-primary-light",class:"hover:text-primary-light transition-all duration-100"},{default:a(()=>[i("Contact")]),_:1}),t(o,{to:"https://github.com/Formwork-Studios/nuxt-tailwind-starter",activeClass:"text-primary-light",class:"hover:text-primary-light transition-all duration-100 text-xl mt-0.5"},{default:a(()=>[t(r)]),_:1})],2)])])}}});export{E as _};
