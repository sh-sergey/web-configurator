import{a as e,U as w,j as i,c as r,s as t,f as R,u as B,r as g,W as b,X as A,F as D,b as f,d as O,Y as F,Z as M,T as p,$ as V,a0 as L,a1 as N,a2 as W,a3 as v,a4 as S,a5 as $,R as C,m as X}from"./index-bbdaeca7.js";import{P as k,F as u,D as m,a,b as _,u as y,s as j,c as E}from"./Component-14299a9d.js";import{C as h}from"./index-ec8bed57.js";import{I}from"./index-2e0f4b99.js";import{u as K}from"./usePrevious-1bb44d69.js";const x={display:"flex",justifyContent:"space-between",alignItems:"center"},Y=[{key:"Кастомный",content:e("b",{children:"Кастомный"}),value:"CUSTOM"},...w.map(n=>({key:n,value:n}))],Z=()=>{const n=R(),[c,o]=B({name:["enabled","algorithm"]}),s=o==="CUSTOM",l=K(o),[d,P]=g.useState(!1);return g.useEffect(()=>{if(!d||c===void 0||o===void 0||o===l)return;if(o==="CUSTOM"||!o){n.reset({...b,enabled:c},{keepDirty:!0,keepTouched:!0,keepIsSubmitted:!1,keepDefaultValues:!0});return}const T=o,U=A[T];n.reset({enabled:c,algorithm:T,...U},{keepDirty:!0,keepTouched:!0,keepIsSubmitted:!1,keepDefaultValues:!0})},[o,n,c,l,d]),g.useLayoutEffect(()=>{P(!0)},[]),c?i(D,{children:[e(a.Field,{name:"algorithm",css:r({marginBottom:t(2)},"",""),children:e(u,{label:i("div",{css:r({display:"flex",gap:t(1)},"",""),children:[e("span",{children:"Алгоритм"}),e(m,{title:"Алгоритм CRC",description:"Информация. TODO"})]}),options:Y})}),e(a.Field,{name:"poly",label:"Poly",css:r({marginBottom:t(2)},"",""),disabled:!s,children:e(I,{})}),e(a.Field,{name:"init",label:"Init",css:r({marginBottom:t(2)},"",""),disabled:!s,children:e(I,{})}),e(a.Field,{name:"xorOut",label:"XOR out",css:r({marginBottom:t(2)},"",""),disabled:!s,children:e(u,{options:[{key:"0x00000000",value:"0x00000000"},{key:"0xFFFFFFFF",value:"0xFFFFFFFF"}]})}),i("div",{css:x,children:[e(a.Field,{name:"refIn",css:r({marginBottom:t(2)},"",""),disabled:!s,children:e(h,{children:"Ref IN"})}),e(m,{title:"Ref IN",description:"Информация о"})]}),i("div",{css:x,children:[e(a.Field,{name:"refOut",disabled:!s,children:e(h,{children:"Ref OUT"})}),e(m,{title:"Ref OUT",description:"Информация о"})]}),e(_,{})]}):null},q=()=>i("div",{css:[x,{marginBottom:t(1)},"",""],children:[e(a.Field,{name:"enabled",children:e(h,{children:"Включить CRC"})}),e(m,{title:"CRC",description:"Информация об CRC"})]});var z={name:"huyey5",styles:"min-height:100%;display:grid"},G={name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"};const H=({children:n})=>{const c=y(),o=f(l=>l.crypto.crc),s=O({defaultValues:o,mode:"all",resolver:j(M)});return e("div",{css:z,children:e(a,{methods:s,onSubmit:l=>{c(F(l)),s.reset(l)},onReset:(l,d)=>{d!=null&&d.keepIsSubmitted&&(c(F(s.getValues())),s.reset())},css:G,children:n})})},J=()=>{const n=R(),c=f(s=>s.crypto.crc),o=y();return e(E,{onDefaultReset:()=>{o(F(b)),n.reset(b)},onReset:()=>{n.reset(c)},css:r({padding:t(2),justifyContent:"end"},"","")})},Q=()=>i(H,{children:[i(k,{title:"Настройки CRC",children:[e(q,{}),e("div",{css:r({marginTop:t(2)},"",""),children:e(Z,{})})]}),e(J,{})]}),ee=()=>{const[n]=B({name:["enabled"]});return n?i(D,{children:[e(a.Field,{name:"algorithm",css:r({marginBottom:t(2)},"",""),children:e(u,{label:i("div",{css:r({display:"flex",gap:t(1)},"",""),children:[e("span",{children:"Алгоритм шифрования"}),e(m,{title:"Алгоритм шифрования",description:"Информация. TODO"})]}),options:V})}),e(a.Field,{name:"mode",css:r({marginBottom:t(2)},"",""),children:e(u,{label:i("div",{css:r({display:"flex",gap:t(1)},"",""),children:[e("span",{children:"Режим шифрования"}),e(m,{title:"Режим шифрования",description:`
                  Описание:
                    <ul>
                      <li>ECB - Electronic codebook</li>
                      <li>CBC - Cipher Block Chaining</li>
                      <li>CTR - Counter mode</li>
                    </ul>
                `})]}),options:L})}),e(a.Field,{name:"permutation",css:r({marginBottom:t(2)},"",""),children:e(u,{label:i("div",{css:r({display:"flex",gap:t(1)},"",""),children:[e("span",{children:"Перестановка слова"}),e(m,{title:"Перестановка слова",description:"Информация. TODO"})]}),options:N})}),e(a.Field,{name:"order",css:r({marginBottom:t(2)},"",""),children:e(u,{label:i("div",{css:r({display:"flex",gap:t(1)},"",""),children:[e("span",{children:"Порядок загрузки/выгрузки"}),e(m,{title:"Порядок загрузки/выгрузки",description:"Информация. TODO"})]}),options:W})}),e(_,{})]}):null},te=()=>i("div",{css:r({display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t(1)},"",""),children:[e(a.Field,{name:"enabled",children:e(h,{children:"Включить крипто-блок"})}),e(m,{title:"Crypto",description:"Информация об Crypto"})]});var se={name:"huyey5",styles:"min-height:100%;display:grid"},re={name:"14ggdrv",styles:"height:100%;display:flex;flex-direction:column;justify-content:space-between"};const ne=({children:n})=>{const c=y(),o=f(l=>l.crypto.crypto),s=O({defaultValues:o,mode:"all",resolver:j($)});return e("div",{css:se,children:e(a,{methods:s,onSubmit:l=>{c(v(l)),s.reset(l)},onReset:(l,d)=>{d!=null&&d.keepIsSubmitted&&(c(v(s.getValues())),s.reset())},css:re,children:n})})},ie=()=>{const n=R(),c=f(s=>s.crypto.crypto),o=y();return e(E,{onDefaultReset:()=>{o(v(S)),n.reset(S)},onReset:()=>{n.reset(c)},css:r({padding:t(2),justifyContent:"end"},"","")})},oe=()=>i(ne,{children:[i(k,{title:"Настройки crypto",children:[e(te,{}),i(p,{css:r({marginTop:t(2)},"",""),forceRenderTabPanel:!0,children:[i(p.List,{children:[e(p.Tab,{children:"Настройки"}),e(p.Tab,{children:"DMA"})]}),e(p.Panel,{children:e(ee,{})}),e(p.Panel,{children:"В работе"})]})]}),e(ie,{})]}),ue=()=>i(X,{children:[e(C,{path:"crc",element:e(Q,{})}),e(C,{path:"block",element:e(oe,{})}),e(C,{path:"*",element:e("p",{children:"Work in progress"})})]});export{ue as default};
