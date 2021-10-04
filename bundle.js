"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components"),l=require("prop-types");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(e),c=a(t),n=a(l);const r=c.default.label`
    margin-right: 5px;
    ${e=>e.customStyle}
`,o=c.default.input`
    ${e=>e.customStyle}

    ::placeholder {
        ${e=>e.customPlaceholder}
    }
`,u=c.default.div`
    position: absolute;
    margin-top: 2px;
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border: solid 1px;
    padding: 5px;
    ${e=>e.customStyle}
`,d=c.default.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 5px;
    ${e=>e.customStyle}
`,i=c.default.img`
    height: 20px;
    cursor: pointer;
    ${e=>e.customStyle}
`,f=c.default.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    ${e=>e.customStyle}
`,y=c.default.div`
    display: flex;
    justify-content: center;
    ${e=>e.customStyle}
`,m=c.default.div`
    display: flex;
    width: 100%;
    ${e=>e.customStyle}
`,g=c.default.div`
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 5px;
    ${e=>e.customStyle}
`,p=c.default.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    ${e=>e.customStyle}
`,b=c.default.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    background-color: #F00;
    color: #FFF;
    ${e=>e.customStyle}
`,h=c.default.div`
    cursor: pointer;
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    :hover {
        background-color: #F00;
        ${e=>e.customHover}
    }
    ${e=>e.customStyle}
`,S=c.default.div`
    color: rgba(0,0,0,.5);
    flex: 1 1 14%;
    display: flex;
    justify-content: center;
    ${e=>e.customStyle}
`;function v({date:t,doubleLeft:l,doubleRight:a,id:c,label:n,left:v,onChange:w,placeholder:x,right:D,styleArrow:E,styleContainerNameDay:k,styleContainerNumberDay:j,styleDatePicker:L,styleHeader:C,styleHover:$,styleInput:M,styleLabel:N,styleMonth:F,styleNameDay:P,styleNumberDay:H,styleOutsideDay:O,stylePlaceholder:z,styleSelectedDay:A,styleYear:B}){const[I,q]=e.useState(t),[R,T]=e.useState(I.toDateString().substring(8,10)),[Y,J]=e.useState(I.toDateString().substring(8,10)),[_,W]=e.useState(I.toDateString().substring(11,15)),[G,K]=e.useState(!1),[Q,U]=e.useState(t.getFullYear()),[V,X]=e.useState(t.getMonth()),[Z,ee]=e.useState(40-new Date(Q,V,40).getDate()),[te,le]=e.useState(new Date(Q,V,1).toDateString().substring(0,3)),[ae,se]=e.useState([]),[ce,ne]=e.useState([]),[re,oe]=e.useState([]),ue=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],ie=c+"Datepicker";e.useEffect((()=>{fe()}),[]),e.useEffect((()=>{T(I.toDateString().substring(8,10)),J(I.toDateString().substring(4,7)),W(I.toDateString().substring(11,15))}),[I]);const fe=()=>{const e=[],t=40-new Date(Q,V-1,40).getDate();for(let l=ue.indexOf(te)-1;l>=0;l--)e.push(t-l);se(e);const l=[];for(let e=1;e<=Z;e++)l.push(e);ne(l);const a=[],s=42-l.length-e.length;for(let e=1;e<=s;e++)a.push(e);oe(a)},ye=e=>{V+e===12?(U(Q+1),X(0)):V+e===-1?(X(11),U(Q-1)):X(V+e)},me=e=>{U(Q+e)};e.useEffect((()=>{ee(40-new Date(Q,V,40).getDate()),le(new Date(Q,V,1).toDateString().substring(0,3))}),[Q,V]),e.useEffect((()=>{fe()}),[te]);const ge=e=>{let t=e.target.innerHTML;q(new Date(Q,V,t)),t=1===t.length?"0"+t:t;const l=1===(V+1).toString().length?"0"+(V+1):V+1;document.getElementById(c).value=l+"/"+t+"/"+Q,w(),K(!1)};return e.useEffect((e=>{const t=e=>{-1!==Array.from(document.querySelectorAll("#"+ie+" *")).indexOf(e.target)||document.getElementById(ie)===e.target||(K(!1),window.removeEventListener("click",t),window.removeEventListener("keydown",l))},l=e=>{"Escape"===e.key&&(K(!1),window.removeEventListener("keydown",l),window.removeEventListener("click",t),document.getElementById(c).blur())};G&&window.addEventListener("click",t),G&&window.addEventListener("keydown",l)}),[G]),s.default.createElement(e.Fragment,null,""!==n&&s.default.createElement(r,{customStyle:N},n),s.default.createElement(o,{readOnly:!0,id:c,customStyle:M,customPlaceholder:z,placeholder:x,onClick:()=>K(!0)}),G?s.default.createElement(u,{id:ie,customStyle:L},s.default.createElement(d,{customStyle:C},s.default.createElement(i,{customStyle:E,onClick:()=>me(-1),src:l}),s.default.createElement(i,{customStyle:E,onClick:()=>ye(-1),src:v}),s.default.createElement("div",null,s.default.createElement(f,{customStyle:B},Q),s.default.createElement(y,{customStyle:F},de[V])),s.default.createElement(i,{customStyle:E,onClick:()=>ye(1),src:D}),s.default.createElement(i,{customStyle:E,onClick:()=>me(1),src:a})),s.default.createElement(m,{customStyle:k},ue.map(((e,t)=>s.default.createElement(g,{customStyle:P,key:t},e)))),s.default.createElement(p,{customStyle:j},ae.map(((e,t)=>s.default.createElement(S,{customStyle:O,key:t},e))),ce.map(((e,t)=>e==R&&de[V].substring(0,3)===Y&&Q==_?s.default.createElement(b,{customStyle:A,key:t,onClick:e=>ge(e)},e):s.default.createElement(h,{customStyle:H,customHover:$,key:t,onClick:e=>ge(e)},e))),re.map(((e,t)=>s.default.createElement(S,{customStyle:O,key:t},e))))):null)}v.propTypes={date:n.default.instanceOf(Date).isRequired,doubleLeft:n.default.string,doubleRight:n.default.string,id:n.default.string,label:n.default.string,left:n.default.string,onblur:n.default.func,placeholder:n.default.string,right:n.default.string,styleArrow:n.default.object,styleContainerNameDay:n.default.object,styleContainerNumberDay:n.default.object,styleDatePicker:n.default.object,styleHeader:n.default.object,styleHover:n.default.object,styleInput:n.default.object,styleLabel:n.default.object,styleMonth:n.default.object,styleNameDay:n.default.object,styleNumberDay:n.default.object,styleOutsideDay:n.default.object,stylePlaceholder:n.default.object,styleSelectedDay:n.default.object,styleYear:n.default.object},v.defaultProps={doubleLeft:"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-double-left' class='svg-inline--fa fa-angle-double-left fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z'%3e%3c/path%3e%3c/svg%3e",doubleRight:"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-double-right' class='svg-inline--fa fa-angle-double-right fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'%3e%3c/path%3e%3c/svg%3e",id:"default",label:"",onChange:()=>{},placeholder:"",left:"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-left' class='svg-inline--fa fa-angle-left fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3e%3cpath fill='currentColor' d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'%3e%3c/path%3e%3c/svg%3e",right:"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-right' class='svg-inline--fa fa-angle-right fa-w-8' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3e%3cpath fill='currentColor' d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'%3e%3c/path%3e%3c/svg%3e",styleArrow:{},styleContainerNameDay:{},styleContainerNumberDay:{},styleDatePicker:{},styleHeader:{},styleHover:{},styleInput:{},styleLabel:{},styleMonth:{},styleNameDay:{},styleNumberDay:{},styleOutsideDay:{},stylePlaceholder:{},styleSelectedDay:{},styleYear:{}},exports.Datepicker=v;
