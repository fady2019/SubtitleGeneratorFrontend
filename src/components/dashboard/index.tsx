import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Dashboard from '@/components/dashboard/Dashboard';

import { fetchSubtitles } from '@/store/slices/subtitles/actions';

import { TAppDispatch } from '@/store';

const DashboardContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(fetchSubtitles());
    }, [dispatch]);

    return <Dashboard />;
};

export default DashboardContainer;
