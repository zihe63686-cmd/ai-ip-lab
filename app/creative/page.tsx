"use client";
import { useState } from "react";
import { Shuffle } from "lucide-react";
import data from "@/data/mock-data.json";
import { Header, StepBar } from "@/components/ui";
import { RouteCard } from "@/components/route-card";
const remixes=["更社交","更高级","更疯狂","更年轻","更线下","更具公关性","更低预算"];
const remixNotes:Record<string,string>={"更社交":"已强化UGC接力、评论区互动和同款人格分享。","更高级":"已提升视觉克制感、文化合作与高端内容语境。","更疯狂":"已加入更意外的城市事件与反常规传播钩子。","更年轻":"已切换为更轻、更直接的年轻人社交语言。","更线下":"已增加街区任务亭、快闪与城市路线触点。","更具公关性":"已强化趋势报告、社会实验和媒体议题。","更低预算":"已收敛为社交内容、创作者共创与轻量线下执行。"};
export default function Creative(){const [active,setActive]=useState("更社交"); return <><StepBar current={4}/><div className="page"><Header step="创意路线 / 05" title="进入秋天的四种方式。" intro="同一个策略领地，四条不同的创意路径。每条都能独立成为整合战役，也能被重新混合、加压或降本。"/><div className="sticky top-[68px] z-20 -mx-6 flex items-center gap-2 overflow-x-auto border-b border-black/15 bg-paper/95 px-6 py-4 backdrop-blur md:-mx-10 md:px-10 lg:-mx-14 lg:px-14"><span className="eyebrow mr-2 flex items-center gap-2"><Shuffle size={12}/>重新混合</span>{remixes.map(x=><button key={x} onClick={()=>setActive(x)} className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-semibold transition ${active===x?"border-black bg-ink text-white":"border-black/15 bg-white/60 hover:border-black"}`}>{x}</button>)}</div><div className="mt-5 flex items-center justify-between border border-black/15 bg-white/55 px-5 py-4"><p className="text-sm text-black/65">{remixNotes[active]}</p><span className="ml-4 shrink-0 rounded-full bg-acid px-3 py-1 text-[10px] font-semibold">当前方向：{active}</span></div><div className="mt-8 grid gap-5 xl:grid-cols-2">{data.routes.map(r=><RouteCard key={r.id} route={r}/>)}</div></div></>}
