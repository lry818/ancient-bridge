import{k as B,r as _,j as C,w as x,q as l,v as r,x as a,N as g,O as m,y as S,z as $,B as w,P as L,Q as M,R as N,C as T,D as V,E as Q}from"./vue-vendor-d6f3050c.js";import{u as q,_ as z}from"./index-0ab41be8.js";import{g as D}from"./bridgeUtils-c5ba1be0.js";import"./pinia-a219dfa1.js";const F=u=>(T("data-v-6bca727b"),u=u(),V(),u),K={class:"ai-assistant"},E=F(()=>a("h3",null,"AI智能解读",-1)),H={class:"chat-container"},R={class:"chat-messages"},j={class:"message-content"},O={class:"message-role"},P=["innerHTML"],U={key:0,class:"message ai loading"},G=Q('<div class="message-content" data-v-6bca727b><div class="message-role" data-v-6bca727b>AI助手</div><div class="loading-indicator" data-v-6bca727b><span class="dot" data-v-6bca727b></span><span class="dot" data-v-6bca727b></span><span class="dot" data-v-6bca727b></span></div></div>',1),J=[G],W={class:"chat-input"},X=["onKeyup"],Y=["disabled"],Z={class:"quick-questions"},ee=["onClick"],se=B({__name:"AIAssistant",setup(u){const h=q(),n=_([{role:"ai",content:'您好！我是桥梁文化AI助手，您可以输入桥梁名称（如"赵州桥"、"卢沟桥"），我会为您详细介绍这座桥梁的信息。'}]),o=_(""),d=_(!1),b=["赵州桥","卢沟桥","洛阳桥","安平桥"],c=C(()=>h.selectedBridge),p=()=>{if(!o.value.trim())return;n.value.push({role:"user",content:o.value});const t=o.value;o.value="",d.value=!0;let s=0;const e=["让我思考一下...","正在识别您提到的桥梁...","正在查找相关资料...","整理桥梁信息..."],i={role:"ai",content:e[0],isThinking:!0};n.value.push(i);const v=setInterval(()=>{s++,s<e.length?n.value[n.value.length-1].content=e[s]:clearInterval(v)},500);setTimeout(()=>{clearInterval(v),n.value.pop();const A=y(t);n.value.push({role:"ai",content:A}),d.value=!1},2500)},f=t=>{o.value=t,p()},k=t=>{const s=t.toLowerCase().trim();return h.bridges.find(e=>{const i=e.name.toLowerCase();return i.includes(s)||s.includes(i)})},y=t=>{const s=k(t);if(s){let e=`「${s.name}」详细介绍

`;return e+=`◆ 基本信息
`,e+=`- 【名称】: ${s.name}
`,e+=`- 【朝代】: ${s.dynasty}
`,e+=`- 【建造年份】: ${s.year}年
`,e+=`- 【地理位置】: ${s.location.province}${s.location.city}
`,e+=`- 【桥梁类型】: ${D(s.type)}
`,e+=`- 【跨度】: ${s.span}米
`,e+=`- 【材质】: ${s.material}

`,s.structureIntro&&(e+=`◆ 建筑特点
`,e+=`${s.structureIntro}

`),s.historyBackground&&(e+=`◆ 历史背景
`,e+=`${s.historyBackground}

`),s.culturalValue&&(e+=`◆ 文化意义
`,e+=`${s.culturalValue}

`),s.techFeatures&&(e+=`◆ 建造技术
`,e+=`${s.techFeatures}

`),e+=`◆ 保护级别
`,e+=`${s.status||s.protectionLevel||"暂无记录"}`,e}return t.includes("类型")||t.includes("种类")?`「中国古代桥梁类型」

中国古代桥梁主要分为五种类型：

1. 【拱桥】 - 以赵州桥为代表，利用拱券结构承重
2. 【梁桥】 - 最常见的类型，以安平桥、洛阳桥为代表
3. 【索桥】 - 在西南地区较为常见，如泸定桥
4. 【浮桥】 - 多为临时桥梁，用船只连接而成
5. 【廊桥】 - 兼具交通和休息功能，常见于江南水乡

您可以输入具体的桥梁名称来了解更多信息！`:`我没有找到名为"${t}"的桥梁信息。您可以尝试：

1. 输入完整的桥梁名称
2. 查看快速问题中的桥梁
3. 或者询问关于桥梁类型的问题`},I=t=>t.replace(/「(.*?)」(.*?)(\n|$)/g,"<h2>「$1」$2</h2>").replace(/◆ (.*?)(\n|$)/g,"<h3>◆ $1</h3>").replace(/- 【(.*?)】: (.*?)(\n|$)/g,'<li><span class="label">$1:</span> $2</li>').replace(/(\d+)\. 【(.*?)】 - (.*?)(\n|$)/g,'<li><span class="label">$2</span> - $3</li>').replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");return x(c,()=>{c.value&&n.value.push({role:"ai",content:`您现在查看的是${c.value.name}，建于${c.value.year}年，位于${c.value.location.province}${c.value.location.city}。您可以问我关于这座桥梁的建造技术、历史背景或文化意义等问题。`})}),(t,s)=>(l(),r("div",K,[E,a("div",H,[a("div",R,[(l(!0),r(g,null,m(n.value,(e,i)=>(l(),r("div",{key:i,class:S(["message",[e.role,{thinking:e.isThinking}]])},[a("div",j,[a("div",O,$(e.role==="user"?"您":"AI助手"),1),a("div",{class:"message-text",innerHTML:I(e.content)},null,8,P)])],2))),128)),d.value?(l(),r("div",U,J)):w("",!0)]),a("div",W,[L(a("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),type:"text",placeholder:"输入桥梁名称，例如：赵州桥、卢沟桥、安平桥",onKeyup:N(p,["enter"])},null,40,X),[[M,o.value]]),a("button",{onClick:p,class:"send-btn",disabled:!o.value.trim()}," 发送 ",8,Y)]),a("div",Z,[(l(),r(g,null,m(b,(e,i)=>a("button",{key:i,onClick:v=>f(e),class:"quick-question-btn"},$(e),9,ee)),64))])])]))}});const ie=z(se,[["__scopeId","data-v-6bca727b"]]);export{ie as default};
