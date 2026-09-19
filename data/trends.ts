import data from './mock-data.json';
import type { Trend } from '@/types/trend';
export const lenses=['场景化','消费倾向','审美种草','换季需求','生活方式','情绪价值'];
const names=[['通勤换季','周末出游','居家焕新','初秋约会'],['低门槛尝新','理性升级','一物多用','质价比'],['柔暖材质','秋日棕色','松弛层次感','自然色系'],['温差叠穿','肌肤换季','轻户外装备','卧室保暖'],['城市漫步','一人食','轻量露营','居家慢生活'],['适我主义','松弛感','自我奖励','陪伴感']];
export const trends:Trend[]=lenses.flatMap((lens,i)=>names[i].map((name,j)=>({...data.trends[j%data.trends.length],name,lens,tag:lens+' / 天猫秋上新',signal:name+'成为秋日生活的具体需求：用户更关注适合自己的节奏与预算，品牌可通过场景化商品组合提供解决方案。',relevance:95-j*7,velocity:89-i*3+j})));
