"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, FileUp, Plus, X } from "lucide-react";
import data from "@/data/mock-data.json";
import { StepBar } from "@/components/ui";

const fields = [
  ["Brand", data.project.brand], ["Campaign / Product", data.project.campaign], ["Industry", data.project.industry],
  ["Audience", data.project.audience], ["Platform", data.project.platform], ["Trend Window", data.project.trendWindow],
  ["Campaign Objective", data.project.objective], ["Budget", data.project.budget], ["Campaign Period", data.project.period],
];

export default function BriefPage() {
  const [showCompetitor, setShowCompetitor] = useState(false);
  const [briefFile, setBriefFile] = useState("");

  return <><StepBar current={0}/><div className="page">
    <div className="grid gap-10 border-b border-black/15 pb-10 lg:grid-cols-[1fr_400px] lg:items-end">
      <div><p className="eyebrow mb-5">New intelligence project / 01</p><h1 className="display">Turn a brief into <span className="italic">cultural leverage.</span></h1></div>
      <p className="text-lg leading-relaxed text-black/60">从一个真实商业问题出发，扫描文化信号、识别人群张力，并生成可落地的创意系统。</p>
    </div>
    <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_320px]">
      <section><div className="mb-8 flex items-center justify-between"><div><p className="eyebrow">Project definition</p><h2 className="mt-2 text-2xl font-medium">天猫秋季焕新</h2></div><span className="rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-wider">Draft · Auto-saved</span></div>
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">{fields.map(([label,value],i)=><label key={label} className={i===6?"md:col-span-2":""}><span className="eyebrow">{String(i+1).padStart(2,"0")} / {label}</span><input className="field" defaultValue={value}/></label>)}</div>
        <label className="mt-7 block"><span className="eyebrow">10 / Mandatory & restrictions</span><textarea className="field min-h-20 resize-none" defaultValue={data.project.restrictions}/></label>
      </section>
      <aside className="space-y-4"><div className="panel p-5"><p className="eyebrow mb-4">Brand brief</p><label className="grid min-h-52 cursor-pointer place-items-center border border-dashed border-black/25 bg-paper/60 p-6 text-center transition hover:border-black hover:bg-white"><input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" className="hidden" onChange={(event) => setBriefFile(event.target.files?.[0]?.name ?? "")}/><div><FileUp className="mx-auto mb-4"/><p className="text-sm font-medium">{briefFile || "Choose brand materials"}</p><p className="mt-2 text-xs leading-relaxed text-black/45">PDF, PPTX, DOCX up to 50MB<br/>{briefFile ? "Attached locally for this session" : "Click to select a file"}</p></div></label></div>
        {!showCompetitor ? <button onClick={() => setShowCompetitor(true)} className="btn-light w-full"><Plus size={14}/> Add competitor context</button> : <section className="border border-black/20 bg-white/65 p-5 shadow-[0_18px_50px_rgba(0,0,0,.06)]"><div className="flex items-center justify-between"><div><p className="eyebrow">Competitive lens / 01</p><h3 className="mt-2 text-lg font-medium">竞品语境</h3></div><button onClick={() => setShowCompetitor(false)} aria-label="关闭竞品语境" className="grid h-8 w-8 place-items-center rounded-full border border-black/15 transition hover:bg-black hover:text-white"><X size={14}/></button></div><div className="mt-5 space-y-5"><label className="block"><span className="eyebrow">Competitor brand</span><input className="field" defaultValue="京东"/></label><label className="block"><span className="eyebrow">Current campaign</span><input className="field" defaultValue="秋日生活焕新季"/></label><label className="block"><span className="eyebrow">Perceived strength</span><textarea className="field min-h-16 resize-none" defaultValue="强商品心智、即时零售与价格利益点。"/></label><label className="block"><span className="eyebrow">Opportunity gap</span><textarea className="field min-h-20 resize-none" defaultValue="从促销效率之外，建立更具情绪价值和个人表达感的秋季生活叙事。"/></label></div><div className="mt-5 flex items-center justify-between border-t border-black/15 pt-4"><span className="text-[10px] text-black/40">Included in opportunity scan</span><span className="rounded-full bg-acid px-2.5 py-1 text-[10px] font-semibold">Active</span></div></section>}
      </aside>
    </div>
    <div className="mt-12 flex justify-end"><Link href="/radar" className="btn px-7 py-4">Discover Opportunities <ArrowRight size={16}/></Link></div>
  </div></>
}
