import { TSubtitleSegment } from '@/types/subtitle';

export type TSegmentTimeProps = {
    timeInSec: number;
};

export type TSegmentsProps = {
    lastSegmentRef: (node?: Element | null) => void;
    segmentEditHandler: (segmentId: number, segmentText: string) => void;
};

export type TSegmentProps = {
    segment: TSubtitleSegment;
    segmentEditHandler: (segmentId: number, segmentText: string) => void;
};

export type TSegmentSearchForm = {
    segment_search: string;
};
