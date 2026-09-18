"use client";

import { useState } from "react";
import { Check, Copy, Download, Play, Sparkles, X } from "lucide-react";

const tabs=["Social","Copy","KV","Storyboard","Video","KOL Brief","PR","Presentation"];
const socialVariants=[
  {title:"没有标准答案的秋天，反而更好过了 🍂",persona:"低能量漫游者",task:"下班提前一站走回家；找一件摸起来安心的针织衫；周六去旧街区买刚出炉的栗子。",ending:"适合我的速度、温度和路线，就是我的秋天。"},
  {title:"今年秋天，我决定不赶任何人的进度 🧶",persona:"慢热生活家",task:"给房间换一盏暖灯；煮一锅只够两个人的汤；傍晚六点去河边吹十分钟的风。",ending:"不必复制别人的秋天，我舒服的节奏就很好。"},
  {title:"测完才发现：我的秋天适合往外跑 🥾",persona:"城市出走者",task:"周五收好一个轻背包；坐第一班郊区巴士；在山里认真听一次落叶。",ending:"秋天不是季节任务，是我重新选择生活半径的机会。"}
];
const script=[
 ["0–03s","清晨，窗帘被风吹开，一只手摸到微凉的床单。","特写","秋天到底应该怎么过？","风声，布料摩擦"],
 ["03–08s","城市里不同的人打开各自的“秋天使用说明”。","快速组接","没有标准答案。","轻快鼓点进入"],
 ["08–15s","小个子女孩叠穿、户外男生装包、独居青年煮栗子。","中景 / 特写","有人把秋天穿在身上，有人走进山里。","生活环境声"],
 ["15–22s","手机路线与真实街区交叠，任务被逐一完成。","跟拍","你的习惯，就是秋天的坐标。","脚步与城市声"],
 ["22–27s","七张不同说明书在画面中铺开。","俯拍","一万个人，就有一万种秋天。","音乐推高"],
 ["27–30s","天猫红猫与主标题出现。","定帧","上天猫，找到你的秋天使用说明。","品牌声音标识"]
];
const moduleSamples:Record<string,{title:string;body:string;items:string[]}>= {
  Copy:{title:"Campaign copy system",body:"生活没有标准答案，秋天也没有。天猫提供足够多的选择，让每个人找到自己的温度、路线和日常。",items:["主标题：一万种秋天使用说明","副标题：适合你的，才是这个秋天的答案","CTA：领取我的秋天说明书"]},
  Video:{title:"15s social cutdown",body:"从三种截然不同的秋日生活切入，以快速人格揭晓完成品牌收束。",items:["0–04s：三个反差生活瞬间","04–10s：说明书生成与任务执行","10–15s：一万种秋天 + 天猫收束"]},
  "KOL Brief":{title:"Lifestyle creator brief",body:"请用真实周末记录，而不是广告式推荐，展示你如何完成一份只适合自己的秋日说明书。",items:["必须包含：1个真实地点","必须包含：1项可复刻任务","商品自然出现，不进行参数口播"]},
  PR:{title:"PR narrative",body:"天猫发布《中国年轻人的一万种秋天》，呈现年轻人从追赶标准答案到主动定义适配生活的变化。",items:["趋势数据发布","七类秋日人格","城市生活方式观察者圆桌"]},
  Presentation:{title:"12-page pitch structure",body:"从文化信号进入，以Human Tension建立策略，再用四条创意路径证明延展能力。",items:["01–03：Context & Signal","04–06：Insight & Opportunity","07–12：Campaign & Assets"]}
};

