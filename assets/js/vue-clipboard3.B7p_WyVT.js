import{C as s}from"./clipboard.CEP45nqx.js";const p=i=>({toClipboard(r,n){return new Promise((d,c)=>{const o=document.createElement("button"),e=new s(o,{text:()=>r,action:()=>"copy",container:n!==void 0?n:document.body});e.on("success",t=>{e.destroy(),d(t)}),e.on("error",t=>{e.destroy(),c(t)}),document.body.appendChild(o),o.click(),document.body.removeChild(o)})}});export{p as c};
