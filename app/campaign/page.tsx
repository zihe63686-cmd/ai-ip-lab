import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CampaignTabs } from "@/components/campaign-tabs";
import { Header, StepBar } from "@/components/ui";
export default function Campaign(){return <><StepBar current={5}/><div className="page"><Header step="整合战役搭建 / 07" title="一万种秋天使用说明" intro="将核心创意拆解成贯穿社交、线下、创作者、公关与商业转化的完整体验系统。" aside="战役主张 · 一万个人，就有一万种秋天。"/><div className="pt-10"><CampaignTabs/></div><div className="mt-12 flex justify-end"><Link href="/studio" className="btn">打开内容工作室 <ArrowRight size={15}/></Link></div></div></>}
