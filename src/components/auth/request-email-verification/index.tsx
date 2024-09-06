import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RequestEmailVerification from '@/components/auth/request-email-verification/RequestEmailVerification';

import useNavigate from '@/routes/navigation/useNavigate';
import useCountdown from '@/hooks/useCountdown';
import { requestEmailVerification } from '@/store/slices/auth/actions';

import { TAppStore } from '@/store/types';
import { TAppDispatch } from '@/store';

const RequestEmailVerificationContainer = () => {
    const userInfo = useSelector((store: TAppStore) => store.user.userInfo);

    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();

    const { count: tryAgainIn, startCount: startTryAgainCount } = useCountdown(0);

    useEffect(() => {
        if (userInfo) {
            return;
        }

        navigate('/auth/login');
    }, [userInfo, navigate]);

    const handleRequestingEmailVerification = () => {
        if (tryAgainIn > 0 || !userInfo?.id) {
            return;
        }

        dispatch(requestEmailVerification(userInfo.id));

        startTryAgainCount(30);
    };

    return (
        <RequestEmailVerification
            tryAgainIn={tryAgainIn}
            requestEmailVerificationHandler={handleRequestingEmailVerification}
        />
    );
};

export default RequestEmailVerificationContainer;
