import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '@/components/layout/header';
import Main from '@/components/layout/main';
import Footer from './components/layout/footer';
import Notification from '@/components/ui/notification';
import Spinner from '@/components/ui/spinner';

import { storeUISliceActions } from '@/store/slices/ui';
import { autoLogin } from './store/slices/auth/actions';

import { TAppStore } from '@/store/types';
import { TAppDispatch } from '@/store';

export default function App() {
    const notification = useSelector((store: TAppStore) => store.ui.notification);
    const spinner = useSelector((store: TAppStore) => store.ui.spinner);

    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(autoLogin());
    }, [dispatch]);

    const handleNotificationAutoClose = () => {
        dispatch(storeUISliceActions.setNotification(null));
    };

    return (
        <div className="invisible-scrollbar relative">
            <Notification notification={notification} onAutoClose={handleNotificationAutoClose} />
            <Spinner spinner={spinner} />

            <Header />
            <Main />
            <Footer />
        </div>
    );
}
