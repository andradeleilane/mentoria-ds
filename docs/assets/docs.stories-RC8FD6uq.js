import{s as i,x as f}from"./lit-element-2Ox572te.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=s=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};var h=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=(s,e,r,t)=>{for(var o=t>1?void 0:t?_(e,r):e,c=s.length-1,n;c>=0;c--)(n=s[c])&&(o=(t?n(e,r,o):n(o))||o);return t&&o&&h(e,r,o),o};let a=class extends i{render(){return f`
            <h1>Hello My first Component</h1>
        `}};a=v([u("eco-hello")],a);const x={title:"Components/Hello"},l=()=>f`
    <eco-hello></eco-hello>
`;var m,p,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"() => html`\n    <eco-hello></eco-hello>\n`",...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const D=["Default"];export{l as Default,D as __namedExportsOrder,x as default};
