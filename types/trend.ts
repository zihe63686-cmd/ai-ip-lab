import data from '@/data/mock-data.json';
export type Trend = typeof data.trends[number] & { lens:string };
