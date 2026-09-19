import { yoyReview } from '@/data/yoyReview';import { mockResponse } from './mock';import type { YoYReview } from '@/types/yoy';
export interface YoYReviewAdapter { getYoYReview(currentProjectId:string,previousProjectId:string):Promise<YoYReview> }
// API adapter may use GET /api/projects/{projectId}/yoy-review.
export const yoyReviewAdapter:YoYReviewAdapter={getYoYReview:(currentProjectId,previousProjectId)=>mockResponse({...yoyReview,currentProjectId,previousProjectId})};
export const getYoYReview=yoyReviewAdapter.getYoYReview;
