"use client";
import { useState } from "react";
import { Shuffle } from "lucide-react";
import data from "@/data/mock-data.json";
import { Header, StepBar } from "@/components/ui";
import { RouteCard } from "@/components/route-card";
const remixes=["More Social","More Premium","More Crazy","More Young","More Offline","More PR-able","Lower Budget"];
export default function Creative(){const [active,setActive]=useState("More Social"); return <><StepBar current={4}/><div className="page"><Header step="Creative routes / 05" title="Four ways into autumn." intro="同一个策略领地，四条不同的创意路径。每条都能独立成为Campaign，也能被重新混合、加压或降本。"/><div className="sticky top-[68px] z-20 -mx-6 flex items-center gap-2 overflow-x-auto border-b border-black/15 bg-paper/95 px-6 py-4 backdrop-blur md:-mx-10 md:px-10 lg:-mx-14 lg:px-14"><span className="eyebrow mr-2 flex items-center gap-2"><Shuffle size={12}/> Remix</span>{remixes.map(x=><button key={x} onClick={()=>setActive(x)} className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-semibold transition ${active===x?"border-black bg-ink text-white":"border-black/15 bg-white/60 hover:border-black"}`}>{x}</button>)}<span className="ml-auto hidden text-[10px] text-black/40 lg:block">Lens active: {active}</span></div><div className="mt-8 grid gap-5 xl:grid-cols-2">{data.routes.map(r=><RouteCard key={r.id} route={r}/>)}</div></div></>}
