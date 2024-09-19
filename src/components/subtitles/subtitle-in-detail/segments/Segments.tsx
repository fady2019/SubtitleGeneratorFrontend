import React from 'react';
import { useSelector } from 'react-redux';

import Segment from '@/components/subtitles/subtitle-in-detail/segments/Segment';

import { TAppStore } from '@/store/types';
import { TSegmentsProps } from '@/components/subtitles/subtitle-in-detail/segments/types';

const Segments: React.FC<TSegmentsProps> = (props) => {
    const { lastSegmentRef, segmentEditHandler } = props;

    const segments = useSelector((store: TAppStore) => store.subtitles.openedSubtitleSegments.segments);

    return (
        <ul className="py-8">
            {segments.map((segment, idx) => {
                return (
                    <Segment
                        key={segment.segment_id}
                        ref={idx === segments.length - 1 ? lastSegmentRef : null}
                        segment={segment}
                        segmentEditHandler={segmentEditHandler}
                    />
                );
            })}
        </ul>
    );
};

export default Segments;
