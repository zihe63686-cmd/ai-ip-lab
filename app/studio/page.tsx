import { Header, StepBar } from "@/components/ui";
import { Studio } from "@/components/studio";
export default function StudioPage(){return <><StepBar current={6}/><div className="page"><Header step="Content studio / 08" title="Turn the system into assets." intro="从同一个Campaign OS生成平台内容、KV和视频脚本，让每一项资产共享同一条策略脊柱。" aside="3 asset generators live · 5 integration-ready modules"/><div className="pt-4"><Studio/></div></div></>}
