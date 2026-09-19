import type { VideoReference } from '@/types/videoReference';

export function VideoReferenceCard({ reference }: { reference: VideoReference }) {
  const ready = reference.url.startsWith('https://');
  return <article className="panel flex flex-col p-6">
    <p className="eyebrow">{reference.category}</p>
    <h3 className="mt-4 font-semibold">{reference.title}</h3>
    <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
      <div><dt className="eyebrow">品牌</dt><dd className="mt-1">{reference.brand}</dd></div>
      <div><dt className="eyebrow">发布时间</dt><dd className="mt-1">{reference.publishDate}</dd></div>
      <div><dt className="eyebrow">发布平台</dt><dd className="mt-1">{reference.platform}</dd></div>
      <div><dt className="eyebrow">发布账号</dt><dd className="mt-1">{reference.publisher}</dd></div>
    </dl>
    <h4 className="eyebrow mt-6">为什么值得参考</h4>
    <p className="mt-2 flex-1 text-sm leading-7">{reference.description}</p>
    {ready ? <a className="btn-light mt-6 self-start" href={reference.url} target="_blank" rel="noopener noreferrer" aria-label={'查看案例：'+reference.title+'（新窗口）'}>查看案例 ↗</a> : <p className="mt-6 text-sm text-black/50">待接入真实案例</p>}
  </article>;
}
