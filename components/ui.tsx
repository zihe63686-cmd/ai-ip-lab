import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Header({ step, title, intro, aside }: { step: string; title: string; intro: string; aside?: string }) {
  return <div className="grid gap-8 border-b border-black/15 pb-10 pt-6 lg:grid-cols-[1fr_360px] lg:items-end">
    <div><p className="eyebrow mb-5">{step}</p><h1 className="display">{title}</h1></div>
    <div><p className="text-lg leading-relaxed text-black/65">{intro}</p>{aside && <p className="mt-5 border-l border-black pl-4 text-xs leading-relaxed text-black/45">{aside}</p>}</div>
  </div>
}

export function StepBar({ current }: { current: number }) {
  const items = ["热点", "趋势", "推荐趋势", "品牌机会", "创意路线", "整合战役", "内容资产"];
  return <div className="overflow-hidden border-y border-black/15 bg-white/40"><div className="mx-auto flex max-w-[1600px] items-center overflow-x-auto px-6 md:px-10 lg:px-14">{items.map((x,i)=><div key={x} className={`flex shrink-0 items-center py-4 text-[10px] uppercase tracking-[.14em] ${i <= current ? "text-black" : "text-black/30"}`}><span className={`mr-2 grid h-5 w-5 place-items-center rounded-full border ${i === current ? "border-black bg-ink text-white" : "border-black/20"}`}>{i+1}</span>{x}{i<items.length-1&&<ArrowRight size={12} className="mx-4 text-black/25"/>}</div>)}</div></div>
}

export function NextAction({ href, label, meta }: { href: string; label: string; meta: string }) {
  return <Link href={href} className="group mt-14 flex items-center justify-between border-y border-black bg-acid px-6 py-7 transition hover:bg-ink hover:text-white md:px-8"><span><span className="eyebrow !text-current opacity-60">{meta}</span><span className="mt-1 block font-serif text-2xl md:text-4xl">{label}</span></span><span className="grid h-12 w-12 place-items-center rounded-full border border-current transition group-hover:rotate-45"><ArrowRight/></span></Link>
}

export function AiBadge() { return <span className="inline-flex items-center gap-1 rounded-full border border-black/15 bg-white/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"><Sparkles size={11}/> AI 综合推演</span> }
