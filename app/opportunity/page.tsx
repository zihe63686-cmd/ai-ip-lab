import { AiBadge, Header, NextAction, StepBar } from "@/components/ui";
const chain=[
  ["Cultural Tension","世界给人太多标准答案。","人们在统一的好生活模板里，越来越难听见自己的判断。"],
  ["Brand Asset","天猫拥有丰富的商品与生活方式选择。","海量选择不是负担，而是帮助每个人完成自我适配的基础设施。"],
  ["Brand Role","不告诉用户应该怎么生活，而是帮助他们找到适合自己的生活方式。","从权威推荐者，转向个人生活的探索伙伴。"],
  ["Opportunity Territory","生活没有标准答案。","让天猫成为一万种真实生活都能被看见、被实现的地方。"]
];
export default function Opportunity(){return <><StepBar current={3}/><div className="page"><Header step="Brand opportunity / 04" title="Give culture a brand role." intro="趋势只有与品牌独有能力交叉时，才会成为机会。这里不是借势，而是定义天猫能在文化里承担的真实角色。"/><div className="mt-12 grid gap-3">{chain.map(([label,title,note],i)=><section key={label} className={`group grid min-h-44 gap-5 border border-black/15 p-6 md:grid-cols-[210px_1fr_330px] md:items-center ${i===3?"bg-acid":"bg-white/55"}`}><div><span className="eyebrow">0{i+1}</span><p className="mt-2 text-xs font-semibold uppercase tracking-wider">{label}</p></div><h2 className={`${i===3?"font-serif text-4xl md:text-6xl":"font-serif text-2xl md:text-4xl"}`}>{title}</h2><p className="text-sm leading-relaxed text-black/55">{note}</p></section>)}</div><div className="mt-8 flex justify-end"><AiBadge/></div><NextAction href="/creative" meta="Next / Divergent thinking" label="Generate creative routes"/></div></>}
