import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SubtitleInDetail from '@/components/subtitles/subtitle-in-detail/SubtitleInDetail';

import useNavigate from '@/routes/navigation/useNavigate';
import { fetchSubtitle } from '@/store/slices/subtitles/actions';
import { storeSubtitlesSliceActions } from '@/store/slices/subtitles';

import { TAppDispatch } from '@/store';
import { TAppStore } from '@/store/types';

const SubtitleInDetailContainer = () => {
    const prevSubtitleIdRef = useRef<string>('');
    const openedSubtitle = useSelector((store: TAppStore) => store.subtitles.openedSubtitle);

    const { subtitleId } = useParams();

    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        // if the opened subtitle set to null after having a value (probably deleted)
        if (!openedSubtitle && prevSubtitleIdRef.current) {
            navigate('/@me');
        } else if (openedSubtitle) {
            prevSubtitleIdRef.current = openedSubtitle.id;
        }
    }, [openedSubtitle]);

    useEffect(() => {
        if (!subtitleId) {
            return;
        }

        dispatch(fetchSubtitle(subtitleId, navigate));

        return () => {
            dispatch(storeSubtitlesSliceActions.setOpenedSubtitle(null));
        };
    }, []);

    return <SubtitleInDetail />;
};

export default SubtitleInDetailContainer;
