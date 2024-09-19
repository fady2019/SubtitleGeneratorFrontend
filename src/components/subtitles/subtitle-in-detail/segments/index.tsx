import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import Segments from './Segments';

import { storeSubtitlesSliceActions } from '@/store/slices/subtitles';
import { editOpenedSubtitleSegment, fetchOpenedSubtitleNextSegmentsPage } from '@/store/slices/subtitles/actions';

import { TAppDispatch } from '@/store';

const SegmentsContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const { ref: lastSegmentRef, inView: isLastSegmentReached } = useInView({
        triggerOnce: true,
        threshold: 0,
        rootMargin: '500px',
    });

    useEffect(() => {
        if (!isLastSegmentReached) {
            return;
        }

        dispatch(fetchOpenedSubtitleNextSegmentsPage());
    }, [isLastSegmentReached]);

    useEffect(() => {
        dispatch(fetchOpenedSubtitleNextSegmentsPage());

        return () => {
            dispatch(storeSubtitlesSliceActions.resetSubtitleSegments());
        };
    }, []);

    const handleSegmentTextEditing = (segmentId: number, segmentText: string) => {
        dispatch(editOpenedSubtitleSegment(segmentId, { text: segmentText }));
    };

    return <Segments lastSegmentRef={lastSegmentRef} segmentEditHandler={handleSegmentTextEditing} />;
};

export default SegmentsContainer;
