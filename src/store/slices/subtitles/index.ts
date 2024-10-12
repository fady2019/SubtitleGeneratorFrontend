import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TStoreSubtitleSlice } from '@/store/slices/subtitles/types';
import { TSubtitle, TSubtitleSegment } from '@/types/subtitle';

const initialState: TStoreSubtitleSlice = {
    subtitles: {},
    openedSubtitle: null,
    openedSubtitleSegments: {
        page: 0,
        itemsPerPage: 20,
        segments: [],
        segmentSearch: '',
        hasNext: true,
    },
};

const subtitlesSlice = createSlice({
    name: 'subtitles',
    initialState,
    reducers: {
        putSubtitles(storeSubtitlesSlice, action: PayloadAction<Array<TSubtitle>>) {
            storeSubtitlesSlice.subtitles = {};

            for (const subtitle of action.payload) {
                storeSubtitlesSlice.subtitles[subtitle.id] = subtitle;
            }
        },
        updateSubtitle(storeSubtitlesSlice, action: PayloadAction<{ id: string; subtitle: Partial<TSubtitle> }>) {
            const { id, subtitle } = action.payload;

            const updatedSubtitle = {
                ...(storeSubtitlesSlice.subtitles[id] || {}),
                ...subtitle,
            };

            storeSubtitlesSlice.subtitles[id] = updatedSubtitle;

            if (storeSubtitlesSlice.openedSubtitle?.id === action.payload.id) {
                storeSubtitlesSlice.openedSubtitle = updatedSubtitle;
            }
        },
        deleteSubtitle(storeSubtitlesSlice, action: PayloadAction<string>) {
            delete storeSubtitlesSlice.subtitles[action.payload];

            if (storeSubtitlesSlice.openedSubtitle?.id === action.payload) {
                storeSubtitlesSlice.openedSubtitle = null;
            }
        },
        setOpenedSubtitle(storeSubtitlesSlice, action: PayloadAction<TSubtitle | null>) {
            storeSubtitlesSlice.openedSubtitle = action.payload;
        },
        addNewSubtitleSegmentsPage(
            storeSubtitlesSlice,
            action: PayloadAction<{ segments: Array<TSubtitleSegment>; hasNext: boolean }>
        ) {
            const { segments, hasNext } = action.payload;

            storeSubtitlesSlice.openedSubtitleSegments.segments.push(...segments);
            storeSubtitlesSlice.openedSubtitleSegments.page++;
            storeSubtitlesSlice.openedSubtitleSegments.hasNext = hasNext;
        },
        updateSubtitleSegmentSearch(storeSubtitlesSlice, action: PayloadAction<string>) {
            storeSubtitlesSlice.openedSubtitleSegments = {
                ...initialState.openedSubtitleSegments,
                segmentSearch: action.payload,
            };
        },
        updateSubtitleSegment(
            storeSubtitlesSlice,
            action: PayloadAction<{ id: number; segment: Partial<TSubtitleSegment> }>
        ) {
            const { id, segment } = action.payload;

            const segments = storeSubtitlesSlice.openedSubtitleSegments.segments;

            if (id < 0 || id > segments.length - 1) {
                return;
            }

            segments[id] = {
                ...segments[id],
                ...segment,
            };
        },
        resetSubtitleSegments(storeSubtitlesSlice) {
            storeSubtitlesSlice.openedSubtitleSegments = initialState.openedSubtitleSegments;
        },
    },
});

export const storeSubtitlesSliceActions = subtitlesSlice.actions;

export default subtitlesSlice;