export function Studio(){
  const [active,setActive]=useState("Social");
  const [style,setStyle]=useState("Editorial");
  const [variant,setVariant]=useState(0);
  const [copied,setCopied]=useState(false);
  const [preview,setPreview]=useState(false);
  const [openedModule,setOpenedModule]=useState("");
  const social=socialVariants[variant];
  const socialText=`${social.title}\n\n以前每到换季，我都像在赶一份秋天的进度表。\n\n今年试了天猫的「一万种秋天使用说明」，我的秋日人格是「${social.persona}」。\n\n它给我的任务是：${social.task}\n\n${social.ending}\n\n#一万种秋天使用说明 #天猫秋季焕新 #适合比流行重要`;

  function changeTab(tab:string){setActive(tab);setOpenedModule("");setPreview(false)}
  async function copySocial(){await navigator.clipboard.writeText(socialText);setCopied(true);window.setTimeout(()=>setCopied(false),1800)}
  function exportKv(){
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><rect width="1600" height="900" fill="#d4b29b"/><circle cx="1350" cy="90" r="380" fill="#ff6238" opacity=".7"/><path d="M620 -80 L1100 980" stroke="#e8dfc9" stroke-width="260" opacity=".8"/><text x="90" y="100" font-family="Arial" font-size="22" letter-spacing="6">TMALL AUTUMN / 2026 · ${style}</text><text x="90" y="360" font-family="Georgia,serif" font-size="112" font-weight="700">一万种秋天</text><text x="90" y="500" font-family="Georgia,serif" font-size="112" font-weight="700">使用说明</text><text x="90" y="790" font-family="Arial" font-size="28">生活没有标准答案。</text></svg>`;
    const url=URL.createObjectURL(new Blob([svg],{type:"image/svg+xml"}));const link=document.createElement("a");link.href=url;link.download=`ai-ip-lab-kv-${style.toLowerCase().replaceAll(" ","-")}.svg`;link.click();URL.revokeObjectURL(url);
  }

  return <><div className="flex gap-1 overflow-x-auto border-b border-black/15">{tabs.map(x=><button onClick={()=>changeTab(x)} key={x} className={`shrink-0 border-b-2 px-4 py-4 text-xs font-medium ${active===x?"border-black text-black":"border-transparent text-black/40"}`}>{x}</button>)}</div><div className="pt-8">
    {active==="Social"&&<div className="grid gap-6 lg:grid-cols-[320px_1fr]"><aside className="panel p-5"><p className="eyebrow">Generation controls</p>{[["Platform","小红书"],["Creator Type","生活方式"],["Tone","真实 / 年轻 / 非广告"]].map(([a,b])=><label key={a} className="block border-b border-black/15 py-5"><span className="eyebrow">{a}</span><select className="field"><option>{b}</option><option>{a==="Platform"?"抖音":a==="Creator Type"?"城市生活":"温暖 / 克制 / 编辑感"}</option></select></label>)}<button onClick={()=>setVariant((variant+1)%socialVariants.length)} className="btn mt-6 w-full"><Sparkles size={14}/> Regenerate · {variant+1}/3</button></aside><article className="bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,.08)] md:p-10"><div className="flex items-center justify-between"><span className="rounded-full bg-[#ff2442] px-3 py-1 text-[10px] font-semibold text-white">小红书 DEMO</span><button onClick={copySocial} className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-2 text-xs transition hover:bg-black hover:text-white">{copied?<Check size={14}/>:<Copy size={14}/>} {copied?"Copied":"Copy"}</button></div><h2 className="mt-10 font-serif text-3xl">{social.title}</h2><div className="mt-6 space-y-4 text-[15px] leading-7 text-black/70"><p>以前每到换季，我都像在赶一份秋天的进度表：要去看银杏、要买风衣、要喝第一杯热拿铁。</p><p>今年试了天猫的「一万种秋天使用说明」，结果我的秋日人格居然叫——<strong>{social.persona}</strong>。</p><p>它给我的任务是：{social.task}</p><p>{social.ending}</p><p>你会是哪一种？在天猫搜「秋天使用说明」，领走你的周末路线。</p></div><p className="mt-7 text-sm text-[#3159b7]">#一万种秋天使用说明 #天猫秋季焕新 #适合比流行重要 #周末去哪儿</p></article></div>}
    {active==="KV"&&<div><div className="mb-6 flex flex-wrap gap-2">{["Editorial","Documentary","Fashion","Minimal","Surreal","Youth Culture"].map(x=><button key={x} onClick={()=>setStyle(x)} className={`rounded-full border px-4 py-2 text-xs ${style===x?"border-black bg-black text-white":"border-black/15"}`}>{x}</button>)}</div><div className="grid overflow-hidden border border-black/20 lg:grid-cols-[1.25fr_.75fr]"><div className="relative min-h-[610px] overflow-hidden bg-[#d4b29b] p-8 md:p-12"><div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#ff6238] blur-3xl opacity-65"/><div className="absolute bottom-[-80px] left-[20%] h-80 w-80 rounded-full bg-[#8f2d18] blur-3xl opacity-55"/><div className="absolute inset-x-[34%] bottom-0 top-0 rotate-[16deg] bg-[#e8dfc9]/70 shadow-2xl"/><p className="relative z-10 text-[10px] font-semibold uppercase tracking-[.2em]">TMALL AUTUMN / 2026 · {style}</p><h2 className="relative z-10 mt-16 max-w-xl font-serif text-6xl leading-[.95] tracking-[-.06em] md:text-8xl">一万种<br/><span className="italic">秋天</span><br/>使用说明</h2><div className="absolute bottom-10 left-8 right-8 z-10 flex items-end justify-between md:left-12 md:right-12"><p className="max-w-[250px] text-xs leading-relaxed">没有标准答案。<br/>找到适合你的温度、路线与生活。</p><span className="grid h-24 w-24 place-items-center rounded-full bg-acid text-center text-xs font-bold">SCAN YOUR<br/>AUTUMN</span></div></div><div className="bg-ink p-7 text-white"><p className="eyebrow !text-white/40">Creative direction</p><p className="mt-3 font-serif text-3xl">Product Manual × Autumn Lifestyle Photography</p><div className="mt-14 space-y-5 border-t border-white/15 pt-6 text-sm text-white/60"><p><span className="eyebrow !text-white/30">Visual mode</span><br/>{style}</p><p><span className="eyebrow !text-white/30">Palette</span><br/>Burnt persimmon / Oat / Acid lime</p><p><span className="eyebrow !text-white/30">Typography</span><br/>Editorial serif × Utility grotesk</p></div><button onClick={exportKv} className="mt-12 inline-flex items-center gap-2 border-b border-white pb-1 text-xs"><Download size={13}/> Export SVG key visual</button></div></div></div>}
    {active==="Storyboard"&&<div><div className="overflow-x-auto"><table className="w-full min-w-[900px] border-collapse text-left"><thead><tr className="border-y border-black/20 text-[9px] uppercase tracking-[.15em] text-black/45">{["秒数","画面","景别","文案","声音"].map(x=><th key={x} className="px-4 py-3 font-semibold">{x}</th>)}</tr></thead><tbody>{script.map((r,i)=><tr key={i} className="border-b border-black/15 align-top hover:bg-white/50">{r.map((c,j)=><td key={j} className={`px-4 py-5 text-sm leading-relaxed ${j===0?"font-mono text-xs":j===1?"max-w-sm font-medium":"text-black/60"}`}>{c}</td>)}</tr>)}</tbody></table></div><button onClick={()=>setPreview(!preview)} className="btn mt-7"><Play size={14}/> {preview?"Close preview":"Preview sequence"}</button>{preview&&<div className="mt-6 bg-ink p-6 text-white"><div className="flex items-center justify-between"><div><p className="eyebrow !text-white/40">Sequence preview / 30s</p><h3 className="mt-2 font-serif text-3xl">一万种秋天使用说明</h3></div><button onClick={()=>setPreview(false)} className="grid h-9 w-9 place-items-center rounded-full border border-white/25"><X size={14}/></button></div><div className="mt-8 grid gap-2 md:grid-cols-3">{script.map((row,i)=><div key={row[0]} className="border border-white/15 p-4"><span className="text-xs text-acid">{row[0]}</span><div className="my-4 grid aspect-video place-items-center bg-white/5 font-serif text-4xl text-white/20">0{i+1}</div><p className="text-xs leading-relaxed text-white/60">{row[1]}</p></div>)}</div></div>}</div>}
    {!['Social','KV','Storyboard'].includes(active)&&<div className="min-h-[460px] border border-black/15 bg-white/40 p-8">{openedModule===active?<GeneratedModule name={active} onClose={()=>setOpenedModule("")}/>:<div className="grid min-h-[390px] place-items-center text-center"><div><p className="eyebrow">{active} generator</p><h2 className="mt-5 font-serif text-4xl">Generate a structured first draft.</h2><p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-black/50">基于同一Campaign策略生成可编辑的{active}资产草稿。</p><button onClick={()=>setOpenedModule(active)} className="btn mt-7"><Sparkles size={14}/> Generate {active}</button></div></div>}</div>}
  </div></>
}

function GeneratedModule({name,onClose}:{name:string;onClose:()=>void}){
  const sample=moduleSamples[name];
  return <div><div className="flex items-start justify-between"><div><p className="eyebrow">Generated / {name}</p><h2 className="mt-3 font-serif text-4xl">{sample.title}</h2></div><button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/20"><X size={14}/></button></div><p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/65">{sample.body}</p><div className="mt-10 grid gap-3 md:grid-cols-3">{sample.items.map((item,i)=><div key={item} className="border border-black/15 bg-paper/70 p-5"><span className="eyebrow">0{i+1}</span><p className="mt-6 text-sm leading-relaxed">{item}</p></div>)}</div><button onClick={()=>navigator.clipboard.writeText([sample.title,sample.body,...sample.items].join("\n"))} className="btn-light mt-8"><Copy size={13}/> Copy draft</button></div>
}
