import Link from "next/link";
import { ArrowRight, FileUp, Plus } from "lucide-react";
import data from "@/data/mock-data.json";
import { StepBar } from "@/components/ui";

const fields = [
  ["Brand", data.project.brand], ["Campaign / Product", data.project.campaign], ["Industry", data.project.industry],
  ["Audience", data.project.audience], ["Platform", data.project.platform], ["Trend Window", data.project.trendWindow],
  ["Campaign Objective", data.project.objective], ["Budget", data.project.budget], ["Campaign Period", data.project.period],
];

export default function BriefPage() {
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
      <aside className="space-y-4"><div className="panel p-5"><p className="eyebrow mb-4">Brand brief</p><div className="grid min-h-52 place-items-center border border-dashed border-black/25 bg-paper/60 p-6 text-center"><div><FileUp className="mx-auto mb-4"/><p className="text-sm font-medium">Drop brand materials</p><p className="mt-2 text-xs leading-relaxed text-black/45">PDF, PPTX, DOCX up to 50MB<br/>Placeholder — no upload in demo</p></div></div></div><button className="btn-light w-full"><Plus size={14}/> Add competitor context</button></aside>
    </div>
    <div className="mt-12 flex justify-end"><Link href="/radar" className="btn px-7 py-4">Discover Opportunities <ArrowRight size={16}/></Link></div>
  </div></>
}
