import { videoReferences } from '@/data/videoReferences';
import type { VideoReference } from '@/types/videoReference';
export interface VideoReferencesAdapter {
  getVideoReferences(): Promise<VideoReference[]>;
}
// Replace this adapter with GET /api/video-references when the case database is ready.
export const videoReferencesAdapter: VideoReferencesAdapter = {
  getVideoReferences: async () => structuredClone(videoReferences),
};
export const getVideoReferences = () => videoReferencesAdapter.getVideoReferences();
