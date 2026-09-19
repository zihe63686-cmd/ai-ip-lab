"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, FileUp, Plus, Save, Trash2, X } from "lucide-react";
import data from "@/data/mock-data.json";
import { StepBar } from "@/components/ui";

import { BrandReferences } from '@/components/brand-references';
const fieldDefs = [
  ["brand","品牌"], ["campaign","项目 / 产品"], ["industry","行业"],
  ["audience","目标人群"], ["platform","平台"], ["trendWindow","趋势时间窗"],
  ["objective","项目目标"], ["budget","预算"], ["period","项目周期"],
] as const;
const defaultCompetitor={brand:"京东",campaign:"秋日生活焕新季",strength:"强商品心智、即时零售与价格利益点。",gap:"从促销效率之外，建立更具情绪价值和个人表达感的秋季生活叙事。"};

export default function BriefPage() {
  const [project,setProject]=useState({...data.project});
  const [projectSaved,setProjectSaved]=useState(true);
  const [showCompetitor,setShowCompetitor]=useState(false);
  const [competitor,setCompetitor]=useState(defaultCompetitor);
  const [savedCompetitor,setSavedCompetitor]=useState(defaultCompetitor);
  const [competitorSaved,setCompetitorSaved]=useState(false);
  const [briefFile,setBriefFile]=useState("");

  useEffect(()=>{
    const storedProject=window.localStorage.getItem("ai-ip-lab-project");
    const storedCompetitor=window.localStorage.getItem("ai-ip-lab-competitor");
    if(storedProject) setProject(JSON.parse(storedProject));
    if(storedCompetitor){const parsed=JSON.parse(storedCompetitor);setCompetitor(parsed);setSavedCompetitor(parsed);setCompetitorSaved(true);setShowCompetitor(true)}
  },[]);

  function saveProject(){window.localStorage.setItem("ai-ip-lab-project",JSON.stringify(project));setProjectSaved(true)}
  function saveCompetitor(){window.localStorage.setItem("ai-ip-lab-competitor",JSON.stringify(competitor));setSavedCompetitor(competitor);setCompetitorSaved(true)}
  function cancelCompetitor(){setCompetitor(savedCompetitor);setShowCompetitor(false)}
  function removeCompetitor(){window.localStorage.removeItem("ai-ip-lab-competitor");setCompetitor(defaultCompetitor);setSavedCompetitor(defaultCompetitor);setCompetitorSaved(false);setShowCompetitor(false)}

  return <><StepBar current={0}/><div className="page">
    <div className="grid gap-10 border-b border-black/15 pb-10 lg:grid-cols-[1fr_400px] lg:items-end">
      <div><p className="eyebrow mb-5">新建洞察项目 / 01</p><h1 className="display">新建洞察项目</h1><p className="mt-5 text-2xl font-semibold text-clay">天猫的秋上新</p></div>
      <p className="text-lg leading-relaxed text-black/60">从一个真实商业问题出发，扫描文化信号、识别人群张力，并生成可落地的创意系统。</p>
    </div>
    <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_320px]">
      <section><div className="mb-8 flex items-center justify-between gap-4"><div><p className="eyebrow">项目定义</p><h2 className="mt-2 text-2xl font-medium">{project.campaign}</h2></div><span className={`rounded-full border px-3 py-1 text-[10px] tracking-wider ${projectSaved?"border-black/15":"border-clay text-clay"}`}>{projectSaved?"已保存":"有未保存修改"}</span></div>
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">{fieldDefs.map(([key,label],i)=><label key={key} className={key==="objective"?"md:col-span-2":""}><span className="eyebrow">{String(i+1).padStart(2,"0")} / {label}</span><input className="field" value={project[key]} onChange={e=>{setProject({...project,[key]:e.target.value});setProjectSaved(false)}}/></label>)}</div>
        <label className="mt-7 block"><span className="eyebrow">10 / 必须项与限制条件</span><textarea className="field min-h-20 resize-none" value={project.restrictions} onChange={e=>{setProject({...project,restrictions:e.target.value});setProjectSaved(false)}}/></label>
        <div className="mt-6 flex items-center gap-3"><button onClick={saveProject} disabled={projectSaved} className="btn disabled:cursor-default disabled:opacity-40"><Save size={14}/>{projectSaved?"项目已保存":"保存项目"}</button><span className="text-[10px] text-black/40">保存于当前浏览器，可在刷新后继续编辑</span></div>
      </section>
      <aside className="space-y-4"><BrandReferences/><div className="panel p-5"><p className="eyebrow mb-4">品牌资料</p><label className="grid min-h-52 cursor-pointer place-items-center border border-dashed border-black/25 bg-paper/60 p-6 text-center transition hover:border-black hover:bg-white"><input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" className="hidden" onChange={e=>setBriefFile(e.target.files?.[0]?.name??"")}/><div><FileUp className="mx-auto mb-4"/><p className="text-sm font-medium">{briefFile||"选择品牌资料"}</p><p className="mt-2 text-xs leading-relaxed text-black/45">支持 PDF、PPTX、DOCX，最大 50MB<br/>{briefFile?"已附加到当前演示会话":"点击选择文件"}</p></div></label>{briefFile&&<button onClick={()=>setBriefFile("")} className="mt-3 inline-flex items-center gap-1 text-xs text-black/50 hover:text-black"><Trash2 size={12}/>移除附件</button>}</div>
        {!showCompetitor?<button onClick={()=>setShowCompetitor(true)} className="btn-light w-full"><Plus size={14}/>添加竞品语境</button>:<section className="border border-black/20 bg-white/65 p-5 shadow-[0_18px_50px_rgba(0,0,0,.06)]"><div className="flex items-center justify-between"><div><p className="eyebrow">竞品分析 / 01</p><h3 className="mt-2 text-lg font-medium">竞品语境</h3></div><button onClick={cancelCompetitor} aria-label="取消并关闭" className="grid h-8 w-8 place-items-center rounded-full border border-black/15 transition hover:bg-black hover:text-white"><X size={14}/></button></div><div className="mt-5 space-y-5">{[["brand","竞品品牌"],["campaign","当前传播项目"],["strength","感知优势"],["gap","机会缺口"]].map(([key,label],i)=><label key={key} className="block"><span className="eyebrow">{label}</span>{i<2?<input className="field" value={competitor[key as keyof typeof competitor]} onChange={e=>{setCompetitor({...competitor,[key]:e.target.value});setCompetitorSaved(false)}}/>:<textarea className="field min-h-20 resize-none" value={competitor[key as keyof typeof competitor]} onChange={e=>{setCompetitor({...competitor,[key]:e.target.value});setCompetitorSaved(false)}}/>}</label>)}</div><div className="mt-5 border-t border-black/15 pt-4"><div className="flex items-center gap-2"><button onClick={saveCompetitor} className="btn flex-1"><Save size={13}/>{competitorSaved?"更新保存":"保存竞品语境"}</button><button onClick={cancelCompetitor} className="btn-light">取消</button></div><div className="mt-4 flex items-center justify-between"><span className="text-[10px] text-black/40">{competitorSaved?"已纳入机会扫描":"修改尚未保存"}</span>{competitorSaved&&<span className="inline-flex items-center gap-1 rounded-full bg-acid px-2.5 py-1 text-[10px] font-semibold"><Check size={11}/>已保存</span>}<button onClick={removeCompetitor} className="text-[10px] text-black/40 hover:text-clay">删除竞品</button></div></div></section>}
      </aside>
    </div>
    <div className="mt-12 flex justify-end"><Link onClick={saveProject} href="/radar" className="btn px-7 py-4">发现品牌机会 <ArrowRight size={16}/></Link></div>
  </div></>
}
