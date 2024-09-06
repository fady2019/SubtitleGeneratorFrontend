import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import useNavigate from '@/routes/navigation/useNavigate';
import { verifyEmail } from '@/store/slices/auth/actions';

import { TAppDispatch } from '@/store';

const VerifyEmailContainer = () => {
    const dispatch = useDispatch<TAppDispatch>();
    const navigate = useNavigate();
    const { token } = useParams();

    useEffect(() => {
        if (!token) {
            return navigate('');
        }

        dispatch(verifyEmail(token, navigate));
    }, [token, navigate, dispatch]);

    return null;
};

export default VerifyEmailContainer;
