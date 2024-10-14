import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import Segments from '@/components/subtitles/subtitle-in-detail/segments/Segments';
import SegmentSearch from '@/components/subtitles/subtitle-in-detail/segments/SegmentSearch';

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
    }, [isLastSegmentReached, dispatch]);

    useEffect(() => {
        dispatch(fetchOpenedSubtitleNextSegmentsPage());

        return () => {
            dispatch(storeSubtitlesSliceActions.resetSubtitleSegments());
        };
    }, [dispatch]);

    const handleSegmentTextEditing = (segmentId: number, segmentText: string) => {
        dispatch(editOpenedSubtitleSegment(segmentId, { text: segmentText }));
    };

    return (
        <>
            <SegmentSearch />
            <Segments lastSegmentRef={lastSegmentRef} segmentEditHandler={handleSegmentTextEditing} />
        </>
    );
};

export default SegmentsContainer;
