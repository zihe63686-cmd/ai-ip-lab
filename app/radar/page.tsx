"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Radio, SlidersHorizontal, X } from "lucide-react";
import data from "@/data/mock-data.json";
import { Header, StepBar } from "@/components/ui";

const statusClass: Record<string,string> = { Emerging:"bg-[#e7e0ff]", Accelerating:"bg-acid", Persistent:"bg-[#d9e3d0]", Saturated:"bg-black/10" };

export default function RadarPage(){
  const [showFilters,setShowFilters]=useState(false);
  const [minRelevance,setMinRelevance]=useState(60);
  const [selected,setSelected]=useState("适我主义");
  const visible=data.trends.filter(t=>t.relevance>=minRelevance);
  const active=data.trends.find(t=>t.name===selected) ?? visible[0];
  return <><StepBar current={1}/><div className="page"><Header step="Live social signal scan / 02" title="Signal Radar" intro="我们扫描了过去7天的小红书内容，寻找正在上升、且与品牌资产真正相关的文化动向。" aside="Mock dataset · Last refreshed 08:42 CST"/>
    <div className="grid border-b border-black/15 md:grid-cols-3">{[["2,418","Signals Scanned"],["37","Trend Clusters"],["8","Brand Opportunities"]].map(([n,l],i)=><div key={l} className={`py-7 md:px-7 ${i?"md:border-l md:border-black/15":""}`}><p className="metric">{n}</p><p className="eyebrow mt-2">{l}</p></div>)}</div>
    <div className="mb-5 mt-10 flex items-end justify-between"><div><p className="eyebrow">Prioritized clusters</p><h2 className="mt-2 text-2xl">Signals with strategic momentum</h2></div><button onClick={()=>setShowFilters(!showFilters)} className="btn-light"><SlidersHorizontal size={13}/> Refine model</button></div>
    {showFilters&&<div className="mb-6 grid gap-6 border border-black/20 bg-white/70 p-5 md:grid-cols-[1fr_180px] md:items-end"><label><span className="eyebrow">Minimum brand relevance · {minRelevance}</span><input aria-label="Minimum brand relevance" type="range" min="60" max="95" value={minRelevance} onChange={e=>setMinRelevance(Number(e.target.value))} className="mt-4 w-full accent-black"/></label><button onClick={()=>{setMinRelevance(60);setShowFilters(false)}} className="btn-light"><X size={13}/> Reset & close</button></div>}
    <div className="hidden grid-cols-[2fr_repeat(5,1fr)_1.15fr] gap-3 border-y border-black/15 px-4 py-3 text-[9px] uppercase tracking-[.13em] text-black/45 lg:grid"><span>Trend territory</span>{["Velocity","Novelty","Persistence","Engagement","Brand fit","Status"].map(x=><span key={x}>{x}</span>)}</div>
    <div>{visible.map((t,i)=><button onClick={()=>setSelected(t.name)} key={t.name} className={`group grid w-full gap-5 border-b border-black/15 px-4 py-6 text-left transition hover:bg-white/70 lg:grid-cols-[2fr_repeat(5,1fr)_1.15fr] lg:items-center ${selected===t.name?"bg-white/60":""}`}><div><div className="mb-2 flex items-center gap-2"><span className="text-[10px] text-black/35">0{i+1}</span>{selected===t.name&&<Radio size={13}/>}</div><h3 className="font-serif text-2xl">{t.name}</h3><p className="mt-1 text-xs text-black/45">{t.tag}</p><p className="mt-3 max-w-md text-sm leading-relaxed text-black/60 lg:hidden">{t.signal}</p></div>{[["Velocity",t.velocity],["Novelty",t.novelty],["Persistence",t.persistence],["Engagement",t.engagement],["Brand relevance",t.relevance]].map(([l,v])=><div key={String(l)} className="grid grid-cols-[90px_1fr_28px] items-center gap-2 lg:block"><span className="eyebrow lg:hidden">{l}</span><div className="h-1 overflow-hidden bg-black/10 lg:mb-2"><div className="h-full bg-ink" style={{width:`${v}%`}}/></div><span className="text-xs tabular-nums">{v}</span></div>)}<div className="flex items-center justify-between"><span className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${statusClass[t.status]}`}>{t.status}</span><ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100"/></div></button>)}</div>
    {active&&<section className="mt-7 grid gap-6 border border-black/20 bg-ink p-6 text-white md:grid-cols-[1fr_260px] md:items-end"><div><p className="eyebrow !text-white/40">Selected signal / Quick view</p><h3 className="mt-4 font-serif text-4xl">{active.name}</h3><p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65">{active.signal}</p></div>{active.name==="适我主义"?<Link href="/trend" className="inline-flex items-center justify-between rounded-full bg-acid px-5 py-3 text-sm font-semibold text-black">Open deep dive <ArrowRight size={15}/></Link>:<button onClick={()=>setSelected("适我主义")} className="inline-flex items-center justify-between rounded-full border border-white/30 px-5 py-3 text-sm">View featured deep dive <ArrowRight size={15}/></button>}</section>}
  </div></>
}
