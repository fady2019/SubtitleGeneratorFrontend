import React from 'react';

import EditableText from '@/components/ui/editable-text';
import SegmentTime from '@/components/subtitles/subtitle-in-detail/segments/SegmentTime';

import { TSegmentProps } from '@/components/subtitles/subtitle-in-detail/segments/types';

import { FaLongArrowAltRight } from 'react-icons/fa';

const Segment = React.forwardRef<HTMLLIElement, TSegmentProps>((props, ref) => {
    const { segment, segmentEditHandler } = props;

    return (
        <li ref={ref} className="py-2">
            <span className="flex items-center gap-2 text-amber-500">
                <SegmentTime timeInSec={segment.start} />
                <FaLongArrowAltRight />
                <SegmentTime timeInSec={segment.end} />
            </span>

            <div className="inline-block rounded bg-violet-950">
                <EditableText
                    initText={segment.text}
                    textUpdateHandler={segmentEditHandler.bind(null, segment.segment_id)}
                />
            </div>
        </li>
    );
});

export default Segment;
