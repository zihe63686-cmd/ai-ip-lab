import { creativeRoutes } from '@/data/creativeRoutes';import type { CreativeRoute,RemixType } from '@/types/creative';import type { BrandContext } from '@/types/project';import { mockResponse } from './mock';
export interface CreativeAdapter { generateCreativeRoutes(remixType:RemixType,insight:string,brandContext:BrandContext):Promise<CreativeRoute[]> }
export const creativeAdapter:CreativeAdapter={generateCreativeRoutes:(remixType,insight,brandContext)=>mockResponse(creativeRoutes[remixType].map(route=>({...route,why:insight+' / '+route.why,product:brandContext.brand+'：'+route.product})))};
export const generateCreativeRoutes=creativeAdapter.generateCreativeRoutes;
