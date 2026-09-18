import { AiBadge, Header, NextAction, StepBar } from "@/components/ui";

const tension = [
  ["Observation","越来越多内容以“适合我”而非“大家都在”作为选择理由。"],
  ["Behavior","主动缩小选择范围，用个人习惯、体型和节奏筛选生活方案。"],
  ["Emotional Need","在过量标准和比较中，重新确认自己的判断是有效的。"],
  ["Tension","世界持续提供标准答案，但个体越来越不愿被同一种理想生活定义。"],
  ["Human Insight","人们真正想要的不是最流行的生活，而是最适合自己的生活。"]
];

export default function TrendPage(){return <><StepBar current={2}/><div className="page"><Header step="Trend deep dive / 03" title="适我主义" intro="不是反流行，而是把流行重新剪裁成自己的尺寸。一个由个人适配、微小确信与自主选择共同构成的新生活观。" aside="#适合比流行重要 · 18.6M views · +89% WoW"/>
  <div className="grid border-b border-black/15 lg:grid-cols-4">{[["WHAT","从“最佳答案”转向“个人适配”，价值判断从外部共识回到身体与日常。"],["WHO","18–30岁城市青年，尤其是曾经积极跟随攻略、如今开始减少比较的人群。"],["WHY NOW","算法带来的过量选择与审美同质化，让“选择适合自己”成为新的自我照顾。"],["EVIDENCE","“小个子友好”“低能量周末”“一人食尺寸”等具体适配词持续上升。"]].map(([h,p],i)=><section key={h} className={`py-7 lg:px-6 ${i?"lg:border-l lg:border-black/15":""}`}><p className="eyebrow mb-12">0{i+1} / {h}</p><p className="text-base leading-relaxed text-black/70">{p}</p></section>)}</div>
  <section className="pt-14"><div className="flex items-center justify-between"><div><p className="eyebrow mb-3">Human tension model</p><h2 className="section-title">From signal to a human truth.</h2></div><AiBadge/></div>
    <div className="mt-10">{tension.map(([label,text],i)=><div key={label} className={`grid gap-4 border-t border-black/15 py-6 md:grid-cols-[210px_1fr] ${i===4?"bg-ink px-6 text-white":""}`}><div className="flex items-center gap-3"><span className={`grid h-8 w-8 place-items-center rounded-full border text-xs ${i===4?"border-white/30":"border-black/20"}`}>{i+1}</span><span className={`eyebrow ${i===4?"!text-white/50":""}`}>{label}</span></div><p className={`${i===4?"font-serif text-3xl leading-snug md:text-5xl":"max-w-3xl text-lg leading-relaxed text-black/70"}`}>{i===4?`“${text}”`:text}</p></div>)}</div>
  </section><NextAction href="/opportunity" meta="Next / Apply the brand lens" label="Build the brand opportunity"/></div></>}
