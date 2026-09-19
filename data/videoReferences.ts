import type { VideoReference } from '@/types/videoReference';

// Local fixture containing real, publicly indexed video publications, not invented cases.
// Dates and publishers are from the linked Bilibili publication metadata.
// Descriptions are editorial recommendations for this campaign, not claimed video results.
export const videoReferences: VideoReference[] = [
  {
    id: 'tmall-home-ai-2026',
    title: '在手机上能装修了？天猫AI放我家上手体验',
    brand: '天猫',
    platform: '哔哩哔哩',
    publisher: '何同学工作室',
    publishDate: '2026.04.23',
    category: '产品场景化 / 家居生活',
    description: '参考方向：把产品体验放进具体家居需求。可为秋上新的“居家焕新”脚本提供切入点，先交代生活问题，再介绍解决工具。此片并非秋上新项目。',
    url: 'https://www.bilibili.com/video/BV1a6oYBWExa/',
    verifiedAt: '2026-09-19',
  },
  {
    id: 'tmall-lanlao-2025',
    title: '天猫 × 揽佬：来财来到双11',
    brand: '天猫',
    platform: '哔哩哔哩',
    publisher: '天猫',
    publishDate: '2025.10.21',
    category: '音乐营销 / 大促传播',
    description: '参考方向：观察品牌如何借助音乐合作形成鲜明的传播主题。适合秋上新年轻化内容的节奏与声音讨论，不作为秋季生活方式影片或实际UGC效果的证明。',
    url: 'https://www.bilibili.com/video/BV1JJWRzaE91/',
    verifiedAt: '2026-09-19',
  },
];
