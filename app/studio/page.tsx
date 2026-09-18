import { Header, StepBar } from "@/components/ui";
import { Studio } from "@/components/studio";
export default function StudioPage(){return <><StepBar current={6}/><div className="page"><Header step="内容工作室 / 08" title="把创意系统，变成真实资产。" intro="从同一套整合战役系统生成社交内容、主视觉和视频脚本，让每一项资产共享同一条策略脊柱。" aside="3个核心生成器 · 5个扩展资产模块"/><div className="pt-4"><Studio/></div></div></>}
