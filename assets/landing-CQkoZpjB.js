import{r as a,j as t,L as f}from"./index-CadxIRHE.js";import{n as c}from"./nav-items-DoovVmr6.js";function u({src:e,onPlay:s}){const[n,r]=a.useState(!1),l=()=>{r(!0),s()};return t.jsx(t.Fragment,{children:n?t.jsx("img",{className:"max-h-5/6",src:e,alt:"Intro animation"}):t.jsx("button",{onClick:l,children:t.jsx("img",{src:"/portfolio//PlayButton.png",alt:"Play Button",className:"cursor-pointer"})})})}function m(){return t.jsx("nav",{className:"flex flex-col items-center md:flex-row gap-9 xl:gap-12 mt-10 xl:mt-14 w-5/6 md:w-auto",children:c.map(({id:e,name:s,route:n})=>t.jsx(f,{to:n,className:`font-josefin-sans text-gray-800 bg-rose-300 rounded-full border-gray-800
            text-center w-5/6 max-w-80 min-w-fit md:w-fit shadow-[7px_7px_#ff7390] hover:bg-rose-400
            text-3xl px-6 py-3 border-3 xl:text-5xl xl:px-8 xl:py-4 xl:border-4`,children:s},e))})}function h(){const[e,s]=a.useState(!1),[n,r]=a.useState(!1),l=2300,o=sessionStorage.getItem("introPlayed");a.useEffect(()=>{o==="true"&&(s(!0),r(!0))},[o]),a.useEffect(()=>{if(e){const i=setTimeout(()=>{r(!0)},20);return()=>clearTimeout(i)}},[e]);const x=()=>{r(!1),setTimeout(()=>{s(!0),setTimeout(()=>{sessionStorage.setItem("introPlayed","true")},500)},l)};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex justify-center items-center h-dvh bg-lime-200",children:!n&&t.jsx(u,{src:`/portfolio//BalloonPop.gif?${Date.now()}`,onPlay:x})}),e&&t.jsxs("div",{className:`
          flex flex-col absolute justify-center items-center -top-full w-full h-dvh bg-rose-200
          transition-transform duration-1000
          ${n&&!o?"translate-y-full animate-bounce-finite":o?"translate-y-full":""}
        `,children:[t.jsx("h1",{className:`
            w-full text-center font-super-carnival text-transparent text-6xl sm:text-7xl lg:text-8xl xl:text-9xl
            text-stroke-color-[#333] text-stroke-width-[2px] sm:text-stroke-width-[3px] xl:text-stroke-width-[4px]
            text-shadow-[2px_2px_#ff7390] sm:text-shadow-[3px_3px_#ff7390] xl:text-shadow-[5px_5px_#ff7390]
          `,children:"Leah Bercovitch"}),t.jsx(m,{})]})]})}export{h as default};
