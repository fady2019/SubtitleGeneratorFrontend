import { TSubtitle, TSubtitleSegment } from '@/types/subtitle';

export type TStoreSubtitleSlice = {
    subtitles: Record<string, TSubtitle>;
    openedSubtitle: TSubtitle | null;
    openedSubtitleSegments: {
        segments: Array<TSubtitleSegment>;
        page: number;
        itemsPerPage: number;
        hasNext: boolean;
    };
};
