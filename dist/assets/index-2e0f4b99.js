import{r as i,a as y,c as D,x as H,s as T,j as _}from"./index-bbdaeca7.js";import{S as $,o as W}from"./Component-14299a9d.js";import{M as j}from"./index-ec8bed57.js";var f=(e=>(e.DEC="dec",e.HEX="hex",e.BIN="bin",e))(f||{});const m="0b",g="0x",B=[{key:"Целое",value:f.DEC},{key:"2-чный",value:f.BIN},{key:"16-ричный",value:f.HEX}],z=[{mask:"### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###",definitions:{"#":/[0-9]/gi}},{mask:"{\\0b}#### #### #### #### #### #### #### #### #### #### #### #### #### #### #### #### #### ####",definitions:{"#":/[0-1]/gi}},{mask:"{\\0x}#### #### #### #### #### #### #### #### #### #### #### #### #### #### #### #### #### #### ####",definitions:{"#":/[0-9a-f]/gi},prepare:e=>e.toUpperCase()}],R=(e,t)=>{const r=parseInt(e,t);return Number.isNaN(r)?null:r},X=e=>{if(typeof e=="number")return e;if(typeof e!="string")return null;const t=e.replace(/\s/g,"").trim();return t.startsWith(g)?R(t.replace(g,""),16):t.startsWith(m)?R(t.replace(m,""),2):R(t,10)},E=(e,t)=>{const r=X(e);return r===null?null:t===f.BIN?`${m}${r.toString(2)}`:t===f.HEX?`${g}${r.toString(16).toUpperCase()}`:r.toString(10)},w=({initialValue:e,onChange:t,onChangeFormat:r,initialFormat:a=f.DEC})=>{const n=typeof e=="number"?e:null,[k,c]=i.useState(n),l=i.useRef(n),[d,M]=i.useState(a);l.current=n,i.useEffect(()=>{M(a)},[a]);const I=E(l.current,d),h=typeof I=="string"?I:"",[x,b]=i.useState(h);i.useEffect(()=>{c(n),b(E(n,d)||""),console.log("useEffect.",{format:d,safeInitialValue:n},E(n,d)||"")},[d,n]);const S=i.useCallback(u=>{const o=X(u);return l.current=o,c(s=>(setTimeout(()=>{s!==o&&(t==null||t(o))},0),o)),t==null||t(o),o},[t]),V=i.useCallback(u=>M(o=>{const s=typeof u=="function"?u(o):u;return setTimeout(()=>{o!==s&&(r==null||r(s))},0),s}),[r]);return{safeMaskValue:h,maskValue:x,setMaskValue:b,decValue:k,format:d,setValue:S,setFormat:V}};var F={name:"zjik7",styles:"display:flex"},L={name:"50zrmy",styles:"text-transform:uppercase"};const U=({innerProps:e,Arrow:t,className:r,disabled:a,id:n,format:k})=>{const{ref:c,...l}=e;return y("div",{css:F,children:_("button",{ref:c,type:"button",className:r,disabled:a,id:n,...l,css:D({display:"flex",gap:T(1)},"",""),children:[y("span",{css:L,children:k}),t]})})},K=({format:e,onChange:t,inputRef:r,disabled:a})=>y($,{Field:U,selected:B.filter(n=>n.value===e),onChange:n=>{var k;t(((k=n.selected)==null?void 0:k.value)||null),setTimeout(()=>{var c;(c=r.current)==null||c.focus()},0)},options:B,popoverPosition:"bottom-end",size:"md",disabled:a,fieldProps:{format:e},css:D({height:"100%",borderLeft:`1px solid ${H.grey400}`,paddingLeft:T(2),display:"flex",alignItems:"center"},"","")});var O={name:"d0gv2t",styles:"display:flex;width:100%;align-items:start"};const Q=i.forwardRef(({Format:e=K,format:t,error:r,value:a,onChange:n,labelWrap:k,onChangeFormat:c,...l},d)=>{const{format:M,setFormat:I,setValue:h,maskValue:x,setMaskValue:b,safeMaskValue:S,decValue:V}=w({initialFormat:t,initialValue:a,onChange:n,onChangeFormat:c});console.log("IntegerMaskedInput value=",a),a!==void 0&&!n&&console.warn("[IntegerMaskedInput] controlled value doesnt listen to onChange."),t!==void 0&&!c&&console.warn("[IntegerMaskedInput] controlled format doesnt listen to onChangeFormat.");const u=i.useRef(!1),o=i.useRef(null);return y("div",{css:O,children:y(j,{...l,mask:z,value:x,autoComplete:"off",size:"md",error:r,onBlur:s=>{var p;(p=l==null?void 0:l.onBlur)==null||p.call(l,s),b(S)},ref:W([d,o]),rightAddons:y(e,{inputRef:o,format:M,isFilled:!!x.length,disabled:l.disabled,onChange:s=>{console.log("fmt changed to",s),u.current=!0,I(s),b(E(V,s)||"")}}),onAccept:s=>{if(u.current){u.current=!1;return}console.log("[IntegerMaskedInput] onAccept setMaskValue=",{newVal:s}),b(s),setTimeout(()=>{s.startsWith(m)&&s.length===m.length||s.startsWith(g)&&s.length===g.length||h(s)},0)},dispatch:(s,p)=>{const N=u.current;u.current&&(u.current=!1);const{value:A}=p,v=A+s;return console.warn("DISPATCH! newVal:",v,"dynamicMasked.compiledMasks=",p.compiledMasks),v.substring(0,m.length)===m?(!N&&v.length>m.length&&I(f.BIN),p.compiledMasks[1]):v.substring(0,g.length)===g?(!N&&v.length>g.length&&I(f.HEX),p.compiledMasks[2]):(!N&&v.length&&I(f.DEC),p.compiledMasks[0])}})})});export{Q as I};