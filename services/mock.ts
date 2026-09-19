export const mockResponse = async <T,>(value:T):Promise<T> => { await new Promise(resolve=>setTimeout(resolve,1000)); return structuredClone(value); };
export const assetPath = (path:string) => (process.env.NEXT_PUBLIC_BASE_PATH || '') + path;
