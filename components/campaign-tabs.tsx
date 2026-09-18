"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Save } from "lucide-react";

const nav=["策略","核心创意","社交传播","线下体验","创作者","公关","商业转化","时间线"];
const creators=["小个子穿搭","职场","户外","家居","摄影","美食","城市生活"];
const moduleCopy:Record<string,string>={
  核心创意:"把秋季趋势翻译成每个人都能执行的私人生活说明书。",
  社交传播:"通过人格说明书、周末任务和同款秋天接力，形成可持续的UGC内容循环。",
  线下体验:"在城市街区设置可撕取的秋日任务亭，让线上人格变成可完成的真实路线。",
  创作者:"由七类生活方式创作者分别翻译一种秋日人格，强调真实实践而非广告口播。",
  公关:"发布《中国年轻人的一万种秋天》趋势报告，并发起“生活没有标准答案”城市观察。",
  商业转化:"商品只作为完成路线和生活任务的工具，按人格与场景组织而非硬性推荐。",
  时间线:"预热期建立文化议题，引爆期发布人格测试与城市任务，延续期沉淀UGC与商品场景。"
};

export function CampaignTabs(){
  const [active,setActive]=useState("策略");
  const [saved,setSaved]=useState<string[]>(["策略"]);
  const isSaved=saved.includes(active);
  function saveModule(){setSaved([...new Set([...saved,active])])}
  return <div className="grid gap-8 lg:grid-cols-[190px_1fr]"><aside className="lg:border-r lg:border-black/15 lg:pr-6">{nav.map((x,i)=><button key={x} onClick={()=>setActive(x)} className={`flex w-full items-center justify-between border-b border-black/10 py-3 text-left text-xs ${active===x?"font-semibold text-black":"text-black/40"}`}><span>0{i+1} / {x}</span>{active===x?<ArrowUpRight size={13}/>:saved.includes(x)?<Check size={12}/>:null}</button>)}</aside><div><div className="mb-10 flex items-start justify-between"><div><p className="eyebrow">当前模块</p><h2 className="mt-2 font-serif text-4xl">{active}</h2></div><span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${isSaved?"bg-acid":"border border-black/15"}`}>{isSaved?"已保存":"工作草稿"}</span></div>{active==="策略"?<><div className="grid gap-5 md:grid-cols-2"><div className="panel p-6"><p className="eyebrow">战役主张</p><p className="mt-12 font-serif text-3xl leading-snug">一万个人，<br/>就有一万种秋天。</p></div><div className="bg-ink p-6 text-white"><p className="eyebrow !text-white/45">品牌角色</p><p className="mt-12 font-serif text-3xl leading-snug">提供足够多的选择，让每个人找到属于自己的秋天。</p></div></div><div className="mt-5 panel p-6"><p className="eyebrow">体验架构</p><div className="mt-5 grid gap-2 md:grid-cols-4">{["01 / 发现\n秋日人格测试","02 / 生成\n生活说明书","03 / 体验\n城市任务路线","04 / 分享\n同款秋天连接"].map(x=><div key={x} className="border border-black/15 bg-paper/70 p-4 text-sm whitespace-pre-line">{x}</div>)}</div></div></>:<div className="panel min-h-80 p-7"><p className="eyebrow">{active}模块</p><p className="mt-8 max-w-2xl font-serif text-3xl leading-snug">{moduleCopy[active]}</p><div className="mt-12 h-px bg-black/15"/><p className="mt-5 text-sm text-black/50">内容已由同一策略系统预填，可在后续接入智能体后继续细化。</p></div>}<div className="mt-7 flex justify-end"><button onClick={saveModule} disabled={isSaved} className="btn disabled:cursor-default disabled:opacity-45">{isSaved?<Check size={14}/>:<Save size={14}/>} {isSaved?"本模块已保存":"保存本模块"}</button></div><div className="mt-8"><p className="eyebrow mb-4">创作者矩阵</p><div className="grid grid-cols-2 gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-4">{creators.map((x,i)=><div key={x} className="bg-paper p-4"><span className="text-[10px] text-black/35">创作者 0{i+1}</span><p className="mt-6 text-sm font-medium">{x}</p><p className="mt-1 text-[10px] text-black/40">角色 · 生活方式翻译者</p></div>)}</div></div></div></div>
}
