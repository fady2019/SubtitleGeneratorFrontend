import { useDispatch } from 'react-redux';

import Form from '@/components/ui/form';
import Input from '@/components/ui/input';

import { TAppDispatch } from '@/store';
import { storeSubtitlesSliceActions } from '@/store/slices/subtitles';
import { fetchOpenedSubtitleNextSegmentsPage } from '@/store/slices/subtitles/actions';

import { TFormOnSubmit } from '@/components/ui/form/types';
import { TSegmentSearchForm } from '@/components/subtitles/subtitle-in-detail/segments/types';

const SegmentSearch = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const initialValues: TSegmentSearchForm = {
        segment_search: '',
    };

    const handleSegmentSearch: TFormOnSubmit<TSegmentSearchForm> = (value) => {
        dispatch(storeSubtitlesSliceActions.updateSubtitleSegmentSearch(value.segment_search));
        dispatch(fetchOpenedSubtitleNextSegmentsPage());
    };

    return (
        <Form className="mx-auto mt-8 max-w-lg" formConfig={{ initialValues, onSubmit: handleSegmentSearch }}>
            <Input id="segment-search" name="segment_search" placeholder="Search..." />
        </Form>
    );
};

export default SegmentSearch;
