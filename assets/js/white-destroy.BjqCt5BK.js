import{_ as R,W as L,L as n,P as p,$ as s,a as W,b as x}from"./index.DXXj-hlm.js";import{a as F,c as j,b as z,aX as $,ae as y,B as u,bK as m,F as K,b5 as v,af as o,N as d,bi as i,u as l}from"./@vue.CEj65B4J.js";import"./pinia.DyEYotLL.js";import"./vue-i18n.V-mnkcfJ.js";import"./@intlify.CFBz4lvk.js";import"./vue.Bt964zJg.js";import"./axios.CCb-kr4I.js";import"./qs.CHplBCRq.js";import"./side-channel.CsnL200x.js";import"./get-intrinsic.C0MK_WYI.js";import"./es-errors.DzOT6E3C.js";import"./has-symbols.eVqrYdw7.js";import"./has-proto.JnoBQRdH.js";import"./function-bind.BbkWVFrm.js";import"./hasown.DgGsgJXN.js";import"./call-bind.7ruBWERj.js";import"./set-function-length.rrBIZaM4.js";import"./define-data-property.CIp1FJ4J.js";import"./es-define-property.CCuWKFzr.js";import"./gopd.DEgEFyBv.js";import"./has-property-descriptors.BtWDufvq.js";import"./object-inspect.DozCNi1U.js";import"./numeral.DpTcJ6QL.js";import"./dayjs.BiyowgzP.js";import"./ethers.BW-Kzg1t.js";import"./@noble.CqNEeIzD.js";import"./@adraffy.-FYt1KqO.js";import"./vue-router.BQMrgPxf.js";import"./vant.Dep4x9SY.js";import"./@vant.BfKuOjy2.js";import"./vue-clipboard3.B7p_WyVT.js";import"./clipboard.CEP45nqx.js";import"./qrcode.vue.DUx8MS1K.js";const X={class:"flex-row"},G={class:"flex-1"},H={class:"label-value"},J={class:"flex-1"},Q={class:"label-value"},Y={key:0},Z={key:1},tt={class:"label-value"},et={class:"flex-center"},nt={class:"flex-row"},st={class:"label-value"},ot={class:"flex-center"},at={class:"flex"},rt={class:"label-value"},it={__name:"white-destroy",setup(lt){const{formatUnits:g,formatPrice:_}=W,{isLogin:B,userInfo:ut}=L,t=F({amount:void 0,profitNumber:void 0,burnAmtNumber:void 0,balanceOfNumber:void 0,quote:0n,rate:[0,0],rateUSDT:void 0,s:0});let a,C;const P=j(()=>{if(t.amount&&t.rate[1]){let r=t.amount/t.rate[1];return t.amount>.01?_(r,8)+"U":void 0}else return}),O=()=>{const r=Number(g(BigInt(t.quote)*100n,18)),e=Math.ceil(r*100)/100;t.amount=e},A=()=>{t.amount=Math.floor(t.balanceOfNumber*100)/100},I=()=>{const[r,e]=t.rate;if(r===0&&e===0)return!1;t.rateUSDT?t.rateUSDT=void 0:t.rateUSDT=1/e},S=async()=>{if(!B.value)return!1;try{n.show=!0;const r=await p.contractToken(),e=await p.constractLP(),c=await p.contractRoute(),b=await r.getPendingReward();t.profitNumber=Number(g(b,18));const w=await r.burnAmt();t.burnAmtNumber=Number(g(w,18));const N=await(await p.contractPledge()).balanceOf();t.balanceOfNumber=Number(g(N,18));const h=await c.getAmountsOut();t.rate=[Number(g(h[0],18)),Number(g(h[1],18))];const f=await e.getReserves(),{_reserve0:U,_reserve1:D}=f.toObject(),[E,V]=await e.token0()===p.USDT?[D,U]:[U,D],k=await c.quote(1,V,E);t.rate=[1,Number(g(k,18))],t.quote=k,n.show=!1}catch(r){console.log("eerr",r),n.show=!1}};L.emit=S,z(()=>{L.emit=async()=>{},clearInterval(C)}),B.value&&S();const M=async()=>{n.show=!0,n.timerOut=!1;try{if(typeof t.amount!="number")return n.msgList.push({msg:s("lang072"),err:1}),n.isButton=!0,!1;const r=Number(g(BigInt(t.quote)*100n,18));if(t.amount<r)return n.msgList.push({msg:`${s("lang131")}100USDT,
 ${s("lang022")}:${r.toFixed(2)}`,err:1}),n.isButton=!0,!1;const{provider:e}=p,c=await e.getSigner(),b=await p.contractPledge(c);a=new x,n.msgList.push({msg:`${t.amount} ${s("lang005")}`,status:a.status});const w=await b.transfer(t.amount);a=new x(a),n.msgList.push({msg:`${t.amount} ${s("lang003")}`,status:a.status}),await w.wait(),a.onClose(),n.msgList.push({msg:`${t.amount} ${s("lang004")}`}),n.show=!1,S()}catch{a==null||a.onErr(),n.msgList.push({msg:s("lang049"),err:1}),n.isButton=!0}},q=async()=>{n.show=!0,n.timerOut=!1;try{if(t.profitNumber<=0)return n.msgList.push({msg:s("lang113"),err:1}),n.isButton=!0,!1;const{provider:r}=p,e=await r.getSigner(),c=await p.contractPledge(e);a=new x,n.msgList.push({msg:s("lang059"),status:a.status});const b=await c.transfer(0);a=new x(a),n.msgList.push({msg:s("lang066"),status:a.status}),await b.wait(),a.onClose(),n.msgList.push({msg:s("lang067")}),n.show=!1,S()}catch{a==null||a.onErr(),n.msgList.push({msg:s("lang049"),err:1}),n.isButton=!0}};return(r,e)=>{const c=v("app-space"),b=v("van-icon"),w=v("app-input"),T=v("app-button"),N=v("hb-unlink"),h=v("hb-card-down");return $(),y(K,null,[u(h,null,{hide:m(()=>[o("div",X,[o("div",G,[d(i(l(s)("lang131"))+" ",1),e[6]||(e[6]=o("div",{class:"label-value"}," 100 USDT ",-1)),u(c),o("div",null,[d(" SST"+i(l(s)("lang120"))+" ",1),o("div",H,i(l(_)(t.balanceOfNumber)),1)])]),o("div",J,[d(i(l(s)("lang038"))+" ",1),u(b,{name:"exchange",size:"14px",onClick:e[0]||(e[0]=f=>I())}),o("div",Q,[t.rateUSDT?($(),y("span",Y,"1 SST : "+i(l(_)(t.rateUSDT,8))+" USDT",1)):($(),y("span",Z,i(t.rate[0])+" USDT : "+i(l(_)(t.rate[1]))+" SST",1))])])]),o("div",null,[o("div",null,[d(i(l(s)("lang023"))+" ",1),o("span",tt,i(P.value),1)]),u(w,{min:0,type:"number",modelValue:t.amount,"onUpdate:modelValue":e[3]||(e[3]=f=>t.amount=f),placeholder:l(s)("lang073")},{befor:m(()=>[o("div",{class:"input-tag tag-min",onClick:e[1]||(e[1]=f=>O())},"Min")]),after:m(()=>[o("div",{class:"input-tag tag-max",onClick:e[2]||(e[2]=f=>A())},"Max")]),_:1},8,["modelValue","placeholder"])]),u(c),o("div",et,[u(N,{"is-button":"","is-white":""},{default:m(()=>[u(T,{width:"150px",onClick:e[4]||(e[4]=f=>M())},{default:m(()=>[d(i(l(s)("lang110")),1)]),_:1})]),_:1})])]),default:m(()=>[d(i(l(s)("lang111"))+" ",1)]),_:1}),u(c),u(h,null,{hide:m(()=>[o("div",nt,[o("div",null,[d(i(l(s)("lang057"))+" ",1),o("div",st,i(l(_)(t.profitNumber)),1)]),e[7]||(e[7]=o("div",{class:"flex-1"},null,-1)),o("div",ot,[u(N,{"is-button":"","is-white":""},{default:m(()=>[u(T,{width:"100px",disabled:t.profitNumber<=0,onClick:e[5]||(e[5]=f=>q())},{default:m(()=>[d(i(l(s)("lang065")),1)]),_:1},8,["disabled"])]),_:1})])]),u(c),o("div",at,[o("div",null,i(l(s)("lang026")),1),o("div",rt,i(l(_)(t.burnAmtNumber)),1)])]),default:m(()=>[d(i(l(s)("lang112"))+" ",1)]),_:1})],64)}}},Ft=R(it,[["__scopeId","data-v-23610863"]]);export{Ft as default};
