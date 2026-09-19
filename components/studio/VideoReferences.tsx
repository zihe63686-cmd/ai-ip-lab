"use client";
import { useEffect, useState } from 'react';
import { getVideoReferences } from '@/services/videoReferences';
import type { VideoReference } from '@/types/videoReference';
import { VideoReferenceCard } from './VideoReferenceCard';

export function VideoReferences() {
  const [references, setReferences] = useState<VideoReference[]>([]);
  const [state, setState] = useState<'loading'|'ready'|'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let alive = true;
    setState('loading');
    getVideoReferences().then(items => { if (alive) { setReferences(items); setState('ready'); } })
      .catch(() => { if (alive) setState('error'); });
    return () => { alive = false; };
  }, [attempt]);
  return <section className="mt-8" aria-labelledby="video-references-title">
    <h2 id="video-references-title">04 视频参考 / Video References</h2>
    <p className="my-4 text-sm leading-7 text-black/60">公开发布的视频案例，供创意方向讨论；不是本项目生成的视频。日期为所链接视频的发布时间，查看案例将在新窗口打开发布平台。</p>
    {state === 'loading' && <p role="status">正在读取视频参考…</p>}
    {state === 'error' && <div><p role="alert">视频参考暂时无法读取。</p><button className="btn-light mt-3" onClick={() => setAttempt(n => n+1)}>重试</button></div>}
    {state === 'ready' && (references.length ? <div className="grid gap-5 md:grid-cols-2">{references.map(reference => <VideoReferenceCard key={reference.id} reference={reference}/>)}</div> : <p>待接入真实案例</p>)}
  </section>;
}
