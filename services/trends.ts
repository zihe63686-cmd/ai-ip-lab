import { trends } from '@/data/trends'; import { mockResponse } from './mock';
export interface TrendsAdapter { discover(lens?:string):Promise<typeof trends> }
export const trendsAdapter:TrendsAdapter={ discover:(lens)=>mockResponse(lens?trends.filter(t=>t.lens===lens):trends) };
export const discoverTrends=trendsAdapter.discover;
